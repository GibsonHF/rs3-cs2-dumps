//[proc,notes_build]
function script2445(int0: unknown_int, int1: int, int2: int, int3: int, string0: string): int {
    var string0 = ESCAPE(script2446(string0));
    var int4 = script7799(int0, comp(34, 12));
    var int5 = 0;
    if ((varbitplayer_38842 == 1)) {
        int5 = 40;
    };
    script15938(int4, int2, 0, 0, int1, 0, 0, 0, 0, 1, 0);
    script16109(int2, 1, 0, 0, 0, 0, 0, 0, 1, 1, int2, 0);
    CC_SETTRANS(128);
    script10485(int2, 2, 0, 0, 1, 1, 4, 4, 1, 1, 5999 as dbrow, string0);
    CC_SETCOLOUR(script2453(int2));
    var int6 = (IF_GETWIDTH(int4) - 4);
    var int7 = MAX(int5, script15891(string0, int6, CC_GETFONTMETRICS(), 0));
    int7 = (int7 + 4);
    if ((CC_FINDBYCATEGORY(int4, int2, 0) == 1)) {
        CC_SETSIZE(0, int7, 1, 0);
        CC_SETONDRAG(callback(script2450, int0, -2147483645, -2147483643, -2147483646));
        CC_SETONDRAGCOMPLETE(callback(script2451, int0, -2147483642));
        if ((varplayer_98 == int2)) {
            CC_SETOP(1, "Unselect");
        } else {
            CC_SETOP(1, "Select");
        };
        CC_SETOP(2, "Edit");
        CC_SETOP(3, "Colour");
        CC_SETOP(4, "Delete");
        CC_SETONOP(callback(script2448, -2147483645, -2147483643, int0, -2147483644, int2));
        CC_SETDRAGDEADTIME(5);
        CC_SETDRAGDEADZONE(15);
    };
    return ((int1 + int7) + 4);
}