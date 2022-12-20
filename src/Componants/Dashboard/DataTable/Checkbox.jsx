import React from 'react';
import "./DataTable.css"

const Checkbox = ({ colHandle, showCols }) => {
    // console.log(showCols);
    return (
        <div className="checkbox">
            <div  >
                <input onChange={(e) => colHandle(e)} checked={showCols.col1 ? true : false} value={showCols.col1} type="checkbox" name="col1" />
                <label htmlFor="check">col1</label>
            </div >
            <div >
                <input onChange={(e) => colHandle(e)} checked={showCols.col2 ? true : false} value={showCols.col2} type="checkbox" name="col2" />
                <label htmlFor="check">col2</label>
            </div>
            <div >
                <input onChange={(e) => colHandle(e)} checked={showCols.col3 ? true : false} value={showCols.col3} type="checkbox" name="col3" />
                <label htmlFor="check">col3</label>
            </div>
            <div >
                <input onChange={(e) => colHandle(e)} checked={showCols.col4 ? true : false} value={showCols.col4} type="checkbox" name="col4" />
                <label htmlFor="check">col4</label>
            </div>
            <div >
                <input onChange={(e) => colHandle(e)} checked={showCols.col5 ? true : false} value={showCols.col5} type="checkbox" name="col5" />
                <label htmlFor="check">col5</label>
            </div>
            <div >
                <input onChange={(e) => colHandle(e)} checked={showCols.col6 ? true : false} value={showCols.col6} type="checkbox" name="col6" />
                <label htmlFor="check">col6</label>
            </div>
            <div >
                <input onChange={() => colHandle()} checked={showCols.col7 ? true : false} value={showCols.col7} type="checkbox" name="col7" />
                <label htmlFor="check">col7</label>
            </div>
            <div >
                <input onChange={(e) => colHandle(e)} checked={showCols.col8 ? true : false} value={showCols.col8} type="checkbox" name="col8" />
                <label htmlFor="check">col8</label>
            </div>
            <div >
                <input onChange={(e) => colHandle(e)} checked={showCols.col9 ? true : false} value={showCols.col9} type="checkbox" name="col9" />
                <label htmlFor="check">col9</label>
            </div>
            <div >
                <input onChange={(e) => colHandle(e)} checked={showCols.col10 ? true : false} value={showCols.col10} type="checkbox" name="col10" />
                <label htmlFor="check">col10</label>
            </div>
            <div >
                <input onChange={(e) => colHandle(e)} checked={showCols.col11 ? true : false} value={showCols.col11} type="checkbox" name="col11" />
                <label htmlFor="check">col11</label>
            </div>
            <div >
                <input onChange={(e) => colHandle(e)} checked={showCols.col12 ? true : false} value={showCols.col12} type="checkbox" name="col12" />
                <label htmlFor="check">col12</label>
            </div>
            <div >
                <input onChange={(e) => colHandle(e)} checked={showCols.col13 ? true : false} value={showCols.col13} type="checkbox" name="col13" />
                <label htmlFor="check">col13</label>
            </div>
            <div >
                <input onChange={(e) => colHandle(e)} checked={showCols.col14 ? true : false} value={showCols.col14} type="checkbox" name="col14" />
                <label htmlFor="check">col14</label>
            </div>
            <div >
                <input onChange={(e) => colHandle(e)} checked={showCols.col15 ? true : false} value={showCols.col15} type="checkbox" name="col15" />
                <label htmlFor="check">col15</label>
            </div>
        </div >
    );
};

export default Checkbox;