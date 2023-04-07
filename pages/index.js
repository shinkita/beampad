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
   
          <section className="section bg-theme-light">          
        
            <div className="container">
              <div className="sliderWrapper flex">
             
              <div className="items-center col-md-6 pt-20">
              <h2 className="font-bold text-primary uppercase">The Smartest Way to Invest
 in Real Estate</h2>
 <p className="mt-4 mb-2">Using the region first DFSA-regulated real estate crowdfunding platform, you can start investing in premium rental properties.</p>
            <p>Watch Demo</p>             
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
            <h2>Why Choose Us</h2>
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
                <div className="mt-4">
                  {markdownify(item.name, "h3", "h5")}
                  <p className="mt-3">{item.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

     

      {/* workflow 
      <section className="section pb-0">
        <div className="mb-8 text-center">
          {markdownify(
            workflow.title,
            "h2",
            "mx-auto max-w-[400px] font-bold leading-[44px]"
          )}
          {markdownify(workflow.description, "p", "mt-3")}
        </div>
        <Image
          src={workflow.image}
          alt="workflow image"
          width={1920}
          height={296}
        />
      </section>

      {/* Cta */}
      {/* <Cta cta={call_to_action} /> */}
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
