//
function script12382(int0: int, int1: unknown_int): void {
    varclient_5912 = int0;
    if ((varclient_5209 == true)) {
        IF_SETHIDE(true, comp(1746, 38));
        IF_SETHIDE(false, comp(1746, 1));
    } else {
        IF_SETHIDE(false, comp(1746, 38));
        IF_SETHIDE(true, comp(1746, 1));
    };
    stack(enum_getvalue(0, 23, 10948 as cs2enum, int0));
    stack(114425928);
    IF_SETGRAPHIC();
    stack(0);
    stack(23);
    stack(10949);
    stack(int0);
    enum_getvalue();
    stack(114425929);
    IF_SETGRAPHIC();
    var int2 = 20;
    if ((INV_GETOBJ(94, 17) == 39241)) {
        int2 = SCALE(20, 100, 150);
    };
    var int3 = (92 + SCALE(92, 400, SCALE(100, int2, int0)));
    var int4 = 36;
    if ((int0 > 0)) {
        if ((varclient_5209 == true)) {
            IF_SETHIDE(false, comp(1746, 32));
            if ((int1 == 1)) {
                varclient_5916 = (CLIENTCLOCK() + (30 * 30));
                IF_SETONTIMER(callback(script12384, CLIENTCLOCK(), varclient_5916), comp(1746, 0));
            };
        } else {
            IF_SETSIZE(int3, int4, 0, 0, comp(1746, 71));
            IF_SETONTIMER(callback(script12383, 0, 30, int3, int4, 16), 114425927);
            IF_SETHIDE(0, 114425925);
            if ((int1 == 1)) {
                varclient_5916 = (CLIENTCLOCK() + (30 * 30));
                IF_SETONTIMER(callback(script12384, CLIENTCLOCK(), varclient_5916), comp(1746, 0));
            };
        };
    } else {
        IF_SETHIDE(true, comp(1746, 69));
        IF_SETHIDE(true, comp(1746, 32));
    };
    if ((int0 == int2)) {
        IF_SETCOLOUR(16711680, comp(1746, 72));
        IF_SETCOLOUR(16711680, comp(1746, 73));
        IF_SETCOLOUR(16711680, comp(1746, 74));
        IF_SETCOLOUR(16711680, comp(1746, 75));
        IF_SETTEXT(`<col=FFFFFF>Multiplier: <col=FF0000>${inttostring((100 + (10 * int0)), 10)}%</col>`, comp(1746, 35));
    } else {
        IF_SETCOLOUR(16777215, comp(1746, 72));
        IF_SETCOLOUR(16777215, comp(1746, 73));
        IF_SETCOLOUR(16777215, comp(1746, 74));
        IF_SETCOLOUR(16777215, comp(1746, 75));
        IF_SETTEXT(`<col=FFFFFF>Multiplier: <col=FFFFFF>${inttostring((100 + (10 * int0)), 10)}%</col>`, comp(1746, 35));
    };
    return;
}