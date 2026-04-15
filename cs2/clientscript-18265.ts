//
function script18265(int0: component, int1: stat): void {
    var int2 = enum_getvalue(17, 0, 1482 as cs2enum, int1);
    var int3 = script15772(int1);
    var int4 = 3495 as cs2enum;
    if ((int3 == 1)) {
        int4 = 371 as cs2enum;
    };
    CC_DELETEALL(int0);
    CC_CREATE(int0, 5, 0);
    CC_SETSIZE(0, 0, 1, 1);
    CC_SETPOSITION(0, 0, 1, 1);
    var int5 = 10203 as graphic;
    var int6 = 10205 as graphic;
    var int7 = 1908;
    var int8 = 10204;
    var string0 = `You haven't reached the maximum level in ${enum_getvalue(17, 36, 680 as cs2enum, int1)}.`;
    if ((int3 == 1)) {
        if ((TESTBIT(varplayer_3238, int2) == 1)) {
            if ((int2 == 1)) {
                string0 = "You will currently not receive combat challenges.";
            } else {
                string0 = `You will currently not receive ${enum_getvalue(17, 36, 680 as cs2enum, int1)} challenges.`;
            };
        } else if ((int2 == 1)) {
            string0 = "You will currently receive combat challenges.";
        } else {
            string0 = `You will currently receive ${enum_getvalue(17, 36, 680 as cs2enum, int1)} challenges.`;
        };
        CC_SETGRAPHIC(int5);
        CC_SETOP(1, "Choose");
        CC_SETOPBASE(enum_getvalue(17, 36, 680 as cs2enum, int1));
        CC_SETONOP(callback(script18266, int1, int0));
        CC_SETONMOUSEOVER(callback(script688, -2147483645, -2147483643, int8));
        CC_SETONMOUSELEAVE(callback(script688, -2147483645, -2147483643, int5));
    } else {
        CC_SETGRAPHIC(int6);
        if ((script6431() == true)) {
            CC_SETOP(1, "Choose");
            CC_SETOPBASE(enum_getvalue(17, 36, 680 as cs2enum, int1));
        };
        if ((int2 == 1)) {
            string0 = "You haven't reached the maximum level in all your combat skills.";
        };
    };
    CC_CREATE(int0, 5, 1);
    CC_SETSIZE(25, 25, 0, 0);
    CC_SETPOSITION(0, 0, 1, 1);
    CC_SETGRAPHIC(enum_getvalue(0, 23, int4, int2));
    IF_SETONMOUSEREPEAT(callback(script3876, string0, -2147483645, -2147483643), int0);
    if ((TESTBIT(varplayer_3238, int2) == 1)) {
        CC_CREATE(int0, 5, 2);
        CC_SETSIZE(35, 35, 0, 0);
        CC_SETPOSITION(0, 0, 1, 1);
        CC_SETGRAPHIC(1908 as graphic);
    };
    return;
}