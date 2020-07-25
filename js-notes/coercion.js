/***
 * Coercion: Coercion means a value of one type being converted 
 * to its respective representation in another type (to whatever extent possible).
 * 
 * coercion is a core pillar of the JS language
 * */ 

 // coercive equality
42 == "42";             // true
1 == true;              // true

var arr = [ "1", "10", "100", "1000" ];
for (let i = 0; i < arr.length && arr[i] < 500; i++) { //The arr[i] < 500 invokes coercion
    // will run 3 times
}

/*** 
 * These relational operators typically use numeric comparisons, 
 * except in the case where both values being compared are already strings; 
 * in this case, they use alphabetical (dictionary-like) comparison of the strings:
 * */

var x = "10";
var y = "9";

x < y;      // true, watch out!