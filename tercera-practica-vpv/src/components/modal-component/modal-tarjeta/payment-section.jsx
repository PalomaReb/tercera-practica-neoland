import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import CreditCardIcon from "@material-ui/icons/CreditCard";
import eps from "../../../assets/img/eps.png";
import giropay from "../../../assets/img/giropay.png";
import PaymentCard from "./tarjeta";
import "./styles.css";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function PaymentOptions() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="personal-data_bigcontainer">
      <div className={classes.root}>
        <Paper elevation={2} square className={classes.root}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="simple tabs"
            className="myTabs"
            /*indicatorColor="terceary"
          textColor="primary"*/
            centered
            variant="fullWidth"
          >
            <Tab
              icon={<CreditCardIcon />}
              label="Card"
              className="myTab"
              {...a11yProps(0)}
            />
            <Tab
              icon={<img src={eps} alt="EPS Icon" />}
              label="EPS"
              className="myTab"
              {...a11yProps(1)}
            />
            <Tab
              icon={<img src={giropay} alt="Giropay Icon" />}
              label="Giropay"
              className="myTab"
              {...a11yProps(2)}
            />
            <Tab label="..." {...a11yProps(3)} />
          </Tabs>
        </Paper>
        <TabPanel value={value} index={0}>
          <PaymentCard></PaymentCard>
        </TabPanel>
        <TabPanel value={value} index={1}>
          EPS Payment Tab
        </TabPanel>
        <TabPanel value={value} index={2}>
          Giropay Tab
        </TabPanel>
        <TabPanel value={value} index={3}>
          Other Payment methots Tab
        </TabPanel>
      </div>
    </div>
  );
}
