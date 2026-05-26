//
function script12873(int0: number, int1: number, int2: number, int3: number, int4: number): void {
    if ((int0 == -1)) {
        return;
    };
    varclient_5879 = int2;
    varclient_5880 = (DATE_MINUTES_FROMRUNEDAY((struct_getparam(int0, 6133) + 1)) - (int3 + 1));
    varclient_5881 = int4;
    if ((varclient_5879 < struct_getparam(int0, 6132))) {
        return;
    };
    var int5 = 118095936;
    var int6 = 118095938;
    var int7 = 118095973;
    var int8 = 118096029;
    var int9 = 118095879;
    var int10 = 118095872;
    if (((int0 == 9802) || (int0 == 40974))) {
        int5 = 126484578;
        int6 = 126484517;
        int7 = 126484572;
        int8 = 126484570;
        int10 = 126484539;
    };
    if ((int1 == 2)) {
        IF_SETHIDE(1, int5);
        IF_SETHIDE(1, int6);
        if ((struct_getparam(int0, 7898) == 0)) {
            IF_SETHIDE(0, int7);
        };
    } else {
        IF_SETHIDE(0, int6);
        IF_SETHIDE(1, int7);
        IF_SETHIDE(0, int8);
        IF_SETHIDE(0, int9);
        script12889(int0);
        IF_SETONTIMER(callback(script12888, int0), int10);
    };
    script12876(int0);
    script12881(int0);
    script12885(int0);
    return;
}