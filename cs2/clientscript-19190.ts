//
function script19190(int0: struct): void {
    var int1 = comp(1288, 69);
    if (((varbitplayer_56046 == 0) || (IF_GETMODELZOOM(int1) != 400))) {
        script19191(int0, int1);
        script19184(int0, int1);
        IF_SETMODELANGLE(-55, 72, 0, -300, 0, 400, int1);
    };
    IF_SETOP(5, "Examine", comp(1288, 70));
    IF_SETOPBASE(`<col=FFFF00>${script19175(int0)}</col>`, comp(1288, 70));
    IF_SETONOP(callback(script19189, int0), comp(1288, 70));
    IF_SETTEXT(`Level<br>${inttostring(script19145(int0), 10)}`, 84410418);
    script19192(int0);
    IF_SETTEXT(script19175(int0), 84410417);
    var int2 = script19148(int0);
    var int3 = -1;
    var int4 = -1;
    var int5 = DB_GETFIELDCOUNT(int2, 401424);
    var int6 = 0;
    var int7 = -1;
    var int8 = -1;
    var int9 = 0;
    var int10 = script19146(int0);
    if ((int10 < dbrow_getfield(int2, 401408, 0))) {
        while (((int6 < int5) && (int4 == -1))) {
            [int7, int8, int9] = dbrow_getfield(int2, 401424, int6);
            if ((int9 > int10)) {
                if ((int3 == -1)) {
                    int3 = int6;
                } else if ((int4 == -1)) {
                    int4 = int6;
                    int6 = int5;
                };
            };
            int6 = (int6 + 1);
        };
    };
    if (((int3 == -1) || (int4 == -1))) {
        int3 = (int5 - 2);
        int4 = (int5 - 1);
    };
    script19194(int2, int3, comp(1288, 78), comp(1288, 80), comp(1288, 81), comp(1288, 82), int10);
    script19194(int2, int4, comp(1288, 75), comp(1288, 77), comp(1288, 109), comp(1288, 110), int10);
    var string0 = "Select this to see a full list of rewards";
    IF_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643), 84410442);
    return;
}