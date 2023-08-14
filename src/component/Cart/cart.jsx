import "./cart.css";
import { Button, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from 'react-redux';
import { Minusqty, Pulsqty, removeCart } from '../../App/callapi/Addtocart';
import Header from '../Header/header';
import { RiDeleteBin6Line } from "react-icons/ri";
import { IoAddCircleSharp } from "react-icons/io5";
import { HiMinusCircle } from "react-icons/hi";






function Cart() {
  const Cartdata = useSelector((state) => state.addtocart)
  console.log(Cartdata);
  const dispatch = useDispatch();

  return (
    <div>
      <Header />
      <div className='text-center mt-5 table_hidden'>
        <Table table-bordered striped hover className='align-middle text-center w-75 m-auto' style={{ border: '3px solid gray' }}>
          <thead className='head_padding'>
            <tr>
              <th>No</th>
              <th>Title</th>
              <th>Image</th>
              <th>Add</th>
              <th>Unadd</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>

            {
              Cartdata.map((item, index) => {
                return (
                  <tr key={index}>
                    <td width={'80px'}>{item.id}</td>
                    <td width={'50px'}> <img src={item.image} alt="" width='120px' height='100px' style={{ border: '1px solid black' }} /> </td>
                    <td>{item.title}</td>
                    <td>
                     <button  className='cart_btn' onClick={() => dispatch(Pulsqty(item.id))} disabled={item.qty >= 15}> <IoAddCircleSharp /> </button>
                    </td>
                    <td>
                      <button className='cart_btn' onClick={() => { item.qty > 1 ? dispatch(Minusqty(item.id)) : dispatch(removeCart(index)) }} disabled={item.qty <= 1}><HiMinusCircle /></button> 
                    </td>
                    <td width={'10px'}>{item.qty}</td>
                    <td width={'150px'}>{item.price}</td>
                    <td width={'40px'}><Button onClick={() => dispatch(removeCart(index))} style={{ backgroundColor: 'transparent', border: 'none' }}><RiDeleteBin6Line className='Riicon' /></Button></td>
                  </tr>
                )

              })
            }

            <tr className='total_th'>
              <th colSpan={6}>Total </th>
              <td colSpan={2}> {Cartdata.reduce((add, item) => add + parseFloat(item.price), 0)}</td>
            </tr>

          </tbody>
        </Table>
      </div>
    </div >
  )
}

export default Cart;
