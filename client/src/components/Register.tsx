import { useState } from "react";
import { useRegister } from "../customHooks/useRegister";
import { type User } from "../types/types";

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
        setRegisterData(initialState); // reset fields after successful registration
      },
    });
  };

  return (
    <div className="register auth">
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <section className="sec">
          <label>Fullname</label>
          <input
            type="text"
            placeholder="Enter your fullname"
            value={registerData.fullName}
            onChange={(e) =>
              setRegisterData({ ...registerData, fullName: e.target.value })
            }
          />
        </section>

        <section className="sec">
          <label>Email</label>
          <input
            type="text"
            placeholder="Enter your email"
            value={registerData.email}
            onChange={(e) =>
              setRegisterData({ ...registerData, email: e.target.value })
            }
          />
        </section>

        <section className="address">
          <label>Address</label>
          <section className="address-info">
            <section className="address-info-details">
              <label>Country</label>
              <input
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
              <input
                type="text"
                value={registerData.addresses[0].city}
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
              <input
                type="text"
                value={registerData.addresses[0].line1}
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
              <input
                type="text"
                value={registerData.addresses[0].postalCode}
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

        <section className="sec">
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={registerData.password}
            onChange={(e) =>
              setRegisterData({ ...registerData, password: e.target.value })
            }
          />
        </section>

        <section className="sec">
          <label>Phone</label>
          <input
            type="text"
            placeholder="Enter your phone"
            value={registerData.phone}
            onChange={(e) =>
              setRegisterData({ ...registerData, phone: e.target.value })
            }
          />
        </section>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Register;
