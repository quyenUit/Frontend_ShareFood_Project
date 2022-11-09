import React from "react";
import { CDBFooter, CDBFooterLink, CDBBtn, CDBIcon, CDBBox } from "cdbreact";
import brandLogo from "../../images/brand.png";
import "../../styles/Footer.css";
export const Footer = () => {
  return (
    <CDBFooter className="shadow">
      <CDBBox
        display="flex"
        flex="column"
        className="mx-auto py-5"
        style={{ width: "90%" }}
      >
        <CDBBox display="flex" justifyContent="between" className="flex-wrap">
          <CDBBox alignSelf="center">
            <a href="/" className="d-flex align-items-center p-0 text-dark">
              <img alt="logo" src={brandLogo} width="90px" />
              {/* <span className="ml-3 h5 font-weight-bold">Share Food</span> */}
            </a>
            <CDBBox className="mt-5" display="flex">
              <CDBBtn flat color="#ceab93" className="p-2">
                <CDBIcon fab icon="facebook-f " />
              </CDBBtn>
              <CDBBtn flat color="#ceab93" className="mx-3 p-2">
                <CDBIcon fab icon="twitter " />
              </CDBBtn>
              <CDBBtn flat color="#ceab93" className="p-2">
                <CDBIcon fab icon="instagram " />
              </CDBBtn>
            </CDBBox>
          </CDBBox>
          <CDBBox>
            <p className="h5 mb-4" style={{ fontWeight: "600" }}>
              Devwares
            </p>
            <CDBBox display="flex" flex="column" style={{ cursor: "pointer" }}>
              <CDBFooterLink href="/">Resources</CDBFooterLink>
              <CDBFooterLink href="/">About Us</CDBFooterLink>
              <CDBFooterLink href="/">Contact</CDBFooterLink>
              <CDBFooterLink href="/">Blog</CDBFooterLink>
            </CDBBox>
          </CDBBox>
          <CDBBox>
            <p className="h5 mb-4" style={{ fontWeight: "600" }}>
              Products
            </p>
            <CDBBox display="flex" flex="column" style={{ cursor: "pointer" }}>
              <CDBFooterLink href="/">Windframe</CDBFooterLink>
              <CDBFooterLink href="/">Loop</CDBFooterLink>
              <CDBFooterLink href="/">Contrast</CDBFooterLink>
            </CDBBox>
          </CDBBox>
          <CDBBox>
            <p className="h5 mb-4" style={{ fontWeight: "600" }}>
              Help
            </p>
            <CDBBox display="flex" flex="column" style={{ cursor: "pointer" }}>
              <CDBFooterLink href="/">Support</CDBFooterLink>
              <CDBFooterLink href="/">Sign Up</CDBFooterLink>
              <CDBFooterLink href="/">Sign In</CDBFooterLink>
            </CDBBox>
          </CDBBox>
        </CDBBox>
        <small className="text-center mt-5">
          &copy; Devwares, 2022. All rights reserved.
        </small>
      </CDBBox>
    </CDBFooter>
  );
};
