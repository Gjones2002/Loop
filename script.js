for ( i=1000 ; i>=0 ; i-=2 ) {
    console.log(i); 
}
for ( i=0 ; i<10001 ; i++) {
    console.log(i);
}

var arr = ["Breaking Bad"];
for (var i=arr.length; i--;) {
    arr[i] = "My #1 Favorite Show Is " + arr[i]
    console.log(arr)
}

var arr = ["Peaky Blinders"];
for (var i=arr.length; i--;) {
    arr[i] = "My #2 Favorite Show Is " + arr[i]
    console.log(arr)
}

var arr = ["Shameless"];
for (var i=arr.length; i--;) {
    arr[i] = "My #3 Favorite Show Is " + arr[i]
    console.log(arr)
}

   setTimeout(function() { alert ("A Quarter of the way there!"); }, 2500);
   setTimeout(function() { alert ("Half Way There!"); }, 5000);