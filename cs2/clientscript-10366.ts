//
function script10366(int0: struct): int {
    var int1 = struct_getparam(int0, 4508);
    var int2 = struct_getparam(int0, 4510);
    var int3 = -1 as cs2enum;
    var string0 = "";
    var string1 = "";
    var string2 = "";
    var int4 = -1;
    var int5 = -1;
    var int6 = 0;
    var int7 = 0;
    var int8 = 0;
    var int9 = 0;
    var int10 = (IF_GETWIDTH(comp(1524, 98)) - 10);
    var int11 = 0;
    CC_DELETEALL(comp(1524, 98));
    CC_DELETEALL(comp(1524, 99));
    if (((struct_getparam(int0, 4507) == true) && (script1432() > varplayer_4697))) {
        int9 = script10367(comp(1524, 98), "Minimum combat level required to join the group.", int9);
        IF_SETHIDE(false, comp(1524, 100));
        IF_SETPOSITION(0, int9, 0, 0, comp(1524, 100));
        script10085(comp(1524, 102), comp(1524, 103), 40049 as struct, MAX(3, varplayer_4697), varplayer_4698, varplayer_4721);
        int9 = ((int9 + IF_GETHEIGHT(comp(1524, 100))) + 5);
    } else {
        IF_SETHIDE(true, comp(1524, 100));
    };
    if ((int2 != -1 as cs2enum)) {
        int7 = ENUM_GETOUTPUTCOUNT(int2);
        while ((int6 < int7)) {
            int11 = script10272((int6 + 1));
            int5 = enum_getvalue(0, 0, int2, int6);
            [int4, int3] = script10270(int5);
            [string2, string0, string1] = script10271(int5);
            if ((int4 == 1)) {
                [int9, int8] = script10419(comp(1524, 98), comp(1524, 99), 5, int9, int10, int8, string2, string0, string1, "", int11, script10393(int5, int6), 1, 41495 as struct);
            } else if ((int4 == 0)) {
                if ((int3 != -1 as cs2enum)) {
                    int9 = script10367(comp(1524, 98), string2, int9);
                    [int9, int8] = script10429(comp(1524, 98), comp(1524, 99), 5, int9, int10, int8, int3, -1, string2, int11, 0);
                };
            } else if ((int4 == 2)) {
                int9 = script10367(comp(1524, 98), string2, int9);
            };
            int6 = (int6 + 1);
        };
    };
    if ((int9 == 0)) {
        int9 = script10367(comp(1524, 98), "This content does not have any settings available.", int9);
    };
    return MAX(int9, 40);
}