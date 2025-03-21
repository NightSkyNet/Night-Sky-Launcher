window.onload = function() {
    setTimeout(function() {
        const loadingScreen = document.getElementById('loadingScreen');
        loadingScreen.style.opacity = '0';
        setTimeout(() => loadingScreen.style.display = 'none', 500);
    }, 3000);
};

document.getElementById("launchButton").addEventListener("click", function() {
    let clientURL = document.getElementById("clientSelect").value;
    if (clientURL) {
        window.location.href = clientURL;
    } else {
        alert("Please select a client version!");
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const dropdown = document.querySelector(".custom-dropdown");
    const selected = document.querySelector(".dropdown-selected");
    const options = document.querySelector(".dropdown-options");
    const items = options.querySelectorAll("li");
    let selectedURL = null;

    dropdown.addEventListener("click", function () {
        dropdown.classList.toggle("open");
    });

    items.forEach(item => {
        item.addEventListener("click", function () {
            selected.textContent = this.textContent;
            selectedURL = this.getAttribute("data-url");
            dropdown.classList.remove("open");
        });
    });

    document.getElementById("launchButton").addEventListener("click", function () {
        if (selectedURL) {
            window.location.href = selectedURL;
        } else {
            alert("Please select a client version!");
        }
    });

    document.addEventListener("click", function (event) {
        if (!dropdown.contains(event.target)) {
            dropdown.classList.remove("open");
        }
    });
});
