// import React from "react";
// import ReactDOM from "react-dom";
// import uuid from "uuid";
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

import Box from '@material-ui/core/Box'

// class AddCard  extends React.Component {
//   state = {
//     items: [{ id: uuid(), text: "" }]
//   };

//   addListItem = () => {
//     const newItem = { id: uuid(), text: "" };
//     this.setState({
//       items: [...this.state.items, newItem]
//     });
//   };

//   onInputChange = e => {
//     const { id, value } = e.target;

//     const newArr = this.state.items.map(item => {
//       if (item.id == id) {
//         return {
//           ...item,
//           text: value
//         };
//       } else {
//         return item;
//       }
//     });

//     this.setState({
//       items: newArr
//     });
//   };

//   createList = () => {
//     const { items } = this.state;
//     return items.map(item => {
//       return (
//         <div>
//           <label>enter name</label>
//           <input
//             id={item.id}
//             onChange={this.onInputChange}
//             type="text"
//             placeholder="what's your name"
//             value={item.text}
//           />
        
//         </div>
//       );
//     });
//   };

//   render() {
//     return (
//       <div>
//         <Box display="flex" flexDirection="row-reverse" p={1} m={1} >
//         <Button variant="contained" color="primary" y={{ m: '2rem' }} onClick={this.addListItem} startIcon={<AddIcon />}>
//             Add
//         </Button>
//     </Box>
//         {this.createList()}
//       </div>
//     );
//   }
// }

// const rootElement = document.getElementById("root");
// ReactDOM.render(<AddCard />, rootElement);




import React, { useRef, useState } from "react";
// import "./style.css";
// import { AddCard } from '@mui/icons-material';

export default function AdddivCard() {
  const parentRef = useRef();

  const [elements, setelements] = useState([]);



  const createNewDiv = () => {
   // parentRef.current.appendChild(document.createElement("div"));

    const newElement = React.createElement('textarea', {key: 'ele'+ new Date().getTime()}, `Hello`,);
    
    setelements(elements => [...elements,newElement]);

  };

  return (
    <div>
  
      <Box display="flex" flexDirection="row-reverse" p={1} m={1} >
               <Button variant="contained" color="primary" y={{ m: '2rem' }} onClick={createNewDiv} ref={parentRef} startIcon={<AddIcon />}>
                   Add
              </Button>
           </Box>
      {
        elements
      }
    
    </div>
  );
}