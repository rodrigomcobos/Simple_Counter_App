/*************** Button and Counter Variables **************/
const counter = document.getElementById('counter');
const btns = document.querySelectorAll('.btn');
let count = 0;

/*************** Adding Click Event Listener **************/
btns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    const styles = e.currentTarget.classList; //setting variable for styles targeting current target of btn(all .btn)

    /* click events if specific button is pressed */
    if(styles.contains('increase')) {
      count++;
      counter.style.color = 'green';
    } else if(styles.contains('decrease')) {
      count--;
      counter.style.color = 'red';
    } else {
      count = 0;
      counter.style.color = 'grey';
    }
    counter.textContent = count;
  })
})