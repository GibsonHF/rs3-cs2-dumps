//
function script20212(int0: number): void {
    var int1 = (CLIENTCLOCK() - int0);
    var int2 = 0;
    var int3 = 0;
    [int2, int3] = IF_GETGRAPHICDIMENSIONS(comp(1401, 10));  // league_onboarding:logo
    var int4 = IF_GETWIDTH(comp(1401, 8));  // league_onboarding:logo_wrapper
    var int5 = SCALE(int4, int2, int3);
    if ((int1 < 50)) {
        IF_SETTRANS(SCALE(255, 50, int1), comp(1401, 11));  // league_onboarding:flash
    } else if ((int1 < 150)) {
        int1 = (int1 - 50);
        IF_SETTRANS(255, comp(1401, 11));  // league_onboarding:flash
        script20923();
        IF_SETGRAPHIC(91815946 as graphic);
        IF_SETTRANS((255 - SCALE(255, 100, int1)), comp(1401, 10));  // league_onboarding:logo
        IF_SETTRANS((255 - SCALE(255, 100, int1)), comp(1401, 6));  // league_onboarding:logo_bg
    } else if ((int1 < 250)) {
        IF_SETTRANS(0, comp(1401, 10));  // league_onboarding:logo
        IF_SETTRANS(0, comp(1401, 6));  // league_onboarding:logo_bg
        int1 = (int1 - 150);
        IF_SETTRANS((255 - SCALE(255, 100, int1)), comp(1401, 13));  // league_onboarding:subheader_text
    } else if ((int1 < 350)) {
        IF_SETTRANS(0, comp(1401, 13));  // league_onboarding:subheader_text
        int1 = (int1 - 250);
        int4 = (int2 - SCALE(int2, 200, int1));
    } else if ((int1 < 450)) {
        if ((int1 == 351)) {
            script20224();
        };
        int1 = (int1 - 350);
        script20220((255 - SCALE(255, 100, int1)));
        script20221((255 - SCALE(255, 100, int1)));
    } else {
        script20220(0);
        script20221(0);
        IF_SETONTIMER(callback(), comp(1401, 3));  // league_onboarding:anim_listener
    };
    IF_SETSIZE(700, (int5 - 20), 0, 1, comp(1401, 9));  // league_onboarding:panels_bg
    IF_SETSIZE(int4, int5, 0, 0, comp(1401, 8));  // league_onboarding:logo_wrapper
    IF_SETPOSITION(0, int5, 1, 0, comp(1401, 12));  // league_onboarding:subheader
    int5 = ((int5 + IF_GETHEIGHT(comp(1401, 12))) + (4 * 2));  // league_onboarding:subheader
    IF_SETPOSITION(0, int5, 1, 0, comp(1401, 14));  // league_onboarding:contents
    IF_SETSIZE(0, int5, 1, 1, comp(1401, 14));  // league_onboarding:contents
    return;
}