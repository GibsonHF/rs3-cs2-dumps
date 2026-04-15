//
function script2138(int0: component, int1: int, int2: int): void {
    var int3 = (varbitplayer_14121 + 95);
    var int4 = (varbitplayer_14119 + 85);
    var int5 = (varbitplayer_14115 + 29);
    var int6 = 0;
    var int7 = 0;
    if ((CC_FIND(int0, int1) == 1)) {
        if ((int2 < 150)) {
            CC_SETTRANS(++int2);
            CC_SETONTIMER(callback(script2138, -2147483645, -2147483643, int2));
        } else if ((int2 <= 225)) {
            CC_SETTRANS(++int2);
            CC_SETONTIMER(callback(script2138, -2147483645, -2147483643, int2));
        } else if ((int2 < 300)) {
            var int2 = (int2 + 2);
            CC_SETTRANS((450 - int2));
            CC_SETONTIMER(callback(script2138, -2147483645, -2147483643, int2));
        } else {
            int2 = 150;
            CC_SETTRANS(150);
            CC_SETONTIMER(callback(script2138, -2147483645, -2147483643, int2));
        };
        int6 = SCALE(CC_GETTRANS(), 255, 100);
        int7 = (int6 / 2);
        switch (varbitplayer_14123) {
            case 0: {
                int4 = (int4 + int6);
                int3 = (int3 + int7);
                break;
            }
            case 1: {
                int5 = (int5 + int6);
                int3 = (int3 + int7);
                break;
            }
            case 2: {
                int5 = (int5 + int6);
                int4 = (int4 + int7);
                break;
            }
            default: {
                int4 = (int4 + int6);
                int5 = (int5 + int7);
                break;
            }
        };
        CC_SETCOLOUR(script693(int3, int4, int5));
    };
    return;
}