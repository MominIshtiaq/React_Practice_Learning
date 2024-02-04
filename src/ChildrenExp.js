const ChildrenExp01 = (props) => {
  let children = props.children;
  return <div>{children}</div>;
};

const ChildrenExp02 = ({ children }) => {
  return <div>{children}</div>;
};

export { ChildrenExp01, ChildrenExp02 };
