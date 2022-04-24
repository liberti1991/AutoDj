import React from "react";
import { useHistory } from "react-router-dom";

import styled from "styled-components";

export const LoginPage = ({ setIsLoggedIn }) => {
    const history = useHistory();

    return (
        <LoginPageContainer>
            <FormContainer>
                <h1>AUTO DJ</h1>

                <InputContainer>
                    <label id="email">Email:</label>
                    <input
                        for="email"
                        type="email"
                        placeholder="cliente@autodj.com.br"
                    />
                </InputContainer>

                <InputContainer>
                    <label id="password">Senha:</label>
                    <input
                        for="password"
                        type="password"
                        placeholder="*******"
                    />
                </InputContainer>

                <ButtonSubmit
                    onClick={() => {
                        setIsLoggedIn(true);
                        history.push("/home");
                    }}
                >
                    Entrar
                </ButtonSubmit>

                <a href="#">Esqueceu sua senha?</a>
            </FormContainer>
        </LoginPageContainer>
    );
};

const LoginPageContainer = styled.div`
    display: grid;
    place-items: center;
    width: 100%;
    height: 100vh;
`;
const FormContainer = styled.div`
    display: flex;
    border-radius: 15px;
    border: 1px solid;
    box-shadow: 5px 10px 5px gray;
    flex-direction: column;
    align-items: center;
    gap: 12px;
    width: 300px;
    aspect-ratio: 2/3;

    @media screen and (min-width: 648px) {
        width: 350px;
    }

    h1 {
        text-align: center;
        margin-top: 70px;
        padding: 32px 16px;
    }

    a {
        text-decoration: none;
        color: grey;
        font-size: 12px;
    }
`;

const InputContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 80%;

    input,
    label {
        border: none;
        width: 100%;
        padding: 6px;
    }

    input {
        border-bottom: 0.5px solid black;
    }
`;

const ButtonSubmit = styled.button`
    border-radius: 3px;
    border: none;
    background: #71aee1;
    color: #fff;
    padding: 8px;
    width: 80%;
    transition: 0.25s;
    &:hover {
        background: #4e97d1;
    }
`;
