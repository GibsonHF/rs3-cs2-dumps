//
function script8907(int0: number): void {
    CC_DELETEALL(33882336);
    CC_DELETEALL(33882337);
    var int1 = 0;
    var int2 = ENUM_GETOUTPUTCOUNT(15584);
    var int3 = 0;
    var int4 = 5;
    var int5 = 0;
    var int6 = script5869(int0);
    var int7 = script5883(int0);
    var int8 = IF_GETWIDTH(33882335);
    var int9 = -1 as graphic;
    var string0 = "Choose a name";
    if ((int7 > 0)) {
        string0 = "";
    };
    while ((int1 < int2)) {
        int9 = enum_getvalue(0, 23, 15584 as cs2enum, int1);
        script4512(33882337, 35, 35, int4, int5, int9);
        if ((CC_FIND(33882337, int1) == 1)) {
            CC_SETOP(1, "Select");
            CC_SETONOP(callback(script8908, int0, -2147483643));
        };
        if (((++int4 + 45) > int8)) {
            int4 = 5;
            int5 = (int5 + 45);
        };
        int1 = (int1 + 1);
    };
    if ((int4 != 5)) {
        int5 = (int5 + 45);
    };
    int5 = (int5 + 88);
    IF_SETSIZE(345, MIN(int5, 400), 0, 0, 33882330);
    script14141(33882333, 33882334, 8657, ENUM_GETOUTPUTCOUNT(8657), "", int7, 0, 0, string0);
    if ((int5 > 400)) {
        IF_SETSCROLLSIZE(0, (int5 - 88), 33882335);
        script7791(33882338, 33882335);
    };
    IF_SETHIDE(0, 33882330);
    IF_SETONOP(callback(script8908, int0, -1), 33882339);
    if ((varbitplayer_45192 == 1)) {
        IF_SETPOSITION(0, 0, 0, 1, 33882330);
    } else {
        IF_SETPOSITION(0, 0, 1, 0, 33882330);
    };
    return;
}