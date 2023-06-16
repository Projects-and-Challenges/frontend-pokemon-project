"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { z } from "zod";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import { Field, ErrorMessage, Input, Label, Form } from "@/components/Form";

import logo from "src/images/pokemon-gotta.svg";
import cover from "@/images/cover.svg";

import * as auth from '../../services/auth/login'

import * as Styled from "./styles";

const userSchema = z.object({
  email: z.string()
    .nonempty("Informe o e-mail!")
    .email("Formato de e-mail inválido!")
    .toLowerCase(),
  password: z.string()
    .nonempty("Informe a senha!"),
});

type UserFormData = z.infer<typeof userSchema>;

export default function Login(): JSX.Element {
  const loginForm = useForm<UserFormData>({
    resolver: zodResolver(userSchema),
  });

  const {
    handleSubmit,
    formState: { isSubmitting }
  } = loginForm;

  async function login (data: UserFormData) {
    console.log(data)
    const response = await auth.login(data);

    console.log(response)
  }

  return (
    <Styled.LoginContainer>

      <Styled.LogoImage>
        <Link href="/"><Image src={logo} alt="Pokemon Logo" /></Link>
      </Styled.LogoImage>

      <Styled.ImageContainer>
        <Styled.Image
          src={cover}
          alt="Pokemon Logo"
          fill={true}
        />
      </Styled.ImageContainer>

      <Styled.FormContainer>
        <FormProvider {...loginForm}>
          <Form onSubmit={handleSubmit(login)}>
            <>
              <Field>
                <Label htmlFor="email">
                  E-mail:
                </Label>
                <Input type="email" name="email" />
                <ErrorMessage field="email" />
              </Field>

              <Field>
                <Label htmlFor="password">
                  Senha:
                </Label>
                <Input type="password" name="password" />
                <ErrorMessage field="password" />
              </Field>
              
              <Styled.Button
                type="submit"
                disabled={isSubmitting}
                >
                 Login
              </Styled.Button>
            </>
          </Form>
        </FormProvider>
      </Styled.FormContainer>
      
    </Styled.LoginContainer>
  );
}
