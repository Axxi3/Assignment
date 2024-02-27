import "./App.css";
import { Navbar } from "./components/Navbar";
import { Check } from "lucide-react";
import { Info,ChevronDown  } from "lucide-react";
import ToolsNavbar from "./components/ToolsNavbar";
import { Breadcrumbs } from "./components/BreadCrumbs";
import LongCards from "./components/LongCards"; 
import { Trophy } from 'lucide-react'
import DealsCard from "./components/DealsCard";
import DealsContainer from "./components/DealsContainer";
import OffersSignup from "./components/OffersSignup";
import { FooterFour } from "./components/Footer";
function App() {
  const Data=[
    {
        "Product Name":"WixPro 72-Inch Responsive Website Builder",
        "Product Description":"- Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)",
        "Main Highlights":"[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.",
        "Rating":"9.8",
        "Rating tag":"Exceptional",
        "stars":5,
        "Tag Name":"Best Choice",
        "Tag Logo":Trophy
        
    },
    {
        "Product Name":"SiteCraft 68-Inch Ultimate Web Design Studio",
        "Product Description":"- Advanced Site Creation Toolkit, Intuitive Drag-and-Drop Editor for Dynamic Websites and E-commerce Platforms (Green/White)",
        "Main Highlights":"[What You Get]: Gain access to the SiteCraft design studio, featuring a robust selection of design elements, SEO optimization tools, and e-commerce integrations.",
        "Rating":"9.5",
        "Rating tag":"Excellent",
        "stars":4,
        "Tag Name":"Best Value",
        "Tag Logo":Trophy
        
    },  
    {
        "Product Name":"WixPro 72-Inch Responsive Website Builder",
        "Product Description":"- Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)",
        "Main Highlights":"[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.",
        "Rating":"9.3",
        "Rating tag":"Exceptional",
        "stars":5,
       
        
    },
    {
        "Product Name":"CDK Resposive Builder",
        "Product Description":"- An extensive library of widgets and apps, and detailed step-by-step guides",
        "Main Highlights":"[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.",
        "Rating":"9.3",
        "Rating tag":"Exceptional",
        "stars":5,
       
        
    },
   
]







  return (
    <div className="">
      <Navbar />
      <div className="mx-auto max-w-[1440px] flex  flex-col gap-3">
<div className="flex flex-col  max-w-[1024px] items-start justify-start mt-[25px] ">

        <h1 className="text-[48px] ">Best Website builders in the US</h1>
        </div> 


        <div className="w-full h-[1.3px] secondary bg-[#E1E4E6]"></div>
        <div className="Top-sec flex items-center justify-between gap-[45px]">


          <div className="left gap-8 flex">
          <div className="flex items-center">
            <div className="Check border border-black rounded-full p-1 ">
              <Check width={20} height={20} />
            </div>
            <a className="ml-4  text-[12px] secondary">Last Updated- February 22,2020</a>
          </div>
          <div className="flex items-center">
            <div className="Check ">
              <Info width={20} height={20} />
            </div>
            <p className="ml-4 text-[12px] secondary">Advertising Disclosure</p>
          </div>

          </div>
        

        <div className="flex items-center">
          <p className=" text-[12px] secondary">Top Relevant</p>
          <ChevronDown width={20} height={20} />
        </div>

        </div>
        <div className="w-full h-[1.3px] secondary bg-[#E1E4E6]"></div>

        <ToolsNavbar/>
        <Breadcrumbs/>




       <div className="products flex flex-col mx-5 gap-4">
        {
          Data.map((item,index)=>(
            <LongCards key={index} data={item} index={index}/>
          ))
        }
       </div>



       <div className="Another-Heading">
        <h1 className="text-[38px]">Related deals you might like for</h1>
        <DealsContainer/>
       </div>
       <OffersSignup/>
      </div>
      <FooterFour/>
    </div>
  );
}

export default App;
