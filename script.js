

document.getElementById('convert').onclick = tempConvert;
document.getElementById('clear').onclick = clearForm;

function tempConvert() {
    
    let fahrenheit = document.getElementById("fahrenheit").value;
    let celsius = document.getElementById("celsius").value;
  
  if (celsius != '') {
        fahrenheit = (parseFloat(celsius) * 1.8) + 32;
    } else {
        celsius = (parseFloat(fahrenheit) - 32) / 1.8;
    }
  
    document.getElementById('fahrenheit').value = parseFloat(fahrenheit);
    document.getElementById('celsius').value = parseFloat(celsius);
}
function clearForm() {
    document.getElementById('fahrenheit').value = '';
    document.getElementById('celsius').value = '';
} 
