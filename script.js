function createGrid(n) {
  for (var rows = 0; rows < n; rows++) {
        for (var columns = 0; columns < n; columns++) {
          grid = document.createElement('div');
          grid.className = 'grid';
          document.querySelector('.grid-container').appendChild(grid);
        };
    };
    document.querySelectorAll('.grid').forEach(el => {
        el.style.width = `${650/n}px`;
        el.style.height = `${650/n}px`;
    });
}

createGrid(40);

const grids = document.querySelectorAll('.grid');
grids.forEach((grid) => {
  grid.addEventListener('mouseover', () => grid.style.backgroundColor = 'black');
});
