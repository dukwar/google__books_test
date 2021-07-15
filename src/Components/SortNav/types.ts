export interface SortCategoryType {
    items: string[],
    activeCategory: string,
    onClickCategory: (category:string) => void
}

export interface SortByType {
    items: string[],
    activeSortBy: string,
    onClickSortBy: (sortBy:string) => void
}