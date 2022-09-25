window.addEventListener('resize', function(event) {
    let menu = document.getElementById("menu");
    if (window.outerWidth <= 600)
        menu.style.display = "none";   
    else 
        menu.style.display = "flex";
}, true);

function openModal(mn){
    let modal = document.getElementById(mn);
    if (typeof modal =='undefined' || modal==null)
        return;

        modal.style.display ='flex';
        document.body.style.overflow = 'hidden';
}

function closeModal(mn){
    let modal = document.getElementById(mn);
    if (typeof modal =='undefined' || modal==null)
        return;
        
    modal.style.display ='none';
    document.body.style.overflow = 'auto';
}

function menuToggle() {
    let menu = document.getElementById("menu");    
    if (menu.style.display === "none") {
        menu.style.display = "flex";        
    } else {
        menu.style.display = "none";
    }
  }