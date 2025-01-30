import productsAdapter from "../../../adapters/productsAdapter";
import './ItemView.scss';

export default function ItemView ( { product, childAddProduct} ) {
  
    const adaptedProductList= productsAdapter(product)

    return (
             adaptedProductList.map( product => (
                <div className='containerItemView' key = { product.id } >
                    <img src={product.image} alt={product.id} />

                    <div className='infoItem'>

                      <h5 >{ product.category } - { product.trade } - { product.type } x { product.pack } { product.unity } { product.volumen } </h5>
                      
                      <div className="secondInfo">

                        <div className="priceItem">
                          <p>{ product.price }</p>
                        </div>

                        <div className="stockItem">
                          <p > Máximo { product.stock } Unidades </p>                       
                        </div>

                      </div>

                      <div >
                        {childAddProduct}                      
                      </div>

                      <div className="fourthInfo">
                        <div>
                          <h6>Especificaciones</h6>
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium quia minus sapiente voluptas delectus obcaecati doloremque placeat dicta sed saepe, eveniet ipsam esse .</p>
                        </div>
                        <div>
                          <h6>Información Adicional</h6>
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A perferendis veniam hic odit iure consequatur, ipsa blanditiis et illo esse corrupti, reiciendis nesciunt rerum accusamus</p>
                        </div>                                           
                      </div>


                    </div>
                </div>))          
      );
    };