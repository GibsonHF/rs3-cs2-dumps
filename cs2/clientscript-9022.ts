//
function script9022(int0: number): void {
    var int1 = script13749();
    var int2 = script7754();
    if (((int0 == 0) || (int0 == 1))) {
        script9021(88146013, 88146014, 88146018, 88146017, int2, 88146007);
    };
    if (((int0 == 0) || (int0 == 2))) {
        script9021(88146172, 88146174, 88146175, 88146209, int2, 88146008);
    };
    if (((int0 == 0) || (int0 == 3))) {
        script9021(88146181, 88146183, 88146184, 88146212, int2, 88146009);
    };
    if (((int0 == 0) || (int0 == 4))) {
        script9021(88146190, 88146192, 88146193, 88146215, int2, 88146010);
    };
    if ((int2 == 1)) {
        IF_SETHIDE(0, 88145997);
        script3536("Shuffle the deck of recommended content and deal another hand of cards.", 88145997, -1);
        IF_SETHIDE(0, 88146017);
        script3536("Shuffle this deck of recommended content.", 88146017, -1);
        IF_SETHIDE(0, 88146209);
        script3536("Shuffle this deck of recommended content.", 88146209, -1);
        IF_SETHIDE(0, 88146212);
        script3536("Shuffle this deck of recommended content.", 88146212, -1);
        IF_SETHIDE(0, 88146215);
        script3536("Shuffle this deck of recommended content.", 88146215, -1);
    } else {
        IF_SETHIDE(1, 88145997);
        IF_SETHIDE(1, 88146017);
        IF_SETHIDE(1, 88146209);
        IF_SETHIDE(1, 88146212);
        IF_SETHIDE(1, 88146215);
    };
    script3536("Next Page", 88145922, -1);
    script13990(88146166, 88146167, 28556);
    script13990(88146169, 88146170, 28556);
    script13990(88146178, 88146179, 28556);
    script13990(88146187, 88146188, 28556);
    script13992(script9024(), 28556, 1);
    script9025(varplayer_9117, varplayer_9749, varplayer_9753, varplayer_9121, varplayer_9125, varplayer_9129, 88146020, 88146016, 88146015);
    script9025(varplayer_9118, varplayer_9750, varplayer_9754, varplayer_9122, varplayer_9126, varplayer_9130, 88146173, 88146208, 88146207);
    script9025(varplayer_9119, varplayer_9751, varplayer_9755, varplayer_9123, varplayer_9127, varplayer_9131, 88146182, 88146211, 88146210);
    script9025(varplayer_9120, varplayer_9752, varplayer_9756, varplayer_9124, varplayer_9128, varplayer_9132, 88146191, 88146214, 88146213);
    script9026(varplayer_9117, varplayer_9749, varplayer_9753, 88146019);
    script9026(varplayer_9118, varplayer_9750, varplayer_9754, 88146176);
    script9026(varplayer_9119, varplayer_9751, varplayer_9755, 88146185);
    script9026(varplayer_9120, varplayer_9752, varplayer_9756, 88146194);
    var int3 = -1 as struct;
    var int4 = -1;
    var int5 = -1;
    [int3, int4, int5] = script8819();
    var int6 = -1;
    var int7 = 0;
    var int8 = 0;
    var int9 = 0;
    var int10 = 0;
    var int11 = 0;
    var string0 = "";
    var string1 = "";
    var string2 = "";
    var int12 = -1;
    var int13 = -1;
    var int14 = -1;
    var string3 = "Track";
    var int15 = 0;
    var int16 = 0;
    var int17 = 0;
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
    if ((((int3 != -1 as struct) || (int4 != -1)) || (int5 != -1))) {
        [int11, string0] = script9030(int3, int4, int5);
        if ((strcmp(string0, "None.") == 0)) {
            string0 = "";
        };
        if ((STRING_LENGTH(string0) > 0)) {
            IF_SETTEXT(string0, 88146000);
            IF_SETSCROLLPOS(0, 0, 88146002);
            int18 = (script7593(IF_GETTEXT(88146000), IF_GETWIDTH(88146000), IF_GETFONTMETRICS(88146000), 0) + 5);
            IF_SETSCROLLSIZE(0, int18, 88146002);
            if ((int18 > IF_GETHEIGHT(88146002))) {
                IF_SETHIDE(0, 88146004);
                script7791(88146004, 88146002);
            } else {
                IF_SETHIDE(1, 88146004);
            };
            script13959(88146151, 28755, 0);
            string8 = "Display list of additional requirements.";
        } else {
            IF_SETTEXT("No additional requirements", 88146000);
            IF_SETHIDE(1, 88145993);
            script13959(88146151, 28755, 1);
            string8 = "This content does not have any additional requirements.";
        };
        script3536(string8, 88146150, -1);
        if ((IF_GETHIDE(88145993) == 1)) {
            IF_SETGRAPHIC(31347, 88146152);
        } else {
            IF_SETGRAPHIC(31348, 88146152);
        };
        switch (int11) {
            case -1: {
                script3536("Requirements not met.", 88146153, -1);
                IF_SETHIDE(0, 88146153);
                IF_SETHIDE(1, 88146154);
                IF_SETHIDE(1, 88146155);
                break;
            }
            case 0: {
                script3536("Requirements met.", 88146154, -1);
                IF_SETHIDE(0, 88146154);
                IF_SETHIDE(1, 88146153);
                IF_SETHIDE(1, 88146155);
                break;
            }
            case -2: {
                script3536("You have completed this content.", 88146155, -1);
                IF_SETHIDE(0, 88146155);
                IF_SETHIDE(1, 88146153);
                IF_SETHIDE(1, 88146154);
                break;
            }
            default: {
                script3536("No requirements.", 88146154, -1);
                IF_SETHIDE(0, 88146154);
                IF_SETHIDE(1, 88146153);
                IF_SETHIDE(1, 88146155);
                break;
            }
        };
        if ((script9027(int3, int4, int5) == 1)) {
            script3536("Requires membership.", 88146156, -1);
            IF_SETHIDE(0, 88146156);
            IF_SETHIDE(1, 88146157);
        } else {
            script3536("Does not require membership.", 88146157, -1);
            IF_SETHIDE(0, 88146157);
            IF_SETHIDE(1, 88146156);
        };
        int6 = 88146158;
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
                    [int7, int32] = script12086(int6, int7, int8, int9, int10, "Target:", 11573);
                    [int7, int9] = script12086(int6, int7, (int8 + 160), int9, (int10 - 160), string1, 11574);
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
                        [int7, int32] = script12086(int6, int7, int8, int9, int10, "Weakness:", 11573);
                        [int7, int9] = script12086(int6, int7, (int8 + 160), int9, (int10 - 160), string1, 11574);
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
                [int7, int9] = script12086(int6, int7, int8, int9, int10, "Recommended:", 11573);
                int9 = (int9 + 5);
                [int7, int32] = script12086(int6, int7, int8, int9, int10, `<img=7> Combat Level:`, 11573);
                [int7, int9] = script12086(int6, int7, (int8 + 160), int9, (int10 - 160), `${inttostring(struct_getparam(int3, 1353), 10)} (Your Level: ${inttostring(script1432(), 10)})`, 11574);
                int9 = (int9 + 5);
                [int7, int32] = script12086(int6, int7, int8, int9, int10, `<img=7> Group Size:`, 11573);
                [int7, int9] = script12086(int6, int7, (int8 + 160), int9, (int10 - 160), inttostring(struct_getparam(int3, 2237), 10), 11574);
                int9 = (int9 + 5);
                break;
            }
        };
        string1 = script9028(int3, int4, int5);
        if ((STRING_LENGTH(string1) > 0)) {
            [int7, int9] = script12086(int6, int7, int8, int9, int10, "Description:", 11573);
            int9 = (int9 + 5);
            [int7, int9] = script12086(int6, int7, int8, int9, int10, string1, 11574);
        };
        string2 = script9029(int3, int4, int5);
        if ((STRING_LENGTH(string2) > 0)) {
            int9 = (int9 + 5);
            [int7, int9] = script12086(int6, int7, int8, int9, int10, "Instructions:", 11573);
            int9 = (int9 + 5);
            if ((int28 == 1)) {
                [int7, int9] = script12086(int6, int7, int8, int9, int10, string7, 11574);
            } else {
                [int7, int9] = script12086(int6, int7, int8, int9, int10, string2, 11574);
            };
        };
        if (((int12 == 3) && (int20 != -1 as struct))) {
            string4 = script13284(int20);
            string5 = script13285(int20, 0);
            string2 = `'${string4}' - ${string5}`;
            int9 = (int9 + 5);
            [int22, int23, int24] = script13289(struct_getparam(int3, 8072));
            [int7, int9] = script12086(int6, int7, int8, int9, int10, `Next Achievement (${inttostring((int22 + 1), 10)}/${inttostring(int23, 10)}):`, 11573);
            int9 = (int9 + 5);
            [int7, int9] = script12086(int6, int7, int8, int9, int10, string2, 11574);
        };
        IF_SETSCROLLPOS(0, 0, 88146146);
        int18 = ((IF_GETHEIGHT(88146148) + int9) + 5);
        IF_SETSCROLLSIZE(0, int18, 88146146);
        if ((int18 > IF_GETHEIGHT(88146146))) {
            IF_SETHIDE(0, 88146147);
            script7791(88146147, 88146146);
        } else {
            IF_SETHIDE(1, 88146147);
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
                int13 = 6452;
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
        if ((((int12 == 2) || (int13 != -1)) || (int14 != -1))) {
            string6 = script7216(int25, int26, int27);
            if ((int1 == 1)) {
                string8 = `Tracked: ${string6}`;
            } else {
                string8 = "Add this content to your activity tracker.";
            };
            if ((script8227(int12) > -1)) {
                if ((int12 == 2)) {
                    if ((script15325(int27) > -1)) {
                        int33 = 0;
                    };
                } else if (((int13 != -1) && (script8229(int12, enum_getreverseindex(73, 0, int13, int25, 0)) > -1))) {
                    int33 = 0;
                } else if (((int14 > 0) && (script8229(int12, int14) > -1))) {
                    int33 = 0;
                };
                if ((int33 == 0)) {
                    string3 = "Untrack";
                    if ((int1 == 1)) {
                        string8 = `Removed: ${string6}`;
                    } else {
                        string8 = "Remove this content from your activity tracker.";
                    };
                };
            } else if ((script8230() == 0)) {
                int15 = 1;
                string8 = "Your activity tracker is full.";
            };
            script3536(string8, 88146161, -1);
            if ((int33 == 1)) {
                IF_SETGRAPHIC(30140, 88146165);
            } else {
                IF_SETGRAPHIC(30141, 88146165);
            };
            int15 = 0;
            if ((int12 == 7)) {
                if ((int28 == 1)) {
                    script3536("Additional information is not available for this special challenge.", 88146163, -1);
                    int17 = 1;
                } else if (((script16091() == -1 as struct) || (varplayer_183 == 0))) {
                    script3536("You do not currently have a Slayer task.", 88146163, -1);
                    int17 = 1;
                } else if (((int20 != -1 as struct) && (struct_getparam(int20, 659) != -1 as npc))) {
                    if ((enum_hasoutput(32, 10555, struct_getparam(int20, 659)) == 1)) {
                        script3536("Jump to this content's parent tab to learn more.", 88146163, -1);
                        int17 = 0;
                    } else {
                        script3536("Additional information is not available for this monster.", 88146163, -1);
                        int17 = 1;
                    };
                } else {
                    script3536("Additional information is not available for this Slayer content.", 88146163, -1);
                    int17 = 1;
                };
            } else {
                script3536("Jump to this content's parent tab to learn more.", 88146163, -1);
                int17 = 0;
            };
        } else {
            switch (int12) {
                case 8: {
                    break;
                }
                default: {
                    script3536("This type of content is not supported by the activity tracker.", 88146161, -1);
                    int15 = 1;
                    script3536("Additional information is not available for this content.", 88146163, -1);
                    int17 = 1;
                    break;
                }
            };
        };
        if ((script7214(int3, int4, int5) != -1)) {
            if ((int12 == 7)) {
                script3536("Teleport to the nearest lodestone to your Slayer master.", 88146162, -1);
            } else {
                script3536("Teleport to the nearest lodestone to this content.", 88146162, -1);
            };
            int16 = 0;
        } else {
            script3536("Teleport to the nearest lodestone to this content is not available.", 88146162, -1);
            int16 = 1;
        };
        script13971(88146164, -1, 28554, string3, int15);
        script13971(88146216, -1, 28554, "Teleport", int16);
        script13971(88146218, -1, 28554, "More Info", int17);
    };
    return;
}