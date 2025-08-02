import CardComponents from './CardComponents'

export default function ProductPage() {
    let Product = [{
        URL: "Apple-iPhone-16-Pro-hero-240909-lp.jpg.news_app_ed.jpg",
        id: 1,
        Title: "Iphone",
        price: "22000",
        description: "iPhone 16 Pro features a Grade 5 titanium design with a new, refined microblasted finish. Titanium has one of the highest strength-to-weight ratios ",

    },
    {
        URL: "samsung.avif",
        id: 2,
        Title: "Samsung",
        price: "35000",
        description: "The Samsung Galaxy A06 is an affordable yet feature-packed smartphone designed to deliver a smooth and reliable mobile experience. With its sleek,",
    }, {
        URL: "motorola.jpg",
        id: 3,
        Title: "Motorola",
        price: "55000",
        description: " price in Pakistan is Rs. 54,604. Main features of Motorola Moto G 2025 are: Network 5G Sim Nano-SIM + eSIM Camera 50MP+8MP Selfie camera 16MP ",
    }]

    return(
    <div>
      {
          Product.map((x) => {
            return <CardComponents key={x.id} title={x.Title} price={x.price} src={x.URL} description={x.description} />
          }
            
        )
      }
    </div>
    
)

}
    // return (
    //     <div>
    //         <CardComponents title={Product[0]["Title"]} price={Product[0].price} src={Product[0].URL} description={Product[0]["description"]} />
    //         <CardComponents title={Product[1]["Title"]} price={Product[1].price} src={Product[1].URL} description={Product[1]["description"]} />
    //         <CardComponents title={Product[2]["Title"]} price={Product[2].price} src={Product[2].URL} description={Product[2].description} />
    //     </div>
    // )

