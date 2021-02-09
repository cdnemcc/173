function post_http(){
 		$.ajax({
 			url:'/e/extend/rebuildindex/do.php',
			type:'POST', 
			data:{'action':'beat'},
			success:function(res){
				console.log(res);
			} 
 		});
 	}

 	var time = 10;
 	var open = 1;

 	if( time >= 1 &&  open== 1){
 		setTimeout(post_http, time * 1000);
 	}