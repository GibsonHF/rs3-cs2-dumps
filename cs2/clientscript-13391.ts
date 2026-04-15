//
function script13391(int0: component, int1: int, int2: unknown_int): void {
    var int3 = MIN(255, (MAX(0, (CLIENTCLOCK() - int1)) * 4));
    var int4 = enum_getvalue(0, 73, 12591 as cs2enum, varclient_6040);
    var int5 = -1;
    if ((int2 != -1)) {
        IF_SETTRANS(int3, comp(744, 17));
        IF_SETTRANS(int3, comp(744, 18));
        IF_SETTRANS(int3, comp(744, 19));
        IF_SETTRANS(int3, comp(744, 20));
        IF_SETTRANS(int3, comp(744, 21));
        IF_SETTRANS(int3, comp(744, 22));
        IF_SETTRANS(int3, comp(744, 23));
        IF_SETTRANS(int3, comp(744, 24));
        IF_SETTRANS(int3, comp(744, 25));
    };
    if ((int2 == -1)) {
        IF_SETTRANS(int3, int0);
        if ((int0 == comp(744, 14))) {
            IF_SETTRANS((255 - int3), comp(744, 30));
        };
    };
    if ((int3 == 255)) {
        if ((int0 != comp(-1, 65535))) {
            IF_SETHIDE(true, int0);
            IF_SETONTIMER(callback(), int0);
        };
        if (((int2 != -1) && (int0 == comp(744, 14)))) {
            IF_SETHIDE(true, comp(744, 15));
        };
    };
    return;
}