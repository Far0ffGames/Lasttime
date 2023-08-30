document.addEventListener("DOMContentLoaded", function () {
    const queryString = window.location.search.substring(1);

    const pageMappings = {
        "flappybird": "https://nate-games.github.io/0/g/flappybird/game/",
        "stickmanhook": "https://nate-games.github.io/0/g/stickmanhook/game/",
        "doodlejump": "https://nate-games.github.io/0/g/doodle-jump/game/",
        "geometrydash": "https://cdn.nate-games.workers.dev/?url:https://nate-games.github.io/0/g/geodash",
        "ovo": "https://nate-games.github.io/0/g/ovo/game/",
        "ovo2": "https://nate-games.github.io/0/g/ovo2/game/",
        "ovo3": "https://nate-games.github.io/0/g/ovo3/game/",
        "404": "/404",
    };

    const filePath = pageMappings[queryString];

    if (filePath) {
        document.getElementById("content").src = filePath;
    } else {
        window.location.href = "/load?404";
    }
});