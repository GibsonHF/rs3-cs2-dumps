//
function script7253(): void {
    var int0 = 0;
    var int1 = -1 as obj;
    var int2 = -1 as graphic;
    var int3 = -1 as graphic;
    var int4 = -1;
    var string0 = "";
    var string1 = "No crewman";
    while ((int0 < INV_SIZE(677 as inv))) {
        int1 = INV_GETOBJ(677 as inv, int0);
        if ((enum_hasoutput(33, 2173 as cs2enum, int1) == 1)) {
            int3 = 15581 as graphic;
            int2 = 15579 as graphic;
            int4 = 15580;
        } else {
            int3 = 15584 as graphic;
            int2 = 15582 as graphic;
            int4 = 15583;
        };
        if ((CC_FIND(comp(916, 181), int0) == 1)) {
            if ((varplayer_3393 == int0)) {
                CC_SETGRAPHIC(int3);
                CC_SETONMOUSEOVER(callback());
                CC_SETONMOUSELEAVE(callback());
            } else {
                CC_SETGRAPHIC(int2);
                CC_SETONMOUSEOVER(callback(script688, -2147483645, CC_GETID(), int4));
                CC_SETONMOUSELEAVE(callback(script688, -2147483645, CC_GETID(), int2));
            };
        };
        if ((CC_FIND(comp(916, 185), int0) == 1)) {
            if ((varplayer_3393 == int0)) {
                CC_SETGRAPHIC(int3);
                CC_SETONMOUSEOVER(callback());
                CC_SETONMOUSELEAVE(callback());
            } else {
                CC_SETGRAPHIC(int2);
                CC_SETONMOUSEOVER(callback(script688, -2147483645, CC_GETID(), int4));
                CC_SETONMOUSELEAVE(callback(script688, -2147483645, CC_GETID(), int2));
            };
        };
        int0 = (int0 + 1);
    };
    return;
}