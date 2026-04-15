//
function script18111(int0: dbrow): void {
    CC_DELETEALL(comp(403, 24));
    var int1 = DB_GETFIELDCOUNT(int0, 991536);
    var int2 = (1 + (int1 / 3));
    var int3 = (int1 + 1);
    var int4 = 0;
    var int5 = 0;
    var int6 = 0;
    var int7 = 0;
    while ((int4 < int2)) {
        int7 = MIN((int1 - (int4 * 3)), 3);
        int5 = ((int7 * 200) + ((int7 - 1) * 20));
        int6 = (int4 * (200 + 20));
        script15945(comp(403, 24), int3, int4, 0, int6, 1, 0, int5, 200, 0, 0, 0, 20);
        int4 = (int4 + 1);
    };
    var int8 = 0;
    var int9 = 0;
    var int10 = 0;
    var int11 = 1;
    var int12 = -1 as dbrow;
    var int13 = 0;
    var int14 = -1;
    var string0 = "";
    var string1 = "";
    var int15 = 0;
    var int16 = 0;
    var int17 = 0;
    while ((int11 <= int1)) {
        int8 = 0;
        int17 = 22;
        if ((int10 == 3)) {
            int10 = 0;
            int9 = (int9 + 1);
        };
        if ((CC_FINDBYCATEGORY(comp(403, 24), int3, int9) == 1)) {
            script15937(int11, int8++, 0, 0, 0, 0, 200, 200, 0, 0);
            int12 = dbrow_getfield(int0, 991536, (int11 - 1));
            int13 = script17924(int11);
            if ((int13 <= 0)) {
                int17 = 23;
            };
            script17947(int11, int8++, 0, 0, 0, 0, 0, 0, 1, 1, 7929 as dbrow);
            CC_GETDYNAMICLAYER();
            script7918(int11, int8++, 0, 50, 1, 0, 6, 0, 1, 1, 3860 as graphic);
            script10485(int11, int8++, 0, 3, 1, 0, 10, 47, 1, 0, 7986 as dbrow, script17915(int12));
            CC_SETTEXTALIGN(1, 1, 20);
            script10485(int11, int8++, 0, 52, 1, 0, 10, 55, 1, 0, 7996 as dbrow, script17916(int12));
            int15 = script17919(int12);
            int16 = script17925(int11);
            if ((int16 <= 0)) {
                string1 = "<col=E0D471>Buff Inactive</col>";
                if ((int15 != -1)) {
                    string0 = "Use Charge";
                } else {
                    string0 = "Activate";
                };
            } else {
                if ((int15 != -1)) {
                    string1 = `<col=FF00>Buff Active for ${script15973((int16 * 25), 0)}</col>`;
                    int17 = 23;
                } else {
                    string1 = "<col=FF00>Buff Active</col>";
                };
                string0 = "Deactivate";
            };
            script10485(int11, int8++, 40, 107, 0, 0, 80, 29, 0, 0, 7995 as dbrow, string1);
            CC_SETTEXTALIGN(0, 1, 0);
            string0 = "Disabled";
            script10485(int11, int8++, 0, 140, 1, 0, 10, 15, 1, 0, 7995 as dbrow, `<col=2EF8FF>${TOSTRING_LOCALISED(int13, 1)}</col> ${script4583(int13, "charge", "charges")} remaining`);
            script7858(0, int11, 0, 160, 1, 0, 130, 30, 0, 0, script17989(int17), `<col=E0D471>${string0}</col>`);
            script7872(false, 1, false, false);
            CC_SETTEXTFONT(57 as fontmetrics);
            CC_SENDTOFRONT();
        };
        int10 = (int10 + 1);
        int11 = (int11 + 1);
    };
    return;
}