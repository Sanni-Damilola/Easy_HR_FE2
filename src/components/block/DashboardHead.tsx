import React from 'react'
import styled from 'styled-components'
import { FiMenu } from "react-icons/fi";
import img from "../../Assets/new.png"

import { useAppSelector } from '../global/Store';

const DashboardHead = () => {
  const [show, setShow] = React.useState(false);
  const [drop, setDrop] = React.useState(false)

  const Dropdown = () => {
    setDrop(!drop)
  }

  const Toggle = () => {
    setShow(!show);
  };


  

  const admin = useAppSelector((state) => state.currentUser);

  return (
      <Container>
      <Wrapper>
        <Left>
          <Img src={img} />
        </Left>

        {/* <Mid>
          <Welcome>
            <Circ>{admin?.companyname?.charAt(0)}</Circ>
            <Prof>
              <Comp>Company's profile</Comp>
              <Nam>{admin?.companyname} </Nam>
              <Id>ID:{admin?.companyCode} </Id>
            </Prof>
          </Welcome>
        </Mid> */}

        <Right>
          <Up>
            <Profile onClick={Dropdown}>{admin?.yourName?.charAt(0)} </Profile>
          </Up>
        </Right>
        {drop ? (
          <Drop>
            <p>Organization</p>
            <Orgname>

            </Orgname>
        </Drop>
        ) : null}
      </Wrapper>
    </Container>
  )
}

export default DashboardHead
const Orgname = styled.div`
  width: 140px;
  height: 30px;
  display: flex;
  border: 1px solid #ededed;
  background-color: red;
  color: #333;
  cursor: pointer;
  transition: all .1s ease;
`
const Drop = styled.div`
  width: 180px;
  display: flex;
  border-radius: 10px;
  flex-direction: column;
  padding-left: 12px;
  padding-top: 10px;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  position: absolute;
  right: 0;
  top: 70px;
  p{
    color: #6c757d!important;
    font-size: 15px;
    font-weight: 400;
  }
`
const Img = styled.img`
  height: 60px;
`

const Profile = styled.div`
  width: 48px;
  height: 48px;
  font-size: 20px;
  justify-content: center;
  display: flex;
  align-items: center;
  overflow: hidden;
  display: flex;
  border-radius: 50px;
  font-weight: bold;
  color: #2e2e2e;
  background-color: white;
`;

const Up = styled.div`
  display: flex;
  align-items: center;
`;

const Right = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  @media screen and (max-width: 500px) {
    width: 30px;
  }
`;

const Left = styled.div`
  font-size: 25px;
  cursor: pointer;
  @media screen and (max-width: 1024px) {
    display: flex;
  }
  @media screen and (max-width: 500px) {
    margin-left: 30px;
  }
`;

const Wrapper = styled.div`
  width: 95%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  @media screen and (max-width: 1024px) {
    width: 93%;
    justify-content: space-between;
    display: flex;
  }
  @media screen and (max-width: 500px) {
    width: 93%;
    justify-content: space-between;
    display: flex;
  }
`;

const Container = styled.div`
  width: 100%;
  height: 70px;
  background-color: #1F337C;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  position: fixed;
  z-index: 11;
  display: flex;
  justify-content: center;
  @media screen and (max-width: 500px) {
    justify-content: center;
    display: flex;
  }
`