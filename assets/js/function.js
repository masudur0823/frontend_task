function handleClose () {
    const menu = document.getElementById("mobile_menu");
    const backdrop = document.getElementById("backdrop");

    menu.style.left="-1000px"
    backdrop.style.display="none"
}

function handleBar() {
    const menu = document.getElementById("mobile_menu");
    const backdrop = document.getElementById("backdrop");

    menu.style.left="0px"
    backdrop.style.display="block"
}

function backdrop() {
    const menu = document.getElementById("mobile_menu");
    const backdrop = document.getElementById("backdrop");

    menu.style.left="-1000px"
    backdrop.style.display="none"
}