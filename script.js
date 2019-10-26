let width = 6;
let height = 7;
let i = 0;

const cells = document.querySelectorAll('.cells');
const wrapper = document.querySelector('.wrapper');

cells.forEach(elem =>{
    i++;
    elem.id = `${i}`;
});

wrapper.addEventListener('click', event =>{
    let elem;
    if (event.target.tagName === "I") {
        elem = event.target.parentNode
    } else {
        elem = event.target
    }
    deleteTheSame(elem);
});

function deleteTheSame(target){
    let array = elemArray(target.id);
        array.forEach( elem =>{
            if (elem.dataset.image === target.dataset.image && elem.childNodes[0] !== undefined){
                elem.childNodes[0].remove();
                deleteTheSame(elem);
                }
        });
}
function elemArray(id) {
    const array = [];
        if (+id === width){
            let downEl = document.getElementById(`${+id + width}`);
            let leftEl = document.getElementById(`${+id - 1}`);
            let crossEl = document.getElementById(`${+id + width -1}`);
            array.push(downEl,leftEl,crossEl);
        }
        else if(+id === 1){
            let downEl = document.getElementById(`${+id + width}`);
            let rightEl = document.getElementById(`${+id + 1}`);
            let crossEl = document.getElementById(`${+id + width +1}`);
            array.push(downEl,rightEl,crossEl);
        }
        else if(+id === width*height){
            let topEl = document.getElementById(`${+id - width}`);
            let leftEl = document.getElementById(`${+id - 1}`);
            let crossEl = document.getElementById(`${+id - width -1}`);
            array.push(topEl,leftEl,crossEl);
        }

        else if(+id === (width * height) - width +1){
            let topEl = document.getElementById(`${+id - width}`);
            let rightEl = document.getElementById(`${+id +1}`);
            let crossEl = document.getElementById(`${+id - width +1}`);
            array.push(topEl,rightEl,crossEl);
        }
        else if (+id < width){
            let leftEl = document.getElementById(`${+id - 1}`);
            let crossLeftEl = document.getElementById(`${+id + width -1}`);
            let downEl = document.getElementById(`${+id + width}`);
            let crossDownEl = document.getElementById(`${+id + width + 1}`);
            let rightEl = document.getElementById(`${+id + 1}`);
            array.push(downEl,rightEl,leftEl,crossLeftEl,crossDownEl);
        }
        else if (id % width === 0){
            let leftEl = document.getElementById(`${+id - 1}`);
            let crossLeftEl = document.getElementById(`${+id - width -1}`);
            let downEl = document.getElementById(`${+id + width}`);
            let crossDownEl = document.getElementById(`${+id + width - 1}`);
            let topEl = document.getElementById(`${+id - width}`);
            array.push(downEl,topEl,leftEl,crossLeftEl,crossDownEl);
        }
        else if (id > width*height - width){
            let leftEl = document.getElementById(`${+id - 1}`);
            let crossLeftEl = document.getElementById(`${+id - width -1}`);
            let topEl = document.getElementById(`${+id - width}`);
            let crossRightEl = document.getElementById(`${+id - width + 1}`);
            let rightEl = document.getElementById(`${+id + 1}`);
            array.push(rightEl,topEl,leftEl,crossLeftEl,crossRightEl);
        }
        else if (id % width === 1){
            let downEl = document.getElementById(`${+id + width}`);
            let downCrossEl = document.getElementById(`${+id + width + 1}`);
            let topEl = document.getElementById(`${+id - width}`);
            let crossRightEl = document.getElementById(`${+id - width + 1}`);
            let rightEl = document.getElementById(`${+id + 1}`);
            array.push(rightEl,topEl,downEl,downCrossEl,crossRightEl);
        }
        else{
            let downEl = document.getElementById(`${+id + width}`);
            let downCrossEl = document.getElementById(`${+id + width + 1}`);
            let topEl = document.getElementById(`${+id - width}`);
            let crossRightEl = document.getElementById(`${+id - width + 1}`);
            let rightEl = document.getElementById(`${+id + 1}`);
            let leftEl = document.getElementById(`${+id - 1}`);
            let downLeftEl = document.getElementById(`${+id + width - 1}`);
            let topLeftEl = document.getElementById(`${+id - width - 1}`);
            array.push(rightEl,topEl,downEl,downCrossEl,crossRightEl,leftEl,downLeftEl,topLeftEl);
        }
    return array
}



