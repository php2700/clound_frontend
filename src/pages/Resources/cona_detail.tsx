import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaHome, FaArrowLeft, FaCheck, FaBolt, FaChartLine, FaGlobe } from 'react-icons/fa';
import { FaArrowLeftLong } from 'react-icons/fa6';
import Footer from "@/components/Footer";
import Header from '@/components/Header';
 
const ProductsIcon = () => ( <svg className="h-8 w-8 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}> <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9.75l-9-5.25" /> </svg> );
const ConversionIcon = () => ( <svg className="h-8 w-8 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}> <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" /> </svg> );
const UsersIcon = () => ( <svg className="h-8 w-8 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}> <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" /> </svg> );
const OrdersIcon = () => ( <svg className="h-8 w-8 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}> <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /> </svg> );
const iconComponents = { products: ProductsIcon, conversion: ConversionIcon, users: UsersIcon, orders: OrdersIcon, };
const SalesforceLogo = () => ( <svg className="h-8" viewBox="0 0 100 70" xmlns="http://www.w3.org/2000/svg"> <path fill="#00A1E0" d="M99.8,26.5c-0.5-2.8-2-5.3-4.4-7.2c-2.4-1.9-5.4-2.9-8.5-2.9c-3.1,0-6,0.9-8.5,2.8c-2.5,1.9-4.2,4.6-4.9,7.8 C71,21,67.5,17.9,63.2,16c-4.4-1.9-9.2-2.3-13.8-1.2c-4.6,1.1-8.7,3.6-11.8,7.3c-3.1,3.7-4.9,8.4-4.9,13.3c0,3,0.5,5.8,1.6,8.5 c1.1,2.7,2.7,5,4.8,6.8c2.1,1.8,4.6,3.1,7.4,3.7c2.8,0.6,5.6,0.6,8.4,0c2.8-0.6,5.3-1.9,7.4-3.7c1.9-1.6,3.3-3.6,4.3-5.9 c0.9-2.3,1.4-4.7,1.4-7.3c0-0.8-0.1-1.6-0.1-2.5c2.6,2.3,5.8,3.5,9.3,3.5c3.2,0,6.1-1,8.5-2.9c2.4-1.9,4-4.5,4.4-7.5 C100,28.2,99.9,27.3,99.8,26.5z"/> </svg> );
 
export const ConaService = () => {
  const navigate = useNavigate()
    const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  
    const [lastScrollY, setLastScrollY] = useState(0);;
  const [formData, setFormData] = useState({ firstName: '', lastName: '', company: '', email: '', country: '', message: '', agreeToEmails: false });
 
  const handleFormChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: type === 'checkbox' ? checked : value }));
  };
 
  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    alert('Thank you for your message!');
  };
 
  // --- All dynamic data for sections ---
  const resultsData = {
    title: "Delivering exceptional results",
    stats: [
      { icon: 'products', value: '100,000,000+', label: 'Products sold' },
      { icon: 'conversion', value: '>50%', label: 'Daily conversion rate' },
      { icon: 'users', value: '120,000+', label: 'Active users' },
      { icon: 'orders', value: '65,000+', label: 'Orders per week' },
    ]
  };
  const solutionsAndBenefitsData = {
    youtubeVideoId: "XyfRqxt5aK0",
    solutionsTitle: "Salesforce solutions",
    solutionItems: [
      { text: "Commerce Cloud", checked: true }, { text: "Consumer Goods Cloud", checked: true }, { text: "Marketing Cloud", checked: true }, { text: "Service Cloud", checked: true }, { text: "Service Lightning", checked: true }, { text: "SAP Integration", checked: false }, { text: "Copado", checked: false },
    ],
    benefitCards: [
      { icon: "bolt", title: "Driving higher conversions with modern user experience", description: "provides a unified product catalog with hyper-personalized content for each customer segment.", },
      { icon: "revenue", title: "Increased revenue generation", description: "automation of recurring orders simplifies inventory management, while enhanced real-time business insights increases data visibility and improves decision making.", },
      { icon: "expansion", title: "Scalable architecture enabling rapid global expansion", description: "Punchout integrations streamline ordering and support expansion into new markets.", },
    ],
  };
  const testimonialsData = [
    { name: "Samantha Mitchell", title: "Chief Digital Officer", logoSrc: "/cona7.png", quote: `"From the very beginning, we had a one team approach. Cloudgaia brought a strategic vision that helped us plan for success, achieve our goals and support our North American Bottling System and Customers commercial growth plans."` },
    { name: "Felippe Ramos", title: "Salesforce Specialist", logoSrc: "/logo-color.svg", quote: `"We love tackling tough challenges, and CONA Services presented us with an exciting one. We delved into every aspect of their business and worked closely to understand their specific needs. We are proud to say that together we designed a strategy that is transforming the shopping experience for all bottlers."` }
  ];
  const benefitIcons = { bolt: FaBolt, revenue: FaChartLine, expansion: FaGlobe, };
  const getEmbedUrl = (url) => {
    try {
      const urlObj = new URL(url); let videoId = '';
      if (urlObj.hostname === 'youtu.be') { videoId = urlObj.pathname.slice(1); }
      else if (urlObj.hostname === 'www.youtube.com' || urlObj.hostname === 'youtube.com') { videoId = urlObj.searchParams.get('v'); }
      if (videoId) { return `https://www.youtube.com/embed/${videoId}`; }
    } catch (e) { console.error("Invalid URL", e); }
    return `https://www.youtube.com/embed/dQw4w9WgXcQ`;
  };
  const mainVideoEmbedUrl = getEmbedUrl(solutionsAndBenefitsData.youtubeVideoId);
  const featuredVideoId = "XyfRqxt5aK0"; // Assuming a different video ID for this section

    useEffect(() => {
      const handleScroll = () => {
        const currentScrollY = window.scrollY;
        setIsHeaderVisible(currentScrollY <= lastScrollY);
        setLastScrollY(currentScrollY);
      };
  
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);
 
  return (
    // Top-level wrapper
    <>
       <div className="relative min-h-screen">
        <div
          className={`fixed top-0 left-0 w-full transition-transform duration-300 ease-in-out z-50 ${
            isHeaderVisible ? "translate-y-6" : "-translate-y-full"
          }`}
        >
          <Header />
        </div>
      {/* Main container for all CENTERED content */}
      <div className="bg-white max-w-6xl mx-auto mt-10 p-4 sm:p-8">
        {/* Navigation & Breadcrumb */}
        <nav className="flex items-center justify-between mb-6">
          <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-gray-600 hover:text-teal-600">
            <FaArrowLeft /><span>Back</span>
          </button>
          <div className="text-sm text-gray-500 flex items-center gap-2">
            <Link to="/" className="hover:text-teal-600"><FaHome /></Link>
            <span>/</span><span className="font-semibold text-gray-700">CONA Services</span>
          </div>
        </nav>
        {/* Header Section */}
        <header className="pb-8 border-t pt-6">
          <div className="font-medium text-gray-800 mb-2.5"><span>🇺🇸 CONA Services - US</span></div>
          <h1 className="text-4xl md:text-5xl font-bold text-teal-600 leading-tight mb-5">Empowering customer engagement with a scalable B2B Commerce platform</h1>
          <div className="flex items-center gap-3 mb-5"><SalesforceLogo /><span className="text-gray-700 font-medium">B2B Commerce | Marketing Cloud</span></div>
          <p className="text-lg text-gray-600 max-w-4xl">Unlocking the potential of Salesforce by refreshing myCoke, a scalable and digital platform designed to keep B2B customers stocked with a variety of iconic Coca-Cola products.</p>
        </header>
        {/* Main Content Grid */}
        <main className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
          <div className="bg-white p-8 rounded-lg border border-gray-200 flex flex-col justify-center"><span className="text-3xl mb-4">ℹ️</span><h2 className="text-3xl font-bold text-gray-800 mb-4">About CONA Services</h2><p className="text-gray-600 leading-relaxed mb-4">CONA Services is the leading IT support organization for the <strong className="font-semibold">11 largest Coca-Cola bottlers in North America.</strong> They provide solutions for bottlers to optimally manage their day-to-day business and refresh the world.</p><p className="text-gray-600 leading-relaxed">We partnered with the CONA Digital Office (CDO), an interdisciplinary and inter-agency team of product and engineering specialists, to work as one team and upgrade their B2B eCommerce platform with a focus on customer experience.</p></div>
          <div className="rounded-lg overflow-hidden"><img src="/stories-cona.webp" alt="Store owners with a tablet" className="w-full h-full object-cover"/></div>
          <div className="bg-[#ff83a9] p-8 rounded-lg"><span className="text-3xl mb-4">🎯</span><h2 className="text-3xl font-bold text-[#f9f9f9] mb-4">The Challenge</h2><p className="text-[#f9f9f9] leading-relaxed">CONA Services set out to transform its customer engagement platform through Salesforce technology. The goal: deliver a seamless, hyper-personalized buying experience for the 11 largest Coca-Cola bottlers, enabling them to streamline operations, boost loyalty, and drive growth across the region.</p></div>
          <div className="bg-teal-600 text-white p-8 rounded-lg"><span className="text-3xl mb-4">✨</span><h2 className="text-3xl font-bold mb-4">The Solution</h2><p className="text-teal-100 leading-relaxed mb-4">Together with Cloudgaala and Salesforce, CONA Services enhanced its B2B Commerce strategy through myCoke — one of the world's largest implementations of Salesforce B2B Commerce on Lightning.</p><p className="text-teal-100 leading-relaxed mb-4">Built with scalability, automation, and data-driven insights at its core, the platform redefined how bottlers and customers do business.</p><p className="text-teal-100 leading-relaxed">myCoke: a scalable platform includes multiple storefronts, hyper-personalized experiences, automated recurring orders, optimized reporting, and more.</p></div>
        </main>
        {/* Results Section */}
        <section className="mt-12">
          <div className="bg-gray-800 text-white text-center p-6 rounded-lg shadow-lg"><h2 className="text-2xl md:text-3xl font-medium flex items-center justify-center gap-4"><span>✧</span>{resultsData.title}</h2></div>
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {resultsData.stats.map((stat) => { const Icon = iconComponents[stat.icon]; return (<div key={stat.label} className="bg-white border border-gray-200 rounded-lg p-6 text-center flex flex-col items-center justify-start shadow-sm hover:shadow-lg transition-shadow">{Icon && <Icon />}<p className="mt-4 text-2xl md:text-3xl font-bold text-teal-600">{stat.value}</p><p className="mt-1 text-sm md:text-base text-gray-500">{stat.label}</p></div>);})}
          </div>
        </section>
        {/* Coca-Cola Video Section */}
        <section className="mt-12">
          <div className="relative rounded-lg shadow-xl overflow-hidden">
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}><iframe className="absolute top-0 left-0 w-full h-full" src={mainVideoEmbedUrl} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div>
            <div className="absolute top-0 right-0 p-4 md:p-6 bg-gradient-to-l from-black/30 to-transparent rounded-tr-lg"><img src="/cloudgaia-logo.png" alt="Cloudgaia Logo" className="h-8 md:h-10"/></div>
          </div>
        </section>
        {/* Solutions and Benefits Section */}
        <section className="mt-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="relative w-full rounded-lg overflow-hidden shadow-lg" style={{ paddingBottom: '56.25%' }}><iframe className="absolute top-0 left-0 w-full h-full" src={`${getEmbedUrl(featuredVideoId)}?autoplay=1&mute=1&loop=1&playlist=${featuredVideoId}&controls=1`} title="Featured YouTube video" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div>
            <div className="bg-teal-600 text-white p-8 rounded-lg shadow-lg"><h2 className="text-3xl font-bold">{solutionsAndBenefitsData.solutionsTitle}</h2><ul className="mt-6 space-y-3">{solutionsAndBenefitsData.solutionItems.map((item) => (<li key={item.text} className="flex items-center text-lg">{item.checked ? ( <FaCheck className="mr-3 text-white flex-shrink-0" /> ) : ( <div className="w-[14px] mr-3 flex-shrink-0"></div> )}<span>{item.text}</span></li>))}</ul></div>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {solutionsAndBenefitsData.benefitCards.map((card) => { const Icon = benefitIcons[card.icon]; return (<div key={card.title} className="bg-gray-800 text-gray-300 p-8 rounded-lg shadow-lg">{Icon && <Icon className="text-pink-500 text-4xl mb-5" />}<h3 className="text-2xl font-bold text-white mb-3">{card.title}</h3><p className="leading-relaxed">{card.description}</p></div>);})}
          </div>
        </section>
        {/* Testimonials Section */}
        <section className="mt-16 pt-12 border-t border-gray-200">
          <div className="space-y-16">
            {testimonialsData.map((testimonial, index) => (<div key={index} className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center"><blockquote className="md:col-span-2 text-gray-600 text-lg md:text-xl leading-relaxed"><p>{testimonial.quote}</p></blockquote><div className="md:col-span-1 md:pl-8"><div className="font-bold text-xl text-gray-800">{testimonial.name}</div><div className="text-gray-500">{testimonial.title}</div><img src={testimonial.logoSrc} alt={`${testimonial.name}'s company logo`} className="mt-4 h-8"/></div></div>))}
          </div>
        </section>
      </div>
 
      {/* --- FULL-WIDTH CONTACT FORM SECTION --- */}
      <section className="relative py-20 text-white bg-gray-900">
        <div className="absolute inset-0 z-0">
          <img src="/conabannerback.webp" alt="Abstract background" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <div className="text-center mb-12"><h2 className="text-4xl md:text-5xl font-bold">Want to see how we can help you scale your B2B commerce?</h2><p className="mt-4 text-2xl">Let's talk.</p></div>
          <form onSubmit={handleFormSubmit} className="max-w-2xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input type="text" name="firstName" placeholder="First Name*" value={formData.firstName} onChange={handleFormChange} required className="bg-white/90 text-gray-900 p-3 rounded-md border-none focus:ring-2 focus:ring-pink-500" />
              <input type="text" name="lastName" placeholder="Last Name*" value={formData.lastName} onChange={handleFormChange} required className="bg-white/90 text-gray-900 p-3 rounded-md border-none focus:ring-2 focus:ring-pink-500" />
              <input type="text" name="company" placeholder="Company*" value={formData.company} onChange={handleFormChange} required className="bg-white/90 text-gray-900 p-3 rounded-md border-none focus:ring-2 focus:ring-pink-500" />
              <input type="email" name="email" placeholder="Email*" value={formData.email} onChange={handleFormChange} required className="bg-white/90 text-gray-900 p-3 rounded-md border-none focus:ring-2 focus:ring-pink-500" />
              <select name="country" value={formData.country} onChange={handleFormChange} required className="md:col-span-2 bg-white/90 text-gray-900 p-3 rounded-md border-none focus:ring-2 focus:ring-pink-500">
                <option value="">Country*</option><option value="US">United States</option><option value="CA">Canada</option><option value="IN">India</option><option value="Other">Other</option>
              </select>
              <textarea name="message" placeholder="Message*" value={formData.message} onChange={handleFormChange} rows="5" required className="md:col-span-2 bg-white/90 text-gray-900 p-3 rounded-md border-none focus:ring-2 focus:ring-pink-500"></textarea>
            </div>
            <div className="mt-6 text-xs text-gray-300">By continuing, I confirm that I have read and agree to the <a href="/privacy" className="underline hover:text-white">Privacy Policy</a>.</div>
            <div className="mt-4 flex items-center"><input type="checkbox" id="agreeToEmails" name="agreeToEmails" checked={formData.agreeToEmails} onChange={handleFormChange} className="h-4 w-4 rounded text-pink-600 focus:ring-pink-500" /><label htmlFor="agreeToEmails" className="ml-2 text-sm text-gray-300">I agree to receive emails from CloudGaia with updates on services, events, and alerts. I can unsubscribe at any time.</label></div>
            <div className="mt-6 flex flex-col md:flex-row items-center justify-between gap-6">
               <div className="bg-gray-100 p-2 border border-gray-300 rounded-sm w-full md:w-auto"><div className="flex items-center gap-4"><input type="checkbox" id="recaptcha" className="h-6 w-6" /><label htmlFor="recaptcha" className="text-gray-800">I'm not a robot</label><img src="https://www.gstatic.com/recaptcha/api2/logo_48.png" alt="reCAPTCHA logo" className="h-8"/></div></div>
               <button type="submit" className="bg-pink-500 text-white font-bold py-3 px-10 rounded-full hover:bg-pink-600 transition-colors w-full md:w-auto">Send</button>
            </div>
          </form>
        </div>
      </section>
 
      {/* --- CENTERED Back to Cases Link --- */}
      <div className="text-center my-12 bg-white">
        <Link to="/customer-stories" className="inline-flex items-center gap-3 text-gray-700 font-semibold hover:text-black">
          <span className="bg-yellow-400 text-black h-8 w-8 rounded-full flex items-center justify-center"><FaArrowLeftLong /></span>
          Back to cases
        </Link>
      </div>
 
      {/* --- FULL-WIDTH FOOTER --- */}
      <Footer />
      </div>
    </>
  );
};
 