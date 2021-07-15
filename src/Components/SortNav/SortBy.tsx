import React, {useState} from "react";
import {SortByType} from "./types";
import {SortArrow} from "../Sprites";

function SortBy({items, activeSortBy, onClickSortBy}: SortByType) {

    const [visibleNav, setVisible] = useState<boolean>(false)
    const handleVisible = () => {
        setVisible(!visibleNav)
    }

    return (
        <>
            <div className="sort__label">
                <SortArrow className={visibleNav ? 'sort__arrow rotated' : 'sort__arrow'}/>
                <b>Сортировать по:</b>
                <span onClick={handleVisible}>{activeSortBy}</span>

                {visibleNav &&
                <div className="sort__popup">
                    <ul>
                        {items.map((item, index) => <li onClick={() => {
                            onClickSortBy(item)
                            handleVisible()

                        }} className={activeSortBy === item ? 'active' : ''} key={`${item}_${index}`}>{item}</li>)}

                    </ul>
                </div>
                }
            </div>
        </>
    );
}

export default SortBy