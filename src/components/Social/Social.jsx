import React from 'react';
import SocialButton from './SocialButton';
import { BsMedium, BsTelegram } from 'react-icons/bs';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { SiGitbook } from 'react-icons/si';


const Social = () => {
    return (
        <div className='d-flex flex-row justify-content-evenly justify-content-md-center align-items-start align-items-md-center social-wrap gap-3'>
            <div className="d-flex flex-md-row flex-column align-items-start gap-3">
            <SocialButton url={'https://t.me/BigFloppaPortal'} title={'Telegram'}>
                <BsTelegram className='font-20' />
            </SocialButton>
            <SocialButton url={'https://domain.com'} title={'Book'}>
                <SiGitbook className='font-20'/>
            </SocialButton>
            </div>
            <div className="d-flex flex-md-row flex-column align-items-start gap-3">
            <SocialButton url={'https://medium.com/@BigFloppa'} title={'Medium'}>
                <BsMedium className='font-20'/>
            </SocialButton>
            <SocialButton url={'https://twitter.com/floppa_eth'} title={'Twitter'}>
                <AiFillTwitterCircle className='font-20'/>
            </SocialButton>
            </div>
        </div>
    );
}

export default Social;
