import React from "react";

interface Props {
  color?: string;
}

const Separator: React.FC<Props> = ({ color }) => {
  return (
    <div>
      <hr style={{ borderColor: color, borderWidth: 1.1 }} />
    </div>
  );
};

export default Separator;
