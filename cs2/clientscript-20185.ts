//
function script20185(): void {
    IF_SETENABLED(true, comp(1396, 15));  // league_lobby_splash:play_normal
    IF_SETENABLED(true, comp(1396, 24));  // league_lobby_splash:play_league
    if ((((PLAYERMEMBER() == true) || (varplayer_1750 > varplayer_1752)) || (varplayer_1751 > varplayer_1752))) {
        IF_SETHIDE(true, comp(1396, 23));  // league_lobby_splash:become_member
        IF_SETENABLED(false, comp(1396, 23));  // league_lobby_splash:become_member
    } else {
        IF_SETHIDE(false, comp(1396, 23));  // league_lobby_splash:become_member
        IF_SETENABLED(true, comp(1396, 23));  // league_lobby_splash:become_member
    };
    if ((varbitplayer_58379 == 0)) {
        IF_SETHIDE(false, comp(1396, 11));  // league_lobby_splash:contents_normal
        IF_SETHIDE(false, comp(1396, 16));  // league_lobby_splash:contents_leagues
        IF_SETPOSITION(0, 0, 0, 0, comp(1396, 11));  // league_lobby_splash:contents_normal
        IF_SETSIZE(300, 40, 0, 1, comp(1396, 11));  // league_lobby_splash:contents_normal
        IF_SETPOSITION(0, 0, 2, 0, comp(1396, 16));  // league_lobby_splash:contents_leagues
        IF_SETSIZE(300, 40, 0, 1, comp(1396, 16));  // league_lobby_splash:contents_leagues
        IF_SETHIDE(true, comp(1396, 22));  // league_lobby_splash:play_normal_existing
        IF_SETPOSITION(0, 4, 1, 2, comp(1396, 24));  // league_lobby_splash:play_league
        IF_SETPOSITION(0, 40, 1, 2, comp(1396, 23));  // league_lobby_splash:become_member
    } else {
        IF_SETHIDE(true, comp(1396, 11));  // league_lobby_splash:contents_normal
        IF_SETHIDE(false, comp(1396, 16));  // league_lobby_splash:contents_leagues
        IF_SETPOSITION(0, 0, 1, 0, comp(1396, 16));  // league_lobby_splash:contents_leagues
        IF_SETSIZE(13108, 40, 2, 1, comp(1396, 16));  // league_lobby_splash:contents_leagues
        IF_SETHIDE(false, comp(1396, 22));  // league_lobby_splash:play_normal_existing
        IF_SETPOSITION(-150, 4, 1, 2, comp(1396, 22));  // league_lobby_splash:play_normal_existing
        IF_SETPOSITION(150, 4, 1, 2, comp(1396, 24));  // league_lobby_splash:play_league
        IF_SETPOSITION(150, 40, 1, 2, comp(1396, 23));  // league_lobby_splash:become_member
        IF_SETTEXT("Enter Lobby", comp(1396, 15));  // league_lobby_splash:play_normal
    };
    return;
}