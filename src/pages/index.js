// -----------------------------------------------
//
// Pages -> index.js
// Desc: Home Page
//
// -----------------------------------------------

// -----------------------------------------------
// Imports

// React
import * as React from 'react';

// Components
import Layout from '../components/Layout';
import SEO from '../components/seo';
import IndexPageContent from '../components/IndexPageContent';
// -----------------------------------------------

function IndexPage() {
	const id = 'indexContainer';

	return (
		<Layout id={id}>
			<SEO title='Home' />
			
			<IndexPageContent />
		</Layout>
	);
}

export default IndexPage;
