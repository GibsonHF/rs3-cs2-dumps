//
function script15296(int0: dbrow, int1: component): void {
    if (((int0 == -1 as dbrow) || (int1 == comp(-1, 65535)))) {
        return;
    };
    var int2 = -1;
    var int3 = 0;
    CC_DELETEALL(int1);
    var int4 = 0;
    var string0 = "";
    var string1 = "";
    var int5 = 0;
    var int6 = -1 as obj;
    var int7 = 0;
    var int8 = 16777215;
    while ((++int2 < 7)) {
        stack(dbrow_getfield(int0, 471040, script13408(int2)));
        [string0, string1, int5, int6, int7] = stack();
        CC_CREATE(int1, 4, int4);
        CC_SETOP(1, "Select");
        CC_SETONOP(callback(script15297, -2147483643, 1));
        CC_SETOPCURSOR(1, 46);
        CC_SETPOSITION(0, (32 * int3), 1, 0);
        if ((varbitplayer_48224 == int2)) {
            IF_SETHIDE(false, comp(271, 42));
            IF_SETPOSITION(0, (32 * int3), 1, 0, comp(271, 42));
            IF_SETSIZE(4, 32, 1, 0, comp(271, 42));
        };
        int3 = (int3 + 1);
        switch (int5) {
            case 0: {
                int8 = 16777215;
                break;
            }
            case 1: {
                int8 = 15260188;
                break;
            }
            case 2: {
                int8 = 15240220;
                break;
            }
            case 3: {
                int8 = 15214876;
                break;
            }
            case 4: {
                int8 = 12066024;
                break;
            }
        };
        if ((int2 < 2)) {
            int8 = script10495(2);
        };
        CC_SETCOLOUR(int8);
        CC_SETTEXT(string0);
        CC_SETTEXTFONT(55 as fontmetrics);
        CC_SETSIZE(16, 32, 1, 0);
        CC_SETTEXTALIGN(0, 1, 0);
        CC_SETONMOUSEOVER(callback(script12111, string1, -2147483645, int4));
        CC_SETONMOUSELEAVE(callback(script8805));
        int4 = (int4 + 1);
    };
    return;
}