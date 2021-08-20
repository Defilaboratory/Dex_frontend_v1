import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { ButtonMenu, ButtonMenuItem } from '@pancakeswap-libs/uikit'
import useI18n from 'hooks/useI18n'

const StyledNav = styled.div`
  margin-bottom: 40px;
  > div {
    background: #FFFFFF;
    opacity: 1;
    font-weight: 900;
    color: #999999;
    height: 44px;
    line-height: 44px;
    border-radius: 22px;
  }
  a[variant="subtle"] {
    background: #E45E5E;
    box-shadow: 0px 2px 4px 0px rgba(66, 37, 125, 0.37);
    height: 44px;
    line-height: 44px;
    border-radius: 22px;
  }
  a[variant="tertiary"] {
    height: 44px;
    line-height: 44px;
    border-radius: 22px;
  }
`

function Nav({ activeIndex = 0 }: { activeIndex?: number }) {
  const TranslateString = useI18n()
  return (
    <StyledNav>
      <ButtonMenu activeIndex={activeIndex} scale="sm" variant="subtle">
        <ButtonMenuItem id="swap-nav-link" to="/swap" as={Link}>
          {TranslateString(1142, 'Swap')}
        </ButtonMenuItem>
        <ButtonMenuItem id="pool-nav-link" to="/pool" as={Link}>
          {TranslateString(262, 'Liquidity')}
        </ButtonMenuItem>
        {/* <ButtonMenuItem
          id="pool-nav-link"
          as="a"
          href="https://www.binance.org/en/bridge?utm_source=PancakeSwap"
          target="_blank"
          rel="noreferrer noopener"
        >
          Bridge
        </ButtonMenuItem> */}
      </ButtonMenu>
    </StyledNav>
  )
}

export default Nav
