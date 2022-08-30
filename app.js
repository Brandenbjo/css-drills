let cells = document.querySelectorAll('.row > div');

for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', cellClicked);
    cells[i].addEventListener('dblclick', cellClicked2);
    console.log(i)
    //if (cells[i] == 'X'){
    //    cells[i].addEventListener('click', reload);
    //}
}

//alternates between 'X' and 'O' 
function cellClicked(e) {
    if (e.target.textContent === '' || e.target.textContent === 'O') {
        e.target.textContent = 'X'
        console.log('here')
    } else if (e.target.textContent === 'X'){
        e.target.textContent = 'O'
        console.log('there')
    }
    console.log(cells[0].textContent);
    checkforwinner()
}

function checkforwinner(){
    if(cells[0].textContent === cells[1].textContent && cells[2].textContent ===cells[0].textContent || 
        cells[3].textContent === cells[4].textContent && cells[3].textContent ===cells[5].textContent){
        alert(`the winner is: ${cells[0].textContent}`)
    }
}

function cellClicked2(e) {
    e.target.textContent = ''
}

//if (cells !== ''){
// cells.addEventListener('click', location.reload());}



function reload(t = i) {
if (t == 'X') {
        location.reload()
    }
}