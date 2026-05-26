//
function script12382(int0: number, int1: number): void {
    varclient_5912 = int0;
    if ((varclient_5209 == true)) {
        IF_SETHIDE(1, 114425894);
        IF_SETHIDE(0, 114425857);
    } else {
        IF_SETHIDE(0, 114425894);
        IF_SETHIDE(1, 114425857);
    };
    IF_SETGRAPHIC(enum_getvalue(0, 23, 10948 as cs2enum, int0), 114425928);
    IF_SETGRAPHIC(enum_getvalue(0, 23, 10949 as cs2enum, int0), 114425929);
    var int2 = 20;
    if ((INV_GETOBJ(94, 17) == 39241)) {
        int2 = SCALE(20, 100, 150);
    };
    var int3 = (92 + SCALE(92, 400, SCALE(100, int2, int0)));
    var int4 = 36;
    if ((int0 > 0)) {
        if ((varclient_5209 == true)) {
            IF_SETHIDE(0, 114425888);
            if ((int1 == 1)) {
                varclient_5916 = (CLIENTCLOCK() + (30 * 30));
                IF_SETONTIMER(callback(script12384, CLIENTCLOCK(), varclient_5916), 114425856);
            };
        } else {
            IF_SETSIZE(int3, int4, 0, 0, 114425927);
            IF_SETONTIMER(callback(script12383, 0, 30, int3, int4, 16), 114425927);
            IF_SETHIDE(0, 114425925);
            if ((int1 == 1)) {
                varclient_5916 = (CLIENTCLOCK() + (30 * 30));
                IF_SETONTIMER(callback(script12384, CLIENTCLOCK(), varclient_5916), 114425856);
            };
        };
    } else {
        IF_SETHIDE(1, 114425925);
        IF_SETHIDE(1, 114425888);
    };
    if ((int0 == int2)) {
        IF_SETCOLOUR(16711680, 114425928);
        IF_SETCOLOUR(16711680, 114425929);
        IF_SETCOLOUR(16711680, 114425930);
        IF_SETCOLOUR(16711680, 114425931);
        IF_SETTEXT(`<col=FFFFFF>Multiplier: <col=FF0000>${inttostring((100 + (10 * int0)), 10)}%</col>`, 114425891);
    } else {
        IF_SETCOLOUR(16777215, 114425928);
        IF_SETCOLOUR(16777215, 114425929);
        IF_SETCOLOUR(16777215, 114425930);
        IF_SETCOLOUR(16777215, 114425931);
        IF_SETTEXT(`<col=FFFFFF>Multiplier: <col=FFFFFF>${inttostring((100 + (10 * int0)), 10)}%</col>`, 114425891);
    };
    return;
}