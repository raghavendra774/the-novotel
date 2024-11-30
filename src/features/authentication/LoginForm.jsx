import { useState } from "react";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import FormRowVertical from "../../ui/FormRowVertical";
import Input from "../../ui/Input";
import { useLogin } from "./useLogin";
import Spinner from "../../ui/Spinner"

function LoginForm() {
  const [email, setEmail] = useState("raghava1234@gmail.com");
  const [password, setPassword] = useState("Raghava@1234");
  const {login, isLoading} = useLogin({email, password})
  function handleSubmit(e) {
    e.preventDefault();
    if(!email || !password){
      return 
    }else{
      login({email,password}, {
        onSettled: () => {
          setEmail('');
          setPassword("");
        }
      })
    }
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormRowVertical label="Email address" orientation="vertical">
        <Input
          type="email"
          id="email"
          // This makes this form better for password managers
          autoComplete="username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disable={isLoading}
        />
      </FormRowVertical>
      <FormRowVertical label="Password" orientation="vertical">
        <Input
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disable={isLoading}
        />
      </FormRowVertical>
      <FormRowVertical>
        <Button size="large" disable={isLoading}>{!isLoading ? 'Login' : <Spinner/>}</Button>
      </FormRowVertical>
    </Form>
  );
}

export default LoginForm;
