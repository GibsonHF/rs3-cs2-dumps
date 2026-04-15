//
function script9078(int0: component, int1: int, int2: int, int3: unknown_int, int4: int, int5: int, int6: achievement, int7: boolean): int {
    var string0 = "";
    var int8 = 0;
    var int9 = 5;
    string0 = script9533(int4, int5, int3, int6);
    if ((strcmp(string0, "") != 0)) {
        int8 = script7593(string0, (int2 - (15 * 2)), 26 as fontmetrics, 14);
        int9 = (int9 + int8);
        int9 = (int9 + 5);
    };
    var int10 = script9534(int4);
    var int11 = 0;
    var string1 = "";
    var int12 = 0;
    if ((int10 > 0)) {
        if ((TESTBIT(int10, 0) == 1)) {
            int11 = 5;
            int9 = (int9 + int11);
            int9 = (int9 + 5);
        };
        if ((TESTBIT(int10, 1) == 1)) {
            string1 = script9536(int4, int5, int6);
            int12 = script7593(string1, (int2 - (15 * 2)), 26 as fontmetrics, 14);
            int9 = (int9 + int12);
            int9 = (int9 + 5);
        };
    };
    var int1 = (int1 + 5);
    CC_CREATE(int0, 4, IF_GETNEXTSUBID(int0));
    if ((int8 > 0)) {
        CC_SETPOSITION(15, int1, 0, 0);
        CC_SETTEXT(string0);
        CC_SETTEXTFONT(26 as fontmetrics);
        CC_SETTEXTALIGN(0, 1, 14);
        CC_SETSIZE((15 * 2), int8, 1, 0);
        script11024(19);
        script9124(int0, int4, int5, int6, int3);
        int1 = (int1 + int8);
        int1 = (int1 + 5);
    };
    CC_CREATE(int0, 4, IF_GETNEXTSUBID(int0));
    if ((int12 > 0)) {
        CC_SETPOSITION(15, int1, 0, 0);
        CC_SETTEXT(string1);
        CC_SETTEXTFONT(26 as fontmetrics);
        CC_SETTEXTALIGN(0, 1, 14);
        CC_SETSIZE((15 * 2), int12, 1, 0);
        script11024(19);
        int1 = (int1 + int12);
        int1 = (int1 + 5);
    };
    var int13 = 0;
    if ((int11 > 0)) {
        CC_CREATE(int0, 5, IF_GETNEXTSUBID(int0));
        CC_SETPOSITION(15, int1, 0, 0);
        CC_SETSIZE(22, int11, 0, 0);
        CC_SETGRAPHIC(31701 as graphic);
        int13 = CC_GETID();
        CC_CREATE(int0, 5, IF_GETNEXTSUBID(int0));
        CC_SETPOSITION(0, int1, 1, 0);
        CC_SETSIZE((44 + (15 * 2)), int11, 1, 0);
        CC_SETGRAPHIC(31702 as graphic);
        CC_CREATE(int0, 5, IF_GETNEXTSUBID(int0));
        CC_SETPOSITION(15, int1, 2, 0);
        CC_SETSIZE(22, int11, 0, 0);
        CC_SETGRAPHIC(31703 as graphic);
        CC_CREATE(int0, 5, IF_GETNEXTSUBID(int0));
        CC_SETPOSITION((15 + 2), (int1 + 1), 0, 0);
        CC_SETGRAPHIC(31696 as graphic);
        script9131(int0, int13, int4, int5, int6);
        script9129(int0, int13, int4, int5, int6);
        int1 = (int1 + int11);
        int1 = (int1 + 5);
    };
    return int1;
}