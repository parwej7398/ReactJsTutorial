import React, { createContext, useContext } from "react";

const UserContext = createContext();
const NameContext = createContext();

const UseContextDemo = () => {
  const user = "Aditya";
  const name = "Amir";
  return (
    <div className="flex flex-col gap-3">
      <p>Hello {user} : Main Parent Component</p>
      <UserContext.Provider value={user}>
        <NameContext.Provider value={name}>
          <Component1 />
        </NameContext.Provider>
      </UserContext.Provider>
    </div>
  );
};

const Component1 = () => {
  return (
    <div className="border-2 border-red-500 hover:border-blue-500 p-2">
      {/* <p> Hello from Component 1: {user}</p> */}
      <p className="hover:text-blue-500">Component 1</p>
      <Component2 />
    </div>
  );
};

const Component2 = () => {
  return (
    <div className="border-2 border-red-500 p-2">
      <p>Component 2</p>
      <Component3 />
    </div>
  );
};
const Component3 = () => {
  const user = useContext(UserContext);
  return (
    <div className="border-2 border-red-500 p-2">
      <p>Component 3 : {user}</p>
      <Component4 />
    </div>
  );
};
const Component4 = () => {
  return (
    <div className="border-2 border-red-500 p-2">
      <p>Component 4</p>
      <Component5 />
    </div>
  );
};
const Component5 = () => {
  const user = useContext(UserContext);
  const name = useContext(NameContext);
  //   console.log(user);

  return (
    <div className="border-2 border-red-500 p-2">
      <p>Component 5</p>
      {/* provider */}
      <p>{user}</p>
      <p>{name}</p>
      {/* consumer */}
      <UserContext.Consumer>
        {(user) => (
          <NameContext.Consumer>
            {(name) => (
              <>
                <p>User from Component 5: {user}</p>
                <p>Name from Component 5: {name}</p>
              </>
            )}
          </NameContext.Consumer>
        )}
      </UserContext.Consumer>
    </div>
  );
};

export default UseContextDemo;
