import { makeStyles } from "@material-ui/styles";
import Layout from "../components/Layout";
import Sidebar from "../components/Sidebar";

const useStyles = makeStyles({
    root: {
        display: "flex",
    }
})

const Home = () => {
    const styles = useStyles();
    return (
      <div className={styles.root}>
            <Sidebar />
            <Layout/>
      </div>
    );
}
 
export default Home;