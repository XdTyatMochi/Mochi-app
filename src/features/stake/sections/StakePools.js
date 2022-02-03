import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Accordion, AccordionDetails, Grid, makeStyles, Typography } from '@material-ui/core';
import Disclaimer from 'components/Disclaimer/Disclaimer';
import styles from './styles/list';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { ToggleButton, ToggleButtonGroup } from '@material-ui/lab';
import { useLaunchpoolUpdates } from '../redux/hooks';
import { launchpools, appNetworkId } from '../../helpers/getNetworkData';
import { StakePoolsPool } from './StakePoolsPool';

const useStyles = makeStyles(styles);

export default function StakePools() {
  const classes = useStyles();
  const { t } = useTranslation();
  const [expanded, setExpanded] = React.useState('faq-1');
  const [showPools, setShowActive] = React.useState('active');
  useLaunchpoolUpdates();

  const handleChange = useCallback(
    panel => (event, newExpanded) => {
      setExpanded(newExpanded ? panel : false);
    },
    [setExpanded]
  );

  const handleShowPools = useCallback(
    (event, value) => {
      setShowActive(value);
    },
    [setShowActive]
  );

  return (
    <Grid container>
      <Grid item xs={12}>
        <div className={classes.launchpool}>
          <img alt="Launchpool" src={require('images/stake/launchpool.png')} />
        </div>
      </Grid>
      <Grid item xs={12} style={{ paddingBottom: '20px', textAlign: 'right' }}>
        <ToggleButtonGroup value={showPools} exclusive onChange={handleShowPools}>
          <ToggleButton value="all">All</ToggleButton>
          <ToggleButton value="active">Live</ToggleButton>
          <ToggleButton value="closed">Finished</ToggleButton>
        </ToggleButtonGroup>
      </Grid>
      <Grid container spacing={4} justify={'center'}>
        {Object.values(launchpools).map(pool => (
          <StakePoolsPool key={pool.id} pool={pool} showPools={showPools} classes={classes} t={t} />
        ))}
      </Grid>
      <Grid container spacing={4} justify={'center'}>
        <Grid className={classes.faq} item xs={12} lg={9}>
          <Accordion square expanded={expanded === 'faq-1'} onChange={handleChange('faq-1')}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography></Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <img
                  alt="launchpool how to"
                  src={require('images/stake/f1.png')}
                  style={{ width: '100%', marginBottom: '20px' }}
                />
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion square expanded={expanded === 'faq-2'} onChange={handleChange('faq-2')}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography></Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography></Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion square expanded={expanded === 'faq-3'} onChange={handleChange('faq-3')}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography></Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography></Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion square expanded={expanded === 'faq-4'} onChange={handleChange('faq-4')}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography></Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography></Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion square expanded={expanded === 'faq-5'} onChange={handleChange('faq-5')}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography></Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography></Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion square expanded={expanded === 'faq-6'} onChange={handleChange('faq-6')}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography></Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography></Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion square expanded={expanded === 'faq-7'} onChange={handleChange('faq-7')}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography></Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography></Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion square expanded={expanded === 'faq-8'} onChange={handleChange('faq-8')}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>
                Why do I have less mooToken than the amount of tokens I deposited?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography></Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion square expanded={expanded === 'faq-9'} onChange={handleChange('faq-9')}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography></Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography></Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion square expanded={expanded === 'faq-10'} onChange={handleChange('faq-10')}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography></Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography></Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion square expanded={expanded === 'faq-11'} onChange={handleChange('faq-11')}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography></Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography></Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion square expanded={expanded === 'faq-12'} onChange={handleChange('faq-12')}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography></Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography></Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion square expanded={expanded === 'faq-13'} onChange={handleChange('faq-13')}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography></Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography></Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion square expanded={expanded === 'faq-14'} onChange={handleChange('faq-14')}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography></Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography></Typography>
            </AccordionDetails>
          </Accordion>
          {appNetworkId === 56 ? (
            <Accordion square expanded={expanded === 'faq-15'} onChange={handleChange('faq-15')}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography></Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography></Typography>
              </AccordionDetails>
            </Accordion>
          ) : (
            ''
          )}
        </Grid>
        <Grid item xs={12}>
          <Disclaimer />
        </Grid>
      </Grid>
    </Grid>
  );
}

StakePools.defaultProps = {
  fromPage: 'page',
};
