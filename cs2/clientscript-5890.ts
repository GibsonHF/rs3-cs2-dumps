//
function script5890(int0: component, int1: struct): void {
    if (((int0 == comp(-1, 65535)) || (varbitplayer_21682 == 0))) {
        script5892(comp(1430, 251));
        return;
    };
    if ((((varbitplayer_21682 == 1) && (IF_FIND(comp(1430, 251)) == 1)) && (cc_getparam(4132) != int1))) {
        varclient_4098 = -1 as struct;
        CC_SETHIDE(false);
        CC_SETONTIMER(callback(script5891, -2147483645, (CLIENTCLOCK() + 30)));
        CC_SETSIZE(16, 16, 0, 0);
        CC_SETPOSITION((IF_GETX(int0) + 10), (IF_GETY(int0) + 10), 0, 0);
        cc_setparam(4132, int1);
        script6571(93716731, 15777401);
    };
    return;
}