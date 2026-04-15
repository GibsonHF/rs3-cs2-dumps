//
function script4864(): void {
    var int0 = 0;
    var int1 = 0;
    var int2 = 0;
    var int3 = 1;
    var int4 = 0;
    var int5 = 0;
    var int6 = 0;
    var int7 = 0;
    var int8 = 0;
    var int9 = 0;
    var int10 = 0;
    var int11 = 0;
    var int12 = 0;
    var int13 = 0;
    var int14 = 0;
    var int15 = 0;
    var int16 = 0;
    var int17 = 0;
    var int18 = 0;
    var int19 = 0;
    var int20 = 0;
    var int21 = 0;
    var int22 = 0;
    var int23 = 0;
    var int24 = 0;
    var int25 = 0;
    var int26 = 0;
    var int27 = 0;
    var int28 = 0;
    var int29 = 0;
    var int30 = 0;
    var int31 = 0;
    var int32 = -1 as graphic;
    var string0 = "";
    var int33 = 0;
    var int34 = 0;
    var int35 = 0;
    var int36 = 0;
    var int37 = 0;
    var int38 = 0;
    var int39 = 0;
    var int40 = 0;
    var string1 = "";
    var string2 = "You do not have permission from your clan to set the primary resource target.";
    var string3 = "Toggle whether this resource is the primary resource target.";
    var string4 = "You do not have permission from your clan to set resource target amounts.";
    var string5 = "Set a target amount of this resource to be collected.";
    var int41 = -1;
    define_array(10);
    var int42 = 0;
    var int43 = 0;
    var int44 = 0;
    if ((CLANPROFILE_FIND() == 1)) {
        [int12, int13, int14, int16, int17, int15] = script4797();
        while ((int3 <= 31)) {
            int4 = script4790(int3);
            if ((int4 > 0)) {
                [int32, string0, int33, int34, int35, int36, int37, int38] = script4791(int4);
                [int6, int7, int8, int10, int11, int9] = script4792(int4, int33);
                int5 = script4975(int4);
                if ((int5 == 3)) {
                    int18 = (int18 + int6);
                    int19 = (int19 + int7);
                    int20 = (int20 + int8);
                    int22 = (int22 + int10);
                    int23 = (int23 + int11);
                    int21 = (int21 + int9);
                    [int6, int7, int8, int10, int11, int9] = script4793(int36, int37);
                    int26 = (int26 + int6);
                    int27 = (int27 + int7);
                    int28 = (int28 + int8);
                    int30 = (int30 + int10);
                    int31 = (int31 + int11);
                    int29 = (int29 + int9);
                };
            };
            int3 = (int3 + 1);
        };
        int18 = (int18 - int26);
        int19 = (int19 - int27);
        int20 = (int20 - int28);
        int23 = (int23 - int31);
        int22 = (int22 - int30);
        int21 = (int21 - int29);
        int39 = varclan_2744;
        if ((int39 > 0)) {
            switch (varclan_2744) {
                case 1: {
                    int24 = varclan_2734;
                    break;
                }
                case 2: {
                    int24 = varclan_2735;
                    break;
                }
                case 3: {
                    int24 = varclan_2736;
                    break;
                }
                case 4: {
                    int24 = varclan_2737;
                    break;
                }
                case 5: {
                    int24 = varclan_2738;
                    break;
                }
                case 6: {
                    int24 = varclan_2739;
                    break;
                }
                case 7: {
                    int24 = varclan_2740;
                    break;
                }
                case 9: {
                    int24 = varclan_2742;
                    break;
                }
                case 8: {
                    int24 = varclan_2741;
                    break;
                }
                case 10: {
                    int24 = varclan_2743;
                    break;
                }
            };
            string1 = `${inttostring(int24, 10)} ${enum_getvalue(0, 36, 4285 as cs2enum, int39)}`;
        } else {
            string1 = "No target set";
        };
        pop_array(0, MAX((varclan_2724 / 100), (int12 + int18)));
        pop_array(1, MAX((varclan_2725 / 100), (int13 + int19)));
        pop_array(2, MAX((varclan_2728 / 100), (int14 + int20)));
        pop_array(3, MAX((varclan_2730 / 100), (int15 + int21)));
        pop_array(4, MAX((varclan_2732 / 100), (int16 + int22)));
        pop_array(5, MAX((varclan_2731 / 100), (int17 + int23)));
        pop_array(6, MAX((varclan_2726 / 100), varclan_2736));
        pop_array(7, MAX((varclan_2727 / 100), varclan_2737));
        pop_array(8, MAX((varclan_2729 / 100), varclan_2739));
        pop_array(9, MAX((varclan_2733 / 100), varclan_2743));
        while ((int42 < 10)) {
            if ((push_array(int42) > int43)) {
                int43 = push_array(int42);
            };
            int42 = (int42 + 1);
        };
        script4866(1, varclan_2724, int12, int18, int26, int43);
        script4866(2, varclan_2725, int13, int19, int27, int43);
        script4866(3, varclan_2726, 0, 0, 0, int43);
        script4866(4, varclan_2727, 0, 0, 0, int43);
        script4866(5, varclan_2728, int14, int20, int28, int43);
        script4866(6, varclan_2729, 0, 0, 0, int43);
        script4866(7, varclan_2730, int15, int21, int29, int43);
        script4866(8, varclan_2731, int17, int23, int31, int43);
        script4866(9, varclan_2732, int16, int22, int30, int43);
        script4866(10, varclan_2733, 0, 0, 0, int43);
        IF_SETTEXT(string1, comp(1260, 281));
        switch (varbitplayer_6680) {
            case 1: {
                stack(7381);
                stack(82575659);
                IF_SETGRAPHIC();
                break;
            }
            case 2: {
                stack(7380);
                stack(82575659);
                IF_SETGRAPHIC();
                break;
            }
            case 3: {
                stack(7384);
                stack(82575659);
                IF_SETGRAPHIC();
                break;
            }
            case 4: {
                stack(7378);
                stack(82575659);
                IF_SETGRAPHIC();
                break;
            }
            case 5: {
                stack(7377);
                stack(82575659);
                IF_SETGRAPHIC();
                break;
            }
            case 6: {
                stack(7379);
                stack(82575659);
                IF_SETGRAPHIC();
                break;
            }
            case 7: {
                stack(7376);
                stack(82575659);
                IF_SETGRAPHIC();
                break;
            }
            case 8: {
                stack(7383);
                stack(82575659);
                IF_SETGRAPHIC();
                break;
            }
            case 9: {
                stack(7382);
                stack(82575659);
                IF_SETGRAPHIC();
                break;
            }
            case 10: {
                stack(7385);
                stack(82575659);
                IF_SETGRAPHIC();
                break;
            }
            default: {
                stack(-1);
                stack(82575659);
                IF_SETGRAPHIC();
                break;
            }
        };
        switch (varbitplayer_6680) {
            case 1: {
                int40 = varclan_2734;
                break;
            }
            case 2: {
                int40 = varclan_2735;
                break;
            }
            case 3: {
                int40 = varclan_2736;
                break;
            }
            case 4: {
                int40 = varclan_2737;
                break;
            }
            case 5: {
                int40 = varclan_2738;
                break;
            }
            case 6: {
                int40 = varclan_2739;
                break;
            }
            case 7: {
                int40 = varclan_2740;
                break;
            }
            case 8: {
                int40 = varclan_2741;
                break;
            }
            case 9: {
                int40 = varclan_2742;
                break;
            }
            case 10: {
                int40 = varclan_2743;
                break;
            }
        };
        if ((int40 > 0)) {
            string1 = inttostring(int40, 10);
        } else {
            string1 = "No target set";
        };
        if ((varbitplayer_6680 > 0)) {
            IF_SETHIDE(false, comp(1260, 91));
            IF_SETHIDE(true, comp(1260, 93));
            IF_SETTEXT(enum_getvalue(0, 36, 4285 as cs2enum, varbitplayer_6680), comp(1260, 32));
            IF_SETTEXT(string1, comp(1260, 295));
            if (((script5956(varbitplayer_6680) == 1) || (script5956(varbitplayer_6680) == 2))) {
                stack(5917);
                stack(82575447);
                IF_SETGRAPHIC();
                stack(5919);
                stack(82575449);
                IF_SETGRAPHIC();
            };
            if ((script5956(varbitplayer_6680) == 3)) {
                stack(5917);
                stack(82575449);
                IF_SETGRAPHIC();
                stack(5919);
                stack(82575447);
                IF_SETGRAPHIC();
            };
            if ((script5956(varbitplayer_6680) == 0)) {
                stack(5919);
                stack(82575449);
                IF_SETGRAPHIC();
                stack(5919);
                stack(82575447);
                IF_SETGRAPHIC();
            };
            string3 = "Toggle whether this skill plot will lock when the resource target is reached. It will automatically unlock once all resource targets are hit.";
            IF_SETONMOUSEREPEAT(callback(script8799, string3, -2147483645, -2147483643), 82575447);
            string3 = "Toggle whether this skill plot is locked. If this is checked, the plot will stay locked until manually unlocked.";
            IF_SETONMOUSEREPEAT(callback(script8799, string3, -2147483645, -2147483643), 82575449);
            if ((varclan_2744 == varbitplayer_6680)) {
                if ((script5224(-1) == 1)) {
                    stack(5916);
                    stack(82575493);
                    IF_SETGRAPHIC();
                    string3 = "Toggle whether this resource is the primary resource target.";
                    IF_SETOP(1, "Make Primary Target", 82575493);
                } else {
                    stack(5919);
                    stack(82575493);
                    IF_SETGRAPHIC();
                    string3 = "You do not have permission from your clan to set the primary resource target.";
                    IF_SETOP(1, "", 82575493);
                };
            } else if ((script5224(-1) == 1)) {
                if ((script5214(varbitplayer_6680) <= varbitclan_6507)) {
                    stack(5920);
                    stack(82575493);
                    IF_SETGRAPHIC();
                    string3 = "Toggle whether this resource is the primary resource target.";
                    IF_SETOP(1, "Make Primary Target", 82575493);
                } else {
                    stack(5923);
                    stack(82575493);
                    IF_SETGRAPHIC();
                    string3 = `This resource will become available at citadel tier ${inttostring(script5214(varbitplayer_6680), 10)}.`;
                    IF_SETOP(1, "", 82575493);
                };
            } else {
                stack(5923);
                stack(82575493);
                IF_SETGRAPHIC();
                string3 = "You do not have permission from your clan to set the primary resource target.";
                IF_SETOP(1, "", 82575493);
            };
            IF_SETONMOUSEREPEAT(callback(script8799, string3, -2147483645, -2147483643), 82575493);
            IF_SETHIDE(0, 82575649);
            IF_SETONMOUSEREPEAT(callback(script8799, string5, -2147483645, -2147483643), 82575648);
            if ((script5224(-1) == 1)) {
                if ((script5214(varbitplayer_6680) <= varbitclan_6507)) {
                    IF_SETHIDE(true, comp(1260, 289));
                } else {
                    IF_SETHIDE(false, comp(1260, 289));
                    string4 = `This resource will become available at citadel tier ${inttostring(script5214(varbitplayer_6680), 10)}.`;
                };
            } else {
                IF_SETHIDE(false, comp(1260, 289));
                string4 = "You do not have permission from your clan to set resource targets.";
            };
            IF_SETONMOUSEREPEAT(callback(script8799, string4, -2147483645, -2147483643), 82575649);
        } else {
            IF_SETHIDE(true, comp(1260, 91));
            IF_SETHIDE(false, comp(1260, 93));
        };
    };
    return;
}