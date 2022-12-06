const Item = (props) => {
  return (
    <div>
      <span className="badge bg-secondary m-3">{props.value}</span>
      <button
        className="btn btn-primary m-3"
        onClick={() => props.handleIncreasment(props.id)}
      >
        +
      </button>
      <button
        className="btn btn-primary m-3"
        onClick={() => props.handleDecreasement(props.id)}
      >
        -
      </button>
      <button
        className="btn btn-danger m-3"
        onClick={() => props.removeRow(props.id)}
      >
        x
      </button>
    </div>
  );
};

export default Item;
