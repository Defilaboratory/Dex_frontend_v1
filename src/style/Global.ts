import { createGlobalStyle } from 'styled-components'

//  background-image: url(/frontendv1/images/body_img.png);
  // background-repeat: no-repeat;
  // background-size: contain;
const GlobalStyle = createGlobalStyle`
* {
  font-family: 'Kanit', sans-serif;
}

body {
  background: #F5F5F5;
  img {
    height: auto;
    max-width: 100%;
  }
  [color="primary"] {
    color: #E45E5E !important;
    fill: #E45E5E !important;
  }
  h2[color="text"] {
    color: #303030;
  }
  button[scale="md"] {
    color: #ffffff !important;
    background: #E45E5E !important;
    div[color="primary"] {
      background: transparent !important;
      color: #ffffff !important;
    }
    svg {
      fill: #ffffff !important;
    }
  }
  button[title="Settings"], button[title="Recent transactions"] {
    background: transparent !important;
  }
  button[aria-label="Close the dialog"] {
    background: transparent !important;
    svg {
      fill: #303030 !important;
    }
  }
  
  button[id="join-pool-button"] {
    background: #E45E5E !important;
    color: #ffffff !important;
  }
  a[id="import-pool-link"] {
    color: #294DF4;
  }
 
  img {
    height: auto;
    max-width: 100%;
  }
  
  @media screen and (min-width: 370px) {
    #root > div:nth-child(1) > div:nth-child(2) { {
      width: auto;
      min-width: 309px;
      max-width: 94%;
    }
  }
 

  #menu {
    width: 100%;
    button {
      background-color: #F5F5F5;
      color: #491ACD;
    }
    div{
      nav > div > a {
        svg {
          display: none;
        };
        background-image: url(/frontendv1/images/logo.png);
        background-repeat: no-repeat;
        height: 44px;
        width: 58px;
        background-size: contain;
        margin-top: 2px;
      }
      nav {
        background: #ffffff;
        border-bottom: none;
        div > button[aria-label="Toggle menu"] {
          background: transparent !important;
        }
        div > button[aria-label="Toggle menu"] > svg {
          fill: #E45E5E !important;
        }
        div:nth-child(2)> div > button {
          color: #E45E5E !important;
          background: #FDF3F3 !important;
        }
      } 
  
      div > div > div > div > div:nth-child(2) > [role="button"] {
        background-color: #FFFCFC;
      }

      div > div:nth-child(1)  { 
        div:nth-child(2) > div:nth-child(1) > a > svg, div:nth-child(2) > div:nth-child(1) > a > div{
          display: none; 
        } 
        div:nth-child(2) > div:nth-child(2) > button {
          display: none; 
        } 
        div:nth-child(2) > div:nth-child(2) > div> button {
          display: flex; 
        }
      }
    }
  }
  #swap-button {
    display: block !important;
  }
  a[aria-current="page"] > div , a[href="#/swap"]> div {
    display: block !important;
  }
  #menu > div > div > div:nth-child(1) > div:nth-child(2) {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-around;
    > div:nth-child(1) > div:nth-child(1) {
      display: none;
    }
    > div:nth-child(1) > div {
      svg {
        fill: #E45E5E !important;
      }
    }
    > div:nth-child(2) > div:nth-child(2) > button {
      background-color: #E7D9FB !important;
      color: #491ACD !important;
      svg {
        fill: #E45E5E !important;
      }
      > div {
        color: #E45E5E !important;
      }
    }
  }
}
`

export default GlobalStyle
