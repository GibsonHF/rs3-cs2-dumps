//
function script15200(): void {
    CC_DELETEALL(40763399);
    CC_DELETEALL(40763400);
    var int0 = 0;
    var int1 = (IF_GETWIDTH(40763395) - 30);
    var int2 = 30;
    var int3 = 2;
    var int4 = 4;
    var int5 = 6;
    var int6 = ENUM_GETOUTPUTCOUNT(16002);
    var string0 = "";
    var int7 = 0;
    while ((int0 < int6)) {
        if ((varbitplayer_47852 == int0)) {
            int7 = 1;
        } else {
            int7 = 0;
        };
        script10410(40763399, 40763400, 28556, int4, int3, int1, int2, int0, int7, enum_getvalue(0, 36, 16003 as cs2enum, int0));
        int3 = (int3 + (int2 + int5));
        if ((CC_FIND(40763400, int0) == 1)) {
            CC_SETONOP(callback(script15201, int0));
        };
        int0 = (int0 + 1);
    };
    int3 = (int3 - int5);
    IF_SETSCROLLSIZE(0, int3, 40763397);
    script7791(40763398, 40763397);
    return;
}