import React from "react";

import Header from "./Header";
import styled from "@emotion/styled";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  const LayoutContainer = styled.div``;
  const Container = styled.div`
    margin: 0 64px;
    min-width: 320px;

    @media (max-width: 520px) {
      margin: 0 12px;
    }
  `;
  return (
    <LayoutContainer>
      <Container>
        <Header />
        {children}
      </Container>
    </LayoutContainer>
  );
};

export default Layout;
