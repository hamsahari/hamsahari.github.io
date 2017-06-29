document.getElementById('go').onclick = function() {
var inputText = $('#text-input').val();
var thugifiedText = inputText + ", Dawg";
document.getElementById('output').innerHTML = thugifiedText;
}

