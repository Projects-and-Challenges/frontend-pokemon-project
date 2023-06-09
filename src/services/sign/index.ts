const baseURL = process.env.BASE_URL;

async function checkEmail(email: string) {
  const body = { email };

  try {
    const response = await fetch(`${baseURL}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    const data = await response.json();

    if (data !== "ok") {
      throw new Error(data);
    }

    return "ok";
  } catch (error) {
    //TO-DO: criar alerta com o retorno do error.
    console.log(error);
  }
}

type createUserProps = {
  username: string;
  email: string;
  password: string;
};

function createUser({ username, email, password }: createUserProps) {
  async function signUser() {
    const body = {
      username,
      email,
      password,
    };

    try {
      const response = await fetch(`${baseURL}`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(body),
      });

      const statusRequest = await response.json();

      if (statusRequest !== "ok") {
        throw new Error(statusRequest);
      }

      return "ok";
    } catch (error) {
      //TO-DO: criar alerta com o retorno do error.
      console.log(error);
    }
  }

  return signUser;
}

export default createUser;
