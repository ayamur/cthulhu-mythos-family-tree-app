import Spawn from "./Spawn";

const Elder = (props) => {
  return (
    <div>
      {props.name}
      {props.spawn?.map(spawn =>
        <Spawn name={spawn} />
      )}
    </div>
  );
}

export default Elder;