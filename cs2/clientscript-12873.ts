//
function script12873(int0: struct, int1: unknown_int, int2: int, int3: int, int4: int): void {
    if ((int0 == -1 as struct)) {
        return;
    };
    varclient_5879 = int2;
    varclient_5880 = (DATE_MINUTES_FROMRUNEDAY((struct_getparam(int0, 6133) + 1)) - (int3 + 1));
    varclient_5881 = int4;
    if ((varclient_5879 < struct_getparam(int0, 6132))) {
        return;
    };
    var int5 = comp(1802, 64);
    var int6 = comp(1802, 66);
    var int7 = comp(1802, 101);
    var int8 = comp(1802, 157);
    var int9 = comp(1802, 7);
    var int10 = comp(1802, 0);
    if (((int0 == 9802 as struct) || (int0 == 40974 as struct))) {
        int5 = comp(1930, 98);
        int6 = comp(1930, 37);
        int7 = comp(1930, 92);
        int8 = comp(1930, 90);
        int10 = comp(1930, 59);
    };
    if ((int1 == 2)) {
        IF_SETHIDE(true, int5);
        IF_SETHIDE(true, int6);
        if ((struct_getparam(int0, 7898) == 0)) {
            IF_SETHIDE(false, int7);
        };
    } else {
        IF_SETHIDE(false, int6);
        IF_SETHIDE(true, int7);
        IF_SETHIDE(false, int8);
        IF_SETHIDE(false, int9);
        script12889(int0);
        IF_SETONTIMER(callback(script12888, int0), int10);
    };
    script12876(int0);
    script12881(int0);
    script12885(int0);
    return;
}