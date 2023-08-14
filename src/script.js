const totalCategories = document.querySelectorAll(".item");
console.log(`Number of ${totalCategories.length} categories.`);

const categoriesArray = [...totalCategories]
  .map(
    categories => `categories: ${categories.children[0].textContent}
Elements: ${categories.children[1].children.length}`
  )
  .join("\n");
console.log(categoriesArray);