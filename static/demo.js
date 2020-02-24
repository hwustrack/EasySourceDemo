function toggleNextDiv(clickedElement) {
    let div = clickedElement.nextElementSibling;
    div.classList.toggle("hidden");
}

function hideReddit() {
    document.getElementById('reddit1').classList.add("hidden");
    document.getElementById('reddit2').classList.add("hidden");
}