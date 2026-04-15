//
function script14355(): void {
    var int0 = 0;
    var int1 = 0;
    var int2 = 15;
    var int3 = 0;
    var int4 = 0;
    while ((int2 >= 2)) {
        [int0, int1] = script5787(int2);
        if ((int1 > int0)) {
            int3 = script14293(int0, int1);
            script6316(int2, (0 - int3));
            int4 = (int4 + int3);
        };
        int2 = (int2 - 1);
    };
    int4 = (int4 + script14293(script5788()));
    script14359();
    varplayer_8970 = -1;
    varplayer_8971 = (varplayer_8971 - int4);
    return;
}