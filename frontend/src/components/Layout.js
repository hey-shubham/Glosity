import { Grid, makeStyles } from "@material-ui/core";

import { CalendarCard, EventsCard, NoticeCard } from "./Card";
const useStyles = makeStyles({
  container: {
    backgroundColor: "#f1f2f6",
    width: "75%",
  },
});
const Layout = () => {
  const styles = useStyles();
  return (
    <Grid container spacing={3} className={styles.container}>
      <Grid item md={9} xs={12}>
        <NoticeCard />
      </Grid>
      <Grid item md={3} xs={12}>
        <CalendarCard />
      </Grid>
      <Grid item md={12} xs={12}>
        <EventsCard />
      </Grid>
    </Grid>
  );
};

export default Layout;
