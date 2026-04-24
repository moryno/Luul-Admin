import styled from "styled-components";

const AppLogo = ({ header = true }) => {
  return (
    <div>
      <StyledLogo $header={header}>Luul</StyledLogo>
    </div>
  );
};

const StyledLogo = styled.div`
   font-family: 'Space Grotesk', sans-serif;
   color: ${({ theme, $header }) => `${$header ? theme.palette.primary.main : theme.palette.white}`};
   font-size: clamp(48px, 5vw, 36px);
   transition: all 0.3s ease;
   
   &:hover{
    opacity: 0.8
    transform:scale(1.05);
   }
`;
export default AppLogo;
