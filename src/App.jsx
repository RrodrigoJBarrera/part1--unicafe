import { useState } from 'react';

const Button = ({ text, handleClick }) => {
  return <button onClick={handleClick}>{text}</button>;
};

const StatisticLine = ({ text, value }) => {
  return (
    <p>
      {text} {value}
    </p>
  );
};
const Statistics = ({ good, neutral, bad, total, average, positive }) => {
  if (total === 0) {
    return <p>No feedback given</p>;
  } else
    return (
      <>
        <h2>statistics</h2>
        <StatisticLine text={'good'} value={good}></StatisticLine>
        <StatisticLine text={'neutral'} value={neutral}></StatisticLine>
        <StatisticLine text={'bad'} value={bad}></StatisticLine>
        <StatisticLine text={'total'} value={total}></StatisticLine>
        <StatisticLine text={'average'} value={average}></StatisticLine>
        <StatisticLine text={'positive'} value={`${positive}%`}></StatisticLine>
      </>
    );
};

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const total = good + bad + neutral;
  const average = (good - bad) / total;
  const positive = (100 * good) / total;

  const handleClickGood = () => {
    setGood(good + 1);
  };
  const handleClickNeutral = () => {
    setNeutral(neutral + 1);
  };
  const handleClickBad = () => {
    setBad(bad + 1);
  };

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={handleClickGood} text={'good'}></Button>
      <Button handleClick={handleClickNeutral} text={'neutral'}></Button>
      <Button handleClick={handleClickBad} text={'bad'}></Button>
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        total={total}
        average={average}
        positive={positive}
      ></Statistics>
    </div>
  );
};

export default App;
