import React, { useState } from "react";

const ExpandableText = ({ children, maxChars = 100 }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const handleClick = () => {
    setIsExpanded(!isExpanded);
  };
  if(children.length <= maxChars) return <p>{children}</p>
  const text = isExpanded ? children : children.substring(0, maxChars) + "...";
  return (
    <div>
      <p>{text}</p>
      <button onClick={handleClick}>Show {isExpanded ? "less" : "More"}</button>
    </div>
  );
};

export default ExpandableText;
