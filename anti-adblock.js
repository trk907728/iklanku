const apiAntiADBLOCK = "/ads.js";
var hostUri = "ads.soalcinta.my.id";
const targetDirect = "https://bit.ly/3Be8tsp";
(() => {
    const el = document.createElement("script");
    el.setAttribute("src", "https://" + hostUri + apiAntiADBLOCK);
    document.querySelector("body").append(el);
    el.onerror = () => {
        if (targetDirect) {
            window.location.href = targetDirect;
        };
    };
})();
