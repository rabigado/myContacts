import React from 'react';

const Pagination =({length,itemPerPage,currentPage,handleClick})=>{
    let list=[];
    for(let i=0;i<Math.ceil(length/itemPerPage);i++){
        list.push(i===currentPage?<a key={i} href="#" className="active">{i+1}</a>:<a key={i} href="#" onClick={handleClick.bind(null,i)}>{i+1}</a>);
    }
    return (
        <div className="pagination">
            <a href="#" onClick={handleClick.bind(null,-1)}>&laquo;</a>
            {list}
            <a href="#" onClick={handleClick.bind(null,-2)}>&raquo;</a>
        </div>
    );
};

export default Pagination;