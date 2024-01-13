import "./index.style.css";

export const CustomButton = (props) => {
  return (
    <>
      <button className="button" onClick={props.onClickHandler}>
        {props.children}
      </button>
    </>
  );
};
