import React from "react";
import styled from "styled-components";
import ContentWrapper from "../components/ContentWrapper";

const FooterContent = styled.footer`
  padding: 0.1em 0;
`;

const FooterInner = styled.div`
  margin-top: 3em;
  text-align: center;
  padding: 1.5em;
  border-top: solid 1px ${props => props.theme.colors.blackLight};
  color: ${props => props.theme.colors.gray};
  font-size: 14px;
  a {
    color: ${props => props.theme.colors.gray};
    text-decoration: underline;
  }
`;

const Footer = () => {
  return (
    <FooterContent>
      <ContentWrapper>
        <FooterInner>
          <div>
            <a href="https://github.com/gatsbyjs/gatsby" rel="nofollow">
              Made with <span role="img">❤️</span> in Gatsby
            </a>
          </div>
          <div>© {new Date().getFullYear()}, Chandru All rights reserved. Credits to Gatsby Opensource starters</div>
        </FooterInner>
      </ContentWrapper>
    </FooterContent>
  );
};

export default Footer;
