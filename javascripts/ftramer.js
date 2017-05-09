function build_email(id, text){
	var x = "florian",
		y = "tramer",
		z = ".com",
		g = "g",
		w = x + "." + y + "@"+g+"mail"+z;

	if (text === null) {
		text = w
	}

	e = "<a href='mailto:"+w+"'>"+text+"</a>";
	$(id).html(e)
}

$(document).ready(function(){
	build_email("#email", null),
	build_email("#emailcv", "email")
});
