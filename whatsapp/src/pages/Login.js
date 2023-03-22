import { Button } from "@mui/material";
import Head from "next/head";
import styled from "styled-components";
import { auth, provider } from "../../firebase";
function Login() {
  const signIn = () => {
    auth.signInWithPopup(provider).catch(alert);
  };
  return (
    <Container>
      <Head>
        <title>Login</title>
      </Head>
      <LoginContainer>
        <Logo src="https://1.bp.blogspot.com/-tN6DCkDTyT4/XyJoQz9yGcI/AAAAAAAAAF4/aBZwjuwwmb4iG3ZWEPKOZOi59_E4sXS5wCLcBGAsYHQ/s2048/logo%2Bwa%2Bpng%2Byogiancreative.png" />
        <Button variant="outlined" onClick={signIn}>
          Sign in with Google
        </Button>
      </LoginContainer>
    </Container>
  );
}

export default Login;

const Container = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  background-color: whitesmoke;
`;
const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 100px;
  align-items: center;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0px 4px 14px -3px rgba(0, 0, 0, 0.7);
`;
const Logo = styled.img`
  height: 200px;
  width: 200px;
  margin-bottom: 50px;
`;
