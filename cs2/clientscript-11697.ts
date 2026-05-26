//
function script11697(): void {
    var string0 = "24";
    var string1 = "48";
    if ((varbitplayer_28671 == 1)) {
        IF_SETCOLOUR(13107200, comp(1653, 1));
        IF_SETCOLOUR(13107200, comp(1653, 2));
    } else {
        IF_SETCOLOUR(65280, comp(1653, 1));
        IF_SETCOLOUR(65280, comp(1653, 2));
    };
    if ((varbitplayer_28665 == 0)) {
        IF_SETHIDE(false, comp(1653, 32));
        IF_SETCOLOUR(6579300, comp(1653, 29));
        IF_SETCOLOUR(6579300, comp(1653, 30));
    } else {
        IF_SETHIDE(true, comp(1653, 32));
        if ((varbitplayer_28672 == 1)) {
            IF_SETCOLOUR(13107200, comp(1653, 29));
            IF_SETCOLOUR(13107200, comp(1653, 30));
        } else {
            IF_SETCOLOUR(65280, comp(1653, 29));
            IF_SETCOLOUR(65280, comp(1653, 30));
        };
    };
    IF_SETTEXT(`You can only reset the Mazcab raid once every ${TEXT_SWITCH(script12950(), string0, string1)} hours.<br>Ensure you wish to reset your progress before you continue!`, comp(1653, 15));
    var string2 = `Boss progress can only be reset once every ${TEXT_SWITCH(script12950(), string0, string1)} hours.`;
    IF_SETONMOUSEREPEAT(callback(script8799, string2, -2147483645, -2147483643), 108331019);
    if ((varbitplayer_28678 == 1)) {
        IF_SETHIDE(false, comp(1653, 11));
    } else {
        IF_SETHIDE(true, comp(1653, 11));
    };
    IF_SETHIDE(true, comp(1653, 12));
    return;
}