import { Helmet, HelmetProvider } from 'react-helmet-async'

const Head = () => {


  return (
    <HelmetProvider>
      <Helmet>
        <html lang='es' className='no-js'></html>
        <meta charSet="utf-8"></meta>
        <meta http-equiv="X-UA-Compatible" content="IE=edge"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
        <meta name="application-name" content="JOMAT CONSULTORES"></meta>
        <meta name="msapplication-TileColor" content="#3272b9"></meta>
        <meta name="theme-color" content="#315ba7"></meta>
        <meta name="description" content="Somos su mejor aliado en la tecnologia y actualizaciones constantes que existen en el mercado, nos especializamos en el desarrollo de páginas web, marketing y diseño haciendo sinergia con las diversas áreas administrativas para alcanzar la meta deseada."></meta>
        <meta name="keywords" content="web, páginas, mkt, marketing digital, diseño, diseno, diseño gráfico, sitio web, tienda online, mercadotecnia tradicional, buscadores, posicionamiento, SEO."></meta>
        <title>JOMAT CONSULTORES</title>
        <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossOrigin="anonymous"></link>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Poppins"></link>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto"></link>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap"></link>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Raleway:wght@300&display=swap"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"></link>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w==" crossOrigin="anonymous" referrerPolicy="no-referrer"></link>
        <link rel="shortcut icon" href="/assets/img/logo/favicon.png"></link>
        <link rel="stylesheet" href="/assets/js/toastr-master/build/toastr.css"></link>
        <link rel="stylesheet" href="/assets/css/owl.carousel.min.css"></link>
        <link rel="stylesheet" href="/assets/css/font-awesome.min.css"></link>
        <link rel="stylesheet" href="/assets/css/animate.min.css"></link>
        <link rel="stylesheet" href="/assets/css/linearicons.css"></link>
        <link rel="stylesheet" href="/assets/css/bootstrap.css"></link>
        <link rel="stylesheet" href="/assets/css/animate.css"></link>
        <link rel="stylesheet" href="/assets/css/nice-select.css"></link>
        <link rel="stylesheet" href="/assets/css/magnific-popup.css"></link>
        <link rel="stylesheet" href="/assets/css/main.css"></link>
        <link rel="stylesheet" href="/assets/css/colores.css"></link>
        <link rel="stylesheet" href="/assets/css/custom.css"></link>
        <link rel="stylesheet" href="/assets/css/slidercarrusel.css"></link>
        <link rel="stylesheet" href="/assets/slick/slick.css"></link>
        <link rel="stylesheet" href="/assets/slick/slick-theme.css"></link>
        <link rel="stylesheet" href="/assets/fonts/ionicons/css/ionicons.min.css"></link>
        <link rel="stylesheet" href="/assets/fonts/fontawesome/css/font-awesome.min.css"></link>
        <link rel="stylesheet" href="/assets/fonts/flaticon/font/flaticon.css"></link>
        <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
        <script noModule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
        <script src='https://www.google.com/recaptcha/api.js'></script>
        <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/feather-icons/dist/feather.min.js"></script>
        <script type="text/javascript" src="/assets/js/toastr-master/toastr.js"></script>
        <script type="text/javascript" src="/assets/jquery/lib/jquery-1.11.1.js"></script>
        <script type="text/javascript" src="/assets/jquery/dist/jquery.validate.js"></script>
        <script type="text/javascript" src="/assets/jquery/dist/jquery.aniview.js"></script>
      </Helmet>
    </HelmetProvider>
  )
}

export default Head