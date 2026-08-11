//
function script6184(): void {
    if ((varplayer_3390 > script4186())) {
        IF_SETTEXT("No Ship", comp(916, 324));  // pop_ship:name_text
        IF_SETTEXT("0", comp(916, 330));  // pop_ship:speed_text
        IF_SETTEXT("0", comp(916, 331));  // pop_ship:graft_text
        IF_SETTEXT("0", comp(916, 332));  // pop_ship:combat_text
        IF_SETTEXT("0", comp(916, 333));  // pop_ship:seafaring_text
        IF_SETTEXT(inttostring(varplayer_3390, 10), comp(916, 323));  // pop_ship:ship_number
        IF_SETHIDE(true, comp(916, 104));  // pop_ship:hull_layer
        IF_SETHIDE(true, comp(916, 95));  // pop_ship:deck1_layer
        IF_SETHIDE(true, comp(916, 98));  // pop_ship:deck2_layer
        IF_SETHIDE(true, comp(916, 101));  // pop_ship:rudder_layer
        IF_SETHIDE(true, comp(916, 92));  // pop_ship:ram_layer
        IF_SETHIDE(true, comp(916, 178));  // pop_ship:crew_manager_layer
        IF_SETHIDE(true, comp(916, 146));  // pop_ship:crew_compare_layer
        script13971(60031298, -1, 28554, "Edit Crew", 1);
        IF_SETHIDE(true, comp(916, 86));  // pop_ship:no_voyage_layer
        IF_SETHIDE(true, comp(916, 40));  // pop_ship:active_voyage_layer
        IF_SETHIDE(true, comp(916, 33));  // pop_ship:obsolete_layer
        IF_SETHIDE(true, comp(916, 86));  // pop_ship:no_voyage_layer
        return;
    };
    IF_SETTEXT(varclient_2601, comp(916, 324));  // pop_ship:name_text
    var string0 = inttostring(varclient_2603, 10);
    IF_SETTEXT(string0, comp(916, 330));  // pop_ship:speed_text
    var string1 = inttostring(varclient_2607, 10);
    IF_SETTEXT(string1, comp(916, 331));  // pop_ship:graft_text
    var string2 = inttostring(varclient_2605, 10);
    IF_SETTEXT(string2, comp(916, 332));  // pop_ship:combat_text
    var string3 = inttostring(varclient_2609, 10);
    IF_SETTEXT(string3, comp(916, 333));  // pop_ship:seafaring_text
    var string4 = "";
    string4 = struct_getparam(enum_getvalue(0, 73, 1010, script1161(varplayer_3390, 1)), 6865);
    if ((strcmp(string4, "") == 0)) {
        string4 = struct_getparam(enum_getvalue(0, 73, 1010, script1161(varplayer_3390, 1)), 662);
    };
    IF_SETTEXT(string4, comp(916, 105));  // pop_ship:hull_text
    string4 = struct_getparam(enum_getvalue(0, 73, 1011, script1161(varplayer_3390, 2)), 6865);
    if ((strcmp(string4, "") == 0)) {
        string4 = struct_getparam(enum_getvalue(0, 73, 1011, script1161(varplayer_3390, 2)), 662);
    };
    IF_SETTEXT(string4, comp(916, 96));  // pop_ship:deck1_text
    string4 = struct_getparam(enum_getvalue(0, 73, 1011, script1161(varplayer_3390, 3)), 6865);
    if ((strcmp(string4, "") == 0)) {
        string4 = struct_getparam(enum_getvalue(0, 73, 1011, script1161(varplayer_3390, 3)), 662);
    };
    IF_SETTEXT(string4, comp(916, 99));  // pop_ship:deck2_text
    string4 = struct_getparam(enum_getvalue(0, 73, 1012, script1161(varplayer_3390, 4)), 6865);
    if ((strcmp(string4, "") == 0)) {
        string4 = struct_getparam(enum_getvalue(0, 73, 1012, script1161(varplayer_3390, 4)), 662);
    };
    IF_SETTEXT(string4, comp(916, 102));  // pop_ship:rudder_text
    string4 = struct_getparam(enum_getvalue(0, 73, 1013, script1161(varplayer_3390, 5)), 6865);
    if ((strcmp(string4, "") == 0)) {
        string4 = struct_getparam(enum_getvalue(0, 73, 1013, script1161(varplayer_3390, 5)), 662);
    };
    IF_SETTEXT(string4, comp(916, 93));  // pop_ship:ram_text
    script7252(varplayer_3390);
    IF_SETTEXT(inttostring(varplayer_3390, 10), comp(916, 323));  // pop_ship:ship_number
    IF_SETHIDE(true, comp(916, 104));  // pop_ship:hull_layer
    IF_SETHIDE(true, comp(916, 95));  // pop_ship:deck1_layer
    IF_SETHIDE(true, comp(916, 98));  // pop_ship:deck2_layer
    IF_SETHIDE(true, comp(916, 101));  // pop_ship:rudder_layer
    IF_SETHIDE(true, comp(916, 92));  // pop_ship:ram_layer
    script13971(60031298, -1, 28554, "Edit Crew", 1);
    IF_SETHIDE(false, comp(916, 207));  // pop_ship:obscure_layer
    IF_SETHIDE(false, comp(916, 211));  // pop_ship:underway_layer
    IF_SETHIDE(false, comp(916, 212));  // pop_ship:complete_layer
    IF_SETHIDE(false, comp(916, 213));  // pop_ship:success_layer
    IF_SETHIDE(false, comp(916, 214));  // pop_ship:failure_layer
    var int0 = -1;
    var int1 = script2047();
    switch (varplayer_3390) {
        case 1: {
            if ((script7293(1) == 0)) {
                int1 = varbitplayer_17071;
            };
            break;
        }
        case 2: {
            if ((script7293(2) == 0)) {
                int1 = varbitplayer_17082;
            };
            break;
        }
        case 3: {
            if ((script7293(3) == 0)) {
                int1 = varbitplayer_17093;
            };
            break;
        }
        case 4: {
            if ((script7293(4) == 0)) {
                int1 = varbitplayer_17104;
            };
            break;
        }
    };
    int0 = enum_getvalue(0, 73, 1022, int1);
    if ((int0 == -1)) {
        return;
    };
    if ((varbitplayer_17130 > 0)) {
        if ((int0 != 17069)) {
            IF_SETHIDE(false, comp(916, 40));  // pop_ship:active_voyage_layer
            IF_SETHIDE(false, comp(916, 33));  // pop_ship:obsolete_layer
            IF_SETHIDE(true, comp(916, 86));  // pop_ship:no_voyage_layer
            script7254(int0);
        } else {
            IF_SETHIDE(true, comp(916, 40));  // pop_ship:active_voyage_layer
            IF_SETHIDE(false, comp(916, 33));  // pop_ship:obsolete_layer
            IF_SETHIDE(false, comp(916, 86));  // pop_ship:no_voyage_layer
        };
    } else {
        IF_SETHIDE(true, comp(916, 40));  // pop_ship:active_voyage_layer
        IF_SETHIDE(false, comp(916, 33));  // pop_ship:obsolete_layer
        IF_SETHIDE(false, comp(916, 86));  // pop_ship:no_voyage_layer
    };
    if ((varbitplayer_17495 >= 24)) {
        if ((varbitplayer_17495 < 26)) {
            varclient_2611 = 1;
        } else if ((varbitplayer_17495 == 26)) {
            varclient_2611 = 2;
        } else if ((varbitplayer_17495 == 50)) {
            varclient_2611 = 1;
        } else if ((varbitplayer_17495 == 52)) {
            varclient_2611 = 2;
        };
    } else if ((varbitplayer_17495 == 26)) {
        varclient_2611 = 2;
    } else if ((varbitplayer_17495 == 50)) {
        varclient_2611 = 1;
    } else if ((varbitplayer_17495 == 52)) {
        varclient_2611 = 2;
    };
    var string5 = "";
    var int2 = struct_getparam(int0, 3060);
    var int3 = struct_getparam(int0, 3062);
    var int4 = struct_getparam(int0, 3064);
    IF_SETGRAPHIC(-1 as graphic, comp(916, 265));  // pop_ship:reward_1_icon
    IF_SETGRAPHIC(-1 as graphic, comp(916, 270));  // pop_ship:reward_2_icon
    IF_SETGRAPHIC(-1 as graphic, comp(916, 275));  // pop_ship:reward_3_icon
    IF_SETTEXT("", comp(916, 266));  // pop_ship:reward_1_text
    IF_SETTEXT("", comp(916, 271));  // pop_ship:reward_2_text
    IF_SETTEXT("", comp(916, 276));  // pop_ship:reward_3_text
    var string6 = "";
    var string7 = "";
    var int5 = 0;
    var int6 = -1;
    var int7 = -1;
    if ((varclient_2611 > 0)) {
        IF_SETHIDE(true, comp(916, 107));  // pop_ship:list_layer
        switch (varplayer_3390) {
            case 1: {
                int1 = varbitplayer_17071;
                break;
            }
            case 2: {
                int1 = varbitplayer_17082;
                break;
            }
            case 3: {
                int1 = varbitplayer_17093;
                break;
            }
            case 4: {
                int1 = varbitplayer_17104;
                break;
            }
        };
        if ((varbitplayer_17495 >= 24)) {
            if ((varbitplayer_17495 <= 28)) {
                int1 = 415;
            } else if (((varbitplayer_17495 >= 50) && (varbitplayer_17495 <= 54))) {
                int1 = 417;
            };
        } else if (((varbitplayer_17495 >= 50) && (varbitplayer_17495 <= 54))) {
            int1 = 417;
        };
        int0 = enum_getvalue(0, 73, 1022, int1);
        if (((int0 != -1) && (int0 != 17069))) {
            int7 = struct_getparam(int0, 2366);
            string5 = script2057(int0, 0);
            IF_SETTEXT(string5, comp(916, 215));  // pop_ship:voyage_flavour
            if ((int7 == 13)) {
                if ((((int0 == 17071) || (int0 == 17070)) || (int0 == 17072))) {
                    IF_SETHIDE(false, comp(916, 242));  // pop_ship:ports_complete_damage_btn_layer
                    if ((script17401() < (varplayer_3417 * 20000))) {
                        script13994(60031219, -1, 28556, `Finish repairs for ${inttostring((varplayer_3417 * 20), 10)}k`, 1);
                    } else {
                        script13993(60031219, -1, 28556, `Finish repairs for ${inttostring((varplayer_3417 * 20), 10)}k`);
                    };
                } else {
                    IF_SETHIDE(true, comp(916, 242));  // pop_ship:ports_complete_damage_btn_layer
                };
            } else {
                IF_SETHIDE(true, comp(916, 242));  // pop_ship:ports_complete_damage_btn_layer
            };
            if ((struct_getparam(int0, 3060) == 20)) {
                IF_SETGRAPHIC(enum_getvalue(0, 23, 7213, varbitplayer_17497), comp(916, 265));  // pop_ship:reward_1_icon
            } else {
                IF_SETGRAPHIC(enum_getvalue(0, 23, 1024, struct_getparam(int0, 3060)), comp(916, 265));  // pop_ship:reward_1_icon
            };
            if ((struct_getparam(int0, 3062) == 20)) {
                IF_SETGRAPHIC(enum_getvalue(0, 23, 7213, varbitplayer_17497), comp(916, 270));  // pop_ship:reward_2_icon
            } else {
                IF_SETGRAPHIC(enum_getvalue(0, 23, 1024, struct_getparam(int0, 3062)), comp(916, 270));  // pop_ship:reward_2_icon
            };
            if ((struct_getparam(int0, 3064) == 20)) {
                IF_SETGRAPHIC(enum_getvalue(0, 23, 7213, varbitplayer_17497), comp(916, 275));  // pop_ship:reward_3_icon
            } else {
                IF_SETGRAPHIC(enum_getvalue(0, 23, 1024, struct_getparam(int0, 3064)), comp(916, 275));  // pop_ship:reward_3_icon
            };
            int5 = struct_getparam(int0, 3061);
            string6 = inttostring(int5, 10);
            if ((int7 == 2)) {
                string6 = enum_getvalue(0, 36, 7164, int5);
                switch (int5) {
                    case 0: {
                        int6 = 26209;
                        break;
                    }
                    case 2: {
                        int6 = 26217;
                        break;
                    }
                    case 3: {
                        int6 = 26225;
                        break;
                    }
                    case 4: {
                        int6 = 26233;
                        break;
                    }
                    case 5: {
                        int6 = 26241;
                        break;
                    }
                    case 6: {
                        int6 = 26245;
                        break;
                    }
                    case 13: {
                        int6 = 30555;
                        break;
                    }
                    case 14: {
                        int6 = 30561;
                        break;
                    }
                };
            } else if (((int7 == 6) || (int7 == 10))) {
                switch (int5) {
                    case 1: {
                        string6 = "Whaler";
                        break;
                    }
                    case 2: {
                        string6 = "Biologist";
                        break;
                    }
                    case 3: {
                        string6 = "Occultist";
                        break;
                    }
                    case 4: {
                        string6 = "Assassin";
                        break;
                    }
                    case 5: {
                        string6 = "Convict";
                        break;
                    }
                    case 6: {
                        string6 = "Missionary";
                        break;
                    }
                    case 7: {
                        string6 = "Trapper";
                        break;
                    }
                    case 8: {
                        string6 = "Chef";
                        break;
                    }
                    case 9: {
                        string6 = "Architect";
                        break;
                    }
                    case 10: {
                        string6 = "Exile";
                        break;
                    }
                    case 11: {
                        string6 = "Memory";
                        break;
                    }
                    case 12: {
                        string6 = "Tengu";
                        break;
                    }
                };
            } else if ((int7 == 7)) {
                string6 = "Trait+";
            } else if ((int7 == 4)) {
                if ((int5 <= 12)) {
                    string6 = "XP";
                } else {
                    string6 = "XP x2";
                };
            } else if ((struct_getparam(int0, 3060) == 32)) {
                string6 = "Trait-";
            };
            if ((((strcmp(string6, "") != 0) && (strcmp(string6, "0") != 0)) && (strcmp(string6, "-1") != 0))) {
                IF_SETTEXT(string6, comp(916, 266));  // pop_ship:reward_1_text
                string7 = enum_getvalue(0, 36, 1025, int2);
                if ((int7 == 2)) {
                    string7 = `Unlock island: ${enum_getvalue(0, 36, 7164, int5)}`;
                } else if ((int7 == 7)) {
                    string7 = `Captain gains a trait: ${struct_getparam(enum_getvalue(0, 73, 2175, int5), 3090)}`;
                } else if ((int7 == 4)) {
                    switch (int5) {
                        case 1: {
                            string7 = "Slayer";
                            break;
                        }
                        case 2: {
                            string7 = "Runecrafting";
                            break;
                        }
                        case 3: {
                            string7 = "Fishing";
                            break;
                        }
                        case 4: {
                            string7 = "Thieving";
                            break;
                        }
                        case 5: {
                            string7 = "Herblore";
                            break;
                        }
                        case 6: {
                            string7 = "Prayer";
                            break;
                        }
                        case 7: {
                            string7 = "Hunter";
                            break;
                        }
                        case 8: {
                            string7 = "Cooking";
                            break;
                        }
                        case 9: {
                            string7 = "Construction";
                            break;
                        }
                        case 10: {
                            string7 = "Agility";
                            break;
                        }
                        case 11: {
                            string7 = "Divination";
                            break;
                        }
                        case 12: {
                            string7 = "Dungeoneering";
                            break;
                        }
                        case 13: {
                            string7 = "Slayer and Thieving";
                            break;
                        }
                        case 14: {
                            string7 = "Runecrafting and Prayer";
                            break;
                        }
                        case 15: {
                            string7 = "Fishing and Herblore";
                            break;
                        }
                        case 16: {
                            string7 = "Slayer and Hunter";
                            break;
                        }
                        case 17: {
                            string7 = "Herblore and Cooking";
                            break;
                        }
                        case 18: {
                            string7 = "Prayer and Construction";
                            break;
                        }
                        case 21: {
                            string7 = "Dungeoneering and Fishing";
                            break;
                        }
                        case 20: {
                            string7 = "Divination and Runecrafting";
                            break;
                        }
                        case 19: {
                            string7 = "Agility and Thieving";
                            break;
                        }
                    };
                    string7 = `Experience in ${string7}`;
                };
                IF_SETONMOUSEREPEAT(callback(script8799, string7, -2147483645, -1), comp(916, 265));  // pop_ship:reward_1_icon
            };
            int5 = struct_getparam(int0, 3063);
            string6 = inttostring(int5, 10);
            if (((int7 == 2) && (int6 != -1))) {
                IF_SETGRAPHIC(item_getparam(int6, 3080), comp(916, 270));  // pop_ship:reward_2_icon
                string7 = `Unlock crewman: ${OC_NAME(int6)}`;
                IF_SETONMOUSEREPEAT(callback(script8799, string7, -2147483645, -1), comp(916, 270));  // pop_ship:reward_2_icon
                string6 = "";
            };
            if ((((strcmp(string6, "") != 0) && (strcmp(string6, "0") != 0)) && (strcmp(string6, "-1") != 0))) {
                IF_SETTEXT(string6, comp(916, 271));  // pop_ship:reward_2_text
                string7 = enum_getvalue(0, 36, 1025, int3);
                IF_SETONMOUSEREPEAT(callback(script8799, string7, -2147483645, -1), comp(916, 270));  // pop_ship:reward_2_icon
            };
            int5 = struct_getparam(int0, 3065);
            string6 = inttostring(int5, 10);
            if ((((strcmp(string6, "") != 0) && (strcmp(string6, "0") != 0)) && (strcmp(string6, "-1") != 0))) {
                IF_SETTEXT(string6, comp(916, 276));  // pop_ship:reward_3_text
                string7 = enum_getvalue(0, 36, 1025, int4);
                IF_SETONMOUSEREPEAT(callback(script8799, string7, -2147483645, -1), comp(916, 275));  // pop_ship:reward_3_icon
            };
        };
    };
    switch (varclient_2611) {
        case 0: {
            IF_SETHIDE(false, comp(916, 104));  // pop_ship:hull_layer
            IF_SETHIDE(false, comp(916, 95));  // pop_ship:deck1_layer
            IF_SETHIDE(false, comp(916, 98));  // pop_ship:deck2_layer
            IF_SETHIDE(false, comp(916, 101));  // pop_ship:rudder_layer
            IF_SETHIDE(false, comp(916, 92));  // pop_ship:ram_layer
            script13971(60031298, -1, 28554, "Edit Crew", 0);
            IF_SETHIDE(true, comp(916, 207));  // pop_ship:obscure_layer
            break;
        }
        case 1: {
            IF_SETHIDE(true, comp(916, 40));  // pop_ship:active_voyage_layer
            IF_SETHIDE(true, comp(916, 86));  // pop_ship:no_voyage_layer
            IF_SETHIDE(true, comp(916, 33));  // pop_ship:obsolete_layer
            IF_SETHIDE(false, comp(916, 207));  // pop_ship:obscure_layer
            IF_SETHIDE(false, comp(916, 211));  // pop_ship:underway_layer
            IF_SETHIDE(true, comp(916, 212));  // pop_ship:complete_layer
            IF_SETHIDE(true, comp(916, 213));  // pop_ship:success_layer
            IF_SETHIDE(true, comp(916, 214));  // pop_ship:failure_layer
            IF_SETHIDE(true, comp(916, 287));  // pop_ship:crew_levels
            break;
        }
        case 2: {
            IF_SETHIDE(true, comp(916, 40));  // pop_ship:active_voyage_layer
            IF_SETHIDE(true, comp(916, 86));  // pop_ship:no_voyage_layer
            IF_SETHIDE(true, comp(916, 33));  // pop_ship:obsolete_layer
            IF_SETHIDE(false, comp(916, 207));  // pop_ship:obscure_layer
            IF_SETHIDE(true, comp(916, 211));  // pop_ship:underway_layer
            IF_SETHIDE(false, comp(916, 212));  // pop_ship:complete_layer
            IF_SETHIDE(true, comp(916, 213));  // pop_ship:success_layer
            IF_SETHIDE(true, comp(916, 214));  // pop_ship:failure_layer
            IF_SETHIDE(true, comp(916, 287));  // pop_ship:crew_levels
            break;
        }
    };
    return;
}