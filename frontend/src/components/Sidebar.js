import {
  Avatar,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  makeStyles,
  Button,
} from "@material-ui/core";
import CheckBoxOutlinedIcon from "@material-ui/icons/CheckBoxOutlined";
import CalendarTodayOutlinedIcon from "@material-ui/icons/CalendarTodayOutlined";
import InsertDriveFileOutlinedIcon from "@material-ui/icons/InsertDriveFileOutlined";
import PermContactCalendarOutlinedIcon from "@material-ui/icons/PermContactCalendarOutlined";
import ReportProblemOutlinedIcon from "@material-ui/icons/ReportProblemOutlined";
import ArrowRightAltOutlinedIcon from "@material-ui/icons/ArrowRightAltOutlined";

const useStyles = makeStyles({
  drawer: {
    width: "15%",
  },
  drawerPaper: {
    width: "15%",
  },
  avatar: {
    height: "10%",
    width: "30%",
    margin: "30px",
    marginLeft: "auto",
  },
  icon_cont: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    // backgroundColor: "red",
    height: "35vh",
    marginLeft: "auto",
    marginRight: "8px",
  },
  icons: {
    fontSize: "30px",
  },
  btn: {
    marginTop: "auto",
    marginLeft: "auto",
    width: "30%",
  },
});

const Sidebar = () => {
  const styles = useStyles();

  const iconsLists = [
    <CheckBoxOutlinedIcon className={styles.icons}/>,
    <CalendarTodayOutlinedIcon className={styles.icons} />,
    <InsertDriveFileOutlinedIcon className={styles.icons} />,
    <PermContactCalendarOutlinedIcon className={styles.icons} />,
    <ReportProblemOutlinedIcon className={styles.icons} />,
  ];
  return (
    <Drawer
      className={styles.drawer}
      variant="permanent"
      anchor="left"
      classes={{ paper: styles.drawerPaper }}
    >
      <Avatar
        src={
          "https://www.pinclipart.com/picdir/middle/51-512254_showing-post-media-for-oxford-college-symbol-trinity.png"
        }
        className={styles.avatar}
      />
      <List>
        <ListItem style={{ display: "flex", flexDirection: "column" }}>
          <ListItemIcon className={styles.icon_cont}>
            {iconsLists.map((icon) => icon)}
          </ListItemIcon>
        </ListItem>
      </List>
      <Button variant="contained" color="secondary" className={styles.btn}>
        <ArrowRightAltOutlinedIcon />
      </Button>
    </Drawer>
  );
};

export default Sidebar;
