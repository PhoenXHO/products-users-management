import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActionMedia from '@mui/material/CardActionArea';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

interface Product {
	id: number;
	name: string;
	price: number;
	description: string;
	category: {
		id: number;
		name: string;
	};
	images: string[];
}

export default function Products(): JSX.Element {
	const [products, setProducts] = useState<Product[]>([]);

	useEffect(() => {
		axios({
			method: 'GET',
			url: 'https://api.escuelajs.co/api/v1/products?offset=0&limit=11'
		}).then((response) => {
			setProducts(response.data);
		}).catch((error) => {
			console.error(error);
		}).finally(() => {
			console.log('Products fetched');
		});
	}, []);

	return (
		<>
			<h1>Products</h1>
			<Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
				{products.map((product) => (
					<Card
						key={product.id}
						sx={{
							maxWidth: 345,
							margin: 1,
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'space-between',
							paddingBottom: 1
						}}
					>
						<CardActionMedia>
							<CardMedia
								component="img"
								height="300"
								image={product.images[0]}
								onError={(event) => {
									event.currentTarget.src = 'https://via.placeholder.com/300';
								}}
								alt={product.name}
							/>
							<CardContent>
								<Typography gutterBottom variant="h5" component="div">
									{product.name}
								</Typography>
								<Typography variant="body2" color="text.secondary">
									{product.description}
								</Typography>
							</CardContent>
						</CardActionMedia>
						<CardActions>
							<Button size="small">Buy</Button>
							<Button size="small">Details</Button>
						</CardActions>
					</Card>
				))}
			</Box>
		</>
	);
}