//
function script11697(): void {
    var string0 = "24";
    var string1 = "48";
    if ((varbitplayer_28671 == 1)) {
        IF_SETCOLOUR(13107200, 108331009);
        IF_SETCOLOUR(13107200, 108331010);
    } else {
        IF_SETCOLOUR(65280, 108331009);
        IF_SETCOLOUR(65280, 108331010);
    };
    if ((varbitplayer_28665 == 0)) {
        IF_SETHIDE(0, 108331040);
        IF_SETCOLOUR(6579300, 108331037);
        IF_SETCOLOUR(6579300, 108331038);
    } else {
        IF_SETHIDE(1, 108331040);
        if ((varbitplayer_28672 == 1)) {
            IF_SETCOLOUR(13107200, 108331037);
            IF_SETCOLOUR(13107200, 108331038);
        } else {
            IF_SETCOLOUR(65280, 108331037);
            IF_SETCOLOUR(65280, 108331038);
        };
    };
    IF_SETTEXT(`You can only reset the Mazcab raid once every ${TEXT_SWITCH(script12950(), string0, string1)} hours.<br>Ensure you wish to reset your progress before you continue!`, 108331023);
    var string2 = `Boss progress can only be reset once every ${TEXT_SWITCH(script12950(), string0, string1)} hours.`;
    IF_SETONMOUSEREPEAT(callback(script8799, string2, -2147483645, -2147483643), 108331019);
    if ((varbitplayer_28678 == 1)) {
        IF_SETHIDE(0, 108331019);
    } else {
        IF_SETHIDE(1, 108331019);
    };
    IF_SETHIDE(1, 108331020);
    return;
}