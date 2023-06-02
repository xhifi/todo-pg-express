const Card = (props) => {
  return (
    <div className="col shadow mb-3">
      <div
        className={`card border border-3 ${
          props.status ? "border-success" : "border-danger"
        }`}
      >
        <div className="card-body">
          <div className="card-title h4">{props.title}</div>
          <div className="card-text">{props.description}</div>
          <div className="card-footer">
            {new Date(props.dateOfCreation).toString()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
