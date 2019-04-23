import React from "react";

const Tabelgenrator = ({tabelHead, tabelRow}) => {
  // let tableHead = ["3", "Player Name", "Main Role"],
  console.log(tabelRow)
  return (
    <table className="table text-light">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Player Name</th>
          <th scope="col">Main Role</th>
        </tr>
      </thead>
      <tbody>
        {tabelRow.map((content, i) => {

          return (
            <tr key={i}>
              <th scope="row">c1</th>
              <td>c2</td>
              <td>c3</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Tabelgenrator;
