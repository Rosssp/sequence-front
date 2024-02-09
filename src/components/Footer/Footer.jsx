import React from "react";
import pimax from "../../icons/footer.svg";
import styles from "./footer.module.scss";

export default function Footer() {
    return (
        <div className={styles.footer}>
            <p>
                © МузНавигатор, 2017—2023 Все права защищены
                <br />
                <br />
                <span>Медиа-портал по продаже музыкальных произведений</span>
            </p>
            <div>
                <img src={`${pimax}`} alt="" />
                <p>РАЗРАБОТКА САЙТА</p>
            </div>
        </div>
    );
}
