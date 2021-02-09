/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-08-12 09:46:28
 * @version $Id$
 */
var change = false;
function changeScore(need_score,id) {
	if (!id) {
		alert('兑换奖品id为空！');
		return;
	}
	text = $('#need_info').val();
	if (change) {
		return ;
	}
	change = true;
	$.ajax({
		url:'/e/tool/score/do.php',
		type:'POST', 
		data:{'enews':'changeScore','need_score':need_score,'id':id,'need_info':text},
		dateTyp:'json',
		success:function(res){
			res = JSON.parse(res);
			if (res.error == 0) {
				alert('兑换成功，请在会员中心我的兑换查看');
			}
			if(res.error == 1){
				alert('您好，积分不足还差'+res.last_score+'积分。');
			}
			if(res.error == 3){
				alert('您好，请填写对应的信息');
			}
			change = false;
		}
	}); 
}

function changeInfo(id) {
	if (!id) {
		alert('兑换奖品id为空！');
		return;
	}
	$.ajax({
		url:'/e/tool/score/do.php',
		type:'POST', 
		data:{'enews':'getScoreInfo','id':id},
		dateTyp:'json',
		success:function(res){
			res = JSON.parse(res);
			$('.user-meta').remove();
			if (res.error == 0) {
				html = '<ul class="user-meta">';
				html += '<li><label>填写信息：</label><input type="hidden" id="need_info_id" value="'+res.id+'" /><textarea  id="need_info" cols="30" rows="5">';
				html += res.need_info;
				html += '</textarea></li>';
				html += '<li><input type="text"  class="btn btn-primary confirmInfo"   value="确认修改"> <a class="btn btn-primary" onclick="$(\'.user-meta\').remove()">取消</a>';
				html += '</li>';
				html += '</ul>';
				$('.info').append(html);
			}else{
				alert('错误');
			} 
		}
	});
}
require(['jquery'], function ($){
	$('body').on('click','.confirmInfo',function () {

		$text = $('#need_info').val();
		$id = $('#need_info_id').val();
		if (!$text) {
			alert('信息为空了');
			return ;
		}

		$.ajax({
			url:'/e/tool/score/do.php',
			type:'POST', 
			data:{'enews':'changeScoreInfo','id':$id,'need_info':$text},
			dateTyp:'json',
			success:function(res){
				res = JSON.parse(res);
				$('.user-meta').remove();
				if (res.error == 0) {
					 alert('修改成功');
				}else{
					alert('错误');
				} 
			}
		});

	})
})

 
