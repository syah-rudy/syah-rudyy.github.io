//event di klik
$('.page-scroll').on('click', function(e){

    //ambil isi href
    var tujuan= $(this).attr('href');
    //tangkap elemen ybs
    var elemenTujuan = $(tujuan);

    //pindah scroll
    $('html, body').animate({
    scrollTop: elemenTujuan.offset().top-57
}, 1250, 'easeInOutExpo');
    e.preventDefault();
});

//about
// $(window).on('load', function(){
//     $('.pKiri').addClass('pMuncul');
//     $('.pKanan').addClass('pMuncul');
// });

//parallax
$(window).scroll(function(){
    var vscroll = $(this).scrollTop();

    //jumbotron
    $('.jumbotron img').css({
        'transform' : 'translate(0px, '+ vscroll/5+'%)'
    });
    $('.jumbotron h1').css({
        'transform' : 'translate(0px, '+ vscroll/1.6+'%)'
    });
    $('.jumbotron p').css({
        'transform' : 'translate(0px, '+ vscroll/1.3+'%)'
    });

    //portfolio
    // if(vscroll>$('.portfolio').offset().top - 300){
    //     $('.portfolio .thumbnail').each(function(i) {
    //         setTimeout(function(){
    //         $('.portfolio .thumbnail').eq(i).addClass('muncul');
    //     }, 300+(i+1));
    // }

    // if(vscroll>$('.portfolio').offset().top - 300){
    //     $('.portfolio .thumbnail').each(function(i){
    //         setTimeout(function(){
    //             // console.log('ok');
    //     });
    // }
    )};
});
