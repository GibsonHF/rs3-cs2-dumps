//
function script9893(int0: component): void {
    var int1 = 0;
    if ((SCALE(varbitplayer_1668, script2915(), 100) <= 25)) {
        int1 = MIN(255, MAX(enum_getvalue(0, 0, 5925 as cs2enum, MODULO(CLIENTCLOCK(), 36)), 0));
    } else {
        IF_SETONTIMER(callback(), int0);
    };
    IF_SETTRANS(int1, comp(1504, 6));
    return;
}