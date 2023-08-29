
// import './App.css';
import Products from "./Products";
import DisplayUser from './DisplayUser';
import HideShow from "./HideShow";
import UserInput from "./TwoWayDataBind";
import DisableButton from "./DisableButton";
import UpdateParent from "./UpdateParent";

function Parent() {

    const products = [
        {
         title: "Product 1",
         price: 10,
         description: "First product"
        },
        {
         title: "Product 2",
         price: 20,
         description: "Second product"
    },
    ]
  return (
    <div>
            <h1>My Demo Shop</h1>
            <Products 
            title={products[0].title}
            price={products[0].price}
            description={products[0].description}>
            </Products>
             <Products title={products[1].title}
            price={products[1].price}
            description={products[1].description}></Products>

            ********Display Users********
            <DisplayUser />

            <br />
            ********Hide and Show **********
            <HideShow />

            <br />
            ******* Two way Data Bind *********
            <UserInput />

            <br />
            ******* Display button when no value ************
            <DisableButton />

            <br />
            ************ Update the Parent through Child *****************
            <UpdateParent />
        </div>
  );
}

export default Parent;
