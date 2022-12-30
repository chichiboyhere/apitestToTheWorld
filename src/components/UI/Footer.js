import React from 'react';
import styles from '../../styles/Global';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faPhone} from "@fortawesome/free-solid-svg-icons";
import {faWhatsapp} from "@fortawesome/free-brands-svg-icons"

const Footer = () => {
  return (
    <div className="px-4 py-2 justify-center items-center bg-primary flex-col text-center banner04">
    <p className={`${styles.pText} ${styles.whiteText}`}>
      Made with love by
      <span className="bold"> Bloomer Education &copy;2022</span>
    </p>
    <div className="flex flex-col items-center justify-center py-2 ">
    <div className="flex">
    <div className={`${styles.whiteText}`}><FontAwesomeIcon icon ={faPhone} className="hover:text-green-500"></FontAwesomeIcon> +2347031066645</div> &nbsp;&nbsp;&nbsp;
    <div className={`${styles.whiteText}`}><FontAwesomeIcon icon ={faWhatsapp} className="hover:text-green-500"></FontAwesomeIcon> +2349150961885</div>
    </div>
    </div>
  </div>
  )
}

export default Footer