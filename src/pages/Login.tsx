import {
  IonButton,
  IonCardContent,
  IonCheckbox,
  IonContent,
  IonIcon,
  IonInput,
  IonPage,
  IonText,
} from "@ionic/react";
import React, { useState } from "react";
import "./Home.css";
import logo from "../Images/logo_login.png";
import GoogleIcon from "@mui/icons-material/Google";
import GitHubIcon from "@mui/icons-material/GitHub";
import { useHistory } from "react-router";
import { Password } from "@mui/icons-material";
export default function Login() {
  const [singin, setSignin] = useState(true);
  const [userdata, setUserData] = useState({
    name: "sunil",
    mobile: "",
    email: "",
    password: "",
  });
  const [logindata, setLogindata] = useState({
    email: "",
    password: "",
  });
  const handlehanges = (e: any) => {
    const { value, name } = e.target;

    setUserData({ ...userdata, [name]: value });
  };

  const handlehanges1 = (e: any) => {
    const { value, name } = e.target;

    setLogindata({ ...userdata, [name]: value });
  };
  const navigate = useHistory();
  const url = "http://localhost:8083";
  const handlesbt = () => {
    fetch(`${url}/login/userSingup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userdata),
    })
      .then((res) => {
        console.log(res);
        setSignin(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handlesbtlogin = () => {
    fetch(`${url}/login/userlogin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userdata),
    })
      .then((res) => {
        console.log(res);
        localStorage.setItem("auth", "userLoggedin");
        navigate.push("/home");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <IonPage>
      <IonContent>
        <IonCardContent className="LoginpageContaner">
          <img src={logo} alt="logo_image" className="img_logo" />
          {singin ? (
            <IonCardContent className="login_items">
              <span>
                {" "}
                <h1>Hi, Wecome Back! 👋</h1>
                <p>Hello again, you’ve been missed!</p>
              </span>
              <label>Email</label>
              <input
                type="text"
                placeholder="Email"
                value={logindata.email}
                name="email"
                onChange={handlehanges1}
              />
              <label>Password</label>
              <input
                type="text"
                placeholder="Password"
                value={logindata.password}
                name="password"
                onChange={handlehanges1}
              />
            </IonCardContent>
          ) : (
            <IonCardContent className="login_items">
              <span>
                {" "}
                <h1>Create an account</h1>
                <p>Hello again, you’ve been missed!</p>
              </span>
              <label>Email</label>
              <input
                type="text"
                placeholder="Email"
                value={userdata.email}
                name="email"
                onChange={handlehanges}
              />
              <label>Phone Number</label>
              <input
                type="number"
                value={userdata.mobile}
                placeholder="+91"
                name="mobile"
                onChange={handlehanges}
              />
              <label>Password</label>
              <input
                type="text"
                value={userdata.password}
                placeholder="Password"
                name="password"
                onChange={handlehanges}
              />
            </IonCardContent>
          )}
          <IonCardContent className="inputcheckboxandforgetbtn">
            <IonCheckbox labelPlacement="end"> Remember me</IonCheckbox>
            <IonText className="iontext">Forget Password</IonText>
          </IonCardContent>
          <IonCardContent className="btn_login">
            <button onClick={singin ? handlesbtlogin : handlesbt}>
              {singin ? "login" : "Sign up"}
            </button>
            <div className="or_line">
              <hr className="hrtag" />
              or
              <hr className="hrtag" />
            </div>
          </IonCardContent>
          <IonCardContent className="social_media">
            <div className="card_1">
              <GoogleIcon /> Google
            </div>

            <div className="card_1">
              <GitHubIcon /> GitHub
            </div>
          </IonCardContent>
          <IonCardContent>
            <p>
              {singin
                ? " Don’t have an account ?"
                : "Already have an account ?"}
              <span
                className="Signpu_and_in_btn"
                onClick={(e) => setSignin(!singin)}
              >
                {singin ? "Sign up" : "Login"}
              </span>
            </p>
          </IonCardContent>
        </IonCardContent>
      </IonContent>
    </IonPage>
  );
}
