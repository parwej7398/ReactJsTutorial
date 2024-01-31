import React, { createContext, useContext } from "react";

const UserContext = createContext();
const NameContext = createContext();

const UseContextDemo = () => {
  const user = "Parwez";
  const name = "Amir";
  return (
    <div className="flex flex-col gap-3">
      <p>Hello {user} : Main Parent Component</p>
      <UserContext.Provider value={user}>
        <NameContext.Provider value={name}>
          <Component1 value1={user} value2={name} />
        </NameContext.Provider>
      </UserContext.Provider>
    </div>
  );
};

const Component1 = ({ value1, value2 }) => {
  return (
    <div className="border-2 border-red-500 hover:border-blue-500 p-2">
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

  return (
    <div className="border-2 border-red-500 p-2">
      <p>Component 5</p>
      <p>{user}</p>
      <p>{name}</p>

    </div>
  );
};

export default UseContextDemo;






{/* <UserContext.Consumer>
        {(user) => (
          <NameContext.Consumer>
            {(data) => (
              <>
                <p>User from Component 5: {user}</p>
                <p>Name from Component 5: {data}</p>
              </>
            )}
          </NameContext.Consumer>
        )}
      </UserContext.Consumer> */}