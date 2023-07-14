import React from 'react'
import './css/Sectionhaqqinda.css'
import SectionTitle from './SectionTitle'
import SectionhaqqindaData from './sectionhaqqindajs.json'
const Sectionhaqqinda = () => {
    return (
        <>
            <div className='section-about row'>
                <div className="section-about-left col-xl-4   col-sm-12 col-12"></div>
                <div className="section-about-right col-xl-8 col-sm-12  col-12 d-flex flex-column align-items-center justify-content-between pt-4">
                    <div className="backgraund-logo"></div>
                  
                    <SectionTitle title='Biz Kimik?'/>
                    <p className="section-about-right-text">
                        Əslində hər şey illər əvvəl İsmayıllı rayonunda
                        ailəvi gəzintidə olduğumuz zaman baş verdi. İsmayıllı rayonunun
                        füsunkar təbiətinin gözəlliyi bizim bir gün burda kənd təsərrüfatı ilə
                        məşğul olmaq arzusu oyatdı. Daha sonra dostlarımızla bu məsələni müzakirə edərək
                        İsmayıllıda təsərrüfat qurmağa qərar verdik. Böyük uğurlar vaxtında və yerində
                        verilən qərarlarla çox bağlıdır. Elə bizdə ilk səfərdə qərar verdik və başladıq.
                        İllər çox sürətli keçdir. Bizdə böyümədə zamanın sürətindən geri qalmadıq.
                        Qısa zaman müddətində əldə etdiyimiz uğurlar və daha sürətlə böyüməyə davam
                        etməyimiz işimizə olan sevginin göstəricisidir. Alma, armud nektarin, gavalıç
                        gilas və qoz yetişdirməklə qalmadıq, tingçilik və toxumçuluq məhsul sıramızı genişləndirdik.
                         Qısa zamanda ən son texnoloji yeniliklərlə damla suvarma sistemlərinin qurulması BAĞLARIN layihələndirilməsi, salınması kimi çətin işlərin öhdəsindən uğurla gəldik. 2022-ci ildə əsas hədəfimiz brendimizin "made in AZERBAİJAN" adına layiq ölkə kənarında rəflərdə görünməsidir. Növbəti hədəfləri sizlərlə paylaşmaq arzusuyla
                    </p>
                    <div className='section-about-right-desing2'></div>
                    <div className='section-about-right-desing3 d-flex justify-content-evenly'>
                        {SectionhaqqindaData.map(melumat =>

                            <div className='section-about-right-desing-list'>
                                 <span><img src={melumat.desing} alt="" /></span> 
                                 <p>{melumat.tema}</p> 
                                 </div>
                        )}

                    </div>
                </div>

            </div>
        </>
    )
}

export default Sectionhaqqinda