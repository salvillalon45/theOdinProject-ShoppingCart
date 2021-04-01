// -----------------------------------------------
//
// ShopPageContent -> ShopPageContent.js
// Desc: This component will render the Shop Page
//
// -----------------------------------------------

// -----------------------------------------------
// Imports

// React
import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

// Bootstrap
import Card from 'react-bootstrap/Card';

// Components
import ShopItems from './ShopItems/ShopItems';

// Data
import menData from '../../data/menData.json';
import womenData from '../../data/womenData.json';
import shoesData from '../../data/shoesData.json';
// -----------------------------------------------

function ShopPageContent(props) {
	const { categoryShow } = props;
	const [items, setItems] = React.useState({});

	function determineCategory() {
		console.log({ categoryShow });
		if (categoryShow === 'men') {
			setItems(menData);
		} else if (categoryShow === 'women') {
			setItems(womenData);
		} else if (categoryShow === 'shoes') {
			setItems(shoesData);
		} else {
			setItems({ menData, shoesData, womenData });
		}
	}

	React.useEffect(() => {
		console.log('Inside useEffect 0');
		determineCategory();
	}, [categoryShow]);

	// Include sidebar
	return <ShopItems data={items} />;
}

export default ShopPageContent;
