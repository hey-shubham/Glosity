import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  Divider,
  makeStyles,
  Box,
} from "@material-ui/core";

import { PricipalOfficeCard, ExamDeptCard, StudActivityCard } from "./CardMini";

import { useState } from "react";
import Calender from "react-calendar";
import "react-calendar/dist/Calendar.css";

const useStyles = makeStyles({
  card: {
    margin: 0,
    marginTop: 20,
    borderRadius: 8,
  },
  calender: {
    borderRadius: 8,
    borderStyle: "none",
  },
});
const NoticeCard = () => {
  const styles = useStyles();
  return (
    <Card className={styles.card}>
      <CardHeader
        title={<Typography variant="h6">Notices</Typography>}
        style={{ marginBottom: -25 }}
      />
      <CardContent style={{ paddingTop: 0, paddingBottom: 10 }}>
        <div style={{ display: "flex" }}>
          <PricipalOfficeCard />
          <ExamDeptCard />
        </div>
        <Divider style={{ height: 1.5 }} />
        <div style={{ display: "flex" }}>
          <PricipalOfficeCard />
          <StudActivityCard />
        </div>
        <Divider style={{ height: 2 }} />

        <Typography
          variant="body2"
          color="secondary"
          align="center"
          style={{ marginTop: 8 }}
        >
          See All Notices
        </Typography>
      </CardContent>
    </Card>
  );
};

const CalendarCard = () => {
  const styles = useStyles();
  const [day, setDay] = useState(new Date());
  const dateHandler = (date) => {
    setDay(date);
  };
  return (
    <Card className={styles.card}>
      <Calender
        onChange={dateHandler}
        value={day}
        className={styles.calender}
      />
    </Card>
  );
};

const EventsCard = () => {
  const styles = useState();
  return (
    <Card className={styles.card}>
      <CardHeader
        subheader={<Typography variant="h6">Important Events</Typography>}
        style={{ marginBottom: -20 }}
      />

      <CardContent>
        <Box
          sx={{
            width: "22%",
            borderRadius: 8,
            marginRight: 16,
          }}
          component="img"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa6SZazwAWxnmcgOXkCQFvzGIZe17nKrhYLA&usqp=CAU"
        />
        <Box
          sx={{
            width: "22%",
            borderRadius: 8,
            marginRight: 16,
        }}
        component="img"
        src="https://media.gettyimages.com/photos/high-school-student-running-on-the-ground-picture-id1337433533"
        />
        <Box
          sx={{
              width: "22%",
              borderRadius: 8,
              marginRight: 16,
          }}
          component="img"
          src="https://www.chinadaily.com.cn/business/img/attachement/jpg/site1/20150116/0023ae82ca0f16229c4612.jpg"
        />
        <Box
          sx={{
            width: "22%",
            borderRadius: 8,
          }}
          component="img"
          src="https://images.pexels.com/photos/2156/sky-earth-space-working.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
      </CardContent>
    </Card>
  );
};

export { NoticeCard, CalendarCard, EventsCard };
