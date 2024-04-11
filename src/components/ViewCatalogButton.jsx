import React from "react";
import styled from "styled-components";
import viewImg1 from "../images/view-list1.png";
import viewImg2 from "../images/view-list2.png";

const Button = styled.button`
  width: 35px;
  height: 35px;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  background-color: var(--bg-gray);
`;

const ButtonImg = styled.img`
  width: 17px;
  height: 17px;
  display: block;
  margin: 0 auto;
`;

function ViewCatalogButton() {
  return (
    <>
      <Button>
        <ButtonImg src={viewImg1} />
      </Button>
      {/*<Button>
        <img height="17px" src={viewImg2} />
      </Button>*/}
    </>
  );
}

export default ViewCatalogButton;
