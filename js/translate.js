function googleTranslateElementInit() {
    new google.translate.TranslateElement({
        pageLanguage: 'hi',  
        autoDisplay: false
    }, 'google_translate_element');
}

(function () {
    let script = document.createElement("script");
    script.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    document.body.appendChild(script);
})();

function changeLang(lang) {
    let interval = setInterval(() => {
        let combo = document.querySelector(".goog-te-combo");

        if (combo) {
            combo.value = lang;
            combo.dispatchEvent(new Event("change"));
            clearInterval(interval);
        }
    }, 300);

    setTimeout(() => clearInterval(interval), 5000);
}

document.getElementById("langSelect").addEventListener("change", function () {
    changeLang(this.value);
});