//
function script2117(int0: int, int1: int): int {
    var int2 = script2120(int0);
    var int3 = IF_GETNEXTSUBID(comp(267, 76));
    var int4 = -1 as graphic;
    var string0 = "";
    if ((int2 > 0)) {
        switch (int0) {
            case 1: {
                int4 = struct_getparam(41424, 7508);
                string0 = struct_getparam(41424, 7505);
                break;
            }
            case 2: {
                int4 = struct_getparam(41425, 7508);
                string0 = struct_getparam(41425, 7505);
                break;
            }
            case 3: {
                int4 = struct_getparam(41426, 7508);
                string0 = struct_getparam(41426, 7505);
                break;
            }
            case 4: {
                int4 = struct_getparam(41427, 7508);
                string0 = struct_getparam(41427, 7505);
                break;
            }
            case 5: {
                int4 = struct_getparam(41428, 7508);
                string0 = struct_getparam(41428, 7505);
                break;
            }
        };
        CC_CREATE(comp(267, 76), 5, int3++);
        CC_SETSIZE(100, 100, 0, 0);
        CC_SETPOSITION(int1, 0, 0, 1);
        CC_SETGRAPHIC(int4);
        CC_SETONMOUSEREPEAT(callback(script3876, string0, -2147483645, -2147483643));
        if ((int2 > 1)) {
            CC_CREATE(comp(267, 76), 4, int3);
            CC_SETSIZE((100 / 2), (100 / 2), 0, 0);
            CC_SETPOSITION((int1 + 10), 0, 0, 1);
            CC_SETTEXTFONT(28 as fontmetrics);
            CC_SETTEXTALIGN(0, 0, 0);
            CC_SETTEXT(inttostring(int2, 10));
            CC_SETCOLOUR(16777215);
        };
        return 1;
    };
    return 0;
}