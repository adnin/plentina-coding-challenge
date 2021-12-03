const SimpleMessage = (props) => {
  return (
    <h5 className="flex h-screen justify-center flex-col items-center text-gray-400 font-bold">
      {props.message}
    </h5>
  );
};

export default SimpleMessage;
