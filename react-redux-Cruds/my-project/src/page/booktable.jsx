import React from 'react';

function BooksTable({ data }) {
  return (
    <div>
     <div className="">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        {/* <th>name</th>
        <th>title</th> */}
       
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr className="bg-base-200">
        <th>1</th>
        <td>{data.name}</td>
        <td>{data.title}</td>
      
      </tr>
  
  
    </tbody>
  </table>
</div>
    </div>
  );
}

export default BooksTable;
