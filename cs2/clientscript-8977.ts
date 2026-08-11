//
function script8977(): void {
    IF_SETHIDE(true, comp(1496, 115));  // 6awe1_onboarding:world_event
    IF_SETHIDE(true, comp(1496, 116));  // 6awe1_onboarding:combat_academy
    IF_SETHIDE(true, comp(1496, 121));  // 6awe1_onboarding:combat_actionbar
    IF_SETHIDE(true, comp(1496, 137));  // 6awe1_onboarding:combat_features
    IF_SETHIDE(true, comp(1496, 146));  // 6awe1_onboarding:newui_edit
    IF_SETHIDE(true, comp(1496, 150));  // 6awe1_onboarding:newui_options
    IF_SETHIDE(true, comp(1496, 157));  // 6awe1_onboarding:newui_menu
    IF_SETHIDE(true, comp(1496, 187));  // 6awe1_onboarding:newui_swapping
    IF_SETHIDE(true, comp(1496, 195));  // 6awe1_onboarding:newui_adding
    IF_SETHIDE(true, comp(1496, 205));  // 6awe1_onboarding:newui_moving
    IF_SETHIDE(true, comp(1496, 210));  // 6awe1_onboarding:newui_overview
    IF_SETHIDE(true, comp(1496, 213));  // 6awe1_onboarding:welcome_layer
    IF_SETHIDE(true, comp(1496, 218));  // 6awe1_onboarding:html5_content
    var int0 = comp(-1, 65535);
    switch (varbitplayer_18639) {
        case 0: {
            IF_SETHIDE(false, comp(1496, 213));  // 6awe1_onboarding:welcome_layer
            break;
        }
        case 1: {
            IF_SETHIDE(false, comp(1496, 218));  // 6awe1_onboarding:html5_content
            break;
        }
        case 2: {
            int0 = script8978((varbitplayer_18640 - 1));
            if ((int0 != comp(-1, 65535))) {
                IF_SETHIDE(false, int0);
            };
            break;
        }
        case 3: {
            int0 = script8979(varbitplayer_18640);
            if ((int0 != comp(-1, 65535))) {
                IF_SETHIDE(false, int0);
            };
            break;
        }
        case 4: {
            IF_SETHIDE(false, comp(1496, 115));  // 6awe1_onboarding:world_event
            break;
        }
    };
    return;
}