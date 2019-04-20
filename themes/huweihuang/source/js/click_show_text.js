var a_idx = 0;
jQuery(document).ready(function($) {
    $("body").click(function(e) {
        var a = new Array
        ("有趣", "运动", "坚持", "冥想", "自律","谦逊","自信");
        var $i = $("<span/>").text(a[a_idx]);
        a_idx = (a_idx + 1) % a.length;
        var x = e.pageX,
        y = e.pageY;
        var color = randomColor();
        //console.log(color+'color')
        $i.css({
            "z-index": 5,
            "top": y - 20,
            "left": x,
            "position": "absolute",
            "font-weight": "bold",
            "color": color
        });
        $("body").append($i);
        $i.animate({
            "top": y - 180,
            "opacity": 0
        },
			3000,
			function() {
			    $i.remove();
			});
    });
    setTimeout('delay()', 2000);
});

function delay() {
    $(".buryit").removeAttr("onclick");
}



/**
 * 产生随机整数，包含下限值，但不包括上限值
 * @param {Number} lower 下限
 * @param {Number} upper 上限
 * @return {Number} 返回在下限到上限之间的一个随机整数
 */
function random(lower, upper) {
	return Math.floor(Math.random() * (upper - lower)) + lower;
}


/**
 * 产生随机颜色
 */
function randomColor() {

    var colorArray = [ '#b51921','#b2103e','#c41832','#ef342a','#a84d18','#f68f26','#faca07'
,'#07594a','#4ba946','#5fc0a7','#0376c2','#c41832','#c41832','#be3223','#f45f7c','#d16f20','#ffd00d','#076750','#7abf45'
,'#75c7b9','#077cb0','#29409a','#ee1e4f','#d2174a','#f79d8b','#ce7020','#e9a519','#fddf55','#076a66','#a7c299','#098ec4'
,'#89d2e3','#7572a7','#f7b1bf','#f67e2a','#f57125','#fbaf37','#fde14e','#076c53','#b2d68c','#8fd1cd','#0798c7','#9597ca'
,'#69686d','#f47a25','#fcba5d','#f8d29d','#ffe285','#077e7a','#d0e4a9','#81cdc1','#22b6ed','#b4d6f2','#c077af','#bbbfc2'
,'#fed7a6','#fcae62','#ffe901','#078e82','#d7df3f','#89d3de','#22b6ed','#b295c5','#c5c4c9','#d1d5d8','#f2f1f6' ,'#efe946'
,'#fff455','#ffe901','#4c7020','#c4e0e1','#79bce7','#b7e1fa','#c7a7d2','#e5e4e9','#f2f1f6','#f2f2f6','#1fb27f','#b5a87f'
,'#07b195','#d7df3f','#6dade2','#4dc7ec','#a8b7d8','#b8a1a9','#f8c9cb','#f2f1f6']

    //console.log(colorArray.length+"颜色个数")
    var number = random(0, 87);
    var color = colorArray[number]
	return color;
}

