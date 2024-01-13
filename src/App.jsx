import "./App.css";
import { CustomButton } from "./components/customButton/CustomButton";
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
    console.log(day);
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
    console.log(month);
    return month;
  };

  const showSeason = () => {
    let month = showMonth();
    let season = "";

    switch (month) {
      case "December":
      case "January":
      case "February":
        season = "Winter";
        break;
      case "March":
      case "April":
      case "May":
        season = "Spring";
        break;
      case "June":
      case "July":
      case "August":
        season = "Summer";
        break;
      case "September":
      case "October":
      case "November":
        season = "Fall";
        break;

      default:
        break;
    }
    console.log(season);
    return season;
  };

  return (
    <div className="App">
      <div>
        <CustomButton onClickHandler={showDay}>Show Day</CustomButton>
        <CustomButton onClickHandler={showMonth}>Show Month</CustomButton>
        <CustomButton onClickHandler={showSeason}>Show Season</CustomButton>
      </div>
      <TodaysDate />
      <ImageCard />
    </div>
  );
}

export default App;
