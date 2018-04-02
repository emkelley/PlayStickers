
// le burger
(function () {
    var burger = document.querySelector('.burger');
    var menu = document.querySelector('#' + burger.dataset.target);
    burger.addEventListener('click', function () {
        burger.classList.toggle('is-active');
        menu.classList.toggle('is-active');
    });
})();

// controller color switcher
function changeSrc() {
    if (document.getElementById("blue").checked) {
        document.getElementById("picture").src = "assets/images/controller-base__blue.png";
        document.getElementById("overlay_bg_accent").style.backgroundImage = "url('assets/images/hero-overlay__blue.png')";
    } else if (document.getElementById("magenta").checked) {
        document.getElementById("picture").src = "assets/images/controller-base__magenta.png";
        document.getElementById("overlay_bg_accent").style.backgroundImage = "url('assets/images/hero-overlay__magenta.png')";
    } else if (document.getElementById("tomato").checked) {
        document.getElementById("picture").src = "assets/images/controller-base__tomato.png";
        document.getElementById("overlay_bg_accent").style.backgroundImage = "url('assets/images/hero-overlay__tomato.png')";
    } else if (document.getElementById("green").checked) {
        document.getElementById("picture").src = "assets/images/controller-base__green.png";
        document.getElementById("overlay_bg_accent").style.backgroundImage = "url('assets/images/hero-overlay__green.png')";
    } else if (document.getElementById("silver").checked) {
        document.getElementById("picture").src = "assets/images/controller-base__silver.png";
        document.getElementById("overlay_bg_accent").style.backgroundImage = "url('assets/images/hero-overlay__silver.png')";
    }
}

// controller color switcher
function stickerBg() {
    if (document.getElementById("batman").checked) {
        document.getElementById("heroBg").style.backgroundImage = "url('assets/images/batman-bg.png')";
        document.getElementById("stickerActive").src = "assets/images/controller-sticker__batman.png";
    } else if (document.getElementById("destiny").checked) {
        document.getElementById("heroBg").style.backgroundImage = "url('assets/images/destiny-bg.png')";
        document.getElementById("stickerActive").src = "assets/images/controller-sticker__destiny.png";
    } else if (document.getElementById("halo").checked) {
        document.getElementById("heroBg").style.backgroundImage = "url('assets/images/halo-bg.png')";
        document.getElementById("stickerActive").src = "assets/images/controller-sticker__halo.png";
    }  else if (document.getElementById("aperture").checked) {
        document.getElementById("heroBg").style.backgroundImage = "url('assets/images/aperture-bg.png')";
        document.getElementById("stickerActive").src = "assets/images/controller-sticker__aperture.png";
    } else if (document.getElementById("driveclub").checked) {
        document.getElementById("heroBg").style.backgroundImage = "url('assets/images/driveclub-bg.png')";
        document.getElementById("stickerActive").src = "assets/images/controller-sticker__driveclub.png";
    } else if (document.getElementById("forza").checked) {
        document.getElementById("heroBg").style.backgroundImage = "url('assets/images/forza-bg.png')";
        document.getElementById("stickerActive").src = "assets/images/controller-sticker__forza.png";
    }
}
