export const RestCard = ({
    rname,image,cusines,rating}) => {
    
  return(
    <div className="card">
        <img src= {image} alt="restaurant" />
        <h2> {rname} </h2>
        <h3> {cusines} </h3>
        <h4> {rating} </h4>
    </div>
  );
};