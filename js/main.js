let menu = $('.slide-menu>ul>li')
for(let i=0; i<menu.length; i++) {
    $(menu[i]).on('click', function(e) {
        
        let idx = $(e.currentTarget).index()
        playThisOne(idx)
        n = idx
        
    })
}

// 自动轮播
let n = 0;
setInterval(() => {
    n += 1
    n = n % menu.length    
    playThisOne(n)
}, 4000)

function playThisOne(n) {
    $('#slide_img').css('transform','translateX(' + (-n*920) + 'px)')
    $(`.slide-menu>ul>li:nth(${ n })`).addClass('active').siblings().removeClass('active')
}