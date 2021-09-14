import React, { useContext } from "react";
import "./style.css";
import DataBody from "../DataBody";
import DataAreaContext from "../../utils/DataAreaContext";

const DataTable = () => {
  const context = useContext(DataAreaContext);

  console.log(context.developerState.headings[1].order);

  return (
    <div className="datatable mt-5">
      <table
        id="table"
        className="table table-striped table-hover table-condensed"
      >
        <thead>
          <tr>
            {context.developerState.headings.map(({ name, width, order }) => {
              let carrot = "nocarrot";
              if (name !== "Image") {
                carrot = `carrot${order}`;
              }

              return (
                <th
                  className="col"
                  id={name}
                  key={name}
                  style={{ width }}
                  onClick={() => {
                    context.handleSort(name);
                  }}
                >
                  {name}
                  <span className={carrot}></span>
                </th>
              );
            })}
          </tr>
        </thead>
        <DataBody />
      </table>
    </div>
  );
};

export default DataTable;