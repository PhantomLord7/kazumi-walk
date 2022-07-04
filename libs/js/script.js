window.addEventListener('load', () => {
    let loader = document.querySelector('.loader')
    setTimeout(() => {
        loader.remove();
    }, 12000);
})