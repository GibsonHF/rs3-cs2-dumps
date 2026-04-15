//
function script6605(int0: component): void {
    CC_DELETEALL(int0);
    var int1 = 0;
    var int2 = 0;
    var int3 = 0;
    var int4 = 0;
    var int5 = 0;
    var int6 = 100;
    var int7 = 0;
    var int8 = 0;
    if ((IF_FIND(comp(1324, 13)) == 1)) {
        int3 = CC_GETX();
        int4 = CC_GETY();
        int1 = CC_GETX();
        int2 = CC_GETY();
    };
    while ((int5 < int6)) {
        CC_CREATE(int0, 4, int5);
        CC_SETSIZE(21, 21, 0, 0);
        CC_SETPOSITION(int1, int2, 0, 0);
        if ((MODULO(++int5, 10) == 0)) {
            int1 = int3;
            int2 = (int2 + 21);
        } else {
            int1 = (21 + int1);
        };
    };
    if ((IF_FIND(comp(1324, 16)) == 1)) {
        int3 = CC_GETX();
        int4 = CC_GETY();
        int1 = CC_GETX();
        int2 = CC_GETY();
        int8 = (CC_GETHEIGHT() + CC_GETY());
    };
    int6 = ENUM_GETOUTPUTCOUNT(6060 as cs2enum);
    int6 = (int6 + int5);
    int7 = 0;
    var int9 = 0;
    var int10 = 0;
    while ((int5 < int6)) {
        CC_CREATE(int0, 5, int5);
        if ((enum_getvalue(0, 0, 6060 as cs2enum, int7) == 1)) {
            CC_SETGRAPHIC(12168 as graphic);
            [int9, int10] = [20, 20];
        };
        if ((enum_getvalue(0, 0, 6060 as cs2enum, int7) == 2)) {
            CC_SETGRAPHIC(12166 as graphic);
            [int9, int10] = [40, 20];
        };
        if ((enum_getvalue(0, 0, 6060 as cs2enum, int7) == 3)) {
            CC_SETGRAPHIC(12162 as graphic);
            [int9, int10] = [60, 20];
        };
        if ((enum_getvalue(0, 0, 6060 as cs2enum, int7) == 4)) {
            CC_SETGRAPHIC(12158 as graphic);
            [int9, int10] = [80, 20];
        };
        CC_SETSIZE(int9, int10, 0, 0);
        CC_SETPOSITION(int1, int2, 0, 0);
        int2 = ((int2 + int10) + 1);
        CC_SETONDRAG(callback(script6608, -2147483645, -2147483643, -2147483647, -2147483646));
        CC_SETONDRAGCOMPLETE(callback(script6609, -2147483645, -2147483643, -2147483642, -2147483641, -2147483647, -2147483646));
        CC_SETDRAGRENDERBEHAVIOUR(2);
        CC_SETDRAGDEADZONE(14);
        int5 = (int5 + 1);
        int7 = (int7 + 1);
        if ((++int2 > int8)) {
            int2 = int4;
            int1 = (int1 + 84);
        };
    };
    IF_SETONVARTRANSMIT(callback(script6606, int0, 2138, 2139, 2140, 3), int0);
    return;
}