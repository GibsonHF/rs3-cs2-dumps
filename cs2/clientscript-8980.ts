//
function script8980(int0: number): void {
    varbitplayer_18640 = (int0 + 1);
    IF_SETHIDE(true, comp(1496, 213));  // 6awe1_onboarding:welcome_layer
    IF_SETHIDE(true, comp(1496, 218));  // 6awe1_onboarding:html5_content
    IF_SETHIDE(true, comp(1496, 210));  // 6awe1_onboarding:newui_overview
    IF_SETHIDE(true, comp(1496, 205));  // 6awe1_onboarding:newui_moving
    IF_SETHIDE(true, comp(1496, 195));  // 6awe1_onboarding:newui_adding
    IF_SETHIDE(true, comp(1496, 187));  // 6awe1_onboarding:newui_swapping
    IF_SETHIDE(true, comp(1496, 115));  // 6awe1_onboarding:world_event
    IF_SETHIDE(true, comp(1496, 116));  // 6awe1_onboarding:combat_academy
    IF_SETHIDE(true, comp(1496, 121));  // 6awe1_onboarding:combat_actionbar
    IF_SETHIDE(true, comp(1496, 137));  // 6awe1_onboarding:combat_features
    IF_SETHIDE(true, comp(1496, 146));  // 6awe1_onboarding:newui_edit
    IF_SETHIDE(true, comp(1496, 150));  // 6awe1_onboarding:newui_options
    IF_SETHIDE(true, comp(1496, 157));  // 6awe1_onboarding:newui_menu
    var int1 = comp(-1, 65535);
    switch (varbitplayer_18639) {
        case 0: {
            int1 = comp(1496, 213);  // 6awe1_onboarding:welcome_layer
            break;
        }
        case 1: {
            int1 = comp(1496, 218);  // 6awe1_onboarding:html5_content
            break;
        }
        case 2: {
            switch (varbitplayer_18640) {
                case 1: {
                    int1 = comp(1496, 210);  // 6awe1_onboarding:newui_overview
                    break;
                }
                case 2: {
                    int1 = comp(1496, 205);  // 6awe1_onboarding:newui_moving
                    break;
                }
                case 3: {
                    int1 = comp(1496, 195);  // 6awe1_onboarding:newui_adding
                    break;
                }
                case 4: {
                    int1 = comp(1496, 187);  // 6awe1_onboarding:newui_swapping
                    break;
                }
                case 5: {
                    int1 = comp(1496, 157);  // 6awe1_onboarding:newui_menu
                    break;
                }
                case 6: {
                    int1 = comp(1496, 150);  // 6awe1_onboarding:newui_options
                    break;
                }
                case 7: {
                    int1 = comp(1496, 146);  // 6awe1_onboarding:newui_edit
                    break;
                }
            };
            break;
        }
        case 3: {
            switch (varbitplayer_18640) {
                case 1: {
                    int1 = comp(1496, 137);  // 6awe1_onboarding:combat_features
                    break;
                }
                case 2: {
                    int1 = comp(1496, 121);  // 6awe1_onboarding:combat_actionbar
                    break;
                }
                case 3: {
                    int1 = comp(1496, 116);  // 6awe1_onboarding:combat_academy
                    break;
                }
            };
            break;
        }
        case 4: {
            int1 = comp(1496, 115);  // 6awe1_onboarding:world_event
            break;
        }
    };
    IF_SETHIDE(false, int1);
    script8957(script8960(varbitplayer_18639), MAX(0, (varbitplayer_18640 + 0)));
    return;
}