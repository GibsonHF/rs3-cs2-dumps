//
function script6795(int0: int, int1: obj, int2: inv, int3: int, int4: unknown_int): void {
    if ((int0 == -1)) {
        var int0 = script5797(varbitplayer_45141);
    };
    var int5 = script14337();
    var int6 = 0;
    var int7 = 0;
    var int8 = script5798(int0);
    var int9 = script14374(int8);
    if ((int9 == 1)) {
        int9 = 0;
    };
    var int10 = 0;
    var int11 = int0;
    [int6, int7] = script5787(int9);
    while ((int10 <= 15)) {
        if (((int7 - int6) > 0)) {
            int0 = script14342(int1, int0, 0);
            if ((int0 >= int7)) {
                int0 = -1;
            };
            while ((int0 != -1)) {
                script14362(int0, 1, int1, 1, int2, -1, false, int4);
                int11 = MIN(int0, int11);
                if ((--int3 <= 0)) {
                    script6961(int11, int1, int4);
                    return;
                };
                int0 = script14342(int1, int0, 0);
                if ((int0 > int7)) {
                    int0 = -1;
                };
            };
        };
        if ((++int9 > 15)) {
            int9 = 0;
        } else if ((int9 == 1)) {
            int9 = 2;
        };
        [int6, int7] = script5787(script14372(int9));
        int0 = int6;
        int10 = (int10 + 1);
    };
    script6961(int11, int1, int4);
    return;
}