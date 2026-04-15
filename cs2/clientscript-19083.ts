//
function script19083(): void {
    CC_DELETEALL(comp(1147, 82));
    var int0 = struct_getparam(50195, 9127);
    var int1 = ENUM_GETOUTPUTCOUNT(int0);
    var int2 = comp(1147, 82);
    var int3 = 0;
    var int4 = 0;
    var int5 = -1 as dbrow;
    var string0 = "";
    var int6 = -1 as graphic;
    while ((++int3 < (int1 + 1))) {
        int5 = enum_getvalue(0, 74, int0, int3);
        if ((script19068(int5) == 1)) {
            int6 = 34121 as graphic;
        } else if ((script19069(int5) == 0)) {
            int6 = 34125 as graphic;
        } else {
            int6 = 34123 as graphic;
        };
        script14391(int2, int3, 0, 0, 0, 0, 146, (122 - 10), 0, 0);
        script7920(int2, (int3 + 1), int4, 0, int3, 0, 0, 1, 1, 146, 122, 0, 0, int6);
        CC_SETONMOUSEOVER(callback(script19084, (int3 + 1), int4));
        CC_SETONMOUSELEAVE(callback(script19085, (int3 + 1), int4));
        int4 = (int4 + 1);
        script7920(int2, (int3 + 1), int4, 0, int3, 0, 0, 1, 1, 146, 122, 0, 0, 34127);
        CC_SETHIDE(1);
        int4 = (int4 + 1);
        string0 = dbrow_getfield(int5, 1187856, 0);
        script10507(int2, (int3 + 1), int4, 0, int3, 0, -5, 1, 1, (146 - 40), 122, 0, 0, 17467, `<col=FFFFFF>${string0}</col>`);
        CC_SETTEXTALIGN(1, 1, 0);
        CC_SETONOP(callback(script19086, int3));
        CC_SETONVARTRANSMIT(callback(script19097, int3, 11790, 1));
        CC_SETOP(1, "Select");
        CC_SETOPCURSOR(1, 46);
        int4 = 0;
    };
    return;
}