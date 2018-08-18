var toggle = 0;

window.onload = function() {
	var menu_icon = document.getElementById('nav-menu-icon');
	var menu = document.getElementById('menu');
	menu_icon.onclick = function() {
		if (toggle === 0) {
			menu.style.padding = '10px';
			menu.style.height = 'initial';
			toggle = 1;
		} else if (toggle === 1) {
			menu.style.padding = '0';
			menu.style.height = '0';
			toggle = 0;
		}
	}
}