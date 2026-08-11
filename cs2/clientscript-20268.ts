//
function script20268(int0: number): void {
    CC_DELETEALL(comp(1443, 34));  // league_parent_relics:overview_unlock
    var int1 = 0;
    var int2 = DB_GETFIELDCOUNT(int0, 1339392);
    var int3 = -1;
    var int4 = 0;
    var int5 = 0;
    var int6 = 0;
    var int7 = IF_GETWIDTH(comp(1443, 34));  // league_parent_relics:overview_unlock
    var int8 = 0;
    var int9 = 0;
    var string0 = "";
    var int10 = -1;
    var int11 = -1;
    var int12 = 0;
    var int13 = 0;
    var int14 = script20145();
    script20951();
    var int15 = [];
    if (((int14 == -1) || (int15 == -1))) {
        unk11016("Invalid current tier or no tier unlocked");
        return;
    };
    if ((IF_FIND(comp(1443, 34)) == 1)) {  // league_parent_relics:overview_unlock
        while ((int1 < int2)) {
            int3 = dbrow_getfield(int0, 1339392, int1);
            int4 = DB_GETFIELDCOUNT(int3, 1343504);
            if ((int14 != int15)) {
                if ((int14 >= int1)) {
                    if ((script20143(int3, int4) == 1)) {
                        stack(int3);
                        stack(int1);
                        script21088();
                        string0 = ` - Active!`;
                        int10 = 12761;
                    } else {
                        if ((int11 == -1)) {
                            int11 = int5;
                        };
                        stack(int3);
                        stack(int1);
                        script21088();
                        string0 = [];
                        int10 = 21652;
                    };
                } else {
                    if ((int11 == -1)) {
                        int11 = int5;
                    };
                    stack(int3);
                    stack(int1);
                    script21088();
                    string0 = [];
                    int10 = 21652;
                };
            } else {
                if ((int11 == -1)) {
                    int11 = int5;
                };
                stack(int3);
                stack(int1);
                script21088();
                string0 = [];
                int10 = 21652;
            };
            if ((int1 == varbitplayer_58407)) {
                int12 = int6;
            };
            [int5, int6] = script19613(0, int5, int6, int7, string0);
            int8 = 0;
            int13 = 0;
            int9 = DB_GETFIELDCOUNT(int3, 1343568);
            while ((int8 < int9)) {
                string0 = dbrow_getfield(int3, 1343571, int8);
                if ((STRING_LENGTH(string0) > 0)) {
                    [int5, int6] = script20339(0, int5, int6, int7, 0, string0, int10, -1, -1);
                    int13 = (int13 + 1);
                };
                int8 = (int8 + 1);
            };
            int8 = 0;
            int9 = DB_GETFIELDCOUNT(int3, 1343648);
            while ((int8 < int9)) {
                string0 = dbrow_getfield(int3, 1343648, int8);
                if ((STRING_LENGTH(string0) > 0)) {
                    [int5, int6] = script20339(0, int5, int6, int7, 0, string0, int10, -1, -1);
                    int13 = (int13 + 1);
                };
                int8 = (int8 + 1);
            };
            if ((int13 == 0)) {
                [int5, int6] = script19615(0, int5, int6, int7, "N/A");
            };
            if ((int1 == varbitplayer_58407)) {
                IF_SETPOSITION(0, int12, 1, 0, comp(1443, 33));  // league_parent_relics:wrapper_back
                IF_SETSIZE(0, (int6 - int12), 1, 0, comp(1443, 33));  // league_parent_relics:wrapper_back
            };
            int1 = (int1 + 1);
        };
    };
    script19620(94568483, 94568480, int6, 94568481, -1, 1, -1, -1);
    return;
}