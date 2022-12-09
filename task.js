https://github.com/lazycodermern/Day5/blob/master/script.js



a.Print odd numbers in an array
var arr = [1,2,3,4,5,6,7,8,9]
var result =[];
var odd = function(arr){
     for(var i=0;i<arr.length;i++){
        if(arr[i]%2!=0){
           result.push(arr[i]);
        }
    }
    return result;
}

console.log(odd(arr));

b.Sum of all numbers in an array
var arr = [1,2,3,4,5,6,7,8,9];
var result =0;
var sum = function(arr){
     for(var i=0;i<arr.length;i++){
        result += arr[i]
    }
    return result;
}

console.log(sum(arr));

c.Return all the prime numbers in an array
var num = function(a){
a = a.filter((ele)=>{
  for(var i=2;i<=Math.sqrt(ele);i++){
    if(ele%2===0)return false;
  }
  return true;
})
return a;
}
console.log(num([1,2,3,4,5,6,7,8,9,31]));


D.Return all the palindromes in an array
let arr = []
let str = words.slice(0)
let pal = str.toString().split("").reverse().join("") 
console.log(pal);
for (let i = 0; i < words.length; i++) {
for (let k = 0; k < pal.length; k++) {
 if (words[i] == pal[k]) {
   arr.push(words[i])
 }
 }
 }
 return arr
 }


E.Return median of two sorted arrays of the same size.

{
    if (endA - startA == 1) {
            return (
                    Math.max(a[startA],
                                b[startB])
                    + Math.min(a[endA], b[endB]))
                / 2;
        }
        let m1 = median(a, startA, endA);
        let m2 = median(b, startB, endB);
        if (m1 == m2) {
            return m1;
        }
        else if (m1 < m2) {
            return getMedian(
                a, b, (endA + startA + 1) / 2,
                startB, endA,
                (endB + startB + 1) / 2);
        }
        else {
            return getMedian(
                a, b, startA,
                (endB + startB + 1) / 2,
                (endA + startA + 1) / 2, endB);
        }
}
function median(arr,start,end)
{
    let n = end - start + 1;
        if (n % 2 == 0) {
            return (
                    arr[start + (n / 2)]
                    + arr[start + (n / 2 - 1)])
                / 2;
        }
        else {
            return arr[start + n / 2];
        }
}

// Driver code
let ar1 = [ 1, 2, 3, 6 ];
        let ar2 = [ 4, 6, 8, 10 ];
        let n1 = ar1.length;
        let n2 = ar2.length;
        if (n1 != n2) {
            document.write(
                "Doesn't work for arrays "
                + "of unequal size<br>");
        }
        else if (n1 == 0) {
            document.write("Arrays are empty.<br>");
        }
        else if (n1 == 1) {
            document.write((ar1[0] + ar2[0]) / 2+"<br>");
        }
        else {
            document.write(
                "Median is "
                + getMedian(
                    ar1, ar2, 0, 0,
                    ar1.length - 1, ar2.length - 1)+"<br>");
        }


F.Remove duplicates from an array
public static int removeduplicates(int arr[], int n){
    if (n == 0 || n == 1) {
        return n;
    }
    Arrays.sort(arr);  
    int j = 0;
    for ( int i = 0; i < n ; i++) {
        if (arr[i] != arr[i-1]) {
            arr[++j] = arr[i];
        }
    }
    return j;
}


H.Rotate an array by k times
var rotate = function(a,k){
  for(var i=0;i<k;i++){
    a.unshift(a.pop())
  }
  return a;
}
console.log(rotate([5,6,7,8,9],3));

