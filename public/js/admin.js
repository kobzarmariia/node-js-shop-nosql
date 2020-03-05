//we don’t immediately return the page without the product, first we delete it using js
const deleteProduct = btn => {
  const prodId = btn.parentNode.querySelector("[name=productId]").value;
  const csrf = btn.parentNode.querySelector("[name=_csrf]").value;

  const productElement = btn.closest("article");

  fetch("/admin/product/" + prodId, {
    //async request
    method: "DELETE",
    headers: {
      "csrf-token": csrf
    }
  })
    .then(result => {
      //console.log(result); //respose
      return result.json();
    })
    .then(data => {
      console.log(data);
      productElement.parentNode.removeChild(productElement); //page was not reloaded (just updated)
    })
    .catch(err => {
      console.log(err);
    });
};
