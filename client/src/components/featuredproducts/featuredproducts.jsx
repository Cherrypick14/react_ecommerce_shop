import useFetch from '../../hooks/useFetch';
import "../../styles/featuredproducts.scss";
import Card from '../Card/card';
import Divider from '../Divider/divider';


const Featuredproducts = ({type}) => {
 const{data, loading, error} = useFetch(`/products?populate=*&[filters][type][$eq]=${type}`)

  return (
    <>
    <div className="featuredProducts">
      <div className="top">
        <h1>{type} products</h1>
        <p>
        The store is committed to offering high-quality products at affordable prices, and is dedicated to providing exceptional customer service to ensure a hassle-free shopping experience.
        </p>
      </div>
      <div className="bottom">
        {error
          ? "Something's up!"
          : loading
          ? "loading"
          : data?.map((item) => <Card item={item} key={item.id} />)}
      </div>
    </div>
 
    </>
  
  )
}

export default Featuredproducts