import { Navbar } from "../../includes/Navbar"
import Footer from "../../includes/Footer"
import { useEffect } from "react"
import HomeSlider from "./HomeSlider"
import HomeSection2 from "./HomeSection2"
import HomeSection3 from "./HomeSection3"
import HomeSection4 from "./HomeSection4"

const Home = () => {
  useEffect(() => {
    const manejarScroll = () => {
      const alturaVentana = window.innerHeight;
      const posicionScroll = window.scrollY + alturaVentana / 3;
      const paneles = document.querySelectorAll('.panel');

      paneles.forEach(panel => {
        const panelTop = (panel as HTMLElement).offsetTop;
        const alturaPanel = (panel as HTMLElement).offsetHeight;

        if (panelTop <= posicionScroll && panelTop + alturaPanel > posicionScroll) {
          document.body.className = document.body.className.replace(/\bcolor-\S+/g, '');
          document.body.classList.add(`color-${(panel as HTMLElement).dataset.color}`);
        }
      });
    };

    window.addEventListener('scroll', manejarScroll);

    manejarScroll();

    return () => {
      window.removeEventListener('scroll', manejarScroll);
    };
  }, []);

  return (
    <>
      <Navbar></Navbar>
      <div className="slider-item banner-home fondo-azul-base" style={{ backgroundImage: "url('/assets/img/slider_horizontal/base.jpg')" }}>
        <div className="degradado3"></div>
      </div>
      <HomeSlider></HomeSlider>
      <HomeSection2></HomeSection2>
      <HomeSection3></HomeSection3>
      <HomeSection4></HomeSection4>
      <Footer></Footer>
      
      <script src="/assets/js/validation/contact_validation.js"></script>
    </>
  )
}

export default Home

// eslint-disable-next-line no-lone-blocks
{/* <div id="loader" className="show fullscreen">
  <svg className="circular" width="48px" height="48px">
    <circle className="path-bg" cx="24" cy="24" r="22" fill="none" strokeWidth="4" stroke="#eeeeee" />
    <circle className="path" cx="24" cy="24" r="22" fill="none" strokeWidth="4" strokeMiterlimit="10" stroke="#00B398" />
  </svg>
</div> */}