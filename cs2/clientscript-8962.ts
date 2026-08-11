//
function script8962(int0: number): void {
    if ((int0 == 1)) {
        script8959();
    } else {
        script675();
    };
    var int1 = 30;
    var int2 = 0;
    var int3 = 0;
    if ((script8960(0) == 0)) {
        IF_SETHIDE(true, comp(1496, 85));  // 6awe1_onboarding:tab0
        IF_SETHIDE(true, comp(1496, 99));  // 6awe1_onboarding:tab0_current
    } else {
        int1 = (int1 + IF_GETWIDTH(comp(1496, 85)));  // 6awe1_onboarding:tab0
        int2 = (int2 + 1);
        int3 = 1;
    };
    if ((script8960(1) == 0)) {
        IF_SETHIDE(true, comp(1496, 86));  // 6awe1_onboarding:tab1
        IF_SETHIDE(true, comp(1496, 100));  // 6awe1_onboarding:tab1_current
    } else {
        IF_SETPOSITION((int1 - 10), 0, 0, 1, comp(1496, 86));  // 6awe1_onboarding:tab1
        IF_SETPOSITION((int1 - 10), 0, 0, 1, comp(1496, 100));  // 6awe1_onboarding:tab1_current
        int1 = (int1 + IF_GETWIDTH(comp(1496, 86)));  // 6awe1_onboarding:tab1
        if ((int2 == 0)) {
            IF_SETHIDE(false, comp(1496, 100));  // 6awe1_onboarding:tab1_current
        };
        int2 = (int2 + 1);
        if ((int3 == 0)) {
            int3 = 2;
        };
    };
    if ((script8960(2) == 0)) {
        IF_SETHIDE(true, comp(1496, 91));  // 6awe1_onboarding:tab2
        IF_SETHIDE(true, comp(1496, 101));  // 6awe1_onboarding:tab2_current
    } else {
        IF_SETPOSITION((int1 - 10), 0, 0, 1, comp(1496, 91));  // 6awe1_onboarding:tab2
        IF_SETPOSITION((int1 - 10), 0, 0, 1, comp(1496, 101));  // 6awe1_onboarding:tab2_current
        int1 = (int1 + IF_GETWIDTH(comp(1496, 91)));  // 6awe1_onboarding:tab2
        if ((int2 == 0)) {
            IF_SETHIDE(false, comp(1496, 101));  // 6awe1_onboarding:tab2_current
        };
        if ((varbitplayer_18636 > 0)) {
            IF_SETHIDE(true, comp(1496, 96));  // 6awe1_onboarding:tab2_locked
        };
        int2 = (int2 + 1);
        if ((int3 == 0)) {
            int3 = 3;
        };
    };
    if ((script8960(3) == 0)) {
        IF_SETHIDE(true, comp(1496, 97));  // 6awe1_onboarding:tab3
        IF_SETHIDE(true, comp(1496, 102));  // 6awe1_onboarding:tab3_current
    } else {
        IF_SETPOSITION((int1 - 10), 0, 0, 1, comp(1496, 97));  // 6awe1_onboarding:tab3
        IF_SETPOSITION((int1 - 10), 0, 0, 1, comp(1496, 102));  // 6awe1_onboarding:tab3_current
        int1 = (int1 + IF_GETWIDTH(comp(1496, 97)));  // 6awe1_onboarding:tab3
        if ((int2 == 0)) {
            IF_SETHIDE(false, comp(1496, 102));  // 6awe1_onboarding:tab3_current
        };
        if ((varbitplayer_18637 > 0)) {
            IF_SETHIDE(true, comp(1496, 108));  // 6awe1_onboarding:tab3_locked
        };
        int2 = (int2 + 1);
        if ((int3 == 0)) {
            int3 = 4;
        };
    };
    if ((script8960(4) == 0)) {
        IF_SETHIDE(true, comp(1496, 98));  // 6awe1_onboarding:tab4
        IF_SETHIDE(true, comp(1496, 103));  // 6awe1_onboarding:tab4_current
    } else {
        int1 = MIN(int1, 340);
        IF_SETPOSITION(int1, 0, 0, 1, comp(1496, 98));  // 6awe1_onboarding:tab4
        IF_SETPOSITION(int1, 0, 0, 1, comp(1496, 103));  // 6awe1_onboarding:tab4_current
        if ((int2 == 0)) {
            IF_SETHIDE(false, comp(1496, 103));  // 6awe1_onboarding:tab4_current
        };
        if ((varbitplayer_18637 > 0)) {
            IF_SETHIDE(true, comp(1496, 113));  // 6awe1_onboarding:tab4_locked
        };
        int2 = (int2 + 1);
        if ((int3 == 0)) {
            int3 = 5;
        };
    };
    if ((int2 == 5)) {
        IF_SETPOSITION(106, 0, 0, 1, comp(1496, 86));  // 6awe1_onboarding:tab1
        IF_SETPOSITION(179, 0, 0, 1, comp(1496, 91));  // 6awe1_onboarding:tab2
        IF_SETPOSITION(258, 0, 0, 1, comp(1496, 97));  // 6awe1_onboarding:tab3
        IF_SETPOSITION(106, 0, 0, 1, comp(1496, 100));  // 6awe1_onboarding:tab1_current
        IF_SETPOSITION(179, 0, 0, 1, comp(1496, 101));  // 6awe1_onboarding:tab2_current
        IF_SETPOSITION(258, 0, 0, 1, comp(1496, 102));  // 6awe1_onboarding:tab3_current
        IF_SETPOSITION(340, 0, 0, 1, comp(1496, 98));  // 6awe1_onboarding:tab4
        IF_SETPOSITION(340, 0, 0, 1, comp(1496, 103));  // 6awe1_onboarding:tab4_current
    };
    if ((int3 > 0)) {
        varbitplayer_18639 = MIN(0, (int3 - 0));
    };
    script8964(0);
    script8957(script8960(varbitplayer_18639), MAX(1, varbitplayer_18640));
    script8977();
    IF_SETHIDE(false, comp(1496, 246));  // 6awe1_onboarding:back_button_disable
    IF_SETHIDE(false, comp(1496, 246));  // 6awe1_onboarding:back_button_disable
    return;
}