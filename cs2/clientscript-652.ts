//
function script652(int0: int, int1: int, int2: int, int3: int, int4: int, int5: component, int6: int, int7: unknown_int, int8: unknown_int, int9: unknown_int): int {
    CC_CREATE(int5, 3, int6);
    CC_SETPOSITION(int0, int1, 0, 0);
    CC_SETSIZE(int2, int3, 0, 0);
    CC_SETCOLOUR(0);
    CC_SETFILL(0);
    var string0 = `${TOSTRING_LOCALISED(STOCKMARKET_GETOFFERCOMPLETEDCOUNT(int4, 0), 1)} / ${TOSTRING_LOCALISED(STOCKMARKET_GETOFFERCOUNT(int4, 0), 1)}`;
    if (((int7 == 1) && (STOCKMARKET_ISOFFEREMPTY(int4, 0) == 0))) {
        script3537(string0);
    };
    var int6 = (int6 + 1);
    var int10 = (int0 + 1);
    var int11 = (int1 + 1);
    var int12 = (int2 - 2);
    var int13 = (int3 - 2);
    CC_CREATE(int5, 3, int6);
    CC_SETPOSITION(int10, int11, 0, 0);
    CC_SETSIZE(int12, int13, 0, 0);
    CC_SETCOLOUR(3155232);
    CC_SETTRANS(100);
    CC_SETFILL(1);
    int6 = (int6 + 1);
    CC_CREATE(int5, 3, int6);
    if ((STOCKMARKET_ISOFFEREMPTY(int4, 0) == 0)) {
        CC_SETPOSITION((int0 + 1), (int1 + 1), 0, 0);
        CC_SETTRANS(0);
        CC_SETFILL(1);
        if ((STOCKMARKET_ISOFFERFINISHED(int4, 0) == 1)) {
            CC_SETSIZE(int12, int13, 0, 0);
            if ((STOCKMARKET_GETOFFERCOMPLETEDCOUNT(int4, 0) == STOCKMARKET_GETOFFERCOUNT(int4, 0))) {
                CC_SETCOLOUR(4162078);
            } else {
                CC_SETCOLOUR(9043984);
            };
        } else {
            CC_SETSIZE(SCALE(STOCKMARKET_GETOFFERCOMPLETEDCOUNT(int4, 0), STOCKMARKET_GETOFFERCOUNT(int4, 0), int12), int13, 0, 0);
            CC_SETCOLOUR(13011713);
        };
    };
    int6 = (int6 + 1);
    if (((int9 == 0) || ((STOCKMARKET_ISOFFERFINISHED(int4, 0) == 1) && (STOCKMARKET_GETOFFERCOMPLETEDCOUNT(int4, 0) == STOCKMARKET_GETOFFERCOUNT(int4, 0))))) {
        return int6;
    };
    CC_CREATE(int5, 4, int6);
    CC_SETPOSITION(int0, int1, 0, 0);
    CC_SETSIZE(int2, int3, 0, 0);
    CC_SETTEXT(string0);
    CC_SETTEXTSHADOW(true);
    CC_SETCOLOUR(16777215);
    CC_SETTEXTALIGN(1, 1, 0);
    CC_SETTEXTFONT(26 as fontmetrics);
    return ++int6;
}