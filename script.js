let items = ['Item 1', 'Item 2', 'Item 3'];

function displayItems() {
  const itemList = document.getElementById('itemList');
  itemList.innerHTML = '';

  items.forEach((item) => {
    const li = document.createElement('li');
    li.textContent = item;
    itemList.appendChild(li);
  });
}

function addItem() {
  const itemInput = document.getElementById('itemInput');
  const newItem = itemInput.value.trim();

  if (newItem !== '') {
    items.push(newItem);
    itemInput.value = '';
    displayItems();
  } else {
    alert('Please enter a valid item.');
  }
}

displayItems();
