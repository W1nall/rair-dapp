import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import MobileNavigationList from './MobileNavigationList';

import { RootState } from '../../../ducks';
import { ColorChoice } from '../../../ducks/colors/colorStore.types';
import { ContractsInitialType } from '../../../ducks/contracts/contracts.types';
import { DiscordIcon, TelegramIcon, TwitterIcon } from '../../../images';
import { SocialBox } from '../../../styled-components/SocialLinkIcons/SocialLinkIcons';
import {
  CommunityBlock,
  CommunityBoxFooter
} from '../../Footer/FooterItems/FooterItems';

import { List, SearchInputMobile } from './../NavigationItems/NavigationItems';

interface IMobileListMenu {
  click: boolean;
  messageAlert: string | null;
  activeSearch: boolean;
  primaryColor: ColorChoice;
  setMessageAlert;
  toggleMenu: (otherPage?: string | undefined) => void;
  setTabIndexItems: (arg: number) => void;
  isSplashPage: boolean;
}

const MobileListMenu: React.FC<IMobileListMenu> = ({
  primaryColor,
  click,
  activeSearch,
  toggleMenu,
  messageAlert,
  setMessageAlert,
  setTabIndexItems,
  isSplashPage
}) => {
  const { currentUserAddress } = useSelector<RootState, ContractsInitialType>(
    (store) => store.contractStore
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (currentUserAddress) {
      dispatch({ type: 'GET_USER_START', publicAddress: currentUserAddress });
    }
  }, [currentUserAddress, dispatch]);

  return (
    <List primaryColor={primaryColor} click={click}>
      <div>
        {activeSearch && (
          <SearchInputMobile primaryColor={primaryColor}>
            <i className="fas fa-search" aria-hidden="true"></i>
            {process.env.REACT_APP_HOTDROPS === 'true' ? (
              <input
                className={
                  primaryColor === 'rhyno' ? 'rhyno' : 'input-search-black'
                }
                type="text"
                placeholder="Search"
              />
            ) : (
              <input
                className={
                  primaryColor === 'rhyno' ? 'rhyno' : 'input-search-black'
                }
                type="text"
                placeholder="Search the rairverse..."
              />
            )}
          </SearchInputMobile>
        )}
        <MobileNavigationList
          click={click}
          messageAlert={messageAlert}
          setMessageAlert={setMessageAlert}
          primaryColor={primaryColor}
          toggleMenu={toggleMenu}
          currentUserAddress={currentUserAddress}
          setTabIndexItems={setTabIndexItems}
          isSplashPage={isSplashPage}
        />
      </div>
      {/* <CommunityBlock primaryColor={primaryColor}>
        <div className="community-text">Join our community</div>
        <CommunityBoxFooter className="header-mobile-community">
          <SocialBox hoverColor={'#7289d9'} primaryColor={primaryColor}>
            <a
              href="https://discord.gg/pSTbf2yz7V"
              target={'_blank'}
              rel="noreferrer">
              <DiscordIcon primaryColor={primaryColor} color={'#fff'} />
            </a>
          </SocialBox>
          <SocialBox
            marginRight={'17px'}
            marginLeft={'17px'}
            hoverColor={'#1DA1F2'}
            primaryColor={primaryColor}>
            <a
              href="https://twitter.com/rairtech"
              target={'_blank'}
              rel="noreferrer">
              <TwitterIcon primaryColor={primaryColor} color={'#fff'} />
            </a>
          </SocialBox>
          <SocialBox hoverColor={'#229ED9'} primaryColor={primaryColor}>
            <TelegramIcon primaryColor={primaryColor} color={'#fff'} />
          </SocialBox>
        </CommunityBoxFooter>
      </CommunityBlock> */}
    </List>
  );
};

export default MobileListMenu;
