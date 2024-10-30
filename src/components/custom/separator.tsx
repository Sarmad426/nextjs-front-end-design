import React from "react";

interface Props {
  color?: string;
}

const Separator: React.FC<Props> = ({ color }) => {
  return (
    <div>
      <hr style={{ borderColor: color }} />
    </div>
  );
};

export default Separator;
