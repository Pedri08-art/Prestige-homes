// for toggle menu 
nav = document.querySelector('.nav');
tog = document.querySelector("#toggle i");
but = document.querySelector('.but')

tog.addEventListener('click', () => {
    if (tog.classList.contains("fa-bars")){
        nav.classList.toggle("show");
        tog.classList.remove("fa-bars");
        tog.classList.add("fa-xmark");
        but.classList.toggle('sun');
    }else{
        tog.classList.add("fa-bars");
        nav.classList.toggle('show');
        but.classList.toggle('sun');
    }
})



// for light-dark mode
darkn = document.getElementById("contrast");

darkn.addEventListener('click', () => {
    if(darkn.classList.contains("fa-moon")){
        document.body.classList.add('darkm');
        darkn.classList.remove("fa-moon");
        darkn.classList.add("fa-sun")
    }else{
        darkn.classList.add('fa-moon');
        document.body.classList.remove('darkm');
    }
})

// scroll effect 