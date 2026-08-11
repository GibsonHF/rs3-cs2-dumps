//
function script1117(int0: number): void {
    IF_SETHIDE(false, comp(391, 165));  // misc_both_manage:noclick
    IF_SETTEXT("0", comp(391, 204));  // misc_both_manage:text_input_display
    IF_SETTEXT("0", comp(391, 202));  // misc_both_manage:text_input_listen
    var int1 = 5000000;
    if ((varbitplayer_12425 >= 30)) {
        int1 = 7500000;
    };
    if ((int0 == 0)) {
        IF_SETTEXT(`Specify the value to withdraw below.<br>Current coffer: ${TOSTRING_LOCALISED(varbitplayer_10059, 1)} / ${TOSTRING_LOCALISED(int1, 1)}`, comp(391, 0));  // misc_both_manage:coffer_change_text
    } else {
        IF_SETTEXT(`Specify the value to deposit below.<br>Current coffer: ${TOSTRING_LOCALISED(varbitplayer_10059, 1)} / ${TOSTRING_LOCALISED(int1, 1)}`, comp(391, 0));  // misc_both_manage:coffer_change_text
    };
    return;
}