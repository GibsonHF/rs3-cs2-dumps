//
function script7308(int0: number): void {
    var int1 = -1;
    var int2 = -1;
    var int3 = -1;
    var string0 = "";
    var int4 = 2195 as cs2enum;
    if ((varbitplayer_17220 == 1)) {
        int4 = 5767 as cs2enum;
    };
    var int5 = varbitplayer_17220;
    var int6 = varbitplayer_17224;
    var int7 = varbitplayer_17225;
    var int8 = script2356(int5, varbitplayer_17218, varbitplayer_17219, varbitplayer_17217);
    var string1 = "";
    var int9 = -1;
    var int10 = -1;
    var int11 = -1;
    var int12 = -1;
    var int13 = -1;
    var int14 = -1;
    var int15 = -1;
    var int16 = -1;
    var string2 = "";
    var int17 = -1;
    var int18 = -1;
    var int19 = -1;
    var int20 = -1;
    var int21 = -1;
    var int22 = -1;
    var int23 = INV_GETOBJ(678, int0);
    switch (int0) {
        case 0: {
            int1 = 83623975;
            int2 = 83623979;
            int3 = 83623977;
            string0 = OC_NAME(int23);
            int9 = 83623972;
            int11 = 83623973;
            int12 = 83623988;
            int13 = 83623985;
            int14 = 83623986;
            int15 = 83623987;
            int10 = 83623980;
            int18 = 83623989;
            int19 = 83623990;
            int20 = 83623991;
            int21 = 83623992;
            int16 = 83623993;
            string2 = varclient_2652;
            int17 = 83623976;
            int22 = 83623974;
            break;
        }
        case 1: {
            int1 = 83623997;
            int2 = 83624001;
            int3 = 83623999;
            string0 = OC_NAME(int23);
            int9 = 83623994;
            int11 = 83623995;
            int12 = 83624010;
            int13 = 83624007;
            int14 = 83624008;
            int15 = 83624009;
            int10 = 83624002;
            int18 = 83624011;
            int19 = 83624012;
            int20 = 83624013;
            int21 = 83624014;
            int16 = 83624015;
            string2 = varclient_2653;
            int17 = 83623998;
            int22 = 83623996;
            break;
        }
        case 2: {
            int1 = 83624019;
            int2 = 83624023;
            int3 = 83624021;
            string0 = OC_NAME(int23);
            int9 = 83624016;
            int11 = 83624017;
            int12 = 83624032;
            int13 = 83624029;
            int14 = 83624030;
            int15 = 83624031;
            int10 = 83624024;
            int18 = 83624033;
            int19 = 83624034;
            int20 = 83624035;
            int21 = 83624036;
            int16 = 83624037;
            string2 = varclient_2654;
            int17 = 83624020;
            int22 = 83624018;
            break;
        }
        case 3: {
            int1 = 83623954;
            int2 = -1;
            int3 = 83623955;
            string0 = strconcat(enum_getvalue(0, 36, int4, varbitplayer_17224), strconcat(" ", enum_getvalue(0, 36, 5768 as cs2enum, varbitplayer_17225)));
            int9 = 83623951;
            int11 = 83623952;
            int12 = 83623964;
            int13 = 83623961;
            int14 = 83623962;
            int15 = 83623963;
            int10 = 83623956;
            int18 = 83623965;
            int19 = 83623966;
            int20 = 83623967;
            int21 = 83623968;
            int16 = 83623969;
            string2 = varclient_2651;
            int22 = 83623953;
            break;
        }
    };
    if ((int2 != -1)) {
        if ((varbitplayer_17461 > 0)) {
            script13960(int2, 28693, 0, 0);
        } else {
            script13960(int2, 28693, 1, 0);
        };
    };
    var int24 = 1;
    var string3 = "You cannot afford this crewman.";
    var string4 = "";
    var string5 = "";
    var string6 = "";
    var int25 = 0;
    var int26 = 0;
    if ((int23 != -1)) {
        IF_SETGRAPHIC(item_getparam(int23, 3080), int1);
        IF_SETTEXT(string0, int3);
        IF_SETTEXT(inttostring(item_getparam(int23, 3081), 10), int12);
        IF_SETTEXT(inttostring(item_getparam(int23, 3082), 10), int13);
        IF_SETTEXT(inttostring(item_getparam(int23, 3083), 10), int14);
        IF_SETTEXT(inttostring(item_getparam(int23, 3084), 10), int15);
        if ((item_getparam(int23, 3100) > 0)) {
            string5 = "Pirate Band";
            string6 = "Pirate band members work well with fellows and poorly with rivals.";
        };
        if ((item_getparam(int23, 3101) > 0)) {
            string5 = "Solidarity";
            string6 = `Gives +${inttostring(item_getparam(int23, 3101), 10)} to all stats per unique crew member aboard. (Solidarity does not stack)`;
        };
        if ((item_getparam(int23, 3102) > 0)) {
            string5 = "Staunch";
            string6 = "Will give its own life to save a crewman in distress.";
        };
        if ((item_getparam(int23, 3103) > 0)) {
            string5 = "Rallying Cry";
            string6 = "All XP gains for this crew member's boat are increased by 10%. (Rallying Cry does not stack)";
        };
        if ((item_getparam(int23, 3104) > 0)) {
            string5 = "Gambler";
            string6 = "Chance to increase or reduce the goods retrieved from a mission by 20%.";
        };
        if ((item_getparam(int23, 3106) > 0)) {
            string5 = "Explosive";
            string6 = "Explosive crew members increase the penalties of failing a mission.";
        };
        if ((item_getparam(int23, 3107) > 0)) {
            string5 = "Merchant";
            string6 = `Improve the goods retrieved from a mission by ${inttostring(item_getparam(int23, 3107), 10)}%. (Merchant does not stack)`;
        };
        if ((item_getparam(int23, 3108) > 0)) {
            string5 = "Resurrects";
            string6 = "Crew lost on a mission are returned from beyond to serve you in death.";
        };
        if ((item_getparam(int23, 3105) > 0)) {
            string5 = "Good Fortune";
            string6 = "Increases the chance of gaining a Random Event on completing a voyage. (Good Fortune does not stack)";
        };
        if ((int17 != -1)) {
            IF_SETTEXT(string5, int17);
            if ((strcmp(string5, "") == 0)) {
                IF_SETHIDE(1, int17);
                IF_SETTEXT("", int17);
            } else {
                IF_SETHIDE(0, int17);
            };
        };
        if (((strcmp(string5, "") != 0) && (int17 != -1))) {
            IF_SETONMOUSEOVER(callback(script7309, -2147483645, 1, 0), int17);
            IF_SETONMOUSELEAVE(callback(script7309, -2147483645, 0, 0), int17);
            IF_SETONMOUSEREPEAT(callback(script8799, string6, -2147483645, -1), int17);
        };
        IF_SETHIDE(0, int10);
        if ((item_getparam(int23, 3094) > 0)) {
            IF_SETTEXT(inttostring(item_getparam(int23, 3094), 10), int19);
            IF_SETCOLOUR(16446166, int19);
            IF_SETGRAPHIC(enum_getvalue(0, 23, 7153 as cs2enum, item_getparam(int23, 3093)), int18);
            IF_SETSIZE(17, 17, 0, 0, int18);
            switch (item_getparam(int23, 3093)) {
                case 1: {
                    int25 = varplayer_3441;
                    if ((item_getparam(int23, 3094) > varplayer_3441)) {
                        int24 = 0;
                        IF_SETCOLOUR(16711680, int19);
                    };
                    break;
                }
                case 2: {
                    int25 = varplayer_3442;
                    if ((item_getparam(int23, 3094) > varplayer_3442)) {
                        int24 = 0;
                        IF_SETCOLOUR(16711680, int19);
                    };
                    break;
                }
                case 3: {
                    int25 = varplayer_3443;
                    if ((item_getparam(int23, 3094) > varplayer_3443)) {
                        int24 = 0;
                        IF_SETCOLOUR(16711680, int19);
                    };
                    break;
                }
                case 4: {
                    int25 = varplayer_3444;
                    if ((item_getparam(int23, 3094) > varplayer_3444)) {
                        int24 = 0;
                        IF_SETCOLOUR(16711680, int19);
                    };
                    break;
                }
                case 5: {
                    int25 = varplayer_3445;
                    if ((item_getparam(int23, 3094) > varplayer_3445)) {
                        int24 = 0;
                        IF_SETCOLOUR(16711680, int19);
                    };
                    break;
                }
                case 6: {
                    int25 = varplayer_3446;
                    if ((item_getparam(int23, 3094) > varplayer_3446)) {
                        int24 = 0;
                        IF_SETCOLOUR(16711680, int19);
                    };
                    break;
                }
                case 7: {
                    int25 = varplayer_3447;
                    if ((item_getparam(int23, 3094) > varplayer_3447)) {
                        int24 = 0;
                        IF_SETCOLOUR(16711680, int19);
                    };
                    break;
                }
                case 8: {
                    int25 = varplayer_4038;
                    if ((item_getparam(int23, 3094) > varplayer_4038)) {
                        int24 = 0;
                        IF_SETCOLOUR(16711680, int19);
                    };
                    break;
                }
                case 9: {
                    int25 = varplayer_4039;
                    if ((item_getparam(int23, 3094) > varplayer_4039)) {
                        int24 = 0;
                        IF_SETCOLOUR(16711680, int19);
                    };
                    break;
                }
            };
            string4 = `${inttostring(item_getparam(int23, 3094), 10)}/${inttostring(int25, 10)}`;
            IF_SETONMOUSEREPEAT(callback(script8799, string4, -2147483645, -1), int19);
            IF_SETONMOUSEREPEAT(callback(script8799, string4, -2147483645, -1), int18);
        } else {
            IF_SETTEXT("", int19);
            IF_SETGRAPHIC(-1 as graphic, int18);
        };
        if ((item_getparam(int23, 3096) > 0)) {
            IF_SETTEXT(inttostring(item_getparam(int23, 3096), 10), int21);
            IF_SETCOLOUR(16446166, int21);
            IF_SETSIZE(17, 17, 0, 0, int21);
            IF_SETGRAPHIC(enum_getvalue(0, 23, 7153 as cs2enum, item_getparam(int23, 3095)), int20);
            switch (item_getparam(int23, 3095)) {
                case 1: {
                    int26 = varplayer_3441;
                    if ((item_getparam(int23, 3096) > varplayer_3441)) {
                        int24 = 0;
                        IF_SETCOLOUR(16711680, int21);
                    };
                    break;
                }
                case 2: {
                    int26 = varplayer_3442;
                    if ((item_getparam(int23, 3096) > varplayer_3442)) {
                        int24 = 0;
                        IF_SETCOLOUR(16711680, int21);
                    };
                    break;
                }
                case 3: {
                    int26 = varplayer_3443;
                    if ((item_getparam(int23, 3096) > varplayer_3443)) {
                        int24 = 0;
                        IF_SETCOLOUR(16711680, int21);
                    };
                    break;
                }
                case 4: {
                    int26 = varplayer_3444;
                    if ((item_getparam(int23, 3096) > varplayer_3444)) {
                        int24 = 0;
                        IF_SETCOLOUR(16711680, int21);
                    };
                    break;
                }
                case 5: {
                    int26 = varplayer_3445;
                    if ((item_getparam(int23, 3096) > varplayer_3445)) {
                        int24 = 0;
                        IF_SETCOLOUR(16711680, int21);
                    };
                    break;
                }
                case 6: {
                    int26 = varplayer_3446;
                    if ((item_getparam(int23, 3096) > varplayer_3446)) {
                        int24 = 0;
                        IF_SETCOLOUR(16711680, int21);
                    };
                    break;
                }
                case 7: {
                    int26 = varplayer_3447;
                    if ((item_getparam(int23, 3096) > varplayer_3447)) {
                        int24 = 0;
                        IF_SETCOLOUR(16711680, int21);
                    };
                    break;
                }
                case 8: {
                    int26 = varplayer_4038;
                    if ((item_getparam(int23, 3096) > varplayer_4038)) {
                        int24 = 0;
                        IF_SETCOLOUR(16711680, int21);
                    };
                    break;
                }
                case 9: {
                    int26 = varplayer_4039;
                    if ((item_getparam(int23, 3096) > varplayer_4039)) {
                        int24 = 0;
                        IF_SETCOLOUR(16711680, int21);
                    };
                    break;
                }
            };
            string4 = `${inttostring(item_getparam(int23, 3096), 10)}/${inttostring(int26, 10)}`;
            IF_SETONMOUSEREPEAT(callback(script8799, string4, -2147483645, -1), int21);
            IF_SETONMOUSEREPEAT(callback(script8799, string4, -2147483645, -1), int20);
        } else {
            IF_SETTEXT("", int21);
            IF_SETGRAPHIC(-1 as graphic, int20);
        };
        if ((((enum_hasoutput(33, 2174, int23) == 1) && (int23 != 26265)) && (int23 != 26266))) {
            IF_SETTEXT("Useful supplies for a journey.", int16);
        } else {
            IF_SETTEXT(string2, int16);
        };
        if ((int0 == varplayer_3420)) {
            if ((enum_hasoutput(33, 2174, int23) == 1)) {
                string3 = "You cannot afford these crew supplies.";
            };
            if ((int24 == 0)) {
                script996(int11, -1, 28557, 1, 1);
                IF_SETHIDE(0, int22);
            } else {
                script996(int11, -1, 28557, 0, 1);
                IF_SETHIDE(1, int22);
            };
        } else if ((int24 == 0)) {
            script996(int11, -1, 28557, 1, 0);
            IF_SETHIDE(0, int22);
        } else {
            script996(int11, -1, 28557, 0, 0);
            IF_SETHIDE(1, int22);
        };
        if ((enum_hasoutput(33, 2173, int23) == 1)) {
            IF_SETNPCHEAD(int8, 83623954);
            IF_SETMODELANIM(9806, 83623954);
            IF_SETMODELZOOM(2900, 83623954);
            string1 = strconcat(enum_getvalue(0, 36, int4, int6), ` ${enum_getvalue(0, 36, 5768 as cs2enum, int7)}`);
            IF_SETTEXT(`Captain: ${string1}`, 83623955);
        };
    } else {
        IF_SETGRAPHIC(-1 as graphic, int1);
        if ((int0 == 3)) {
            IF_SETTEXT("No Captain Available", int3);
        } else {
            IF_SETTEXT("No Crewman", int3);
        };
        IF_SETTEXT("", int12);
        IF_SETTEXT("", int13);
        IF_SETTEXT("", int14);
        IF_SETTEXT("", int15);
        IF_SETHIDE(1, int10);
        IF_SETGRAPHIC(-1 as graphic, int18);
        IF_SETTEXT("", int19);
        IF_SETGRAPHIC(-1 as graphic, int20);
        IF_SETTEXT("", int21);
        IF_SETTEXT("", int16);
        if ((int0 == 3)) {
            IF_SETMODEL(-1, 83623954);
        };
        script996(int11, -1, 28557, 1, 0);
    };
    return;
}