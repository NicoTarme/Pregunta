const yesBtn =document.querySelector('*#yesBtn')

yesBtn.addEventListener('click',function() {
    alert('Listo nos vemos a la salida. Avisame al wsp')

});


const noBtn =document.querySelector('*#noBtn')

noBtn.addEventListener('mouseover',function () {
    const randomX =parseInt(Math.random()*100);
    const randomY =parseInt(Math.random()*100);
    noBtn.style.setProperty('top',randomY+'%');
    noBtn.style.setProperty('left',randomX+'%');
    noBtn.style.setProperty('transform',`translate(-${randomX}%,-${randomY}%)`);
})