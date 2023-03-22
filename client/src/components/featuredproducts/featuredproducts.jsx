import useFetch from '../../hooks/useFetch';
import "../../styles/featuredproducts.scss";
import Card from '../Card/card';


const Featuredproducts = ({type}) => {
 const{data, loading, error} = useFetch(`/products?populate=*&[filters][type][$eq]=${type}`)

  return (
    <div className='featuredproducts'>
         <div className="top">
           <h1>{type}&nbsp;products</h1>
           <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit quia, dicta eum ipsa non ullam consequatur harum quasi quis iusto asperiores consectetur dolorum incidunt recusandae molestias tempora esse? Repellat, temporibus.</p>

         </div>
         <div className="bottom">
              {error? "Something's up!":
              (loading? "loading" : data?.map((item) => <Card item={item} key={item.id}/>
                ))}
         </div>
    </div>
  )
}

export default Featuredproducts