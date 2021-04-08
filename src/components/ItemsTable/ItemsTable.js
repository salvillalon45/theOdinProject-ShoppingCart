// -----------------------------------------------
//
// ItemsTable -> ItemsTable.js
// Desc: To show all the items in the cart of the user
//
// -----------------------------------------------

// -----------------------------------------------
// Imports

// React
import * as React from 'react';

// Gatsby
import { Link } from 'gatsby';

// Bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import Image from 'react-bootstrap/Image';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { deleteCartItem } from '../../state/actions/shoppingCartActions';
// -----------------------------------------------

function ItemsTable() {
	const shoppingCartState = useSelector(state => state.shoppingCart);
	const dispatch = useDispatch();

	function removeCartItem(index) {
		console.log('Inside removeCartItem');
		console.log(index);
		console.log(shoppingCartState.cartItems[index]);
		dispatch(deleteCartItem(index));
	}

	function generateCartItems() {
		const { cartItems } = shoppingCartState;

		return cartItems.map((cartItem, index) => {
			console.log(cartItem);
			const { itemImage, itemName, itemPrice, itemIndex } = cartItem.item;
			const { quantity, total_price } = cartItem;
			console.log(itemImage, itemName, itemPrice, itemIndex);
			return (
				<tr>
					{/* <td> */}
					{/* <Container>
							<Row>
								<Col>
									<Image src={itemImage} rounded />
								</Col>

								<Col>
									<p>itemName: {itemName}</p>
									<p>itemPrice: {itemPrice}</p>
									<p>quantity: {quantity}</p>
									<p>total_price: {total_price}</p>
								</Col>
							</Row>
						</Container> */}
					{/* </td> */}
					<td>
						<Image src={itemImage} rounded />
					</td>
					<td>{itemName}</td>
					<td>{quantity}</td>
					<td>{itemPrice}</td>
					<td>${total_price}</td>
					<td onClick={() => removeCartItem(index)}>Remove</td>
				</tr>
			);
		});
	}

	return (
		<Table striped bordered hover variant='dark'>
			<thead>
				<tr>
					<th>Image</th>
					<th>Product Details</th>
					<th>Quantity</th>
					<th>Price</th>
					<th>Total</th>
					<th></th>
				</tr>
			</thead>
			<tbody>{generateCartItems()}</tbody>
		</Table>
	);
}

export default ItemsTable;
