//
function script11697(): void {
    var string0 = "24";
    var string1 = "48";
    if ((varbitplayer_28671 == 1)) {
        IF_SETCOLOUR(13107200, comp(1653, 1));  // raid1lock:bossbg1
        IF_SETCOLOUR(13107200, comp(1653, 2));  // raid1lock:bossbg2
    } else {
        IF_SETCOLOUR(65280, comp(1653, 1));  // raid1lock:bossbg1
        IF_SETCOLOUR(65280, comp(1653, 2));  // raid1lock:bossbg2
    };
    if ((varbitplayer_28665 == 0)) {
        IF_SETHIDE(false, comp(1653, 32));  // raid1lock:boss_lock2
        IF_SETCOLOUR(6579300, comp(1653, 29));  // raid1lock:bossbg3
        IF_SETCOLOUR(6579300, comp(1653, 30));  // raid1lock:bossbg4
    } else {
        IF_SETHIDE(true, comp(1653, 32));  // raid1lock:boss_lock2
        if ((varbitplayer_28672 == 1)) {
            IF_SETCOLOUR(13107200, comp(1653, 29));  // raid1lock:bossbg3
            IF_SETCOLOUR(13107200, comp(1653, 30));  // raid1lock:bossbg4
        } else {
            IF_SETCOLOUR(65280, comp(1653, 29));  // raid1lock:bossbg3
            IF_SETCOLOUR(65280, comp(1653, 30));  // raid1lock:bossbg4
        };
    };
    IF_SETTEXT(`You can only reset the Mazcab raid once every ${TEXT_SWITCH(script12950(), string0, string1)} hours.<br>Ensure you wish to reset your progress before you continue!`, comp(1653, 15));  // raid1lock:raid1_text
    var string2 = `Boss progress can only be reset once every ${TEXT_SWITCH(script12950(), string0, string1)} hours.`;
    IF_SETONMOUSEREPEAT(callback(script8799, string2, -2147483645, -2147483643), comp(1653, 11));  // raid1lock:reset_locked_layer
    if ((varbitplayer_28678 == 1)) {
        IF_SETHIDE(false, comp(1653, 11));  // raid1lock:reset_locked_layer
    } else {
        IF_SETHIDE(true, comp(1653, 11));  // raid1lock:reset_locked_layer
    };
    IF_SETHIDE(true, comp(1653, 12));  // raid1lock:reset_progress_layer
    return;
}