//
function script16791(int0: component, int1: component, int2: int): void {
    var int3 = -1;
    var int4 = DB_LISTALL(217);
    var int5 = -1 as dbrow;
    var int6 = 0;
    var int7 = (140 + IF_GETCHILDSPACING(int0));
    if (((int7 * int4) > IF_GETHEIGHT(int0))) {
        IF_SETSIZE(16, 53, 1, 1, int0);
        IF_SETHIDE(false, int1);
        IF_SETSCROLLSIZE(0, (int7 * int4), int0);
        script7791(int1, int0);
    };
    var int8 = 0;
    var int9 = 0;
    var int10 = 0;
    var int11 = 1;
    var int12 = 3;
    var int13 = 1532 as graphic;
    var int14 = 0;
    var int15 = 0;
    var int16 = 0;
    var int17 = 0;
    var string0 = "";
    var string1 = "";
    var int18 = int2;
    while ((++int3 < int4)) {
        dbrow_findnext();
        int5 = stack();
        stack(3);
        stack(int5);
        stack(888832);
        stack(0);
        dbrow_getfield();
        int6 = MIN(stack(), script15809(stack()));
        if ((int18 == -1)) {
            if ((int6 >= 1)) {
                string1 = `Earned Tier ${inttostring(int6, 10)} Rewards`;
            } else {
                string1 = "Earned Rewards";
            };
            var int2 = int6;
        } else if ((int6 >= int2)) {
            string1 = `Earned Tier ${inttostring(int2, 10)} Rewards`;
        } else {
            string1 = `Preview of tier ${inttostring(int2, 10)} Rewards`;
        };
        int9 = 0;
        script15938(int0, int3, int9, 0, 0, 1, 1, 10, 140, 1, 0);
        int9 = (int9 + 1);
        script10033(int3, int9, 0, 0, 1, 1, 0, 0, 1, 1, 4128 as dbrow);
        int9 = (int9 + 1);
        script10028(int3, int9, 0, 0, 1, 1, 0, 0, 1, 1, 0, 6);
        int8 = UI_GETDYNID(CC_GETID());
        int9 = (int9 + 1);
        script10028(int3, int9, 0, 0, 0, 0, 7373, 0, 2, 1, 1, 0);
        int9 = (int9 + 1);
        script10485(int3, int9, 0, 0, 1, 1, 0, 25, 1, 0, 2196 as dbrow, dbrow_getfield(int5, 888848, 0));
        CC_SETTEXTALIGN(1, 1, 0);
        int9 = (int9 + 1);
        script9727(int3, int9, 0, 0, 1, 1, 81, 81, 0, 0, dbrow_getfield(int5, 888864, 0), 0, 0, 512, 0, 0, 400);
        int9 = (int9 + 1);
        script10028(int3, int9, 0, 0, 0, 0, 0, 0, 1, 1, 0, 6);
        int10 = UI_GETDYNID(CC_GETID());
        int9 = (int9 + 1);
        script15937(int3, int9, 0, 0, 0, 0, 0, 0, 1, 1);
        int9 = (int9 + 1);
        int11 = 1;
        while ((int11 <= int12)) {
            int13 = 1532 as graphic;
            if ((int6 >= int11)) {
                int13 = 1531 as graphic;
            };
            script7920(int0, int3, int9, int3, int10, 0, 0, 1, 1, 19, 18, 0, 0, int13);
            script3537("Your current tier for this building.");
            int9 = (int9 + 1);
            int11 = (int11 + 1);
        };
        script15939(int0, int3, int9, int3, int10, 0, 0, 0, 0, 0, 0, 1, 1);
        int9 = (int9 + 1);
        script15939(int0, int3, int9, int3, int8, 0, 0, 1, 1, 0, 0, 1, 1);
        int14 = CC_GETWIDTH();
        int9 = (int9 + 1);
        script10485(int3, int9, 0, 0, 1, 0, 0, 25, 1, 0, 2196 as dbrow, string1);
        CC_SETTEXTALIGN(1, 1, 0);
        int9 = (int9 + 1);
        int16 = -1;
        int15 = 25;
        switch (int2) {
            case -1: {
                script10485(int3, int9, 0, int15, 1, 0, 0, int15, 1, 1, 2100 as dbrow, "Building not available.");
                CC_SETTEXTALIGN(1, 1, 0);
                break;
            }
            case 0: {
                script10485(int3, int9, 0, int15, 1, 0, 0, int15, 1, 1, 2100 as dbrow, "Building yet to be constructed.");
                CC_SETTEXTALIGN(1, 1, 0);
                break;
            }
            case 1: {
                int17 = DB_GETFIELDCOUNT(int5, 888880);
                while ((++int16 < int17)) {
                    string0 = dbrow_getfield(int5, 888880, int16);
                    [int15, int9] = script16821(int3, int15, int9, int14, string0);
                };
                break;
            }
            case 2: {
                int17 = DB_GETFIELDCOUNT(int5, 888896);
                while ((++int16 < int17)) {
                    string0 = dbrow_getfield(int5, 888896, int16);
                    [int15, int9] = script16821(int3, int15, int9, int14, string0);
                };
                break;
            }
            case 3: {
                int17 = DB_GETFIELDCOUNT(int5, 888912);
                while ((++int16 < int17)) {
                    string0 = dbrow_getfield(int5, 888912, int16);
                    [int15, int9] = script16821(int3, int15, int9, int14, string0);
                };
                break;
            }
            default: {
                int17 = DB_GETFIELDCOUNT(int5, 888912);
                while ((++int16 < int17)) {
                    string0 = dbrow_getfield(int5, 888912, int16);
                    [int15, int9] = script16821(int3, int15, int9, int14, string0);
                };
                break;
            }
        };
    };
    var int19 = 0;
    script1431(int0, int1, int19++, -1, "Current Tier", "View Current");
    script1431(int0, int1, int19++, 1, "Tier 1", "View Tier 1");
    script1431(int0, int1, int19++, 2, "Tier 2", "View Tier 2");
    script1431(int0, int1, int19++, 3, "Tier 3", "View Tier 3");
    return;
}