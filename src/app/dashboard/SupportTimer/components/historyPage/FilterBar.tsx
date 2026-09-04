'use client';

import filterBar from '../../styles/historyPage/filterBar.css';

interface FilterBarProps {
    searchQuery: string;
    onSearchChange: (query: string) => void;
    filterTag: string;
    onFilterTagChange: (tag: string) => void;
    availableTags: string[];
}

const FilterBar = ({
    searchQuery,
    onSearchChange,
    filterTag,
    onFilterTagChange,
    availableTags
}: FilterBarProps) => {
    return (
        <div className={filterBar.container}>
            {/* 検索バー */}
            <div>
                <label className={filterBar.searchBar}>🔍 検索</label>
                <input
                    type='text'
                    value={searchQuery}
                    onChange={e => onSearchChange(e.target.value)}
                    placeholder='メモで検索...'
                    className={filterBar.input}
                />
            </div>

            {/* タグフィルター */}
            <div>
                <label className={filterBar.tagLabel}>
                    🏷 タグでフィルター
                </label>
                <select
                    value={filterTag}
                    onChange={e => onFilterTagChange(e.target.value)}
                    className={filterBar.tagSelect}
                >
                    <option value=''>すべて</option>
                    {availableTags.map(tag => (
                        <option key={tag} value={tag}>
                            {tag}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
};

export default FilterBar;
