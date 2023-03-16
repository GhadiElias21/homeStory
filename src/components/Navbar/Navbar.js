import React from 'react'
import styles from './Navbar.module.css'
import logo from '../../assets/Screenshot_2.png'
import phone from '../../assets/phone.svg'
import ellipse from '../../assets/Ellipse 268 (1).svg'
import whatsapp from '../../assets/whatsapp.png'
import whatsappBubble from '../../assets/whatsappBubble.svg'
import telegram from '../../assets/telegram.png'
import bubble from '../../assets/telegrambubble.svg'
import instagrambubble from '../../assets/instagrambubble.svg'
import facebook from '../../assets/facebook.png'
import mail from '../../assets/mail.png'
import { RxHamburgerMenu } from 'react-icons/rx'
import instagram from '../../assets/instagram.png'
function Navbar() {
  return (
    <div className={styles.container}>
      <div className={styles['first-container']}>
        <div className={styles.logo}>
          <img  className={styles.image}src={logo}
            width='300px'
            alt='' />

        </div>
        <div className={styles['second-container']}>
          <div className={styles.phone}>
            <div className={styles.phone1}>
              <div><img className={styles.phoneImage} src={phone} alt='' /></div>
              <div> +34 624 36 23 26</div>
            </div>
            <div className={styles.phone2}>
              <div><img className={styles.dotImage}src={ellipse} alt='' /></div>
              <div className={styles.textPhone}> Звоните, мы онлайн</div>
            </div>

          </div>

          <div className={styles.social}>
            <div className={styles.media}>
              <div className={styles.whatsapp}>

                <img
                  width={30}
                  className={styles.WA} src={whatsapp} alt="" />


              </div>
              <div >
                <div> <img
                  width={30}
                  className={styles.telegram} src={telegram} alt="" /></div>

              </div>

              <div>
                <div>  <img
                  width={30}
                  className={styles.instagram} src={instagram} alt="" /></div>

              </div>
              <div className={styles.facebook}>
                <img
                  width={30}
                  className={styles.instagram} src={facebook} alt="" />
              </div>
              <div className={styles.mail}>
                <div>
                  <img
                    width={30}
                    className={styles.instagram} src={mail} alt="" />
                </div>
              </div>
            </div>
            <div>
              <div className={styles.phone2}>
                <div><img src={ellipse} alt='' /></div>
                <div className={styles.textMedia}>Пишите, мы онлайн</div>
              </div>
            </div>


          </div>

          <div className={styles.booking}>
            <button className={styles.buttonBook}>
            <div className={styles.buttonText}>Записаться на экскурсию</div>  
              </button>
          </div>

          <div className={styles.burger}> <RxHamburgerMenu className={styles.burgerIcon} size={40}/></div>
        </div>
      </div>

      <div className={styles['third-container']}>

     <div className={styles['oneB']}>Выполненные работы</div>
     <div className={styles['twoB']} >Каталог готовых объектов</div>
     <div className={styles['threeB']}>Магазин стройматериалов</div>
     <div className={styles['fourB']}>Блог</div>
     <div className={styles['fiveB']}>О нас</div>








      </div>
    </div>
  )
}

export default Navbar