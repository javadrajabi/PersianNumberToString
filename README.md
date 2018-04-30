# PersianNumberToString
- - -
Convert numbers to words - تبدیل عدد به حروف فارسی.

##  توضیحات 
- - -
با استفاده از این کتاب خانه شما میتوانید اعداد به تابع آن بفرستید و به صورت حروف خروجی بگیرید
.
تقدیم به فارسی زبان های عزیز

## npm نصب با 

```bash
npm i --save persian-number-tostring
```

## bower نصب با 

```bash
bower install persian-number-tostring
```

## طریقه استفاده
```javascript
var PersianNumberToString = require('persian-number-tostring');
PersianNumberToString(1234); // => 'هزار و دویست و سی و چهار'
```

## html استفاده در صفحات  
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
## حامی
www.shosterofte.com

## License
This code is licensed under the MIT license for Javad Rajabi. For more
information, please refer to the [LICENSE](/LICENSE) file.
