import axios from "axios";
import { useEffect, useState } from "react";
import { Product } from "../../types.d";
import { CardProd } from "./CardProd";
import styles from "./Products.module.css";
import { Grid } from "@mui/material";
import { CommonHeaders } from "../common/CommonHeaders";
import { ButtonCat } from "./ButtonCat";
import { CardSkeleton } from "./CardSkeleton";

export const Products = () => {
  const [products, setProducts] = useState<Product[]>([])
  const [selectedId, setSelectedId] = useState<number | null>(0)
  const [activeButton, setActiveButton] = useState<number | null>(0)
  const [originalProducts, setOriginalProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)

  const messData = (data: Product[]) => {
    const messedData = [...data];
    messedData.sort(() => Math.random() - 0.5);
    setProducts(messedData);
  };
  
  useEffect(() => {
    const selectProduct = async () => {
      setLoading(true);
      try {
        if (selectedId === 0) {
          messData(originalProducts);
          setActiveButton(selectedId);
        } else {
          if (selectedId !== 0) {
            const response = await axios.get(`https://pirela-api.onrender.com/products?categoryId=${selectedId}`);
            setProducts(response.data);
            setActiveButton(selectedId);
          }
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    selectProduct();
  }, [selectedId, originalProducts]);

  useEffect(() => {
    const fetchOriginalProducts = async () => {
      setLoading(true);
      try {
        const response = await axios.get("https://pirela-api.onrender.com/products");
        setOriginalProducts(response.data);
        messData(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchOriginalProducts();
  }, []);

  const handleClick = (buttonId: number) => {
    setSelectedId(buttonId)
    setActiveButton(buttonId)
  };

  return (
    <div>
      <CommonHeaders
        title="PRODUCTOS"
        description="Estamos para ayudarte a encontrar los productos perfectos para tus necesidades"
      />
      <Grid container mt={3}>
        <Grid
          item
          sm={12}
          md={12}
          container
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div>
            <ButtonCat
              name="TODOS"
              isActive={activeButton === 0}
              onClick={() => {
                messData(originalProducts)
                handleClick(0)
              }}
            />

            <ButtonCat
              name="BALDOSAS"
              isActive={activeButton === 1}
              onClick={() => handleClick(1)}
            />

            <ButtonCat
              name="REVESTIMIENTOS"
              isActive={activeButton === 2}
              onClick={() => handleClick(2)}
            />
          </div>
        </Grid>
        <Grid item sm={12} md={12}>
          <div className={styles.container}>
            {loading ? (
              Array.from({ length: 6 }).map((_, index) => (
                <CardSkeleton key={index} />
              ))
            ) : (
              products.map((product) => (
                <CardProd
                  key={product.id}
                  name={product.name}
                  img={product.img}
                />
              ))
            )}

          </div>
        </Grid>
      </Grid>
    </div>
  );
};
