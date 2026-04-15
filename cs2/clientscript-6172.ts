//
function script6172(int0: int, int1: int): int {
    var int2 = enum_getvalue(0, 73, 5838 as cs2enum, int0);
    if ((int2 == -1 as struct)) {
        return int1;
    };
    var int3 = struct_getparam(int2, 2390);
    var int4 = struct_getparam(int2, 2391);
    var string0 = struct_getparam(int2, 2392);
    var int5 = 10735;
    if ((CC_FIND(comp(1273, 14), int0) == 1)) {
        CC_SETGRAPHIC(10734 as graphic);
        CC_SETSIZE(84, 78, 0, 0);
        CC_SETPOSITION(int3, int4, 0, 0);
        CC_SETNOCLICKTHROUGH(true);
        CC_SETONMOUSEOVER(callback(script5343, -2147483645, -2147483643, int5));
        CC_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643));
        CC_SETOP(1, "Buy 1");
        CC_SETOP(2, "Buy 2");
        CC_SETOP(3, "Buy 5");
        CC_SETOP(4, "Buy 10");
        CC_SETONOP(callback(script6171, int0, -2147483645));
        if ((struct_getparam(int2, 2378) == 0)) {
            CC_SETOPBASE(struct_getparam(int2, 2376));
            CC_CREATE(comp(1273, 14), 4, int1);
            CC_SETSIZE(84, 14, 0, 0);
            CC_SETPOSITION(int3, (int4 - 30), 0, 0);
            CC_SETTEXT(struct_getparam(int2, 2376));
            CC_SETTEXTALIGN(1, 1, 0);
            CC_SETTEXTFONT(67 as fontmetrics);
            CC_SETTEXTSHADOW(false);
            CC_SETCOLOUR(16777215);
            var int1 = (int1 + 1);
            CC_SETOPBASE(struct_getparam(int2, 2376));
        } else {
            CC_SETOPBASE(`${struct_getparam(int2, 2376)} ${struct_getparam(int2, 2377)}`);
            CC_CREATE(comp(1273, 14), 4, int1);
            CC_SETSIZE(84, 14, 0, 0);
            CC_SETPOSITION(int3, (int4 - 37), 0, 0);
            if (((MAP_LANG() == 3) || (MAP_LANG() == 2))) {
                CC_SETTEXT(struct_getparam(int2, 2377));
            } else {
                CC_SETTEXT(struct_getparam(int2, 2376));
            };
            CC_SETTEXTALIGN(1, 1, 0);
            CC_SETTEXTFONT(67 as fontmetrics);
            CC_SETTEXTSHADOW(false);
            CC_SETCOLOUR(16777215);
            int1 = (int1 + 1);
            CC_CREATE(comp(1273, 14), 4, int1);
            CC_SETSIZE(84, 14, 0, 0);
            CC_SETPOSITION(int3, (int4 - 23), 0, 0);
            if (((MAP_LANG() == 3) || (MAP_LANG() == 2))) {
                CC_SETTEXT(struct_getparam(int2, 2376));
            } else {
                CC_SETTEXT(struct_getparam(int2, 2377));
            };
            CC_SETTEXTALIGN(1, 1, 0);
            CC_SETTEXTFONT(67 as fontmetrics);
            CC_SETTEXTSHADOW(false);
            CC_SETCOLOUR(16777215);
            int1 = (int1 + 1);
            CC_SETOPBASE(strconcat(strconcat(struct_getparam(int2, 2376), " "), struct_getparam(int2, 2377)));
        };
        CC_CREATE(comp(1273, 14), 4, int1);
        CC_SETSIZE(84, 14, 0, 0);
        CC_SETPOSITION(int3, (int4 + 82), 0, 0);
        CC_SETTEXT(`${struct_getparam(int2, 2380)} Points`);
        CC_SETTEXTALIGN(1, 1, 0);
        CC_SETTEXTFONT(69 as fontmetrics);
        CC_SETTEXTSHADOW(false);
        CC_SETCOLOUR(16417049);
        int1 = (int1 + 1);
        CC_CREATE(comp(1273, 14), 6, int1);
        CC_SETSIZE(20, 20, 0, 0);
        CC_SETMODEL(struct_getparam(int2, 2383));
        CC_SETMODELANGLE(struct_getparam(int2, 2388), struct_getparam(int2, 2389), struct_getparam(int2, 2385), struct_getparam(int2, 2386), struct_getparam(int2, 2387), struct_getparam(int2, 2384));
        if ((int0 < 4)) {
            CC_SETRETEX(1, 485, 364 as material);
        };
        int3 = ((int3 + struct_getparam(int2, 2388)) + ((84 - CC_GETWIDTH()) / 2));
        int4 = ((int4 + struct_getparam(int2, 2389)) + ((70 - CC_GETHEIGHT()) / 2));
        CC_SETPOSITION(int3, int4, 0, 0);
        CC_SETNOCLICKTHROUGH(false);
        int1 = (int1 + 1);
    };
    return int1;
}