import { useState } from "react";
import { useRegister } from "../customHooks/useRegister";
import { type User } from "../types/types";
import { Button } from "./commons/Button";
import { Input } from "./commons/Input";

const initialState: User = {
  fullName: "",
  email: "",
  password: "",
  phone: "",
  addresses: [
    { country: "", city: "", line1: "", postalCode: "" } 
  ],
  role: "USER", 
};

const Register = () => {
  const [registerData, setRegisterData] = useState<User>(initialState);
  const { mutate: register } = useRegister();

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();

    register(registerData, {
      onSuccess: () => {
        setRegisterData(initialState);
      },
    });
  };

  return (
    <div className="register auth">
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <section className="register-sec sec">
          <label>Fullname:</label>
          <Input
            type="text"
            placeholder="Enter your fullname"
            value={registerData.fullName}
            onChange={(e) =>
              setRegisterData({ ...registerData, fullName: e.target.value })
            }
          />
        </section>

        <section className="register-sec sec">
          <label>Email:</label>
          <Input
            type="text"
            placeholder="Enter your email"
            value={registerData.email}
            onChange={(e) =>
              setRegisterData({ ...registerData, email: e.target.value })
            }
          />
        </section>

        <section className="address">
          <label>Address:</label>
          <section className="address-info">
            <section className="address-info-details">
              <label>Country</label>
              <Input
                placeholder="enter your country"
                type="text"
                value={registerData.addresses[0].country}
                onChange={(e) =>
                  setRegisterData({
                    ...registerData,
                    addresses: [{ ...registerData.addresses[0], country: e.target.value }],
                  })
                }
              />
            </section>
            <section className="address-info-details">
              <label>City</label>
              <Input
                type="text"
                value={registerData.addresses[0].city}
                placeholder="enter your city"
                onChange={(e) =>
                  setRegisterData({
                    ...registerData,
                    addresses: [{ ...registerData.addresses[0], city: e.target.value }],
                  })
                }
              />
            </section>
            <section className="address-info-details">
              <label>Line 1</label>
              <Input
                type="text"
                value={registerData.addresses[0].line1}
                placeholder="enter line1"
                onChange={(e) =>
                  setRegisterData({
                    ...registerData,
                    addresses: [{ ...registerData.addresses[0], line1: e.target.value }],
                  })
                }
              />
            </section>
            <section className="address-info-details">
              <label>Postal Code</label>
              <Input
                type="text"
                value={registerData.addresses[0].postalCode}
                placeholder="enter postal code"
                onChange={(e) =>
                  setRegisterData({
                    ...registerData,
                    addresses: [{ ...registerData.addresses[0], postalCode: e.target.value }],
                  })
                }
              />
            </section>
          </section>
        </section>

        <section className="register-sec sec">
          <label>Password:</label>
          <Input
            type="password"
            placeholder="Enter your password"
            value={registerData.password}
            onChange={(e) =>
              setRegisterData({ ...registerData, password: e.target.value })
            }
          />
        </section>

        <section className="register-sec sec">
          <label>Phone:</label>
          <Input
            type="text"
            placeholder="Enter your phone"
            value={registerData.phone}
            onChange={(e) =>
              setRegisterData({ ...registerData, phone: e.target.value })
            }
          />
        </section>

        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default Register;
