import * as React from 'react';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { AccountMenu } from '../account-profile/Account';
import {EmailIdone } from '../Email/Email';

export const Header = () => {
    return (
        <>
            <section className="header-bg d-flex align-items-center justify-content-between p-2">
                {/* Left - Search bar */}
                <div className="d-flex align-items-center">
                    <IconButton type="button" sx={{ p: '10px' }} aria-label="search" className="searchIcon">
                        <SearchIcon />
                    </IconButton>
                    <InputBase
                        sx={{ ml: 1, flex: 1 }}
                        placeholder="Find Something..."
                        inputProps={{ 'aria-label': 'search google maps' }}
                    />
                </div>

                {/* Right - Profile Menu */}
                <div className="d-flex align-items-center header-icon-left gap-3">
                <EmailIdone/>
                    <div className=''>
                  
                    <AccountMenu />
                    </div>
                   
                </div>
            </section>
        </>
    );
};
