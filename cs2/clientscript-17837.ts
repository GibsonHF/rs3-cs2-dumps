//
function script17837(): void {
    var int0 = 98238500;
    var int1 = 0;
    var int2 = -1;
    var int3 = 0;
    var string0 = "";
    var int4 = 0;
    var string1 = "";
    var int5 = -1;
    var int6 = 1;
    var int7 = 0;
    var int8 = 5;
    var int9 = 5;
    if ((script6431() == 1)) {
        int8 = 20;
        int9 = 5;
    };
    var int10 = 0;
    var int11 = script10664();
    while ((int1 < 43)) {
        int2 = script9848(int1);
        if ((int2 != -1)) {
            if ((int1 < int11)) {
                int5 = dbrow_getfield(int2, 1540128, 0);
                string0 = dbrow_getfield(int2, 1540112, 0);
                int4 = enum_getvalue(0, 0, 8822, int1);
                string1 = `${enum_getvalue(0, 36, 6747, int4)}.`;
                int6 = script734(script15411(int5));
                if ((int6 == 1)) {
                    int6 = script9739(int2, int5);
                };
                script15938(int0, int1, 0, 0, 0, 0, 0, 0, 34, 1, 0);
                CC_SETDRAGDEADZONE(int8);
                CC_SETDRAGDEADTIME(int9);
                CC_SETONDRAG(callback(script20656, -2147483645, -2147483643));
                CC_SETONDRAGCOMPLETE(callback(script20708, -2147483645, -2147483643, -2147483642, -2147483641));
                CC_SETONMOUSEOVER(callback(script20710, -2147483645, -2147483643));
                CC_SETONOP(callback(script20711, -2147483645, -2147483643, -2147483644));
                CC_SETOP(1, "Remove");
                CC_SETOP(2, "Set Default");
                script10033(int1, 1, 0, 0, 0, 0, 0, 34, 1, 1, 4366);
                script15937(int1, 2, 0, 0, 0, 2, 0, 34, 1, 0);
                script16109(int1, 3, 0, 0, 0, 0, 0, 0, 1, 1, int1, 0);
                script10485(int1, 4, 2, 0, 0, 1, 34, 2, 1, 1, 17467, string1);
                script7918(int1, 5, 20, 0, 0, 1, 30, 30, 0, 0, -1);
                script20638(int5, int6);
                script10485(int1, 6, 2, 0, 2, 1, 58, 2, 1, 1, 2100, string0);
                int7 = (int7 + 34);
                int10 = (int10 + 1);
            };
        } else {
            script15938(int0, 43, 0, 0, 0, 0, 0, 0, 5000, 1, 0);
            CC_SETONMOUSEOVER(callback(script20710, -2147483645, -2147483643));
            script10033(43, 1, 0, 0, 0, 0, 0, 34, 1, 0, 4366);
            CC_SETHIDE(true);
            int7 = (int7 + 34);
            int1 = 43;
        };
        int1 = (int1 + 1);
    };
    IF_SETTEXT(`Active (${inttostring(int10, 10)}/${inttostring(int11, 10)})`, comp(1499, 34));
    script19620(98238501, int0, int7, -1, 0, 0, 0, 0);
    return;
}