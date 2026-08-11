//
function script20186(int0: number): void {
    var int1 = (CLIENTCLOCK() - int0);
    var int2 = IF_GETWIDTH(comp(1396, 6));  // league_lobby_splash:logo_wrapper
    var int3 = 0;
    var int4 = 0;
    [int3, int4] = IF_GETGRAPHICDIMENSIONS(comp(1396, 18));  // league_lobby_splash:logo
    var int5 = SCALE(int2, int3, int4);
    var int6 = 0;
    if ((int1 < 50)) {
        if ((int1 < 1)) {
            script4161(91488281, 255);
            script4161(91488282, 255);
        };
        IF_SETTRANS(SCALE(255, 50, int1), comp(1396, 19));  // league_lobby_splash:flash
    } else if ((int1 < 150)) {
        int1 = (int1 - 50);
        IF_SETTRANS(255, comp(1396, 19));  // league_lobby_splash:flash
        script20923();
        IF_SETGRAPHIC(91488274 as graphic);
        IF_SETTRANS((255 - SCALE(255, 100, int1)), comp(1396, 18));  // league_lobby_splash:logo
        IF_SETTRANS((255 - SCALE(255, 100, int1)), comp(1396, 4));  // league_lobby_splash:logo_bg
    } else if ((int1 < 250)) {
        IF_SETTRANS(0, comp(1396, 18));  // league_lobby_splash:logo
        IF_SETTRANS(0, comp(1396, 4));  // league_lobby_splash:logo_bg
        int1 = (int1 - 150);
        int6 = (255 - SCALE(255, 100, int1));
        IF_SETTRANS(int6, comp(1396, 10));  // league_lobby_splash:subheader_text
        script4161(91488281, int6);
        script4161(91488282, int6);
    } else if ((int1 < 350)) {
        IF_SETTRANS(0, comp(1396, 10));  // league_lobby_splash:subheader_text
        script4161(91488281, 0);
        script4161(91488282, 0);
        int1 = (int1 - 250);
        int2 = (int3 - SCALE(int3, 200, int1));
    } else if ((int1 < 450)) {
        if ((int1 == 351)) {
            script20188();
        };
        int1 = (int1 - 350);
        script20187((255 - SCALE(255, 100, int1)));
    } else {
        script20187(0);
        IF_SETONTIMER(callback(), comp(1396, 2));  // league_lobby_splash:anim_listener
    };
    IF_SETSIZE(700, (int5 - 20), 0, 1, comp(1396, 7));  // league_lobby_splash:panels_bg
    IF_SETSIZE(int2, int5, 0, 0, comp(1396, 6));  // league_lobby_splash:logo_wrapper
    IF_SETPOSITION(0, int5, 1, 0, comp(1396, 8));  // league_lobby_splash:subheader
    int5 = ((int5 + IF_GETHEIGHT(comp(1396, 8))) + (4 * 2));  // league_lobby_splash:subheader
    IF_SETPOSITION(0, int5, 1, 0, comp(1396, 9));  // league_lobby_splash:contents
    IF_SETSIZE(640, int5, 0, 1, comp(1396, 9));  // league_lobby_splash:contents
    return;
}