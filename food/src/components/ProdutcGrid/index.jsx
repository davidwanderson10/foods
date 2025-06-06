import React, { useState } from 'react';
import styles from './styles.module.css';
import bacon from '../../assets/bacon.png';
import CardItem from '../CardItem';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';

const products = [
  { id: 1, name: 'Combo Pai D´Égua', description: 'Este te deixa com gostinho de quero mais! ...', price: 'R$ 39,99', image: bacon },
  { id: 2, name: 'Combo Pai D´Égua', description: 'Este te deixa com gostinho de quero mais! ...', price: 'R$ 39,99', image: bacon },
  { id: 3, name: 'Combo Pai D´Égua', description: 'Este te deixa com gostinho de quero mais! ...', price: 'R$ 39,99', image: bacon },
];

export default function ProductGrid() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const footerContent = (
    <div>
      <Button
        label="Fechar"
        icon="pi pi-times"
        onClick={() => setSelectedProduct(null)}
        className="p-button-text"
      />
      <Button
        label="Comprar"
        icon="pi pi-shopping-cart"
        className="p-button-success"
      />
    </div>
  );

  return (
    <>
      <div className={styles.grid}>
        {products.map((p) => (
          <CardItem key={p.id} product={p} onClick={setSelectedProduct} />
        ))}
      </div>

      <Dialog
        header={selectedProduct?.name}
        visible={!!selectedProduct}
        style={{ width: '600px' }}
        modal
        onHide={() => setSelectedProduct(null)}
        // footer={footerContent}
      >
        {selectedProduct && (
          <div>
            <img
              src={selectedProduct.image}
              alt={selectedProduct.name}
              style={{ width: '90%', marginBottom: '1rem', marginLeft: '5%', borderRadius: '8px' }}
            />
            <p><strong>Descrição:</strong> {selectedProduct.description}</p>
            <p><strong>Preço:</strong> {selectedProduct.price}</p>
          </div>
        )}
      </Dialog>
    </>
  );
}
