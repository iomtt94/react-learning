import React from 'react';
import ReactDOM from 'react-dom';
import Router from './components/Router';
import '../src/index.css';


ReactDOM.render(<Router/>, document.getElementById('root'));












// class NameForm extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {value: ''};
//         this.handleChange = this.handleChange.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
//     }

//     handleChange(event) {
//         this.setState({value: event.target.value.toUpperCase()});
//     }

//     handleSubmit(event) {
//         alert('A name was submitted ' + this.state.value);
//         event.preventDefault();
//     }

//     render() {
//         return(
//             <form onSubmit = {this.handleSubmit}>
//                 <label>
//                     name:
//                     <input type="text" value = {this.state.value}
//                                        onChange = {this.handleChange}/>
//                 </label>
//                 <input type="submit" value="Submit"/>
//             </form>
//         );
//     }
// }


// ReactDOM.render(<NameForm/>, document.getElementById('root'));
// registerServiceWorker();


























// function ListItem(props) {
//     return <li>{props.value}</li>
// }

// function NumberList(props) {
//     const numbers = props.numbers;
//     return (
//         <ul>
//             {numbers.map((number) => 
//                 <ListItem key = {number.toString()} value = {number}/>
//             )}
//         </ul>
//     );
// }


// const numbers = [1,2,3,4,5,6,7,8,9];
// ReactDOM.render(<NumberList numbers = { numbers }/>, document.getElementById('root'));
// registerServiceWorker();































// class Blog extends React.Component {

//     constructor(props) {
//         super(props);
//     }
    
//     sidebar = (
//         <ul>
//             {this.props.posts.map((post) => {
//               <li key = {post.id}>{post.title}</li>  
//             })}
//         </ul>
//     );

//     content = this.props.posts.map((post) =>
//         <div key={post.id}>
//         <h3>{post.title}</h3>
//         <p>{post.content}</p>
//         </div>
//     );

//     render() {
//     return (
//         <div>
//             {this.sidebar}
//             <hr/>
//             {this.content}
//         </div>
//     );
//     }
// }


// const posts = [
//     {id: 1, title: 'Hello Word', content: 'Welcome to learning React!'},
//     {id: 2, title: 'Installation', content: 'You can install React via npm'}
// ];

// ReactDOM.render(<Blog posts = { posts }/>, document.getElementById('root'));
// registerServiceWorker();





























// class NumbersList extends React.Component {
//     numbers = this.props.numbers;
//     listItems = numbers.map((el) => {
//         return (
//             <ListItem key = {el.toString()} value = {el}/>
//         );
//     });

//     render() {
//         return (
//             <ul>{this.listItems}</ul>
//         );
//     }
// }

// class ListItem extends React.Component {
//     render() {
//         return(
//             <li>{this.props.value}</li>
//         );
//     }
// }

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
// ReactDOM.render(<NumbersList numbers = {numbers}/>, document.getElementById('root'));
// registerServiceWorker();

















// function NumberList(props) {
//     const numbers = props.numbers;
//     const listItems = numbers.map((number) =>
//       <li key={number.toString()}>
//         {number}
//       </li>
//     );
//     return (
//       <ul>{listItems}</ul>
//     );
//   }
  
  
//   const numbers = [1, 2, 3, 4, 5];
//   ReactDOM.render(
//     <NumberList numbers={numbers} />,
//     document.getElementById('root')
//   );