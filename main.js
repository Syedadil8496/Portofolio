// Function expression to select elements `

const selectElement = (s) => document.querySelector(s);
const navLinks = document.querySelectorAll(".nav-link");

selectElement(".burger-menu-icon").addEventListener("click", () => {
    selectElement(".nav-list").classList.toggle("active");
    selectElement(".burger-menu-icon").classList.toggle("toggle")

    navLinks.forEach((link, index) => {
        if (link.style.animation){
            link.style.animation = ""
        }else{
            link.style.animation = `navLinkAnimate 0.5s ease forwards ${ index/7 + 0.5}s`
            console.log(index/7 + 0.5)
        }
    })
});

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        selectElement(".nav-list").classList.toggle("active");
        selectElement(".burger-menu-icon").classList.toggle("toggle");

        navLinks.forEach((link, index) => {
            if (link.style.animation){
                link.style.animation = ""
            }else{
                link.style.animation = `navLinkAnimate 0.5s ease forwards ${ index/7 + 0.5}s`
                console.log(index/7 + 0.5)
            }
        })
    })
})
window.onload = function() {
    // Scroll to the first section when the page loads
    var firstSection = document.getElementById('landing-page');
    if (firstSection) {
      firstSection.scrollIntoView();
    }
  };


        let orn = getOrientation();
        let out = document.getElementById('output');
        out.textContent = orn;
            
        function getOrientation() {
            let _orn = screen.msOrientation ||
            (screen.orientation || screen.mozOrientation).type;
        
            switch(_orn){
                case 'portrait-primary':
                case 'portrait-secondary':
                    
                    break;
                case 'landscape-primary':
                    console.log('This is the laptop/desktop version')
                    break;
                case 'landscape-secondary':
                    break;
                case undefined:
                    //not supported
                    break;
                default:
                    //something unknown
            }
            return _orn;
        }
        
        window.addEventListener('orientationchange', (ev)=>{
            orn = getOrientation();
            out.textContent = orn;
            console.dir(ev)
        })

  
