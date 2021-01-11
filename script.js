const toggleSwitch = document.querySelector('input[type="checkbox"]')
const nav = document.getElementById('nav')
const toggleIcon = document.getElementById('toggle-icon')
const image1 = document.getElementById('image1')
const image2 = document.getElementById('image2')
const image3 = document.getElementById('image3')
const textBox = document.getElementById('text-box')

// Drak or Light Images 
function imageMode(color){
    image1.src =`img/undraw_proud_coder_${color}.svg`
    image2.src =`img/undraw_conceptual_idea_${color}.svg`
    image3.src =`img/undraw_feeling_proud_${color}.svg`

}

//Dark Mode
function darkMode(){
    nav.style.backgroundColor = 'rgb(0 0 0 /50%)'
    console.log(textBox)
    textBox.style.backgroundColor = 'rgb(255 255 255 /50%)'
    //0:span.toogle-text
    //1:fas.fa-sun
    toggleIcon.children[0].textContent = 'Dark Mode'
    // toggleIcon.children[1].classList.remove('fa-sun')
    // toggleIcon.children[1].classList.add('fa-moon')
    // image1.src ='img/undraw_proud_coder_dark.svg'
    // image2.src ='img/undraw_conceptual_idea_dark.svg'
    // image3.src ='img/undraw_feeling_proud_dark.svg'
    toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon')
    imageMode('dark')

}

//Light Mode
function lightMode(){
    nav.style.backgroundColor = 'rgb(255 255 255 /50%)'
    console.log(textBox)
    textBox.style.backgroundColor = 'rgb(0 0 0 /50%)'
    //0:span.toogle-text
    //1:fas.fa-sun
    toggleIcon.children[0].textContent = 'Light Mode'
    toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun')
    imageMode('light')
}

// change theme dynamically
function switchTheme(event){

        if (event.target.checked){
            document.documentElement.setAttribute('data-theme','dark')
            //save session 
            localStorage.setItem('theme','dark')
            darkMode()
        }else{
            delete document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme','light')
            lightMode()
        }
}

toggleSwitch.addEventListener('change', switchTheme )

//check LocalStorage or Theme
const currentTheme = localStorage.getItem('theme')

if (currentTheme){
    document.documentElement.setAttribute('data-theme',currentTheme)

    if (currentTheme === 'dark'){
        toggleSwitch.checked = true
        darkMode()
    }
}