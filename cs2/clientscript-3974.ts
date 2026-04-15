//
function script3974(int0: component, int1: component, int2: int, int3: unknown_int, string0: string): void {
    script3993(int3);
    if ((int2 == script4056(int3))) {
        CC_DELETEALL(int1);
        script4057(int3, 0);
        return;
    };
    CC_DELETEALL(int1);
    var int4 = 10;
    var int5 = 5;
    var int6 = 10;
    var int7 = 150;
    var int8 = 0;
    var int9 = 0;
    [int8, int9] = script8405(int0);
    var int10 = 0;
    var int11 = 0;
    [int10, int11] = script8405(comp(438, 34));
    int8 = (int8 - int10);
    int9 = (int9 - int11);
    var int12 = IF_GETWIDTH(comp(438, 34));
    int12 = (int12 - (int7 - int6));
    if ((int8 > int12)) {
        int8 = int12;
    };
    var int13 = script7593(string0, int7, 28 as fontmetrics, 0);
    var int14 = IF_GETNEXTSUBID(int1);
    var int15 = (int7 + (2 * int4));
    var int16 = (int13 + (2 * int4));
    CC_CREATE(int1, 3, int14);
    CC_SETCOLOUR(3302521);
    CC_SETFILL(1);
    CC_SETTRANS(25);
    CC_SETSIZE(int15, int16, 0, 0);
    int8 = ((int8 - (int15 / 2)) + (IF_GETWIDTH(int0) / 2));
    int9 = ((int9 - int16) - int5);
    CC_SETPOSITION(int8, int9, 0, 0);
    int14 = (int14 + 1);
    CC_CREATE(int1, 4, int14);
    CC_SETSIZE(int15, int16, 0, 0);
    CC_SETPOSITION(int8, int9, 0, 0);
    CC_SETTEXTALIGN(1, 1, 0);
    CC_SETCOLOUR(16777215);
    CC_SETTEXTFONT(28 as fontmetrics);
    CC_SETTEXTSHADOW(true);
    CC_SETTEXT(string0);
    script4057(int3, int2);
    stack(2260);
    stack(int0);
    IF_SETGRAPHIC();
    return;
}