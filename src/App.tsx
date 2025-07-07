import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
// import  Layout  from "@/components/layout";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Index from "./pages/Index";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

// Services
import Services from "./pages/Services/all_services";
import Implementation from "./pages/Services/implementation";
import Optimization from "./pages/Services/optimization";
import Innovation from "./pages/Services/innovation";
import Growth from "./pages/Services/growth";

// Single Pages
import Industries from "./pages/industry";
import Company from "./pages/company";
import { Blog } from "./pages/Resources/blog";
import { Customer_Stories } from "./pages/Resources/customer-stories";
import { Ealde_Detail } from "./pages/Resources/ealde_detail";
import { Careers } from "./pages/Careers";
import { Dexter_Detail } from "./pages/Resources/dexter_detail";
import { Gador_Detail } from "./pages/Resources/gador_detail";
import { ConaService } from "./pages/Resources/cona_detail";
import ScrollToTop from "./components/ScrollToTop";
import "react-toastify/dist/ReactToastify.css";
import { Blog_Detail } from "./pages/Resources/blog_detail";
import IntegritySection from "./pages/IntegritySection";
import IntegrityForm from "./pages/IntegrityForm";
import Privacypolicy from "./pages/Privacypolicy";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
      <ScrollToTop />
        <Routes>
          {/* <Route path="/" element={<Layout />}> */}
  <Route index element={<Index />} />
{/* </Route> */}

          <Route path="/contact" element={<Contact />} />

          {/* Services */}
          <Route path="/services/all_services" element={<Services />} />
          <Route path="/services/implementation" element={<Implementation />} />
          <Route path="/services/optimization" element={<Optimization />} />
          <Route path="/services/innovation" element={<Innovation />} />
          <Route path="/services/growth" element={<Growth />} />

          {/* {Resources} */}
         <Route path="/resources/blog" element={<Blog/>} />
         <Route path="/resources/customer-stories" element={< Customer_Stories/>} />
         <Route path="/customer-stories/ealde-detail" element={< Ealde_Detail/>} />
         <Route path="/customer-stories/dexter-detail" element={< Dexter_Detail/>} />
         <Route path="/customer-stories/gador-detail" element={< Gador_Detail/>} />
         <Route path="/customer-stories/cona-detail" element={<ConaService />} />
         <Route path="/customer-stories" element={< Customer_Stories/>} />
          <Route path="/blog-detail/:_id" element={< Blog_Detail/>} />

         {/* Career */}
         <Route path="/career" element={< Careers/>} />


          {/* Single Pages */}
          <Route path="/industries" element={<Industries />} />
          <Route path="/company" element={<Company />} />
          <Route path="/integrity" element={<IntegritySection />} />
          <Route path="/form" element={<IntegrityForm />} />
          {/* <Route path="/security" element={< privacy />} /> */}
          <Route path="/security" element={< Privacypolicy />} />


          {/* Detail Pages */}

          {/* Catch-all route for 404 Not Found */}


          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
