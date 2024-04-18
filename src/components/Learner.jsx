import React from 'react';

class Learner extends React.Component {

  lmsCheck() {
      if(this.props.name === "null") {
          return "Uh oh! It seems like we couldn't find your real name!"
      }
      return "";
  }

  render() {
    return (
    // <>
    //   <p>Hi, {this.props.name}!</p>
    //   <p>{this.lmsCheck()}</p>
    // </>
    <p>Hi, {this.props.name}!</p>
  );
  };
};

export default Learner;
