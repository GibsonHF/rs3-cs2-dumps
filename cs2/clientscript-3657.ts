//
function script3657(int0: int, int1: unknown_int, int2: component, int3: component, int4: component, int5: component, int6: component, int7: boolean, int8: unknown_int, int9: boolean): void {
    if ((int7 == false)) {
        var int9 = true;
    };
    var int10 = 0;
    var int11 = (int0 * 11);
    while ((int10 < 11)) {
        if ((CC_FIND(int5, (int11 + int10)) == 1)) {
            if (((int10 == 8) && ((script3616() == true) || (int9 == true)))) {
                CC_SETHIDE(true);
            } else {
                CC_SETHIDE(int9);
            };
        };
        int10 = (int10 + 1);
    };
    if ((CC_FIND(int6, int0) == 1)) {
        CC_SETHIDE(int9);
    };
    if ((CC_FIND(int3, (int0 * 2)) == 1)) {
        if ((int8 == 0)) {
            CC_SETGRAPHIC(11414 as graphic);
        } else {
            CC_SETGRAPHIC(-1 as graphic);
        };
        CC_SETHIDE(int7);
    };
    if ((CC_FIND(int3, ((int0 * 2) + 1)) == 1)) {
        CC_SETHIDE(int7);
    };
    if ((CC_FIND(int4, int0) == 1)) {
        CC_SETHIDE(int7);
        if ((int8 == 1)) {
            CC_SETONOP(callback());
            CC_SETOP(1, "");
            CC_SETHIDE(1);
        } else {
            CC_SETONOP(callback(script3641, int0));
            CC_SETOP(1, "Claim reward");
        };
    };
    if ((CC_FIND(int2, int0) == 1)) {
        if ((int9 == false)) {
            CC_SETOP(1, "");
        } else {
            CC_SETOP(1, "View task");
        };
    };
    return;
}