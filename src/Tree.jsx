import Eldest from "./Eldest";

const Tree = (props) => {
  return (
    <div>
      {props.name}
      <Eldest name='Azathoth' />
    </div>
  );
}

export default Tree;