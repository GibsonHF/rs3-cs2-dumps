//
function script16852(): void {
    var int0 = comp(1499, 26);
    var int1 = script9740();
    unk11023(int1, 1540112, 1);
    dbrow_findnext();
    var int2 = stack();
    var int3 = 0;
    var string0 = "";
    var int4 = -1;
    var int5 = (30 + 4);
    var int6 = 0;
    var int7 = 0;
    var int8 = 1;
    var int9 = -1;
    var int10 = 5;
    var int11 = 5;
    if ((script6431() == 1)) {
        int10 = 20;
        int11 = 5;
    };
    CC_DELETEALL(int0);
    while ((int2 != -1 as dbrow)) {
        int3 = dbrow_getfield(int2, 1540096, 0);
        if ((script9741(int3) == 0)) {
            int4 = dbrow_getfield(int2, 1540128, 0);
            string0 = dbrow_getfield(int2, 1540112, 0);
            int8 = script734(script15411(int4));
            if ((int8 == 1)) {
                int8 = script9739(int2, int4);
            };
            if ((int8 == 0)) {
                int9 = 18461;
            } else {
                int9 = 2100;
            };
            script15938(int0, int3, 0, 0, int6, 0, 0, 0, 34, 1, 0);
            CC_SETDRAGDEADZONE(int10);
            CC_SETDRAGDEADTIME(int11);
            CC_SETONDRAG(callback(script20656, -2147483645, -2147483643));
            CC_SETONDRAGCOMPLETE(callback(script20708, -2147483645, -2147483643, -2147483642, -2147483641));
            CC_SETONOP(callback(script20711, -2147483645, -2147483643, -2147483644));
            CC_SETOP(1, "Add");
            script16109(int3, 1, 0, 0, 0, 0, 0, 0, 1, 1, int7, script12585(int8));
            script7918(int3, 2, 2, 0, 0, 1, 30, 30, 0, 0, -1);
            script20638(int4, int8);
            script10485(int3, 3, 2, 0, 2, 1, 38, 2, 1, 1, int9, string0);
            int7 = (int7 + 1);
            int6 = (int6 + 34);
        };
        dbrow_findnext();
        int2 = stack();
    };
    script19620(98238491, int0, int6, -1, 0, 0, 0, 0);
    return;
}