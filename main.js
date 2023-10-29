const menubtn = document.querySelector('.toggle');
const menu = () => {
    const menu = document.querySelector('.secondary_nav');
  
    const isopend = menubtn.getAttribute('aria-expanded');
    if (isopend === 'false'){
        menubtn.setAttribute('aria-expanded','true');
        menubtn.classList.add('active');
        menu.classList.add('show');
    }else{
        menubtn.setAttribute('aria-expanded','false');
        menubtn.classList.remove('active');
        menu.classList.remove('show');
    }   
}


const onclick = (e) => {
    e.preventDefault();
    menu();
}

menubtn.addEventListener('click',onclick);


const span = document.querySelector('#current');
const currentYear = new Date();
span.innerHTML = currentYear.getFullYear();