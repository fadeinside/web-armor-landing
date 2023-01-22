document.addEventListener("DOMContentLoaded", function () {
	updateRippleEffect();
	updateMobileMenu();
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

function updateMobileMenu() {
	// ИД элемента кнопки меню
	var mobilekey = "#mobile-menu";
	// ИД элемента мобильного меню
	var menuKey = "#opened-menu";
	// Класс для закрытия меню
	var close = "closed";

	// Закрыть/Открыть меню при нажатии на кнопку
	$(mobilekey).on("click", function (e) {
		$(menuKey).toggleClass(close);
	});
	// Закрыть меню при клике вне кнопки
	$(document).mouseup(function (e) {
		if (!$(mobilekey).is(e.target) && $(mobilekey).has(e.target).length === 0) {
			$(menuKey).addClass(close);
		};
	});
	// Также закройте меню при скроле
	$(document).scroll(function () {
		$(menuKey).addClass(close);
	});
};

$(document).scroll(function () {
	// Значение скрола, после которого хедер окрасится
	var deadline = 80;
	// ИД элемента хедера
	var headerKey = "#header-component"
	// Класс для закрытия меню
	var field = "scrolled";

	// Установить класс при достижении лимита, иначе снять
	if (document.body.scrollTop > deadline || document.documentElement.scrollTop > deadline) {
		$(headerKey).addClass(field);
	} else {
		$(headerKey).removeClass(field);
	}
});