import { Link } from 'react-router-dom';
import { Search } from '../Search';
import { useSelector } from 'react-redux';

export const Header = () => {
const {items , totalPrice} = useSelector(state => state.basket);
const totalCount = items.reduce((sum, item)=> sum + item.count, 0)

return (
    <div className="header">
      <div className="container">
        <Link to="/">
          <div className="header__logo">
            <img
              width="38"
              src="data:image/png;base64,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"
              alt="Pizza logo"
            />
            <div>
              <h1>Apple</h1>
              <p>Iphones</p>
            </div>
          </div>
        </Link>
        <Search />
        <div className="header__cart">
          <Link to="/basket" className="button button--cart">
            <span>{totalPrice} ₴</span>
            <div className="button__delimiter"></div>
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M6.33333 16.3333C7.06971 16.3333 7.66667 15.7364 7.66667 15C7.66667 14.2636 7.06971 13.6667 6.33333 13.6667C5.59695 13.6667 5 14.2636 5 15C5 15.7364 5.59695 16.3333 6.33333 16.3333Z"
                stroke="white"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M14.3333 16.3333C15.0697 16.3333 15.6667 15.7364 15.6667 15C15.6667 14.2636 15.0697 13.6667 14.3333 13.6667C13.597 13.6667 13 14.2636 13 15C13 15.7364 13.597 16.3333 14.3333 16.3333Z"
                stroke="white"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M4.78002 4.99999H16.3334L15.2134 10.5933C15.1524 10.9003 14.9854 11.176 14.7417 11.3722C14.4979 11.5684 14.1929 11.6727 13.88 11.6667H6.83335C6.50781 11.6694 6.1925 11.553 5.94689 11.3393C5.70128 11.1256 5.54233 10.8295 5.50002 10.5067L4.48669 2.82666C4.44466 2.50615 4.28764 2.21182 4.04482 1.99844C3.80201 1.78505 3.48994 1.66715 3.16669 1.66666H1.66669"
                stroke="white"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>{totalCount}</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
