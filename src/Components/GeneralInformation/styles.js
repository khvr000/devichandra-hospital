import styled from "styled-components"

// export const Articles = styled.div`
//   display: grid;
//   grid-template-columns: repeat(auto-fill, minmax(235px, 1fr));
//   gap: 1rem;
//   margin-top: 2rem;
//   @media (min-width: 720px) {
//     grid-template-columns: repeat(3, minmax(235px, 1fr));
//   }
// `

export const GeneralInformationStyles = styled.div`
    display: flex;
    justify-content: space-between;
    @media (max-width: 440px) {
      flex-direction: column;
    }
`
