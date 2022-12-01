let menu = [
    {
        id: 1,
        category: 'Entrees',
        image: 'Assets/images/pizza.jpg',
        title: 'Pizza',
        price: '$14.50',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit ducimus mollitia nesciunt voluptates omnis perspiciatis iusto cupiditate expedita debitis inventore.'
    },
    {
        id: 2,
        category: 'Entrees',
        image: 'Assets/images/pasta.jpg',
        title: 'Pasta',
        price: '$12.50',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, dignissimos"
    },
    {
        id: 3,
        category: 'Entrees',
        image: 'Assets/images/quesadilla.jpg',
        title: 'Quesadilla',
        price: '$9.99',
        description: "Odit perspiciatis officia ad maxime quo iusto. Ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
        id: 4,
        category: 'Entrees',
        image: 'Assets/images/salmon.jpg',
        title: 'Salmon',
        price: '$17.25',
        description: "Esse animi minus ratione voluptatem nemo cumque qui est dolorem voluptatum facilis nam veniam temporibus quibusdam id, deleniti illo velit minima distinctio expedita beatae repellat eius!"
    },
    {
        id: 5,
        category: 'Entrees',
        image: 'Assets/images/steak.jpg',
        title: 'Steak',
        price: '$21.99',
        description: "Quo et labore amet non quis nemo incidunt, placeat vitae voluptatem accusantium, nihil corrupti laboriosam itaque quaerat distinctio rem at qui voluptate sit."
    },
    {
        id: 6,
        category: 'Entrees',
        image: 'Assets/images/porkchop.jpg',
        title: 'Porkchop',
        price: '$14.99',
        description: "Corporis possimus, aperiam quidem distinctio. Ab, explicabo, aperiam porro cumque deleniti."
    },
    {
        id: 7,
        category: 'Sides',
        image: 'Assets/images/bread.jpg',
        title: 'Bread',
        price: '$3.99',
        description: "Temporibus facilis sequi pariatur sapiente laboriosam, ab exercitationem."
    },
    {
        id: 8,
        category: 'Sides',
        image: 'Assets/images/salad.jpg',
        title: 'Salad',
        price: '$4.99',
        description: "Tenetur id animi, maiores porro nobis deleniti minima. Incidunt laborum quos facere molestiae ullam odio, eius velit omnis eveniet praesentium."
    },
    {
        id: 9,
        category: 'Sides',
        image: 'Assets/images/butternutSoup.jpg',
        title: 'Soup',
        price: '$2.99',
        description: "Exercitationem earum iure illo maxime minima facilis dolorem tenetur maiores."
    },
    {
        id: 10,
        category: 'Sides',
        image: 'Assets/images/naan.jpg',
        title: 'Naan',
        price: '$1.99',
        description: "Eveniet praesentium reprehenderit minus fugit illo architecto id porro possimus fugiat numquam ."
    },
    {
        id: 11,
        category: 'Sides',
        image: 'Assets/images/fries.jpg',
        title: 'Fries',
        price: '$0.99',
        description: "Lias, delectus voluptates quis porro facere, error exercitationem minima harum nam a nobis quo dignissimos voluptate, corrupti asperiores magni odit repellendus!"
    },
    {
        id: 12,
        category: 'Sides',
        image: 'Assets/images/tomato.jpg',
        title: 'Tomato',
        price: '$0.99',
        description: "Cum expedita labore blanditiis corrupti quaerat sit explicabo a non quos voluptas repudiandae nulla suscipit voluptatibus."
    },
    {
        id: 13,
        category: 'Desserts',
        image: 'Assets/images/raspberryCake.jpg',
        title: 'Raspberry Cake',
        price: '$4.99',
        description: "Nihil cumque voluptatibus enim incidunt a cupiditate delectus, inventore ab at sequi libero molestias repellat rem dolore."
    }, 
    {
        id: 14,
        category: 'Desserts',
        image: 'Assets/images/fruitBowl.jpg',
        title: 'Fruit Bowl',
        price: '$3.99',
        description: "Quidem illo optio adipisci laboriosam ipsam culpa maiores. Sunt quos culpa repellat ducimus ad sit in doloremque."
    },
    {
        id: 15,
        category: 'Desserts',
        image: 'Assets/images/lemonTart.jpg',
        title: 'Lemon Tart',
        price: '$4.99',
        description: "Sit amet consectetur adipisicing elit. Nihil cumque voluptatibus enim incidunt a cupiditate delectus, inventore ab at sequi."
    }, 
    {
        id: 16,
        category: 'Desserts',
        image: 'Assets/images/cookie.jpg',
        title: 'Cookie',
        price: '$2.99',
        description: "Aliquid excepturi est libero quod praesentium quis dolor aspernatur totam."
    }, 
    {
        id: 17,
        category: 'Desserts',
        image: 'Assets/images/brownie.jpg',
        title: 'Brownie',
        price: '$2.99',
        description: "Enim aliquid facere nemo, delectus quos aut debitis aperiam quod ab nulla eum, perspiciatis exercitationem."
    }, 
    {
        id: 18,
        category: 'Desserts',
        image: 'Assets/images/cupcake.jpg',
        title: 'Cupcake',
        price: '$1.99',
        description: "Consectetur adipisicing elit. Quo, ad fugit. Repellat hic consectetur eveniet ratione molestias enim aliquid."
    }
]

const menuContainer = document.querySelector('.menu-items-container')
const btns = document.querySelectorAll('.filter-button')

window.addEventListener('DOMContentLoaded', () => {
    displayMenuItems(menu)
    btns.forEach(button => {
        button.addEventListener('click', (e) => {
            let foodCategory = e.target.dataset.name
            if (foodCategory == 'All') {
                displayMenuItems(menu)
            } else {
                let filteredMenuCategory = menu.filter((menuItem) => {
                    if (foodCategory == menuItem.category) {
                        return menuItem
                    } 
                })
                displayMenuItems(filteredMenuCategory) 
            }           
        })
    })
})

function displayMenuItems(menuArray) {
    let showMenu = menuArray.map((item) => {
        return `<div class="menu-item">
        <img src=${item.image} class="photo" alt=${item.title}/>
        <div class="menu-content">
            <div class="title-and-price">
                <h2>${item.title}</h2>
                <p>${item.price}</p>
            </div>
            <div class="description">
                <p>${item.description}</p>
            </div>
        </div>
    </div>`
    })
    showMenu = showMenu.join('')
    menuContainer.innerHTML = showMenu
}