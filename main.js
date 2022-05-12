const  navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav__ul');
    const navLinks = document.querySelectorAll('.nav__li ');
    
    burger.addEventListener('click',()=>{
        //toggle Nav
         nav.classList.toggle('nav-active');
    
        //Animate links
        navLinks.forEach((link, index) => {
          if(link.style.animation){
            link.style.animation = '';
          } else{
            link.style.animation = `navLinkFade 0.2s ease forwards ${index / 7 + 0}s`;
        }
      });
      //Buerger Animation
      burger.classList.toggle('toggle');
    });
   
 }
 navSlide();

/*FORM*/ 
//funcion para que en el formulario no envie la página a formspree

const $form = document.querySelector('#form')

$form.addEventListener('submit', handleSubmit)

async function handleSubmit(event) {
   event.preventDefault()
    const form= new FormData(this)
    const response = await fetch(this.action, {
        method: this.method,
        body: form,
        headers:{
            'Accept':'application/json'
        }
        })
      
        if (response.ok){
            this.reset() //metodo para limpiar el formulario
            alert('Gracias por contactarme, te escribiré muy pronto!!!! :)  ')
        }
}
