const heights = [164, 157, 160, 143, 170];

const heightList = document.querySelector('#height-list');
const addBtn = document.querySelector('#add-btn');
const filterBtn = document.querySelector('#filter-btn');

function renderHeights(list) {
  heightList.innerHTML = '';

  list.forEach((value, index) => {
    const li = document.createElement('li');
    li.textContent = `${index + 1}) ${value}`;
    heightList.appendChild(li);
  });
}

function addHeight() {
  const input = prompt('Введите рост ученика:');

  if (input === null) {
    return;
  }

  const value = +(input.trim().replace(',', '.'));

  if (input.trim() === '' || Number.isNaN(value) || value <= 0) {
    alert('Рост не введён!');
    return;
  }

  heights.push(value);
  renderHeights(heights);
}

function filterHeights() {
  const input = prompt('Введите минимальный рост:');

  if (input === null) {
    return;
  }

  if (input.trim() === '') {
    renderHeights(heights);
    return;
  }

  const min = +(input.trim().replace(',', '.'));

  if (Number.isNaN(min)) {
    renderHeights(heights);
    return;
  }

  renderHeights(heights.filter((h) => h >= min));
}

addBtn.addEventListener('click', addHeight);
filterBtn.addEventListener('click', filterHeights);

renderHeights(heights);