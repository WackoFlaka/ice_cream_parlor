const itemLists = [{
    // TOPPINGS
    name: 'Sprinkles',
    price: 2,
    quantity: 0
},
{
    name: 'Chocolate Chips',
    price: 2,
    quantity: 0
},
{
    name: 'Gummy Worms',
    price: 2,
    quantity: 0  
},
{
    // VESSELS
    name: 'Waffle Cone',
    price: 3,
    quantity: 0
},
{
    name: 'Waffle Bowl',
    price: 4,
    quantity: 0
},
{
    name: 'Dipped Cone',
    price: 5,
    quantity: 0
},
{
    // ICE CREAM
    name: 'Vanilla',
    price: 3,
    quantity: 0
},
{
    name: 'Chocolate',
    price: 4,
    quantity: 0
},
{
    name: 'Strawberry',
    price: 4,
    quantity: 0
}
]


function addItem(itemName) {
    // pulling the item out of array
    const item = itemLists.find(itemList => itemList.name == itemName)
    item.quantity++
    
    totalList()
    drawList()
}
let total = 0

function totalList() {
    total = 0
    
    itemLists.forEach(itemList => {
        total += itemList.price * itemList.quantity
    })
    
    const totalElement = document.getElementById('total')
    totalElement.innerHTML = total.toString()
}

function drawList() {
    let names = ''
    const itemsQuantity = itemLists.filter(itemlist => itemlist.quantity > 0)
    
    itemsQuantity.forEach(itemList => {
        names += `<tr><td>${itemList.name}</td> <td>${itemList.quantity}</td> <td>$${itemList.price}</td> <td>$${itemList.quantity * itemList.price}</td></tr>`
    })
    
    const printItems = document.getElementById('list')
    printItems.innerHTML = names
}

function clearCart() {
         
    Swal.fire({
        title: "Are you sure you want to continue?",
        text: `Your total is $${total}`,
        showCancelButton: true,
        confirmButtonText: "Confirm",
    }).then((result) => {
        if(result.isConfirmed) {
            Swal.fire("Ordered!", "", "success")
            itemLists.forEach(itemList => itemList.quantity = 0)
            totalList()
            drawList()
        }
    })
 
}

