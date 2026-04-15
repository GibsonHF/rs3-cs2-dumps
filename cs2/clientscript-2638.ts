//
function script2638(): void {
    if ((script6431() == false)) {
        return;
    };
    var int0 = comp(1924, 94);
    if ((TESTBIT(varbitplayer_43335, (script11800(1043) - 1)) == 1)) {
        int0 = comp(1924, 6);
    };
    var int1 = IF_GETHEIGHT(comp(1477, 60));
    var int2 = IF_GETHEIGHT(comp(276, 16));
    var int3 = (((int1 - 410) - int2) - 10);
    if (((((varbitplayer_51268 == 0) && (varbitclient_38843 > 0)) && (varplayer_7879 == 1)) && (int3 <= IF_GETHEIGHT(int0)))) {
        IF_SETHIDE(true, int0);
        return;
    };
    IF_SETHIDE(false, int0);
    return;
}