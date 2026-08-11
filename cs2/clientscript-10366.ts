//
function script10366(int0: number): number {
    var int1 = struct_getparam(int0, 4508);
    var int2 = struct_getparam(int0, 4510);
    var int3 = -1;
    var string0 = "";
    var string1 = "";
    var string2 = "";
    var int4 = -1;
    var int5 = -1;
    var int6 = 0;
    var int7 = 0;
    var int8 = 0;
    var int9 = 0;
    var int10 = (IF_GETWIDTH(comp(1524, 98)) - 10);  // group_parent:settings_build_area
    var int11 = 0;
    CC_DELETEALL(comp(1524, 98));  // group_parent:settings_build_area
    CC_DELETEALL(comp(1524, 99));  // group_parent:settings_click_area
    if ((struct_getparam(int0, 4507) == true)) {
        if ((script1432() > varplayer_4697)) {
            int9 = script10367(99876962, "Minimum combat level required to join the group.", int9);
            IF_SETHIDE(false, comp(1524, 100));  // group_parent:combat_setting_area
            IF_SETPOSITION(0, int9, 0, 0, comp(1524, 100));  // group_parent:combat_setting_area
            script10085(99876966, 99876967, 40049, MAX(3, varplayer_4697), varplayer_4698, varplayer_4721);
            int9 = ((int9 + IF_GETHEIGHT(comp(1524, 100))) + 5);  // group_parent:combat_setting_area
        } else {
            IF_SETHIDE(true, comp(1524, 100));  // group_parent:combat_setting_area
        };
    } else {
        IF_SETHIDE(true, comp(1524, 100));  // group_parent:combat_setting_area
    };
    if ((int2 != -1 as cs2enum)) {
        int7 = ENUM_GETOUTPUTCOUNT(int2);
        while ((int6 < int7)) {
            int11 = script10272((int6 + 1));
            int5 = enum_getvalue(0, 0, int2, int6);
            [int4, int3] = script10270(int5);
            [string2, string0, string1] = script10271(int5);
            if ((int4 == 1)) {
                [int9, int8] = script10419(99876962, 99876963, 5, int9, int10, int8, string2, string0, string1, "", int11, script10393(int5, int6), 1, 41495);
            } else if ((int4 == 0)) {
                if ((int3 != -1)) {
                    int9 = script10367(99876962, string2, int9);
                    [int9, int8] = script10429(99876962, 99876963, 5, int9, int10, int8, int3, -1, string2, int11, 0);
                };
            } else if ((int4 == 2)) {
                int9 = script10367(99876962, string2, int9);
            };
            int6 = (int6 + 1);
        };
    };
    if ((int9 == 0)) {
        int9 = script10367(99876962, "This content does not have any settings available.", int9);
    };
    return MAX(int9, 40);
}