import styled, { createGlobalStyle } from 'styled-components';
import { normalize } from 'polished';

// import './assets/fonts/fonts.css';
import { fontFamilies, colors } from '@/assets/styles';

import { Loading } from '@/components';

const MAIN_BACKGROUND_COLOR = colors.white;

const GlobalStyle = createGlobalStyle`
  ${normalize()};
  
  html,
  body {
    margin: 0;
    padding: 0;
    font-size: 12px;
    line-height: 1.2;;
    font-weight: 400;
    font-style: normal;
    font-family: ${fontFamilies.roboto};
    color: ${colors.black};
    background-color: ${MAIN_BACKGROUND_COLOR};
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -webkit-tap-highlight-color: transparent;
    -moz-osx-font-smoothing: grayscale;
    min-width: 1200px;
  }
  
  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }
  
  img {
    max-width: 100%;
    height: auto;
  }
  
  a,
  button,
  input {
    color: ${colors.black};
    font-family: inherit;
    outline: none;
    text-decoration: none;
  }
  
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
`;

const AppLoading = styled(Loading).attrs(() => ({
  size: 50,
}))`
  width: 100%;
  margin-top: 50px;
`;

export { GlobalStyle, AppLoading };
