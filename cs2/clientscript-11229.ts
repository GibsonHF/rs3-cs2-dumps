//
function script11229(int0: number): void {
    IF_SETHIDE(true, comp(1139, 37));  // comscenario:all_tab_selected
    IF_SETHIDE(true, comp(1139, 45));  // comscenario:combat_tab_selected
    IF_SETHIDE(true, comp(1139, 53));  // comscenario:skilling_tab_selected
    IF_SETHIDE(true, comp(1139, 61));  // comscenario:community_tab_selected
    switch (int0) {
        case 74645542: {
            IF_SETHIDE(false, comp(1139, 37));  // comscenario:all_tab_selected
            script6499(0);
            break;
        }
        case 74645550: {
            IF_SETHIDE(false, comp(1139, 45));  // comscenario:combat_tab_selected
            script6499(1);
            break;
        }
        case 74645558: {
            IF_SETHIDE(false, comp(1139, 53));  // comscenario:skilling_tab_selected
            script6499(2);
            break;
        }
        case 74645566: {
            IF_SETHIDE(false, comp(1139, 61));  // comscenario:community_tab_selected
            script6499(3);
            break;
        }
    };
    return;
}