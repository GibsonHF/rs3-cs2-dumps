//
function script2483(int0: inv, int1: int, int2: obj, int3: int): int {
    if ((int1 == -1)) {
        var int1 = script5797(varbitplayer_45141);
    };
    var int4 = int1;
    var int5 = script14337();
    var int6 = 0;
    var int7 = 0;
    var int8 = script5798(int4);
    var int9 = script14374(int8);
    if ((int9 == 1)) {
        int9 = 0;
    };
    var int10 = 0;
    [int6, int7] = script5787(int9);
    while ((int10 <= 15)) {
        if (((int7 - int6) > 0)) {
            int4 = script14340(int2, int4, int7);
            if ((int4 >= int7)) {
                int4 = -1;
            };
            while ((int4 != -1)) {
                script14363(int0, -1, int2, int2, 1, int4);
                if ((--int3 <= 0)) {
                    return 0;
                };
                int4 = script14340(int2, int4, int7);
                if ((int4 > int7)) {
                    int4 = -1;
                };
            };
        };
        if ((++int9 > 15)) {
            int9 = 0;
        } else if ((int9 == 1)) {
            int9 = 2;
        };
        [int6, int7] = script5787(script14372(int9));
        int4 = int6;
        int10 = (int10 + 1);
    };
    return int3;
}