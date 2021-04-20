
/*!
 * 96KaiFa code  
 */







$(function(){

	var all_9_6_k_a_i_f_a_val=[];
	var id_9_6_k_a_i_f_a_val='';

	if($.cookie('the_cookie')=='' || $.cookie('the_cookie') == null){}else{
		all_9_6_k_a_i_f_a_val=encode($.cookie('the_cookie'));
	}
	//领取礼包
	$('#ling96kaifa').each(function(){
		$(this).click(function(){

			$.get("/96kaifa/ka-ip-96kaifa.php", function(data){
				var ipp=data;
				var id=$('#bg_id').attr("value");
				var flag=$('#bg_flag').attr("value");
				id_9_6_k_a_i_f_a_val=id+"="+ipp;

				var all_val_string = all_9_6_k_a_i_f_a_val.join(',');
				if(all_val_string.indexOf(id_9_6_k_a_i_f_a_val)!=-1){

					$(".mengban").css("display","none");
					$(".key_box").css("display","none");
					layer.msg("你今天已经领过啦，明天在来领吧！");
					
				}else{
					
					//显示礼包号
					$('.mengban,.key_box').fadeIn();
					$.ajax({
						url: "/96kaifa/ka-hao-96kaifa.php",
						type:"get",
						data: {id:id,flag:flag},
						dataType: 'json',
						async:false,
						success:function(result) {
							result = eval(result);

							if(result.data=='chongfu'){
								$(".mengban").css("display","none");
								$(".key_box").css("display","none");
								layer.msg("你今天已经领过啦，明天在来领吧！");
								 return ;
							 }else if(result.data=='wrong'){
								$(".mengban").css("display","none");
								$(".key_box").css("display","none");
								 layer.msg("没有有效卡号或本卡号已领完！");
								 return ;
							 }

							 $("#key-c").html(result.data);

						}
					});
					//显示礼包号 end
					
					if(id_9_6_k_a_i_f_a_val=='' || id_9_6_k_a_i_f_a_val==null){}else{
					all_9_6_k_a_i_f_a_val.push(id_9_6_k_a_i_f_a_val);
					$.unique(all_9_6_k_a_i_f_a_val);
					$.cookie('the_cookie', decode(all_9_6_k_a_i_f_a_val), { expires: 1, path: '/'  });//存入
					}
				}
			})
		})	
	})
	
	//淘号
		$('#tao96kaifa').each(function(){
		$(this).click(function(){


			$('.mengban,.key_box').fadeIn();
			var id=$('#bg_id').attr("value");
			var flag=$('#bg_flag').attr("value");
			$.ajax({
				url: "/96kaifa/ka-tao-96kaifa.php",
				type:"get",
				data: {id:id,flag:flag},
				dataType: 'json',
				async:false,
				success:function(result) {
					result = eval(result);

					if(result.data=='chongfu'){
						$(".mengban").css("display","none");
						$(".key_box").css("display","none");
						layer.msg("你今天已经领过啦，明天在来领吧！");
						 return ;
					 }else if(result.data=='wrong'){
						$(".mengban").css("display","none");
						$(".key_box").css("display","none");
						 layer.msg("没有有效卡号或本卡号已领完！");
						 return ;
					 }

					 $("#key-c").html(result.data);

				}
			});


		})	
	})
	
	
	
//领取礼包 www.96kaifa.com 原创

	
	function decode(str){
		if(str=='' || str==null){}else{
		var _str = str.join(',');
		return _str;
		}
	}
	function encode(str){
		if(str=='' || str==null){}else{
		var _arr = str.split(',');
		return _arr;
		}
	}
});