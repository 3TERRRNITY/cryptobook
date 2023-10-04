import React from "react";
import Layout from "../components/Layout";
import styled from "@emotion/styled";

const index = () => {
  const Head = styled.div`
    width: 80%;
    margin: 20px auto;
    font-size: xx-large;
    font-weight: 800;
    text-align: center;
  `;
  const Description = styled.div`
    width: 80%;
    margin: auto;
    font-size: x-large;
    font-weight: 400;
    text-align: center;
  `;
  return (
    <Layout>
      <Head>
        On this website you can add your contacts or search anyone's contact
        using Ethereum 0x address
      </Head>
      <Description>
        If you want to add your contact - use "Add Contact" page
        <br />
        If you want to search anyone's contact - use "Show Contact" page
      </Description>
    </Layout>
  );
};

export default index;
