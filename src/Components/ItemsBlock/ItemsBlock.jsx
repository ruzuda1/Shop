import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItems } from '../../redux/Reducers/BasketReducer';

export const ItemsBlock = ({ id,name, price, imageUrl, memory, types }) => {
  const typeNames = ['Pro', 'Pro Max', 'MINI', 'AIR', 'AirPods 2', 'AirPods PRO'];
  const [activeType, setActiveType] = useState(0);
  const [activeMemory, setActiveMemory] = useState(0);
  const clickOnType = (a) => {
    setActiveType(a);
  };

  const clickOnMemory = (a) => {
    setActiveMemory(a);
  };

  const dispatch = useDispatch()
  const countItems = useSelector(state=>state.basket.items.find(obj =>obj.id === id ));
  const addedCount = countItems ? countItems.count : 0;


  const onClickAdd = () =>{
    const item = {
      id,
      name,
      price,
      imageUrl,
      type:typeNames[activeType + 1],
      memory:activeMemory
    }
    dispatch(addItems(item))
  }

  return (
    <div className="items-block-wrapper">
      <div className="items-block">
        <img className="items-block__image" src={imageUrl} alt="Apple" />
        <h4 className="items-block__title">{name}</h4>
        <div className="items-block__selector">
          <ul>
            {types.map((typesIndex, i) => (
              <li
                key={i}
                onClick={() => clickOnType(i)}
                className={activeType === i ? 'active' : ''}>
                {typeNames[typesIndex]}
              </li>
            ))}
          </ul>
          <ul>
            {memory.map((memory, i) => (
              <li
                key={i}
                onClick={() => clickOnMemory(i)}
                className={activeMemory === i ? 'active' : ''}>
                {memory} Gb
              </li>
            ))}
          </ul>
        </div>
        <div className="items-block__bottom">
          <div className="items-block__price">от {price} ₴</div>
          <button className="button button--outline button--add" onClick={onClickAdd}>
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                fill="white"
              />
            </svg>
            <span >Добавить</span>
            <i>{addedCount}</i>
          </button>
        </div>
      </div>
    </div>
  );
};
