import React,{useState} from 'react'

import { useScrollPosition } from "../../foreign-components/HideOnScroll";

import './footer-styles.scss';

const Footer = () => {
    const [sticky,setSticky] = useState(false);


    useScrollPosition(
        ({ prevPos, currPos }) => {
          const isShow = currPos.y > prevPos.y
          if (isShow !== sticky) setSticky(isShow)
        },
        [sticky])


    return (
        <footer className="footer" amp-fx="float-in-bottom" style={{
                position: "sticky",
                transform: sticky ? "translateY(100%)" : "translateY(0)",
                transition: "transform 400ms ease-in",
                bottom: 0,
                left: 0, 
        }}>
            <div className="all-rights-reserved">
                Yovelin Panayotov {new Date().getFullYear()} | All Rights Reserved
            </div>
        </footer>
    )
}

export default Footer
