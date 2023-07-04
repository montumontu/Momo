export const restList = [
    {
        type: "carousel",
        cards: [
            {offerName:"50% off"
            },
            { offerName:"No Delivery charges"   
            }
        ]
    },
    {
        type:"rest",
        data:[
            {rname:"Burger King",
             image:"C:\Users\CC\Desktop\project\Momo\image\burgerking.png",
             cusines: [ "Burger", "American"],
             rating: "4.2"
            },
            {rname:"KFC",
             image:"C:\Users\CC\Desktop\project\Momo\image\KFC_logo.jpg",
             cusines: [ "Burger", "American"],
             rating: "4"
            },
            {rname:"Dominos",
             image:"C:\Users\CC\Desktop\project\Momo\image\dominos.png",
             cusines: [ "Burger", "American"],
             rating: "4.8"
            },
            {rname:"Pizza Hut",
             image:"C:\Users\CC\Desktop\project\Momo\image\pizzahut.png",
             cusines: [ "Burger", "American"],
             rating: "4.5"
            },
        ]
    }
]

export const RestCard = ({
    rname,image,cusines,rating}) => {
  return(
    <div className="card">
        <img src= {image} />
        <h2> {rname} </h2>
        <h3> {cusines} </h3>
        <h4> {rating} </h4>
    </div>
  );
};