//
function script1117(int0: unknown_int): void {
    IF_SETHIDE(false, comp(391, 165));
    IF_SETTEXT("0", comp(391, 204));
    IF_SETTEXT("0", comp(391, 202));
    var int1 = 5000000;
    if ((varbitplayer_12425 >= 30)) {
        int1 = 7500000;
    };
    if ((int0 == 0)) {
        IF_SETTEXT(`Specify the value to withdraw below.<br>Current coffer: ${TOSTRING_LOCALISED(varbitplayer_10059, 1)} / ${TOSTRING_LOCALISED(int1, 1)}`, comp(391, 0));
    } else {
        IF_SETTEXT(`Specify the value to deposit below.<br>Current coffer: ${TOSTRING_LOCALISED(varbitplayer_10059, 1)} / ${TOSTRING_LOCALISED(int1, 1)}`, comp(391, 0));
    };
    return;
}