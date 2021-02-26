import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 1150px;
  margin: 5rem auto;
  display: block;
  ${(props) =>{
    switch (props.align) {
      case 'center':{
        return css`
          text-align: center;
        `
      }
    }
  }}
`

export const Text = styled.span`
  ${(props) => {
    switch (props.font) {
      case 'title':{
        return css`
          font-weight: bold;
          font-size: 50px;
        `
      }
      case 'paragraph':{
        return css`
          font-weight: 500;
          font-size: 30px;
        `
      }
      case "dark-text":{
        return css`
          font-weight: 500;
          font-size: 14px;
          margin-right: 1rem;
      `
      };
    }
  }}
`

export const SwitchDiv = styled.div`
  display:flex;
  flex-direction:row;
  align-items: center;
  margin-top: 2rem;
`

export const IconImg = styled.img`
  height: 100px;
  width: 100px;
  object-fit: contain;
`