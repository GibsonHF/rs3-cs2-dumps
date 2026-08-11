//
function script20208(): void {
    CC_DELETEALL(comp(1401, 44));  // league_onboarding:contents_splash_scrolling
    CC_DELETEALL(comp(1401, 21));  // league_onboarding:contents_linking_l_scrolling
    CC_DELETEALL(comp(1401, 21));  // league_onboarding:contents_linking_l_scrolling
    CC_DELETEALL(comp(1401, 27));  // league_onboarding:contents_linking_r_scrolling
    CC_DELETEALL(comp(1401, 27));  // league_onboarding:contents_linking_r_scrolling
    CC_DELETEALL(comp(1401, 34));  // league_onboarding:contents_confirm_fixed
    if ((script6431() == 1)) {
        IF_SETSIZE(800, 0, 0, 1, comp(1401, 7));  // league_onboarding:window_size
    } else {
        IF_SETSIZE(800, 600, 0, 0, comp(1401, 7));  // league_onboarding:window_size
    };
    script20923();
    IF_SETGRAPHIC(91815946 as graphic);
    var int0 = 0;
    var int1 = 0;
    [int0, int1] = IF_GETGRAPHICDIMENSIONS(comp(1396, 18));  // league_lobby_splash:logo
    IF_SETSIZE(int0, int1, 0, 4, comp(1401, 8));  // league_onboarding:logo_wrapper
    IF_SETHIDE(false, comp(1401, 11));  // league_onboarding:flash
    IF_SETTRANS(0, comp(1401, 11));  // league_onboarding:flash
    IF_SETTRANS(255, comp(1401, 10));  // league_onboarding:logo
    IF_SETTRANS(255, comp(1401, 6));  // league_onboarding:logo_bg
    IF_SETTRANS(255, comp(1401, 13));  // league_onboarding:subheader_text
    script20220(255);
    script20221(255);
    varbitplayer_58385 = 0;
    script20211(1);
    IF_SETONTIMER(callback(script20212, CLIENTCLOCK()), comp(1401, 3));  // league_onboarding:anim_listener
    IF_SETTEXT("Continue", comp(1401, 23));  // league_onboarding:linking_main
    IF_SETTEXT("Continue", comp(1401, 29));  // league_onboarding:linking_alt
    IF_SETTEXT("Confirm this Account", comp(1401, 36));  // league_onboarding:confirm_link_main
    IF_SETTEXT("Confirm Nomination", comp(1401, 37));  // league_onboarding:confirm_link_alt
    script20209(0, "You can switch between the League and RuneScape at any time by switching worlds.");
    return;
}