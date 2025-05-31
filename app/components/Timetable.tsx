import React from 'react';

// Define types for headers and data
type Header = {
  id: number;
  KEY: keyof Data;  // KEY is a key of Data
  LABEL: string;
};

type Data = {
  ID: number;
  DAY: string;
  MORNING: string;
  COLUMN_1: string;
  COLUMN_2: string;
  COLUMN_3: string;
  COLUMN_4: string;
};

const Timetable = () => {
  // Headers data with KEY being a valid key of the Data type
  const headers: Header[] = [
    { id: 1, KEY: "DAY", LABEL: "Day" },
    { id: 2, KEY: "MORNING", LABEL: "Time" },
    { id: 3, KEY: "COLUMN_1", LABEL: "45 Min" },
    { id: 4, KEY: "COLUMN_2", LABEL: "1 Hour" },
    { id: 5, KEY: "COLUMN_3", LABEL: "Group 45 Min" },
    { id: 6, KEY: "COLUMN_4", LABEL: "Group 1 Hour" },
  ];

  // Data matching the structure defined in the Data type
  const data: Data[] = [
    { ID: 1, DAY: "Monday", MORNING: "09:00 - 17:00", COLUMN_1: "R325.00", COLUMN_2: "R425.00", COLUMN_3: "R200.00", COLUMN_4: "R250.00" },
    { ID: 2, DAY: "Tuesday", MORNING: "09:00 - 17:00", COLUMN_1: "R325.00", COLUMN_2: "R425.00", COLUMN_3: "R200.00", COLUMN_4: "R250.00" },
    { ID: 3, DAY: "Wednesday", MORNING: "09:00 - 17:00", COLUMN_1: "R325.00", COLUMN_2: "R425.00", COLUMN_3: "R200.00", COLUMN_4: "R250.00" },
    { ID: 4, DAY: "Thursday", MORNING: "09:00 - 17:00", COLUMN_1: "R325.00", COLUMN_2: "R425.00", COLUMN_3: "R200.00", COLUMN_4: "R250.00" },
    { ID: 5, DAY: "Friday", MORNING: "09:00 - 17:00", COLUMN_1: "R325.00", COLUMN_2: "R425.00", COLUMN_3: "R200.00", COLUMN_4: "R250.00" },
    { ID: 6, DAY: "Saturday", MORNING: "09:00 - 17:00", COLUMN_1: "R325.00", COLUMN_2: "R425.00", COLUMN_3: "R200.00", COLUMN_4: "R250.00" },
    { ID: 7, DAY: "Sunday", MORNING: "09:00 - 17:00", COLUMN_1: "R325.00", COLUMN_2: "R425.00", COLUMN_3: "R200.00", COLUMN_4: "R250.00" },
  ];

  return (
    <div className="timetable">
      <div>
        <div className="table">Training Sessions</div>
        <table>
          <thead>
            <tr>
              {/* Map through headers and display the labels */}
              {headers.map((header) => (
                <th key={header.id}>
                  <span>{header.LABEL}</span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {/* Map through the data and display each row */}
            {data.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {/* Map through headers to display each column */}
                {headers.map((header) => {
                  return (
                    <td key={header.id}>
                      {/* Access each row value dynamically */}
                      {row[header.KEY]}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Timetable;



