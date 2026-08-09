//
function script16210(int0: number, int1: number, int2: number, int3: number, int4: number): number {
    var int5 = false;
    var int6 = false;
    var string0 = "";
    if ((IF_GETTOP() == 906)) {
        int6 = true;
    } else if ((int0 != 45918)) {
        if ((int0 != -1)) {
            int5 = struct_getparam(int0, 8653);
            int6 = false;
            if (((script11939() == 1) && (int0 == 48778))) {
                int5 = false;
            };
        } else {
            int6 = true;
        };
    } else {
        int6 = true;
    };
    stack(int3);
    stack(5);
    stack(int1);
    var int1 = (int1 + 1);
    CC_CREATE();
    CC_SETGRAPHIC(11694 as graphic);
    CC_SETSIZE(126, 36, 0, 0);
    CC_SETPOSITION(int4, 10, 2, 0);
    CC_SETHIDE(int6);
    stack(int3);
    stack(5);
    stack(int1);
    int1 = (int1 + 1);
    CC_CREATE();
    CC_SETSIZE(45, 45, 0, 0);
    CC_SETPOSITION((int4 + 104), 6, 2, 0);
    CC_SETHIDE(int6);
    stack(int3);
    stack(4);
    stack(int1);
    int1 = (int1 + 1);
    CC_CREATE();
    CC_SETTEXTFONT(57 as fontmetrics);
    CC_SETCOLOUR(16777215);
    CC_SETSIZE(126, 36, 0, 0);
    CC_SETPOSITION(int4, 10, 2, 0);
    CC_SETTEXTALIGN(1, 1, 16);
    CC_SETHIDE(int6);
    stack(int3);
    stack(5);
    stack(int1);
    int1 = (int1 + 1);
    CC_CREATE();
    script16222(int3, CC_GETID(), 14117, 14118);
    CC_SETSIZE(39, 36, 0, 0);
    CC_SETPOSITION(int4, 9, 2, 0);
    CC_SETHIDE(true);
    if (((int5 == true) && (int6 == false))) {
        CC_SETOP(1, "Select");
        CC_SETHIDE(false);
        switch (int0) {
            case 45923: {
                if ((script4148() == 0)) {
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
                if ((script4148() == 0)) {
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