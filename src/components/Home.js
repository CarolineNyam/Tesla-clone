import React from 'react'
import styled from 'styled-components'
import Section from './Section'

function Home() {
  return (
    <Container>
      <Section 
          title="Model S"
          description="Order Online for Touchless Delivery"
          backgrounImg="model-s.jpg"
          leftBtnText="Custom order"
          rightBtnText="Existing inventory"
      />    
      <Section 
          title="Model Y"
          description="Order Online for Touchless Delivery"
          backgrounImg="model-y.jpg"
          leftBtnText="Custom order"
          rightBtnText="Existing inventory"
      
      />
      <Section 
          title="Model 3"
          description="Order Online for Touchless Delivery"
          backgrounImg="model-3.jpg"
          leftBtnText="Custom order"
          rightBtnText="Existing inventory"
      
      /> 
      <Section 
          title="Model X"
          description="Order Online for Touchless Delivery"
          backgrounImg="model-x.jpg"
          leftBtnText="Custom order"
          rightBtnText="Existing inventory"
      
      />

    <Section
          title="Lowest Cost Solar Panels in Ireland"
          description="Money-back garantee"
          backgrounImg="Solar-panel.jpg"
          leftBtnText="Order now"
          rightBtnText="Learn More"
     />

    <Section
        title="Solar  for New Roofs"
        description="Solar roof Costs Less Than a New roof Solar Panels"
        backgrounImg="Solar-roof.jpg"
        leftBtnText="Order now"
        rightBtnText="Learn More"
    />

    <Section
        title="Accessories"
        description=""
        backgrounImg="accessories.jpg"
        leftBtnText="Shop now"
    />
  

     </Container>


        )  
}

export default Home

const Container = styled.div`
    height: 100vh;
`