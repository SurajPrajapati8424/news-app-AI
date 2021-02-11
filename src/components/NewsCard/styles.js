import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  media: {
    height: 250,
    border: '3px solid #3e1f47',
  },
  border: {
    border: 'solid',
  },
  fullHeightCard: {
    height: '100%',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderBottom: '5px solid #0353a4',
    backgroundColor: '#f8f9fa',
    opacity: '1.0',
  },

  activeCard: {
    borderBottom: '10px solid #22289a',
  },
  grid: {
    display: 'flex',
    
  },
  details: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '10px',
    backgroundColor: '#272640',
    // opacity: '0.5',
  },
  title: {
    padding: '0 10px',
  },
  cardActions: {
    padding: '0 16px 8px 16px',
    display: 'flex',
    justifyContent: 'space-between',
  },
});