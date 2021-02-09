function PicPlayPre(){
	prevpage = nowpage - 1;
	if(prevpage < 2){
		location.href = dolink + filename + filetype;
	}else{
		location.href = dolink + filename + '_' + prevpage + filetype;
	}
}

function PicPlayNext(){
	var nextpage = nowpage + 1;
	if(nowpage == totalpage) { 
		location.href = classurl;
	}else {
		  location.href = dolink + filename + '_' + nextpage + filetype;
		}
}