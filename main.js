window.onload = function(){

    $('.status span').on('click', function(e){
        $(this).siblings().removeClass('active')
        $(this).addClass('active')
        var id = this.id
        
        if(id == 'download'){
            $('.free_games .game_item').css('display', "none")
            $('.free_games .row .download').css('display', 'block')
        }
        else if(id == 'online'){
            $('.free_games .game_item').css('display', 'none')
            $('.free_games .row .online').css('display', 'block')
        }
        else if(id == 'new'){
            $('.free_games .game_item').css('display', 'none')
            $('.free_games .row .new').css('display', 'block')
        }
        else {
            $('.free_games .game_item').css('display', 'block')            
        }

    })
    
    $('video').prop("volume", 0);
    var figure = $(".hover_play").hover(hoverVideo, hideVideo);

    function hoverVideo(e) {
      $('video', this).get(0).play();       
    }

    function hideVideo(e) {
      $('video', this).get(0).pause();
    }
    
    $("video").on('click', function(e){
      $(this).prop("volume", 0.01);
    })            

    $('.video_item .play_button').on('click', function(e){
      var this_vid = $(this).parent().find('video').get(0)
      
      if(this_vid.paused ){
        $(this_vid).get(0).play();
        $(this_vid).prop("volume", 0.01);               
      }
      else{
        $(this_vid).get(0).pause();        
      }
    })

    $('.video_item video').on('click', function(e){      
      
      if(this.paused ){
        $(this).get(0).play();
        $(this).prop("volume", 0.01);               
      }
      else{
        $(this).get(0).pause();        
      }
    })
    

    var swiper = new Swiper(".mySwiper")
    if(swiper){
        var swiper = new Swiper(".mySwiper", {                                                        
          loop: true,  
          spaceBetween: 20,            
          slidesPerView: 8,
          mousewheelControl: false,
          keyboardControl: false,                                                                                                                                        
          autoplay: {
            delay: 1,
            disableOnInteraction: true
          },                      
          speed: 30000,                      
          breakpoints: {
              0: {
                  slidesPerView: 4,
                  spaceBetween: 10,
                },
              450: {
                  slidesPerView: 4.5,
                  spaceBetween: 10,
                },
                576: {
                  slidesPerView: 5,
                  spaceBetween: 10,
                },
                768: {
                  slidesPerView: 6,
                  spaceBetween: 10,
                },
              992: {
                slidesPerView: 8,
                spaceBetween: 15,
              },                                          
              1200: {
                slidesPerView: 8,
                spaceBetween: 20,
              },                                          
          },              
            
        })               
    }      

    var swiper2 = new Swiper(".mySwiper2")
    if(swiper2){
        var swiper2 = new Swiper(".mySwiper2", {                        
            loop: true,              
            spaceBetween: 20,            
            slidesPerView: 8,
            simulateTouch: false,                                                                                                        
            autoplay: {
              delay: 0,              
              disableOnInteraction: false,
              reverseDirection: true,
            },
                                                             
            speed: 30000,            
            breakpoints: {
                0: {
                    slidesPerView: 4,
                    spaceBetween: 10,
                  },
                450: {
                    slidesPerView: 4.5,
                    spaceBetween: 10,
                  },
                  576: {
                    slidesPerView: 5,
                    spaceBetween: 10,
                  },
                  768: {
                    slidesPerView: 6,
                    spaceBetween: 10,
                  },
                992: {
                  slidesPerView: 8,
                  spaceBetween: 15,
                },                                          
                1200: {
                  slidesPerView: 8,
                  spaceBetween: 20,
                },                                          
            },                        
        })                        
    }
      
    var swiper3 = new Swiper(".mySwiper3")
    if(swiper3){                  
      var swiper3 = new Swiper(".mySwiper3", {
        slidesPerView: 3,
        spaceBetween: 20,                   
        navigation: {
        nextEl: ".next-3",
        prevEl: ".prev-3",        
        }, 
        breakpoints: {
          0: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          500: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          992: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        },        
      });                 
    }

    var lightgallery =document.getElementById('lightgallery')
    if(lightgallery){
      lightGallery(document.getElementById('lightgallery'),{
        selector: '#lightgallery .swiper-slide',        
        videojs: true,
        hideBarsDelay: 2000,        
        closeOnTap: true,
      });
            
    }      
    // $('.game_slider .swiper-slide').on('click', function(e){
    //   if($('.lg-inner').length > 0){
    //     console.log('nimadur')
    //     $('.lg-inner').on('click', function (e) {
    //       console.log('nimadur')
    //       const plugin = lightGallery();
    //       plugin.closeGallery();
    //     });
    //   }
    // })    

    var swiper4 = new Swiper(".mySwiper4")
    if(swiper4){
      var swiper4 = new Swiper(".mySwiper4", {
        slidesPerView: 4,
        spaceBetween: 30,  
        loop: true,         
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },  
        breakpoints: {                 
          0: {
            slidesPerView: 1.6,
            spaceBetween: 10,
            centeredSlides: true,
          },
          500: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
          992: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          1200: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        },       
      });
    }

    $('.learn_more.on_click').on('click', function(e){        
        $('.products_slider').slideDown()
        $('.free_games').css('display', 'block')
        setTimeout(function() { 
            $('.products_slider').css('display', 'none')
        }, 1000);
       
    })

    if($('.auto_play video').length > 0){      
      $('.auto_play video').get(0).play();
    }

}