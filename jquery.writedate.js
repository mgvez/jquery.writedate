/*
	version 2013-08-26
*/

(function($){  
	'use strict';

	$.fn.extend({  
		writeDate: function(lang, isWriteDay, isWriteYear) {
			
			var months = [['janvier', 'January'], ['février', 'February'], ['mars', 'March'], ['avril', 'April'], ['mai', 'May'], ['juin', 'June'], ['juillet', 'July'], ['août', 'August'], ['septembre', 'September'], ['octobre', 'October'], ['novembre', 'November'], ['décembre', 'December']];
			
			var days = [['Dimanche','Sunday'],['Lundi','Monday'],['Mardi','Tuesday'],['Mercredi','Wednesday'],['Jeudi','Thursday'],['Vendredi','Friday'],['Samedi','Saturday']];
			
			lang = lang || 'fr';
			
			return this.each(function() {
				
				var date=$(this).text();
				var year = date.substr(0, 4);
				var month = Number(date.substr(5,2))-1;
				var day = Number(date.substr(8, 2));/**/
				var dObj=new Date(year, month,day);
				var suf;
				var textDate;

				month = months[month];

				if(!month) return;

				if(year == '0000'  || !day){ $(this).html('');}

				if (lang == 'fr'){
					month = month[0];
					//si le derner chiffre est 1 ...
					switch (day){
						case 1:
							suf = 'er';
							break;
						default:
							suf = '';	
					}
					textDate = day + suf + ' ' + month;
					if(isWriteYear) {
						textDate = textDate + ' ' +  year;
					}
					
				} else {
					month = month[1];
					//si le derner chiffre est 1, 2, 3, ...
					switch (day.toString().substr(day.toString().length-1)){
						case '1':
							//sauf si onze
							if (day == 11){
								suf = '';	
							} else {
								suf = 'st';	
							}
							break;
						case '2':
							suf = '';
							break;
						case '3':
							suf = '';
							break;
						default:
							suf = '';	
					}
					textDate = month + ' ' + day + suf ;
					if(isWriteYear) {
						textDate = textDate + ', ' + year;
					}
				}

				if(isWriteDay){
					var cd = dObj.getDay();
					var dayName = days[cd][0];
					textDate = dayName + ' ' + textDate;
					//alert(textDate);
				}
				
				$(this).text(textDate);
			
			});  
		}  
	});  
})(jQuery); 