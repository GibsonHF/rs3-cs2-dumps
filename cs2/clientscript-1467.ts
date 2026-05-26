//
function script1467(int0: number, int1: number): void {
    var int0 = (int0 - 50);
    var int1 = (50 - int1);
    var int2 = ((int0 * int0) + (int1 * int1));
    if (((int2 < 625) || (int2 > 2500))) {
        script11525();
        return;
    };
    var int3 = script11108(int0, int1);
    var int4 = SCALE(int3, 360, 32);
    IF_SETCOLOUR(HSVTORGB(script11527(int4, varplayer_5456)), 106627107);
    script11521(int4);
    if (((varclient_4887 != -1) && (CC_FIND(106627106, varclient_4887) == 1))) {
        CC_SETHIDE(1);
    };
    varclient_4887 = int4;
    if ((CC_FIND(106627106, varclient_4887) == 1)) {
        CC_SETHIDE(0);
    };
    return;
}