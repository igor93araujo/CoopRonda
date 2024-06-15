'use client';

import styled from 'styled-components';

export const StyledNav = styled.nav`
  ul {
      display: flex;
      list-style: none;
      padding: 0;

      li {
        margin-left: 10px;

        a {
          text-decoration: none;
          color: #565448;
          position: relative;
          font-size: 20px;

        }
        .active {
          color: #ff823a;
        }

        a:hover::after {
            content: '';
            position: absolute;
            width: 100%;
            transform: scaleX(1);
            height: 2px;
            bottom: 0;
            left: 0;
            background-color: #ff6347; /* Tomate */
            transform-origin: bottom right;
            transition: transform 0.25s ease-out;
          }

          a::after {
            content: '';
            position: absolute;
            width: 100%;
            transform: scaleX(0);
            height: 2px;
            bottom: 0;
            left: 0;
            background-color: #ff6347; /* Tomate */
            transform-origin: bottom left;
          }
      }
  }

  .smallDevice {
    flex-direction: column;
    align-items: center;
    gap: 10px;
    margin-top: 50px
  };
`;