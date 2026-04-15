//
function script11354(): void {
    var int0 = 1;
    var int1 = -1 as struct;
    var int2 = 0;
    var int3 = 0;
    var int4 = 0;
    var int5 = 0;
    var int6 = comp(1311, 586);
    var int7 = ENUM_GETOUTPUTCOUNT(9013 as cs2enum);
    var int8 = 0;
    CC_DELETEALL(int6);
    var int9 = script13749();
    while ((int0 <= int7)) {
        int1 = enum_getvalue(0, 73, 9013 as cs2enum, int0);
        if ((int1 != -1 as struct)) {
            CC_CREATE(int6, 5, int8);
            int8 = (int8 + 1);
            CC_SETSIZE(37, 37, 0, 0);
            [int4, int5] = script11355(int2, int3, 0);
            CC_SETPOSITION(int4, int5, 1, 0);
            if (((script11359(int1) == 0) || (int1 == 31332 as struct))) {
                CC_SETGRAPHIC(struct_getparam(int1, 5060));
            } else {
                CC_SETGRAPHIC(struct_getparam(int1, 5061));
            };
            CC_SETONMOUSEREPEAT(callback(script11363, int1, -2147483645, -2147483643));
            CC_SETONMOUSELEAVE(callback(script8805));
            CC_SETDRAGGABLE(85918282, -1);
            CC_SETDRAGRENDERBEHAVIOUR(2);
            if ((int9 == 0)) {
                CC_SETDRAGDEADTIME(5);
                CC_SETDRAGDEADZONE(5);
            } else {
                CC_SETDRAGDEADTIME(5);
                CC_SETDRAGDEADZONE(20);
            };
            CC_SETOP(1, "Select");
            cc_setparam(7540, 4);
            cc_setparam(7544, int1);
            CC_SETONOP(callback(script11361, (int8 - 1), int0, -1, 0, 1));
            CC_SETONDRAGCOMPLETE(callback(script11361, (int8 - 1), int0, -2147483642, -2147483641, 1));
            if ((++int3 == 3)) {
                int3 = 0;
                int2 = (int2 + 1);
            };
        };
        int0 = (int0 + 1);
    };
    var int10 = 1;
    int3 = 0;
    while ((int10 <= 3)) {
        int0 = script11356(int10);
        int1 = enum_getvalue(0, 73, 9013 as cs2enum, int0);
        CC_CREATE(int6, 5, int8);
        int8 = (int8 + 1);
        CC_SETSIZE(37, 37, 0, 0);
        [int4, int5] = script11355(int2, int3, 1);
        CC_SETPOSITION(int4, int5, 1, 2);
        if ((int1 != -1 as struct)) {
            if (((script11359(int1) == 0) || (int1 == 31332 as struct))) {
                CC_SETGRAPHIC(struct_getparam(int1, 5060));
            } else {
                CC_SETGRAPHIC(struct_getparam(int1, 5061));
            };
            CC_SETONMOUSEREPEAT(callback(script11363, int1, -2147483645, -2147483643));
            CC_SETONMOUSELEAVE(callback(script8805));
            CC_SETOP(1, "Remove");
            cc_setparam(7540, 4);
            cc_setparam(7544, int1);
            CC_SETONOP(callback(script11361, (int8 - 1), int0, -1, 0, 0));
        } else if ((int10 > varclient_4787)) {
            CC_SETONMOUSEREPEAT(callback(script11362, int6, (int8 - 1)));
            CC_SETGRAPHIC(24901);
        } else {
            CC_SETONMOUSEREPEAT(callback(script11363, -1, -2147483645, -2147483643));
            CC_SETGRAPHIC(18269);
        };
        int3 = (int3 + 1);
        int10 = (int10 + 1);
    };
    CC_CREATE(int6, 4, int8);
    int8 = (int8 + 1);
    CC_SETTEXT("Active Abilities");
    CC_SETCOLOUR(script10495(1));
    CC_SETTEXTFONT(28 as fontmetrics);
    CC_SETTEXTALIGN(1, 1, 13);
    CC_SETSIZE(0, 15, 1, 0);
    CC_SETPOSITION(0, 70, 1, 2);
    return;
}