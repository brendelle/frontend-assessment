fetch('data.json')
.then(function (response) {
	return response.json();
})
.then(function (data) {
	appendData(data);
})
.catch(function (err) {
	console.log(err);
});

function appendData(data) {
	var tabHolder = document.getElementById("brens-tab");
	var contentHolder = document.getElementById("brens-content");
	var accordionHolder = document.getElementById("brens-accordion");
	var acc = document.getElementsByClassName("accordion");
	var panel = document.getElementsByClassName('panel');
	for (var i = 0; i < data.length; i++) {
		var tabId = "'tab"+ i +"'";
		tabHolder.innerHTML += '<button class="tablinks" onclick="openCity(event, ' + tabId + ')">' + data[i].title + '</button>';	
		contentHolder.innerHTML += '<div id="tab' + i + '" class="tabcontent">' + data[i].content + '</div>';
	    accordionHolder.innerHTML += '<button class="accordion">' + data[i].title + '</button><div class="panel">' + data[i].content + '</div>';
	}
	
	var first = acc[0];
	first.classList.add("active");
	first.nextElementSibling.classList.add("show");
	
	for (var i = 0; i < acc.length; i++) {
	    acc[i].onclick = function() {
	    	var setClasses = !this.classList.contains('active');
	        setClass(acc, 'active', 'remove');
	        setClass(panel, 'show', 'remove');
			if (setClasses) {
	            this.classList.toggle("active");
	            this.nextElementSibling.classList.toggle("show");
	        }
	    }
	}	
	function setClass(els, className, fnName) {
	    for (var i = 0; i < els.length; i++) {
	        els[i].classList[fnName](className);
	    }
	}	
}
function openCity(evt, cityName) {
	var i, tabcontent, tablinks;
	tabcontent = document.getElementsByClassName("tabcontent");
	
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}
	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	}
	document.getElementById(cityName).style.display = "block";
	evt.currentTarget.className += " active";
}