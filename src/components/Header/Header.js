import React, { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Hidden from '@material-ui/core/Hidden';
import Drawer from '@material-ui/core/Drawer';
import Menu from '@material-ui/icons/Menu';
import Close from '@material-ui/icons/Close';
import WbSunny from '@material-ui/icons/WbSunny';
import NightsStay from '@material-ui/icons/NightsStay';
import { getNetworkBuyUrl } from '../../features/helpers/getNetworkData';
import { Dialog, withStyles } from '@material-ui/core';
import CustomButton from '../../components/CustomButtons/Button';
import styles from './styles';

const useStyles = makeStyles(styles);

const StyledDialog = withStyles(theme => ({
  paper: {
    margin: '16px',
    backgroundColor: theme.palette.background.primary,
  },
  paperScrollPaper: {
    maxHeight: 'calc(100% - 32px)',
  },
}))(Dialog);

const Header = ({ links, isNightMode, setNightMode }) => {
  const { chain } = useParams();

  const [mobileOpen, setMobileOpen] = React.useState(false);
  const classes = useStyles();
  const { t } = useTranslation();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <AppBar className={`${classes.appBar} ${classes.dark}`} position="relative">
      <Toolbar className={classes.container}>
        <Link to={`/${chain}`}>
          <Button className={classes.title}>
            <Hidden xsDown>
              <img
                alt="MOCHI"
                src={require(`images/Mochi-logo.svg`)}
                href="https://mochifarm.xyz"
                height={'40px'}
                className={classes.logo}
              />
              mochifarm.xyz
            </Hidden>
            <Hidden smUp>
              <img
                alt="MOCHI"
                src={require(`images/Mochi-logo.svg`)}
                href="https://mochifarm.xyz"
                height={'35px'}
                className={classes.logo}
              />
            </Hidden>
          </Button>
        </Link>

        <div className={classes.middleNav}>
          <Hidden smDown>
            <a
              href="https://oolongswap.com/#/swap"
              target="_blank"
              rel="noopener noreferrer"
              className={classes.link}
            >
              <i className={`fas fa-exchange-alt ${classes.linkIcon}`} />

              <span>swap</span>
            </a>
            <a
              href="https://dashboard.mochifarm.xyz"
              target="_blank"
              rel="noopener noreferrer"
              className={classes.link}
            >
              <i className={`fas fa-chart-bar jss27 ${classes.linkIcon}`} />

              <span>stats</span>
            </a>
            <a
              href="https://docs.mochifarm.xyz"
              target="_blank"
              rel="noopener noreferrer"
              className={classes.link}
            >
              <i className={`fas fa-book jss274 ${classes.linkIcon}`} />

              <span>docs</span>
            </a>
            <a
              href="https://discord.gg/"
              target="_blank"
              rel="noopener noreferrer"
              className={classes.link}
            >
              <i className={`fab fa-discord ${classes.linkIcon}`} />

              <span>discord</span>
            </a>
            <a
              href="https://twitter.com/mochifarmxyz"
              target="_blank"
              rel="noopener noreferrer"
              className={classes.link}
            >
              <i className={`fab fa-twitter ${classes.linkIcon}`} />

              <span>twitter</span>
            </a>
            <a
              href="https://synapseprotocol.com/"
              target="_blank"
              rel="noopener noreferrer"
              className={classes.link}
            >
              <i className={`fas fa-link ${classes.linkIcon}`} />

              <span>bridge</span>
            </a>
          </Hidden>
        </div>

        <Hidden smDown implementation="css">
          <div className={classes.collapse}>{links}</div>
        </Hidden>
        <Hidden mdUp>
          <IconButton
            className={classes.iconButton}
            aria-label="open drawer"
            onClick={handleDrawerToggle}
          >
            <Menu />
          </IconButton>
        </Hidden>
      </Toolbar>

      <Hidden mdUp implementation="js">
        <Drawer
          variant="temporary"
          anchor={'right'}
          open={mobileOpen}
          classes={{
            paper: classes.drawerPaper,
          }}
          onClose={handleDrawerToggle}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerToggle}
            className={classes.closeButtonDrawer}
          >
            <Close />
          </IconButton>
          <div className={classes.appResponsive}>{links}</div>
          <div style={{ textAlign: 'center' }}>
            <a
              href="https://oolongswap.com/#/swap"
              target="_blank"
              rel="noopener noreferrer"
              className={classes.link}
            >
              {/* <i className={`fab fa-discord ${classes.linkIcon}`} /> */}
              <span>swap</span>
            </a>
            <a
              href="https://dashboard.mochifarm.xyz"
              target="_blank"
              rel="noopener noreferrer"
              className={classes.link}
            >
              {/* <i className={`fab fa-discord ${classes.linkIcon}`} /> */}
              <span>stats</span>
            </a>
            <a
              href="https://docs.mochifarm.xyz"
              target="_blank"
              rel="noopener noreferrer"
              className={classes.link}
            >
              {/* <i className={`fab fa-discord ${classes.linkIcon}`} /> */}
              <span>docs</span>
            </a>
            <a
              href="https://discord.gg/"
              target="_blank"
              rel="noopener noreferrer"
              className={classes.link}
            >
              {/* <i className={`fab fa-discord ${classes.linkIcon}`} /> */}
              <span>discord</span>
            </a>
            <a
              href="https://twitter.com/mochifarmxyz"
              target="_blank"
              rel="noopener noreferrer"
              className={classes.link}
            >
              {/* <i className={`fab fa-discord ${classes.linkIcon}`} /> */}
              <span>twitter</span>
            </a>
            <a
              href="https://synapseprotocol.com/"
              target="_blank"
              rel="noopener noreferrer"
              className={classes.link}
            >
              {/* <i className={`fab fa-discord ${classes.linkIcon}`} /> */}
              <span>bridge</span>
            </a>
            {
              <IconButton onClick={setNightMode} className={classes.icon}>
                {isNightMode ? <WbSunny /> : <NightsStay />}
              </IconButton>
            }
          </div>
        </Drawer>
      </Hidden>
    </AppBar>
  );
};

const renderLink = (name, label, icon, classes) => {
  return (
    <a
      href={getLinkUrl(name)}
      target="_blank"
      rel="noopener noreferrer"
      className={classes.link}
      style={{ marginLeft: '5px', marginRight: '5px' }}
    >
      <i className={`fas fa-${icon} ${classes.icon}`} />
      <span>{label}</span>
    </a>
  );
};

const LinkSidebar = ({ name, label, icon, classes }) => (
  <div style={{ width: '100%', paddingTop: '10px' }}>{renderLink(name, label, icon, classes)}</div>
);

const getLinkUrl = name => {
  return name === 'buy' ? getNetworkBuyUrl() : `https://${name}.mochifarm.xyz`;
};

export default Header;
