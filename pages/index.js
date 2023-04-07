import config from "@config/config.json";
import Base from "@layouts/Baseof";
import Cta from "@layouts/components/Cta";
import { markdownify } from "@lib/utils/textConverter";
import Image from "next/image";
import Link from "next/link";
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import { getListPage } from "../lib/contentParser";

const Home = ({ frontmatter }) => {
  const { banner, feature, services, workflow, call_to_action } = frontmatter;
  const { title } = config.site;

  return (
    <Base title={title}>
      {/* Banner */}
   
          <section className="bg-theme-light">          
        
            <div className="container">
              <div className="sliderWrapper flex justify-evenly items-center">
             
              <div className="items-center col-md-6">
              <h2 className="font-bold text-primary uppercase">The Smartest Way to Invest
 in Real Estate</h2>
 <p className="mt-4 mb-2">Using the region first DFSA-regulated real estate crowdfunding platform, you can start investing in premium rental properties.</p>
            <h4 className="font-bold text-primary flex item-center pt-3">Watch Demo <span>  <Image
                        className="ml-1"
                        src="/images/play.svg"
                        width={40}
                        height={40}
                        alt="play"
                      /></span></h4>             
             </div>

              <div className="items-center col-md-5">
             
                  <Image
                        className="ml-1"
                        src="/images/mains.png"
                        width={350}
                        height={500}
                        alt="arrow"
                      />
                     
                </div>
              </div>
                 
              </div>
           
          </section>
            {/* Features */}
      <section className="section">
        <div className="container">
          <div className="text-center">
            <h2 className="text-primary text-center">WHY CHOOSE US</h2>
          </div>
          
          <div className="mt-8 grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-4">
            {feature.features.map((item, i) => (
              <div
                className="feature-card rounded-xl bg-white p-5 pb-8 text-center"
                key={`feature-${i}`}
              >
                {item.icon && (
                  <Image
                    className="mx-auto"
                    src={item.icon}
                    width={30}
                    height={30}
                    alt=""
                  />
                )}
                <div className="mt-4 text-center">
                  {markdownify(item.name, "h3", "h5")}
                  <p className="mt-3 justify" >{item.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* <section className="section bg-slate-50">
        <div className="container">
          <div className="text-center">
            <h2 className="text-primary uppercase">Our  Performance  so  far</h2>
          </div>
          <div className="mt-8 grid gap-x-40 gap-y-50 sm:grid-cols-2 lg:grid-cols-4 text-center">
          <div className="rounded-outer rounded-full bg-theme-light">
          <div className="rounded-inner rounded-full">
          <h6 class="count-text px-">AED 105M+ </h6>
    </div>
    </div>
	   
            <div className="mt-8 grid gap-x-40 gap-y-50 sm:grid-cols-2 lg:grid-cols-4 text-center">
            <div className="rounded-outer rounded-full bg-theme-light">
            <div className="rounded-inner rounded-full">
            <h6 class="count-text px-">AED 105M+ </h6>
            </div>
            </div>
            </div>
            <div className="mt-8 grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-4 text-center">
            <div className="rounded-outer rounded-full bg-theme-light">
            <div className="rounded-inner rounded-full">
      
       <h6 class="count-text px-">AED 105M+ </h6>
       </div>
    </div>
            </div>
            </div>
            </div>
            </section> */}
   
      <section className="section">
        <div className="container">
          <div className="text-center">
            <h2 className="text-primary uppercase">Operational resilience</h2>
          </div>
          <div className="sectionWrapper flex">
             
             <div className="items-center col-md-6 pt-20">
                <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis moles.</h4>
                <p className="text-grayshade">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis moles
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis moles.</p>

<ul className="list-disc pl-4 pt-2">

  <li>Low and transparent fees on your investments</li>
<li>Property analysis performed by experts and 3rd party valuators</li>
<li>Pata-driven investment opportunities</li>
<li>Regulated by the Dubai Financial Services Authority.</li>
<li>Manage your diversified portfolio on our award-winning platform</li>
<li>Manage your diversified portfolio on our award-winning platform</li>
<li>Manage your diversified portfolio on our award-winning platform</li>
<li>Manage yoReaur diversified portfolio on our award-winning platform</li>
</ul>
              </div>
              <div className="items-center col-md-6 pt-20">
              <Image
                        className="ml-1"
                        src="/images/operation.png"
                        width={700}
                        height={500}
                        alt="arrow"
                      />

              </div>
          </div>
          </div>
          </section>
    </Base>
  );
};

export const getStaticProps = async () => {
  const homePage = await getListPage("content/_index.md");
  const { frontmatter } = homePage;
  return {
    props: {
      frontmatter,
    },
  };
};

export default Home;
