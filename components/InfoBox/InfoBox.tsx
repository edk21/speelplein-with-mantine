import { ReactElement } from 'react';
import style from './InfoBox.module.css';

const InfoBox = ({
    bgColor,
    title,
    count,
    icon,
}: {
    bgColor: string;
    title: string;
    count: number | string;
    icon: ReactElement;
}) => (
    <div className={style.infoBox} style={{ backgroundColor: `${bgColor}` }}>
        <span className={style.span1}>{icon}</span>
        <span className={style.span2}>
            <p>{title}</p>
            <h4>{count.toString()}</h4>
        </span>
    </div>
);
export default InfoBox;
