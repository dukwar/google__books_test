import React from "react";
import SortCategory from "./SortCategory";
import SortBy from "./SortBy";
import {sortBy, sortCategory} from "./Sort.dt";
import {useTypesSelector} from "../../hooks/useTypesSelector.hook";
import {useFiltersActions} from "../../hooks/useActions.hook";

function SortNav() {

    const {setSortBy, setCategories} = useFiltersActions()

    const activeCategory = useTypesSelector(({filters}) => filters.category)
    const activeSortBy = useTypesSelector(({filters}) => filters.sortBy)

    const onClickSortBy = (sortBy:string) => {
        setSortBy(sortBy)
    }

    const onClickCategory = (category:string) => {
        setCategories(category)
    }

    return (
        <>
            <section className="sort">
                    <div className="sort__inner">
                        <div className="sort__items">
                            <SortBy items={sortBy} activeSortBy={activeSortBy} onClickSortBy={onClickSortBy}/>
                            <SortCategory items={sortCategory} activeCategory={activeCategory} onClickCategory={onClickCategory} />
                        </div>
                    </div>
            </section>
        </>
    );
}

export default SortNav