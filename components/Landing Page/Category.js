import { CardContent, Card, CardMedia, Button, Typography } from '@mui/material';
import Link from 'next/link';

export default function Category({ image, title }) {
  return (
    <Card sx={{ maxWidth: 350,  backgroundColor: '#b9d4e4', padding: 3, borderRadius: 4, }}>
      <CardMedia
        component="img"
        image={image}
        alt={title + ' img'}
        sx={{ borderRadius: 6, height: 200, objectFit: 'contain' }}
      />

      <CardContent>
        <Typography variant="h5" component="div" align='center' gutterBottom>
          {title}
        </Typography>
        
        <Link href={'/store#' + title}><a>
          <Button variant="contained" >Shop {title}</Button>
        </a></Link>
      </CardContent>
    </Card>
  );
}
