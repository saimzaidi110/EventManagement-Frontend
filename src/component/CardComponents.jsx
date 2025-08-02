import './CardComponents.css'

function CardComponents({title,price,src,description,category}){
    
return(
<div>
<img src={src} width="150px" alt=""/>
 <h1>{title ||"Iphone"}</h1>
<h2>{price || "50000"}</h2>
<h3>{category ||"brandvalue"}</h3>
<p>{description || "des"}</p>
 <button>Buy Now</button>
</div>
) 
}
export default CardComponents
