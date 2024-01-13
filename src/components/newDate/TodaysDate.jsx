export const TodaysDate = () => {
  const todaysDate = new Date().toLocaleDateString();
  return <h4>{todaysDate}</h4>;
};
