import { useState } from "react";
import { register } from "../services/authService";

function Register() {

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      await register(form);

      alert("Registration Successful");

    } catch (error) {

  console.log("REGISTER ERROR:", error);

  alert(
    error.response?.data ||
    error.message
  );
}
  };

  return (
    <div>

      <h2>Register</h2>

      <form onSubmit={handleSubmit}>

        <input
          placeholder="Name"
          onChange={(e) =>
            setForm({
              ...form,
              name: e.target.value
            })
          }
        />

        <br />
        <br />

        <input
          placeholder="Email"
          onChange={(e) =>
            setForm({
              ...form,
              email: e.target.value
            })
          }
        />

        <br />
        <br />

        <input
          type="password"
          placeholder="Password"
          onChange={(e) =>
            setForm({
              ...form,
              password: e.target.value
            })
          }
        />

        <br />
        <br />

        <button type="submit">
          Register
        </button>

      </form>

    </div>
  );
}

export default Register;