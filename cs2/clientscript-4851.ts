//
function script4851(int0: component, int1: component, int2: component, int3: component, int4: component, int5: component): void {
    IF_SETHIDE(true, comp(1258, 561));
    CC_DELETEALL(int2);
    CC_DELETEALL(int3);
    CC_DELETEALL(int4);
    var int6 = 0;
    var int7 = 0;
    var int8 = 1;
    var int9 = 0;
    var int10 = 28;
    var int11 = -1 as cs2enum;
    var int12 = -1 as cs2enum;
    var int13 = -1 as cs2enum;
    var int14 = 0;
    var int15 = 0;
    switch (varbitplayer_6981) {
        case 1: {
            int14 = varbitplayer_6985;
            int15 = varbitplayer_6989;
            break;
        }
        case 2: {
            int14 = varbitplayer_6994;
            int15 = varbitplayer_6998;
            break;
        }
        case 3: {
            int14 = varbitplayer_7003;
            int15 = varbitplayer_7007;
            break;
        }
    };
    CC_CREATE(int4, 3, 0);
    CC_SETHIDE(true);
    CC_CREATE(int2, 4, 0);
    CC_SETHIDE(true);
    CC_CREATE(int3, 5, 0);
    CC_SETHIDE(true);
    if ((int15 == 0)) {
        int11 = script4819(varbitplayer_6981);
        int12 = script4822(varbitplayer_6981);
        int13 = script4825(varbitplayer_6981);
        if ((((int11 == -1 as cs2enum) || (int12 == -1 as cs2enum)) || (int13 == -1 as cs2enum))) {
            return;
        };
        int6 = MIN(MIN(ENUM_GETOUTPUTCOUNT(int11), ENUM_GETOUTPUTCOUNT(int13)), ENUM_GETOUTPUTCOUNT(int12));
        while ((int8 <= int6)) {
            int7 = enum_getvalue(0, 0, int11, int8);
            CC_CREATE(int4, 3, int8);
            CC_SETSIZE(0, int10, 1, 0);
            CC_SETFILL(1);
            if ((MODULO(int8, 2) == 0)) {
                CC_SETCOLOUR(2105114);
                CC_SETONMOUSELEAVE(callback(script1356, -2147483645, -2147483643, 2105114));
            } else {
                CC_SETCOLOUR(1709842);
                CC_SETONMOUSELEAVE(callback(script1356, -2147483645, -2147483643, 1709842));
            };
            CC_SETPOSITION(0, int9, 0, 0);
            if ((script4828(varbitplayer_6981) == 0)) {
                CC_SETONOP(callback(script4803, int8));
                CC_SETOP(1, "Select");
                CC_SETONMOUSEOVER(callback(script1356, -2147483645, -2147483643, 4537648));
            };
            if ((int14 == int7)) {
                IF_SETHIDE(false, comp(1258, 561));
                IF_SETPOSITION(0, int9, 0, 0, comp(1258, 561));
            };
            CC_CREATE(int2, 4, int8);
            CC_SETSIZE(30, int10, 1, 0);
            CC_SETPOSITION(30, int9, 0, 0);
            CC_SETTEXT(enum_getvalue(0, 36, int12, int7));
            CC_SETCOLOUR(15065531);
            CC_SETTEXTFONT(66 as fontmetrics);
            CC_SETTEXTALIGN(0, 1, 0);
            CC_CREATE(int3, 5, int8);
            CC_SETSIZE(22, 22, 0, 0);
            CC_SETPOSITION(5, (4 + int9), 0, 0);
            CC_SETGRAPHIC(enum_getvalue(0, 23, int13, int7));
            int9 = (int10 * int8);
            int8 = (int8 + 1);
        };
    } else {
        CC_CREATE(int4, 3, int8);
        CC_SETSIZE(0, int10, 1, 0);
        CC_SETFILL(1);
        if ((MODULO(int8, 2) == 0)) {
            CC_SETCOLOUR(2105114);
            CC_SETONMOUSELEAVE(callback(script1356, -2147483645, -2147483643, 2105114));
        } else {
            CC_SETCOLOUR(1709842);
            CC_SETONMOUSELEAVE(callback(script1356, -2147483645, -2147483643, 1709842));
        };
        CC_SETPOSITION(0, int9, 0, 0);
        CC_SETONOP(callback(script4803, int8));
        CC_SETOP(1, "Select");
        CC_SETONMOUSEOVER(callback(script1356, -2147483645, -2147483643, 4537648));
        IF_SETHIDE(0, 82444849);
        IF_SETPOSITION(0, int9, 0, 0, 82444849);
        CC_CREATE(int2, 4, int8);
        CC_SETSIZE(30, int10, 1, 0);
        CC_SETPOSITION(30, int9, 0, 0);
        CC_SETTEXT("Reset hotspot");
        CC_SETCOLOUR(15065531);
        CC_SETTEXTFONT(66);
        CC_SETTEXTALIGN(0, 1, 0);
        CC_CREATE(int3, 5, int8);
        CC_SETSIZE(22, 22, 0, 0);
        CC_SETPOSITION(5, (4 + int9), 0, 0);
        CC_SETGRAPHIC(6496);
        CC_SET2DANGLE(49149);
        int9 = (int10 * int8);
    };
    IF_SETSCROLLPOS(0, 0, int0);
    IF_SETSCROLLSIZE(0, int9, int0);
    script31(int1, int0, 5666 as graphic, 5663 as graphic, 5664 as graphic, 5665 as graphic, 5686 as graphic, 5685 as graphic);
    return;
}