import React, { createRef, useEffect, useState } from 'react';
import "./DataTable.css";
import Pdf from "react-to-pdf";
import Checkbox from './Checkbox';


const ref = createRef();
const DataTable = () => {
    const [dataRow, setDataRow] = useState([])
    const [showCol, setShowCol] = useState({
        col1: true,
        col2: true,
        col3: true,
        col4: true,
        col5: true,
        col6: true,
        col7: true,
        col8: true,
        col9: true,
        col10: true,
        col11: true,
        col12: true,
        col13: true,
        col14: true,
        col15: true,
    })

    const colHandle = (e) => {
        // const prev = { ...showCol }
        // prev[e.target.name] = !e.target.value
        // setShowCol(prev)
    }

    useEffect(() => {
        fetch('https://antiquity-server.vercel.app/tableData')
            .then(res => res.json())
            .then(data => setDataRow(data))
    }, [])

    const printHandle = () => {
        window.print()
    }


    if (dataRow.length === 0) {
        return <h3>Loading...</h3>
    }


    return (
        <div className='full-data-table'>
            <div className="no-print ">
                <Checkbox colHandle={colHandle} showCols={showCol} />
            </div>
            <div ref={ref} className='print'>
                <h1 className='table-heading'>Data Table</h1>
                <table className="table-customized">
                    <thead>
                        <tr className='th clr'>
                            {showCol.col1 && <th>col 1</th>}
                            {showCol.col1 && <th>col 2</th>}
                            {showCol.col1 && <th>col 3</th>}
                            {showCol.col1 && <th>col 4</th>}
                            {showCol.col1 && <th>col 5</th>}
                            {showCol.col1 && <th>col 6</th>}
                            {showCol.col1 && <th>col 7</th>}
                            {showCol.col1 && <th>col 8</th>}
                            {showCol.col1 && <th>col 9</th>}
                            {showCol.col1 && <th>col 10</th>}
                            {showCol.col1 && <th>col 11</th>}
                            {showCol.col1 && <th>col 12</th>}
                            {showCol.col1 && <th>col 13</th>}
                            {showCol.col1 && <th>col 14</th>}
                            {showCol.col1 && <th>col 15</th>}
                        </tr>
                    </thead>

                    <tbody>
                        {
                            dataRow.map(row => <tr className='tr' key={row._id}>
                                {
                                    showCol.col1 && <td>{row.row1}</td>
                                }
                                {
                                    showCol.col1 && <td>{row.row2}</td>
                                }
                                {
                                    showCol.col1 && <td>{row.row3}</td>
                                }
                                {
                                    showCol.col1 && <td>{row.row4}</td>
                                }
                                {
                                    showCol.col1 && <td>{row.row5}</td>
                                }
                                {
                                    showCol.col1 && <td>{row.row6}</td>
                                }
                                {
                                    showCol.col1 && <td>{row.row7}</td>
                                }
                                {
                                    showCol.col1 && <td>{row.row8}</td>
                                }
                                {
                                    showCol.col1 && <td>{row.row9}</td>
                                }
                                {
                                    showCol.col1 && <td>{row.row10}</td>
                                }
                                {
                                    showCol.col1 && <td>{row.row11}</td>
                                }
                                {
                                    showCol.col1 && <td>{row.row12}</td>
                                }
                                {
                                    showCol.col1 && <td>{row.row13}</td>
                                }
                                {
                                    showCol.col1 && <td>{row.row14}</td>
                                }
                                {
                                    showCol.col1 && <td>{row.row15}</td>
                                }
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>

            <div className='action-btn no-print '>
                <Pdf targetRef={ref} filename="dataTable.pdf">
                    {({ toPdf }) => <button onClick={toPdf}>Download</button>}
                </Pdf>
                {/* <button>download</button> */}
                <button onClick={printHandle}>Print</button>
                {/* <button></button> */}
            </div>
        </div >
    );
};

export default DataTable;