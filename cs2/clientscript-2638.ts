//
function script2638(): void {
    if ((script6431() == 0)) {
        return;
    };
    var int0 = 126091358;
    if ((TESTBIT(varbitplayer_43335, (script11800(1043) - 1)) == 1)) {
        int0 = 126091270;
    };
    var int1 = IF_GETHEIGHT(96796732);
    var int2 = IF_GETHEIGHT(18087952);
    var int3 = (((int1 - 410) - int2) - 10);
    if (((((varbitplayer_51268 == 0) && (varbitclient_38843 > 0)) && (varplayer_7879 == 1)) && (int3 <= IF_GETHEIGHT(int0)))) {
        IF_SETHIDE(1, int0);
        return;
    };
    IF_SETHIDE(0, int0);
    return;
}