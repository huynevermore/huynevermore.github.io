// // const ulComponent = React.createElement(
// //   "ul",
// //   { style: {color:"red", fontSize:"30px"} },
// //   React.createElement("li", null, "Javascrispt"),
// //   React.createElement("li", null, "ReactJS")
// // );
// // console.log(ulComponent)
// // function Tittle(props){
// //     return (
// //         <div style={{textAlign:"center"}}>
// //             <h1>TodoMatic</h1>
// //             <h2>What needs to be done</h2>
// //         </div>
// //     )
// // }
// function Repeat(props) {
//     let items = [];
//     for (let i = 0; i < props.numTimes; i++) {
//       items.push(props.children(i));
//     }
//     return <div>{items}</div>;
//   }

//   function ListOfTenThings() {
//     return (
//       <Repeat numTimes={10}>
//         {(index) => <div key={index}>This is item {index} in the list</div>}
//       </Repeat>
//     );
//   }
// const domContainer = document.querySelector("#root");
// const root = ReactDOM.createRoot(domContainer);
// root.render(ListOfTenThings);
// function Car(props) {
//   return (<li> I am a {props.brand}</li>);
// }

// function Garage() {
//   const cars = ["Ford", "BMW", "Audi"];
//   return (
//     <>
//       <h1>Who lives in my garage?</h1>
//       <ul>
//         {cars.map((car) => (
//           <Car brand={car} />
//         ))}
//       </ul>
//     </>
//   );
// }

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Garage />);
