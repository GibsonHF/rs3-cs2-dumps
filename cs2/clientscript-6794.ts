//
function script6794(int0: obj, int1: int, int2: int, int3: inv, int4: int, int5: int, int6: unknown_int): unknown_int {
    var int1 = MIN(int5, int1);
    if (((int0 == -1 as obj) || (int1 < 1))) {
        return 0;
    };
    var int7 = false;
    if (((varplayer_160 == 1) && (int3 != 94 as inv))) {
        if ((OC_CERT(int0) == int0)) {
            script14153("This item cannot be withdrawn as a note.");
        } else {
            int7 = true;
        };
    };
    var int6 = script5175(int6, int0);
    var int8 = 0;
    var int9 = 0;
    if ((int3 == 94 as inv)) {
        [int9, int1] = script6796(int0, int1, int2, int5, int6);
        if (((int9 != 5) && (script14344(int2) != int0))) {
            int9 = 6;
        };
        switch (int9) {
            case 0: {
                var int4 = OC_WEARPOS(int0);
                int8 = 0;
                break;
            }
            case 8: {
                int4 = OC_WEARPOS(int0);
                int8 = (2147483647 - script14347(94 as inv, int4));
                if ((int8 >= int1)) {
                    int8 = 0;
                } else {
                    int8 = (int1 - int8);
                };
                break;
            }
            case 5: {
                script14154();
                return 1;
            }
            case 2:
            case 9: {
                var int3 = 93 as inv;
                int4 = -1;
                if ((varplayer_160 == 1)) {
                    if ((OC_CERT(int0) == int0)) {
                        script14153("This item cannot be withdrawn as a note.");
                    } else {
                        int7 = true;
                    };
                };
                script14188();
                break;
            }
            default: {
                script14187();
                script14183();
                return 0;
            }
        };
    } else if ((int3 == 530 as inv)) {
        if (((varplayer_1831 == -1 as obj) || (varplayer_1784 == -1 as npc))) {
            int8 = int1;
        } else {
            int8 = script3970(95 as inv, int0, int1, -1 as obj, int7);
            if ((int8 == int1)) {
                script14187();
                script14183();
                return 0;
            };
            if (((((varplayer_1831 != -1 as obj) && (OC_CATEGORY(varplayer_1831) == 2840 as category)) && (varbitplayer_27749 == 0)) && (varbitplayer_27750 == 0))) {
                script14152("Your legendary pet's Beast of Burden ability has expired.");
                return 0;
            };
        };
    };
    if ((int3 == 93 as inv)) {
        if (((int0 == 995 as obj) && (script14288() == 0))) {
            int8 = script17405(int1);
        } else if ((int7 == true)) {
            int8 = script14351(int3, OC_CERT(int0), int1, INV_SIZE(int3));
        } else {
            int8 = script14351(int3, int0, int1, INV_SIZE(int3));
        };
    };
    if ((int8 >= int1)) {
        script14187();
        script14183();
        script14152("You don't have enough inventory space.");
        return 0;
    };
    if ((script6486() == 1)) {
        script14183();
        script14152("You can't do that whilst opening Group Ironman Storage.");
        return 0;
    };
    var int10 = int2;
    var int11 = int1;
    int1 = (int1 - int8);
    if ((OC_HASVAROBJ(int0) == 0)) {
        if ((int0 != 995 as obj)) {
            script14362(int2, int5, int0, int1, int3, int4, int7, int6);
        } else if (((int3 == 530 as inv) || (script14288() == 1))) {
            script14362(int2, int5, 995 as obj, int1, int3, -1, false, int6);
        } else {
            if ((int8 == 0)) {
                script17384(int2, int5, int1, int6);
            } else if ((int8 != int1)) {
                script17384(int2, int5, (int1 - int8), int6);
                script14362(int2, ((int5 - int1) - int8), 995 as obj, int8, int3, -1, false, int6);
            } else {
                script14362(int2, int5, 995 as obj, int8, int3, -1, false, int6);
            };
            if ((script14345(int2) == (int5 - int11))) {
                int8 = 0;
            };
        };
        if ((int1 == int5)) {
            script6961(int2, int0, int6);
        };
    } else {
        if ((int2 == -1)) {
            var int2 = script14342(int0, 0, 0);
            if ((int2 == -1)) {
                return 0;
            };
        };
        script14362(int2, 1, int0, 1, int3, int4, false, int6);
        if ((--int1 > 0)) {
            script6795(int2, int0, int3, int1, int6);
        } else {
            script6961(int2, int0, int6);
        };
    };
    if ((int8 > 0)) {
        script14183();
        script14153("You don't have enough inventory space to withdraw that many.");
    } else {
        script14154();
    };
    switch (int9) {
        case 1: {
            script14152(`${OC_NAME(int0)}: Moved to backpack as it requires a confirmation to equip.`);
            break;
        }
        case 2: {
            if ((((OC_WEARPOS(int0) != -1) && (item_getparam(int0, 3845) == false)) && (enum_getvalue(33, 1, 15589 as cs2enum, int0) == false))) {
                script14152(`${OC_NAME(int0)}: Moved to backpack as it can't be equipped.`);
            };
            break;
        }
        case 9: {
            script14152(`${OC_NAME(int0)}: Moved to backpack as it can't be equipped from the bank.`);
            break;
        }
    };
    if ((varplayer_1831 != -1 as obj)) {
        script14221(int0);
    };
    script14248(int3, -1 as obj, int0);
    return 1;
}