import styled from 'styled-components'



// export const Style=styled.div`
//       padding: 0xp;
//       margin: 0px;
//       box-sizing: border-box;
//       font-family: Verdana, Geneva, Tahoma, sans-serif;
// `;

export const AppStyle=styled.div`
 
   width: 100%;
   height: 100vh;
   background-position:center;
   background-size: cover;
`;

export const OverLay=styled.div`
   width: 100%;
   height: 100vh;
   background-color:var(--background-overlay);
   //background-color: green;
`;
export const Container=styled.div`
    max-width: 800px;
    margin: auto;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    padding: 1rem;
`;
export const Icon=styled.img`
   width: 120px;
   height: 20vh;
`;
export const Section=styled.div`
   width: 100%;
   //background-color: red;
  //padding: 1rem;
   border-radius: 0.4rem;
   color: white;
`;
export const SectionInput=styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;
   background-color: var(--section-overlay);
   border-radius: 0.4rem;
   padding: 1rem;
`;
export const Input=styled.input`
   //height: 6vh;
   //width: 40%;
   border-radius: 0.4rem;
   border: solid 1px white;
   background-color: transparent;
   padding: 0.5rem;
   text-align: center;
   font-size: 1.2rem;
   font-weight: 200;
   color: white;
   :focus{
    outline: none;
   }
   /* @media screen and(max-width:524px){
      height: 20px;
   width: 50%;
   } */
`;
export const SectionButton=styled.button`
   padding: 10px 50px;
   //margin-bottom: 20px;
   border-radius: 0.6rem;
   border: none;
   font-size: 1.2rem;
   font-weight: 500;
   background-color: white;
   overflow-x: hidden;
   :hover{
    cursor: pointer;
    background-color: lightgray;
   }
`;
export const IconStyle=styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   //padding-bottom: 50px;
   
`;

export const IconHeading=styled.h3`
   font-size: 15px;
   font-weight: 200;
   text-transform: capitalize;
`;
export const TemperatureHeading=styled.h1`
   font-size: 60px;
`;
export const Description=styled.div`
   display: grid;
   //grid-area: auto auto auto;
   grid-template-columns: auto auto;
   gap: 25 rem;
`;
export const Card=styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: space-between;
   background-color: var(--section-overlay);

   padding: 1rem;
   border-radius: 0.4rem;
   //margin: 50px 10px 10px 10px;
`;
export const DescriptionCardIcon=styled.div`
   width: 100%;
   display: flex;
   flex-direction: row;
   align-items: center;
   justify-content: center;
   gap: 5px;
   margin-bottom: 12px;
   @media screen and(max-width:1024px){
      grid-template-columns  : 1fr 1fr;
   }
`;
export const DescriptionSmall=styled.div`
  text-transform: capitalize;
`;

export const FooterStyle=styled.div`
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      list-style: none;
      background-color: #FFFFFF;
`;
export const Link=styled.a`
      text-decoration: none;
      font-size: 12px;
      color: black;
      margin: 10px;
`;

