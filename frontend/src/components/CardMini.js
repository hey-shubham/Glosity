import {
  Card,
  CardContent,
  CardHeader,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { blue } from "@material-ui/core/colors";

const useStyles = makeStyles({
  card: {
    width: "50%",
    margin: "10px",
  },
  subheader: {
    marginTop: 4,
    padding: 2,
    // backgroundColor: "yellow",
  },
  dept: {
    marginTop: 4,
    marginLeft: 12,
    padding: 2,
    height: "25%",
    width: "35%",
    backgroundColor: blue[400],
    textAlign: "center",
    borderRadius: 20,
    color: "white",
  },
  content: {
    marginTop: 4,
    padding: 2,
  },
});
const PricipalOfficeCard = () => {
  const styles = useStyles();
  return (
    <Card className={styles.card} elevation={0}>
      <CardHeader
        subheader={
          <Typography>Lorem ipsum dolor sit amet consectetur.</Typography>
        }
        className={styles.subheader}
      />
      <div style={{ display: "flex" }}>
        <CardHeader
          subheader={
            <Typography variant="body2" color="secondary">
              11 April 2022
            </Typography>
          }
          className={styles.subheader}
        />
        <CardHeader
          subheader={<Typography variant="body2">Principal Office</Typography>}
          className={styles.dept}
        />
      </div>
      <CardContent className={styles.content}>
        {
          <Typography variant="body2" color="textSecondary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus, distinctio? Dolore, nostrum. Aliquam nam iste unde ut
            illum, tenetur perspiciatis.
          </Typography>
        }
      </CardContent>
    </Card>
  );
};
const ExamDeptCard = () => {
  const styles = useStyles();
  return (
    <Card className={styles.card} elevation={0}>
      <CardHeader
        subheader={
          <Typography>Lorem ipsum dolor sit amet consectetur.</Typography>
        }
        className={styles.subheader}
      />
      <div style={{ display: "flex" }}>
        <CardHeader
          subheader={
            <Typography variant="body2" color="secondary">
              11 April 2022
            </Typography>
          }
          className={styles.subheader}
        />
        <CardHeader
          subheader={<Typography variant="body2">Exam Dept.</Typography>}
          className={styles.dept}
        />
      </div>
      <CardContent className={styles.content}>
        {
          <Typography variant="body2" color="textSecondary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus, distinctio? Dolore, nostrum. Aliquam nam iste unde ut
            illum, tenetur perspiciatis.
          </Typography>
        }
      </CardContent>
    </Card>
  );
};
const StudActivityCard = () => {
  const styles = useStyles();
  return (
    <Card className={styles.card} elevation={0}>
      <CardHeader
        subheader={
          <Typography>Lorem ipsum dolor sit amet consectetur.</Typography>
        }
        className={styles.subheader}
      />
      <div style={{ display: "flex" }}>
        <CardHeader
          subheader={
            <Typography variant="body2" color="secondary">
              11 April 2022
            </Typography>
          }
          className={styles.subheader}
        />
        <CardHeader
          subheader={<Typography variant="body2">Student Activity</Typography>}
          className={styles.dept}
        />
      </div>
      <CardContent className={styles.content}>
        {
          <Typography variant="body2" color="textSecondary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus, distinctio? Dolore, nostrum. Aliquam nam iste unde ut
            illum, tenetur perspiciatis.
          </Typography>
        }
      </CardContent>
    </Card>
  );
};

export { PricipalOfficeCard, ExamDeptCard, StudActivityCard };
