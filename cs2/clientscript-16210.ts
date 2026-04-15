//
function script16210(int0: struct, int1: int, int2: int, int3: component, int4: int): int {
    var int5 = false;
    var int6 = false;
    var string0 = "";
    if ((IF_GETTOP() == 906)) {
        int6 = true;
    } else if (((int0 != 45918 as struct) && (int0 != -1 as struct))) {
        int5 = struct_getparam(int0, 8653);
        int6 = false;
        if (((script11939() == 1) && (int0 == 48778 as struct))) {
            int5 = false;
        };
    } else {
        int6 = true;
    };
    CC_CREATE(int3, 5, int1++);
    CC_SETGRAPHIC(11694 as graphic);
    CC_SETSIZE(126, 36, 0, 0);
    CC_SETPOSITION(int4, 10, 2, 0);
    CC_SETHIDE(int6);
    CC_CREATE(int3, 5, int1++);
    CC_SETSIZE(45, 45, 0, 0);
    CC_SETPOSITION((int4 + 104), 6, 2, 0);
    CC_SETHIDE(int6);
    CC_CREATE(int3, 4, int1++);
    CC_SETTEXTFONT(57 as fontmetrics);
    CC_SETCOLOUR(16777215);
    CC_SETSIZE(126, 36, 0, 0);
    CC_SETPOSITION(int4, 10, 2, 0);
    CC_SETTEXTALIGN(1, 1, 16);
    CC_SETHIDE(int6);
    CC_CREATE(int3, 5, int1++);
    script16222(int3, CC_GETID(), 14117 as graphic, 14118);
    CC_SETSIZE(39, 36, 0, 0);
    CC_SETPOSITION(int4, 9, 2, 0);
    CC_SETHIDE(true);
    if (((int5 == true) && (int6 == false))) {
        CC_SETOP(1, "Select");
        CC_SETHIDE(false);
        switch (int0) {
            case 45923: {
                if ((script4148() == false)) {
                    string0 = `You can earn ${script17940(int0)} by playing Treasure Hunter.`;
                } else {
                    string0 = "In Ironman mode, you can earn Oddments from daily challenge rewards or certain event rewards.";
                };
                if ((STRING_LENGTH(string0) > 0)) {
                    CC_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643));
                };
                break;
            }
            case 45924:
            case 46571: {
                if ((script4148() == false)) {
                    string0 = `You can earn ${script17940(int0)} by playing Treasure Hunter.`;
                };
                if ((STRING_LENGTH(string0) > 0)) {
                    CC_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643));
                };
                break;
            }
        };
    };
    script15937(int2, 0, (int4 + 104), 20, 2, 2, 45, 26, 0, 1);
    script16213(int0, int3, int2, (int1 - 3), 1);
    return int1;
}