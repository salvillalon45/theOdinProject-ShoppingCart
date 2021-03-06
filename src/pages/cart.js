// -----------------------------------------------
//
// Pages -> cart.js
// Desc: Cart Page
//
// -----------------------------------------------

// -----------------------------------------------
// Imports

// React
import * as React from 'react';

// Components
import Layout from '../components/Layout';
import SEO from '../components/seo';
import CartPageContent from '../components/CartPageContent';
// -----------------------------------------------

function CartPage() {
	const id = 'cartPageContainer';

	return (
		<Layout id={id}>
			<SEO title='The Odin Project: Shopping Cart' />

			<CartPageContent />
		</Layout>
	);
}

export default CartPage;
