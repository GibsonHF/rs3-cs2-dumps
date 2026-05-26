//[proc,clanwars_ffa]
function script2784(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number, int6: number, int7: number): void {
    if (((int0 == 0) || ((((COORDX(COORD()) >= COORDX(45094272)) && (COORDX(COORD()) <= COORDX(852481535))) && (COORDZ(COORD()) >= COORDZ(45094272))) && (COORDZ(COORD()) <= COORDZ(852481535))))) {
        if ((int6 != -1)) {
            if ((COORDZ(COORD()) < (COORDZ(45094272) + 8))) {
                IF_SETHIDE(0, int6);
                CC_DELETEALL(int6);
                script1086(int6, 0, 0, 0);
            } else {
                IF_SETHIDE(1, int6);
            };
        };
        if (((int7 == 0) && (MODULO(CLIENTCLOCK(), 50) != 0))) {
            return;
        };
        IF_SETCOLOUR(16750623, int4);
        IF_SETCOLOUR(16750623, int5);
        IF_SETGRAPHIC(444, int2);
        IF_SETTEXT("ITEMS ARE<br>SAFE", int5);
    } else if (((int0 == 1) || ((((COORDX(COORD()) >= COORDX(48240000)) && (COORDX(COORD()) <= COORDX(855627263))) && (COORDZ(COORD()) >= COORDZ(48240000))) && (COORDZ(COORD()) <= COORDZ(855627263))))) {
        if ((int6 != -1)) {
            if ((COORDZ(COORD()) < (COORDZ(48240000) + 8))) {
                IF_SETHIDE(0, int6);
                CC_DELETEALL(int6);
                script1086(int6, 0, 0, 0);
            } else {
                IF_SETHIDE(1, int6);
            };
        };
        if (((int7 == 0) && (MODULO(CLIENTCLOCK(), 50) != 0))) {
            return;
        };
        IF_SETCOLOUR(16776960, int4);
        IF_SETCOLOUR(16776960, int5);
        IF_SETGRAPHIC(445, int2);
        IF_SETTEXT("ITEMS ARE<br>DROPPED", int5);
    } else {
        IF_SETHIDE(1, int4);
        IF_SETHIDE(1, int5);
        IF_SETHIDE(1, int2);
        IF_SETHIDE(1, int3);
        if ((int6 != -1)) {
            IF_SETHIDE(1, int6);
        };
        CC_DELETEALL(int1);
        return;
    };
    IF_SETHIDE(0, int4);
    IF_SETHIDE(0, int5);
    IF_SETHIDE(0, int2);
    IF_SETHIDE(0, int3);
    IF_SETTILING(1, int2);
    var int8 = IF_GETFONTMETRICS(int4);
    var int9 = IF_GETFONTMETRICS(int5);
    if (((int8 == -1) || (int9 == -1))) {
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