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
  const { mutate: loginUser, isError } = useLogin();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    loginUser({ email, password }, {
      onSuccess: () => {
        const user = useAuthStore.getState().user;
        navigate(`/client/dashboard`);
      }
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-light-50 dark:bg-dark-500 p-4">
      <div className="bg-white dark:bg-dark-500 shadow-xl rounded-2xl p-8 w-full max-w-lg h-[80vh] overflow-auto">
        <h2 className={`text-3xl font-bold text-dark-500 dark:text-white text-center mb-6 ${isError ? 'text-red-500' : ''}`}>
          {isError ? 'Login Failed' : 'Login'}
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {/* Email */}
          <section className="flex flex-col">
            <label className="text-dark-500 dark:text-white mb-1">Email:</label>
            <Input
              type="text"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border border-dark-500 rounded-lg px-3 py-2 bg-light-50 dark:bg-dark-700 text-dark-500 dark:text-white focus:ring-2 focus:ring-dark-300 transition"
            />
          </section>

          {/* Password */}
          <section className="flex flex-col">
            <label className="text-dark-500 dark:text-white mb-1">Password:</label>
            <Input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border border-dark-500 rounded-lg px-3 py-2 bg-light-50 dark:bg-dark-700 text-dark-500 dark:text-white focus:ring-2 focus:ring-dark-300 transition"
            />
          </section>

          {/* Submit Button */}
          <Button
            type="submit"
            className="mt-4 bg-dark-500 text-white px-6 py-2 rounded-3xl border-2 border-dark-500 hover:bg-dark-300 hover:-translate-y-1 transition-all duration-200"
          >
            Login
          </Button>
        </form>

        {/* Footer */}
        <p className="text-center text-dark-500 dark:text-white mt-4">
          Don't have an account?{" "}
          <span
            className="text-dark-300 dark:text-light-300 hover:underline cursor-pointer"
            onClick={() => navigate("/client/register")}
          >
            Register
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
