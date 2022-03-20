const scrollTop = document.querySelector('[data-scroll-top]')

window.onscroll = () => {
    window.scrollY > 200 ? scrollTop.classList.add('btn-scroll-visible') 
    : scrollTop.classList.remove('btn-scroll-visible') 
};