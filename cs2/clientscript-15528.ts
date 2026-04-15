//
function script15528(int0: obj, int1: int, int2: graphic, int3: int, int4: int, int5: int, int6: boolean, string0: string, string1: string): void {
    CC_DELETEALL(comp(1253, 457));
    var int7 = 0;
    var int8 = 0;
    var int9 = 0;
    var int10 = 0;
    var int11 = 0;
    var int12 = (IF_GETWIDTH(comp(1253, 457)) - 20);
    IF_SETHIDE(false, comp(1253, 453));
    script15938(comp(1253, 457), 0, int7++, 0, int10, 1, 0, 0, 90, 1, 0);
    int10 = (int10 + 90);
    var int13 = script8948(int3);
    var int14 = 0;
    var int15 = 0;
    if ((((int0 != 52587 as obj) && (int3 != 10)) || (script17027(int3, int6) == 1))) {
        int14 = script16708(comp(1253, 457), int3, int13, 0, (int7++ + int15), 0, 0, 1, 1, 74, 90, 0, 0);
        if ((int14 <= 0)) {
            script7918(0, (int7++ + int15), 0, 0, 1, 1, 74, 90, 0, 0, int13);
        } else {
            int15 = (int15 + int14);
            int14 = 0;
        };
    };
    script7918(0, (int7++ + int15), 0, 0, 1, 1, int4, int5, 0, 0, -1 as graphic);
    if ((int0 != 52587 as obj)) {
        CC_SETOBJECT(int0, int1);
    } else {
        CC_SETGRAPHIC(int2);
    };
    int7 = 0;
    script15938(comp(1253, 457), 1, int7++, 0, int10, 1, 0, 0, 0, 1, 1);
    int8 = script15891(string0, int12, 58 as fontmetrics, 27);
    script10485(1, int7++, 0, 0, 1, 0, 20, int8, 1, 0, 1897 as dbrow, string0);
    CC_SETCOLOUR(script10495(0));
    var int16 = ++int8;
    script10485(1, int7++, 0, int8, 1, 0, 20, 0, 1, 0, 2100 as dbrow, string1);
    int8 = script15891(string1, int12, 207 as fontmetrics, 19);
    CC_SETSIZE(20, int8, 1, 0);
    CC_SETTEXTALIGN(0, 0, 19);
    CC_SETCOLOUR(16777215);
    int16 = (int16 + (int8 + 20));
    if ((CC_FINDBYCATEGORY(comp(1253, 457), 1, 0) == 1)) {
        CC_SETSIZE(0, int16, 1, 0);
        int10 = (int10 + int16);
    };
    int7 = 0;
    script7857(comp(1253, 457), 2, int7++, 0, 10, 1, 2, 175, 35, 0, 0, 4476 as dbrow, "Back");
    CC_SETOP(1, "Back");
    CC_SETONOP(callback(script15647));
    int10 = (int10 + (35 + 10));
    var int17 = (int10 - IF_GETHEIGHT(82117065));
    if ((int17 > 0)) {
        IF_SETSIZE(IF_GETWIDTH(comp(1253, 455)), (IF_GETHEIGHT(comp(1253, 455)) + int17), 0, 0, comp(1253, 455));
    };
    return;
}