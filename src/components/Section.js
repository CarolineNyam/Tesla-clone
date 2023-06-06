 import React from 'react'
 import styled from 'styled-components'
 import Fade from 'react-reveal/Fade';
 
 function Section({ title, description, leftBtnText, rightBtnText,  backgrounImg }) {
   return (
     <Wrap bgImage={backgrounImg}>
        <Fade bottom>

        <ItemTexrt>
            <h1>{ title }</h1>
            <p>{description}</p>
        </ItemTexrt>

        </Fade>
          <Buttons>
            <Fade bottom>
         <Buttongroup>
            <LeftButtoon>
                {leftBtnText}
            </LeftButtoon>
                { rightBtnText &&
                    <RightButton>
                        {rightBtnText}
                    </RightButton>
            }
    
         </Buttongroup>
        </Fade>     
        <DownArrow src="/images/down-arrow.svg" />
          </Buttons>
    </Wrap>
   )
 }
 
 export default Section

 const  Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-position: centre;
    background-repeat: no-repeat;
    background-image: url('/images/model-s.jpg');
    display: flex;
    flex-direction: column;
    justify-content: space-between;  //vertical
    align-items: center; //horizontal
    background-image: ${props => `url("/images/${props.bgImage}")` }
 `

 const ItemTexrt = styled.div`
      padding-top: 15vh;
      text-align: centre;
 `


 const Buttongroup = styled.div`
    display: flex;
    margin-bottom: 30px;
    @media (max-width: 768px) {
        flex-direction: column;
    }  // when putting buttons in order or position you prefer.
 `

 const LeftButtoon = styled.div`
    background-color: rgba(23, 26, 32, 0.8);
    height: 40px;
    width: 256px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    opacity: 0.85;
    text-transfrom: uppercase;
    font-size: 12px;
    cursor: pointer;
    margin: 8px;

 `

 const RightButton = styled(LeftButtoon)`
    background: white;
    opacity: 0.65;  	
    color: black;
 `

const DownArrow = styled.img`
    margin-top: 20px;
    height: 40px;
    overflow-x: hidden;
    animation: animateDown infinite 1.5s;
`
const Buttons = styled.div`

`