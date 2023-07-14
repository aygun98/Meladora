import React from 'react'
import './css/Footer.css'
const Footer = () => {
    return (
        <div className='footer-container'>
            <div className="footer-top d-flex justify-content-around align-items-baseline">
                <div className="footer-top-logo align-self-center"></div>
                <div className='footer-top-baglantilar d-flex justify-content-around align-items-baseline '>
                    <div className="footer-top-menu">
                        <h2>Menyular</h2>

                        <a href="#">Biz kimik?</a>
                        <a href="#">Bağlarımız</a>
                        <a href="#">Məhsullarımız</a>
                        <a href="#">Xidmətlərimiz</a>
                        <a href="#">Sosial məsuliyyət</a>
                        <a href="#">Əlaqə</a>
                    </div>
                    <div className="footer-top-links">
                        <h2>Faydalı Linklər</h2>
                        <a href="#">Tez-tez soruşulanlar</a>
                        <a href="#">Karyera</a>
                        <a href="#">Xidmət şəbəkəsi</a>
                        <a href="#">Təhlükəsizlik</a>
                        <a href="#">Şərtlər və Qaydalar</a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>© Copyright</p>
            </div>
        </div>
    )
}

export default Footer