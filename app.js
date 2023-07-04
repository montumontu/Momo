import React from "react";
import ReactDOM from "react-dom/client";

const Title = () =>{
    <img className="logo"
         alt="logo"
         src="https://play-lh.googleusercontent.com/A8jF58KO1y2uHPBUaaHbs9zSvPHoS1FrMdrg8jooV9ftDidkOhnKNWacfPhjKae1IA=w240-h480-rw"/>
         
};

const Header = () => {
    return(
        <div className="header">
            <Title />
            <div className="nav-items">
                <ul>
                    <li> Home</li>
                    <li>Log In</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
};


const restList = [
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
             image:"C:\Users\CC\Desktop\project\live\image\burgerking.png",
             cusines: [ "Burger", "American"],
             rating: "4.2"
            },
            {rname:"KFC",
             image:"C:\Users\CC\Desktop\project\live\image\KFC_logo.png",
             cusines: [ "Burger", "American"],
             rating: "4"
            },
            {rname:"Dominos",
             image:"C:\Users\CC\Desktop\project\live\image\dominos.png",
             cusines: [ "Burger", "American"],
             rating: "4.8"
            },
            {rname:"Pizza Hut",
             image:"C:\Users\CC\Desktop\project\live\image\pizzahut.png",
             cusines: [ "Burger", "American"],
             rating: "4.5"
            },
        ]
    }
]

const RestCard = ({rest}) => {
    const{rname,image,cusines,rating}=rest.data;
  return(
    <div className="card">
        <img src= {image} />
        <h2> {rname} </h2>
        <h3> {cusines} </h3>
        <h4> {rating} </h4>
    </div>
  );
};

const Body= () => {
    return(
      <div className="resturant-list">
        <RestCard{...restList[0].data} />
        <RestCard{...restList[1].data} />
        <RestCard{...restList[2].data} />
        <RestCard{...restList[3].data} />
      </div>
    );
};

const Footer = () => {
    return(
        <h2>its footer</h2>
    )

};

const AppLayout = () => {
   return(
      <>
       <Header/>
       <Body />
       <Footer /> 
      </>
   )
};
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout  />) 