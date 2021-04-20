
function SwapTab(name,title,content,Sub,cur){
  $(name+' '+title).click(function(){
    $(this).addClass(cur).siblings().removeClass(cur);
    $(content+" > "+Sub).eq($(name+' '+title).index(this)).show().siblings().hide();
  });
}
function SwapTabClass(name,title,content,Sub,cur){
  $(name+' '+title).click(function(){
    $(this).addClass(cur).siblings().removeClass(cur);
    $(content+" > "+Sub).eq($(name+' '+title).index(this)).addClass('show').siblings().removeClass('show');
  });
}
$(function(){
	//导航
	$('#iconNav').click(function(){
		$('.site-nav-wrap').addClass('show');
	});
	$('#navClose').click(function(){
		$('.site-nav-wrap').removeClass('show');
	});
	
	new SwapTab('.pui-down-navbar','.pui-navbar__item','.pui-down-swapTab .pui-fluid','ul','active')
	
	new SwapTabClass('.pui-panel__tab','li','.news-swapTab','.media-cells','active');
  
  	new SwapTabClass('.pui-panel__tab2','li','.news-swapTab2','.media-cells2','active');
	
	new SwapTabClass('.pui-panel__mztab','li','.news-swapTab','.media-cells','active');
  
    new SwapTabClass('.pui-panel__gxtab','li','.news-swapTab','.media-cells','active');
	
	new SwapTab('.pui-toplist-navbar','.pui-navbar__item','.toplist-swapTab','.toplist-cells','active')
  
   	new SwapTab('.pui-toplist-navbar2','.pui-navbar__item2','.toplist-swapTab2','.toplist-cells2','active')
	//游戏资讯
	new SwapTab('.panel-in-tabs','li','.pui-in-tabs','.pui-in-tab-cont','active')
	//搜索页面
	new SwapTab('.pui-result-navbar','.pui-navbar__item','.pui-result-tab','.pui-result-cont','active')
	
	//英雄图鉴
	new SwapTab('.panel-tu-tabs','li','.panel-tu-tab','.panel-tu-cont','active')
	new SwapTab('.tu-style','li','.tu-pic-list','.pui-fluid','active')
	
	//分类
	new SwapTab('.pui-cate-navbar','.pui-navbar__item','.pui-media-recommend','.pui-cate-slide','active')
	
	//注册
	new SwapTab('.form-tab','li','.form-tab-form','.form-tab-cont','active')
	
	//头部 搜索
	$('#soxToggle').click(function(){
		$(this).hide();
		$('.pui-search-box').show();
	})
	
  var $searchBar = $('#searchBar'),
	    $searchResult = $('#searchResult'),
	    $searchText = $('#searchText'),
	    $searchInput = $('#searchInput'),
	    $searchClear = $('#searchClear'),
	    $searchCancel = $('#searchCancel');

	    function hideSearchResult(){
	        $searchResult.hide();
	        $searchInput.val('');
	    }
	    function cancelSearch(){
	        $('#soxToggle').show();
			$('.pui-search-box').hide();
	        hideSearchResult();
	        $searchBar.removeClass('weui-search-bar_focusing');
	        $searchText.show();
	    }

    $searchText.on('click', function(){
        $searchBar.addClass('weui-search-bar_focusing');
        $searchInput.focus();
    });
    $searchInput
        .on('blur', function () {
            if(!this.value.length) cancelSearch();
        })
        .on('input', function(){
            if(this.value.length) {
                $searchResult.show();
            } else {
                $searchResult.hide();
            }
        })
    ;
    $searchClear.on('click', function(){
        hideSearchResult();
        $searchInput.focus();
    });
    $searchCancel.on('click', function(){
        cancelSearch();
        $searchInput.blur();
    });
});









