import { createContext, useState } from "react";

export const SearchContext = createContext();

const SearchProvider = ({children}) => {
    const [searchQuery, setSearchQuery] = useState('');

    const updateSearchQuery = (input) => {
        setSearchQuery(input);
    };

    return(
        <SearchContext.Provider value={{searchQuery, updateSearchQuery}}>
            {children}
        </SearchContext.Provider>
    )
}

export default SearchProvider