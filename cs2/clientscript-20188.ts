//
function script20188(): void {
    CC_DELETEALL(comp(1396, 13));  // league_lobby_splash:contents_normal_scrolling
    CC_DELETEALL(comp(1396, 20));  // league_lobby_splash:contents_leagues_scrolling
    if ((IF_FIND(comp(1396, 13)) == 1)) {  // league_lobby_splash:contents_normal_scrolling
        script20189();
    };
    if ((IF_FIND(comp(1396, 20)) == 1)) {  // league_lobby_splash:contents_leagues_scrolling
        script20190();
    };
    return;
}