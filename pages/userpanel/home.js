import config from "@config/config.json";
import Header from "@partials/Headeruser"
import Footer from "@partials/Footeruser"
import Portfolio from "@layouts/partials/Portolio";
import PropertyList from "@layouts/partials/PropertyList"
const home=()=>{
return(
    <>
    <Header/>
    <section className="my-[50px]">
    <main>
 <Portfolio/>
 <PropertyList/>
</main>
    </section>

    <Footer/>
    </>
)
}
export default home