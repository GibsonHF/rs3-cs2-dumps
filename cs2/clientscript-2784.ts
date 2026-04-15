//[proc,clanwars_ffa]
function script2784(int0: unknown_int, int1: component, int2: component, int3: component, int4: component, int5: component, int6: component, int7: unknown_int): void {
    if (((int0 == 0) || ((((COORDX(COORD()) >= COORDX(pos(0,43,86,1,0))) && (COORDX(COORD()) <= COORDX(pos(3,44,87,61,63)))) && (COORDZ(COORD()) >= COORDZ(pos(0,43,86,1,0)))) && (COORDZ(COORD()) <= COORDZ(pos(3,44,87,61,63)))))) {
        if ((int6 != comp(-1, 65535))) {
            if ((COORDZ(COORD()) < (COORDZ(pos(0,43,86,1,0)) + 8))) {
                IF_SETHIDE(false, int6);
                CC_DELETEALL(int6);
                script1086(int6, 0, 0, 0);
            } else {
                IF_SETHIDE(true, int6);
            };
        };
        if (((int7 == 0) && (MODULO(CLIENTCLOCK(), 50) != 0))) {
            return;
        };
        IF_SETCOLOUR(16750623, int4);
        IF_SETCOLOUR(16750623, int5);
        stack(444);
        stack(int2);
        IF_SETGRAPHIC();
        IF_SETTEXT("ITEMS ARE<br>SAFE", int5);
    } else if (((int0 == 1) || ((((COORDX(COORD()) >= COORDX(pos(0,46,86,1,0))) && (COORDX(COORD()) <= COORDX(pos(3,47,87,61,63)))) && (COORDZ(COORD()) >= COORDZ(pos(0,46,86,1,0)))) && (COORDZ(COORD()) <= COORDZ(pos(3,47,87,61,63)))))) {
        if ((int6 != comp(-1, 65535))) {
            if ((COORDZ(COORD()) < (COORDZ(pos(0,46,86,1,0)) + 8))) {
                IF_SETHIDE(false, int6);
                CC_DELETEALL(int6);
                script1086(int6, 0, 0, 0);
            } else {
                IF_SETHIDE(true, int6);
            };
        };
        if (((int7 == 0) && (MODULO(CLIENTCLOCK(), 50) != 0))) {
            return;
        };
        IF_SETCOLOUR(16776960, int4);
        IF_SETCOLOUR(16776960, int5);
        stack(445);
        stack(int2);
        IF_SETGRAPHIC();
        IF_SETTEXT("ITEMS ARE<br>DROPPED", int5);
    } else {
        IF_SETHIDE(true, int4);
        IF_SETHIDE(true, int5);
        IF_SETHIDE(true, int2);
        IF_SETHIDE(true, int3);
        if ((int6 != comp(-1, 65535))) {
            IF_SETHIDE(true, int6);
        };
        CC_DELETEALL(int1);
        return;
    };
    IF_SETHIDE(false, int4);
    IF_SETHIDE(false, int5);
    IF_SETHIDE(false, int2);
    IF_SETHIDE(false, int3);
    IF_SETTILING(1, int2);
    var int8 = IF_GETFONTMETRICS(int4);
    var int9 = IF_GETFONTMETRICS(int5);
    if (((int8 == -1 as fontmetrics) || (int9 == -1 as fontmetrics))) {
        return;
    };
    var int10 = PARAWIDTH(IF_GETTEXT(int4), 512, int8);
    int10 = MAX(PARAWIDTH(IF_GETTEXT(int5), 512, int9), int10);
    int10 = (int10 + 8);
    var int11 = 5;
    IF_SETPOSITION(0, int11, 0, 0, int4);
    var int12 = script15891(IF_GETTEXT(int4), int10, int8, 0);
    IF_SETSIZE(int10, int12, 0, 0, int4);
    int11 = ((int11 + int12) - 1);
    IF_SETPOSITION(0, int11, 1, 0, int3);
    int11 = ((int11 + IF_GETHEIGHT(int3)) - 1);
    IF_SETPOSITION(0, int11, 0, 0, int5);
    var int13 = script15891(IF_GETTEXT(int5), int10, int9, 0);
    IF_SETSIZE(int10, int12, 0, 0, int5);
    int11 = ((int11 + int13) + 3);
    IF_SETSIZE(int10, int11, 0, 0, int1);
    IF_SETSIZE(int10, int11, 0, 0, int2);
    CC_DELETEALL(int1);
    script1086(int1, 0, 0, 0);
    return;
}