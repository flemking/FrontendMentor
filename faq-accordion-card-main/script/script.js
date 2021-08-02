const toggles = document.querySelectorAll('.toggle')
const icons = document.querySelectorAll('i')

function handleClick() {
    this.classList.toggle('display');
}

toggles.forEach(toggle => toggle.addEventListener('click', handleClick))