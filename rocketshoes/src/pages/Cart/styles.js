import Styled from 'styled-components';

import { darken } from 'polished';

export const Container = Styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 4px;

  footer {
    margin-top: 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    button {
      background:#7159c1;
      border-radius: 4px;
      border: none;
      padding: 12px 20px;
      color: #fff;
      font-weight: bold;
      text-transform: uppercase;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.03, '#7159c1')}
      }
    }
  }
`;

export const ProductTable = Styled.table`
  width: 100%;
  margin-top: 20px;

  thead th {
    color: #666;
    font-weight: bold;
    text-align: left;
  }

  tbody td {
    padding: 12px 0;
    border-bottom: 1px solid #eee;
  }

  img {
    height: 100px;
  }

  strong {
    color: #333;
    display: block;
  }

  span {
    margin-top: 5px;
    display: block;
    font-size: 18px;
    font-weight: bold;
  }

  div {
    display: flex;
    align-items: center;

    input {
      border: 1px solid #ddd;
      border-radius: 4px;
      color: #666;
      padding: 6px;
      width: 50px;
    }
  }

  button {
    background: none;
    border: none;
    padding: 6px;
  }
`;

export const Total = Styled.div`
  display: flex;
  align-items: baseline;

  span {
    color: #999;
    font-weight: bold;
  }

  strong {
    margin-left: 5px;
    font-size: 28px;
  }
`;
