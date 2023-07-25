
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
        price: 200,
        comment: "Best"
    },
    {
        id: 3,
        name: "Banans",
        price: 50,
        comment: "average"
    },
    {
        id: 4,
        name: "Papaya",
        price: 150,
        comment: "Delicious"
    }

]

const productList = [...new Set(product.map((item) => {
    return (item);
})
)]

document.getElementById('x').innerHTML = productList.map((item, idx) => {
    var { name, price, comment } = item;
    return (
        `<div class="card" >
        <div class="card-body">
           <h3> ${name} </h3>
           <h2> ${price} </h2>
           <p> ${comment} </p>
           <button class='btn btn-primary' onclick = 'addCart(${idx})'  > Add to cart </button>
      
        </div>
       </div>`
    )
}).join('')



const cart = [];

function addCart(a) {
    cart.push({ ...productList[a] });
    display();
}
function remove(a) {
    cart.pop();
    display();
}


function display(a) {
    if (cart.length == 0) {
        document.getElementById('y').innerHTML = 'You cart is empty'

    } else {
        document.getElementById('y').innerHTML = cart.map((items) => {
            var { name, price, comment } = items;
            return (
                `<div class="card" >
                <div class="card-body">
                   <h3> ${name} </h3>
                   <h2> ${price} </h2>
                   <p> ${comment} </p>
                   <button class='btn btn-primary' onclick = 'remove()'  > Remove </button>
              
                </div>
               </div>`
            )
        }).join('')
    }


}


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