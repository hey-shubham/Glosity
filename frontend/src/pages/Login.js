import { useState } from "react";
import { Typography, TextField, makeStyles, Button } from "@material-ui/core";
const useStyles = makeStyles({
  form: {
    position: "relative",
    width: "40%",
    margin: "auto",
    // backgroundColor: "pink",
  },
  field: {
    margin: "20px 10%",
    width: "80%",
  },
  button: {
    position: "absolute",
    right: "10%",
    bottom: 0,
  },
  text: {
    marginTop: 15,
  },
});
const Login = () => {
  const styles = useStyles();

  const [check, setCheck] = useState({
    echeck: false,
    pcheck: false,
  });
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const submitHandler = (event) => {
    event.preventDefault(); // default action of form on submit is refresh the page.
    const { email, password } = values;
    if (
      !email.includes("@") ||
      email.trim().length === 0 ||
      !email.includes(".")
    ) {
      setCheck((check) => {
        return { ...check, echeck: true };
      });
    } else {
      setCheck((check) => {
        // latest/updates state mile.
        return { ...check, echeck: false };
      });
    }
    if (password.trim().length < 6) {
      setCheck((check) => {
        return { ...check, pcheck: true };
      });
    } else {
      setCheck((check) => {
        return { ...check, pcheck: false };
      });
    }
  };
  const { echeck, pcheck } = check;
  return (
    <>
      <Typography align="center" variant="h3" color="textSecondary">
        Log In
      </Typography>
      <form
        action="log-in"
        method="POST"
        className={styles.form}
        onSubmit={submitHandler}
      >
        <TextField
          className={styles.field}
          variant="outlined"
          label="email"
          required
          onChange={(event) =>
            setValues({ ...values, email: event.target.value })
          }
          error={echeck} // take boolean if false outline red
        />
        <TextField
          className={styles.field}
          variant="outlined"
          label="password"
          required
          onChange={(event) =>
            setValues({ ...values, password: event.target.value })
          }
          error={pcheck}
        />
        <Typography align="center" variant="h6" color="primary" className={styles.text}>
          Create an account?
        </Typography>
        <Button
          type="submit"
          variant="contained"
          color="secondary"
          className={styles.button}
        >
          Log In
        </Button>
      </form>
      {(echeck || pcheck) && (
        <Typography align="center" variant="h6" color="secondary">
          Invalid! email/password
        </Typography>
      )}
    </>
  );
};

export default Login;
