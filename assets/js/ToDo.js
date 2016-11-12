$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	event.stopPropagation();
});

$("input[type = 'text']").keypress(function(event){
	// if Enter is pressed
	if(event.which === 13) {
		// get new todo from input
		var todoText = $(this).val();
		// append to ul
		$("ul").append("<li><span><i class='fa fa-ban'></i></span> " + todoText + "</li>")
		$(this).val("");
	}
});