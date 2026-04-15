//
function script9616(): void {
    var int0 = 0;
    var int1 = 0;
    var int2 = 0;
    var string0 = "";
    var int3 = -1 as model;
    CC_DELETEALL(comp(311, 8));
    CC_DELETEALL(comp(311, 11));
    while ((int0 < 7)) {
        [int2, string0, int3] = script9775((int0 + 1));
        if ((int2 == 0)) {
            string0 = "?";
            int3 = -1 as model;
        };
        script13998(comp(311, 8), comp(311, 11), 28556 as struct, 0, int1, 180, 24, int0, script6428(0, int2), string0, script9670((int0 + 1), varbitplayer_41254));
        if ((CC_FIND(comp(311, 11), int0) == 1)) {
            CC_SETOP(1, "Select");
            CC_SETONOP(callback(script9776, -2147483643));
            CC_SETONMOUSEOVER(callback(script9777, -2147483643));
            CC_SETONMOUSELEAVE(callback(script9778));
        };
        int1 = (int1 + 28);
        int0 = (int0 + 1);
    };
    script9779(varbitplayer_41254);
    return;
}