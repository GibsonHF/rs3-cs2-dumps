//
function script20268(int0: dbrow): void {
    CC_DELETEALL(comp(1443, 30));
    var int1 = 0;
    var int2 = DB_GETFIELDCOUNT(int0, 1339392);
    var int3 = -1 as dbrow;
    var int4 = 0;
    var int5 = 0;
    var int6 = 0;
    var int7 = IF_GETWIDTH(comp(1443, 30));
    var int8 = 0;
    var int9 = 0;
    var string0 = "";
    var int10 = -1 as graphic;
    var int11 = -1;
    var int12 = 0;
    var int13 = 0;
    if ((IF_FIND(comp(1443, 30)) == 1)) {
        while ((int1 < int2)) {
            int3 = dbrow_getfield(int0, 1339392, int1);
            int4 = DB_GETFIELDCOUNT(int3, 1343504);
            if ((((varbitplayer_58404 != 63) && (varbitplayer_58404 >= int1)) && (script20143(int3, int4) == true))) {
                string0 = `Tier ${inttostring((int1 + 1), 10)} - Active!`;
                int10 = 12761 as graphic;
            } else {
                if ((int11 == -1)) {
                    int11 = int5;
                };
                string0 = `Tier ${inttostring((int1 + 1), 10)}`;
                int10 = 21652 as graphic;
            };
            if ((int1 == varbitplayer_58407)) {
                int12 = int6;
            };
            [int5, int6] = script19613(0, int5, int6, int7, string0);
            int8 = 0;
            int13 = 0;
            int9 = DB_GETFIELDCOUNT(int3, 1343552);
            while ((int8 < int9)) {
                string0 = dbrow_getfield(int3, 1343555, int8);
                if ((STRING_LENGTH(string0) > 0)) {
                    [int5, int6] = script20339(0, int5, int6, int7, 0, string0, int10, -1 as fontmetrics, -1);
                    int13 = (int13 + 1);
                };
                int8 = (int8 + 1);
            };
            int8 = 0;
            int9 = DB_GETFIELDCOUNT(int3, 1343584);
            while ((int8 < int9)) {
                string0 = dbrow_getfield(int3, 1343584, int8);
                if ((STRING_LENGTH(string0) > 0)) {
                    [int5, int6] = script20339(0, int5, int6, int7, 0, string0, int10, -1 as fontmetrics, -1);
                    int13 = (int13 + 1);
                };
                int8 = (int8 + 1);
            };
            if ((int13 == 0)) {
                [int5, int6] = script19615(0, int5, int6, int7, "N/A");
            };
            if ((int1 == varbitplayer_58407)) {
                IF_SETPOSITION(0, int12, 1, 0, comp(1443, 29));
                IF_SETSIZE(0, (int6 - int12), 1, 0, comp(1443, 29));
            };
            int1 = (int1 + 1);
        };
    };
    script19620(comp(1443, 31), comp(1443, 28), int6, comp(1443, 29), -1, 1, -1, -1);
    return;
}