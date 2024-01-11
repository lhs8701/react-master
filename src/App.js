import styled, { keyframes } from "styled-components";

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: ${(props) => props.theme.backgroundColor};
`;

const Text = styled.span`
    font-size: 50px;
    color: ${(props) => props.theme.textColor};
`;

function App() {
    return (
        <Container>
            <Text>Hello</Text>
        </Container>
    );
}

export default App;
