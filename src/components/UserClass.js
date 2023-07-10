import React from "react";
import userContext from "../utills/userContext";

class UserClass extends React.Component {
  constructor(props) {
    console.log("child constructor");
    super(props);
    this.state = {
      count: 0,
      count2: 1,
    };
  }

  componentDidMount() {
    console.log("child componentDidMount");
  }

  render() {
    console.log("child render");

    const { name, address, phone } = this.props;
    const { count } = this.state;
    return (
      <>
        <userContext.Consumer>
          {(value) => (
            <div className="flex justify-evenly bg-orange-100 m-auto p-4 w-3/5 rounded-md">
              <div className="flex">
                <h1 className="font-bold bg-red-200 py-2 px-4 rounded-md mr-2">
                  {count}
                </h1>
                <button
                  className="px-4 py-2 bg-orange-400 rounded-md hover:cursor-pointer"
                  onClick={() => {
                    this.setState({ count: (this.state.count += 1) });
                  }}
                >
                  Increment
                </button>
              </div>

              <div>
                <h1>{value.user.name}</h1>
                <h2>{value.user.email}</h2>
              </div>
            </div>
          )}
        </userContext.Consumer>
        ;
      </>
    );
  }
}

export default UserClass;
