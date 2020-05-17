$("document").ready(function () {
	$(".glass-card").tilt({
		maxTilt: 10,
		perspective: 300,
		scale: 1.2,
		speed: 1000,
		transition: true,
		disableAxis: null,
		reset: true,
		glare: true,
		maxGlare: 0.4
	});
});
