//
function script4791(int0: int): [graphic, string, int, int, int, int, int, int] {
    var int1 = -1 as graphic;
    var string0 = "";
    var int2 = 0;
    var int3 = enum_getvalue(0, 73, 4008 as cs2enum, int0);
    if ((int3 == -1 as struct)) {
        printmessage(`Clan Build Tick : Job ID ${inttostring(int0, 10)} has no associated struct. Please report this as a bug, quoting this line.`);
        return [-1 as graphic, "", 0, 0, 0, 0, 0, 0];
    };
    var int4 = struct_getparam(int3, 1481);
    var int5 = struct_getparam(int3, 1482);
    var int6 = 0;
    var int7 = 0;
    var int8 = 0;
    var int9 = -1 as cs2enum;
    var int10 = 0;
    var int11 = -1 as cs2enum;
    var int12 = -1 as cs2enum;
    var int13 = 0;
    if ((CLANPROFILE_FIND() == 1)) {
        switch (int4) {
            case 1: {
                string0 = "Stronghold";
                int1 = 7418 as graphic;
                int6 = varbitclan_6507;
                int7 = MIN(varbitclan_6556, (int6 - 1));
                int2 = (varbitclan_6526 + varbitclan_6541);
                break;
            }
            case 2: {
                string0 = "Storehouse";
                int1 = 7419 as graphic;
                int6 = varbitclan_6508;
                int7 = MIN(varbitclan_6554, (int6 - 1));
                int2 = (varbitclan_6522 + varbitclan_6539);
                break;
            }
            case 3: {
                string0 = "Battlefield";
                int1 = 7417 as graphic;
                int6 = varbitclan_6509;
                int7 = MIN(varbitclan_6555, (int6 - 1));
                int2 = (varbitclan_6523 + varbitclan_6540);
                break;
            }
            case 4: {
                switch (int5) {
                    case 1: {
                        int8 = varbitclan_6483;
                        int6 = varbitclan_6495;
                        if ((int8 == 1)) {
                            int13 = 1;
                        };
                        int7 = MIN(varbitclan_6542, (int6 - int13));
                        int2 = (varbitclan_6510 + varbitclan_6527);
                        break;
                    }
                    case 2: {
                        int8 = varbitclan_6484;
                        int6 = varbitclan_6496;
                        if ((int8 == 1)) {
                            int13 = 1;
                        };
                        int7 = MIN(varbitclan_6543, (int6 - int13));
                        int2 = (varbitclan_6511 + varbitclan_6528);
                        break;
                    }
                    case 3: {
                        int8 = varbitclan_6485;
                        int6 = varbitclan_6497;
                        if ((int8 == 1)) {
                            int13 = 1;
                        };
                        int7 = MIN(varbitclan_6544, (int6 - int13));
                        int2 = (varbitclan_6512 + varbitclan_6529);
                        break;
                    }
                    case 4: {
                        int8 = varbitclan_6486;
                        int6 = varbitclan_6498;
                        if ((int8 == 1)) {
                            int13 = 1;
                        };
                        int7 = MIN(varbitclan_6545, (int6 - int13));
                        int2 = (varbitclan_6513 + varbitclan_6530);
                        break;
                    }
                    case 5: {
                        int8 = varbitclan_6487;
                        int6 = varbitclan_6499;
                        if ((int8 == 1)) {
                            int13 = 1;
                        };
                        int7 = MIN(varbitclan_6546, (int6 - int13));
                        int2 = (varbitclan_6514 + varbitclan_6531);
                        break;
                    }
                    case 6: {
                        int8 = varbitclan_6488;
                        int6 = varbitclan_6500;
                        if ((int8 == 1)) {
                            int13 = 1;
                        };
                        int7 = MIN(varbitclan_6547, (int6 - int13));
                        int2 = (varbitclan_6515 + varbitclan_6532);
                        break;
                    }
                    case 7: {
                        int8 = varbitclan_6489;
                        int6 = varbitclan_6501;
                        if ((int8 == 1)) {
                            int13 = 1;
                        };
                        int7 = MIN(varbitclan_6548, (int6 - int13));
                        int2 = (varbitclan_6516 + varbitclan_6533);
                        break;
                    }
                    case 8: {
                        int8 = varbitclan_6490;
                        int6 = varbitclan_6502;
                        if ((int8 == 1)) {
                            int13 = 1;
                        };
                        int7 = MIN(varbitclan_6549, (int6 - int13));
                        int2 = (varbitclan_6517 + varbitclan_6534);
                        break;
                    }
                    case 9: {
                        int8 = varbitclan_6491;
                        int6 = varbitclan_6503;
                        if ((int8 == 1)) {
                            int13 = 1;
                        };
                        int7 = MIN(varbitclan_6550, (int6 - int13));
                        int2 = (varbitclan_6518 + varbitclan_6535);
                        break;
                    }
                    case 10: {
                        int8 = varbitclan_6492;
                        int6 = varbitclan_6504;
                        if ((int8 == 1)) {
                            int13 = 1;
                        };
                        int7 = MIN(varbitclan_6551, (int6 - int13));
                        int2 = (varbitclan_6519 + varbitclan_6536);
                        break;
                    }
                    case 11: {
                        int8 = varbitclan_6493;
                        int6 = varbitclan_6505;
                        if ((int8 == 1)) {
                            int13 = 1;
                        };
                        int7 = MIN(varbitclan_6552, (int6 - int13));
                        int2 = (varbitclan_6520 + varbitclan_6537);
                        break;
                    }
                    case 12: {
                        int8 = varbitclan_6494;
                        int6 = varbitclan_6506;
                        if ((int8 == 1)) {
                            int13 = 1;
                        };
                        int7 = MIN(varbitclan_6553, (int6 - int13));
                        int2 = (varbitclan_6521 + varbitclan_6538);
                        break;
                    }
                    default: {
                        printmessage(`Clan Build Tick : No skill plot found with index ${inttostring(int5, 10)}. Please report this as a bug, quoting this line.`);
                        break;
                    }
                };
                string0 = enum_getvalue(0, 36, 4287 as cs2enum, int8);
                int1 = enum_getvalue(0, 23, 4288 as cs2enum, int8);
                break;
            }
            case 5: {
                switch (int5) {
                    case 1: {
                        int8 = varbitclan_6682;
                        int6 = varbitclan_6683;
                        break;
                    }
                    case 2: {
                        int8 = varbitclan_6691;
                        int6 = varbitclan_6692;
                        break;
                    }
                    case 3: {
                        int8 = varbitclan_6700;
                        int6 = varbitclan_6701;
                        break;
                    }
                    default: {
                        printmessage(`Clan Build Tick : No cosmetic job slot found with index ${inttostring(int5, 10)}. Please report this as a bug, quoting this line.`);
                        break;
                    }
                };
                int9 = script4820(int5);
                int11 = script4823(int5);
                int12 = script4826(int5);
                if ((((int0 == 16) || (int0 == 17)) || (int0 == 18))) {
                    string0 = `Reset hotspot (slot ${inttostring(int5, 10)}).`;
                    int1 = 6496 as graphic;
                } else {
                    string0 = enum_getvalue(0, 36, int11, int8);
                    int1 = enum_getvalue(0, 23, int12, int8);
                };
                break;
            }
            default: {
                printmessage(`Clan Build Tick : Unexpected job building class ${inttostring(int4, 10)}. Please report this as a bug, quoting this line.`);
                return [-1 as graphic, "", 0, 0, 0, 0, 0, 0];
            }
        };
    } else {
        printmessage("Clan Build Tick : Could not access clan profile.");
        return [-1 as graphic, "", 0, 0, 0, 0, 0, 0];
    };
    if (((int0 > 600) && (int4 != 5))) {
        int6 = (int6 + 1);
    };
    return [int1, string0, int6, int7, int2, int4, int5, int8];
}