import classes from './Header.module.css';
import {useState} from "react";
import MapModal from "./MapModal";
export default function Header(){
    const [showMap, setShowMap] = useState<boolean>(false);
    const [selectedAddress, setSelectedAddress] = useState<string>('');
    return (
        <div className={classes.container}>
            <div dir='rtl' style={{display: 'flex',justifyContent:'center'}}>
                <button className={classes.locationBtn} onClick={() => setShowMap(true)}>موقعیت انتخابی</button>
                <div className={classes.cartHover}>
                    <div className={classes.iconShoppingCart}>
                        <svg viewBox="0 0 24 24" fill="inherit" xmlns="http://www.w3.org/2000/svg" size="24"
                             className="Basket-sc-typ2zt-0 cZrOQE">
                            <path fillRule="evenodd" clipRule="evenodd"
                                  d="M20.617 2.5a3 3 0 0 0-2.934 2.371L17.656 5H4a2 2 0 0 0-1.932 2.516l.006.021 1.545 5.303A3 3 0 0 0 6.5 15h10.8a.75.75 0 0 1 0 1.5H5.5c-.087 0-.171.012-.252.033A2.747 2.747 0 0 0 5.653 22a2.75 2.75 0 0 0 2.643-3.5h5.06c-.068.239-.107.49-.107.75a2.75 2.75 0 1 0 5.292-1.05 2.747 2.747 0 0 0-.573-5.114l1.67-7.796a1 1 0 0 1 .979-.79h.382a1 1 0 1 0 0-2h-.382Zm-4.618 16a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5Zm-10.346 0a.75.75 0 1 1-.001 1.5.75.75 0 0 1 0-1.5ZM15.94 13H6.499a1 1 0 0 1-.96-.72L4 7h13.227l-1.286 6Z"
                                  fill="inherit"></path>
                        </svg>
                    </div>
                </div>
            </div>
            {selectedAddress &&
                <div className={classes.address}>
                    {selectedAddress}
                </div>
            }
            {showMap && (
                <MapModal closeModal={()=>setShowMap(false)}
                          setSelectedAddress={setSelectedAddress}
                />
            )}
            <div className={classes.searchBox}>
                <input className={classes.search} placeholder=" جستجو دراسنپ فود"/>
                <svg viewBox="0 0 24 24" fill="rgba(19, 20, 31, 0.6)" xmlns="http://www.w3.org/2000/svg"
                     data-sentry-element="Search" data-sentry-source-file="ButtonSearchbox.tsx"
                     className={classes.searchIcon}>
                    <path fillRule="evenodd" clipRule="evenodd"
                          d="M6.13 6.13a7.277 7.277 0 0 1 10.948 9.534l2.629 2.629a1 1 0 1 1-1.414 1.414l-2.63-2.629A7.276 7.276 0 0 1 6.132 6.131Zm8.68 1.228a5.277 5.277 0 0 0-7.265 7.649 5.275 5.275 0 0 0 7.409.049c.015-.018.032-.036.049-.053s.035-.033.053-.048c1.947-2 1.993-5.16.137-7.213l-.186-.197-.198-.187Z"
                          fill="rgba(19, 20, 31, 0.6)"></path>
                </svg>
            </div>
        </div>
    )
}
