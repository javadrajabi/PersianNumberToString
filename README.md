# PersianNumberToString
- - -
Convert numbers to words - تبدیل عدد به حروف فارسی.

## نصب با npm
- - -
با استفاده از این ماژول شما میتوانید اعداد را از ورودی ارسال کنید و به صورت حروف از خروجی دریافت کنید.
تقدیم به فارسی زبان های عزیز

## نصب با npm

```bash
npm i --save persian-number-tostring
```

## نصب با bower

```bash
bower install persian-number-tostring
```

## طریقه استفاده
```javascript
var PersianNumberToString = require('persian-number-tostring');
PersianNumberToString(1234); // => 'هزار و دویست و سی و چهار'
```

## استفاده در صفحات html 
کافی است فایل مورد نظر را به صفحه خود اضافه کنید


```html
<!DOCTYPE html >
<html>
<head>
    <title></title>
	<meta charset="utf-8">
    <script src="dist/PersianNumberToString.js" type="text/javascript"></script>
</head>
<body>
	<input id="number" type="text" />
	<input type="button" onclick="convert()" value="Convert" />
	<span id="result"></span>
	<script type="text/javascript">
	     function convert() {
	         var number = document.getElementById("number").value;
	         var resultTag = document.getElementById("result");

	         resultTag.innerHTML = PersianNumberToString(number);
	     }
	</script>
 </body>
</html>

```
## License
This code is licensed under the MIT license for Javad Rajabi. For more
information, please refer to the [LICENSE](/LICENSE) file.
