import React from "react";

const PropsDrilling = () => {
  const user = "Parwez";
  return (
    <div className="flex flex-col gap-3">
      <p>Hello {user} : Main Parent Component</p>
      <Component1 user={user} />
    </div>
  );
};

const Component1 = ({ user }) => {

  return (
    <div className="border-2 border-red-500 hover:border-blue-500 p-2">
      {/* <p> Hello from Component 1: {user}</p> */}
      <p className="hover:text-blue-500">Component 1</p>
      <Component2 user={user} />
    </div>
  );
};

const Component2 = ({ user }) => {
  return (
    <div className="border-2 border-red-500 p-2">
      <p>Component 2</p>
      <Component3 user={user} />
    </div>
  );
};
const Component3 = ({ user }) => {
  return (
    <div className="border-2 border-red-500 p-2">
      <p>Component 3</p>
      <Component4 user={user} />
    </div>
  );
};
const Component4 = ({ user }) => {
  console.log(user);
  return (
    <div className="border-2 border-red-500 p-2">
      <p>Component 4</p>
      <Component5 user={user} />
    </div>
  );
};
const Component5 = ({ user }) => {
  console.log(user);
  return (
    <div className="border-2 border-red-500 p-2">
      <p>Component 5</p>
      <p>hello from Component 5: {user}</p>
    </div>
  );
};

export default PropsDrilling;
