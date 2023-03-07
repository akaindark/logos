import React, { useContext } from "react";
import { CustomContext } from "../../utils/Context";

const Catalog = () => {
  const { count } = useContext(CustomContext);

  return (
    <div>
      <div>{count}</div>
      Catalog
    </div>
  );
};

export default Catalog;
