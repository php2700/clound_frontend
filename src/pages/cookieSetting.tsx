const API_BASE_URL = import.meta.env.VITE_APP_API_BASE_URL;
import axios from "axios";
import { useEffect, useState } from "react";

export const CookieSetting = ({ closeModel }) => {
  const [cookieData, setCookieData] = useState("");

  const fetchPrivacyPolicy = async () => {
    try {
      await axios
        .get(`${API_BASE_URL}api/user/cookie-setting`)
        .then((res) => {
          console.log(res?.data);
          setCookieData(res?.data?.cookiesettingData?.description);
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchPrivacyPolicy();
  }, []);
  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="relative bg-white rounded-xl p-6 max-w-3xl w-full shadow-lg overflow-auto max-h-[80vh]">
        <button
          onClick={closeModel}
          className="absolute top-2 right-2 text-gray-500 hover:text-black text-2xl font-bold"
        >
          &times;
        </button>

        <div dangerouslySetInnerHTML={{ __html: cookieData }}></div>
      </div>
    </div>
  );
};
