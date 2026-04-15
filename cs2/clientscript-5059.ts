//
function script5059(int0: component, int1: int, int2: unknown_int): void {
    var int3 = (int1 * 12);
    if ((int2 == 1)) {
        if ((CC_FIND(int0, (int3 + 2)) == 1)) {
            CC_SETGRAPHIC(7555 as graphic);
        };
        if ((CC_FIND(int0, (int3 + 3)) == 1)) {
            CC_SETGRAPHIC(7554 as graphic);
        };
        if ((CC_FIND(int0, (int3 + 4)) == 1)) {
            CC_SETGRAPHIC(7556 as graphic);
        };
        if ((CC_FIND(int0, int3) == 1)) {
            CC_SETONMOUSEOVER(callback());
            CC_SETONMOUSELEAVE(callback());
        };
        if ((IF_GETHIDE(comp(1111, 18)) == true)) {
            script5063(int0, int1, 0);
            if ((CC_FIND(int0, (int3 + 1)) == 1)) {
                CC_SETONMOUSEOVER(callback(script5061, -2147483645, int1, 1, 0));
                CC_SETONMOUSELEAVE(callback(script5061, -2147483645, int1, 0, 0));
            };
        } else {
            if ((CC_FIND(int0, (int3 + 5)) == 1)) {
                CC_SETGRAPHIC(7555 as graphic);
            };
            if ((CC_FIND(int0, (int3 + 6)) == 1)) {
                CC_SETGRAPHIC(7554 as graphic);
            };
            if ((CC_FIND(int0, (int3 + 7)) == 1)) {
                CC_SETGRAPHIC(7556 as graphic);
            };
            if ((CC_FIND(int0, (int3 + 10)) == 1)) {
                CC_SETGRAPHIC(7408 as graphic);
            };
            if ((CC_FIND(int0, (int3 + 1)) == 1)) {
                CC_SETONMOUSEOVER(callback());
                CC_SETONMOUSELEAVE(callback());
            };
        };
    } else {
        script5062(int0, int1, 0);
        script5063(int0, int1, 0);
        if ((CC_FIND(int0, int3) == 1)) {
            CC_SETONMOUSEOVER(callback(script5060, -2147483645, int1, 1));
            CC_SETONMOUSELEAVE(callback(script5060, -2147483645, int1, 0));
        };
        if ((CC_FIND(int0, (int3 + 1)) == 1)) {
            CC_SETONMOUSEOVER(callback(script5061, -2147483645, int1, 1, 1));
            CC_SETONMOUSELEAVE(callback(script5061, -2147483645, int1, 0, 1));
        };
    };
    return;
}