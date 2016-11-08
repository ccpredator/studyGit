/* May you create a triangle with sides a,b,c
function isTriangle (a,b,c) {
	if (a+b>c&&b+c>a&&c+a>b) {
		return true;
	} 
		return false;
	
	
}

var x=isTriangle(1,2,3);
var y=isTriangle(3,4,5);
var z=isTriangle(5,6,9);
alert(x);
alert(y);
alert(z);
*/
/*
function sunArray (array) {
	var sum=0;
	array.sort(function (a,b) {
		return a-b;
	}).pop();
	array.shift();
	for (i in array) {
		sum+=array[i];
		}
	
	return sum;

}
var k=[];
var z=Array.isArray(k);

//if(Array.isArray(k)&&array.length!==1)
var x=k.length;
var y=sunArray([3,4,5,7,9,12]);
//var z=sunArray([5,6,9,3,18,11,2]);
alert(k);
alert(x);
alert(z);
*/
/*

	Array

	shift ()

	Return Type:
	Array

	Description:
	The first element of the array is removed from the array and returned.

	URL doc:
	http://html5index.org/ECMAScript%20-%20Array.html#shift

*/
/* high and low
function highAndLow(numbers) {
	var max = -Infinity;
	var min = +Infinity;
	numbers = numbers.split(" ");
	for (var i = 0; i < numbers.length; i++) {
		numbers[i] = Number(numbers[i]);
		if (max < numbers[i]) {
			max = numbers[i];
		}
		if (min > numbers[i]) {
			min = numbers[i];
		}
	}
	return String(max) + " " + String(min);

}
alert(highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6"));

*/
/*
var b="a,. !&z";
for(var i = 0, length1 = b.length; i < length1; i++){
	alert(b.codePointAt(i));
}

*/



function alphabetPosition(text) {
	var res = "";
	var ch;
	for (var i = 0, length1 = text.length; i < length1; i++) {
		ch = text.toLowerCase().codePointAt(i);
		if (ch >= 97 && ch <= 122) {
		res =res+ (ch - 96) + " ";}
		// statement
	}


	return res;

}
alert(alphabetPosition("The sunset sets at twelve o' clock."));

/*
var letter = "The sunset sets at twelve o' clock.";
var b;
var res="";
for(var i = 0, length1 = letter.length; i < length1; i++){
	b=letter.toLowerCase().codePointAt(i)-96;
	res=res+(letter.toLowerCase().codePointAt(i)-96)+" ";
}

alert(res);


*/

