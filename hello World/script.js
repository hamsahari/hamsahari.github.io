document.getElementById('go').onclick = function() {
var inputText = $('#text-input').val();
var thugifiedText ="hello," + inputText;
document.getElementById('output').value = thugifiedText;
}

document.getElementById('clear').onclick = function() {
document.getElementById('output').value = ""
document.getElementById('text-input').value = ""
}