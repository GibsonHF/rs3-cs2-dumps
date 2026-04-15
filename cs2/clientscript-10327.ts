//
function script10327(int0: component, int1: component): void {
    var int2 = script10293(int0);
    var int3 = script10294(int0);
    var int4 = script10295(int0);
    var int5 = script2937(int0);
    var int6 = script10296(int0);
    var int7 = script10297(int0);
    var int8 = script10298(int0);
    var int9 = script10299(int0);
    var int10 = script10300(int0);
    var int11 = script10301(int0);
    var int12 = script10302(int0);
    var int13 = script4074(int0);
    var int14 = script10303(int0);
    IF_SETHIDE(true, int6);
    IF_SETHIDE(true, int7);
    IF_SETHIDE(true, int8);
    IF_SETHIDE(true, int9);
    IF_SETHIDE(true, int10);
    IF_SETHIDE(true, int11);
    IF_SETHIDE(true, int12);
    IF_SETHIDE(true, int14);
    IF_SETHIDE(true, int13);
    var int15 = 3;
    var int16 = script10275();
    var int17 = IF_GETWIDTH(int4);
    var int18 = IF_GETWIDTH(int3);
    var int19 = script10285(varplayergroup_16);
    if ((int16 != -1)) {
        if (operator("==", PLAYER_GROUP_GET_OWNER_SLOT(int16))) {
            int15 = script10329(int15, int0, int7);
            int15 = script10329(int15, int0, int6);
            int15 = script10329(int15, int0, int13);
            if ((varplayergroup_16 != 999999)) {
                int15 = script10329(int15, int0, int12);
            };
            if ((int19 != -1 as struct)) {
                if ((((struct_getparam(int19, 4655) == true) && (PLAYER_GROUP_MEMBER_GET_STATUS(int16) == 1)) && (PLAYER_GROUP_MEMBER_COUNT() >= struct_getparam(int19, 4500)))) {
                    int15 = script10329(int15, int0, int9);
                } else if (((((PLAYER_GROUP_GET_OVERALL_STATUS() == 1) && (PLAYER_GROUP_MEMBER_COUNT() >= struct_getparam(int19, 4500))) && (struct_getparam(int19, 4506) != -1 as coordgrid)) && (varplayergroup_16 != 999999))) {
                    int15 = script10329(int15, int0, int9);
                };
            };
        } else if ((script10281(int16) == 1)) {
            int15 = script10329(int15, int0, int7);
            int15 = script10329(int15, int0, int6);
            int15 = script10329(int15, int0, int13);
        } else {
            int15 = script10329(int15, int0, int7);
            int15 = script10329(int15, int0, int13);
            if (((((int19 != -1 as struct) && (struct_getparam(int19, 4655) == true)) && (PLAYER_GROUP_MEMBER_GET_STATUS(int16) == 1)) && (PLAYER_GROUP_MEMBER_COUNT() >= struct_getparam(int19, 4500)))) {
                int15 = script10329(int15, int0, int9);
            };
        };
        if ((int0 == comp(1520, 10))) {
            int15 = script10329(int15, int0, int10);
        } else if (((((int15 + 27) + 40) + int18) < int17)) {
            script10329((((int17 - 40) - int18) - 27), int0, int10);
        } else if ((((int15 + 27) + 30) < int17)) {
            int15 = script10329(int15, int0, int10);
        } else {
            int15 = script10329(int15, int0, int10);
        };
    };
    int15 = (int15 + 3);
    if ((int0 == comp(1520, 10))) {
        if ((int1 != comp(-1, 65535))) {
            script8788((int15 + 10), 40, int1, -1, 2, -24, -6);
        };
    } else {
        if ((int17 < ((int15 + 40) + int18))) {
            IF_SETHIDE(true, int3);
        } else {
            IF_SETHIDE(false, int3);
        };
        if ((int17 < (int15 + 30))) {
            IF_SETHIDE(true, int4);
            IF_SETHIDE(false, int5);
        } else {
            IF_SETHIDE(false, int4);
            IF_SETHIDE(true, int5);
        };
    };
    return;
}