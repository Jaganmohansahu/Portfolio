$("document").ready(function () {
	$(".glass-card").tilt({
		maxTilt: 20,
		perspective: 700,
		easing: "cubic-bezier(0.03, 0.98, 0.52, 0.99)",
		scale: 1.2,
		speed: 1000,
		transition: true,
		disableAxis: null,
		reset: true,
		glare: true,
		maxGlare: 0.4
	});
});
