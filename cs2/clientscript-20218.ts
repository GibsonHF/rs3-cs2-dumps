//
function script20218(int0: number): void {
    var int1 = (CLIENTCLOCK() - int0);
    var int2 = 0;
    if ((int1 == 1)) {
        IF_SETENABLED(false, comp(1401, 36));  // league_onboarding:confirm_link_main
        IF_SETENABLED(false, comp(1401, 37));  // league_onboarding:confirm_link_alt
        IF_SETHIDE(true, comp(1401, 38));  // league_onboarding:confirm_link_spinner
        IF_SETHIDE(true, comp(1401, 51));  // league_onboarding:check_name_spinner
    };
    if ((int1 < 100)) {
        script20222(SCALE(255, 100, int1));
    } else if ((int1 < 200)) {
        if ((int1 == 100)) {
            script20230();
        };
        int1 = (int1 - 100);
        script20223((255 - SCALE(255, 100, int1)));
    } else if ((varbitplayer_58385 == 3)) {
        int2 = ((int1 - 200) / 50);
        if ((int1 < 450)) {
            IF_SETENABLED(false, comp(1401, 36));  // league_onboarding:confirm_link_main
            IF_SETENABLED(false, comp(1401, 37));  // league_onboarding:confirm_link_alt
            IF_SETHIDE(false, comp(1401, 36));  // league_onboarding:confirm_link_main
            IF_SETHIDE(false, comp(1401, 38));  // league_onboarding:confirm_link_spinner
            IF_SETHIDE(true, comp(1401, 37));  // league_onboarding:confirm_link_alt
            IF_SETTEXT(`${inttostring((5 - int2), 10)}...`, comp(1401, 36));  // league_onboarding:confirm_link_main
        } else {
            IF_SETPARAM_INT(8058, 0, comp(1401, 3));  // league_onboarding:anim_listener
            IF_SETONTIMER(callback(), comp(1401, 3));  // league_onboarding:anim_listener
            IF_SETENABLED(true, comp(1401, 36));  // league_onboarding:confirm_link_main
            IF_SETHIDE(true, comp(1401, 37));  // league_onboarding:confirm_link_alt
            IF_SETENABLED(false, comp(1401, 37));  // league_onboarding:confirm_link_alt
            IF_SETHIDE(true, comp(1401, 38));  // league_onboarding:confirm_link_spinner
            IF_SETTEXT("Confirm this Account", comp(1401, 36));  // league_onboarding:confirm_link_main
        };
    } else {
        IF_SETPARAM_INT(8058, 0, comp(1401, 3));  // league_onboarding:anim_listener
        IF_SETONTIMER(callback(), comp(1401, 3));  // league_onboarding:anim_listener
    };
    return;
}