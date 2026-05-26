//
function script15801(int0: number, int1: number, int2: number, int3: number, int4: number): void {
    var int5 = varbitplayer_49046;
    var int6 = 0;
    if ((int5 <= -1)) {
        int6 = 1;
    } else if ((varbitplayer_49044 < 60)) {
        int5 = 0;
    } else if ((varbitplayer_49044 > 60)) {
        int5 = 100;
    };
    if ((CC_FIND(int0, int3) == 1)) {
        CC_SETTEXT(script15799());
        script3403();
    };
    var int7 = (int4 + 3);
    var int8 = int4;
    var int9 = 0;
    while ((int8 < int7)) {
        if ((CC_FIND(int0, int8) == 1)) {
            if ((int8 == (int4 + 2))) {
                int9 = ((CC_GETX() + CC_GETWIDTH()) - 10);
            };
            CC_SETHIDE(int6);
        };
        int8 = (int8 + 1);
    };
    if ((int6 == 0)) {
        int5 = script12377(int5, 0, 100);
        int5 = ((int5 * int9) / 100);
        if ((CC_FIND(int0, (int4 + 3)) == 1)) {
            CC_SETSIZE((int5 - 4), (24 - 4), 0, 0);
        };
    };
    if ((CC_FIND(int1, int2) == 1)) {
        if ((varbitplayer_49046 >= 100)) {
            script3400(int1, int2, 50);
        } else {
            CC_SETTEXT(script15798());
        };
    };
    return;
}