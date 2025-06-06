import React from 'react';
import { Card } from 'primereact/card';
// import { Button } from 'primereact/button';
import styles from './styles.module.css';

 function CardItem({ product, onClick }) {
  const header = (
    <img alt={product.name} src={product.image} className={styles.image} />
  );

  // const footer = (
  //   <span>
  //     <strong>{product.price}</strong>
  //     <Button label="Comprar" icon="pi pi-shopping-cart" className="p-button-sm p-button-success ml-2" />
  //   </span>
  // );

  const teste = {name: 'teste', description: 'teste', price: 'R$ 0,00', image: 'https://via.placeholder.com/150'};
  return (
    <div onClick={() => onClick(teste)} style={{ cursor: 'pointer' }}>
      <Card title={product.name} subTitle={product.description.slice(0, 100) + '...'} header={header} className={styles.card} />
    </div>
  );
}
export default CardItem