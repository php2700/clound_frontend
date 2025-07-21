import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const DynamicTitle = () => {
  const location = useLocation();

  const titles = {
    "/": "Home - CodeScience",
    "/contact": "Contact | speak with salesforce Experts - CodeScience",
    "/company":"about CodeScience | salesforce Experts & Digital Transformation Leaders",
    "/career" :"join CodeScience | Benefits,Career Growth & Work Flexibility",
    "/industries":"CodeScience industries | Custom salesforce solution for Various ...",
    "/Services/all_services":"CodeScience Services | salesforce Implementation , Optimization & ...",
    "/Services/implementation":"salesforce Implementation Services | CodeScience ",
    "/Services/optimization":"salesforce Optimization Services | CodeScience",
    "/Services/innovation":"salesforce Innovation | CodeScience",
    "/Services/growth":"Accelerate Your Growth with salesforce | CodeScience",
    "/resources/customer-stories":"Success Stories | Business Empowered by CodeScience & salesforce",
    "/security":"Privacy Policy - CodeScience",
    "/integrity":"integrity line -CodeScience ",
    "/customer-stories/commerce-cloud-implementation":"Doordash Success Story | Efficient Management with salesforce",
    "/customer-stories/education-cloud":"Kaplan - USA -CodeScience",
    "/customer-stories/schneider-electric":"Schneider Electric Success Story | Transformation with salesforce",
    "/customer-stories/blue-cross":"Blue Cross Idaho Success Story | scalability with salesforce"
  };

  const currentTitle = titles[location.pathname] || "CodeScience";

  return (
    <Helmet>
      <title>{currentTitle}</title>
    </Helmet>
  );
};

export default DynamicTitle;
