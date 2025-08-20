import { useState } from "react";
import { useLogin } from "../customHooks/useLogin"; // your custom hook

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { mutate: loginUser } = useLogin();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    loginUser({ email, password });
  };

  return (
    <div className="login auth">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <section className="login-sec">
          <label>Email</label>
          <input
            type="text"
            placeholder="Enter your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </section>
        <section className="login-sec">
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </section>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
