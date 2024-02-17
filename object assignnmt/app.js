filterArray = [];

brandArray = [
{
    brand :"LENOVO V15",
    model:"V15 Gen 2",
    src : "https://www.lenovo.com/medias/lenovo-laptops-v-series-v15-gen2-15inch-amd-hero.png?context=bWFzdGVyfHJvb3R8MjEzMzY2fGltYWdlL3BuZ3xoZTQvaDM3LzE0MTkxNTE4MTIyMDE0LnBuZ3xmZmFjNGQ5NmI3YzQwYzRkMDY3MmM3NzQxNDI5ZTZmYjE2ZGM0NzAyNzczNWEzNTllYWVlOTUxYmM4NDY3Y2Ez",
    DESC:"$2200 only"
},
{
    brand :"LENOVO V14",
    model:"V14 Gen 2 ",
    src:"https://www.lenovo.com/medias/lenovo-laptops-v-series-v14-gen2-14inch-intel-gallery.png?context=bWFzdGVyfHJvb3R8MjcxNjk2fGltYWdlL3BuZ3xoNWEvaDE1LzE0MTg2OTE5NjU3NTAyLnBuZ3xmNTU1ODAwOGE5ZTk3Y2Q3MTFiM2FiYWUwMjVmYzk5MTFhNWRhMTVhYmVkMzlkZjY1N2Q0YTZiZDBlNTdkMjUw",
    DESC:"$1200 only"
},
{
    brand :"LENOVO V14",
    model:"V14 Gen 2 (14, AMD)",
    src:"https://www.lenovo.com/medias/lenovo-laptops-v-series-v14-gen2-14inch-amd-gallery.png?context=bWFzdGVyfHJvb3R8MzM5NjE3fGltYWdlL3BuZ3xoY2MvaDgyLzE0MTkxNTEyODc5MTM0LnBuZ3wzYWNmOWU2NmIxNjExOWY3MGRhMjQzNzZlZWMwYWNlZmVjZjdjMDU3MWE4MDYzMjc1MDc5MmI3NDBkMTU4ZGY0",
    DESC:"$4000 only"
},
{
    brand :"LENOVO 500e ",
    model:"500e Gen 3",
    src:"https://www.lenovo.com/medias/lenovo-laptop-lenovo-500e-gen3-gallery-1.png?context=bWFzdGVyfHJvb3R8MTU2NTI5fGltYWdlL3BuZ3xoMmEvaGMxLzExNTExNjcwNTM4MjcwLnBuZ3wxOWM5NWZmMTA4M2ZkMTRiMzM0NTg4OTE2ZjFlYTgxN2I2Y2RmYTU3MmMxYmEzZDkwOTdlYmYxZmViYWYxNTM3",
    DESC:"$1400 only"
},
{
    brand :"Galaxy Book3 Ultra ",
    model:" Intel® Core™ i7",
    src:"https://image-us.samsung.com/us/computers/galaxy-book3-pro/configurator/GB3_Ultra-1-Configurator-800x600.jpg",
    DESC:"$2500  only"
},
{
    brand :"Galaxy Book3 Pro",
    model:"Intel® Core™ i7 ",
    src:"https://image-us.samsung.com/us/computers/galaxy-book3-pro/configurator/GB3-Family-Configurator-800x600.jpg",
    DESC:"$1000 only"
},
{
    brand :"Galaxy Book3 360 ",
    model:" Intel® Core™ i5 | 8GB + 512GB",
    src:"https://image-us.samsung.com/us/computers/galaxy-book3-pro/configurator/GB3_360-1-Configurator-800x600.jpg",
    DESC:"$1800 only"
},
{
    brand :"Galaxy Book3 360 ",
    model:"Intel® Core™ i5 | 8GB + 512GB",
    src:"https://image-us.samsung.com/us/computers/galaxy-book3-pro/configurator/GB3_Pro-2-Configurator-800x600.jpg",
    DESC:"$1500 only"
},
{
    brand :"Galaxy Book3 Ultra ",
    model:" Intel® Core™ i7",
    src:"https://image-us.samsung.com/us/computers/galaxy-book3-pro/configurator/GB3_Ultra-1-Configurator-800x600.jpg",
    DESC:"$3000 only"
},
{
    brand :"MacBook Air",
    model:"13” mode' ",
    src:"https://image-us.samsung.com/us/computers/galaxy-book3-pro/configurator/GB3-Family-Configurator-800x600.jpg",
    DESC:"$2000 only"
},
{
    brand :"Galaxy Book3 360 ",
    model:" Intel® Core™ i5 | 8GB + 512GB",
    src:"https://image-us.samsung.com/us/computers/galaxy-book3-pro/configurator/GB3_360-1-Configurator-800x600.jpg",
    DESC:"$4200 only"
},
{
    brand :"Galaxy Book3 360 ",
    model:"Intel® Core™ i5 | 8GB + 512GB",
    src:"https://image-us.samsung.com/us/computers/galaxy-book3-pro/configurator/GB3_Pro-2-Configurator-800x600.jpg",
    DESC:"$2200 only"
},
]
showcards(brandArray)
//  function


function showcards(currArray) {
    
    
    var cardRow = document.getElementById("cardRow");
    cardRow.innerHTML = ""; // Clear previous cards

    currArray.forEach(function(card) {
        var cardHtml = `
            <div class="col-lg-4 col-md-8 col-sm-12 mb-4">
                <div class="card">
                    <img class="card-img-top" src="${card.src}" alt="Card image cap">
                    <div class="card-body">
                        <h5 class="card-title">${card.brand}</h5>
                        <p class="card-text">${card.model}</p>
                        <p class="card-text">${card.DESC}</p>
                        <a href="#" class="btn btn-primary">Add to Cart</a>
                    </div>
                </div>
            </div>`;
        cardRow.innerHTML += cardHtml;
    });
}




document.getElementById("myinput").addEventListener("keyup", function() {
    text = document.getElementById("myinput").value.toLowerCase();
    filterArray = brandArray.filter(function(a) {
        return a.brand.toLowerCase().includes(text);
    });
    if (text !== "") {
        if (filterArray.length > 0) {
            showcards(filterArray);
            document.getElementById("para").style.display = "none"; // Hide "NOT FOUND"
        } else {
            document.getElementById("para").style.display = "block"; // Show "NOT FOUND"
            document.getElementById("cardRow").innerHTML = ""; // Clear card display
        }
    } else {
        showcards(brandArray); // Show all cards when input is empty
        document.getElementById("para").style.display = "none"; // Hide "NOT FOUND"
    }
});



