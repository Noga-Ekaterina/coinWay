const pagination = document.querySelector('.pagination');
const pages = 10;
const pageActive = 1;

for (let i = 0; i < pages; i++) {
   pagination.insertAdjacentHTML("beforeend", `
         <a class="pagination__item ${i+1 == pageActive ? 'pagination__item--active' :''}">${i+1}</a>
      `)

   if (i == 3 || (i==pageActive&& i>=3 && i<pages - 4)){
      pagination.insertAdjacentHTML("beforeend", `<button class="pagination__item pagination__item-open">...</button>`)
   }
}

const paginationItems = document.querySelectorAll('a.pagination__item');

paginationItems.forEach((item, index) => {
  if (index >= 3 && index <= pages - 4 && index+ 1 !=pageActive) {
    item.classList.add('pagination__item--hidden');
  }
});

const paginationOpen = document.querySelectorAll('.pagination__item-open');

paginationOpen.forEach(open=>{
   open.addEventListener("click", ()=>{
      open.classList.add('pagination__item--hidden');
      paginationItems.forEach(item=>{
         item.classList.remove('pagination__item--hidden');
      })
   })
})