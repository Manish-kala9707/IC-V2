
import { Api } from '@mui/icons-material';
import React, { createContext, useEffect, useState, useContext } from 'react';
import { useLocation } from 'react-router-dom';

export const ContextData = createContext();

const FetchApiNonCurated = ({ children }) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [fetchedData, updateFetchedData] = useState([]);
    const [baseUrl, setBaseUrl] = useState("https://apitesting.nvli.in/rest-v1");
    const [totalPages, setTotalPages] = useState(0);
    const [total_items, setTotalRecord] = useState(0);
    const [current_page, setcurrent_page] = useState(0);
    const [items_per_page, setItemsPerpage] = useState(0);
    const [detailData, setDetailData] = useState(null);
    const [searchQuery, setSearchQuery] = useState("");
    const [dcTypevalue, setDctypevalue] = useState("");
    const [filterSearchdata, setFilterSearchdData] = useState([]);
    const [data, setData] = useState([]);
    const [pageNumber, setPageNumber] = useState("");
    const [title, setTitle] = useState("");
    const [nid, setNid] = useState("");
    const [api, setApi] = useState("");
    const [count, setCount] = useState(0);

    const location = useLocation();
    console.log("at fetch",location)

    const filteredArr = location.pathname.split("/").filter(element => 
        !element.includes('page') && !element.includes('nid') && !element.includes('title') && !element.includes('type')
    );
    const pagename = filteredArr.join("/");

    useEffect(() => {
        setData(location?.pathname?.split('/'));
    }, [location.pathname,dcTypevalue]);

    useEffect(() => {
        data.forEach((x) => {
            if (x.includes("page")) {
                setPageNumber(+x.split("=")[1]);
            } else if (x.includes("title")) {
                const title = x.split("=")[1];
                const encodedTitle = decodeURIComponent(title).split('').join("");
                setTitle(encodedTitle);
            } else if (x.includes("nid")) {
                setNid(+x.split("=")[1]);
            }
            else if (x.includes("type")) {
                setDctypevalue(x.split("=")[1]);
            }
            else{
                setPageNumber(null)
                setTitle(null)
                setDctypevalue("")
                setNid(null)
                
            }
        });
    }, [data, pageNumber,dcTypevalue]);

    useEffect(() => {
        if (location.pathname.includes("/hi")) {
            if (baseUrl !== "https://apitesting.nvli.in/hi/rest") {
                setBaseUrl("https://apitesting.nvli.in/hi/rest");
            }
            
            const pageForhnd = pagename.replace(/^\/hi/, '');
            setApi(`${baseUrl}${pageForhnd}?search_api_fulltext=${searchQuery}&page=${pageNumber}&field_dc_type_1=${dcTypevalue}`);
        } else if (!location.pathname.includes("/hi")) {
            if (baseUrl !== "https://apitesting.nvli.in/rest-v1") {
                setBaseUrl("https://apitesting.nvli.in/rest-v1");
            }
            
            setApi(`${baseUrl}${pagename}?search_api_fulltext=${searchQuery}&page=${pageNumber}&field_dc_type=${dcTypevalue}`);
        }
    }, [location.pathname, pageNumber, searchQuery, dcTypevalue, baseUrl]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(api);
                
                if (response.ok) {
                    const jsonData = await response.json();
                    if (jsonData?.rows === undefined) {
                        if (jsonData?.search_results === undefined) {
                            updateFetchedData(jsonData);
                        } else {
                            updateFetchedData(jsonData?.search_results);
                        }
                    }
                     else {
                        // setFilterSearchdData(jsonData?.rows?.search_results);
                        setTotalPages(jsonData.pager.total_pages);
                        setTotalRecord(jsonData.pager.total_items);
                        setItemsPerpage(jsonData.pager.items_per_page);
                        setcurrent_page(jsonData.pager.current_page);
                        updateFetchedData(jsonData?.rows?.search_results);
                        setFilterSearchdData(jsonData?.rows?.facets)
                    }
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        
        fetchData();
    }, [api]);
       console.log("fetchedData at store", api)
    return (
        <div>
            <ContextData.Provider value={{ fetchedData, title, nid, totalPages, total_items, items_per_page, current_page, location, pagename, pageNumber,filterSearchdata }}>
                {children}
            </ContextData.Provider>
        </div>
    );
};

export default FetchApiNonCurated;