//
function script12013(int0: component, int1: component, int2: int): void {
    var string0 = "Your prayer points, which are needed to keep prayers active.<br>You can restore these by praying at an altar<br>or by drinking a prayer restore potion.";
    var string1 = "";
    if ((varbitplayer_45116 == 1)) {
        switch (varbitplayer_16789) {
            case 0: {
                string1 = `${script8241(1)} here to show the full list of prayers.`;
                break;
            }
            case 1: {
                string1 = `${script8241(1)} here to show the full list of curses.`;
                break;
            }
            default: {
                string1 = `${script8241(1)} here to show the full list of prayers.`;
                break;
            }
        };
    } else {
        switch (varbitplayer_16789) {
            case 0: {
                string1 = `${script8241(1)} here to show only the active prayers and additional information.`;
                break;
            }
            case 1: {
                string1 = `${script8241(1)} here to show only the active curses and additional information.`;
                break;
            }
            default: {
                string1 = `${script8241(1)} here to show only the active prayers and additional information.`;
                break;
            }
        };
    };
    IF_SETPOSITION(0, 0, 0, 0, int0);
    IF_SETSIZE(int2, 0, 1, 1, int0);
    IF_SETPOSITION(0, 0, 2, 0, int1);
    IF_SETSIZE(int2, 0, 0, 1, int1);
    if ((script6431() == true)) {
        IF_SETOP(5, "Info", int0);
        IF_SETONOP(callback(script7774, string1, -2147483645, -2147483643, 0), int0);
        IF_SETOP(5, "Info", int1);
        IF_SETONOP(callback(script7774, string0, -2147483645, -2147483643, 0), int1);
    } else {
        IF_SETONMOUSEREPEAT(callback(script8799, string1, -2147483645, -2147483643), int0);
        IF_SETONMOUSELEAVE(callback(script8805), int0);
        IF_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643), int1);
        IF_SETONMOUSELEAVE(callback(script8805), int1);
    };
    return;
}