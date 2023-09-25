import { useDispatch, useSelector } from "react-redux";
import { CatalogItem, State } from "../../types/types";
import { addItem } from "../../store/itemsSlice";
import { Grid } from "@mui/material";
import styles from './catalog.module.css'

function Catalog() {
  const dispatch = useDispatch();

  const items = useSelector<State, CatalogItem[]>(
    (state) => state.items.catalog
  );

  return (
    <>
      <h2>Catalog</h2>
      <Grid container spacing={2}>
        {items.map((item: CatalogItem) => (
          <Grid
            item
            xs={4}
            key={item.id}
            onClick={() => {
              dispatch(addItem(item));
            }}
          >
            <p  className={styles.catalog_item__name}>{item.name}</p>
            {/* <Avatar src={item.image}/> */}
            <img className={styles.catalog_item__img} src={item.image} alt="item" />
            <p>{item.price} руб.</p>
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default Catalog;
