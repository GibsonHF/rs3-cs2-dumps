//
function script8678(int0: component): void {
    var int1 = comp(-1, 65535);
    var int2 = comp(-1, 65535);
    var int3 = comp(-1, 65535);
    var int4 = comp(-1, 65535);
    var int5 = comp(-1, 65535);
    var int6 = comp(-1, 65535);
    [int1, int2, int3, int4, int5, int6] = script8682(int0);
    CC_DELETEALL(int0);
    if ((int1 != comp(-1, 65535))) {
        CC_DELETEALL(int1);
    };
    if ((int2 != comp(-1, 65535))) {
        CC_DELETEALL(int2);
    };
    if ((int3 != comp(-1, 65535))) {
        CC_DELETEALL(int3);
    };
    if ((int5 != comp(-1, 65535))) {
        CC_DELETEALL(int5);
    };
    if ((int4 != comp(-1, 65535))) {
        CC_DELETEALL(int4);
    };
    if ((int6 != comp(-1, 65535))) {
        CC_DELETEALL(int6);
    };
    if (((int0 != comp(-1, 65535)) && (IF_FIND(int0) == 1))) {
        CC_SETPOSITION(0, 0, 0, 0);
        CC_SETSIZE(0, 0, 1, 1);
        CC_SETNOCLICKTHROUGH(false);
    };
    var int7 = script6431();
    var int8 = 33;
    var int9 = INV_SIZE(93 as inv);
    var int10 = 0;
    var int11 = 40;
    var int12 = 36;
    var int13 = 36;
    var int14 = 32;
    if ((int7 == true)) {
        if ((int0 == comp(1473, 0))) {
            int11 = 44;
            int12 = 44;
            int13 = 44;
            int14 = 39;
        } else {
            int11 = 44;
            int12 = 44;
            int13 = 44;
            int14 = 39;
        };
        int8 = 42;
    };
    if ((int6 != comp(-1, 65535))) {
        if ((int8 <= 0)) {
            IF_SETHIDE(true, int6);
        } else if ((IF_FIND(int6) == 1)) {
            IF_SETHIDE(false, int6);
            CC_SETPOSITION(0, 0, 0, 2);
            CC_SETSIZE(0, int8, 1, 0);
        };
    };
    if (((int2 != comp(-1, 65535)) && (IF_FIND(int2) == 1))) {
        CC_SETPOSITION(0, 0, 2, 0);
        CC_SETSIZE(16, int8, 0, 1);
    };
    if (((int1 != comp(-1, 65535)) && (IF_FIND(int1) == 1))) {
        CC_SETPOSITION(0, 0, 0, 0);
        CC_SETSIZE(16, int8, 1, 1);
    };
    if (((int4 != comp(-1, 65535)) && (IF_FIND(int4) == 1))) {
        cc_setparam(3818, 93);
        cc_setparam(3820, 0);
    };
    while ((int10 < int9)) {
        if ((int3 != comp(-1, 65535))) {
            CC_CREATE(int3, 5, int10);
            if ((varbitplayer_22875 != 1)) {
                CC_SETGRAPHIC(18266 as graphic);
            } else {
                CC_SETGRAPHIC(-1 as graphic);
            };
            CC_SETSIZE(int11, int12, 0, 0);
            CC_SETONMOUSEOVER(callback(script9227, 93, -2147483645, -2147483643, int5, 1));
            CC_SETONMOUSELEAVE(callback(script9227, 93, -2147483645, -2147483643, int5, 0));
        };
        if ((int5 != comp(-1, 65535))) {
            script9229(int5, int10, int11, int12);
        };
        if ((int4 != comp(-1, 65535))) {
            CC_CREATE(int4, 5, int10);
            CC_SETSIZE(int13, int14, 0, 0);
            CC_SETONTARGETENTER(callback(script1615, 1, -2147483645, -2147483643));
            stack(1615);
            stack(0);
            stack(-2147483645);
            stack(-2147483643);
            stack("iii");
            CC_SETONTARGETLEAVE();
        };
        int10 = (int10 + 1);
    };
    IF_SETONRESIZE(callback(script8679, -2147483645), int0);
    IF_SETONINVTRANSMIT(callback(script8679, -2147483645, 93, 1), int0);
    script8680(int0);
    return;
}