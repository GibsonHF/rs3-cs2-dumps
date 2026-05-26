//
function script13391(int0: number, int1: number, int2: number): void {
    var int3 = MIN(255, (MAX(0, (CLIENTCLOCK() - int1)) * 4));
    var int4 = enum_getvalue(0, 73, 12591 as cs2enum, varclient_6040);
    var int5 = -1;
    if ((int2 != -1)) {
        IF_SETTRANS(int3, 48758801);
        IF_SETTRANS(int3, 48758802);
        IF_SETTRANS(int3, 48758803);
        IF_SETTRANS(int3, 48758804);
        IF_SETTRANS(int3, 48758805);
        IF_SETTRANS(int3, 48758806);
        IF_SETTRANS(int3, 48758807);
        IF_SETTRANS(int3, 48758808);
        IF_SETTRANS(int3, 48758809);
    };
    if ((int2 == -1)) {
        IF_SETTRANS(int3, int0);
        if ((int0 == 48758798)) {
            IF_SETTRANS((255 - int3), 48758814);
        };
    };
    if ((int3 == 255)) {
        if ((int0 != -1)) {
            IF_SETHIDE(1, int0);
            IF_SETONTIMER(callback(), int0);
        };
        if (((int2 != -1) && (int0 == 48758798))) {
            IF_SETHIDE(1, 48758799);
        };
    };
    return;
}