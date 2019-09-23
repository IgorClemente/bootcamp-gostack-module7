import Styled from 'styled-components';
import { darken } from 'polished';

export const ProductList = Styled.ul`
  display: grid
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  list-style: none;

  li {
    display: flex;
    flex-direction: column;
    border-radius: 4px;
    background: #fff;
    padding: 20px;

    img {
      align-self: center;
      max-width: 250px;
    }

    > strong {
      margin-top: 5px;
      font-size: 16px;
      font-weight: bold;
      color: #333;
    }

    > span {
      margin: 5px 0 20px;
      font-size: 21px;
      font-weight: bold;
    }

    button {
      background: #7159c1;
      color: #fff;
      display: flex;
      align-items: center;
      border: none;
      overflow: hidden;
      border-radius: 4px;
      margin-top: auto;
      transition: background 0.5s;

      &:hover {
        background: ${darken(0.03, '#7159c1')};
      }

      div {
        display: flex;
        align-items: center;
        background: rgba(0,0,0,0.1);
        padding: 12px;

        svg {
          margin-right: 5px;
        }
      }

      span {
        flex: 1;
        text-align: center;
        font-weight: bold;
      }
    }
  }
`;
