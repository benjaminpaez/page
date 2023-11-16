import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

interface CardProps {
  name: string;
  img: string;
}

export const CardProd: React.FC<CardProps> = ({ name, img }) => {
  return (
    <Card sx={{ width: 320, height: 350, position: "relative" }}>
      <CardMedia
        component="img"
        height="300"
        image={img}
        sx={{
          transition: "transform 0.4s ease-in-out",
          "&:hover": {
            transform: "scale(1.5)",
          },
        }}
      />
      <CardContent>
        <Typography sx={{ textAlign: "center" }} variant="h5" component="div">
          {name}
        </Typography>
      </CardContent>
    </Card>
  );
};
