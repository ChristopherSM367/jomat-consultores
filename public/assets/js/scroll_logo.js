/* eslint-disable no-undef */
jQuery(function(){
    jQuery(window).scroll(function(){
        if(jQuery(this).scrollTop() > 49) {
            jQuery('#logo-img')
                .css({'width':'85%','height':'85%'})
                .attr('src','img/logo/logo.png');
        }
        if(jQuery(this).scrollTop() < 50) {
            jQuery('#logo-img')
                .css({'width':'100%',
                    'height':'100%',
                    '-webkit-transition':'all 0.5s ease',
                    '-moz-transition':'all 0.5s ease',
                    '-ms-transition':'all 0.5s ease',
                    '-o-transition':'all 0.5s ease',
                    'transition':'all 0.5s ease'
                    })    
                .attr('src','img/logo/logo-bco.png');
        }
    });
});