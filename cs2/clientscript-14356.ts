//
function script14356(int0: int): int {
    var int1 = 0;
    var int2 = 0;
    var int3 = 15;
    var int4 = 0;
    var int5 = 0;
    while ((int3 >= 2)) {
        [int1, int2] = script5787(int3);
        if ((int2 > int1)) {
            int4 = script14293(int1, int2);
            if ((((script6316(int3, (0 - int4)) == 1) && (int0 > 2)) && (int0 > int3))) {
                var int0 = (int0 - 1);
            };
            int5 = (int5 + int4);
        };
        int3 = (int3 - 1);
    };
    int5 = (int5 + script14293(script5788()));
    script14358();
    varplayer_8970 = -1;
    varplayer_8971 = (varplayer_8971 - int5);
    return int0;
}