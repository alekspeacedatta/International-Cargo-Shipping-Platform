import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRegister } from "../customHooks/useRegister";
import { type User } from "../types/types";
import { Button } from "./commons/Button";
import { Input } from "./commons/Input";

const initialState: User = {
  fullName: "",
  email: "",
  password: "",
  phone: "",
  addresses: [{ country: "", city: "", line1: "", postalCode: "" }],
  role: "USER",
};

const Register = () => {
  const [registerData, setRegisterData] = useState<User>(initialState);
  const { mutate: register } = useRegister();
  const navigate = useNavigate();

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    register(registerData, { onSuccess: () => setRegisterData(initialState) });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-light-50 dark:bg-dark-500 p-4">
      <div className="bg-white dark:bg-dark-500 shadow-xl rounded-2xl p-8 w-full max-w-lg">
        <h2 className="text-3xl font-bold text-dark-500 dark:text-white text-center mb-6">
          Create Account
        </h2>

        <form onSubmit={handleRegister} className="flex flex-col gap-4">
          <section className="flex flex-col">
            <label className="text-dark-500 dark:text-white mb-1">Full Name:</label>
            <Input
              type="text"
              placeholder="Enter your fullname"
              value={registerData.fullName}
              onChange={(e) =>
                setRegisterData({ ...registerData, fullName: e.target.value })
              }
              className="border border-dark-500 rounded-lg px-3 py-2 bg-light-50 dark:bg-dark-700 text-dark-500 dark:text-white focus:ring-2 focus:ring-dark-300 transition"
            />
          </section>

          
          <section className="flex flex-col">
            <label className="text-dark-500 dark:text-white mb-1">Email:</label>
            <Input
              type="email"
              placeholder="Enter your email"
              value={registerData.email}
              onChange={(e) =>
                setRegisterData({ ...registerData, email: e.target.value })
              }
              className="border border-dark-500 rounded-lg px-3 py-2 bg-light-50 dark:bg-dark-700 text-dark-500 dark:text-white focus:ring-2 focus:ring-dark-300 transition"
            />
          </section>

          
          <section className="flex flex-col">
            <label className="text-dark-500 dark:text-white mb-1">Password:</label>
            <Input
              type="password"
              placeholder="Enter your password"
              value={registerData.password}
              onChange={(e) =>
                setRegisterData({ ...registerData, password: e.target.value })
              }
              className="border border-dark-500 rounded-lg px-3 py-2 bg-light-50 dark:bg-dark-700 text-dark-500 dark:text-white focus:ring-2 focus:ring-dark-300 transition"
            />
          </section>

          
          <section className="flex flex-col">
            <label className="text-dark-500 dark:text-white mb-1">Phone:</label>
            <Input
              type="text"
              placeholder="Enter your phone"
              value={registerData.phone}
              onChange={(e) =>
                setRegisterData({ ...registerData, phone: e.target.value })
              }
              className="border border-dark-500 rounded-lg px-3 py-2 bg-light-50 dark:bg-dark-700 text-dark-500 dark:text-white focus:ring-2 focus:ring-dark-300 transition"
            />
          </section>

          
          <section className="flex flex-col gap-4 mt-2">
            <label className="text-dark-500 dark:text-white font-semibold">Address</label>

            
            <div className="flex gap-2">
              <div className="flex-1 flex flex-col">
                <label className="text-dark-500 dark:text-white mb-1">Country</label>
                <Input
                  type="text"
                  placeholder="Enter your country"
                  value={registerData.addresses[0].country}
                  onChange={(e) =>
                    setRegisterData({
                      ...registerData,
                      addresses: [{ ...registerData.addresses[0], country: e.target.value }],
                    })
                  }
                  className="border border-dark-500 rounded-lg px-3 py-2 bg-light-50 dark:bg-dark-700 text-dark-500 dark:text-white focus:ring-2 focus:ring-dark-300 transition"
                />
              </div>
              <div className="flex-1 flex flex-col">
                <label className="text-dark-500 dark:text-white mb-1">City</label>
                <Input
                  type="text"
                  placeholder="Enter your city"
                  value={registerData.addresses[0].city}
                  onChange={(e) =>
                    setRegisterData({
                      ...registerData,
                      addresses: [{ ...registerData.addresses[0], city: e.target.value }],
                    })
                  }
                  className="border border-dark-500 rounded-lg px-3 py-2 bg-light-50 dark:bg-dark-700 text-dark-500 dark:text-white focus:ring-2 focus:ring-dark-300 transition"
                />
              </div>
            </div>

            <div className="flex gap-2">
              <div className="flex-1 flex flex-col">
                <label className="text-dark-500 dark:text-white mb-1">Line 1</label>
                <Input
                  type="text"
                  placeholder="Enter line 1"
                  value={registerData.addresses[0].line1}
                  onChange={(e) =>
                    setRegisterData({
                      ...registerData,
                      addresses: [{ ...registerData.addresses[0], line1: e.target.value }],
                    })
                  }
                  className="border border-dark-500 rounded-lg px-3 py-2 bg-light-50 dark:bg-dark-700 text-dark-500 dark:text-white focus:ring-2 focus:ring-dark-300 transition"
                />
              </div>
              <div className="flex-1 flex flex-col">
                <label className="text-dark-500 dark:text-white mb-1">Postal Code</label>
                <Input
                  type="text"
                  placeholder="Enter postal code"
                  value={registerData.addresses[0].postalCode}
                  onChange={(e) =>
                    setRegisterData({
                      ...registerData,
                      addresses: [{ ...registerData.addresses[0], postalCode: e.target.value }],
                    })
                  }
                  className="border border-dark-500 rounded-lg px-3 py-2 bg-light-50 dark:bg-dark-700 text-dark-500 dark:text-white focus:ring-2 focus:ring-dark-300 transition"
                />
              </div>
            </div>
          </section>

          <Button
            type="submit"
            className="mt-4 bg-dark-500 text-white px-6 py-2 rounded-lg border-2 border-dark-500 hover:bg-dark-300 hover:-translate-y-1 transition-all duration-200"
          >
            Register
          </Button>
        </form>

        <p className="text-center text-dark-500 dark:text-white mt-4">
          Already have an account?{" "}
          <span
            className="text-dark-300  dark:text-light-300 hover:underline cursor-pointer"
            onClick={() => navigate("/client/login")}
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
};

export default Register;
