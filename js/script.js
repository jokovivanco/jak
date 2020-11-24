const sidenav = document.querySelectorAll('.sidenav');
M.Sidenav.init(sidenav);

const slider = document.querySelectorAll('.slider');
M.Slider.init(slider, {
	height: 500,
	indicators: false
});

const parallax = document.querySelectorAll('.parallax');
M.Parallax.init(parallax);

const materialbox = document.querySelectorAll('.materialboxed');
M.Materialbox.init(materialbox);

const scroll = document.querySelectorAll('.scrollspy');
M.ScrollSpy.init(scroll, {
	scrollOffset: 50
});