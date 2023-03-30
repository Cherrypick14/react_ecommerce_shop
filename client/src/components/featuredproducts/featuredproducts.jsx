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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
          lacus vel facilisis labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas.
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