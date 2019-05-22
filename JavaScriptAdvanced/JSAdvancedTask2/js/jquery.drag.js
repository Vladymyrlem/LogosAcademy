// ----------------------------------------------------------------------------
// Drag, jQuery plugin
// v 1.0
// ----------------------------------------------------------------------------
// Copyright (C) 2010 recens
// http://recens.ru/jquery/plugin_drag.html
// ----------------------------------------------------------------------------
// Модифицировано Apocalypse
// apo-ucoz.com (c) 2011 год
(function($){
	$.fn.drag = function(o){
		var o = $.extend({
			start:function(){},   // при начале перетаскивания
			stop:function(){} // при завершении перетаскивания
		}, o);
		return $(this).each(function(){
			var d = $(this); // получаем текущий элемент
			d.mousedown(function(e){ // при удерживании мыши
				d.css('position','absolute');
				$(document).unbind('mouseup'); // очищаем событие при отпускании мыши
				o.start(d); // выполнение пользовательской функции
				var f = d.offset(), // находим позицию курсора относительно элемента
				x = e.pageX - f.left,  // слева
				y = e.pageY - f.top;  // и сверху

	            $(document).mousemove(function(a){ // при перемещении мыши
					d.css({'top' : a.pageY - y + 'px','left' : a.pageX - x + 'px'}); // двигаем блок
				});
				$(document).mouseup(function(){  // когда мышь отпущена
					$(document).unbind('mousemove'); // убираем событие при перемещении мыши
					o.stop(d); // выполнение пользовательской функции
				});
				return false;
			});
									
		});
	}
})(jQuery);

// Кукисы
function setCookie(name, value, days) {
 if (days) {
 var date = new Date();
 date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
 var expires = "; expires=" + date.toGMTString();
 }
 else var expires = "";
 document.cookie = name + "=" + value + expires + "; path=/";
}
function getCookie(name) {
 var nameEQ = name + "=";
 var ca = document.cookie.split(';');
 for (var i = 0; i < ca.length; i++) {
 var c = ca[i];
 while (c.charAt(0) == ' ') c = c.substring(1, c.length);
 if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
 }
 return null;
}
function eraseCookie(name) {
 setCookie(name, "", -1);
};
// Кукисы закончились

// Функция запоминания прикручена Apocalypse

// Обработка элемента с id = apo
$(document).ready(function(){
	var fbl = $('#apo');
		if(getCookie('mx') || getCookie('my')) {
			var mmx = getCookie('mx'), mmy = getCookie('my');
			fbl.css({'left': mmx, 'top': mmy}).fadeIn(0);
		};
	fbl.drag({
			start:function(e){
			
					e.children('span').css('display', 'none');
					e.stop().fadeTo(500, 0.3);
		}, stop:function(e){
						var mx = fbl.css('left');
						var my = fbl.css('top');
						eraseCookie('mx');eraseCookie('my');
						setCookie('mx', mx, 365);
						setCookie('my', my, 365);
					e.stop().fadeTo(500, 1);
					e.children('span').css('display', 'block');
	}}); 
});
// Обработка элемента с id = apo завершена
	
// apo-ucoz.com (c) 2011 год