if(window.innerWidth < 1025){
    let grid= document.getElementById('carousel1');
    grid.classList.remove('grid');
    grid.classList.add('owl-carousel');
    grid.classList.add('owl-theme');

    $('#carousel1').owlCarousel({
    items: 1,  
    loop: true, 

  });
}

const handleClickMenu = () =>{
    const menu =  document.querySelector('.menu');
    if(menu.classList.contains('active')){
        menu.classList.remove('active');
    }else{
        menu.classList.add('active');
    }
}
