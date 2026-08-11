//
function script8968(int0: number): void {
    IF_SETHIDE(true, comp(1496, 99));  // 6awe1_onboarding:tab0_current
    IF_SETHIDE(true, comp(1496, 100));  // 6awe1_onboarding:tab1_current
    IF_SETHIDE(true, comp(1496, 103));  // 6awe1_onboarding:tab4_current
    IF_SETHIDE(true, comp(1496, 102));  // 6awe1_onboarding:tab3_current
    IF_SETHIDE(false, comp(1496, 91));  // 6awe1_onboarding:tab2
    IF_SETHIDE(false, comp(1496, 101));  // 6awe1_onboarding:tab2_current
    IF_SETHIDE(true, comp(1496, 96));  // 6awe1_onboarding:tab2_locked
    varbitplayer_18639 = 2;
    if ((int0 == 0)) {
        varbitplayer_18640 = 1;
    } else {
        varbitplayer_18640 = script8960(2);
        if (((script8960(0) == 0) && (script8960(1) == 0))) {
            IF_SETHIDE(false, comp(1496, 246));  // 6awe1_onboarding:back_button_disable
        };
    };
    IF_SETHIDE(true, comp(1496, 224));  // 6awe1_onboarding:tele_button
    IF_SETHIDE(false, comp(1496, 225));  // 6awe1_onboarding:continue_button
    return;
}