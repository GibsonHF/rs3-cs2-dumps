//
function script1117(int0: number): void {
    IF_SETHIDE(0, 25624741);
    IF_SETTEXT("0", 25624780);
    IF_SETTEXT("0", 25624778);
    var int1 = 5000000;
    if ((varbitplayer_12425 >= 30)) {
        int1 = 7500000;
    };
    if ((int0 == 0)) {
        IF_SETTEXT(`Specify the value to withdraw below.<br>Current coffer: ${TOSTRING_LOCALISED(varbitplayer_10059, 1)} / ${TOSTRING_LOCALISED(int1, 1)}`, 25624576);
    } else {
        IF_SETTEXT(`Specify the value to deposit below.<br>Current coffer: ${TOSTRING_LOCALISED(varbitplayer_10059, 1)} / ${TOSTRING_LOCALISED(int1, 1)}`, 25624576);
    };
    return;
}