//
function script4311(): void {
    var int0 = script4309();
    var int1 = script4293();
    var int2 = -1;
    var int3 = 0;
    var int4 = 0;
    var int5 = 0;
    var int6 = 0;
    var int7 = varclient_1501;
    var int8 = 3720 as cs2enum;
    var string0 = "";
    var int9 = true;
    var int10 = true;
    if ((int0 == 1)) {
        int2 = varclient_1500;
    };
    IF_SETTEXT(`Settings for: ${varclient_2521}`, comp(1096, 38));
    switch (MAP_LANG()) {
        case 1: {
            int8 = 3727 as cs2enum;
            break;
        }
        case 2: {
            int8 = 3728 as cs2enum;
            break;
        }
        case 3: {
            int8 = 3729 as cs2enum;
            break;
        }
        case 6: {
            int8 = 7498 as cs2enum;
            break;
        }
    };
    if ((STRING_LENGTH(enum_getvalue(0, 36, int8, int7)) == 0)) {
        int7 = (int7 - 1);
    };
    if ((int0 == 0)) {
        int9 = true;
    } else if ((((script6518() == false) || (int1 < int2)) || (int1 < 100))) {
        int9 = true;
    } else if (((script6518() == true) && (int1 >= int2))) {
        int9 = false;
        int10 = false;
        int3 = varclient_1566;
        int5 = varclient_1565;
        int4 = varclient_1567;
        int6 = varclient_1564;
    } else if ((int1 >= 126)) {
        int9 = false;
        int10 = false;
        int3 = varclient_1566;
        int5 = varclient_1565;
        int4 = varclient_1567;
        int6 = varclient_1564;
    };
    script13971(comp(1096, 54), comp(1096, 55), 28553 as struct, "Save", int9);
    script13971(comp(1096, 57), comp(1096, 58), 28555 as struct, "Kick", int9);
    script14140(comp(1096, 60), comp(1096, 61), 3714 as cs2enum, 126, "", varclient_1500, 0, int10);
    script14140(comp(1096, 63), comp(1096, 64), int8, ENUM_GETOUTPUTCOUNT(int8), "", int7, 1, int10);
    string0 = TEXT_SWITCH(int9, "You may not currently change this setting.", "Ban this member from the Clan Citadel.");
    script14139(comp(1096, 42), comp(1096, 43), "Ban from Citadel", string0, string0, int3, int9);
    string0 = TEXT_SWITCH(int9, "You may not currently change this setting.", "Ban this member from the Clan Citadel's Keep.");
    script14139(comp(1096, 45), comp(1096, 46), "Ban from Keep", string0, string0, int5, int9);
    string0 = TEXT_SWITCH(int9, "You may not currently change this setting.", "Ban this member from the Citadel island.");
    script14139(comp(1096, 48), comp(1096, 49), "Ban from Island", string0, string0, int4, int9);
    string0 = TEXT_SWITCH(int9, "You may not currently change this setting.", "Mute this member in Clan Chat.");
    script14139(comp(1096, 51), comp(1096, 52), "Mute", string0, string0, int6, int9);
    return;
}