import styled from 'styled-components';

export const MainHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const Container = styled(MainHeader)`
  max-width: 100%;
  padding: 20px;
  margin: 0 auto;
`;

export const MHLogo = styled.div``;

export const MHImg = styled.img`
  max-width: 10%;
  height: auto;
`;

export const MainNav = styled.div``;

export const MainNavList = styled.ul`
  margin: 1em 0 0.5em;
  text-align: center;
`;

export const MainNavListItem = styled.li`
  display: inline;
`;

export const MainNavListItemSpan = styled.span`
  display: inline-block;
  padding: 0.5em 1.5em;
`;
