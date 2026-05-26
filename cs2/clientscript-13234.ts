//
function script13234(int0: number): void {
    IF_SETHIDE(1, 120914132);
    var int1 = 0;
    var int2 = 0;
    var int3 = -1;
    var int4 = -1;
    var int5 = -1;
    var int6 = -1;
    var int7 = 0;
    var int8 = 0;
    var int9 = 0;
    var int10 = -1;
    var int11 = IF_GETSCROLLY(120913937);
    var int12 = 120913922;
    CC_DELETEALL(int0);
    CC_DELETEALL(120913937);
    CC_DELETEALL(120913920);
    CC_DELETEALL(int12);
    CC_DELETEALL(120913938);
    while ((int1 < 11)) {
        script13235(int1, 1, 0, 1, int8);
        script13237(int1, 1, -1, int8);
        int1 = (int1 + 1);
    };
    var int13 = -1;
    var int14 = 0;
    int1 = 0;
    while (((int1 < 11) && (int7 == 0))) {
        [int10, int3, int4] = script13113(int1);
        if ((int10 == -1)) {
            int7 = 1;
        };
        if ((int7 == 0)) {
            script13237(int1, 0, 0, int8);
            script13238(int1, 0);
            [int8, int9] = script13239(int1, int10, int0, int12, int8, int3, int9, 0, 0);
            int2 = (int2 + 1);
        };
        int1 = (int1 + 1);
    };
    var int15 = -1;
    if ((int8 < IF_GETHEIGHT(120913937))) {
        IF_SETSCROLLSIZE(0, 0, 120913937);
        IF_SETSCROLLPOS(0, 0, 120913937);
        IF_SETPOSITION(0, IF_GETY(120913938), 2, 0, 120913938);
        int15 = 0;
    } else {
        IF_SETSCROLLSIZE(0, int8, 120913937);
        IF_SETSCROLLPOS(0, int11, 120913937);
        script7791(120913920, 120913937);
        IF_SETPOSITION(18, IF_GETY(120913938), 2, 0, 120913938);
        int15 = 1;
    };
    while ((int2 < 11)) {
        [int8, int9] = script13239(int1, int10, int0, int12, int8, int3, int9, 1, int4);
        int2 = (int2 + 1);
    };
    int1 = 0;
    while ((int1 < 11)) {
        script13236(int1, int15);
        int1 = (int1 + 1);
    };
    return;
}