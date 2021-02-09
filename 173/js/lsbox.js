var yyBox=function(){
	var yy=this;
	yy.zIndex		= 99999;
	yy.upDefault	= function(options){
		if(typeof(options) != 'undefined'){
			for(var i in (options)){
				yy[i]	= options[i];	
			};
		};	
	};	
	yy.setHtml		= function(content){
		yy.showWidth	= parseInt(document.documentElement.clientWidth);
		yy.showHeight	= parseInt(document.documentElement.clientHeight);
		yy.bWidth		= Math.max(yy.showWidth, parseInt(document.body.clientWidth));
		yy.bHeight		= Math.max(yy.showHeight, parseInt(document.body.clientHeight));
		yy.zIndex++;
		var html		= '';
		html			+= '<div id="lsboxmaxdiv_'+yy.zIndex+'" style="padding:0px;margin:0px;top:0px;left:0px;width:'+yy.bWidth+'px;height:'+yy.bHeight+'px;position:fixed;_position:absolute;background-color:#CCCCCC;filter:alpha(opacity=40);opacity:0.4;z-index:'+yy.zIndex+';overflow:hidden;">';
		html			+= '</div>';
		yy.zIndex++;
		html			+= '<div id="lsboxmindiv_'+yy.zIndex+'" style="padding:0px;margin:0px;position:fixed;_position:absolute;z-index:'+yy.zIndex+';">';
		html			+= content;
		html			+= '</div>';
		$("body").append(html);
		var lsboxmindivWidth	= parseInt(document.getElementById("lsboxmindiv_"+yy.zIndex).offsetWidth);
		var lsboxmindivHeight	= parseInt(document.getElementById("lsboxmindiv_"+yy.zIndex).offsetHeight);
		$("#lsboxmindiv_"+yy.zIndex).css({'left':parseInt((yy.showWidth-lsboxmindivWidth)/2)+'px', 'top':parseInt((yy.showHeight-lsboxmindivHeight)/2)+'px'});		
	};
	yy.updateSize		= function(){
		var lsboxShowNum	= $("div[id^='lsboxmaxdiv_']").size();
		if(lsboxShowNum > 0){
			yy.showWidth	= parseInt(document.documentElement.clientWidth);
			yy.showHeight	= parseInt(document.documentElement.clientHeight);
			yy.bWidth		= Math.max(yy.showWidth, parseInt(document.body.clientWidth));
			yy.bHeight		= Math.max(yy.showHeight, parseInt(document.body.clientHeight));
			var lsboxScrollLeft		= document.all ? parseInt(document.documentElement.scrollLeft) : 0;
			var lsboxScrollTop		= document.all ? parseInt(document.documentElement.scrollTop) : 0;						
			$("div[id^='lsboxmaxdiv_']").each(function(){$(this).css({'width':yy.bWidth+'px', 'height':yy.bHeight+'px'});});
			$("div[id^='lsboxmindiv_']").each(function(){
				var lsboxmindivWidth	= parseInt(document.getElementById(this.id).offsetWidth);
				var lsboxmindivHeight	= parseInt(document.getElementById(this.id).offsetHeight);
				$(this).css({'left':parseInt((yy.showWidth-lsboxmindivWidth)/2 + lsboxScrollLeft)+'px', 'top':parseInt((yy.showHeight-lsboxmindivHeight)/2 + lsboxScrollTop)+'px'});
			});						
		};		
	};
	yy.browserScroll	= function(){
		var lsboxShowNum	= $("div[id^='lsboxmaxdiv_']").size();
		if(lsboxShowNum > 0){
			var lsboxScrollLeft		= parseInt(document.documentElement.scrollLeft);
			var lsboxScrollTop		= parseInt(document.documentElement.scrollTop);
			$("div[id^='lsboxmindiv_']").each(function(){
				var lsboxmindivWidth	= parseInt(document.getElementById(this.id).offsetWidth);
				var lsboxmindivHeight	= parseInt(document.getElementById(this.id).offsetHeight);
				$(this).css({'left':parseInt((yy.showWidth-lsboxmindivWidth)/2 + lsboxScrollLeft)+'px', 'top':parseInt((yy.showHeight-lsboxmindivHeight)/2 + lsboxScrollTop)+'px'});
			});							
		};		
	};
	$("div[id^='lsboxmindiv_']").find('.leshu_box_a').live('mousedown', function(e){
		if(e.which==1){
			$(this).css({cursor:'move'});
			var moveBoxid		= $(this).closest('div[id^="lsboxmindiv_"]').attr('id');
			yy.mouseTag			= true;
			yy._x				= e.clientX;
			yy._y				= e.clientY;
			yy._minX			= yy._x-parseInt(document.getElementById(moveBoxid).offsetLeft);
			yy._maxX			= yy.showWidth-parseInt(document.getElementById(moveBoxid).offsetWidth)+yy._minX;
			yy._minY			= yy._y-parseInt(document.getElementById(moveBoxid).offsetTop);
			yy._maxY			= yy.showHeight-parseInt(document.getElementById(moveBoxid).offsetHeight)+yy._minY;
			yy.left				= parseInt($('#'+moveBoxid).css('left'));
			yy.top				= parseInt($('#'+moveBoxid).css('top'));			
		};
	});
	$("div[id^='lsboxmindiv_']").find('.leshu_box_a').live('mousemove', function(e){
		if(yy.mouseTag){
			var moveBoxid		= $(this).closest('div[id^="lsboxmindiv_"]').attr('id');
			var clX	= e.clientX;
			var clY	= e.clientY;
			if(clX>=yy._minX&&clX<=yy._maxX){
				$('#'+moveBoxid).css('left', (yy.left+e.clientX-yy._x)+'px');
			}
			if(clY>=yy._minY&&clY<=yy._maxY){
				$('#'+moveBoxid).css('top', (yy.top+e.clientY-yy._y)+'px');	
			}
		};
	});
	$("div[id^='lsboxmindiv_']").find('.leshu_box_a').live('mouseup', function(e){
		if(e.which==1){
			$(this).css({cursor:''});
			yy.mouseTag			= false;
			yy._x				= 0;
			yy._y				= 0;
			yy._minX			= 0;
			yy._maxX			= 0;
			yy._minY			= 0;
			yy._maxY			= 0;
		};
	});				
	yy.boxs		= function(content, options){
		yy.upDefault(options);
		yy.setHtml(content);
	};
	yy.close	= function(obj, focusid){
		$(obj).closest('div[id^="lsboxmindiv_"]').each(function(){
			var closeZindex	= parseInt($(this).css('z-index'));
			closeZindex--;
			$(this).remove();
			$("#lsboxmaxdiv_"+closeZindex).remove();
		});
		if(typeof(focusid) != 'undefined' && $.trim(focusid) != ''){
			$('#'+focusid).focus();
		};
	};
	yy.closeall	= function(){
		$("div[id^='lsboxmindiv_']").each(function(){$(this).remove();});
		$("div[id^='lsboxmaxdiv_']").each(function(){$(this).remove();});
	}
	if(document.all){
		window.attachEvent("onscroll", yy.browserScroll);
		window.attachEvent("onresize", yy.updateSize);
	}else{
		window.addEventListener("resize",yy.updateSize,false);
	};				
};
yyBox = new yyBox();

function showError(content, options){
    var config                                      = new Array();
    this.title                                      = '警告';
    this.okbutton                                   = true;
    this.canclebutton                               = false;
    this.oktype                                     = 'close';
    this.cancletype                                 = 'close';
    this.okurl                                      = '';
    this.cancleurl                                  = '';
    this.focusid                                    = '';
    this.func                                       = '';
    this.funcParam                                  = '';
    this.elseclose                                  = false;
    if(typeof(options) != 'undefined'){
        for(var i in (options)){
            this[i]                                 = options[i];   
        };
    };
    this.html                                       =   '';
    this.html                                       +=  '<div class="yybox">';
    this.html                                       +=      '<div class="yybox_title"><span>'+this.title+'</span></div>';
    this.html                                       +=      '<div class="yybox_con">'+content+'</div>';
    this.html                                       +=      '<div class="yybo_but">';
    if(this.okbutton){
        switch(this.oktype){
            case 'back':
                this.html                           +=          '<input type="button" value="确 定" onclick="javascript:history.go(-1);">';
            break;
            case 'url':
                this.html                           +=          '<input type="button" value="确 定" onclick="javascript:window.location.href=\''+this.okurl+'\'">';
            break;
            case 'func':
                if(this.funcParam != ''){
                    this.html                       +=          '<input type="button" value="确 定" onclick="javascript:'+this.func+'(\''+this.funcParam+'\');">';
                }else{
                    this.html                       +=          '<input type="button" value="确 定" onclick="javascript:'+this.func+'();">';
                }
            break;
            default:
                this.html                           +=          '<input type="button" value="确 定" onclick="yyBox.close(this, \''+this.focusid+'\');">';
        }
    }
    if(this.canclebutton){
        switch(this.cancletype){
            case 'back':
                this.html                           +=          '<input type="button" value="取 消" onclick="javascript:history.go(-1);">';
            break;
            case 'url':
                this.html                           +=          '<input type="button" value="取 消" onclick="javascript:window.location.href=\''+this.cancleurl+'\'">';
            break;
            case 'func':
                if(this.funcParam != ''){
                    this.html                       +=          '<input type="button" value="取 消" onclick="javascript:'+this.func+'(\''+this.funcParam+'\');">';
                }else{
                    this.html                       +=          '<input type="button" value="取 消" onclick="javascript:'+this.func+'();">';
                }
            break;
            default:
                this.html                           +=          '<input type="button" value="取 消" onclick="yyBox.close(this, \''+this.focusid+'\');">';
        }
    }       
    this.html                                       +=      '</div>';
    this.html                                       +=  '</div>';
    if(this.elseclose){yyBox.closeall();}
    yyBox.boxs(this.html);
}