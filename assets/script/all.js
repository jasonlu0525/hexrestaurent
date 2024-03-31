const  navbarToggler = document.querySelector('.navbar-toggler');
const  navbarTogglerIcon = document.querySelector('.navbar-toggler> .fa-solid ');
const  navbarNav = document.querySelector('.navbar-nav');

navbarToggler.addEventListener('click',function(){
    navbarNav.classList.toggle('show');
    const isNavbarHasShown =  navbarNav.classList.contains("show");
    // 切換 hamburger icon
    navbarTogglerIcon.classList.toggle('fa-xmark', isNavbarHasShown);
    console.log(isNavbarHasShown);

    // 禁止 y 軸 scrollbar
    if(isNavbarHasShown){
        document.body.style = "overflow-y:hidden";
    }else {
        document.body.style = '';
    }
})
navbarNav.addEventListener('click',function(e){
    if(e.target.classList.contains('navbar-link')){
        this.classList.remove('show');
        navbarTogglerIcon.classList.remove('fa-xmark');
        document.body.style = '';
    }

})
