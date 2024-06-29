import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const LoadingSpinner = styled.div`
  position: relative;
  width: 50px;
  height: 50px;

  &::before,
  &::after {
    content: '';
    position: absolute;
    border-radius: 50%;
    animation: ${rotate} 1s linear infinite;
  }

  &::before {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 4px solid #63BABA;
    border-top-color: transparent;
  }

  &::after {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 75%;
    height: 75%;
    border: 4px solid #5CA5A5;
    border-right-color: transparent;
  }
`;

const Spinner = () => {
  return (
    <LoadingContainer>
      <LoadingSpinner />
    </LoadingContainer>
  );
};

export default Spinner;