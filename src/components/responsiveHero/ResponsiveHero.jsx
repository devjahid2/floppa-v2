import React from 'react';
import { images } from '../../assets/images/images';

const ResponsiveHero = () => {
    return (
        <div>
            <div className="position-relative title">
            <img src={images.title} alt="title" className='w-100' />
            
            <img src={images.spring} className='spring-top position-absolute' alt="spring" />
                <img src={images.spring} className='spring-bottom position-absolute' alt="spring" />
            </div>

            <div className="d-flex flex-column-reverse flex-md-row gap-2 justify-content-between position-relative">
                <div className="position-relative w-50 floppa_money_wrap">
                    {/* <img className='sun_img' src={images.sun_md} alt="sun" /> */}
                    <img className='w-100 w-sm-75' src={images.floppa_money} alt="floppa_money" />
                </div>
                {/* <div className="position-relative ">
                <p className='font-16'>Buy $FLOP now!</p>
                    <Input button={true} placeholder={'00.00'} defaultValue={'00.00'}/>
                    <Button text={'Claim'} className={'mt-4 w-100'}/>
                </div> */}
            </div>
        </div>
    );
}

export default ResponsiveHero
