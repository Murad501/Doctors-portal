import React from 'react';
import clock from '../../../../Assets/assets/icons/clock.svg'
import marker from '../../../../Assets/assets/icons/marker.svg'
import phone from '../../../../Assets/assets/icons/phone.svg'
import InfoCard from './InfoCard';

const InfoContainer = () => {

    const items = [
        {
            id: 1,
            icon: clock,
            title: 'Opening Hours',
            text: 'Lorem Ipsum is simply dummy text of the pri',
            background: 'bg-gradient-to-r from-primary to-secondary'
        },
        {
            id: 2,
            icon: marker,
            title: 'Opening Hours',
            text: 'Lorem Ipsum is simply dummy text of the pri',
            background: 'bg-neutral'
        },
        {
            id: 3,
            icon: phone,
            title: 'Opening Hours',
            text: 'Lorem Ipsum is simply dummy text of the pri',
            background: 'bg-gradient-to-r from-primary to-secondary'
        }
    ]

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center md:justify-items-stretch'>
            {
                items.map(item => <InfoCard key={item.id} item={item}></InfoCard>)
            }
        </div>
    );
};

export default InfoContainer;