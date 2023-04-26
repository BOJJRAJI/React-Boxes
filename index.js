const Box = (props) => {
  const { className, text } = props;
  return <button className={className}>{text}</button>;
};

const element = (
  <div className="bg-container">
    <h1 className="heading">Boxes</h1>
    <div className="boxes-container">
      <Box className="small" text="Small" />
      <Box className="medium" text="Medium" />
      <Box className="large" text="Large" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
