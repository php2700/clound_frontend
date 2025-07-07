import Footer from "@/components/Footer";
import Header from "@/components/Header";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
const API_BASE_URL = import.meta.env.VITE_APP_API_BASE_URL;
import CommentIcon from "@mui/icons-material/Comment";

export const Blog_Detail = () => {
  const navigate = useNavigate();
  const { _id } = useParams();
  const [blogData, setBlogData] = useState<BlogType | null>(null);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [formattedDate, setFormattedDate] = useState("");
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [commentData, setCommentData] = useState([]);
  const [commentOpen, setCommentOpen] = useState(false);
  const [reload, setReload] = useState(false);
  const [page, setPage] = useState(1);
  const pageSize = 5;

  type BlogType = {
    _id: string;
    title: string;
    description?: string;
    image?: string;
    createdAt?: string;
    content: string;
  };

  const getBlogDetail = () => {
    axios
      .get(`${API_BASE_URL}api/user/blog-detail/${_id}`)
      .then((res) => {
        console.log(res?.data?.blogDetail);
        setBlogData(res?.data?.blogDetail);
        const date = new Date(res?.data?.blogDetail?.createdAt);
        const formatted = date.toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        });
        setFormattedDate(formatted);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getCommentList = () => {
    axios
      .get(`${API_BASE_URL}api/user/comment-list/${_id}`)
      .then((res) => {
        setCommentData(res?.data?.blogCommentData?.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getCommentList();
    setReload(false);
  }, [_id, reload]);

  useEffect(() => {
    getBlogDetail();
  }, [_id]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsHeaderVisible(currentScrollY <= lastScrollY);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const handleBlog = () => {
    navigate("/resources/blog");
  };

  const handlesubmit = (e) => {
    e.preventDefault();

    const commentData = { name, comment, blogId: _id };
    axios
      .post(`${API_BASE_URL}api/user/blog-comment`, commentData, {})
      .then((res) => {
        setReload(true);
        setName("");
        setComment("");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleComment = () => {
    setCommentOpen(!commentOpen);
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <div
        className="absolute top-0 right-0 w-72 h-72 bg-[#008093]"
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%)" }}
        aria-hidden="true"
      />
      <div
        className={`fixed top-0 left-0 w-full transition-transform duration-300 ease-in-out z-50 ${
          isHeaderVisible ? "translate-y-6" : "-translate-y-full"
        }`}
      >
        <Header />
      </div>
      <div className="bg-[#f9f9f9]">
        <div className="container mx-auto pt-[120px] px-4 md:px-6 ">
          <div className="px-6 py-20 md:px-10">
            <div className="flex items-center text-sm  text-[#474747] mt-10">
              <Link to="/">
                <img
                  src="/bread-home.svg"
                  className="mr-1 text-xl cursor-pointer"
                  aria-hidden="true"
                />
              </Link>
              <span className="mx-1 text-base font-bold">&nbsp;/</span>
              <span
                className="text-base font-bold cursor-pointer ml-1"
                onClick={handleBlog}
              >
                &nbsp;Blog
              </span>
              <span className="mx-1 text-base font-bold">&nbsp;/</span>
              <span className="mx-1 text-base font-bold">
                &nbsp; {blogData && blogData?.title}
              </span>
            </div>
            <h1 className="mt-4 text-6xl tracking-tight font-bold text-[#008093]  transition-transform">
              {blogData && blogData?.title}
            </h1>
            <div
              style={{ lineHeight: "1.2em" }}
              className="mt-5 text-2xl text-[#474747] tracking-tight "
            >
              {formattedDate}
            </div>
          </div>
        </div>
      </div>
      <div className="h-[500px] overflow-hidden">
        <img
          src={`${API_BASE_URL}${blogData?.image}`}
          className="h-full w-full object-cover"
        />
      </div>

      <div className="container mx-auto pt-[10px] max-w-5xl px-10 md:px-10 ">
        <div className="px-10 py-10 md:px-10">
          <div dangerouslySetInnerHTML={{ __html: blogData?.content || "" }} />
        </div>
      </div>

      <div className="container mx-auto pt-[10px] max-w-5xl px-10 md:px-10">
        <div className="px-10 py-10 md:px-10">
          <div className="my-5 text-2xl font-semibold text-[#474747]">
            Comments
          </div>
          <form onSubmit={handlesubmit} className="space-y-4">
            <input
              type="text"
              required
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border border-[#474747] rounded-md p-3  "
            />
            <input
              required
              placeholder="Comment"
              value={comment}
              onChange={(e) => {
                const comment = e.target.value;
                if (comment?.length < 100) {
                  setComment(e.target.value);
                }
              }}
              className="w-full border border-[#474747] rounded-md p-3 resize-none"
            />
            <div className="text-right">
              <button
                type="submit"
                className="bg-[#008093] text-white px-6 py-2 rounded-md hover:bg-[#006f7d] transition-colors"
              >
                Post Comment
              </button>
            </div>
          </form>
          {commentData.length > 0 ? (
            commentData
              .slice((page - 1) * pageSize, page * pageSize)
              .map((ele, idx) => (
                <div key={idx} className="flex items-start space-x-4  my-5">
                  <div className="text-md text-[#474747]">
                    <div className="font-semibold text-md  text-[#008093]">
                      {ele.name}
                    </div>
                    <div
                      style={{ lineHeight: "1em" }}
                      className="text-#474747] text-md"
                    >
                      {" "}
                      {ele.comment}
                    </div>
                  </div>
                </div>
              ))
          ) : (
            <p className="text-right text-[#474747]">No comments yet.</p>
          )}
          {commentData?.length > pageSize && (
            <div className="flex justify-end space-x-2">
              <button
                onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
                disabled={page === 1}
                className="px-3 py-1 bg-gray-200 rounded-lg disabled:opacity-50"
              >
                Prev
              </button>
              <button
                onClick={() =>
                  setPage((prev) =>
                    prev < Math.ceil(commentData.length / pageSize)
                      ? prev + 1
                      : prev
                  )
                }
                disabled={page >= Math.ceil(commentData.length / pageSize)}
                className="px-3 py-1 bg-gray-200 rounded-lg disabled:opacity-50"
              >
                Next
              </button>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};
