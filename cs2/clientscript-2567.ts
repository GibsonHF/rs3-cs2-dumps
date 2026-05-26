//
function script2567(): void {
    var int0 = 0;
    var int1 = 0;
    var int2 = 0;
    var int3 = 0;
    var int4 = -1 as cs2enum;
    var int5 = 5;
    int1 = ((IF_GETWIDTH(comp(842, 0)) - (36 * int5)) / (int5 - 1));
    int2 = ((IF_GETHEIGHT(comp(842, 0)) - 128) / 3);
    if ((INV_TOTAL(93 as inv, 15001 as obj) > 0)) {
        int4 = 1991 as cs2enum;
    } else if ((INV_TOTAL(93 as inv, 15002 as obj) > 0)) {
        int4 = 1995 as cs2enum;
    } else if ((INV_TOTAL(93 as inv, 15003 as obj) > 0)) {
        int4 = 1998 as cs2enum;
    } else if ((INV_TOTAL(93 as inv, 15004 as obj) > 0)) {
        int4 = 1999 as cs2enum;
    };
    while ((int3 == 0)) {
        if ((enum_getvalue(0, 33, int4, int0) != 1511 as obj)) {
            CC_CREATE(comp(842, 0), 5, int0);
            CC_SETSIZE(36, 32, 0, 0);
            CC_SETPOSITION(((36 + int1) * MODULO(int0, int5)), ((int0 / int5) * (32 + int2)), 0, 0);
            CC_SETOBJECT(enum_getvalue(0, 33, int4, int0), -1);
            CC_SETOPBASE(`<col=FF981F>${OC_NAME(enum_getvalue(0, 33, int4, int0))}`);
            CC_SETOP(1, "Withdraw");
            CC_SETOP(2, "Examine");
            CC_SETOUTLINE(1);
            int0 = (int0 + 1);
        } else {
            int3 = 1;
        };
    };
    return;
}