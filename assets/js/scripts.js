
// this shit is so hacked together i am ashamed to even look at it


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
        document.getElementById("batmanActive").classList.add("stickerActive");
        document.getElementById("destinyActive").classList.remove("stickerActive");
        document.getElementById("haloActive").classList.remove("stickerActive");
        document.getElementById("apertureActive").classList.remove("stickerActive");
        document.getElementById("driveclubActive").classList.remove("stickerActive");
        document.getElementById("forzaActive").classList.remove("stickerActive");
    } else if (document.getElementById("destiny").checked) {
        document.getElementById("heroBg").style.backgroundImage = "url('assets/images/destiny-bg.png')";
        document.getElementById("stickerActive").src = "assets/images/controller-sticker__destiny.png";
        document.getElementById("destinyActive").classList.add("stickerActive");
        document.getElementById("batmanActive").classList.remove("stickerActive");
        document.getElementById("haloActive").classList.remove("stickerActive");
        document.getElementById("apertureActive").classList.remove("stickerActive");
        document.getElementById("driveclubActive").classList.remove("stickerActive");
        document.getElementById("forzaActive").classList.remove("stickerActive");
    } else if (document.getElementById("halo").checked) {
        document.getElementById("heroBg").style.backgroundImage = "url('assets/images/halo-bg.png')";
        document.getElementById("stickerActive").src = "assets/images/controller-sticker__halo.png";
        document.getElementById("haloActive").classList.add("stickerActive");
        document.getElementById("destinyActive").classList.remove("stickerActive");
        document.getElementById("batmanActive").classList.remove("stickerActive");
        document.getElementById("apertureActive").classList.remove("stickerActive");
        document.getElementById("driveclubActive").classList.remove("stickerActive");
        document.getElementById("forzaActive").classList.remove("stickerActive");
    }  else if (document.getElementById("aperture").checked) {
        document.getElementById("heroBg").style.backgroundImage = "url('assets/images/aperture-bg.png')";
        document.getElementById("stickerActive").src = "assets/images/controller-sticker__aperture.png";
        document.getElementById("apertureActive").classList.add("stickerActive");
        document.getElementById("destinyActive").classList.remove("stickerActive");
        document.getElementById("haloActive").classList.remove("stickerActive");
        document.getElementById("batmanActive").classList.remove("stickerActive");
        document.getElementById("driveclubActive").classList.remove("stickerActive");
        document.getElementById("forzaActive").classList.remove("stickerActive");
    } else if (document.getElementById("driveclub").checked) {
        document.getElementById("heroBg").style.backgroundImage = "url('assets/images/driveclub-bg.png')";
        document.getElementById("stickerActive").src = "assets/images/controller-sticker__driveclub.png";
        document.getElementById("driveclubActive").classList.add("stickerActive");
        document.getElementById("destinyActive").classList.remove("stickerActive");
        document.getElementById("haloActive").classList.remove("stickerActive");
        document.getElementById("apertureActive").classList.remove("stickerActive");
        document.getElementById("batmanActive").classList.remove("stickerActive");
        document.getElementById("forzaActive").classList.remove("stickerActive");
    } else if (document.getElementById("forza").checked) {
        document.getElementById("heroBg").style.backgroundImage = "url('assets/images/forza-bg.png')";
        document.getElementById("stickerActive").src = "assets/images/controller-sticker__forza.png";
        document.getElementById("forzaActive").classList.add("stickerActive");
        document.getElementById("destinyActive").classList.remove("stickerActive");
        document.getElementById("haloActive").classList.remove("stickerActive");
        document.getElementById("apertureActive").classList.remove("stickerActive");
        document.getElementById("driveclubActive").classList.remove("stickerActive");
        document.getElementById("batmanActive").classList.remove("stickerActive");
    }
}
