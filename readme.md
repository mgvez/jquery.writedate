
jquery.writedate
=====

An absolutely unpretentious plugin to format dates from ISO (YYYY-MM-DD) in french or english. The specifiers supported are very limited and were added for my specific needs. I do what I want.

### Supported formats
* %A day name (Sunday, Monday...)
* %e Day of the month (1 to 31)
* %d Day of the month (01 to 31)
* %Y Four digit representation for the year
* %b	Abbreviated month name, based on the locale (Jan, Feb...)
* %B  Full month name, based on the locale
* %q (not strftime standard) de or d' depending on month name in french (d'octobre vs de juin)

### Usage
```js
$('.date', el).writeDate({
	lang: 'fr',
	format: '%A %e %B %Y'
});
```