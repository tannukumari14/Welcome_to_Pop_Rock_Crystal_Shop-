import Header from "./Header";
import Content from "./Content";
import ProductGrid from "./ProductGrid.js"
import ProductDetail from "./ProductDetail.js"

const page=()=>{
  return(
    <>
      <div className="container">
        <Header/>
        <Content/>
        <ProductGrid/>
        <ProductDetail/>
      </div>
    </>
  )
}
export default page;