
BROWSER_TYPE_FIREFOX = "firefox";
BROWSER_TYPE_IE = "msie";
BROWSER_TYPE_SAFARI = "safari";

var Index = { 
	_init:function(){ 
		this._bindEvent();
	},
	_bindEvent:function(){ 
		/*$(".packagesImg").mouseover(function(){ 		
			$(this).parent().find(".price-hover").animate({ 
				top:-251
			});
			//$(this).find(".price-hover").css("top","0");
			$(this).mouseout(function(){ 
				$(this).parent().find(".price-hover").animate({ 
					top:63
				});
			})
		})*/

		/*$(".case-Image").mouseover(function(){ 
			var width  = $(this).width();
			var height = $(this).height();
			var left = $(this).position().left;
			var top = $(this).position().top;

				$(this).animate({	
					width:width+100,
					height:height+100,
					left:left-50,
					top:top-50
				})
				$(this).mouseout(function(){ 
					$(this).animate({	
					width:width,
					height:height,
					left:left,
					top:top
				})
				})
			})*/
		
	},
	gotoHtml : function(param){ 
		window.location = param +".html" ;
	}
}

$(document).ready(function(){ 
	Index._init();

	$('.flexslider').flexslider({
    animation: "slide",
    start: function(slider){
      //$('body').removeClass('loading');
    }
  });
})
/********common*****************/

/**
 * 获取浏览器类型, 可用 BROWSER_TYPE_FIRFOX, BROWSER_TYPE_IE 来判断
 * @return 
 */
function getBrowserType() {
	return navigator.userAgent.toLowerCase();
}

/**
 * 判断是否是某个特定的浏览器类型
 * @param expectedBrowserType 特定的浏览器类型，可用 BROWSER_TYPE_IE / BROWSER_TYPE_FIREFOX 来判断
 * @param browserType 当前的浏览器类型，如果没值会自动获取
 * @return
 */
function isExpectedBrowserType(expectedBrowserType, browserType) {
	if (!isDefined(browserType)) {
		browserType = getBrowserType();
	}
	return browserType.indexOf(expectedBrowserType) > 0;
}

function isDefined(ele) {
	return ele != null && typeof ele != "undefined";
}

