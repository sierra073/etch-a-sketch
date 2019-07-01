function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const defaultBlack = (e) => e.target.style.backgroundColor = 'black';
const eraseGray = (e) => e.target.style.backgroundColor = '#C0C0C0';
const randomColor = (e) => e.target.style.backgroundColor = getRandomColor();

// not the best, but since only 3 here, easy enough to hardcode
function setDrawMode(fun) {
  document.querySelectorAll('.grid').forEach((grid) => {
    grid.removeEventListener('mouseover', defaultBlack);
    grid.removeEventListener('mouseover', eraseGray);
    grid.removeEventListener('mouseover', randomColor);
    grid.addEventListener('mouseover', fun);
  });
}

function createGrid(n) {
  for (var rows = 0; rows < n; rows++) {
        for (var columns = 0; columns < n; columns++) {
          grid = document.createElement('div');
          grid.className = 'grid';
          document.querySelector('.grid-container').appendChild(grid);
        };
    };

    //set width and weight
    document.querySelectorAll('.grid').forEach(grid => {
        grid.style.width = `${34/n}vw`;
        grid.style.height = `${34/n}vw`;
    });

    setDrawMode(defaultBlack);
}

function clearGrid(){
   document.querySelectorAll('.grid').forEach((grid) => {
    grid.parentNode.removeChild(grid);
  })
};

function refreshGrid(){
    let n = prompt("How many squares per side?");
    clearGrid();
    createGrid(n);
};

// 'clear grid' and 'colorful mode' buttons
document.querySelector('#new-grid').addEventListener('click', refreshGrid);
document.querySelector('#eraser').addEventListener('click', () => setDrawMode(eraseGray));
document.querySelector('#colorful').addEventListener('click', () => setDrawMode(randomColor));

createGrid(46);
