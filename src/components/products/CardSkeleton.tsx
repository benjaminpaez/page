
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Skeleton from '@mui/material/Skeleton';

export const CardSkeleton = () => {
  return (
    <Card sx={{ width: 320, height: 350, position: "relative" }}>
      <Skeleton variant="rectangular" height={300} sx={{ transition: "transform 0.4s ease-in-out" }} />
      <CardContent>
        <Skeleton variant="text" height={30} sx={{ backgroundColor: "#4c90fe"}}/>
      </CardContent>
    </Card>
  );
};


