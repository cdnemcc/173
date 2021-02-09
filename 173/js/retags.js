function tag(tid) {
	$.ajax({
		url:'/e/dongpo/tag/do.php',
		type:'get', 
		data:{'enews':'ReTagOne','tagid':tid},
		success:function(res){
			console.log(res);
		} 
	});
}

function retag(tid,time){
	 
	var now = Date.parse(new Date()); 
 	if( (now /1000) - time > 3600 * 72 ){
 		setTimeout('tag('+tid+')', 1000);
 	}
}

