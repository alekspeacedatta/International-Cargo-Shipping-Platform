import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../stores/useAuthStore";
import { useState } from "react";
import { useLogin } from "../customHooks/useLogin"; 
import { Button } from "./commons/Button";
import { Input } from "./commons/Input";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { mutate: loginUser } = useLogin();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    loginUser({ email, password }, {
      onSuccess: () => {
        const user = useAuthStore.getState().user;
        navigate(`/user/${user._id}`)
      }
    });
  };
  return (
    <div className="login auth">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <section className="login-sec sec">
          <label>Email:</label>
          <Input
            type="text"
            placeholder="Enter your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </section>
        <section className="login-sec sec">
          <label>Password:</label>
          <Input
            type="password"
            placeholder="Enter your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </section>
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default Login;
