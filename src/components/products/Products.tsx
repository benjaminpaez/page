import axios from "axios";
import { useEffect, useState } from "react";
import { Product } from "../../types.d";
import { CardProd } from "./CardProd";
import styles from "./Products.module.css";
import { Grid } from "@mui/material";
import { CommonHeaders } from "../common/CommonHeaders";
import { ButtonCat } from "./ButtonCat";

export const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedId, setSelectedId] = useState<number | null>(0);
  const [activeButton, setActiveButton] = useState<number | null>(0);
  const [originalProducts, setOriginalProducts] = useState<Product[]>([]);

  const messData = (data: Product[]) => {
    const messedData = [...data];
    messedData.sort(() => Math.random() - 0.5);
    setProducts(messedData);
  };



  
  useEffect(() => {
    axios
      .get("https://api-pirela.onrender.com/products")
      .then((response) => {
        setOriginalProducts(response.data);
        messData(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    if (selectedId !== 0) {
      if (selectedId !== 0) { // Corregir esta línea
        messData(originalProducts);
        setActiveButton(selectedId);
      } else {
        axios
          .get(`https://api-pirela.onrender.com/products?categoryId=${selectedId}`) // Eliminar comillas dobles
          .then((res) => {
            setProducts(res.data);
          })
          .catch((e) => console.log(e));
      }
    }
  }, [selectedId, originalProducts]);
  
  const handleClick = (buttonId: number) => {
    setSelectedId(buttonId);
    setActiveButton(buttonId);
  };

  return (
    <div>
      <CommonHeaders
        title="PRODUCTOS"
        description="Estamos para ayudarte a encontrar los productos perfectos para tus necesidades. Tenemos una amplia variedad de baldosas y revestimientos de alta calidad que seguramente te encantarán"
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
                messData(originalProducts);
                handleClick(0);
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
            {products.map((product) => {
              return (
                <CardProd
                  key={product.id}
                  name={product.name}
                  img={product.img}
                />
              );
            })}
          </div>
        </Grid>
      </Grid>
    </div>
  );
};
