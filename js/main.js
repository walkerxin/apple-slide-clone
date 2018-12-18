let menu = $('.slide-menu>ul>li')

for(let i=0; i<menu.length; i++) {
    $(menu[i]).on('click', function(e) {
        
        let idx = $(e.currentTarget).index()
        $('#slide_img').css('transform','translateX(' + (-idx*920) + 'px)')
        $(`.slide-menu>ul>li:nth(${ idx })`).addClass('active').siblings().removeClass('active')
        
    })
}