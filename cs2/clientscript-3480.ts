//
function script3480(int0: component, int1: component, int2: component, int3: unknown_int, int4: int): void {
    var int5 = IF_GETSCROLLY(int0);
    if ((int3 == 1)) {
        if ((int5 != 0)) {
            int5 = MAX((int5 - 6), 0);
            IF_SETSCROLLPOS(0, int5, int0);
        };
        if ((int5 <= 0)) {
            IF_SETSCROLLPOS(0, 0, int0);
            IF_SETONTIMER(callback(), int0);
            IF_SETHIDE(0, int1);
            IF_SETHIDE(0, int2);
            return;
        };
    } else {
        if ((int5 != 300)) {
            int5 = MIN((int5 + 6), 300);
            IF_SETSCROLLPOS(0, int5, int0);
        };
        if ((int5 >= 300)) {
            IF_SETSCROLLPOS(0, 300, int0);
            IF_SETONTIMER(callback(), int0);
            IF_SETHIDE(0, int1);
            IF_SETHIDE(0, int2);
            return;
        };
    };
    IF_SETHIDE(true, int1);
    IF_SETHIDE(true, int2);
    if (((CLIENTCLOCK() - int4) >= 10)) {
        SOUND_SYNTH(31262, 1, 0);
        IF_SETONTIMER(callback(script3480, int0, int1, int2, int3, CLIENTCLOCK()), int0);
    };
    return;
}