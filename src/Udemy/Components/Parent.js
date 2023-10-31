
// import './App.css';
import Products from "./Products";
import DisplayUser from './DisplayUser';
import HideShow from "./HideShow";
import UserInput from "./TwoWayDataBind";
import DisableButton from "./DisableButton";
import UpdateParent from "./UpdateParent";
import CreateTimer from './CreateTimer';
import TodoList from './TodoList';
import { Link } from "react-router-dom";

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
      <nav>
        <ul>
          <li>
      <Products
        title={products[0].title}
        price={products[0].price}
        description={products[0].description}>
      </Products>
      </li>
      <Products title={products[1].title}
        price={products[1].price}
        description={products[1].description}></Products>

      **************Todo List***********************
      <TodoList />

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

      <br />
      ************ Create The Timer *****************
      <CreateTimer />
      </ul>
      </nav>
    </div>
  );
}

export default Parent;
