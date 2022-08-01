const lightMode = document.querySelector('.child1')
const prevModalVDiv = document.querySelector('.prev-board')
darkMode.addEventListener('click', ()=>{
    lightMode.classList.remove('active-toggle')
    darkMode.classList.add('active-toggle')
prevModalVDiv.style.backgroundColor = '#323337'
   
})
lightMode.addEventListener('click' , ()=>{
    lightMode.classList.add('active-toggle')
    darkMode.classList.remove('active-toggle')
    prevModalVDiv.style.backgroundColor = '#dddddd'
})

const modal = document.querySelector('#modal')
const closeButton = document.querySelector('.close-modal');

const closeModal = () =>{
    modal.classList.add('hidden')
        }
 closeButton.addEventListener('click', closeModal )
 document.body.addEventListener('click', closeModal)

document.addEventListener('keydown', (e)=>{
    // console.log(e.key)
    if(e.key === 'Escape' && !modal.classList.contains('hidden')){
        closeModal();
    }
})

