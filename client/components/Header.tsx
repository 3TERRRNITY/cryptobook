import styled from "@emotion/styled";
import Link from "next/link";
import React from "react";

const Header = () => {
  const HeaderContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    padding: 24px 0;
  `;
  const LogoContainer = styled.div`
    text-transform: uppercase;
    font-size: x-large;
    & > a {
      text-decoration: none;
      color: #161515;
    }
  `;
  const HeaderItems = styled.div`
    display: flex;
    justify-content: space-around;
    gap: 20px;
  `;
  const HeaderItem = styled.div`
    font-size: large;
    cursor: pointer;
    :hover {
      text-decoration: underline;
    }
    & > a {
      text-decoration: none;
      color: #161515;
    }
  `;

  return (
    <HeaderContainer>
      <LogoContainer>
        <Link href="/">Crypto Book</Link>
      </LogoContainer>
      <HeaderItems>
        <HeaderItem>
          <Link href="/Add">Add Contact</Link>
        </HeaderItem>
        <HeaderItem>
          <Link href="/Show">Show Contact</Link>
        </HeaderItem>
      </HeaderItems>
    </HeaderContainer>
  );
};

export default Header;
