import { Categories } from '../Components/Categories/Categories';
import { ItemsBlock } from '../Components/ItemsBlock/ItemsBlock';
import { Sort } from '../Components/Sort/Sort';
import { useState, useEffect } from 'react';
import { PaginationList } from '../Components/Pagination';
import { Preloader } from './../assets/Preloader/Preloader';
import AppContext from '../App';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCategoryId, setCurrentPage, setFilters } from '../redux/Reducers/FilterReducer';
import axios from 'axios';
import qs from 'qs';
import { useNavigate } from 'react-router-dom';
import { list } from '../Components/Sort/Sort';

export const MainPage = () => {
  const navigate = useNavigate();
  const activeListSort = useSelector((state) => state.filter.sort);
  const activeCategories = useSelector((state) => state.filter.categoryId);
 
  const currentPage = useSelector((state) => state.filter.currentPage);
  const dispatch = useDispatch();

  const { searchValue } = React.useContext(AppContext);
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1));
      const sort = list.find((i) => i.sort === params.activeListSort);
      dispatch(
        setFilters({
          ...params,
          sort,
        }),
      );
    }
  }, []);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(
        `https://62ee521ff5521ecad5730d89.mockapi.io/Items?page=${currentPage}&limit=4&${
          activeCategories > 0 ? `category=${activeCategories}` : ''
        }&sortBy=${activeListSort.sort}&order=desc`,
      )
      .then((res) => {
        setItems(res.data);
        setIsLoading(false);
      });

    window.scrollTo(0, 0);
  }, [activeCategories, activeListSort, searchValue, currentPage]);

  useEffect(() => {
    const queryString = qs.stringify({
      activeListSort: activeListSort.sort,
      activeCategories,
      currentPage,
      
    }
    );
    
    navigate(`?${queryString}`);
  }, [activeCategories, activeListSort, searchValue, currentPage]);

  const itemsProduct = items
    .filter((i) => {
      if (i.name.toLowerCase().includes(searchValue.toLowerCase())) {
        return true;
      }
      return false;
    })
    .map((i) => <ItemsBlock key={i.id} {...i} />);

  return (
    <div className="content">
      <div className="container">
        <div className="content__top">
          <Categories
            activeCategories={activeCategories}
            onClickCategory={(index) => dispatch(setCategoryId(index))}
          />
          <Sort />
        </div>
        <h2 className="content__title">All Items</h2>
        <div className="content__items">
          {isLoading ? [...new Array(1)].map((_, i) => <Preloader key={i} />) : itemsProduct}
        </div>
        <PaginationList onChange={(number) => dispatch(setCurrentPage(number))} />
      </div>
    </div>
  );
};
