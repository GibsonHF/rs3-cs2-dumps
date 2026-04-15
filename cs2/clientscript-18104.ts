//
function script18104(int0: dbrow): void {
    stack(script18008(50));
    stack(26411015);
    IF_SETGRAPHIC();
    var int1 = -1;
    var int2 = 0;
    var int3 = 0;
    var int4 = 0;
    var int5 = 0;
    var int6 = -1;
    var int7 = 0;
    var int8 = 0;
    var int9 = 0;
    var int10 = DB_GETFIELDCOUNT(int0, 991520);
    while ((int9 < int10)) {
        int3 = 0;
        int1 = dbrow_getfield(int0, 991520, int9);
        script15938(comp(403, 9), int9, int3++, 0, int8, 1, 0, (IF_GETWIDTH(comp(403, 9)) - 50), 58, 0, 0);
        int5 = script17926(int1);
        int2 = dbrow_getfield(int1, 1036384, 0);
        if ((int5 > 0)) {
            int6 = 7970 as dbrow;
        } else {
            int6 = 7971 as dbrow;
        };
        if ((int9 == 0)) {
            int7 = false;
        } else {
            int7 = true;
        };
        script7862(int9, int3++, 0, 0, 0, 0, 0, 58, 1, 0, int6, "", true, 1, true, int7);
        CC_SETOP(1, "Select");
        CC_SETONOP(callback(script18107, int9));
        script10485(int9, int3++, 0, 19, 0, 0, (CC_GETWIDTH() - 43), 20, 0, 0, 7986, `+${TOSTRING_LOCALISED(int5, 1)}% ${enum_getvalue(0, 36, 17022, int2)} XP`);
        [int3, int4] = script18105(int9, int3, int1, int5, int2);
        if ((CC_FINDBYCATEGORY(26411017, int9, 0) == 1)) {
            cc_setparam(4255, int4);
            if ((int9 == 0)) {
                cc_setparam(8193, 0);
                CC_SETSIZE(CC_GETWIDTH(), cc_getparam(4255), 0, 0);
                int8 = (int8 + cc_getparam(4255));
            } else {
                cc_setparam(8193, 1);
                int8 = (int8 + 58);
            };
        };
        int9 = (int9 + 1);
    };
    IF_SETSCROLLPOS(0, 0, comp(403, 9));
    script18109(int8);
    return;
}