import React, { useState, useEffect } from 'react';

const Controls = (props) => {
    const [filter, setFilter] = useState("");
    const [sort, setSort] = useState(false);

    useEffect(() => {
        props.apply && props.apply(sort, filter);
    }, [sort, filter]);

    function handleSortChanged(e) {
        setSort(e.target.checked);
    }

    function handleFilterChanged(e) {
        setFilter(e.target.value);
    }

    function handleReset() {
        setFilter("");
        setSort(false);
    }

    return (
        <>
        <input type='checkbox' checked={sort} onChange={handleSortChanged} />
        <input type='text' value={filter} onChange={handleFilterChanged} />
        <input type='button' value='reset' onClick={handleReset} />
        </>
    );
}

export default Controls;
