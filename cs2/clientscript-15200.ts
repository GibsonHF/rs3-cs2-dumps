//
function script15200(): void {
    CC_DELETEALL(comp(622, 7));
    CC_DELETEALL(comp(622, 8));
    var int0 = 0;
    var int1 = (IF_GETWIDTH(comp(622, 3)) - 30);
    var int2 = 30;
    var int3 = 2;
    var int4 = 4;
    var int5 = 6;
    var int6 = ENUM_GETOUTPUTCOUNT(16002 as cs2enum);
    var string0 = "";
    var int7 = false;
    while ((int0 < int6)) {
        if ((varbitplayer_47852 == int0)) {
            int7 = true;
        } else {
            int7 = false;
        };
        script10410(comp(622, 7), comp(622, 8), 28556 as struct, int4, int3, int1, int2, int0, int7, enum_getvalue(0, 36, 16003 as cs2enum, int0));
        int3 = (int3 + (int2 + int5));
        if ((CC_FIND(comp(622, 8), int0) == 1)) {
            CC_SETONOP(callback(script15201, int0));
        };
        int0 = (int0 + 1);
    };
    int3 = (int3 - int5);
    IF_SETSCROLLSIZE(0, int3, comp(622, 5));
    script7791(comp(622, 6), comp(622, 5));
    return;
}