var slider_box = document.getElementById("SlideBox");
var slider_list = document.getElementById("SlideList");
addEventListener("load", function(){slider_list.style.transition = "margin 1s ease-in-out"});
slider_list.style.listStyle = "none";
slider_list.style.padding = "0";
slider_list.style.margin = "0";
slider_box.style.overflow = "hidden";
slider_box.style.margin = "0 auto";
	function size(){
		slider_box.style.width = Math.round(window.innerWidth * slider_box.getAttribute("width") / 100) + "px";
		if (slider_box.getAttribute("width") == null || slider_box.getAttribute("width") == "") slider_box.style.width = "100%";
			slider_box.style.height = slider_box.getAttribute("height") + "px";
		if (slider_box.getAttribute("height") == null || slider_box.getAttribute("height") == "") slider_box.style.height = Math.round(slider_box.clientWidth / 2 - 50) + "px";
			slider_list.style.height = "100%";
			slider_list.style.width = Math.round((window.innerWidth * slider_box.getAttribute("width") / 100) * images.length + 5) + "px";
	}
	function sliderList(){
		var size =  Math.round(window.innerWidth * slider_box.getAttribute("width") / 100) + "px";
		for(var i = 0; i <= images.length -1; i++){
slider_list.innerHTML += "<li id='img' style='" + "background-image: url(images/" + images[i] + "); width:" + size + "; height: 100%; float: left; background-size: cover; background-position: center;'></li>";
		}
	}
size();
sliderList();
var range = 100 / images.length;
setInterval(slider, 1000);
var time = 0;
var pos = 0;
var n = 1;
var c = Math.round(window.innerWidth * slider_box.getAttribute("width") / 100);
if (document.getElementById("num") != null) {document.getElementById("num").innerHTML = n;}
	function slider(){
			time ++;
			if (time == slider_box.getAttribute("time")) {
			time = 0;
			pos += -c; 
			n++;
			if (n > images.length) n = 1;
			if (document.getElementById("num") != null) document.getElementById("num").innerHTML = n;
			if (pos == -c * images.length)  pos = 0;
			SlideList.style.marginLeft = pos + "px";
		}
	}
		if (document.getElementById("Back-btn") != null) {
			document.getElementById("Back-btn").addEventListener("click", function()
			{
			time = 0; pos += c; n--;
			if (n < 1) n = images.length;
			if (document.getElementById("num") != null) document.getElementById("num").innerHTML = n;
			if (pos >= 1) pos = (-c * images.length) - -c;
			SlideList.style.marginLeft = pos + "px";
			});
		}
		if (document.getElementById("Next-btn") != null) {
			document.getElementById("Next-btn").addEventListener("click",function()
			{
			time = 0; pos += -c; n++;
			if (n > images.length) n = 1;
			if (document.getElementById("num") != null) document.getElementById("num").innerHTML = n;
			if (pos == -c * images.length) pos = 0;
			SlideList.style.marginLeft = pos + "px";
			});
		}
		setInterval(time, 1000);
		var s = 0;
		var num = 3;
		function time()
		{
		s++;
		if (s == num) s = 0;
		}