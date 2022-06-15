import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  decrementItem,
  incrementItem,
  selectItems,
  selectAmount,
  selectTotalItems,
} from './supermarketListSlice';
import styles from './SupermarketList.module.css';

export function SupermarketList() {
  const items = useSelector(selectItems);
  const amount = useSelector(selectAmount);
  const totalItems = useSelector(selectTotalItems);
  const dispatch = useDispatch();

  const [incrementName, setIncrementName] = useState('');
  const [incrementAnyCost, setIncrementCost] = useState('');
  const [incrementDesc, setIncrementDesc] = useState('');
  const [incrementAnyQuantity, setIncrementQuantity] = useState(1);

  const incrementCost = Number(incrementAnyCost) || 0;
  const incrementQuantity = Number(incrementAnyQuantity) || 1;

  const incrementNewItem = {
    name: incrementName,
    cost: incrementCost,
    desc: incrementDesc,
    quantity: incrementQuantity,
  };

  const clearIncrement = () => {
    setIncrementName('')
    setIncrementCost('')
    setIncrementDesc('')
    setIncrementQuantity(1)
  };

  return (
    <div>
      <div className={styles.row}>

        <div className={styles.tab}>
          <table>
            <tr>
              <th>Nome</th>
              <th>Preço</th>
              <th>Descrição</th>
              <th>quantidade</th>
              <th>Deletar</th>
            </tr>
            {items.map(item => {
              return <tr>
                <td>
                  {item.name}
                </td>
                <td>
                  {item.cost}
                </td>
                <td>
                  {item.desc}
                </td>
                <td>
                  {item.quantity}
                </td>
                <td>
                  <button
                    className={styles.button}
                    aria-label="Decrement value"
                    onClick={() => dispatch(decrementItem({specific:item, all:items}))}
                  >
                    -
                  </button>
                </td>
              </tr>
            })}
          </table>
        </div>
      </div>
      <div className={styles.row}>
        <span className={styles.value}> quantidade: {totalItems}</span>
        <span className={styles.value}> total: R${amount}</span>
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          placeholder="Nome"
          value={incrementName}
          onChange={(e) => setIncrementName(e.target.value)}
        />
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={incrementAnyCost}
          placeholder="preço"
          onChange={(e) => setIncrementCost(e.target.value)}
        />
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          placeholder="Descrição"
          value={incrementDesc}
          onChange={(e) => setIncrementDesc(e.target.value)}
        />
      </div>
      <div className={styles.row}>
      <span className={styles.valuep}> Quantidade</span>
        <input
          className={styles.textboxp}
          aria-label="Set increment amount"
          value={incrementAnyQuantity}
          onChange={(e) => setIncrementQuantity(e.target.value)}
        />
      </div>
      <button
        className={styles.button}
        onClick={() => {
          clearIncrement()
          dispatch(incrementItem(incrementNewItem)
          )
        }}
      >
        Add item
      </button>
      <button
        className={styles.button}
        onClick={() => clearIncrement()}
      >
        Cancelar
      </button>
    </div>
  );
}
