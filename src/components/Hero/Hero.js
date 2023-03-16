import React from 'react'
import styles from './Hero.module.css'
import Man from '../../assets/man.png'
import fire from '../../assets/fire.svg'
import { BiPen } from 'react-icons/bi'
import { AiOutlineCheckCircle } from 'react-icons/ai'
import mail from '../../assets/mail.png'
import{MdKeyboardArrowDown} from 'react-icons/md'
function Hero() {
    return (
        <section>
            <div className={styles.first}>

                <div className={styles.description}>
                    <div className={styles.header}>
                        Все материалы о нашей компании <br />  и услугах которые мы оказываем
                    </div>

                    <div className={styles.text}>
                        Здесь вы найдете ответы на самые распространенные <br />
                        вопросы, инструкции и кейсы наших клиентов
                    </div>
                    <div className={styles['text-container']}>
                        <div className={styles.stext}>

                            <label style={{ color: '#1EAB5F' }}>  Хотите с нами связаться</label> , оставьте заявку<br />и специалист свяжется с вами в течение 30 минут.
                        </div>

                        <div className={styles.fire}><img src={fire} className={styles.fire} alt='' /></div>
                    </div>

                    <div >
                        <input placeholder='Номер телефона'
                            className={styles.input}></input>


                    </div>

                    <div>
                        <button className={styles.button}>
                            <div className={styles['button-text']}>
                                <div className={styles.btext}>Оставить заявку</div>
                                <div className={styles.pen}><BiPen color='white' size={20} /></div>

                            </div>

                        </button>
                    </div>
                    <div className={styles.disclaimer}>  Ваши данные не будут переданы третьим лицам</div>

                </div>

                <div className={styles.image}>
                    <img width="412px"
                        height="484px"
                        src={Man} alt='' />
                </div>

            </div>




            <div className={styles.info}>
                <div className={styles.about}>
                    <div className={styles['about-box1']}>
                        <div className={styles['text-box1']}>О компании</div>
                        <div className={styles.underline} style={{
                            border: '1px solid  #ffff',
                            width: '310px'
                        }}></div>
                    </div>
                    <div className={styles['about-box2']}>
                        <div className={styles['text-box2']}>Стройка и ремонт</div>
                        <div className={styles.underline}  style={{
                            border: '1px solid  #ffff',
                            width: '310px'
                        }}></div>

                    </div>
                    <div className={styles['about-box3']}>
                        <div  className={styles['text-box3']}>Покупка недвижимости</div>
                        <div className={styles.underline}  style={{
                            border: '1px solid  #ffff',
                            width: '310px'
                        }}></div>

                    </div>
                    <div className={styles['about-box4']}>
                        <div  className={styles['text-box4']}>Маркетинговые услуги</div>
                        <div className={styles.underline}  style={{
                            border: '1px solid  #ffff',
                            width: '310px'
                        }}></div>

                    </div>



                </div>
                <div className={styles['more-info']}>

                    <div className={styles['info-container1']}>
                        <div className={styles['info-sub1']}>
                            <div> <AiOutlineCheckCircle size={30} fill='#E7B97E' /></div>
                            <div className={styles['info-text1']}>Основная информация </div>

                        </div>
                        <div className={styles['info-sub1']}>
                            <div> <AiOutlineCheckCircle size={30} fill='#E7B97E' /></div>
                            <div className={styles['info-text1']}>История компании </div>
                        </div>
                    </div>

                    <div className={styles['info-container2']}>

                        <div className={styles['info-sub2']}>
                            <div><AiOutlineCheckCircle size={30} fill='#E7B97E' /></div>
                            <div className={styles['info-text1']}> Кейсы наших клиентов</div>
                        </div>
                        <div className={styles['info-sub2']}>
                            <div><AiOutlineCheckCircle size={30} fill='#E7B97E' /></div>
                            <div className={styles['info-text23']}> Услуги которые мы оказываем</div>
                        </div>
                        <div className={styles['info-sub2']}>
                            <div><AiOutlineCheckCircle size={30} fill='#E7B97E' /></div>
                            <div className={styles['info-text24']}> Часто задаваемые вопросы</div>
                        </div>
                    </div>

                    <div className={styles['info-container3']}>

                        <div className={styles['info-sub2']}>

                            <div><AiOutlineCheckCircle size={30} fill='#E7B97E' /></div>
                            <div className={styles['info-text23']}> Кейсы наших клиентов</div>
                        </div>
                        <div className={styles['info-sub2']}>
                            <div><AiOutlineCheckCircle size={30} fill='#E7B97E' /></div>
                            <div className={styles['info-text23']}>Топ 30 вопросов инвесторов</div>
                        </div>
                    </div>


                    <div className={styles['info-container4']}>

                        <div className={styles['info-sub2']}>
                            <div><AiOutlineCheckCircle size={30} fill='#E7B97E' /></div>
                            <div className={styles['info-text23']}>Кейсы наших клиентов</div>
                        </div>
                        <div className={styles['info-sub2']}>
                            <div><AiOutlineCheckCircle size={30} fill='#E7B97E' /> </div>
                            <div className={styles['info-text23']}>Услуги которые мы оказываем</div>
                        </div>
                    </div>

                    </div>



                </div>
                <div className={styles.social}>
                    <div className={styles.mail}>
                    <img className={styles.mailImg} src={mail} alt='' width="40px" />
                    </div>
                    <div>  <MdKeyboardArrowDown style={{cursor:'pointer'}} className={styles.arrow} fill='white' size={32}/>          </div>
                </div>
                <div>
                </div>
















        </section>
    )
}

export default Hero