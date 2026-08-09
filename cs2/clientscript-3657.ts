//
function script3657(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number, int6: number, int7: number, int8: number, int9: number): void {
    if ((int7 == false)) {
        var int9 = true;
    };
    var int10 = 0;
    var int11 = (int0 * 11);
    while ((int10 < 11)) {
        if ((CC_FIND(int5, (int11 + int10)) == 1)) {
            if ((int10 == 8)) {
                if (((script3616() == 1) || (int9 == true))) {
                    CC_SETHIDE(true);
                } else {
                    CC_SETHIDE(int9);
                };
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
            CC_SETOP(callback(script1));
            CC_SETHIDE(true);
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