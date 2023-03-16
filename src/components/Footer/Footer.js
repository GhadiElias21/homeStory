import React from 'react'
import styles from './footer.module.css'
import video1 from '../../assets/video1.svg'
import video2 from '../../assets/video2.svg'
import video3 from '../../assets/video3.svg'
import dot from '../../assets/dot.svg'
import logo from '../../assets/logo.png'
import arrow from '../../assets/arrow.svg'
import arrowUp from '../../assets/arrowup.svg'
import russia from '../../assets/russia.svg'

import { FaPlay } from 'react-icons/fa'
import { BsHouseDoor } from 'react-icons/bs'
import { BiStore } from 'react-icons/bi'
import { BsHandbag } from 'react-icons/bs'
import { BsCloudSun } from 'react-icons/bs'
import { BsFillPersonFill } from 'react-icons/bs'
import { BsFillEnvelopeFill } from 'react-icons/bs'
import whatsapp from '../../assets/whatsapp.png'
import telegram from '../../assets/telegram.png'
import facebook from '../../assets/facebook.png'
import mail from '../../assets/mail.png'
import instagram from '../../assets/instagram.png'



function Footer() {
    return (
        <section className={styles.section}>

            <div className={styles.container}>

                <div className={styles['box1']}>



                    <div className={styles['sub-box1-1']}>

                        <div className={styles['sub-box1-1-text']}>Видеоотзывы от партнёров</div>

                        <div className={styles['sub-box1-1-content']}>

                            <div className={styles['sub-box1-1-images']}>
                                <div className={styles['image-1-cont']}>
                                    <FaPlay size={40} fill='white' className={styles.play1} />
                                    <img className={styles.image1} alt='' src={video1} />
                                </div>
                                <div className={styles['image-2-cont']}>
                                    <FaPlay size={40} fill='white' className={styles.play2} />
                                    <img className={styles.image2} alt='' src={video2} />
                                </div>
                                <div className={styles['image-3-cont']}>
                                    <FaPlay size={40} fill='white' className={styles.play3} />
                                    <img className={styles.image3} alt='' src={video3} />
                                </div>
                            </div>



                            <div className={styles['sub-box1-1-dots']}>
                                <img alt='' src={dot} style={{ cursor:" pointer"}}width='12px' height='12px' />
                                <img alt='' src={dot} style={{ cursor:" pointer"}}width='12px' height='12px' />
                                <img alt='' src={dot} style={{ cursor:" pointer"}}width='12px' height='12px' />
                                <img alt='' src={dot} style={{ cursor:" pointer"}}width='12px' height='12px' />
                            </div>
                        </div>

                    </div>





                    <div className={styles['sub-box1-2']}>
                        <div >
                            <img className={styles.logo} src={logo} alt='' />
                        </div>

                        <div><label className={styles['logo-text']}>Alfa Digital Agency</label> <label className={styles['logo-text2']}>– разработка высоко конверсионных сайтов</label> </div>



                    </div>


                </div>




                <div className={styles['box2']}>

                    <div className={styles['box2-line1']}>
                        <div><BsHouseDoor className={styles['box2-line-icon']} fill='white' size={25} /></div>
                        <div className={styles['box2-text1']}>Главная</div>

                    </div>

                    <div className={styles['box2-line2']}>
                        <div><BiStore className={styles['box2-line-icon']} fill='white' size={25} /></div>
                        <div className={styles['box2-text2']}>Каталог готовых объектов</div>

                    </div>

                    <div className={styles['box2-line3']}>
                        <div><BsHandbag className={styles['box2-line-icon']} fill='white' size={25} /></div>
                        <div className={styles['box2-text3']}>Магазин стройматериалов</div>
                    </div>

                    <div className={styles['box2-line4']}>
                        <div><BsCloudSun className={styles['box2-line-icon']} fill='white' size={25} /></div>
                        <div className={styles['box2-text4']}>Блог</div>

                    </div>

                    <div className={styles['box2-line5']}>

                        <div><BsFillPersonFill className={styles['box2-line-icon']} fill='white' size={25} /></div>
                        <div className={styles['box2-text5']}>Выезд специалиста</div>

                    </div>

                    <div className={styles['box2-line6']}>
                        <div><BsFillEnvelopeFill className={styles['box2-line-icon']} fill='white' size={25} /></div>
                        <div className={styles['box2-text6']}>Контакты</div>

                    </div>


                </div>




                <div className={styles['box3']}>
                    <div className={styles['box3-1']}>
                        <div className={styles['box3-text']}>
                            <div className={styles['box3-subtext']}>Смотреть все документы</div>
                            <div className={styles.arrow}><img src={arrow} alt='' /></div>

                        </div>

                        <div className={styles.mc}>
                            <div className={styles['sub-mc']}>
                                <div className={styles['sub-mc-text']}>  Политика конфиденциальности</div>
                                <div> <img src={arrowUp} alt='' /></div>
                            </div>
                        </div>
                        <div className={styles.lang}>
                            <div className={styles['sub-lang']}>
                                <div className={styles.flag}>
                                    <div> 
                                        <img style={{borderRadius:'20px'}}src={russia} alt=''/>
                        
                                    </div>
                                    <div> <img src={arrowUp} alt='' /></div>

                                </div>

                            </div>


                        </div>



                    </div>



                    <div className={styles['box3-2']}>
                      <img alt='' className={styles.social} width={30} src={instagram}/>  
                      <img alt='' className={styles.social} width={30} src={telegram}/>  
                      <img alt='' className={styles.social} width={30} src={whatsapp}/>  
                      <img alt='' className={styles.social} width={30} src={mail}/>  
                      <img alt='' className={styles.social} width={30} src={facebook}/>  
                    


                    </div>

                </div>


            </div>



        </section>
    )
}

export default Footer