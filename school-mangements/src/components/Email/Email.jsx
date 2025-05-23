

import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import Badge, { badgeClasses } from '@mui/material/Badge';
import { MdOutlineEmail } from "react-icons/md";
import { IoNotificationsOutline } from "react-icons/io5";


const CartBadge = styled(Badge)`
& .${badgeClasses.badge} {
  top: -12px;
  right: -6px;
}
`;
export const EmailIdone = () => {

    return (
        <>
            <IconButton>
                <MdOutlineEmail fontSize="small" />
                <CartBadge badgeContent={5} color="primary" overlap="circular" 
                className='countitems' />
            </IconButton>
            <IconButton>
                <IoNotificationsOutline fontSize="small" />
                <CartBadge badgeContent={8} color="primary" overlap="circular" 
                className='countitems' />
            </IconButton>

        </>
    )
}