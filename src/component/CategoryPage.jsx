import CardComponents from './CardComponents'

export default function CategoryPage() {

    let Categories = [
    {
        URL: "Apple-iPhone-16-Pro-hero-240909-lp.jpg.news_app_ed.jpg",
        id: 1,
        Title: "Iphone",
        price: "22000",
        description: "iPhone 16 Pro features a Grade 5 titanium design with a new, refined microblasted finish. Titanium has one of the highest strength-to-weight ratios.",
        category: "Smartphones" 
    },
    {
        URL: "samsung.avif",
        id: 2,
        Title: "Samsung",
        price: "35000",
        description: "The Samsung Galaxy A06 is an affordable yet feature-packed smartphone designed to deliver a smooth and reliable mobile experience. With its sleek design.",
        category: "Smartphones" 
    },
    {
        URL: "motorola.jpg",
        id: 3,
        Title: "Motorola",
        price: "55000",
        description: "Price in Pakistan is Rs. 54,604. Main features of Motorola Moto G 2025 are: Network 5G Sim Nano-SIM + eSIM Camera 50MP+8MP Selfie camera 16MP.",
        category: "Smartphones" 
    },
    {
        URL: "macbook.jpg",
        id: 4,
        Title: "Apple MacBook Pro",
        price: "120000",
        description: "The Apple MacBook Pro features Apple's M1 chip, providing powerful performance and efficiency for creative professionals.",
        category: "Laptops" 
    },
    {
        URL: "DellXPS13.jpg",
        id: 5,
        Title: "Dell XPS 13",
        price: "90000",
        description: "Dell XPS 13 is a sleek, ultrathin laptop with an InfinityEdge display, offering an immersive viewing experience.",
        category: "Laptops" 
    },
    {
        URL: "WirelessHeadphones.webp",
        id: 6,
        Title: "Wireless Headphones",
        price: "5000",
        description: "Wireless headphones with noise-cancellation technology, long battery life, and excellent sound quality.",
        category: "Accessories" 
    },
    {
        URL: "Smartwatch.jpg",
        id: 7,
        Title: "Smartwatch",
        price: "8000",
        description: "A stylish smartwatch that tracks your steps, heart rate, and notifications, all while looking great on your wrist.",
        category: "Accessories" 
    }
];

  return (
    <div>
        {
         Categories.map((x) => {
            return <CardComponents key={x.id} title={x.Title} price={x.price} src={x.URL} description={x.description} category={x.category}/>
          }
            
        )
        }
       
    </div>
  )

//    return (
//         <div>
//             <CardComponents title={Categories[0]["Title"]} price={Categories[0].price} src={Categories[0].URL} description={Categories[0]["description"]} category={Categories[0]["category"]}/>
//             <CardComponents title={Categories[1]["Title"]} price={Categories[1].price} src={Categories[1].URL} description={Categories[1]["description"]} category={Categories[1]["category"]}/>
//             <CardComponents title={Categories[2]["Title"]} price={Categories[2].price} src={Categories[2].URL} description={Categories[2].description} category={Categories[2]["category"]}/>
//             <CardComponents title={Categories[3]["Title"]} price={Categories[3].price} src={Categories[3].URL} description={Categories[3].description} category={Categories[3]["category"]}/>
//             <CardComponents title={Categories[4]["Title"]} price={Categories[4].price} src={Categories[4].URL} description={Categories[4].description} category={Categories[4]["category"]}/>
//             <CardComponents title={Categories[5]["Title"]} price={Categories[5].price} src={Categories[5].URL} description={Categories[5].description} category={Categories[5]["category"]}/>
//             <CardComponents title={Categories[6]["Title"]} price={Categories[6].price} src={Categories[6].URL} description={Categories[6].description} category={Categories[6]["category"]}/>
//         </div>
//     )
}

