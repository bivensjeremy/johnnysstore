import { Card } from "@mui/material";
import Image from "next/image";

const ReviewCartItems = ({ line_items }) => {
    
    return (
        <Card sx={{ 
            position: 'relative', 
            width: 60, 
            height: '100%', 
            borderRadius: 3, 
            display: 'block',        
            marginX: 'auto'
        }}>
            <Image
                src={line_items.media.source}
                alt={line_items.name}
                layout="responsive"
                placeholder='blur'
                blurDataURL={line_items.media.source}
                height='50%'
                width='50%'
                objectFit="cover"
                sizes="50vw"
            />
        </Card>
    );
}

export default ReviewCartItems;