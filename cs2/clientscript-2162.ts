//
function script2162(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number, int6: number, int7: number): void {
    if ((((((((int1 == -1) || (int2 == -1)) || (int3 == -1)) || (int4 == -1)) || (int5 == -1)) || (int6 == -1)) || (int7 == -1))) {
        return;
    };
    define_array((varclient_273 + 1));
    define_array[65536]((varclient_273 + 1));
    define_array[131072]((varclient_273 + 1));
    var int8 = enum_getvalue(0, 73, 169 as cs2enum, int1);
    if ((int8 == -1 as struct)) {
        return;
    };
    var int9 = struct_getparam(int8, 61);
    var int10 = script12681(int0);
    var int11 = script12682(int0);
    varclient_698 = script1432();
    var int12 = 0;
    var int13 = 0;
    var int14 = 1;
    var int15 = 0;
    var int16 = 1;
    var int17 = enum_getvalue(0, 26, struct_getparam(int8, 673), int2);
    var int18 = enum_getvalue(0, 26, struct_getparam(int8, 676), int2);
    var int19 = enum_getvalue(0, 26, struct_getparam(int8, 675), int2);
    if ((int19 == -1 as cs2enum)) {
        int19 = 223;
    };
    if ((int17 == -1 as cs2enum)) {
        return;
    };
    var int20 = ENUM_GETOUTPUTCOUNT(int17);
    var int21 = 0;
    if ((int3 == 1)) {
        int21 = (int20 - 1);
    };
    var int22 = IF_GETSCROLLY(int10);
    var int23 = IF_GETSCROLLHEIGHT(int10);
    var int24 = 0;
    var int25 = 0;
    var string0 = "";
    var int26 = 0;
    script2164(int0, int1);
    var int27 = -1;
    var int28 = 0;
    var int29 = -1;
    var int30 = 0;
    switch (int2) {
        case 6: {
            int30 = 1000;
            break;
        }
        case 2:
        case 9: {
            int30 = 100000;
            break;
        }
        case 7: {
            int30 = 1000000;
            break;
        }
        case 8: {
            int30 = 10000000;
            break;
        }
    };
    while ((int12 <= varclient_273)) {
        pop_array[1](int12, int12);
        int27 = enum_getvalue(0, 3, int9, int12);
        int25 = -1;
        if ((int27 != -1 as quest)) {
            if ((script18798(int27) == 1)) {
                int26 = (int26 + 1);
            } else {
                int29 = script2193(int27);
                int28 = script2105(int27);
                switch (int2) {
                    case 0: {
                        switch (unk11171(int27)) {
                            case 1: {
                                int25 = 0;
                                break;
                            }
                            default: {
                                int25 = script1056(quest_getparam(int27, 7219));
                                break;
                            }
                        };
                        break;
                    }
                    case 1: {
                        switch (unk11171(int27)) {
                            case 1: {
                                int25 = 0;
                                break;
                            }
                            default: {
                                int25 = quest_getparam(int27, 857);
                                break;
                            }
                        };
                        break;
                    }
                    case 2: {
                        switch (unk11171(int27)) {
                            case 1: {
                                int25 = 0;
                                break;
                            }
                            default: {
                                int25 = quest_getparam(int27, 7831);
                                break;
                            }
                        };
                        pop_array[2](int12, ((int25 + 1) * int30));
                        pop_array[2]((unk11170[2](int12) + script6268(int27, 1)));
                        break;
                    }
                    case 3: {
                        switch (unk11171(int27)) {
                            case 1: {
                                int25 = 4;
                                break;
                            }
                            default: {
                                if ((QUEST_GETMEMBERS(int27) == true)) {
                                    if (((quest_getparam(int27, 7889) == 1) || (quest_getparam(int27, 7889) == 2))) {
                                        int25 = 2;
                                    } else {
                                        int25 = 3;
                                    };
                                } else if (((quest_getparam(int27, 7889) == 1) || (quest_getparam(int27, 7889) == 2))) {
                                    int25 = 1;
                                } else {
                                    int25 = 0;
                                };
                                break;
                            }
                        };
                        break;
                    }
                    case 4: {
                        switch (unk11171(int27)) {
                            case 1: {
                                int25 = 0;
                                break;
                            }
                            default: {
                                int25 = quest_getparam(int27, 7855);
                                break;
                            }
                        };
                        break;
                    }
                    case 5: {
                        switch (unk11171(int27)) {
                            case 1: {
                                int25 = 3;
                                break;
                            }
                            default: {
                                int25 = int29;
                                break;
                            }
                        };
                        break;
                    }
                    case 6: {
                        switch (unk11171(int27)) {
                            case 1: {
                                int25 = 0;
                                break;
                            }
                            default: {
                                int25 = (quest_getparam(int27, 7834) - 1999);
                                break;
                            }
                        };
                        pop_array[2](int12, ((int25 + 1) * int30));
                        pop_array[2]((unk11170[2](int12) + script6268(int27, 0)));
                        break;
                    }
                    case 7: {
                        int25 = quest_getparam(int27, 7836);
                        pop_array[2](int12, ((int25 + 1) * int30));
                        if ((int25 == 42)) {
                            pop_array[2]((unk11170[2](int12) + ((script20419(int27, int28) + 1) * 100000)));
                            if ((quest_getparam(int27, 7160) != -1)) {
                                pop_array[2]((unk11170[2](int12) + (quest_getparam(int27, 7160) + 1)));
                            } else {
                                pop_array[2]((unk11170[2](int12) + script6268(int27, 1)));
                            };
                        } else if ((quest_getparam(int27, 7837) > 0)) {
                            pop_array[2]((unk11170[2](int12) + (quest_getparam(int27, 7837) + 1)));
                        } else {
                            pop_array[2]((unk11170[2](int12) + (quest_getparam(int27, 1345) + 1)));
                        };
                        break;
                    }
                    case 8: {
                        int25 = quest_getparam(int27, 9393);
                        pop_array[2](int12, ((int25 + 1) * int30));
                        pop_array[2]((unk11170[2](int12) + ((MAX((quest_getparam(int27, 7831) - 1), 0) + 1) * 1000000)));
                        pop_array[2]((unk11170[2](int12) + ((int28 + 1) * 100000)));
                        pop_array[2]((unk11170[2](int12) + ((quest_getparam(int27, 7837) + 1) * 10000)));
                        pop_array[2]((unk11170[2](int12) + ((quest_getparam(int27, 7855) + 1) * 1000)));
                        pop_array[2]((unk11170[2](int12) + int12));
                        break;
                    }
                    case 9: {
                        int25 = script20419(int27, int28);
                        pop_array[2](int12, ((int25 + 1) * int30));
                        if ((quest_getparam(int27, 9404) != -1)) {
                            pop_array[2]((unk11170[2](int12) + ((quest_getparam(int27, 9404) - 1999) * 1000)));
                        } else {
                            pop_array[2]((unk11170[2](int12) + ((quest_getparam(int27, 7834) - 1999) * 1000)));
                        };
                        if ((quest_getparam(int27, 7160) != -1)) {
                            pop_array[2]((unk11170[2](int12) + (quest_getparam(int27, 7160) + 1)));
                        } else {
                            pop_array[2]((unk11170[2](int12) + script6268(int27, 0)));
                        };
                        break;
                    }
                };
                if ((((int25 > -1) && (int5 == 1)) && (int29 == 2))) {
                    int25 = -1;
                    pop_array[2](int12, 0);
                };
                if ((((int25 > -1) && (int6 == 1)) && (quest_getparam(int27, 7889) == 0))) {
                    int25 = -1;
                    pop_array[2](int12, 0);
                };
                if ((((int25 > -1) && (int7 == 1)) && (quest_getparam(int27, 7889) != 0))) {
                    int25 = -1;
                    pop_array[2](int12, 0);
                };
                if ((((int25 > -1) && (int4 == 0)) && (int29 == 0))) {
                    int14 = script2149(int27);
                    if ((int14 == 0)) {
                        int25 = -1;
                        pop_array[2](int12, 0);
                    };
                };
            };
        };
        pop_array(int12, int25);
        int12 = (int12 + 1);
    };
    int12 = 0;
    if ((int30 > 0)) {
        ARRAY_SORT((varclient_273 + 1), 2, 1);
        int12 = 1;
        while ((int12 <= varclient_273)) {
            pop_array(int12, ((push_array[2](int12) / int30) - 1));
            int12 = (int12 + 1);
        };
    } else {
        ARRAY_SORT((varclient_273 + 1), 0, 1);
    };
    int12 = 0;
    var int31 = 0;
    var int32 = 0;
    var int33 = 0;
    var int34 = -1;
    int33 = push_array(int12);
    pop_array(int12, push_array[1](int12));
    pop_array[1](int12, int33);
    int24 = int33;
    int12 = 1;
    while ((int12 <= varclient_273)) {
        int33 = push_array(int12);
        pop_array(int12, push_array[1](int12));
        pop_array[1](int12, int33);
        if ((int24 != int33)) {
            int34 = 1;
        } else if ((int12 == varclient_273)) {
            int34 = 0;
        };
        if ((int34 != -1)) {
            if ((int30 == 0)) {
                int32 = (int12 - int34);
                if (((int31 < int32) && (int24 != -1))) {
                    script2163(0, int9, int31, int32);
                };
                int31 = int12;
            };
            int24 = int33;
            int34 = -1;
        };
        int12 = (int12 + 1);
    };
    int12 = 0;
    int24 = 0;
    switch (int1) {
        case 1: {
            while ((int12 <= varclient_273)) {
                if ((enum_getvalue(0, 3, 2252 as cs2enum, push_array(int12)) == -1 as quest)) {
                    pop_array[2](int12, 0);
                } else {
                    pop_array[2](int12, script7073(push_array(int12)));
                };
                int12 = (int12 + 1);
            };
            break;
        }
    };
    int12 = 0;
    var int35 = 5;
    var int36 = 0;
    var int37 = -1;
    switch (int1) {
        case 1: {
            int37 = varbitplayer_3260;
            break;
        }
        default: {
            if ((struct_getparam(int8, 693) > 0)) {
                int37 = (varbitplayer_320 - (1000 * (struct_getparam(int8, 693) - 1)));
            } else {
                int37 = (varbitplayer_320 - (1000 * (int1 - 1)));
            };
            break;
        }
    };
    var int38 = script6431();
    while ((int3 == 0)) {
        if ((int21 < int20)) {
            int24 = enum_getvalue(0, 0, int19, int21);
            if ((CC_FIND(int10, ((varclient_273 + int21) + 1)) == 1)) {
                CC_SETPOSITION(5, int35, 0, 0);
                string0 = enum_getvalue(0, 36, int17, int24);
                CC_SETTEXT(string0);
                CC_SETHIDE(false);
                int35 = (int35 + CC_GETHEIGHT());
            };
            int15 = 0;
            while ((int12 <= varclient_273)) {
                if ((push_array[1](int12) == int24)) {
                    int27 = enum_getvalue(0, 3, int9, push_array(int12));
                    if (((int27 != -1 as quest) && (CC_FIND(int10, push_array(int12)) == 1))) {
                        if ((int38 == 1)) {
                            CC_SETPOSITION(10, int35, 0, 0);
                        } else {
                            CC_SETPOSITION(15, int35, 0, 0);
                        };
                        CC_SETHIDE(false);
                        if ((push_array[2](int12) == 0)) {
                            CC_SETOP(1, "View Quest Overview");
                            CC_SETOP(2, "View Quest Journal");
                            CC_SETOP(3, "Toggle Map Hint");
                        } else if ((push_array[2](int12) == 1)) {
                            CC_SETOP(1, "View Quest Journal");
                            CC_SETOP(2, "View Quest Overview");
                            CC_SETOP(3, "Toggle Map Hints");
                        } else {
                            CC_SETOP(1, "View Quest Journal");
                            CC_SETOP(2, "View Quest Overview");
                            CC_SETOP(3, "");
                        };
                        CC_SETONMOUSEOVER(callback(script1356, -2147483645, -2147483643, 16777215));
                        if ((push_array(int12) == int37)) {
                            CC_SETCOLOUR(65535);
                            CC_SETONMOUSELEAVE(callback(script1949, -2147483645, -2147483643, 65535));
                        } else if ((push_array[2](int12) == 0)) {
                            CC_SETCOLOUR(16711680);
                            CC_SETONMOUSELEAVE(callback(script1949, -2147483645, -2147483643, 16711680));
                        } else if ((push_array[2](int12) == 1)) {
                            CC_SETCOLOUR(16776960);
                            CC_SETONMOUSELEAVE(callback(script1949, -2147483645, -2147483643, 16776960));
                        } else {
                            CC_SETCOLOUR(65280);
                            CC_SETONMOUSELEAVE(callback(script1949, -2147483645, -2147483643, 65280));
                        };
                        int35 = (int35 + CC_GETHEIGHT());
                        int15 = (int15 + 1);
                        if ((((enum_getvalue(0, 0, int18, int24) == 1) && (strcmp(quest_getparam(int27, 7244), "") != 0)) && (CC_FIND(int10, ((varclient_273 + int21) + 1)) == 1))) {
                            CC_SETTEXT(quest_getparam(int27, 7244));
                        };
                        int36 = (int36 + 1);
                    };
                } else if ((push_array[1](int12) > int24)) {
                    int12 = varclient_273;
                };
                int12 = (int12 + 1);
            };
            if ((int15 != 0)) {
                int35 = (int35 + 10);
            } else {
                if ((CC_FIND(int10, ((varclient_273 + int21) + 1)) == 1)) {
                    CC_SETTEXT("");
                    CC_SETHIDE(true);
                };
                int35 = (int35 - 20);
            };
            int12 = 0;
            if ((int3 == 0)) {
                int21 = (int21 + 1);
            } else {
                int21 = (int21 - 1);
            };
        } else if (((int3 == 1) && (int21 >= 0))) {
            int24 = enum_getvalue(0, 0, int19, int21);
            if ((CC_FIND(int10, ((varclient_273 + int21) + 1)) == 1)) {
                CC_SETPOSITION(5, int35, 0, 0);
                string0 = enum_getvalue(0, 36, int17, int24);
                CC_SETTEXT(string0);
                CC_SETHIDE(false);
                int35 = (int35 + CC_GETHEIGHT());
            };
            int15 = 0;
            while ((int12 <= varclient_273)) {
                if ((push_array[1](int12) == int24)) {
                    int27 = enum_getvalue(0, 3, int9, push_array(int12));
                    if (((int27 != -1 as quest) && (CC_FIND(int10, push_array(int12)) == 1))) {
                        if ((int38 == 1)) {
                            CC_SETPOSITION(10, int35, 0, 0);
                        } else {
                            CC_SETPOSITION(15, int35, 0, 0);
                        };
                        CC_SETHIDE(false);
                        if ((push_array[2](int12) == 0)) {
                            CC_SETOP(1, "View Quest Overview");
                            CC_SETOP(2, "View Quest Journal");
                            CC_SETOP(3, "Toggle Map Hint");
                        } else if ((push_array[2](int12) == 1)) {
                            CC_SETOP(1, "View Quest Journal");
                            CC_SETOP(2, "View Quest Overview");
                            CC_SETOP(3, "Toggle Map Hints");
                        } else {
                            CC_SETOP(1, "View Quest Journal");
                            CC_SETOP(2, "View Quest Overview");
                            CC_SETOP(3, "");
                        };
                        CC_SETONMOUSEOVER(callback(script1356, -2147483645, -2147483643, 16777215));
                        if ((push_array(int12) == int37)) {
                            CC_SETCOLOUR(65535);
                            CC_SETONMOUSELEAVE(callback(script1949, -2147483645, -2147483643, 65535));
                        } else if ((push_array[2](int12) == 0)) {
                            CC_SETCOLOUR(16711680);
                            CC_SETONMOUSELEAVE(callback(script1949, -2147483645, -2147483643, 16711680));
                        } else if ((push_array[2](int12) == 1)) {
                            CC_SETCOLOUR(16776960);
                            CC_SETONMOUSELEAVE(callback(script1949, -2147483645, -2147483643, 16776960));
                        } else {
                            CC_SETCOLOUR(65280);
                            CC_SETONMOUSELEAVE(callback(script1949, -2147483645, -2147483643, 65280));
                        };
                        int35 = (int35 + CC_GETHEIGHT());
                        int15 = (int15 + 1);
                        if ((((enum_getvalue(0, 0, int18, int24) == 1) && (strcmp(quest_getparam(int27, 7244), "") != 0)) && (CC_FIND(int10, ((varclient_273 + int21) + 1)) == 1))) {
                            CC_SETTEXT(quest_getparam(int27, 7244));
                        };
                        int36 = (int36 + 1);
                    };
                } else if ((push_array[1](int12) > int24)) {
                    int12 = varclient_273;
                };
                int12 = (int12 + 1);
            };
            if ((int15 != 0)) {
                int35 = (int35 + 10);
            } else {
                if ((CC_FIND(int10, ((varclient_273 + int21) + 1)) == 1)) {
                    CC_SETTEXT("");
                    CC_SETHIDE(true);
                };
                int35 = (int35 - 20);
            };
            int12 = 0;
            if ((int3 == 0)) {
                int21 = (int21 + 1);
            } else {
                int21 = (int21 - 1);
            };
        };
        var string1 = "";
        if ((int1 == 1)) {
            if ((int36 == (varclient_272 - int26))) {
                string1 = `Showing all ${inttostring((varclient_272 - int26), 10)} items`;
            } else {
                string1 = `Showing ${inttostring(int36, 10)} of ${inttostring((varclient_272 - int26), 10)} items`;
            };
            if ((int3 == 1)) {
                string1 = strconcat(string1, " (reversed)");
            };
            IF_SETTEXT(string1, script12683(int0));
        };
        if (((varclient_695 == 1) || (int23 != (int35 + 5)))) {
            if (((int35 + 5) >= IF_GETHEIGHT(int10))) {
                IF_SETSCROLLSIZE(IF_GETWIDTH(int10), (int35 + 5), int10);
            } else {
                IF_SETSCROLLSIZE(IF_GETWIDTH(int10), 0, int10);
            };
            int23 = int35;
            IF_SETSCROLLPOS(0, 0, int10);
            script31(int11, int10, 5666, 5663, 5664, 5665, 5686, 5685);
        } else if ((int3 == 1)) {
            if ((varclient_694 == 0)) {
                if (((int35 + 5) >= IF_GETHEIGHT(int10))) {
                    IF_SETSCROLLSIZE(IF_GETWIDTH(int10), (int35 + 5), int10);
                } else {
                    IF_SETSCROLLSIZE(IF_GETWIDTH(int10), 0, int10);
                };
                int23 = int35;
                IF_SETSCROLLPOS(0, 0, int10);
                script31(int11, int10, 5666, 5663, 5664, 5665, 5686, 5685);
            } else if ((int3 == 0)) {
                if ((varclient_694 == 1)) {
                    if (((int35 + 5) >= IF_GETHEIGHT(int10))) {
                        IF_SETSCROLLSIZE(IF_GETWIDTH(int10), (int35 + 5), int10);
                    } else {
                        IF_SETSCROLLSIZE(IF_GETWIDTH(int10), 0, int10);
                    };
                    int23 = int35;
                    IF_SETSCROLLPOS(0, 0, int10);
                    script31(int11, int10, 5666, 5663, 5664, 5665, 5686, 5685);
                } else {
                    IF_SETSCROLLPOS(0, int22, int10);
                    script31(int11, int10, 5666, 5663, 5664, 5665, 5686, 5685);
                };
            } else {
                IF_SETSCROLLPOS(0, int22, int10);
                script31(int11, int10, 5666, 5663, 5664, 5665, 5686, 5685);
            };
        } else if ((int3 == 0)) {
            if ((varclient_694 == 1)) {
                if (((int35 + 5) >= IF_GETHEIGHT(int10))) {
                    IF_SETSCROLLSIZE(IF_GETWIDTH(int10), (int35 + 5), int10);
                } else {
                    IF_SETSCROLLSIZE(IF_GETWIDTH(int10), 0, int10);
                };
                int23 = int35;
                IF_SETSCROLLPOS(0, 0, int10);
                script31(int11, int10, 5666, 5663, 5664, 5665, 5686, 5685);
            } else {
                IF_SETSCROLLPOS(0, int22, int10);
                script31(int11, int10, 5666, 5663, 5664, 5665, 5686, 5685);
            };
        } else {
            IF_SETSCROLLPOS(0, int22, int10);
            script31(int11, int10, 5666, 5663, 5664, 5665, 5686, 5685);
        };
        if ((int1 == 1)) {
            varclient_692 = int4;
            varclient_1103 = int5;
            varclient_694 = int3;
            varclient_6563 = int6;
            varclient_6562 = int7;
        };
        varclient_695 = 0;
        return;
    };
    string1 = "";
    if ((int1 == 1)) {
        if ((int36 == (varclient_272 - int26))) {
            string1 = `Showing all ${inttostring((varclient_272 - int26), 10)} items`;
        } else {
            string1 = `Showing ${inttostring(int36, 10)} of ${inttostring((varclient_272 - int26), 10)} items`;
        };
        if ((int3 == 1)) {
            string1 = strconcat(string1, " (reversed)");
        };
        IF_SETTEXT(string1, script12683(int0));
    };
    if (((varclient_695 == 1) || (int23 != (int35 + 5)))) {
        if (((int35 + 5) >= IF_GETHEIGHT(int10))) {
            IF_SETSCROLLSIZE(IF_GETWIDTH(int10), (int35 + 5), int10);
        } else {
            IF_SETSCROLLSIZE(IF_GETWIDTH(int10), 0, int10);
        };
        int23 = int35;
        IF_SETSCROLLPOS(0, 0, int10);
        script31(int11, int10, 5666, 5663, 5664, 5665, 5686, 5685);
    } else if ((int3 == 1)) {
        if ((varclient_694 == 0)) {
            if (((int35 + 5) >= IF_GETHEIGHT(int10))) {
                IF_SETSCROLLSIZE(IF_GETWIDTH(int10), (int35 + 5), int10);
            } else {
                IF_SETSCROLLSIZE(IF_GETWIDTH(int10), 0, int10);
            };
            int23 = int35;
            IF_SETSCROLLPOS(0, 0, int10);
            script31(int11, int10, 5666, 5663, 5664, 5665, 5686, 5685);
        } else if ((int3 == 0)) {
            if ((varclient_694 == 1)) {
                if (((int35 + 5) >= IF_GETHEIGHT(int10))) {
                    IF_SETSCROLLSIZE(IF_GETWIDTH(int10), (int35 + 5), int10);
                } else {
                    IF_SETSCROLLSIZE(IF_GETWIDTH(int10), 0, int10);
                };
                int23 = int35;
                IF_SETSCROLLPOS(0, 0, int10);
                script31(int11, int10, 5666, 5663, 5664, 5665, 5686, 5685);
            } else {
                IF_SETSCROLLPOS(0, int22, int10);
                script31(int11, int10, 5666, 5663, 5664, 5665, 5686, 5685);
            };
        } else {
            IF_SETSCROLLPOS(0, int22, int10);
            script31(int11, int10, 5666, 5663, 5664, 5665, 5686, 5685);
        };
    } else if ((int3 == 0)) {
        if ((varclient_694 == 1)) {
            if (((int35 + 5) >= IF_GETHEIGHT(int10))) {
                IF_SETSCROLLSIZE(IF_GETWIDTH(int10), (int35 + 5), int10);
            } else {
                IF_SETSCROLLSIZE(IF_GETWIDTH(int10), 0, int10);
            };
            int23 = int35;
            IF_SETSCROLLPOS(0, 0, int10);
            script31(int11, int10, 5666, 5663, 5664, 5665, 5686, 5685);
        } else {
            IF_SETSCROLLPOS(0, int22, int10);
            script31(int11, int10, 5666, 5663, 5664, 5665, 5686, 5685);
        };
    } else {
        IF_SETSCROLLPOS(0, int22, int10);
        script31(int11, int10, 5666, 5663, 5664, 5665, 5686, 5685);
    };
    if ((int1 == 1)) {
        varclient_692 = int4;
        varclient_1103 = int5;
        varclient_694 = int3;
        varclient_6563 = int6;
        varclient_6562 = int7;
    };
    varclient_695 = 0;
    return;
}