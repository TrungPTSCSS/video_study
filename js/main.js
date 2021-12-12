

$('.subject ul li a').on('click',function(ev){
    var a = $(ev.target)[0].classList
    var b = $('.subject ul li a');
    b.removeClass('active');
    a.add('active');

    var allContent = $('.subject-content');
    allContent.removeClass('active-content');
    var content = $(`.${a[0]}.subject-content`);
    content[0].classList.add('active-content')
})