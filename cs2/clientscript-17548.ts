//
function script17548(): void {
    if ((varplayer_10946 == -1 as struct)) {
        IF_SETONTIMER(callback(script17548), comp(1181, 2));
        return;
    };
    IF_SETONTIMER(callback(), comp(1181, 2));
    IF_SETHIDE(1, 77398019);
    IF_SETHIDE(1, 77398023);
    IF_SETHIDE(1, 77398020);
    IF_SETHIDE(1, 77398021);
    var int0 = 180;
    switch (script11319()) {
        case 29: {
            int0 = 180;
            break;
        }
        case 34: {
            int0 = 175;
            break;
        }
        case 38: {
            int0 = 195;
            break;
        }
    };
    IF_SETSIZE(int0, IF_GETHEIGHT(comp(1181, 6)), 0, 0, comp(1181, 6));
    var int1 = 0;
    if ((struct_getparam(varplayer_10946, 8991) > 0)) {
        int1 = (CLIENTCLOCK() + (struct_getparam(varplayer_10946, 8991) * 30));
        IF_SETONTIMER(callback(script18323, int1), comp(1181, 0));
    } else {
        script18324();
    };
    if ((struct_getparam(varplayer_10946, 8990) != -1 as struct)) {
        IF_SETHIDE(false, comp(1181, 1));
        IF_SETPOSITION(0, 25, 1, 0, comp(1171, 29));
        IF_SETPOSITION(0, 40, 1, 0, comp(1181, 2));
        IF_SETSIZE(0, 99, 1, 0, comp(1171, 29));
    } else {
        IF_SETHIDE(true, comp(1181, 1));
        IF_SETPOSITION(0, 40, 1, 0, comp(1171, 29));
        IF_SETPOSITION(0, 0, 1, 0, comp(1181, 2));
        IF_SETSIZE(118, 99, 1, 0, comp(1171, 29));
    };
    return;
}