import Button from '../ui/button';
import classes from './results-title.module.css';

function ResultsTitle(props) {
  const { date } = props;

  const humanReadableDate = new Date(date).toLocaleDateString('pt-BR', {
    month: 'long',
    year: 'numeric',
  });

  return (
    <section className={classes.title}>
      <h1>Eventos em {humanReadableDate}</h1>
      <Button link="/events">Mostrar todos os eventos</Button>
    </section>
  );
}

export default ResultsTitle;
