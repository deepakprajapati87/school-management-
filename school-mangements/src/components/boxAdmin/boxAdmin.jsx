
import CountUp from 'react-countup';
export const AdminBox = ({
    icon,
    title,
    number,
    duration = 2,
    iconBgColor ,
     iconColor ,

}) => {
    return (
        <>
            <div className="row align-items-center">
                <div className="col-6 ">
                    <div  className="item-icon"
                     style={{ backgroundColor: iconBgColor}}>
                        <span style={{ color: iconColor }}>{icon}</span>
                    </div>
                </div>
                <div className="col-6 align-items-center">
                    <div className='item-content'>
                        <div className='item-title'>{title}</div>
                        <div className='item-number'>
                            <span className='counter'>
                                <CountUp end={number} duration={duration} separator='' />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}