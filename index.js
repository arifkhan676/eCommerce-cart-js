
const product = [
    {
        id: 1,
        name: "Mango",
        price: 100,
        comment: "good"
    },
    {
        id: 2,
        name: "Lichi",
        price: 100,
        comment: "good"
    },
    {
        id: 3,
        name: "Banans",
        price: 100,
        comment: "good"
    }

]

const productList = product.map((item) => {
    return (item);
})

document.getElementById('x').innerHTML = productList.map((item) => {
    var { name, price, comment } = item;
    return (
        `<div class="card" >
  <div class="card-body">
     <h3> ${item.name} </h3>
     <h2> ${item.price} </h2>
     <p> ${item.comment} </p>
     <button class='btn btn-primary' onclick = 'addCart()'  > Add to cart </button>

  </div>
 </div>`
    )
})


/*

            <h5 class="card-title">Product 1</h5>
             <p class="card-text" > 100 tk </p>
             <button id="btnClick" class="btn btn-primary">Add to Card</button>

const btn = document.getElementById('btnClick');

btn.addEventListener('click', function () {
    const ID = document.getElementById('x');

    const CardItem = document.getElementById('y');

    const newItem = CardItem.append(ID);
    console.log(newItem);
})*/