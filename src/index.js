import React from 'react';
import ReactDom from 'react-dom';

/* Hands-On Project 1 -- JSX & Stateless Components*/

// class NewConcepts extends React.Component {
// render () {
//   return (
//     <div>
//       <h1>Tips for breaking down a new concept</h1>
//         <div>
//           <ul>
//             <li>{this.props.concepts1}</li>
//           <ul>
//             <li>{this.props.concepts2}</li>
//             <li>{this.props.concepts3}</li>
//           </ul>
//           </ul>
//           <ul>
//             <li>{this.props.concepts4}</li>
//           <ul>
//             <li>{this.props.concepts5}</li>
//             <li>{this.props.concepts6}</li>
//           </ul>
//         </ul>
//       </div>
//     </div>
//     )
//   }
// }

// ReactDom.render(
//     <NewConcepts    concepts1 = "Many concepts can't be tackled all at once" 
//                     concepts2 = "Work with the parts you can understand" 
//                     concepts3 = "Take breaks to stay fresh" 
//                     concepts4 = "Develop a plan to learn the parts you don't know"
//                     concepts5 = "Start with the parts that you know" 
//                     concepts6 = "Build new concepts on top" />, 
//         document.getElementById('root'));
  

/* Hands-On Project 2 (Optional) -- JSX & Stateless Components*/


let key = 0;
const libraries = [
  {
    title: 'React',
    description: 'A JavaScript library for building user interfaces'
  },
  {
    title: 'Redux',
    description: 'A predictable state container for JavaScript apps'
  },
  {
    title: 'Reselect',
    description: 'A simple selector library for Redux'
  }
];
const makeDescription = libraries => (
    <div key={key++}>
    <span>{libraries.title}: {libraries.description}</span>
    </div>

);

const output = libraries.map(makeDescription);

ReactDom.render(
  <div>{output}</div>,
    document.getElementById('root'));



    /* Hands-On Project 3 (Optional) -- JSX & Stateless Components*/
// const header = makeHeader({ id: 'title', text: "Major General's Song" });
// const author = makeBody({ author: 'Gilbert and Sullivan', year: 1879 });
// const majorGeneral = makeSong(header, lyrics);
    
// ReactDom.render(output, document.getElementById('root'));    



