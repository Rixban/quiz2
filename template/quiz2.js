(function($){
	// This is where you will write your function for the programming challenge
	// Do not commit console.log statements
	// Use ajax to reach the api endpoint
	// Whether or not you use jQuery, you still have to fix the jQuery errors. Removing jQuery is not fixing the problem.

	$mouseover = $('.mouse-over');
	$click     = $('.click');
	$submit       = $('.submit');
	$timeout	= $('.timeout');
	$ajax		= $('.ajax');
	$button		= $('#ajax');
	var randomData = "";
	var myArray;
	$mouseover.on('mouseover', function() {
		$mouseover.html('Scrooge McDuck!');
		$mouseover.height($mouseover.height() + 50);
	});

	$click.click('click', function() {
		$(this).html('Peace Out!');
		$(this).fadeOut(1500);
		return false;
	});

	$submit.submit(function(e) {
		e.preventDefault();
		if ($(this).find('input[type="text"]').val() !== '') {
			$(this).find('input').each(function() {
				$(this).fadeOut('slow');
			});
			$(this).append("<h2>Congratulations! You've entered some text!</h2>");
		}
	});

	$(document).ready(function() {
		setTimeout( function(){
			$timeout.fadeOut('slow');
		}
			, 1000);
			checkCookie();
			
			function getCookie(cname) {
				var name = cname + "=";
				var ca = document.cookie.split(';');
				for(var i=0; i<ca.length; i++) {
					var c = ca[i];
					while (c.charAt(0)==' ') c = c.substring(1);
					if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
				}
				return "";
			}

			function checkCookie() {
				var comic = getCookie("comic");
				if (comic != "") {
					var postData = document.getElementById("cookies");
					postData.innerHTML = "<ul>"+comic+"</ul>";
					}
				
			}
	});
	
		$button.click("click",function() {
		 $.ajax({
		
		 type: 'GET',
		 url: 'http://www.mattbowytz.com/simple_api.json',
		 data: {data: "quizData"},
		 success: function (data) {
			myArray = data.data;
			var dataSize = data.data.length;
			var number = Math.floor((Math.random() * dataSize));
			if(number == dataSize){
				number--;
			}
			if(number<0){
				number = 0;
			}
			var element = document.getElementById("ajax");
			element.parentNode.removeChild(element);
			 var x = document.getElementById('data');
			 x.innerHTML = x.innerHTML + data.data[number];
			 var element = document.createElement("input");
        //Assign different attributes to the element. 
			element.setAttribute("type", "button");
			element.setAttribute("value", "CHANGE IT");
			element.setAttribute("id", "change");
			element.onclick = function(){
		 	var dataSize = myArray.length;
			var number = Math.floor((Math.random() * dataSize));
			if(number == dataSize){
				number--;
			}
			if(number<0){
				number = 0;
			}
			document.getElementById("data").innerHTML = myArray[number];
			}
			
			var place = document.getElementById("buttons");
			console.log(place);
			place.appendChild(element);
			
			var element = document.createElement("input");
        //Assign different attributes to the element. 
			element.setAttribute("type", "button");
			element.setAttribute("value", "KEEP IT");
			element.setAttribute("id", "keep");
			element.onclick = function(){
				var theData = document.getElementById("data");
				var theRealData = theData.innerHTML;
				document.cookie = "";
				document.cookie="comic="+theRealData+"; expires=Fri, 8 Apr 2016 12:00:00 UTC; path=/";
			}
			var place = document.getElementById("buttons");
			place.appendChild(element);
			

			
			 	$keep		= $('#keep');
				$change		= $('#change');
             }
			
	 });
	 });
	
})(jQuery);