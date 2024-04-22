window.revelar = ScrollReveal({ reset: true });

revelar.reveal('.textReveal',{
    duration: 1000,
    distance: '100px',
    easing: 'ease-in-out'
});
revelar.reveal('.perfilImgReveal',{
    duration: 2000,
    distance: '100px',
    easing: 'ease-in-out',
    origin: 'top'
})
revelar.reveal('.rightImgReveal',{
    duration: 1000,
    distance: '200px',
    easing: 'ease-in-out',
    origin: 'right'
})
revelar.reveal('.leftImgReveal',{
    duration: 1000,
    distance: '200px',
    easing: 'ease-in-out',
    origin: 'left'
})