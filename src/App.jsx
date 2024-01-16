import "./App.css";
import { CustomButton } from "./components/customButton/CustomButton";
import { OnClickEvents } from "./components/displayEvents/DisplayEvents";
import { ImageCard } from "./components/imageCard/ImageCard";
import { TodaysDate } from "./components/newDate/TodaysDate";

function App() {
  const showDay = () => {
    const index = new Date().getDay();
    let day = "";
    switch (index) {
      case 1:
        day = "Monday";
        break;
      case 2:
        day = "Tuesday";
        break;
      case 3:
        day = "Wednesday";
        break;
      case 4:
        day = "Thursday";
        break;
      case 5:
        day = "Friday";
        break;
      case 6:
        day = "Saturday";
        break;
      case 7:
        day = "Sunday";
        break;
      default:
        break;
    }
    alert(`Hey buddy, it's ${day}`);
    return day;
  };

  const showMonth = () => {
    const index = new Date().getMonth();
    let month = "";

    switch (index) {
      case 0:
        month = "January";
        break;

      case 1:
        month = "February";
        break;
      case 2:
        month = "March";
        break;
      case 3:
        month = "April";
        break;
      case 4:
        month = "May";
        break;
      case 5:
        month = "June";
        break;
      case 6:
        month = "July";
        break;
      case 7:
        month = "August";
        break;
      case 8:
        month = "September";
        break;
      case 9:
        month = "October";
        break;
      case 10:
        month = "November";
        break;
      case 11:
        month = "December";
        break;
      default:
        break;
    }
    alert(`It is ${month}, and ${month} is ${index + 1}st month of the year!`);
    return month;
  };

  const showSeason = () => {
    let month = new Date().getMonth();
    let season = "";

    if (month === 11 || month < 2) {
      season = "Winter";
    } else if (month > 1 || month < 5) {
      season = "Spring";
    } else if (month > 4 || month < 8) {
      season = "Summer";
    } else {
      season = "Fall";
    }
    alert(`It is ${season}, stay warm!`);
    return season;
  };

  return (
    <div className="App">
      <CustomButton onClickHandler={showDay}>Show Day</CustomButton>
      <CustomButton onClickHandler={showMonth}>Show Month</CustomButton>
      <CustomButton onClickHandler={showSeason}>Show Season</CustomButton>
      <TodaysDate />
      <ImageCard />
    </div>
  );
}

export default App;
