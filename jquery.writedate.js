/*
	version 2013-08-26
*/

(function($){  
	'use strict';

	var pluginName = 'writeDate';

	var months = {
		fr:['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'],
		en: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
	};
	var monthsShort = {
		fr:['jan', 'fév', 'mar', 'avr', 'mai', 'jun', 'jul', 'aoû', 'sep', 'oct', 'nov', 'déc'],
		en: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
	};
	var days = {
		fr:['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'],
		en: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
	};
	
	/*
	formats:
	%A day name (Sunday, Monday...)
	%e Day of the month (1 to 31)
	%Y Four digit representation for the year
	%b	Abbreviated month name, based on the locale (Jan, Feb...)
	%B  Full month name, based on the locale
	*/ 


	var defaults = {
		format : {
			fr : '%A %e %B %Y',
			en : '%A %B %e, %Y'
		},
		lang : 'fr'
	};
	var plugin = function(el, settings) {

		settings = $.extend({}, defaults, settings);
		var lang = settings.lang;
			
		var _self = $(el);
		var date = _self.text();
		var month = Number(date.substr(5,2))-1;
		var year = date.substr(0, 4);
		var day = Number(date.substr(8, 2));/**/
		var dObj = new Date(year, month, day);
		
		var desc = {
			A : days[lang][dObj.getDay()],
			e : day,
			Y : year,
			b: monthsShort[lang][month],
			B: months[lang][month]
		};

		var textDate = typeof settings.format == 'string' ? settings.format : settings.format[lang] ;
		$.each(desc, function(key, val){
			textDate = textDate.replace('%'+key, val);
		});

		/*console.log(day, month, year, date);
		console.log(parsedStr);/**/

		_self.text(textDate);
		
	
	};

	$.fn[pluginName] = function(options) {
		var input = arguments;
		if ( this.length ) {
			return this.each(function () {

				plugin(this, options);
				
			});
		}
	}

})(jQuery); 