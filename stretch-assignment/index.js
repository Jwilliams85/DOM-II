// const rocket= document.querySelector(".blocks" );
//   rocket.addEventListener('wheel', (e) => 
//   e.target.style.transform = 'scale(1.5)');

//   rocket.addEventListerner('click', (e) =>
//   e.target.style.color = "red"
//   )
 
const grayBlock = document.querySelector('.block--gray')
const parentElement = document.querySelectorAll('.blocks')
grayBlock.addEventListener ('click', (event) => {
    grayBlock.style.backgroundColor="yellow"
})
