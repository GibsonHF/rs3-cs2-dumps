//
function script7308(int0: int): void {
    var int1 = -1;
    var int2 = comp(-1, 65535);
    var int3 = comp(-1, 65535);
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
    var int10 = comp(-1, 65535);
    var int11 = comp(-1, 65535);
    var int12 = comp(-1, 65535);
    var int13 = comp(-1, 65535);
    var int14 = comp(-1, 65535);
    var int15 = comp(-1, 65535);
    var int16 = comp(-1, 65535);
    var string2 = "";
    var int17 = comp(-1, 65535);
    var int18 = -1;
    var int19 = comp(-1, 65535);
    var int20 = -1;
    var int21 = comp(-1, 65535);
    var int22 = comp(-1, 65535);
    var int23 = INV_GETOBJ(678 as inv, int0);
    switch (int0) {
        case 0: {
            int1 = 83623975;
            int2 = comp(1276, 43);
            int3 = comp(1276, 41);
            string0 = OC_NAME(int23);
            int9 = 83623972;
            int11 = comp(1276, 37);
            int12 = comp(1276, 52);
            int13 = comp(1276, 49);
            int14 = comp(1276, 50);
            int15 = comp(1276, 51);
            int10 = comp(1276, 44);
            int18 = 83623989;
            int19 = comp(1276, 54);
            int20 = 83623991;
            int21 = comp(1276, 56);
            int16 = comp(1276, 57);
            string2 = varclient_2652;
            int17 = comp(1276, 40);
            int22 = comp(1276, 38);
            break;
        }
        case 1: {
            int1 = 83623997;
            int2 = comp(1276, 65);
            int3 = comp(1276, 63);
            string0 = OC_NAME(int23);
            int9 = 83623994;
            int11 = comp(1276, 59);
            int12 = comp(1276, 74);
            int13 = comp(1276, 71);
            int14 = comp(1276, 72);
            int15 = comp(1276, 73);
            int10 = comp(1276, 66);
            int18 = 83624011;
            int19 = comp(1276, 76);
            int20 = 83624013;
            int21 = comp(1276, 78);
            int16 = comp(1276, 79);
            string2 = varclient_2653;
            int17 = comp(1276, 62);
            int22 = comp(1276, 60);
            break;
        }
        case 2: {
            int1 = 83624019;
            int2 = comp(1276, 87);
            int3 = comp(1276, 85);
            string0 = OC_NAME(int23);
            int9 = 83624016;
            int11 = comp(1276, 81);
            int12 = comp(1276, 96);
            int13 = comp(1276, 93);
            int14 = comp(1276, 94);
            int15 = comp(1276, 95);
            int10 = comp(1276, 88);
            int18 = 83624033;
            int19 = comp(1276, 98);
            int20 = 83624035;
            int21 = comp(1276, 100);
            int16 = comp(1276, 101);
            string2 = varclient_2654;
            int17 = comp(1276, 84);
            int22 = comp(1276, 82);
            break;
        }
        case 3: {
            int1 = 83623954;
            int2 = comp(-1, 65535);
            int3 = comp(1276, 19);
            string0 = strconcat(enum_getvalue(0, 36, int4, varbitplayer_17224), strconcat(" ", enum_getvalue(0, 36, 5768 as cs2enum, varbitplayer_17225)));
            int9 = 83623951;
            int11 = comp(1276, 16);
            int12 = comp(1276, 28);
            int13 = comp(1276, 25);
            int14 = comp(1276, 26);
            int15 = comp(1276, 27);
            int10 = comp(1276, 20);
            int18 = 83623965;
            int19 = comp(1276, 30);
            int20 = 83623967;
            int21 = comp(1276, 32);
            int16 = comp(1276, 33);
            string2 = varclient_2651;
            int22 = comp(1276, 17);
            break;
        }
    };
    if ((int2 != comp(-1, 65535))) {
        if ((varbitplayer_17461 > 0)) {
            script13960(int2, 28693 as struct, false, 0);
        } else {
            script13960(int2, 28693 as struct, true, 0);
        };
    };
    var int24 = 1;
    var string3 = "You cannot afford this crewman.";
    var string4 = "";
    var string5 = "";
    var string6 = "";
    var int25 = 0;
    var int26 = 0;
    if ((int23 != -1 as obj)) {
        stack(item_getparam(int23, 3080));
        stack(int1);
        IF_SETGRAPHIC();
        IF_SETTEXT(string0, int3);
        stack(int23);
        stack(3081);
        item_getparam();
        IF_SETTEXT(inttostring(stack(), 10), int12);
        stack(int23);
        stack(3082);
        item_getparam();
        IF_SETTEXT(inttostring(stack(), 10), int13);
        stack(int23);
        stack(3083);
        item_getparam();
        IF_SETTEXT(inttostring(stack(), 10), int14);
        stack(int23);
        stack(3084);
        item_getparam();
        IF_SETTEXT(inttostring(stack(), 10), int15);
        stack(int23);
        stack(3100);
        item_getparam();
        if ((stack() > 0)) {
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
        if ((int17 != comp(-1, 65535))) {
            IF_SETTEXT(string5, int17);
            if ((strcmp(string5, "") == 0)) {
                IF_SETHIDE(true, int17);
                IF_SETTEXT("", int17);
            } else {
                IF_SETHIDE(false, int17);
            };
        };
        if (((strcmp(string5, "") != 0) && (int17 != comp(-1, 65535)))) {
            IF_SETONMOUSEOVER(callback(script7309, -2147483645, 1, 0), int17);
            IF_SETONMOUSELEAVE(callback(script7309, -2147483645, 0, 0), int17);
            IF_SETONMOUSEREPEAT(callback(script8799, string6, -2147483645, -1), int17);
        };
        IF_SETHIDE(false, int10);
        if ((item_getparam(int23, 3094) > 0)) {
            IF_SETTEXT(inttostring(item_getparam(int23, 3094), 10), int19);
            IF_SETCOLOUR(16446166, int19);
            stack(enum_getvalue(0, 23, 7153 as cs2enum, item_getparam(int23, 3093)));
            stack(int18);
            IF_SETGRAPHIC();
            IF_SETSIZE(17, 17, 0, 0, int18);
            stack(int23);
            stack(3093);
            item_getparam();
            switch (stack()) {
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
            stack(-1);
            stack(int18);
            IF_SETGRAPHIC();
        };
        if ((item_getparam(int23, 3096) > 0)) {
            IF_SETTEXT(inttostring(item_getparam(int23, 3096), 10), int21);
            IF_SETCOLOUR(16446166, int21);
            IF_SETSIZE(17, 17, 0, 0, int21);
            stack(enum_getvalue(0, 23, 7153 as cs2enum, item_getparam(int23, 3095)));
            stack(int20);
            IF_SETGRAPHIC();
            stack(int23);
            stack(3095);
            item_getparam();
            switch (stack()) {
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
            stack(-1);
            stack(int20);
            IF_SETGRAPHIC();
        };
        if ((((enum_hasoutput(33, 2174 as cs2enum, int23) == 1) && (int23 != 26265 as obj)) && (int23 != 26266 as obj))) {
            IF_SETTEXT("Useful supplies for a journey.", int16);
        } else {
            IF_SETTEXT(string2, int16);
        };
        if ((int0 == varplayer_3420)) {
            if ((enum_hasoutput(33, 2174 as cs2enum, int23) == 1)) {
                string3 = "You cannot afford these crew supplies.";
            };
            if ((int24 == 0)) {
                script996(int11, comp(-1, 65535), 28557 as struct, true, 1);
                IF_SETHIDE(false, int22);
            } else {
                script996(int11, comp(-1, 65535), 28557 as struct, false, 1);
                IF_SETHIDE(true, int22);
            };
        } else if ((int24 == 0)) {
            script996(int11, comp(-1, 65535), 28557 as struct, true, 0);
            IF_SETHIDE(false, int22);
        } else {
            script996(int11, comp(-1, 65535), 28557 as struct, false, 0);
            IF_SETHIDE(true, int22);
        };
        if ((enum_hasoutput(33, 2173 as cs2enum, int23) == 1)) {
            IF_SETNPCHEAD(int8, comp(1276, 18));
            IF_SETMODELANIM(9806 as seq, comp(1276, 18));
            IF_SETMODELZOOM(2900, comp(1276, 18));
            string1 = strconcat(enum_getvalue(0, 36, int4, int6), ` ${enum_getvalue(0, 36, 5768 as cs2enum, int7)}`);
            IF_SETTEXT(`Captain: ${string1}`, comp(1276, 19));
        };
    } else {
        stack(-1);
        stack(int1);
        IF_SETGRAPHIC();
        if ((int0 == 3)) {
            IF_SETTEXT("No Captain Available", int3);
        } else {
            IF_SETTEXT("No Crewman", int3);
        };
        IF_SETTEXT("", int12);
        IF_SETTEXT("", int13);
        IF_SETTEXT("", int14);
        IF_SETTEXT("", int15);
        IF_SETHIDE(true, int10);
        stack(-1);
        stack(int18);
        IF_SETGRAPHIC();
        IF_SETTEXT("", int19);
        stack(-1);
        stack(int20);
        IF_SETGRAPHIC();
        IF_SETTEXT("", int21);
        IF_SETTEXT("", int16);
        if ((int0 == 3)) {
            IF_SETMODEL(-1 as model, comp(1276, 18));
        };
        script996(int11, comp(-1, 65535), 28557 as struct, true, 0);
    };
    return;
}