document.addEventListener("DOMContentLoaded", function () {
	updateRippleEffect()
});

function updateRippleEffect() {
	$("a[button], a[header]").on("click", function (e) {
		$btn = $(this);
		var $offset = $(this).offset();
		$span = $("<span/>");
		var x = e.pageX - $offset.left;
		var y = e.pageY - $offset.top;
		$span.addClass("ripple");
		$span.css({
			top: y + "px",
			left: x + "px",
		});

		$btn.append($span);
	});
};

window.onscroll = function () {
	if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
		console.log("erv")
		document.getElementById("header-component").style.backgroundColor = "var(--color_primany_003)";
	} else {
		document.getElementById("header-component").style.backgroundColor = "unset";
	}
}

window.addEventListener("load", function () {
	var script = document.createElement("script");
	script.src = "./assets/javascript/miniature.earth.js";
	document.body.appendChild(script);
});

window.addEventListener("earthjsload", function () {
	new Earth("bgearth", {
		location: { lat: 30, lng: -10 },
		light: "false",
		autoRotate: true,
		autoRotateDelay: 0,
		autoRotateStart: 1500,
		mapLandColor: "#fff",
		mapSeaColor: "#00000030",
		mapBorderColor: "#fff",
		mapBorderWidth: 0.5,
		transparent: true,
		zoom: 1.2,
		quality: 5,
		draggable: true
	});
});
