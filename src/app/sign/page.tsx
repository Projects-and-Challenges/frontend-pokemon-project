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

import * as Styled from "./styles";

import * as auth from '@/services/auth/register';

const createUserSchema = z.object({
  username: z.string()
    .nonempty("Informe um username!")
    .toLowerCase(),
  email: z.string()
    .nonempty("Informe o e-mail!")
    .email("Formato de e-mail inválido!")
    .toLowerCase(),
  password: z.string()
    .nonempty("Informe a senha!")
    .min(5, "A senha deve ter 5 ou mais caracteres!")

});

type CreateUserFormData = z.infer<typeof createUserSchema>;

export default function Sign(): JSX.Element {
  const createUserForm = useForm<CreateUserFormData>({
    resolver: zodResolver(createUserSchema),
  });

  const {
    handleSubmit,
    formState: { isSubmitting }
  } = createUserForm;

  async function createUser (data: CreateUserFormData) {
    const response = await auth.register(data);

    console.log(response)
  }

  return (
    <Styled.SignContainer>
      <Styled.LogoImage>
      <Link href="/"><Image src={logo} alt="Pokemon Logo" /></Link>
      </Styled.LogoImage>

      <Styled.ImageContainer>
        <Image
          src={cover}
          alt="Pokemon Logo"
          fill={true}
          style={{
            minWidth: "100%",
            clipPath: "inset(0 52% 0 0)",
            zIndex: -1,
          }}
        />
      </Styled.ImageContainer>

      <Styled.FormContainer>
      <FormProvider {...createUserForm}>
          <Form onSubmit={handleSubmit(createUser)}>
            <>
              <Field>
                <Label htmlFor="username">
                  Username:
                </Label>
                <Input type="username" name="username" />
                <ErrorMessage field="username" />
              </Field>

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
                  Sign
              </Styled.Button>
            </>
          </Form>
        </FormProvider>
      </Styled.FormContainer>

    </Styled.SignContainer>
  );
}
