import Product from './Product';
import "./Products.scss";

export default function Products({data}) {
    return (
        <>
            <div className="products-list">
                {data.map((item)=>{
                    return <Product key={item.id} item={item}/>
                })}
            </div>
        </>
        
    )
}