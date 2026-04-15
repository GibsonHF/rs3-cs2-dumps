//
function script9022(int0: int): void {
    var int1 = script13749();
    var int2 = script7754();
    if (((int0 == 0) || (int0 == 1))) {
        script9021(comp(1345, 93), comp(1345, 94), comp(1345, 98), comp(1345, 97), int2, comp(1345, 87));
    };
    if (((int0 == 0) || (int0 == 2))) {
        script9021(comp(1345, 252), comp(1345, 254), comp(1345, 255), comp(1345, 289), int2, comp(1345, 88));
    };
    if (((int0 == 0) || (int0 == 3))) {
        script9021(comp(1345, 261), comp(1345, 263), comp(1345, 264), comp(1345, 292), int2, comp(1345, 89));
    };
    if (((int0 == 0) || (int0 == 4))) {
        script9021(comp(1345, 270), comp(1345, 272), comp(1345, 273), comp(1345, 295), int2, comp(1345, 90));
    };
    if ((int2 == 1)) {
        IF_SETHIDE(false, comp(1345, 77));
        script3536("Shuffle the deck of recommended content and deal another hand of cards.", comp(1345, 77), -1);
        IF_SETHIDE(false, comp(1345, 97));
        script3536("Shuffle this deck of recommended content.", comp(1345, 97), -1);
        IF_SETHIDE(false, comp(1345, 289));
        script3536("Shuffle this deck of recommended content.", comp(1345, 289), -1);
        IF_SETHIDE(false, comp(1345, 292));
        script3536("Shuffle this deck of recommended content.", comp(1345, 292), -1);
        IF_SETHIDE(false, comp(1345, 295));
        script3536("Shuffle this deck of recommended content.", comp(1345, 295), -1);
    } else {
        IF_SETHIDE(true, comp(1345, 77));
        IF_SETHIDE(true, comp(1345, 97));
        IF_SETHIDE(true, comp(1345, 289));
        IF_SETHIDE(true, comp(1345, 292));
        IF_SETHIDE(true, comp(1345, 295));
    };
    script3536("Next Page", comp(1345, 2), -1);
    script13990(comp(1345, 246), comp(1345, 247), 28556 as struct);
    script13990(comp(1345, 249), comp(1345, 250), 28556 as struct);
    script13990(comp(1345, 258), comp(1345, 259), 28556 as struct);
    script13990(comp(1345, 267), comp(1345, 268), 28556 as struct);
    script13992(script9024(), 28556 as struct, 1);
    script9025(varplayer_9117, varplayer_9749, varplayer_9753, varplayer_9121, varplayer_9125, varplayer_9129, comp(1345, 100), 88146016, 88146015);
    script9025(varplayer_9118, varplayer_9750, varplayer_9754, varplayer_9122, varplayer_9126, varplayer_9130, comp(1345, 253), 88146208, 88146207);
    script9025(varplayer_9119, varplayer_9751, varplayer_9755, varplayer_9123, varplayer_9127, varplayer_9131, comp(1345, 262), 88146211, 88146210);
    script9025(varplayer_9120, varplayer_9752, varplayer_9756, varplayer_9124, varplayer_9128, varplayer_9132, comp(1345, 271), 88146214, 88146213);
    script9026(varplayer_9117, varplayer_9749, varplayer_9753, comp(1345, 99));
    script9026(varplayer_9118, varplayer_9750, varplayer_9754, comp(1345, 256));
    script9026(varplayer_9119, varplayer_9751, varplayer_9755, comp(1345, 265));
    script9026(varplayer_9120, varplayer_9752, varplayer_9756, comp(1345, 274));
    var int3 = -1 as struct;
    var int4 = -1 as quest;
    var int5 = -1 as achievement;
    [int3, int4, int5] = script8819();
    var int6 = comp(-1, 65535);
    var int7 = 0;
    var int8 = 0;
    var int9 = 0;
    var int10 = 0;
    var int11 = 0;
    var string0 = "";
    var string1 = "";
    var string2 = "";
    var int12 = -1;
    var int13 = -1 as cs2enum;
    var int14 = -1;
    var string3 = "Track";
    var int15 = false;
    var int16 = false;
    var int17 = false;
    var int18 = 0;
    var int19 = 0;
    var int20 = -1 as struct;
    var int21 = 0;
    var string4 = "";
    var string5 = "";
    var int22 = 0;
    var int23 = 0;
    var int24 = 0;
    var int25 = int3;
    if (((int3 != -1 as struct) && (struct_getparam(int3, 4253) != -1 as struct))) {
        int25 = struct_getparam(int3, 4253);
    };
    var int26 = int4;
    var int27 = int5;
    var string6 = "";
    var int28 = 0;
    var int29 = 0;
    var string7 = "";
    var int30 = 0;
    var int31 = 0;
    var int32 = 0;
    var string8 = "";
    var int33 = 1;
    if ((((int3 != -1 as struct) || (int4 != -1 as quest)) || (int5 != -1 as achievement))) {
        [int11, string0] = script9030(int3, int4, int5);
        if ((strcmp(string0, "None.") == 0)) {
            string0 = "";
        };
        if ((STRING_LENGTH(string0) > 0)) {
            IF_SETTEXT(string0, comp(1345, 80));
            IF_SETSCROLLPOS(0, 0, comp(1345, 82));
            int18 = (script7593(IF_GETTEXT(comp(1345, 80)), IF_GETWIDTH(comp(1345, 80)), IF_GETFONTMETRICS(comp(1345, 80)), 0) + 5);
            IF_SETSCROLLSIZE(0, int18, comp(1345, 82));
            if ((int18 > IF_GETHEIGHT(comp(1345, 82)))) {
                IF_SETHIDE(false, comp(1345, 84));
                script7791(comp(1345, 84), comp(1345, 82));
            } else {
                IF_SETHIDE(true, comp(1345, 84));
            };
            script13959(comp(1345, 231), 28755 as struct, false);
            string8 = "Display list of additional requirements.";
        } else {
            IF_SETTEXT("No additional requirements", comp(1345, 80));
            IF_SETHIDE(true, comp(1345, 73));
            script13959(comp(1345, 231), 28755 as struct, true);
            string8 = "This content does not have any additional requirements.";
        };
        script3536(string8, comp(1345, 230), -1);
        if ((IF_GETHIDE(comp(1345, 73)) == true)) {
            stack(31347);
            stack(88146152);
            IF_SETGRAPHIC();
        } else {
            stack(31348);
            stack(88146152);
            IF_SETGRAPHIC();
        };
        switch (int11) {
            case -1: {
                script3536("Requirements not met.", comp(1345, 233), -1);
                IF_SETHIDE(false, comp(1345, 233));
                IF_SETHIDE(true, comp(1345, 234));
                IF_SETHIDE(true, comp(1345, 235));
                break;
            }
            case 0: {
                script3536("Requirements met.", comp(1345, 234), -1);
                IF_SETHIDE(false, comp(1345, 234));
                IF_SETHIDE(true, comp(1345, 233));
                IF_SETHIDE(true, comp(1345, 235));
                break;
            }
            case -2: {
                script3536("You have completed this content.", comp(1345, 235), -1);
                IF_SETHIDE(false, comp(1345, 235));
                IF_SETHIDE(true, comp(1345, 233));
                IF_SETHIDE(true, comp(1345, 234));
                break;
            }
            default: {
                script3536("No requirements.", comp(1345, 234), -1);
                IF_SETHIDE(false, comp(1345, 234));
                IF_SETHIDE(true, comp(1345, 233));
                IF_SETHIDE(true, comp(1345, 235));
                break;
            }
        };
        if ((script9027(int3, int4, int5) == true)) {
            script3536("Requires membership.", comp(1345, 236), -1);
            IF_SETHIDE(false, comp(1345, 236));
            IF_SETHIDE(true, comp(1345, 237));
        } else {
            script3536("Does not require membership.", comp(1345, 237), -1);
            IF_SETHIDE(false, comp(1345, 237));
            IF_SETHIDE(true, comp(1345, 236));
        };
        int6 = comp(1345, 238);
        int10 = IF_GETWIDTH(int6);
        CC_DELETEALL(int6);
        int12 = script7663(int3, int4, int5);
        switch (int12) {
            case 7: {
                int20 = script16091();
                [int28, int29, string7, int30, int31] = script11608();
                if ((int28 == 1)) {
                    if ((int31 > 0)) {
                        string7 = strconcat(string7, ` (${inttostring(int30, 10)}/${inttostring(int31, 10)})`);
                    };
                } else if ((int20 != -1 as struct)) {
                    int9 = (++int9 + 5);
                    int29 = script9031();
                    if ((int29 > 0)) {
                        string1 = `${inttostring(int29, 10)}x `;
                    };
                    string1 = `${string1}${script7216(int3, int4, int5)}.`;
                    [int7, int32] = script12086(int6, int7, int8, int9, int10, "Target:", 11573 as struct);
                    [int7, int9] = script12086(int6, int7, (int8 + 160), int9, (int10 - 160), string1, 11574 as struct);
                    if ((((struct_getparam(int20, 659) != -1 as npc) && (varplayer_183 > 0)) && (varbitplayer_525 == 0))) {
                        int21 = npc_getparam(struct_getparam(int20, 659), 2848);
                        if ((STRING_LENGTH(string1) > 0)) {
                            int9 = (int9 + 5);
                        };
                        if ((int21 == 21)) {
                            string1 = `${enum_getvalue(0, 36, 6746 as cs2enum, int21)}.`;
                        } else {
                            string1 = `${enum_getvalue(0, 36, 6744 as cs2enum, int21)}.`;
                        };
                        [int7, int32] = script12086(int6, int7, int8, int9, int10, "Weakness:", 11573 as struct);
                        [int7, int9] = script12086(int6, int7, (int8 + 160), int9, (int10 - 160), string1, 11574 as struct);
                        int9 = (int9 + 5);
                    };
                };
                break;
            }
            case 3: {
                [int19, int20] = script6301(int3, 0, -1);
                break;
            }
            case 8: {
                [int7, int9] = script12086(int6, int7, int8, int9, int10, "Recommended:", 11573 as struct);
                int9 = (int9 + 5);
                [int7, int32] = script12086(int6, int7, int8, int9, int10, `<img=7> Combat Level:`, 11573 as struct);
                [int7, int9] = script12086(int6, int7, (int8 + 160), int9, (int10 - 160), `${inttostring(struct_getparam(int3, 1353), 10)} (Your Level: ${inttostring(script1432(), 10)})`, 11574 as struct);
                int9 = (int9 + 5);
                [int7, int32] = script12086(int6, int7, int8, int9, int10, `<img=7> Group Size:`, 11573 as struct);
                [int7, int9] = script12086(int6, int7, (int8 + 160), int9, (int10 - 160), inttostring(struct_getparam(int3, 2237), 10), 11574 as struct);
                int9 = (int9 + 5);
                break;
            }
        };
        string1 = script9028(int3, int4, int5);
        if ((STRING_LENGTH(string1) > 0)) {
            [int7, int9] = script12086(int6, int7, int8, int9, int10, "Description:", 11573 as struct);
            int9 = (int9 + 5);
            [int7, int9] = script12086(int6, int7, int8, int9, int10, string1, 11574 as struct);
        };
        string2 = script9029(int3, int4, int5);
        if ((STRING_LENGTH(string2) > 0)) {
            int9 = (int9 + 5);
            [int7, int9] = script12086(int6, int7, int8, int9, int10, "Instructions:", 11573 as struct);
            int9 = (int9 + 5);
            if ((int28 == 1)) {
                [int7, int9] = script12086(int6, int7, int8, int9, int10, string7, 11574 as struct);
            } else {
                [int7, int9] = script12086(int6, int7, int8, int9, int10, string2, 11574 as struct);
            };
        };
        if (((int12 == 3) && (int20 != -1 as struct))) {
            string4 = script13284(int20);
            string5 = script13285(int20, 0);
            string2 = `'${string4}' - ${string5}`;
            int9 = (int9 + 5);
            [int22, int23, int24] = script13289(struct_getparam(int3, 8072));
            [int7, int9] = script12086(int6, int7, int8, int9, int10, `Next Achievement (${inttostring((int22 + 1), 10)}/${inttostring(int23, 10)}):`, 11573 as struct);
            int9 = (int9 + 5);
            [int7, int9] = script12086(int6, int7, int8, int9, int10, string2, 11574 as struct);
        };
        IF_SETSCROLLPOS(0, 0, comp(1345, 226));
        int18 = ((IF_GETHEIGHT(comp(1345, 228)) + int9) + 5);
        IF_SETSCROLLSIZE(0, int18, comp(1345, 226));
        if ((int18 > IF_GETHEIGHT(comp(1345, 226)))) {
            IF_SETHIDE(false, comp(1345, 227));
            script7791(comp(1345, 227), comp(1345, 226));
        } else {
            IF_SETHIDE(true, comp(1345, 227));
        };
        if (((int3 != -1 as struct) && (struct_getparam(int3, 4253) != -1 as struct))) {
            int3 = struct_getparam(int3, 4253);
        };
        switch (int12) {
            case 1: {
                int14 = quest_getparam(int26, 1345);
                break;
            }
            case 2: {
                break;
            }
            case 6: {
                int13 = 6452 as cs2enum;
                break;
            }
            case 3: {
                if ((int20 != -1 as struct)) {
                    int14 = struct_getparam(int20, 6413);
                    int25 = int20;
                };
                break;
            }
            case 4: {
                if ((int3 == script16319(1))) {
                    int14 = 1;
                } else if ((int3 == script16319(2))) {
                    int14 = 2;
                } else if ((int3 == script16319(3))) {
                    int14 = 3;
                } else if ((int3 == script16319(4))) {
                    int14 = 4;
                } else if ((int3 == script16319(5))) {
                    int14 = 5;
                };
                break;
            }
            case 7: {
                int14 = 1;
                break;
            }
            case 8: {
                break;
            }
            case 0: {
                break;
            }
        };
        if ((((int12 == 2) || (int13 != -1 as cs2enum)) || (int14 != -1))) {
            string6 = script7216(int25, int26, int27);
            if ((int1 == true)) {
                string8 = `Tracked: ${string6}`;
            } else {
                string8 = "Add this content to your activity tracker.";
            };
            if ((script8227(int12) > -1)) {
                if ((int12 == 2)) {
                    if ((script15325(int27) > -1)) {
                        int33 = 0;
                    };
                } else if (((int13 != -1 as cs2enum) && (script8229(int12, enum_getreverseindex(73, 0, int13, int25, 0)) > -1))) {
                    int33 = 0;
                } else if (((int14 > 0) && (script8229(int12, int14) > -1))) {
                    int33 = 0;
                };
                if ((int33 == 0)) {
                    string3 = "Untrack";
                    if ((int1 == true)) {
                        string8 = `Removed: ${string6}`;
                    } else {
                        string8 = "Remove this content from your activity tracker.";
                    };
                };
            } else if ((script8230() == 0)) {
                int15 = true;
                string8 = "Your activity tracker is full.";
            };
            script3536(string8, comp(1345, 241), -1);
            if ((int33 == 1)) {
                stack(30140);
                stack(88146165);
                IF_SETGRAPHIC();
            } else {
                stack(30141);
                stack(88146165);
                IF_SETGRAPHIC();
            };
            int15 = false;
            if ((int12 == 7)) {
                if ((int28 == 1)) {
                    script3536("Additional information is not available for this special challenge.", comp(1345, 243), -1);
                    int17 = true;
                } else if (((script16091() == -1 as struct) || (varplayer_183 == 0))) {
                    script3536("You do not currently have a Slayer task.", comp(1345, 243), -1);
                    int17 = true;
                } else if (((int20 != -1 as struct) && (struct_getparam(int20, 659) != -1 as npc))) {
                    if ((enum_hasoutput(32, 10555 as cs2enum, struct_getparam(int20, 659)) == 1)) {
                        script3536("Jump to this content's parent tab to learn more.", comp(1345, 243), -1);
                        int17 = false;
                    } else {
                        script3536("Additional information is not available for this monster.", comp(1345, 243), -1);
                        int17 = true;
                    };
                } else {
                    script3536("Additional information is not available for this Slayer content.", comp(1345, 243), -1);
                    int17 = true;
                };
            } else {
                script3536("Jump to this content's parent tab to learn more.", comp(1345, 243), -1);
                int17 = false;
            };
        } else {
            switch (int12) {
                case 8: {
                    break;
                }
                default: {
                    script3536("This type of content is not supported by the activity tracker.", comp(1345, 241), -1);
                    int15 = true;
                    script3536("Additional information is not available for this content.", comp(1345, 243), -1);
                    int17 = true;
                    break;
                }
            };
        };
        if ((script7214(int3, int4, int5) != -1 as coordgrid)) {
            if ((int12 == 7)) {
                script3536("Teleport to the nearest lodestone to your Slayer master.", comp(1345, 242), -1);
            } else {
                script3536("Teleport to the nearest lodestone to this content.", comp(1345, 242), -1);
            };
            int16 = false;
        } else {
            script3536("Teleport to the nearest lodestone to this content is not available.", comp(1345, 242), -1);
            int16 = true;
        };
        script13971(comp(1345, 244), comp(-1, 65535), 28554 as struct, string3, int15);
        script13971(comp(1345, 296), comp(-1, 65535), 28554 as struct, "Teleport", int16);
        script13971(comp(1345, 298), comp(-1, 65535), 28554 as struct, "More Info", int17);
    };
    return;
}