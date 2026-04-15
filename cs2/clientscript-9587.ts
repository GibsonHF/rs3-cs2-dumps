//
function script9587(int0: int, int1: int, int2: int, int3: unknown_int, int4: int, int5: unknown_int): void {
    if (((int5 != 2) && (CC_FIND(comp(517, 171), int0) == 1))) {
        if ((varbitplayer_45192 == 1)) {
            CC_SETSIZE(0, 12, 1, 0);
            CC_SETPOSITION(0, int4, 0, 0);
        } else {
            CC_SETSIZE(12, 0, 0, 1);
            CC_SETPOSITION(int4, 0, 0, 0);
        };
        CC_SETHIDE(false);
    };
    if ((int5 == 1)) {
        return;
    };
    var string0 = `View tab ${inttostring(int0, 10)}`;
    var int6 = script5883(int1);
    if ((int6 != 0)) {
        string0 = `${string0} - ${enum_getvalue(0, 36, 8657 as cs2enum, int6)}`;
    };
    var int7 = -1;
    if ((int5 != 2)) {
        int7 = script9670(int1, varbitplayer_45141);
    };
    if ((varbitplayer_45192 == 1)) {
        script14408(comp(517, 169), 24382 as struct, 0, int4, int0, 0, int7);
    } else {
        script14408(comp(517, 169), 26573 as struct, int4, 0, int0, 0, int7);
    };
    if ((CC_FIND(comp(517, 169), int0) == 1)) {
        if ((int5 == 2)) {
            CC_SETOP(1, "Add tab");
            CC_CLEARSCRIPTHOOKS();
        } else {
            CC_SETOP(1, `View tab ${inttostring(int0, 10)}`);
            CC_SETOP(2, `Delete tab ${inttostring(int0, 10)}`);
            CC_SETOP(3, `Customise tab ${inttostring(int0, 10)}`);
            CC_SETONOP(callback(script8905, -2147483644, -2147483643));
            CC_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643));
        };
    };
    var int8 = script5869(int1);
    var int9 = enum_getvalue(0, 23, 15585 as cs2enum, int8);
    var int10 = -1 as obj;
    var int11 = 0;
    if (((int5 != 2) && (int9 == -1 as graphic))) {
        [int10, int11] = script9642(int1, int2, int3);
    };
    if ((CC_FIND(comp(517, 170), int0) == 1)) {
        if ((int5 == 2)) {
            CC_SETSIZE(36, 32, 0, 0);
            if ((varbitplayer_45192 == 1)) {
                CC_SETPOSITION(2, (int4 + 8), 0, 0);
            } else {
                CC_SETPOSITION((int4 + 6), 2, 0, 0);
            };
            CC_SETGRAPHIC(1435 as graphic);
            CC_SETDRAGGABLE(comp(-1, 65535), -1);
            CC_SETONDRAG(callback(script14377));
            CC_SETONDRAGCOMPLETE(callback());
            CC_SETDRAGDEADTIME(255);
            CC_SETDRAGDEADZONE(255);
        } else {
            if ((int9 != -1 as graphic)) {
                CC_SETSIZE(35, 35, 0, 0);
                if ((varbitplayer_45192 == 1)) {
                    CC_SETPOSITION(4, (int4 + 7), 0, 0);
                } else {
                    CC_SETPOSITION((int4 + 4), 2, 0, 0);
                };
                CC_SETOBJECT(-1 as obj, 0);
                CC_SETGRAPHIC(int9);
            } else {
                CC_SETSIZE(36, 32, 0, 0);
                if ((varbitplayer_45192 == 1)) {
                    CC_SETPOSITION(4, (int4 + 12), 0, 0);
                } else {
                    CC_SETPOSITION((int4 + 6), 2, 0, 0);
                };
                CC_SETGRAPHIC(-1 as graphic);
                CC_SETOBJECT_NONUM(int10, int11);
            };
            CC_SETOUTLINE(1);
            CC_SETDRAGGABLE(comp(517, 158), -1);
            CC_SETONDRAG(callback(script14378, -2147483643));
            CC_SETONDRAGCOMPLETE(callback(script14376, -2147483642, -2147483643, -2147483641));
            CC_SETDRAGDEADTIME(5);
            CC_SETDRAGDEADZONE(5);
        };
        CC_SETHIDE(false);
    };
    return;
}