//
function script5055(int0: unknown_int, int1: cs2enum, int2: component, int3: component, int4: component, string0: string): void {
    CC_DELETEALL(int2);
    CC_CREATE(int2, 5, IF_GETNEXTSUBID(int2));
    CC_SETSIZE(40, 0, 1, 1);
    CC_SETPOSITION(0, 0, 1, 1);
    CC_SETTILING(true);
    CC_CREATE(int2, 5, IF_GETNEXTSUBID(int2));
    CC_SETSIZE(20, 0, 0, 1);
    CC_SETPOSITION(0, 0, 0, 1);
    CC_CREATE(int2, 5, IF_GETNEXTSUBID(int2));
    CC_SETSIZE(20, 0, 0, 1);
    CC_SETPOSITION(0, 0, 2, 1);
    CC_CREATE(int2, 5, IF_GETNEXTSUBID(int2));
    CC_SETSIZE(10, 10, 0, 0);
    CC_SETPOSITION(7, 0, 0, 1);
    CC_CREATE(int2, 4, IF_GETNEXTSUBID(int2));
    CC_SETSIZE(20, 0, 1, 1);
    CC_SETPOSITION(0, 1, 2, 1);
    CC_SETTEXTFONT(66 as fontmetrics);
    CC_SETTEXTALIGN(0, 1, 0);
    CC_SETCOLOUR(16772959);
    CC_SETTEXTSHADOW(true);
    CC_SETTEXT(string0);
    IF_SETONCLICK(callback(script5064, int0), int2);
    CC_DELETEALL(int3);
    CC_DELETEALL(int4);
    var int5 = 0;
    var int6 = ENUM_GETOUTPUTCOUNT(3943);
    while ((int5 < int6)) {
        CC_CREATE(int3, 3, IF_GETNEXTSUBID(int3));
        CC_SETHIDE(true);
        CC_CREATE(int3, 3, IF_GETNEXTSUBID(int3));
        CC_SETHIDE(true);
        CC_CREATE(int3, 5, IF_GETNEXTSUBID(int3));
        CC_SETHIDE(true);
        CC_CREATE(int3, 5, IF_GETNEXTSUBID(int3));
        CC_SETHIDE(true);
        CC_CREATE(int3, 5, IF_GETNEXTSUBID(int3));
        CC_SETHIDE(true);
        CC_CREATE(int3, 5, IF_GETNEXTSUBID(int3));
        CC_SETHIDE(true);
        CC_CREATE(int3, 5, IF_GETNEXTSUBID(int3));
        CC_SETHIDE(true);
        CC_CREATE(int3, 5, IF_GETNEXTSUBID(int3));
        CC_SETHIDE(true);
        CC_CREATE(int3, 5, IF_GETNEXTSUBID(int3));
        CC_SETHIDE(true);
        CC_CREATE(int3, 3, IF_GETNEXTSUBID(int3));
        CC_SETHIDE(true);
        CC_CREATE(int3, 5, IF_GETNEXTSUBID(int3));
        CC_SETHIDE(true);
        CC_CREATE(int3, 4, IF_GETNEXTSUBID(int3));
        CC_SETHIDE(true);
        int5 = (int5 + 1);
    };
    var int7 = -1;
    var int8 = -1 as struct;
    var int9 = 0;
    [int5, int6] = [0, ENUM_GETOUTPUTCOUNT(int1)];
    while ((int5 < int6)) {
        int7 = enum_getvalue(0, 0, int1, int5);
        int8 = enum_getvalue(0, 73, 3943 as cs2enum, int7);
        if ((int8 != -1 as struct)) {
            if ((CC_FIND(int3, (int7 * 12)) == 1)) {
                CC_SETSIZE(24, 26, 1, 0);
                CC_SETPOSITION(0, int9, 0, 0);
                CC_SETTRANS(255);
                CC_SETOP(1, "Select");
                CC_SETONOP(callback(script5070, -2147483644, int7, 0));
                CC_SETHIDE(0);
            };
            if ((CC_FIND(int3, ((int7 * 12) + 1)) == 1)) {
                CC_SETSIZE(24, 26, 0, 0);
                CC_SETPOSITION(0, int9, 2, 0);
                CC_SETTRANS(255);
                CC_SETOP(1, "Select & open settings");
                CC_SETONOP(callback(script5070, -2147483644, int7, 1));
                CC_SETHIDE(0);
            };
            if ((CC_FIND(int3, ((int7 * 12) + 2)) == 1)) {
                CC_SETSIZE(40, 26, 1, 0);
                CC_SETPOSITION(8, int9, 0, 0);
                CC_SETHIDE(false);
            };
            if ((CC_FIND(int3, ((int7 * 12) + 3)) == 1)) {
                CC_SETSIZE(8, 26, 0, 0);
                CC_SETPOSITION(0, int9, 0, 0);
                CC_SETHIDE(false);
            };
            if ((CC_FIND(int3, ((int7 * 12) + 4)) == 1)) {
                CC_SETSIZE(8, 26, 0, 0);
                CC_SETPOSITION(24, int9, 2, 0);
                CC_SETHIDE(false);
            };
            if ((CC_FIND(int3, ((int7 * 12) + 5)) == 1)) {
                CC_SETSIZE(8, 26, 0, 0);
                CC_SETPOSITION(8, int9, 2, 0);
                CC_SETHIDE(false);
            };
            if ((CC_FIND(int3, ((int7 * 12) + 6)) == 1)) {
                CC_SETSIZE(8, 26, 0, 0);
                CC_SETPOSITION(16, int9, 2, 0);
                CC_SETHIDE(false);
            };
            if ((CC_FIND(int3, ((int7 * 12) + 7)) == 1)) {
                CC_SETSIZE(8, 26, 0, 0);
                CC_SETPOSITION(0, int9, 2, 0);
                CC_SETHIDE(false);
            };
            if ((CC_FIND(int3, ((int7 * 12) + 8)) == 1)) {
                CC_SETSIZE(20, 20, 0, 0);
                CC_SETPOSITION(3, (int9 + 3), 0, 0);
                CC_SETGRAPHIC(struct_getparam(int8, 1465));
                CC_SETHIDE(false);
            };
            if ((CC_FIND(int3, ((int7 * 12) + 9)) == 1)) {
                CC_SETSIZE(21, 21, 0, 0);
                CC_SETPOSITION(2, (int9 + 2), 0, 0);
                CC_SETCOLOUR(15720399);
                CC_SETFILL(0);
                CC_SETHIDE(false);
            };
            if ((CC_FIND(int3, ((int7 * 12) + 10)) == 1)) {
                CC_SETSIZE(17, 17, 0, 0);
                CC_SETPOSITION(4, (int9 + 4), 2, 0);
                CC_SETHIDE(false);
            };
            if ((CC_FIND(int3, ((int7 * 12) + 11)) == 1)) {
                CC_SETSIZE(53, 26, 1, 0);
                CC_SETPOSITION(24, int9, 2, 0);
                CC_SETTEXTFONT(66 as fontmetrics);
                CC_SETTEXTALIGN(0, 1, 0);
                CC_SETCOLOUR(16773087);
                CC_SETTEXTSHADOW(true);
                CC_SETTEXT(struct_getparam(int8, 1463));
                CC_SETHIDE(false);
            };
            int9 = (int9 + 26);
        };
        int5 = (int5 + 1);
    };
    IF_SETSCROLLSIZE(0, int9, int3);
    IF_SETSCROLLPOS(0, 0, int3);
    script31(int4, int3, 6507 as graphic, 6504 as graphic, 6505 as graphic, 6506 as graphic, 6499 as graphic, 6498 as graphic);
    return;
}