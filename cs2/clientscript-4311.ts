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
    var int9 = 1;
    var int10 = 1;
    if ((int0 == 1)) {
        int2 = varclient_1500;
    };
    IF_SETTEXT(`Settings for: ${varclient_2521}`, 71827494);
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
        int9 = 1;
    } else if ((((script6518() == 0) || (int1 < int2)) || (int1 < 100))) {
        int9 = 1;
    } else if (((script6518() == 1) && (int1 >= int2))) {
        int9 = 0;
        int10 = 0;
        int3 = varclient_1566;
        int5 = varclient_1565;
        int4 = varclient_1567;
        int6 = varclient_1564;
    } else if ((int1 >= 126)) {
        int9 = 0;
        int10 = 0;
        int3 = varclient_1566;
        int5 = varclient_1565;
        int4 = varclient_1567;
        int6 = varclient_1564;
    };
    script13971(71827510, 71827511, 28553, "Save", int9);
    script13971(71827513, 71827514, 28555, "Kick", int9);
    script14140(71827516, 71827517, 3714 as cs2enum, 126, "", varclient_1500, 0, int10);
    script14140(71827519, 71827520, int8, ENUM_GETOUTPUTCOUNT(int8), "", int7, 1, int10);
    string0 = TEXT_SWITCH(int9, "You may not currently change this setting.", "Ban this member from the Clan Citadel.");
    script14139(71827498, 71827499, "Ban from Citadel", string0, string0, int3, int9);
    string0 = TEXT_SWITCH(int9, "You may not currently change this setting.", "Ban this member from the Clan Citadel's Keep.");
    script14139(71827501, 71827502, "Ban from Keep", string0, string0, int5, int9);
    string0 = TEXT_SWITCH(int9, "You may not currently change this setting.", "Ban this member from the Citadel island.");
    script14139(71827504, 71827505, "Ban from Island", string0, string0, int4, int9);
    string0 = TEXT_SWITCH(int9, "You may not currently change this setting.", "Mute this member in Clan Chat.");
    script14139(71827507, 71827508, "Mute", string0, string0, int6, int9);
    return;
}