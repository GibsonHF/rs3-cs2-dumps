//
function script20296(int0: component, int1: dbrow, int2: int, int3: int): void {
    var int4 = dbrow_getfield(int1, 1368064, 0);
    var int5 = 3000;
    var string0 = "";
    var string1 = "";
    var int6 = -1 as graphic;
    var int7 = -1 as achievement;
    var int8 = 0;
    var int9 = -1;
    var int10 = 0;
    var int11 = -1;
    if (((CC_FINDBYCATEGORY[1](int0, int2, 0) == 1) && (CC_FIND(int0, int4) == 1))) {
        int7 = dbrow_getfield(int1, 1368096, 0);
        string0 = script20131(int1, int7);
        if ((script20306(int0, int7, string0) == 0)) {
            CC_DELETE();
        } else {
            int6 = script20307(int1, int3);
            int9 = ACHIEVEMENT_REQSTATE(int7);
            int11 = script20297(int7);
            if ((int11 != -1)) {
                int10 = (38 + 32);
            } else {
                int10 = 38;
            };
            int8 = MAX(40, (script20478(string0, (CC_GETWIDTH() - int10), 2100 as dbrow, 0) + 4));
            CC_SETSIZE(6, int8, 1, 0);
            int8 = (int8 + (cc_getparam[1](9334) + 4));
            if ((script20171(int3, (int2 - 200)) == 0)) {
                CC_SETSIZE[1](0, int8, 1, 0);
            };
            cc_setparam[1](9334, int8);
            cc_setparam[1](9336, (cc_getparam[1](9336) + 1));
            if ((dbrow_getfield(int1, 1368144, 0) == 0)) {
                cc_setparam[1](9337, (cc_getparam[1](9337) + 1));
            };
            unk11040(callback());
            CC_SENDTOFRONT();
            script10033(script20173((int5 + int4)), 0, 0, 0, 0, 0, 0, 1, 1, 4128);
            if ((int9 == -2)) {
                CC_SETCOLOUR(219907);
            };
            if ((int3 == 1)) {
                script7918(script20173(((int5 * 2) + int4)), 2, 0, 0, 0, 30, 30, 0, 0, int6);
                script10485(script20173(((int5 * 3) + int4)), 2, 0, 0, 2, 30, 30, 0, 0, 2141 as dbrow, script20305(int1));
                CC_SETTEXTALIGN(1, 2, 0);
                CC_SETTEXTFONT(83 as fontmetrics);
            } else {
                script7918(script20173(((int5 * 2) + int4)), 2, 0, 0, 1, 30, 30, 0, 0, int6);
            };
            if ((int11 != -1)) {
                script7918(script20173(((int5 * 5) + int4)), 2, 0, 2, 1, 32, 32, 0, 0, 25125 as graphic);
                CC_SETONMOUSEOVER(callback(script688, -2147483645, -2147483643, 25126));
                CC_SETONMOUSELEAVE(callback(script688, -2147483645, -2147483643, 25125));
                if ((int11 > 0)) {
                    CC_SETOP(2, "More Details");
                    CC_SETONOP(callback(script20303, -2147483645, int7, int11));
                    CC_SETOPCURSOR(2, 210);
                    CC_SETMOUSEOVERCURSOR(210);
                };
                if ((script6431() == true)) {
                    CC_SETONCLICK(callback(script20299, -2147483645, -2147483643, int7));
                } else {
                    CC_SETONMOUSEREPEAT(callback(script20299, -2147483645, -2147483643, int7));
                };
            };
            script10485(script20173(((int5 * 4) + int4)), 36, 0, 0, 1, int10, 4, 1, 1, 2100 as dbrow, string0);
            if ((int9 == -2)) {
                CC_SETCOLOUR(8448308);
            };
        };
    };
    if ((int0 == comp(1479, 19))) {
        IF_SETONTIMER(callback(script20308, int0, 96927762, 96927764, -2147483645), 96927750);
    } else {
        IF_SETONTIMER(callback(script20308, int0, 89194516, 89194518, -2147483645), 89194502);
    };
    return;
}