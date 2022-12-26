import React, { useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const authContext = React.createContext();
export const useAuth = () => useContext(authContext);

const API =
  "http://elibrary-env.eba-8chmdsyi.us-east-1.elasticbeanstalk.com/api";

const AuthContextProvider = ({ children }) => {
  const navigate = useNavigate();

  const [currentUser, setCurrentUser] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState();
  const [pass, setPass] = useState("");
  const [book, setBook] = useState("");

  const config = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers":
        "Origin, X-Requested-With, Content-Type, Accept, *",
    },
  };
  const config1 = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
      "Content-Type": null,
    },
  };

  const multipartFileConfig = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
      "Content-Type": "multipart/form-data",
    },
  };

  async function handleRegister(formData, event) {
    try {
      const res = await axios.post(
        `${API}/accounts/register`,
        formData,
        config
      );

      console.log(res);
      snackbar();
      setTimeout(() => {
        navigate("/login");
      }, 3000);
    } catch (err) {
      console.log(err);
      snackbar_error();
      setError(Object.values(err.response.data).flat(2));
    } finally {
      setLoading(false);
    }
  }

  async function handleEdit(formData, event) {
    try {
      const res = await axios.post(
        `${API}/accounts/edit`,
        formData,
        multipartFileConfig
      );
      const user_obj = {
        id: res.data.id,
        username: res.data.username,
        avatar_url: res.data.avatar,
        role: res.data.role,
        email: res.data.email,
      };
      setUser(user_obj);
      snackbar();
      setTimeout(() => {
        navigate("/personPage");
      }, 1000);
    } catch (err) {
      console.log("error->" + err);
      // snackbar_error()
      // setError(Object.values(err.response.data).flat(2));
    } finally {
      setLoading(false);
    }
  }

  async function getOneUser(email) {
    try {
      const res = await axios(`${API}/account/user/${email}/`);
      console.log(res.data);
      setUser(res.data);
    } catch (err) {
      console.log(err);
    }
  }

  async function emailRecovery(email, navigate) {
    try {
      const res = await axios.post(`${API}/account/restore-password/`, email);
      console.log(res);
      navigate("/recovery/email/password");
    } catch (err) {
      console.log(err);
    }
  }

  async function passwordRecovery(passwordRecoveryObj, navigate) {
    try {
      const res = await axios.post(
        `${API}/account/set-restored-password/`,
        passwordRecoveryObj
      );
      console.log(res);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  }

  function snackbar() {
    var x = document.getElementById("snackbar");
    x.className = "show";
    setTimeout(function () {
      x.className = x.className.replace("show", "");
    }, 3000);
  }

  function snackbar_error() {
    var x = document.getElementById("snackbar_error");
    x.className = "show";
    setTimeout(function () {
      x.className = x.className.replace("show", "");
    }, 3000);
  }

  async function handleLogin(
    formData,
    logInpValue,
    passwordInpValue,
    navigate
  ) {
    setLoading(true);
    setPass(passwordInpValue);
    try {
      const res = await axios.post(`${API}/accounts/login/`, formData, config);
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("email", logInpValue);
      setCurrentUser(logInpValue);
      setUser(res.data);
      snackbar();
      setTimeout(() => {
        navigate("/");
      }, 1000);
    } catch (err) {
      console.log(err);
      snackbar_error();
      setError([err.response.data.detail]);
    } finally {
      setLoading(false);
    }
  }

  async function checkAuth() {
    console.log("Check Auth Worked!");
    setLoading(true);
    try {
      const tokens = JSON.parse(localStorage.getItem("tokens"));
      const Authorization = `Bearer ${tokens.access}`;
      const config = {
        headers: {
          Authorization,
        },
      };
      const res = await axios.post(
        `${API}/account/token/refresh/`,
        { refresh: tokens.refresh },
        config
      );
      localStorage.setItem(
        "tokens",
        JSON.stringify({
          access: res.data.access,
          refresh: tokens.refresh,
        })
      );
      const email = localStorage.getItem("email");
      setCurrentUser(email);
      console.log(res);
    } catch (err) {
      console.log(err);
      handleLogout();
    } finally {
      setLoading(false);
    }
  }

  function handleLogout() {
    localStorage.removeItem("tokens");
    localStorage.removeItem("email");
    setCurrentUser(false);
    navigate("/");
  }

  // async function myBook() {
  //   try {
  //     const res = await axios(`${API}/bookmarks`, config);
  //     setBook(res.data);
  //     console.log(book);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }

  return (
    <authContext.Provider
      value={{
        currentUser,
        error,
        user,
        pass,
        

        handleRegister,
        setError,
        handleLogin,
        checkAuth,
        handleLogout,
        emailRecovery,
        passwordRecovery,
        getOneUser,
        setUser,
        handleEdit,
        
      }}
    >
      {children}
    </authContext.Provider>
  );
};

export default AuthContextProvider;
