import React from "react";

class LikeB extends React.Component {
  render() {
    return (
      <div>
        <button
          className="btn"
          onClick={() => {
            console.log("hello");
            this.props.onClick(this.props.movie);
          }}
        >
          {this.props.status === false ? (
            <i className="fa fa-heart-o"></i>
          ) : (
            <i className="fa fa-heart"></i>
          )}
        </button>
      </div>
    );
  }
}

export default LikeB;

// mosh;
// import React from "react";

// const Like = (props) => {
//   // let classes = "fa-heart fa";
//   // if (!props.liked) {
//   //   classes += "r";
//   // } else {
//   //   classes += "s";
//   // }
//   const iconUnchecked = "fa fa-heart-o";
//   const iconChecked = "fa fa-heart";
//   let iconClass = props.status ? iconChecked : iconUnchecked;
//   return (
//     <div>
//       <button
//         id={`like${props.movie._id}`}
//         onClick={props.onClick}
//         className="btn"
//       >
//         <i className={iconClass} />
//         {/* <p>{iconClass}</p> */}
//       </button>
//     </div>
//   );
// };

// export default Like;

// import React from "react";
// class Like extends React.Component {
//   render() {
//     const iconUnchecked = "fa fa-heart-o";
//     const iconChecked = "fa fa-heart";
//     let iconClass = this.props.status ? iconChecked : iconUnchecked;
//     return (
//       <div>
//         <button
//           id={`like${this.props.movie._id}`}
//           onClick={this.props.onClick}
//           className="btn"
//         >
//           <i className={iconClass} />
//         </button>
//       </div>
//     );
//   }
// }

// export default Like;

//working
// import React from "react";

// const Like = ({ status, onClick }) => {
//   console.log(status);
//   const iconName = "fa fa-heart";
//   const liked = status ? iconName : `${iconName}-o`;
//   return (
//     <i
//       style={{ cursor: "pointer" }}
//       onClick={onClick}
//       className={liked}
//       aria-hidden="true"
//     />
//   );
// };

// export default Like;
