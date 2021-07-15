import React, {useState} from "react";
import {SortCategoryType} from "./types";
import {SortArrow} from "../Sprites";

function SortCategory({items, activeCategory, onClickCategory}: SortCategoryType) {

    const [visibleNav, setVisible] = useState<boolean>(false)
    const handleVisible = () => {
        setVisible(!visibleNav)
    }


    return (
        <>
            <div className="sort__label">
                <SortArrow className={visibleNav ? 'sort__arrow rotated' : 'sort__arrow'}/>
                <b>Категория:</b>
                <span onClick={handleVisible}>{activeCategory}</span>

                {visibleNav &&
                <div className="sort__popup">
                    <ul>
                        {items.map((item, index) => <li onClick={() => {
                            onClickCategory(item)
                            handleVisible()

                        }} className={activeCategory === item ? 'active' : ''} key={`${item}_${index}`}>{item}</li>)}

                    </ul>
                </div>
                }
            </div>
        </>
    );
}

export default SortCategory