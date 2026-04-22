const links = document.querySelectorAll('.services__tabs-link');
const activeLinkClass = 'services__tabs-link-active';
const activeClass = 'services__tabs-content-item--active';

links.forEach(link => {
  link.addEventListener('click', (event) => {
    links.forEach(item => {
      item.classList.remove(activeLinkClass);
    });

    event.target.classList.add(activeLinkClass);

    const id = event.currentTarget.dataset.id; // Safest for getting the bound element's ID
    const contentItems = document.querySelectorAll('.services__tabs-content-item');

    contentItems.forEach(content => {
      content.classList.remove(activeClass);
    });

    const content = document.querySelector(`.services__tabs-content-item[data-id="${id}"]`);

    content.classList.add(activeClass);
  })
})
