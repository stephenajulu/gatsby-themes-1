import React from "react";
import { Fab, withStyles } from "@material-ui/core";
import { Link } from "gatsby";

export default function DashboardButton({ href, children }) {
  return (
    <CoolFab
      disableRipple={true}
      variant="extended"
      color="primary"
      aria-label="dashboard"
      component={Link}
      to={href}
    >
      Dashboard
    </CoolFab>
  );
}

const CoolFab = withStyles((theme) => ({
  root: {
    borderRadius: "0px 0px 8px 8px",
  },
}))(Fab);
