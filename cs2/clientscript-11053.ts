//
function script11053(int0: number): void {
    if ((int0 == -1)) {
        var int0 = varplayer_5144;
    };
    var int1 = 0;
    int1 = struct_getparam(int0, 3387);
    var int2 = struct_getparam(int0, 4829);
    if ((struct_getparam(int0, 3814) > 0)) {
        IF_SETHIDE(false, comp(1591, 43));  // boss_instance:playercount_disabled
        IF_SETHIDE(false, comp(1591, 49));  // boss_instance:protection_disabled
    } else {
        IF_SETHIDE(true, comp(1591, 43));  // boss_instance:playercount_disabled
    };
    if ((struct_getparam(int0, 3042) == true)) {
        IF_SETHIDE(true, comp(1591, 82));  // boss_instance:spawnspeed_disabled
    } else {
        IF_SETHIDE(false, comp(1591, 82));  // boss_instance:spawnspeed_disabled
    };
    if ((struct_getparam(int0, 3814) > 0)) {
        varbitplayer_27138 = struct_getparam(int0, 3814);
    } else if ((varbitplayer_27145 != 0)) {
        varbitplayer_27138 = MIN(varbitplayer_27145, int1);
    } else if ((varbitplayer_27138 == 0)) {
        varbitplayer_27138 = int1;
    };
    if ((struct_getparam(int0, 4090) == true)) {
        if ((varbitplayer_27146 != 0)) {
            varbitplayer_27139 = MIN(varbitplayer_27146, COMLEVEL_ACTIVE());
        } else if ((varbitplayer_27139 == 0)) {
            varbitplayer_27139 = COMLEVEL_ACTIVE();
        };
    } else {
        varbitplayer_27139 = 0;
    };
    if (((struct_getparam(int0, 3042) == true) && (varbitplayer_27147 != 0))) {
        varbitplayer_27140 = varbitplayer_27147;
    };
    IF_SETTEXT(struct_getparam(int0, 3815), comp(1591, 9));  // boss_instance:bossname_text
    if (((struct_getparam(int0, 3345) != -1) || (struct_getparam(int0, 4826) == 1))) {
        if ((struct_getparam(int0, 7426) == 0)) {
            IF_SETHIDE(false, comp(1591, 10));  // boss_instance:hardmode_layer
        } else {
            IF_SETHIDE(true, comp(1591, 10));  // boss_instance:hardmode_layer
        };
    } else {
        IF_SETHIDE(true, comp(1591, 10));  // boss_instance:hardmode_layer
    };
    if ((struct_getparam(int0, 7433) == 1)) {
        IF_SETHIDE(true, comp(1591, 11));  // boss_instance:practicemode_layer
    };
    IF_SETTEXT(`${struct_getparam(int0, 8574)}:`, comp(1591, 108));  // boss_instance:practicemode
    if ((varbitplayer_27141 == 1)) {
        IF_SETHIDE(false, comp(1591, 60));  // boss_instance:checkbox_selected_layer
        IF_SETHIDE(true, comp(1591, 62));  // boss_instance:checkbox_deselected_layer
        IF_SETHIDE(false, comp(1591, 113));  // boss_instance:practicemode_checkbox_deselected_disabled_layer
    } else {
        IF_SETHIDE(true, comp(1591, 60));  // boss_instance:checkbox_selected_layer
        IF_SETHIDE(false, comp(1591, 62));  // boss_instance:checkbox_deselected_layer
        IF_SETHIDE(true, comp(1591, 113));  // boss_instance:practicemode_checkbox_deselected_disabled_layer
    };
    varbitplayer_27143 = varbitplayer_27150;
    return;
}