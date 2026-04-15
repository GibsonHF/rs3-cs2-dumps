//
function script16875(int0: component): void {
    CC_DELETEALL(int0);
    var int1 = script16839();
    var int2 = script16838(0);
    var int3 = (int1 / 2);
    var int4 = (int1 / int3);
    if ((int4 > 5)) {
        int4 = 5;
        int3 = (int1 / 5);
    };
    int3 = MAX(2, int3);
    script7925(int0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, int3, int4, 5);
    var int5 = -1;
    while ((++int5 < int1)) {
        script15939(int0, 1, int5, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1);
        CC_SETSIZE(MIN(CC_GETWIDTH(), CC_GETHEIGHT()), MIN(CC_GETWIDTH(), CC_GETHEIGHT()), 0, 0);
        script7920(int0, (int5 + 2), 0, 1, int5, 0, 0, 1, 1, 0, 0, 1, 1, 10864 as graphic);
        script7920(int0, (int5 + 2), 1, 1, int5, 0, 0, 1, 1, 10, 10, 1, 1, 21619 as graphic);
        if (((int5 + 1) > int2)) {
            CC_SETHIDE(true);
        };
    };
    return;
}