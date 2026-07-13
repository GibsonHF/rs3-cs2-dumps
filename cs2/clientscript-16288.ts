//
function script16288(): void {
    if ((varbitplayer_61266 < 1)) {
        return;
    };
    var int0 = 74907653;
    var int1 = 0;
    var int2 = -1 as dbrow;
    var int3 = 0;
    var string0 = "";
    var int4 = 0;
    var string1 = "";
    var int5 = -1 as struct;
    var int6 = 1;
    var int7 = -1;
    var int8 = 0;
    var int9 = script10664();
    while ((int1 < int9)) {
        int2 = script9925(int1);
        if ((int2 != -1 as dbrow)) {
            int5 = dbrow_getfield(int2, 1540128, 0);
            string0 = dbrow_getfield(int2, 1540112, 0);
            int4 = enum_getvalue(0, 0, 8822 as cs2enum, int1);
            string1 = `${enum_getvalue(0, 36, 6747 as cs2enum, int4)}.`;
            int6 = script734(script15411(int5));
            if ((int6 == 1)) {
                int6 = script9739(int2, int5);
            };
            if ((int6 == 0)) {
                int7 = 18461;
            } else {
                int7 = 2100;
            };
            script15938(int0, int1, 0, 0, 0, 0, 0, 0, 34, 1, 0);
            CC_SETOP(1, "Teleport");
            CC_SETOPBASE(string0);
            script16109(int1, 3, 0, 0, 0, 0, 0, 0, 1, 1, int1, script12585(int6));
            if ((int6 == 1)) {
                CC_SETONMOUSEOVER(callback(script10011, -2147483645, -2147483643, 4209721));
                CC_SETONMOUSELEAVE(callback(script10011, -2147483645, -2147483643, CC_GETCOLOUR()));
            };
            script10485(int1, 4, 2, 0, 0, 1, 34, 2, 1, 1, 17467, string1);
            script7918(int1, 5, 20, 0, 0, 1, 30, 30, 0, 0, -1);
            script20638(int5, int6);
            script10485(int1, 6, 2, 0, 2, 1, 58, 2, 1, 1, int7, string0);
            int8 = (int8 + 34);
        } else {
            int1 = 43;
        };
        int1 = (int1 + 1);
    };
    script19620(74907654, int0, int8, -1, 0, 0, 0, 0);
    return;
}