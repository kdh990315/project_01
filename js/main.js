
// 버튼 클릭시 이미지 변경
$(function() {
    $('button:nth-of-type(1)').click(function() {
        $('.eventbox').fadeIn();
        $('.eventbox1').hide();
        $('.eventbox2').hide();
    });
});

$(function() {
    $('button:nth-of-type(2)').click(function() {
        $('.eventbox').hide();
        $('.eventbox1').fadeIn();
        $('.eventbox2').hide();
    });
});

$(function() {
    $('button:nth-of-type(3)').click(function() {
        $('.eventbox').hide();
        $('.eventbox1').hide();
        $('.eventbox2').fadeIn();
    })
})

// 버튼 색 변경
document.getElementById('btn1').onclick = function() {
    document.getElementById('btn1').style.opacity = 0.5;
    document.getElementById('btn2').style.opacity = 1;
    document.getElementById('btn3').style.opacity = 1;
}

document.getElementById('btn2').onclick = function() {
    document.getElementById('btn1').style.opacity = 1;
    document.getElementById('btn2').style.opacity = 0.5;
    document.getElementById('btn3').style.opacity = 1;
}

document.getElementById('btn3').onclick = function() {
    document.getElementById('btn1').style.opacity = 1;
    document.getElementById('btn2').style.opacity = 1;
    document.getElementById('btn3').style.opacity = 0.5;
}