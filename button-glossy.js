var theme = document.getElementById("theme");
var buttonText = document.getElementById("button-text"); 

function toggleTheme() {

    if(theme.getAttribute('href') == 'light.css') {
        theme.setAttribute('href', 'dark.css');
        buttonText.innerText = '🌒 Glossy glass effect';
    } else { 
        theme.setAttribute('href', 'light.css');
        buttonText.innerText = '☀️ Glossy glass effect';
    } 
}