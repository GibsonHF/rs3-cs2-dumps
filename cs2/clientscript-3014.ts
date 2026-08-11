//
function script3014(int0: number): void {
    var int1 = ENUM_GETOUTPUTCOUNT(7783 as cs2enum);
    var int2 = ENUM_GETOUTPUTCOUNT(8300 as cs2enum);
    define_array[73](MAX(int1, int2));
    var int3 = -1 as struct;
    var int4 = -1;
    var int5 = 0;
    var int6 = 0;
    script10592(-1, 0);
    script10593(0);
    IF_SETONOP(callback(), comp(907, 37));  // lobbyscreen_pane_playerinfo:message_of_the_week
    IF_SETONOP(callback(), comp(907, 38));  // lobbyscreen_pane_playerinfo:special_gfx
    IF_SETOP(callback(script1), comp(907, 38));  // lobbyscreen_pane_playerinfo:special_gfx
    IF_SETONTIMER(callback(), comp(906, 11));  // lobbyscreen:bonus_xp_counter
    CC_DELETEALL(comp(907, 39));  // lobbyscreen_pane_playerinfo:message_of_the_week_dynamic
    IF_SETTEXT("", comp(907, 40));  // lobbyscreen_pane_playerinfo:message_text1
    var int7 = 0;
    var int8 = 0;
    var int9 = 0;
    [int7, int8, int9] = USERDETAIL_LOBBY_MEMBERSHIP();
    var int10 = (DATE_RUNEDAY() - varplayer_1749);
    var string0 = "";
    if ((((varplayer_3185 != 4) && (int10 <= 5)) && (varbitplayer_16464 == 2))) {
        int10 = (5 - int10);
        if ((int10 > 1)) {
            IF_SETTEXT(`You have ${inttostring(int10, 10)} days until you need to validate your email address.`, comp(907, 40));  // lobbyscreen_pane_playerinfo:message_text1
        } else {
            IF_SETTEXT("You have one day until you need to validate your email address.", comp(907, 40));  // lobbyscreen_pane_playerinfo:message_text1
        };
        IF_SETTEXTFONT(58 as fontmetrics, comp(907, 40));  // lobbyscreen_pane_playerinfo:message_text1
        IF_SETCOLOUR(0, comp(907, 40));  // lobbyscreen_pane_playerinfo:message_text1
        IF_SETTEXTALIGN(1, 1, 22, comp(907, 40));  // lobbyscreen_pane_playerinfo:message_text1
        IF_SETPOSITION(0, 0, 1, 1, comp(907, 40));  // lobbyscreen_pane_playerinfo:message_text1
        IF_SETSIZE(200, 10, 1, 1, comp(907, 40));  // lobbyscreen_pane_playerinfo:message_text1
        IF_SETGRAPHIC(23884 as graphic, comp(907, 38));  // lobbyscreen_pane_playerinfo:special_gfx
        return;
    };
    IF_SETSIZE(345, 35, 0, 0, comp(907, 40));  // lobbyscreen_pane_playerinfo:message_text1
    IF_SETPOSITION(231, 5, 0, 0, comp(907, 40));  // lobbyscreen_pane_playerinfo:message_text1
    IF_SETCOLOUR(923907, comp(907, 40));  // lobbyscreen_pane_playerinfo:message_text1
    IF_SETTEXTFONT(13 as fontmetrics, comp(907, 40));  // lobbyscreen_pane_playerinfo:message_text1
    IF_SETTEXTALIGN(1, 2, 0, comp(907, 40));  // lobbyscreen_pane_playerinfo:message_text1
    IF_SETTEXT("", comp(907, 41));  // lobbyscreen_pane_playerinfo:message_text2
    IF_SETPOSITION(231, 46, 0, 0, comp(907, 41));  // lobbyscreen_pane_playerinfo:message_text2
    IF_SETSIZE(345, 70, 0, 0, comp(907, 41));  // lobbyscreen_pane_playerinfo:message_text2
    IF_SETCOLOUR(923907, comp(907, 41));  // lobbyscreen_pane_playerinfo:message_text2
    var int11 = 0;
    var string1 = "";
    var string2 = "";
    var string3 = "";
    var string4 = "Featured Content";
    IF_SETTEXT(string4, comp(907, 18));  // lobbyscreen_pane_playerinfo:main_banner_title_text
    if ((int0 == 1)) {
        if ((script18461(13086) == 1)) {
            script18464(13086);
        } else if ((varplayer_6601 == 8829)) {
            if ((((DATE_MINUTES() >= (DATE_MINUTES_FROMRUNEDAY(8829) + 720)) || (varplayer_6601 > 8829)) || (varplayer_6601 < 7922))) {
                if ((varplayer_6601 > 0)) {
                    while ((int5 < int1)) {
                        int3 = enum_getvalue(0, 73, 7783 as cs2enum, int5);
                        if ((script17266(int3) == 1)) {
                            switch (int3) {
                                case 35237: {
                                    int4 = int3;
                                    break;
                                }
                            };
                            pop_array(int6, int3);
                            int6 = (int6 + 1);
                        };
                        int5 = (int5 + 1);
                    };
                };
                if ((int4 != -1)) {
                    int3 = int4;
                } else if ((int6 == 0)) {
                    int3 = enum_getvalue(0, 73, 7783 as cs2enum, -1);
                    if ((int3 == 34505 as struct)) {
                        int3 = enum_getvalue(0, 73, 8300, MODULO(varplayer_6601, int2));
                        string4 = "Featured Content";
                    };
                } else {
                    int3 = push_array(RANDOM(int6));
                };
                switch (MAP_LANG()) {
                    case 1: {
                        string2 = struct_getparam(int3, 6962);
                        string3 = struct_getparam(int3, 5558);
                        string1 = struct_getparam(int3, 7961);
                        break;
                    }
                    case 2: {
                        string2 = struct_getparam(int3, 6963);
                        string3 = struct_getparam(int3, 7892);
                        string1 = struct_getparam(int3, 7962);
                        break;
                    }
                    case 3: {
                        string2 = struct_getparam(int3, 6964);
                        string3 = struct_getparam(int3, 7893);
                        string1 = struct_getparam(int3, 7963);
                        break;
                    }
                };
                if ((STRING_LENGTH(string2) == 0)) {
                    string2 = struct_getparam(int3, 6394);
                };
                if ((STRING_LENGTH(string3) == 0)) {
                    string3 = struct_getparam(int3, 65);
                };
                if ((STRING_LENGTH(string1) == 0)) {
                    string1 = struct_getparam(int3, 6393);
                };
                if ((STRING_LENGTH(struct_getparam(int3, 6391)) > 0)) {
                    string4 = struct_getparam(int3, 6391);
                };
                if ((STRING_LENGTH(string4) > 0)) {
                    IF_SETTEXT(string4, comp(907, 18));  // lobbyscreen_pane_playerinfo:main_banner_title_text
                };
                switch (MAP_LANG()) {
                    case 0: {
                        int5 = 1;
                        if ((struct_getparam(int3, 9361) != -1)) {
                            int5 = (int5 + 1);
                            if ((struct_getparam(int3, 9362) != -1)) {
                                int5 = (int5 + 1);
                                if ((struct_getparam(int3, 9363) != -1)) {
                                    int5 = (int5 + 1);
                                };
                            };
                        };
                        switch (RANDOM(int5)) {
                            case 0: {
                                IF_SETGRAPHIC(script19254(int3, 0), comp(907, 38));  // lobbyscreen_pane_playerinfo:special_gfx
                                break;
                            }
                            case 1: {
                                IF_SETGRAPHIC(struct_getparam(int3, 9361), comp(907, 38));  // lobbyscreen_pane_playerinfo:special_gfx
                                break;
                            }
                            case 2: {
                                IF_SETGRAPHIC(struct_getparam(int3, 9362), comp(907, 38));  // lobbyscreen_pane_playerinfo:special_gfx
                                break;
                            }
                            case 3: {
                                IF_SETGRAPHIC(struct_getparam(int3, 9363), comp(907, 38));  // lobbyscreen_pane_playerinfo:special_gfx
                                break;
                            }
                        };
                        break;
                    }
                    default: {
                        IF_SETGRAPHIC(script19254(int3, MAP_LANG()), comp(907, 38));  // lobbyscreen_pane_playerinfo:special_gfx
                        break;
                    }
                };
                IF_SETTEXT(string4, comp(907, 18));  // lobbyscreen_pane_playerinfo:main_banner_title_text
                script10593(1);
                switch (struct_getparam(int3, 6392)) {
                    case 1: {
                        script10592(59441176, 1);
                        IF_SETONOP(callback(script13252), comp(907, 24));  // lobbyscreen_pane_playerinfo:motw_open_trh
                        break;
                    }
                    case 2:
                    case 18: {
                        IF_SETOP(1, "Select", comp(907, 38));  // lobbyscreen_pane_playerinfo:special_gfx
                        IF_SETONOP(callback(script13252), comp(907, 38));  // lobbyscreen_pane_playerinfo:special_gfx
                        break;
                    }
                    case 3: {
                        IF_SETOP(1, "Select", comp(907, 38));  // lobbyscreen_pane_playerinfo:special_gfx
                        if ((struct_getparam(int3, 6395) == 1)) {
                            IF_SETONOP(callback(script3434, string1, string2), comp(907, 38));  // lobbyscreen_pane_playerinfo:special_gfx
                        } else {
                            IF_SETONOP(callback(script7397, string1, string2), comp(907, 38));  // lobbyscreen_pane_playerinfo:special_gfx
                        };
                        break;
                    }
                    case 9: {
                        IF_SETOP(1, "Select", comp(907, 38));  // lobbyscreen_pane_playerinfo:special_gfx
                        IF_SETONOP(callback(script2828, string3), comp(907, 38));  // lobbyscreen_pane_playerinfo:special_gfx
                        break;
                    }
                    case 4: {
                        IF_SETOP(1, "Select", comp(907, 38));  // lobbyscreen_pane_playerinfo:special_gfx
                        IF_SETONOP(callback(script13252), comp(907, 38));  // lobbyscreen_pane_playerinfo:special_gfx
                        break;
                    }
                    case 5: {
                        script10592(59441177, 1);
                        IF_SETONOP(callback(script13252), comp(907, 25));  // lobbyscreen_pane_playerinfo:motw_open_tle
                        break;
                    }
                    case 7: {
                        IF_SETOP(1, "Select", comp(907, 38));  // lobbyscreen_pane_playerinfo:special_gfx
                        break;
                    }
                    case 8: {
                        script10592(59441178, 1);
                        break;
                    }
                    case 10: {
                        script10592(59441181, 1);
                        IF_SETONOP(callback(script13252), comp(907, 29));  // lobbyscreen_pane_playerinfo:motw_open_managebonds
                        break;
                    }
                    case 12: {
                        script10592(59441182, 1);
                        IF_SETONOP(callback(script13252), comp(907, 30));  // lobbyscreen_pane_playerinfo:motw_open_bp3
                        break;
                    }
                    case 13: {
                        if ((PLATFORMTYPE() != 0)) {
                            if ((PLATFORMTYPE() != 5)) {
                                script10592(59441183, 1);
                                IF_SETONOP(callback(script13252), comp(907, 31));  // lobbyscreen_pane_playerinfo:motw_open_mtxspotlight
                            } else {
                                IF_SETOP(1, "Select", comp(907, 38));  // lobbyscreen_pane_playerinfo:special_gfx
                                IF_SETONOP(callback(script15228, 19), comp(907, 38));  // lobbyscreen_pane_playerinfo:special_gfx
                            };
                        } else {
                            IF_SETOP(1, "Select", comp(907, 38));  // lobbyscreen_pane_playerinfo:special_gfx
                            IF_SETONOP(callback(script15228, 19), comp(907, 38));  // lobbyscreen_pane_playerinfo:special_gfx
                        };
                        break;
                    }
                    case 14: {
                        script10592(59441183, 1);
                        IF_SETONOP(callback(script13252), comp(907, 31));  // lobbyscreen_pane_playerinfo:motw_open_mtxspotlight
                        break;
                    }
                    case 19: {
                        script10592(59441184, 1);
                        IF_SETONOP(callback(script13252), comp(907, 32));  // lobbyscreen_pane_playerinfo:motw_open_mobile_shop
                        break;
                    }
                    case 15: {
                        script10592(59441185, 1);
                        break;
                    }
                    case 11: {
                        script10592(59441175, 1);
                        IF_SETONOP(callback(script13252), comp(907, 23));  // lobbyscreen_pane_playerinfo:motw_latestcontent
                        break;
                    }
                };
            } else if ((RANDOM(2) == 0)) {
                if (((varplayer_6601 >= 7924) || (varbitplayer_48641 == 0))) {
                    if ((varplayer_6601 > 0)) {
                        while ((int5 < int1)) {
                            int3 = enum_getvalue(0, 73, 7783 as cs2enum, int5);
                            if ((script17266(int3) == 1)) {
                                switch (int3) {
                                    case 35237: {
                                        int4 = int3;
                                        break;
                                    }
                                };
                                pop_array(int6, int3);
                                int6 = (int6 + 1);
                            };
                            int5 = (int5 + 1);
                        };
                    };
                    if ((int4 != -1)) {
                        int3 = int4;
                    } else if ((int6 == 0)) {
                        int3 = enum_getvalue(0, 73, 7783 as cs2enum, -1);
                        if ((int3 == 34505 as struct)) {
                            int3 = enum_getvalue(0, 73, 8300, MODULO(varplayer_6601, int2));
                            string4 = "Featured Content";
                        };
                    } else {
                        int3 = push_array(RANDOM(int6));
                    };
                    switch (MAP_LANG()) {
                        case 1: {
                            string2 = struct_getparam(int3, 6962);
                            string3 = struct_getparam(int3, 5558);
                            string1 = struct_getparam(int3, 7961);
                            break;
                        }
                        case 2: {
                            string2 = struct_getparam(int3, 6963);
                            string3 = struct_getparam(int3, 7892);
                            string1 = struct_getparam(int3, 7962);
                            break;
                        }
                        case 3: {
                            string2 = struct_getparam(int3, 6964);
                            string3 = struct_getparam(int3, 7893);
                            string1 = struct_getparam(int3, 7963);
                            break;
                        }
                    };
                    if ((STRING_LENGTH(string2) == 0)) {
                        string2 = struct_getparam(int3, 6394);
                    };
                    if ((STRING_LENGTH(string3) == 0)) {
                        string3 = struct_getparam(int3, 65);
                    };
                    if ((STRING_LENGTH(string1) == 0)) {
                        string1 = struct_getparam(int3, 6393);
                    };
                    if ((STRING_LENGTH(struct_getparam(int3, 6391)) > 0)) {
                        string4 = struct_getparam(int3, 6391);
                    };
                    if ((STRING_LENGTH(string4) > 0)) {
                        IF_SETTEXT(string4, comp(907, 18));  // lobbyscreen_pane_playerinfo:main_banner_title_text
                    };
                    switch (MAP_LANG()) {
                        case 0: {
                            int5 = 1;
                            if ((struct_getparam(int3, 9361) != -1)) {
                                int5 = (int5 + 1);
                                if ((struct_getparam(int3, 9362) != -1)) {
                                    int5 = (int5 + 1);
                                    if ((struct_getparam(int3, 9363) != -1)) {
                                        int5 = (int5 + 1);
                                    };
                                };
                            };
                            switch (RANDOM(int5)) {
                                case 0: {
                                    IF_SETGRAPHIC(script19254(int3, 0), comp(907, 38));  // lobbyscreen_pane_playerinfo:special_gfx
                                    break;
                                }
                                case 1: {
                                    IF_SETGRAPHIC(struct_getparam(int3, 9361), comp(907, 38));  // lobbyscreen_pane_playerinfo:special_gfx
                                    break;
                                }
                                case 2: {
                                    IF_SETGRAPHIC(struct_getparam(int3, 9362), comp(907, 38));  // lobbyscreen_pane_playerinfo:special_gfx
                                    break;
                                }
                                case 3: {
                                    IF_SETGRAPHIC(struct_getparam(int3, 9363), comp(907, 38));  // lobbyscreen_pane_playerinfo:special_gfx
                                    break;
                                }
                            };
                            break;
                        }
                        default: {
                            IF_SETGRAPHIC(script19254(int3, MAP_LANG()), comp(907, 38));  // lobbyscreen_pane_playerinfo:special_gfx
                            break;
                        }
                    };
                    IF_SETTEXT(string4, comp(907, 18));  // lobbyscreen_pane_playerinfo:main_banner_title_text
                    script10593(1);
                    switch (struct_getparam(int3, 6392)) {
                        case 1: {
                            script10592(59441176, 1);
                            IF_SETONOP(callback(script13252), comp(907, 24));  // lobbyscreen_pane_playerinfo:motw_open_trh
                            break;
                        }
                        case 2:
                        case 18: {
                            IF_SETOP(1, "Select", comp(907, 38));  // lobbyscreen_pane_playerinfo:special_gfx
                            IF_SETONOP(callback(script13252), comp(907, 38));  // lobbyscreen_pane_playerinfo:special_gfx
                            break;
                        }
                        case 3: {
                            IF_SETOP(1, "Select", comp(907, 38));  // lobbyscreen_pane_playerinfo:special_gfx
                            if ((struct_getparam(int3, 6395) == 1)) {
                                IF_SETONOP(callback(script3434, string1, string2), comp(907, 38));  // lobbyscreen_pane_playerinfo:special_gfx
                            } else {
                                IF_SETONOP(callback(script7397, string1, string2), comp(907, 38));  // lobbyscreen_pane_playerinfo:special_gfx
                            };
                            break;
                        }
                        case 9: {
                            IF_SETOP(1, "Select", comp(907, 38));  // lobbyscreen_pane_playerinfo:special_gfx
                            IF_SETONOP(callback(script2828, string3), comp(907, 38));  // lobbyscreen_pane_playerinfo:special_gfx
                            break;
                        }
                        case 4: {
                            IF_SETOP(1, "Select", comp(907, 38));  // lobbyscreen_pane_playerinfo:special_gfx
                            IF_SETONOP(callback(script13252), comp(907, 38));  // lobbyscreen_pane_playerinfo:special_gfx
                            break;
                        }
                        case 5: {
                            script10592(59441177, 1);
                            IF_SETONOP(callback(script13252), comp(907, 25));  // lobbyscreen_pane_playerinfo:motw_open_tle
                            break;
                        }
                        case 7: {
                            IF_SETOP(1, "Select", comp(907, 38));  // lobbyscreen_pane_playerinfo:special_gfx
                            break;
                        }
                        case 8: {
                            script10592(59441178, 1);
                            break;
                        }
                        case 10: {
                            script10592(59441181, 1);
                            IF_SETONOP(callback(script13252), comp(907, 29));  // lobbyscreen_pane_playerinfo:motw_open_managebonds
                            break;
                        }
                        case 12: {
                            script10592(59441182, 1);
                            IF_SETONOP(callback(script13252), comp(907, 30));  // lobbyscreen_pane_playerinfo:motw_open_bp3
                            break;
                        }
                        case 13: {
                            if ((PLATFORMTYPE() != 0)) {
                                if ((PLATFORMTYPE() != 5)) {
                                    script10592(59441183, 1);
                                    IF_SETONOP(callback(script13252), comp(907, 31));  // lobbyscreen_pane_playerinfo:motw_open_mtxspotlight
                                } else {
                                    IF_SETOP(1, "Select", comp(907, 38));  // lobbyscreen_pane_playerinfo:special_gfx
                                    IF_SETONOP(callback(script15228, 19), comp(907, 38));  // lobbyscreen_pane_playerinfo:special_gfx
                                };
                            } else {
                                IF_SETOP(1, "Select", comp(907, 38));  // lobbyscreen_pane_playerinfo:special_gfx
                                IF_SETONOP(callback(script15228, 19), comp(907, 38));  // lobbyscreen_pane_playerinfo:special_gfx
                            };
                            break;
                        }
                        case 14: {
                            script10592(59441183, 1);
                            IF_SETONOP(callback(script13252), comp(907, 31));  // lobbyscreen_pane_playerinfo:motw_open_mtxspotlight
                            break;
                        }
                        case 19: {
                            script10592(59441184, 1);
                            IF_SETONOP(callback(script13252), comp(907, 32));  // lobbyscreen_pane_playerinfo:motw_open_mobile_shop
                            break;
                        }
                        case 15: {
                            script10592(59441185, 1);
                            break;
                        }
                        case 11: {
                            script10592(59441175, 1);
                            IF_SETONOP(callback(script13252), comp(907, 23));  // lobbyscreen_pane_playerinfo:motw_latestcontent
                            break;
                        }
                    };
                } else {
                    int11 = ((DATE_MINUTES_FROMRUNEDAY(8829) + 720) - 1);
                    script3568(59441191, 59375627, int11, DATE_MINUTES(), -1, -1, 0, 0);
                    IF_SETONTIMER(callback(script12275, 59441191, 59375627, int11, DATE_MINUTES(), -1, -1, 0, 0), comp(906, 11));  // lobbyscreen:bonus_xp_counter
                };
            } else if ((varbitplayer_48641 == 0)) {
                if ((varplayer_6601 > 0)) {
                    while ((int5 < int1)) {
                        int3 = enum_getvalue(0, 73, 7783 as cs2enum, int5);
                        if ((script17266(int3) == 1)) {
                            switch (int3) {
                                case 35237: {
                                    int4 = int3;
                                    break;
                                }
                            };
                            pop_array(int6, int3);
                            int6 = (int6 + 1);
                        };
                        int5 = (int5 + 1);
                    };
                };
                if ((int4 != -1)) {
                    int3 = int4;
                } else if ((int6 == 0)) {
                    int3 = enum_getvalue(0, 73, 7783 as cs2enum, -1);
                    if ((int3 == 34505 as struct)) {
                        int3 = enum_getvalue(0, 73, 8300, MODULO(varplayer_6601, int2));
                        string4 = "Featured Content";
                    };
                } else {
                    int3 = push_array(RANDOM(int6));
                };
                switch (MAP_LANG()) {
                    case 1: {
                        string2 = struct_getparam(int3, 6962);
                        string3 = struct_getparam(int3, 5558);
                        string1 = struct_getparam(int3, 7961);
                        break;
                    }
                    case 2: {
                        string2 = struct_getparam(int3, 6963);
                        string3 = struct_getparam(int3, 7892);
                        string1 = struct_getparam(int3, 7962);
                        break;
                    }
                    case 3: {
                        string2 = struct_getparam(int3, 6964);
                        string3 = struct_getparam(int3, 7893);
                        string1 = struct_getparam(int3, 7963);
                        break;
                    }
                };
                if ((STRING_LENGTH(string2) == 0)) {
                    string2 = struct_getparam(int3, 6394);
                };
                if ((STRING_LENGTH(string3) == 0)) {
                    string3 = struct_getparam(int3, 65);
                };
                if ((STRING_LENGTH(string1) == 0)) {
                    string1 = struct_getparam(int3, 6393);
                };
                if ((STRING_LENGTH(struct_getparam(int3, 6391)) > 0)) {
                    string4 = struct_getparam(int3, 6391);
                };
                if ((STRING_LENGTH(string4) > 0)) {
                    IF_SETTEXT(string4, comp(907, 18));  // lobbyscreen_pane_playerinfo:main_banner_title_text
                };
                switch (MAP_LANG()) {
                    case 0: {
                        int5 = 1;
                        if ((struct_getparam(int3, 9361) != -1)) {
                            int5 = (int5 + 1);
                            if ((struct_getparam(int3, 9362) != -1)) {
                                int5 = (int5 + 1);
                                if ((struct_getparam(int3, 9363) != -1)) {
                                    int5 = (int5 + 1);
                                };
                            };
                        };
                        switch (RANDOM(int5)) {
                            case 0: {
                                IF_SETGRAPHIC(script19254(int3, 0), comp(907, 38));  // lobbyscreen_pane_playerinfo:special_gfx
                                break;
                            }
                            case 1: {
                                IF_SETGRAPHIC(struct_getparam(int3, 9361), comp(907, 38));  // lobbyscreen_pane_playerinfo:special_gfx
                                break;
                            }
                            case 2: {
                                IF_SETGRAPHIC(struct_getparam(int3, 9362), comp(907, 38));  // lobbyscreen_pane_playerinfo:special_gfx
                                break;
                            }
                            case 3: {
                                IF_SETGRAPHIC(struct_getparam(int3, 9363), comp(907, 38));  // lobbyscreen_pane_playerinfo:special_gfx
                                break;
                            }
                        };
                        break;
                    }
                    default: {
                        IF_SETGRAPHIC(script19254(int3, MAP_LANG()), comp(907, 38));  // lobbyscreen_pane_playerinfo:special_gfx
                        break;
                    }
                };
                IF_SETTEXT(string4, comp(907, 18));  // lobbyscreen_pane_playerinfo:main_banner_title_text
                script10593(1);
                switch (struct_getparam(int3, 6392)) {
                    case 1: {
                        script10592(59441176, 1);
                        IF_SETONOP(callback(script13252), comp(907, 24));  // lobbyscreen_pane_playerinfo:motw_open_trh
                        break;
                    }
                    case 2:
                    case 18: {
                        IF_SETOP(1, "Select", comp(907, 38));  // lobbyscreen_pane_playerinfo:special_gfx
                        IF_SETONOP(callback(script13252), comp(907, 38));  // lobbyscreen_pane_playerinfo:special_gfx
                        break;
                    }
                    case 3: {
                        IF_SETOP(1, "Select", comp(907, 38));  // lobbyscreen_pane_playerinfo:special_gfx
                        if ((struct_getparam(int3, 6395) == 1)) {
                            IF_SETONOP(callback(script3434, string1, string2), comp(907, 38));  // lobbyscreen_pane_playerinfo:special_gfx
                        } else {
                            IF_SETONOP(callback(script7397, string1, string2), comp(907, 38));  // lobbyscreen_pane_playerinfo:special_gfx
                        };
                        break;
                    }
                    case 9: {
                        IF_SETOP(1, "Select", comp(907, 38));  // lobbyscreen_pane_playerinfo:special_gfx
                        IF_SETONOP(callback(script2828, string3), comp(907, 38));  // lobbyscreen_pane_playerinfo:special_gfx
                        break;
                    }
                    case 4: {
                        IF_SETOP(1, "Select", comp(907, 38));  // lobbyscreen_pane_playerinfo:special_gfx
                        IF_SETONOP(callback(script13252), comp(907, 38));  // lobbyscreen_pane_playerinfo:special_gfx
                        break;
                    }
                    case 5: {
                        script10592(59441177, 1);
                        IF_SETONOP(callback(script13252), comp(907, 25));  // lobbyscreen_pane_playerinfo:motw_open_tle
                        break;
                    }
                    case 7: {
                        IF_SETOP(1, "Select", comp(907, 38));  // lobbyscreen_pane_playerinfo:special_gfx
                        break;
                    }
                    case 8: {
                        script10592(59441178, 1);
                        break;
                    }
                    case 10: {
                        script10592(59441181, 1);
                        IF_SETONOP(callback(script13252), comp(907, 29));  // lobbyscreen_pane_playerinfo:motw_open_managebonds
                        break;
                    }
                    case 12: {
                        script10592(59441182, 1);
                        IF_SETONOP(callback(script13252), comp(907, 30));  // lobbyscreen_pane_playerinfo:motw_open_bp3
                        break;
                    }
                    case 13: {
                        if ((PLATFORMTYPE() != 0)) {
                            if ((PLATFORMTYPE() != 5)) {
                                script10592(59441183, 1);
                                IF_SETONOP(callback(script13252), comp(907, 31));  // lobbyscreen_pane_playerinfo:motw_open_mtxspotlight
                            } else {
                                IF_SETOP(1, "Select", comp(907, 38));  // lobbyscreen_pane_playerinfo:special_gfx
                                IF_SETONOP(callback(script15228, 19), comp(907, 38));  // lobbyscreen_pane_playerinfo:special_gfx
                            };
                        } else {
                            IF_SETOP(1, "Select", comp(907, 38));  // lobbyscreen_pane_playerinfo:special_gfx
                            IF_SETONOP(callback(script15228, 19), comp(907, 38));  // lobbyscreen_pane_playerinfo:special_gfx
                        };
                        break;
                    }
                    case 14: {
                        script10592(59441183, 1);
                        IF_SETONOP(callback(script13252), comp(907, 31));  // lobbyscreen_pane_playerinfo:motw_open_mtxspotlight
                        break;
                    }
                    case 19: {
                        script10592(59441184, 1);
                        IF_SETONOP(callback(script13252), comp(907, 32));  // lobbyscreen_pane_playerinfo:motw_open_mobile_shop
                        break;
                    }
                    case 15: {
                        script10592(59441185, 1);
                        break;
                    }
                    case 11: {
                        script10592(59441175, 1);
                        IF_SETONOP(callback(script13252), comp(907, 23));  // lobbyscreen_pane_playerinfo:motw_latestcontent
                        break;
                    }
                };
            } else {
                int11 = ((DATE_MINUTES_FROMRUNEDAY(8829) + 720) - 1);
                script3568(59441191, 59375627, int11, DATE_MINUTES(), -1, -1, 0, 0);
                IF_SETONTIMER(callback(script12275, 59441191, 59375627, int11, DATE_MINUTES(), -1, -1, 0, 0), comp(906, 11));  // lobbyscreen:bonus_xp_counter
            };
        } else if (((varplayer_6601 > 8829) || (varplayer_6601 < 7922))) {
            if ((varplayer_6601 > 0)) {
                while ((int5 < int1)) {
                    int3 = enum_getvalue(0, 73, 7783 as cs2enum, int5);
                    if ((script17266(int3) == 1)) {
                        switch (int3) {
                            case 35237: {
                                int4 = int3;
                                break;
                            }
                        };
                        pop_array(int6, int3);
                        int6 = (int6 + 1);
                    };
                    int5 = (int5 + 1);
                };
            };
            if ((int4 != -1)) {
                int3 = int4;
            } else if ((int6 == 0)) {
                int3 = enum_getvalue(0, 73, 7783 as cs2enum, -1);
                if ((int3 == 34505 as struct)) {
                    int3 = enum_getvalue(0, 73, 8300, MODULO(varplayer_6601, int2));
                    string4 = "Featured Content";
                };
            } else {
                int3 = push_array(RANDOM(int6));
            };
            switch (MAP_LANG()) {
                case 1: {
                    string2 = struct_getparam(int3, 6962);
                    string3 = struct_getparam(int3, 5558);
                    string1 = struct_getparam(int3, 7961);
                    break;
                }
                case 2: {
                    string2 = struct_getparam(int3, 6963);
                    string3 = struct_getparam(int3, 7892);
                    string1 = struct_getparam(int3, 7962);
                    break;
                }
                case 3: {
                    string2 = struct_getparam(int3, 6964);
                    string3 = struct_getparam(int3, 7893);
                    string1 = struct_getparam(int3, 7963);
                    break;
                }
            };
            if ((STRING_LENGTH(string2) == 0)) {
                string2 = struct_getparam(int3, 6394);
            };
            if ((STRING_LENGTH(string3) == 0)) {
                string3 = struct_getparam(int3, 65);
            };
            if ((STRING_LENGTH(string1) == 0)) {
                string1 = struct_getparam(int3, 6393);
            };
            if ((STRING_LENGTH(struct_getparam(int3, 6391)) > 0)) {
                string4 = struct_getparam(int3, 6391);
            };
            if ((STRING_LENGTH(string4) > 0)) {
                IF_SETTEXT(string4, comp(907, 18));  // lobbyscreen_pane_playerinfo:main_banner_title_text
            };
            switch (MAP_LANG()) {
                case 0: {
                    int5 = 1;
                    if ((struct_getparam(int3, 9361) != -1)) {
                        int5 = (int5 + 1);
                        if ((struct_getparam(int3, 9362) != -1)) {
                            int5 = (int5 + 1);
                            if ((struct_getparam(int3, 9363) != -1)) {
                                int5 = (int5 + 1);
                            };
                        };
                    };
                    switch (RANDOM(int5)) {
                        case 0: {
                            IF_SETGRAPHIC(script19254(int3, 0), comp(907, 38));  // lobbyscreen_pane_playerinfo:special_gfx
                            break;
                        }
                        case 1: {
                            IF_SETGRAPHIC(struct_getparam(int3, 9361), comp(907, 38));  // lobbyscreen_pane_playerinfo:special_gfx
                            break;
                        }
                        case 2: {
                            IF_SETGRAPHIC(struct_getparam(int3, 9362), comp(907, 38));  // lobbyscreen_pane_playerinfo:special_gfx
                            break;
                        }
                        case 3: {
                            IF_SETGRAPHIC(struct_getparam(int3, 9363), comp(907, 38));  // lobbyscreen_pane_playerinfo:special_gfx
                            break;
                        }
                    };
                    break;
                }
                default: {
                    IF_SETGRAPHIC(script19254(int3, MAP_LANG()), comp(907, 38));  // lobbyscreen_pane_playerinfo:special_gfx
                    break;
                }
            };
            IF_SETTEXT(string4, comp(907, 18));  // lobbyscreen_pane_playerinfo:main_banner_title_text
            script10593(1);
            switch (struct_getparam(int3, 6392)) {
                case 1: {
                    script10592(59441176, 1);
                    IF_SETONOP(callback(script13252), comp(907, 24));  // lobbyscreen_pane_playerinfo:motw_open_trh
                    break;
                }
                case 2:
                case 18: {
                    IF_SETOP(1, "Select", comp(907, 38));  // lobbyscreen_pane_playerinfo:special_gfx
                    IF_SETONOP(callback(script13252), comp(907, 38));  // lobbyscreen_pane_playerinfo:special_gfx
                    break;
                }
                case 3: {
                    IF_SETOP(1, "Select", comp(907, 38));  // lobbyscreen_pane_playerinfo:special_gfx
                    if ((struct_getparam(int3, 6395) == 1)) {
                        IF_SETONOP(callback(script3434, string1, string2), comp(907, 38));  // lobbyscreen_pane_playerinfo:special_gfx
                    } else {
                        IF_SETONOP(callback(script7397, string1, string2), comp(907, 38));  // lobbyscreen_pane_playerinfo:special_gfx
                    };
                    break;
                }
                case 9: {
                    IF_SETOP(1, "Select", comp(907, 38));  // lobbyscreen_pane_playerinfo:special_gfx
                    IF_SETONOP(callback(script2828, string3), comp(907, 38));  // lobbyscreen_pane_playerinfo:special_gfx
                    break;
                }
                case 4: {
                    IF_SETOP(1, "Select", comp(907, 38));  // lobbyscreen_pane_playerinfo:special_gfx
                    IF_SETONOP(callback(script13252), comp(907, 38));  // lobbyscreen_pane_playerinfo:special_gfx
                    break;
                }
                case 5: {
                    script10592(59441177, 1);
                    IF_SETONOP(callback(script13252), comp(907, 25));  // lobbyscreen_pane_playerinfo:motw_open_tle
                    break;
                }
                case 7: {
                    IF_SETOP(1, "Select", comp(907, 38));  // lobbyscreen_pane_playerinfo:special_gfx
                    break;
                }
                case 8: {
                    script10592(59441178, 1);
                    break;
                }
                case 10: {
                    script10592(59441181, 1);
                    IF_SETONOP(callback(script13252), comp(907, 29));  // lobbyscreen_pane_playerinfo:motw_open_managebonds
                    break;
                }
                case 12: {
                    script10592(59441182, 1);
                    IF_SETONOP(callback(script13252), comp(907, 30));  // lobbyscreen_pane_playerinfo:motw_open_bp3
                    break;
                }
                case 13: {
                    if ((PLATFORMTYPE() != 0)) {
                        if ((PLATFORMTYPE() != 5)) {
                            script10592(59441183, 1);
                            IF_SETONOP(callback(script13252), comp(907, 31));  // lobbyscreen_pane_playerinfo:motw_open_mtxspotlight
                        } else {
                            IF_SETOP(1, "Select", comp(907, 38));  // lobbyscreen_pane_playerinfo:special_gfx
                            IF_SETONOP(callback(script15228, 19), comp(907, 38));  // lobbyscreen_pane_playerinfo:special_gfx
                        };
                    } else {
                        IF_SETOP(1, "Select", comp(907, 38));  // lobbyscreen_pane_playerinfo:special_gfx
                        IF_SETONOP(callback(script15228, 19), comp(907, 38));  // lobbyscreen_pane_playerinfo:special_gfx
                    };
                    break;
                }
                case 14: {
                    script10592(59441183, 1);
                    IF_SETONOP(callback(script13252), comp(907, 31));  // lobbyscreen_pane_playerinfo:motw_open_mtxspotlight
                    break;
                }
                case 19: {
                    script10592(59441184, 1);
                    IF_SETONOP(callback(script13252), comp(907, 32));  // lobbyscreen_pane_playerinfo:motw_open_mobile_shop
                    break;
                }
                case 15: {
                    script10592(59441185, 1);
                    break;
                }
                case 11: {
                    script10592(59441175, 1);
                    IF_SETONOP(callback(script13252), comp(907, 23));  // lobbyscreen_pane_playerinfo:motw_latestcontent
                    break;
                }
            };
        } else if ((RANDOM(2) == 0)) {
            if (((varplayer_6601 >= 7924) || (varbitplayer_48641 == 0))) {
                if ((varplayer_6601 > 0)) {
                    while ((int5 < int1)) {
                        int3 = enum_getvalue(0, 73, 7783 as cs2enum, int5);
                        if ((script17266(int3) == 1)) {
                            switch (int3) {
                                case 35237: {
                                    int4 = int3;
                                    break;
                                }
                            };
                            pop_array(int6, int3);
                            int6 = (int6 + 1);
                        };
                        int5 = (int5 + 1);
                    };
                };
                if ((int4 != -1)) {
                    int3 = int4;
                } else if ((int6 == 0)) {
                    int3 = enum_getvalue(0, 73, 7783 as cs2enum, -1);
                    if ((int3 == 34505 as struct)) {
                        int3 = enum_getvalue(0, 73, 8300, MODULO(varplayer_6601, int2));
                        string4 = "Featured Content";
                    };
                } else {
                    int3 = push_array(RANDOM(int6));
                };
                switch (MAP_LANG()) {
                    case 1: {
                        string2 = struct_getparam(int3, 6962);
                        string3 = struct_getparam(int3, 5558);
                        string1 = struct_getparam(int3, 7961);
                        break;
                    }
                    case 2: {
                        string2 = struct_getparam(int3, 6963);
                        string3 = struct_getparam(int3, 7892);
                        string1 = struct_getparam(int3, 7962);
                        break;
                    }
                    case 3: {
                        string2 = struct_getparam(int3, 6964);
                        string3 = struct_getparam(int3, 7893);
                        string1 = struct_getparam(int3, 7963);
                        break;
                    }
                };
                if ((STRING_LENGTH(string2) == 0)) {
                    string2 = struct_getparam(int3, 6394);
                };
                if ((STRING_LENGTH(string3) == 0)) {
                    string3 = struct_getparam(int3, 65);
                };
                if ((STRING_LENGTH(string1) == 0)) {
                    string1 = struct_getparam(int3, 6393);
                };
                if ((STRING_LENGTH(struct_getparam(int3, 6391)) > 0)) {
                    string4 = struct_getparam(int3, 6391);
                };
                if ((STRING_LENGTH(string4) > 0)) {
                    IF_SETTEXT(string4, comp(907, 18));  // lobbyscreen_pane_playerinfo:main_banner_title_text
                };
                switch (MAP_LANG()) {
                    case 0: {
                        int5 = 1;
                        if ((struct_getparam(int3, 9361) != -1)) {
                            int5 = (int5 + 1);
                            if ((struct_getparam(int3, 9362) != -1)) {
                                int5 = (int5 + 1);
                                if ((struct_getparam(int3, 9363) != -1)) {
                                    int5 = (int5 + 1);
                                };
                            };
                        };
                        switch (RANDOM(int5)) {
                            case 0: {
                                IF_SETGRAPHIC(script19254(int3, 0), comp(907, 38));  // lobbyscreen_pane_playerinfo:special_gfx
                                break;
                            }
                            case 1: {
                                IF_SETGRAPHIC(struct_getparam(int3, 9361), comp(907, 38));  // lobbyscreen_pane_playerinfo:special_gfx
                                break;
                            }
                            case 2: {
                                IF_SETGRAPHIC(struct_getparam(int3, 9362), comp(907, 38));  // lobbyscreen_pane_playerinfo:special_gfx
                                break;
                            }
                            case 3: {
                                IF_SETGRAPHIC(struct_getparam(int3, 9363), comp(907, 38));  // lobbyscreen_pane_playerinfo:special_gfx
                                break;
                            }
                        };
                        break;
                    }
                    default: {
                        IF_SETGRAPHIC(script19254(int3, MAP_LANG()), comp(907, 38));  // lobbyscreen_pane_playerinfo:special_gfx
                        break;
                    }
                };
                IF_SETTEXT(string4, comp(907, 18));  // lobbyscreen_pane_playerinfo:main_banner_title_text
                script10593(1);
                switch (struct_getparam(int3, 6392)) {
                    case 1: {
                        script10592(59441176, 1);
                        IF_SETONOP(callback(script13252), comp(907, 24));  // lobbyscreen_pane_playerinfo:motw_open_trh
                        break;
                    }
                    case 2:
                    case 18: {
                        IF_SETOP(1, "Select", comp(907, 38));  // lobbyscreen_pane_playerinfo:special_gfx
                        IF_SETONOP(callback(script13252), comp(907, 38));  // lobbyscreen_pane_playerinfo:special_gfx
                        break;
                    }
                    case 3: {
                        IF_SETOP(1, "Select", comp(907, 38));  // lobbyscreen_pane_playerinfo:special_gfx
                        if ((struct_getparam(int3, 6395) == 1)) {
                            IF_SETONOP(callback(script3434, string1, string2), comp(907, 38));  // lobbyscreen_pane_playerinfo:special_gfx
                        } else {
                            IF_SETONOP(callback(script7397, string1, string2), comp(907, 38));  // lobbyscreen_pane_playerinfo:special_gfx
                        };
                        break;
                    }
                    case 9: {
                        IF_SETOP(1, "Select", comp(907, 38));  // lobbyscreen_pane_playerinfo:special_gfx
                        IF_SETONOP(callback(script2828, string3), comp(907, 38));  // lobbyscreen_pane_playerinfo:special_gfx
                        break;
                    }
                    case 4: {
                        IF_SETOP(1, "Select", comp(907, 38));  // lobbyscreen_pane_playerinfo:special_gfx
                        IF_SETONOP(callback(script13252), comp(907, 38));  // lobbyscreen_pane_playerinfo:special_gfx
                        break;
                    }
                    case 5: {
                        script10592(59441177, 1);
                        IF_SETONOP(callback(script13252), comp(907, 25));  // lobbyscreen_pane_playerinfo:motw_open_tle
                        break;
                    }
                    case 7: {
                        IF_SETOP(1, "Select", comp(907, 38));  // lobbyscreen_pane_playerinfo:special_gfx
                        break;
                    }
                    case 8: {
                        script10592(59441178, 1);
                        break;
                    }
                    case 10: {
                        script10592(59441181, 1);
                        IF_SETONOP(callback(script13252), comp(907, 29));  // lobbyscreen_pane_playerinfo:motw_open_managebonds
                        break;
                    }
                    case 12: {
                        script10592(59441182, 1);
                        IF_SETONOP(callback(script13252), comp(907, 30));  // lobbyscreen_pane_playerinfo:motw_open_bp3
                        break;
                    }
                    case 13: {
                        if ((PLATFORMTYPE() != 0)) {
                            if ((PLATFORMTYPE() != 5)) {
                                script10592(59441183, 1);
                                IF_SETONOP(callback(script13252), comp(907, 31));  // lobbyscreen_pane_playerinfo:motw_open_mtxspotlight
                            } else {
                                IF_SETOP(1, "Select", comp(907, 38));  // lobbyscreen_pane_playerinfo:special_gfx
                                IF_SETONOP(callback(script15228, 19), comp(907, 38));  // lobbyscreen_pane_playerinfo:special_gfx
                            };
                        } else {
                            IF_SETOP(1, "Select", comp(907, 38));  // lobbyscreen_pane_playerinfo:special_gfx
                            IF_SETONOP(callback(script15228, 19), comp(907, 38));  // lobbyscreen_pane_playerinfo:special_gfx
                        };
                        break;
                    }
                    case 14: {
                        script10592(59441183, 1);
                        IF_SETONOP(callback(script13252), comp(907, 31));  // lobbyscreen_pane_playerinfo:motw_open_mtxspotlight
                        break;
                    }
                    case 19: {
                        script10592(59441184, 1);
                        IF_SETONOP(callback(script13252), comp(907, 32));  // lobbyscreen_pane_playerinfo:motw_open_mobile_shop
                        break;
                    }
                    case 15: {
                        script10592(59441185, 1);
                        break;
                    }
                    case 11: {
                        script10592(59441175, 1);
                        IF_SETONOP(callback(script13252), comp(907, 23));  // lobbyscreen_pane_playerinfo:motw_latestcontent
                        break;
                    }
                };
            } else {
                int11 = ((DATE_MINUTES_FROMRUNEDAY(8829) + 720) - 1);
                script3568(59441191, 59375627, int11, DATE_MINUTES(), -1, -1, 0, 0);
                IF_SETONTIMER(callback(script12275, 59441191, 59375627, int11, DATE_MINUTES(), -1, -1, 0, 0), comp(906, 11));  // lobbyscreen:bonus_xp_counter
            };
        } else if ((varbitplayer_48641 == 0)) {
            if ((varplayer_6601 > 0)) {
                while ((int5 < int1)) {
                    int3 = enum_getvalue(0, 73, 7783 as cs2enum, int5);
                    if ((script17266(int3) == 1)) {
                        switch (int3) {
                            case 35237: {
                                int4 = int3;
                                break;
                            }
                        };
                        pop_array(int6, int3);
                        int6 = (int6 + 1);
                    };
                    int5 = (int5 + 1);
                };
            };
            if ((int4 != -1)) {
                int3 = int4;
            } else if ((int6 == 0)) {
                int3 = enum_getvalue(0, 73, 7783 as cs2enum, -1);
                if ((int3 == 34505 as struct)) {
                    int3 = enum_getvalue(0, 73, 8300, MODULO(varplayer_6601, int2));
                    string4 = "Featured Content";
                };
            } else {
                int3 = push_array(RANDOM(int6));
            };
            switch (MAP_LANG()) {
                case 1: {
                    string2 = struct_getparam(int3, 6962);
                    string3 = struct_getparam(int3, 5558);
                    string1 = struct_getparam(int3, 7961);
                    break;
                }
                case 2: {
                    string2 = struct_getparam(int3, 6963);
                    string3 = struct_getparam(int3, 7892);
                    string1 = struct_getparam(int3, 7962);
                    break;
                }
                case 3: {
                    string2 = struct_getparam(int3, 6964);
                    string3 = struct_getparam(int3, 7893);
                    string1 = struct_getparam(int3, 7963);
                    break;
                }
            };
            if ((STRING_LENGTH(string2) == 0)) {
                string2 = struct_getparam(int3, 6394);
            };
            if ((STRING_LENGTH(string3) == 0)) {
                string3 = struct_getparam(int3, 65);
            };
            if ((STRING_LENGTH(string1) == 0)) {
                string1 = struct_getparam(int3, 6393);
            };
            if ((STRING_LENGTH(struct_getparam(int3, 6391)) > 0)) {
                string4 = struct_getparam(int3, 6391);
            };
            if ((STRING_LENGTH(string4) > 0)) {
                IF_SETTEXT(string4, comp(907, 18));  // lobbyscreen_pane_playerinfo:main_banner_title_text
            };
            switch (MAP_LANG()) {
                case 0: {
                    int5 = 1;
                    if ((struct_getparam(int3, 9361) != -1)) {
                        int5 = (int5 + 1);
                        if ((struct_getparam(int3, 9362) != -1)) {
                            int5 = (int5 + 1);
                            if ((struct_getparam(int3, 9363) != -1)) {
                                int5 = (int5 + 1);
                            };
                        };
                    };
                    switch (RANDOM(int5)) {
                        case 0: {
                            IF_SETGRAPHIC(script19254(int3, 0), comp(907, 38));  // lobbyscreen_pane_playerinfo:special_gfx
                            break;
                        }
                        case 1: {
                            IF_SETGRAPHIC(struct_getparam(int3, 9361), comp(907, 38));  // lobbyscreen_pane_playerinfo:special_gfx
                            break;
                        }
                        case 2: {
                            IF_SETGRAPHIC(struct_getparam(int3, 9362), comp(907, 38));  // lobbyscreen_pane_playerinfo:special_gfx
                            break;
                        }
                        case 3: {
                            IF_SETGRAPHIC(struct_getparam(int3, 9363), comp(907, 38));  // lobbyscreen_pane_playerinfo:special_gfx
                            break;
                        }
                    };
                    break;
                }
                default: {
                    IF_SETGRAPHIC(script19254(int3, MAP_LANG()), comp(907, 38));  // lobbyscreen_pane_playerinfo:special_gfx
                    break;
                }
            };
            IF_SETTEXT(string4, comp(907, 18));  // lobbyscreen_pane_playerinfo:main_banner_title_text
            script10593(1);
            switch (struct_getparam(int3, 6392)) {
                case 1: {
                    script10592(59441176, 1);
                    IF_SETONOP(callback(script13252), comp(907, 24));  // lobbyscreen_pane_playerinfo:motw_open_trh
                    break;
                }
                case 2:
                case 18: {
                    IF_SETOP(1, "Select", comp(907, 38));  // lobbyscreen_pane_playerinfo:special_gfx
                    IF_SETONOP(callback(script13252), comp(907, 38));  // lobbyscreen_pane_playerinfo:special_gfx
                    break;
                }
                case 3: {
                    IF_SETOP(1, "Select", comp(907, 38));  // lobbyscreen_pane_playerinfo:special_gfx
                    if ((struct_getparam(int3, 6395) == 1)) {
                        IF_SETONOP(callback(script3434, string1, string2), comp(907, 38));  // lobbyscreen_pane_playerinfo:special_gfx
                    } else {
                        IF_SETONOP(callback(script7397, string1, string2), comp(907, 38));  // lobbyscreen_pane_playerinfo:special_gfx
                    };
                    break;
                }
                case 9: {
                    IF_SETOP(1, "Select", comp(907, 38));  // lobbyscreen_pane_playerinfo:special_gfx
                    IF_SETONOP(callback(script2828, string3), comp(907, 38));  // lobbyscreen_pane_playerinfo:special_gfx
                    break;
                }
                case 4: {
                    IF_SETOP(1, "Select", comp(907, 38));  // lobbyscreen_pane_playerinfo:special_gfx
                    IF_SETONOP(callback(script13252), comp(907, 38));  // lobbyscreen_pane_playerinfo:special_gfx
                    break;
                }
                case 5: {
                    script10592(59441177, 1);
                    IF_SETONOP(callback(script13252), comp(907, 25));  // lobbyscreen_pane_playerinfo:motw_open_tle
                    break;
                }
                case 7: {
                    IF_SETOP(1, "Select", comp(907, 38));  // lobbyscreen_pane_playerinfo:special_gfx
                    break;
                }
                case 8: {
                    script10592(59441178, 1);
                    break;
                }
                case 10: {
                    script10592(59441181, 1);
                    IF_SETONOP(callback(script13252), comp(907, 29));  // lobbyscreen_pane_playerinfo:motw_open_managebonds
                    break;
                }
                case 12: {
                    script10592(59441182, 1);
                    IF_SETONOP(callback(script13252), comp(907, 30));  // lobbyscreen_pane_playerinfo:motw_open_bp3
                    break;
                }
                case 13: {
                    if ((PLATFORMTYPE() != 0)) {
                        if ((PLATFORMTYPE() != 5)) {
                            script10592(59441183, 1);
                            IF_SETONOP(callback(script13252), comp(907, 31));  // lobbyscreen_pane_playerinfo:motw_open_mtxspotlight
                        } else {
                            IF_SETOP(1, "Select", comp(907, 38));  // lobbyscreen_pane_playerinfo:special_gfx
                            IF_SETONOP(callback(script15228, 19), comp(907, 38));  // lobbyscreen_pane_playerinfo:special_gfx
                        };
                    } else {
                        IF_SETOP(1, "Select", comp(907, 38));  // lobbyscreen_pane_playerinfo:special_gfx
                        IF_SETONOP(callback(script15228, 19), comp(907, 38));  // lobbyscreen_pane_playerinfo:special_gfx
                    };
                    break;
                }
                case 14: {
                    script10592(59441183, 1);
                    IF_SETONOP(callback(script13252), comp(907, 31));  // lobbyscreen_pane_playerinfo:motw_open_mtxspotlight
                    break;
                }
                case 19: {
                    script10592(59441184, 1);
                    IF_SETONOP(callback(script13252), comp(907, 32));  // lobbyscreen_pane_playerinfo:motw_open_mobile_shop
                    break;
                }
                case 15: {
                    script10592(59441185, 1);
                    break;
                }
                case 11: {
                    script10592(59441175, 1);
                    IF_SETONOP(callback(script13252), comp(907, 23));  // lobbyscreen_pane_playerinfo:motw_latestcontent
                    break;
                }
            };
        } else {
            int11 = ((DATE_MINUTES_FROMRUNEDAY(8829) + 720) - 1);
            script3568(59441191, 59375627, int11, DATE_MINUTES(), -1, -1, 0, 0);
            IF_SETONTIMER(callback(script12275, 59441191, 59375627, int11, DATE_MINUTES(), -1, -1, 0, 0), comp(906, 11));  // lobbyscreen:bonus_xp_counter
        };
    } else if ((varplayer_6601 == 8829)) {
        if ((((DATE_MINUTES() >= (DATE_MINUTES_FROMRUNEDAY(8829) + 720)) || (varplayer_6601 > 8829)) || (varplayer_6601 < 7922))) {
            if ((varplayer_6601 > 0)) {
                while ((int5 < int1)) {
                    int3 = enum_getvalue(0, 73, 7783 as cs2enum, int5);
                    if ((script17266(int3) == 1)) {
                        switch (int3) {
                            case 35237: {
                                int4 = int3;
                                break;
                            }
                        };
                        pop_array(int6, int3);
                        int6 = (int6 + 1);
                    };
                    int5 = (int5 + 1);
                };
            };
            if ((int4 != -1)) {
                int3 = int4;
            } else if ((int6 == 0)) {
                int3 = enum_getvalue(0, 73, 7783 as cs2enum, -1);
                if ((int3 == 34505 as struct)) {
                    int3 = enum_getvalue(0, 73, 8300, MODULO(varplayer_6601, int2));
                    string4 = "Featured Content";
                };
            } else {
                int3 = push_array(RANDOM(int6));
            };
            switch (MAP_LANG()) {
                case 1: {
                    string2 = struct_getparam(int3, 6962);
                    string3 = struct_getparam(int3, 5558);
                    string1 = struct_getparam(int3, 7961);
                    break;
                }
                case 2: {
                    string2 = struct_getparam(int3, 6963);
                    string3 = struct_getparam(int3, 7892);
                    string1 = struct_getparam(int3, 7962);
                    break;
                }
                case 3: {
                    string2 = struct_getparam(int3, 6964);
                    string3 = struct_getparam(int3, 7893);
                    string1 = struct_getparam(int3, 7963);
                    break;
                }
            };
            if ((STRING_LENGTH(string2) == 0)) {
                string2 = struct_getparam(int3, 6394);
            };
            if ((STRING_LENGTH(string3) == 0)) {
                string3 = struct_getparam(int3, 65);
            };
            if ((STRING_LENGTH(string1) == 0)) {
                string1 = struct_getparam(int3, 6393);
            };
            if ((STRING_LENGTH(struct_getparam(int3, 6391)) > 0)) {
                string4 = struct_getparam(int3, 6391);
            };
            if ((STRING_LENGTH(string4) > 0)) {
                IF_SETTEXT(string4, comp(907, 18));  // lobbyscreen_pane_playerinfo:main_banner_title_text
            };
            switch (MAP_LANG()) {
                case 0: {
                    int5 = 1;
                    if ((struct_getparam(int3, 9361) != -1)) {
                        int5 = (int5 + 1);
                        if ((struct_getparam(int3, 9362) != -1)) {
                            int5 = (int5 + 1);
                            if ((struct_getparam(int3, 9363) != -1)) {
                                int5 = (int5 + 1);
                            };
                        };
                    };
                    switch (RANDOM(int5)) {
                        case 0: {
                            IF_SETGRAPHIC(script19254(int3, 0), comp(907, 38));  // lobbyscreen_pane_playerinfo:special_gfx
                            break;
                        }
                        case 1: {
                            IF_SETGRAPHIC(struct_getparam(int3, 9361), comp(907, 38));  // lobbyscreen_pane_playerinfo:special_gfx
                            break;
                        }
                        case 2: {
                            IF_SETGRAPHIC(struct_getparam(int3, 9362), comp(907, 38));  // lobbyscreen_pane_playerinfo:special_gfx
                            break;
                        }
                        case 3: {
                            IF_SETGRAPHIC(struct_getparam(int3, 9363), comp(907, 38));  // lobbyscreen_pane_playerinfo:special_gfx
                            break;
                        }
                    };
                    break;
                }
                default: {
                    IF_SETGRAPHIC(script19254(int3, MAP_LANG()), comp(907, 38));  // lobbyscreen_pane_playerinfo:special_gfx
                    break;
                }
            };
            IF_SETTEXT(string4, comp(907, 18));  // lobbyscreen_pane_playerinfo:main_banner_title_text
            script10593(1);
            switch (struct_getparam(int3, 6392)) {
                case 1: {
                    script10592(59441176, 1);
                    IF_SETONOP(callback(script13252), comp(907, 24));  // lobbyscreen_pane_playerinfo:motw_open_trh
                    break;
                }
                case 2:
                case 18: {
                    IF_SETOP(1, "Select", comp(907, 38));  // lobbyscreen_pane_playerinfo:special_gfx
                    IF_SETONOP(callback(script13252), comp(907, 38));  // lobbyscreen_pane_playerinfo:special_gfx
                    break;
                }
                case 3: {
                    IF_SETOP(1, "Select", comp(907, 38));  // lobbyscreen_pane_playerinfo:special_gfx
                    if ((struct_getparam(int3, 6395) == 1)) {
                        IF_SETONOP(callback(script3434, string1, string2), comp(907, 38));  // lobbyscreen_pane_playerinfo:special_gfx
                    } else {
                        IF_SETONOP(callback(script7397, string1, string2), comp(907, 38));  // lobbyscreen_pane_playerinfo:special_gfx
                    };
                    break;
                }
                case 9: {
                    IF_SETOP(1, "Select", comp(907, 38));  // lobbyscreen_pane_playerinfo:special_gfx
                    IF_SETONOP(callback(script2828, string3), comp(907, 38));  // lobbyscreen_pane_playerinfo:special_gfx
                    break;
                }
                case 4: {
                    IF_SETOP(1, "Select", comp(907, 38));  // lobbyscreen_pane_playerinfo:special_gfx
                    IF_SETONOP(callback(script13252), comp(907, 38));  // lobbyscreen_pane_playerinfo:special_gfx
                    break;
                }
                case 5: {
                    script10592(59441177, 1);
                    IF_SETONOP(callback(script13252), comp(907, 25));  // lobbyscreen_pane_playerinfo:motw_open_tle
                    break;
                }
                case 7: {
                    IF_SETOP(1, "Select", comp(907, 38));  // lobbyscreen_pane_playerinfo:special_gfx
                    break;
                }
                case 8: {
                    script10592(59441178, 1);
                    break;
                }
                case 10: {
                    script10592(59441181, 1);
                    IF_SETONOP(callback(script13252), comp(907, 29));  // lobbyscreen_pane_playerinfo:motw_open_managebonds
                    break;
                }
                case 12: {
                    script10592(59441182, 1);
                    IF_SETONOP(callback(script13252), comp(907, 30));  // lobbyscreen_pane_playerinfo:motw_open_bp3
                    break;
                }
                case 13: {
                    if ((PLATFORMTYPE() != 0)) {
                        if ((PLATFORMTYPE() != 5)) {
                            script10592(59441183, 1);
                            IF_SETONOP(callback(script13252), comp(907, 31));  // lobbyscreen_pane_playerinfo:motw_open_mtxspotlight
                        } else {
                            IF_SETOP(1, "Select", comp(907, 38));  // lobbyscreen_pane_playerinfo:special_gfx
                            IF_SETONOP(callback(script15228, 19), comp(907, 38));  // lobbyscreen_pane_playerinfo:special_gfx
                        };
                    } else {
                        IF_SETOP(1, "Select", comp(907, 38));  // lobbyscreen_pane_playerinfo:special_gfx
                        IF_SETONOP(callback(script15228, 19), comp(907, 38));  // lobbyscreen_pane_playerinfo:special_gfx
                    };
                    break;
                }
                case 14: {
                    script10592(59441183, 1);
                    IF_SETONOP(callback(script13252), comp(907, 31));  // lobbyscreen_pane_playerinfo:motw_open_mtxspotlight
                    break;
                }
                case 19: {
                    script10592(59441184, 1);
                    IF_SETONOP(callback(script13252), comp(907, 32));  // lobbyscreen_pane_playerinfo:motw_open_mobile_shop
                    break;
                }
                case 15: {
                    script10592(59441185, 1);
                    break;
                }
                case 11: {
                    script10592(59441175, 1);
                    IF_SETONOP(callback(script13252), comp(907, 23));  // lobbyscreen_pane_playerinfo:motw_latestcontent
                    break;
                }
            };
        } else if ((RANDOM(2) == 0)) {
            if (((varplayer_6601 >= 7924) || (varbitplayer_48641 == 0))) {
                if ((varplayer_6601 > 0)) {
                    while ((int5 < int1)) {
                        int3 = enum_getvalue(0, 73, 7783 as cs2enum, int5);
                        if ((script17266(int3) == 1)) {
                            switch (int3) {
                                case 35237: {
                                    int4 = int3;
                                    break;
                                }
                            };
                            pop_array(int6, int3);
                            int6 = (int6 + 1);
                        };
                        int5 = (int5 + 1);
                    };
                };
                if ((int4 != -1)) {
                    int3 = int4;
                } else if ((int6 == 0)) {
                    int3 = enum_getvalue(0, 73, 7783 as cs2enum, -1);
                    if ((int3 == 34505 as struct)) {
                        int3 = enum_getvalue(0, 73, 8300, MODULO(varplayer_6601, int2));
                        string4 = "Featured Content";
                    };
                } else {
                    int3 = push_array(RANDOM(int6));
                };
                switch (MAP_LANG()) {
                    case 1: {
                        string2 = struct_getparam(int3, 6962);
                        string3 = struct_getparam(int3, 5558);
                        string1 = struct_getparam(int3, 7961);
                        break;
                    }
                    case 2: {
                        string2 = struct_getparam(int3, 6963);
                        string3 = struct_getparam(int3, 7892);
                        string1 = struct_getparam(int3, 7962);
                        break;
                    }
                    case 3: {
                        string2 = struct_getparam(int3, 6964);
                        string3 = struct_getparam(int3, 7893);
                        string1 = struct_getparam(int3, 7963);
                        break;
                    }
                };
                if ((STRING_LENGTH(string2) == 0)) {
                    string2 = struct_getparam(int3, 6394);
                };
                if ((STRING_LENGTH(string3) == 0)) {
                    string3 = struct_getparam(int3, 65);
                };
                if ((STRING_LENGTH(string1) == 0)) {
                    string1 = struct_getparam(int3, 6393);
                };
                if ((STRING_LENGTH(struct_getparam(int3, 6391)) > 0)) {
                    string4 = struct_getparam(int3, 6391);
                };
                if ((STRING_LENGTH(string4) > 0)) {
                    IF_SETTEXT(string4, comp(907, 18));  // lobbyscreen_pane_playerinfo:main_banner_title_text
                };
                switch (MAP_LANG()) {
                    case 0: {
                        int5 = 1;
                        if ((struct_getparam(int3, 9361) != -1)) {
                            int5 = (int5 + 1);
                            if ((struct_getparam(int3, 9362) != -1)) {
                                int5 = (int5 + 1);
                                if ((struct_getparam(int3, 9363) != -1)) {
                                    int5 = (int5 + 1);
                                };
                            };
                        };
                        switch (RANDOM(int5)) {
                            case 0: {
                                IF_SETGRAPHIC(script19254(int3, 0), comp(907, 38));  // lobbyscreen_pane_playerinfo:special_gfx
                                break;
                            }
                            case 1: {
                                IF_SETGRAPHIC(struct_getparam(int3, 9361), comp(907, 38));  // lobbyscreen_pane_playerinfo:special_gfx
                                break;
                            }
                            case 2: {
                                IF_SETGRAPHIC(struct_getparam(int3, 9362), comp(907, 38));  // lobbyscreen_pane_playerinfo:special_gfx
                                break;
                            }
                            case 3: {
                                IF_SETGRAPHIC(struct_getparam(int3, 9363), comp(907, 38));  // lobbyscreen_pane_playerinfo:special_gfx
                                break;
                            }
                        };
                        break;
                    }
                    default: {
                        IF_SETGRAPHIC(script19254(int3, MAP_LANG()), comp(907, 38));  // lobbyscreen_pane_playerinfo:special_gfx
                        break;
                    }
                };
                IF_SETTEXT(string4, comp(907, 18));  // lobbyscreen_pane_playerinfo:main_banner_title_text
                script10593(1);
                switch (struct_getparam(int3, 6392)) {
                    case 1: {
                        script10592(59441176, 1);
                        IF_SETONOP(callback(script13252), comp(907, 24));  // lobbyscreen_pane_playerinfo:motw_open_trh
                        break;
                    }
                    case 2:
                    case 18: {
                        IF_SETOP(1, "Select", comp(907, 38));  // lobbyscreen_pane_playerinfo:special_gfx
                        IF_SETONOP(callback(script13252), comp(907, 38));  // lobbyscreen_pane_playerinfo:special_gfx
                        break;
                    }
                    case 3: {
                        IF_SETOP(1, "Select", comp(907, 38));  // lobbyscreen_pane_playerinfo:special_gfx
                        if ((struct_getparam(int3, 6395) == 1)) {
                            IF_SETONOP(callback(script3434, string1, string2), comp(907, 38));  // lobbyscreen_pane_playerinfo:special_gfx
                        } else {
                            IF_SETONOP(callback(script7397, string1, string2), comp(907, 38));  // lobbyscreen_pane_playerinfo:special_gfx
                        };
                        break;
                    }
                    case 9: {
                        IF_SETOP(1, "Select", comp(907, 38));  // lobbyscreen_pane_playerinfo:special_gfx
                        IF_SETONOP(callback(script2828, string3), comp(907, 38));  // lobbyscreen_pane_playerinfo:special_gfx
                        break;
                    }
                    case 4: {
                        IF_SETOP(1, "Select", comp(907, 38));  // lobbyscreen_pane_playerinfo:special_gfx
                        IF_SETONOP(callback(script13252), comp(907, 38));  // lobbyscreen_pane_playerinfo:special_gfx
                        break;
                    }
                    case 5: {
                        script10592(59441177, 1);
                        IF_SETONOP(callback(script13252), comp(907, 25));  // lobbyscreen_pane_playerinfo:motw_open_tle
                        break;
                    }
                    case 7: {
                        IF_SETOP(1, "Select", comp(907, 38));  // lobbyscreen_pane_playerinfo:special_gfx
                        break;
                    }
                    case 8: {
                        script10592(59441178, 1);
                        break;
                    }
                    case 10: {
                        script10592(59441181, 1);
                        IF_SETONOP(callback(script13252), comp(907, 29));  // lobbyscreen_pane_playerinfo:motw_open_managebonds
                        break;
                    }
                    case 12: {
                        script10592(59441182, 1);
                        IF_SETONOP(callback(script13252), comp(907, 30));  // lobbyscreen_pane_playerinfo:motw_open_bp3
                        break;
                    }
                    case 13: {
                        if ((PLATFORMTYPE() != 0)) {
                            if ((PLATFORMTYPE() != 5)) {
                                script10592(59441183, 1);
                                IF_SETONOP(callback(script13252), comp(907, 31));  // lobbyscreen_pane_playerinfo:motw_open_mtxspotlight
                            } else {
                                IF_SETOP(1, "Select", comp(907, 38));  // lobbyscreen_pane_playerinfo:special_gfx
                                IF_SETONOP(callback(script15228, 19), comp(907, 38));  // lobbyscreen_pane_playerinfo:special_gfx
                            };
                        } else {
                            IF_SETOP(1, "Select", comp(907, 38));  // lobbyscreen_pane_playerinfo:special_gfx
                            IF_SETONOP(callback(script15228, 19), comp(907, 38));  // lobbyscreen_pane_playerinfo:special_gfx
                        };
                        break;
                    }
                    case 14: {
                        script10592(59441183, 1);
                        IF_SETONOP(callback(script13252), comp(907, 31));  // lobbyscreen_pane_playerinfo:motw_open_mtxspotlight
                        break;
                    }
                    case 19: {
                        script10592(59441184, 1);
                        IF_SETONOP(callback(script13252), comp(907, 32));  // lobbyscreen_pane_playerinfo:motw_open_mobile_shop
                        break;
                    }
                    case 15: {
                        script10592(59441185, 1);
                        break;
                    }
                    case 11: {
                        script10592(59441175, 1);
                        IF_SETONOP(callback(script13252), comp(907, 23));  // lobbyscreen_pane_playerinfo:motw_latestcontent
                        break;
                    }
                };
            } else {
                int11 = ((DATE_MINUTES_FROMRUNEDAY(8829) + 720) - 1);
                script3568(59441191, 59375627, int11, DATE_MINUTES(), -1, -1, 0, 0);
                IF_SETONTIMER(callback(script12275, 59441191, 59375627, int11, DATE_MINUTES(), -1, -1, 0, 0), comp(906, 11));  // lobbyscreen:bonus_xp_counter
            };
        } else if ((varbitplayer_48641 == 0)) {
            if ((varplayer_6601 > 0)) {
                while ((int5 < int1)) {
                    int3 = enum_getvalue(0, 73, 7783 as cs2enum, int5);
                    if ((script17266(int3) == 1)) {
                        switch (int3) {
                            case 35237: {
                                int4 = int3;
                                break;
                            }
                        };
                        pop_array(int6, int3);
                        int6 = (int6 + 1);
                    };
                    int5 = (int5 + 1);
                };
            };
            if ((int4 != -1)) {
                int3 = int4;
            } else if ((int6 == 0)) {
                int3 = enum_getvalue(0, 73, 7783 as cs2enum, -1);
                if ((int3 == 34505 as struct)) {
                    int3 = enum_getvalue(0, 73, 8300, MODULO(varplayer_6601, int2));
                    string4 = "Featured Content";
                };
            } else {
                int3 = push_array(RANDOM(int6));
            };
            switch (MAP_LANG()) {
                case 1: {
                    string2 = struct_getparam(int3, 6962);
                    string3 = struct_getparam(int3, 5558);
                    string1 = struct_getparam(int3, 7961);
                    break;
                }
                case 2: {
                    string2 = struct_getparam(int3, 6963);
                    string3 = struct_getparam(int3, 7892);
                    string1 = struct_getparam(int3, 7962);
                    break;
                }
                case 3: {
                    string2 = struct_getparam(int3, 6964);
                    string3 = struct_getparam(int3, 7893);
                    string1 = struct_getparam(int3, 7963);
                    break;
                }
            };
            if ((STRING_LENGTH(string2) == 0)) {
                string2 = struct_getparam(int3, 6394);
            };
            if ((STRING_LENGTH(string3) == 0)) {
                string3 = struct_getparam(int3, 65);
            };
            if ((STRING_LENGTH(string1) == 0)) {
                string1 = struct_getparam(int3, 6393);
            };
            if ((STRING_LENGTH(struct_getparam(int3, 6391)) > 0)) {
                string4 = struct_getparam(int3, 6391);
            };
            if ((STRING_LENGTH(string4) > 0)) {
                IF_SETTEXT(string4, comp(907, 18));  // lobbyscreen_pane_playerinfo:main_banner_title_text
            };
            switch (MAP_LANG()) {
                case 0: {
                    int5 = 1;
                    if ((struct_getparam(int3, 9361) != -1)) {
                        int5 = (int5 + 1);
                        if ((struct_getparam(int3, 9362) != -1)) {
                            int5 = (int5 + 1);
                            if ((struct_getparam(int3, 9363) != -1)) {
                                int5 = (int5 + 1);
                            };
                        };
                    };
                    switch (RANDOM(int5)) {
                        case 0: {
                            IF_SETGRAPHIC(script19254(int3, 0), comp(907, 38));  // lobbyscreen_pane_playerinfo:special_gfx
                            break;
                        }
                        case 1: {
                            IF_SETGRAPHIC(struct_getparam(int3, 9361), comp(907, 38));  // lobbyscreen_pane_playerinfo:special_gfx
                            break;
                        }
                        case 2: {
                            IF_SETGRAPHIC(struct_getparam(int3, 9362), comp(907, 38));  // lobbyscreen_pane_playerinfo:special_gfx
                            break;
                        }
                        case 3: {
                            IF_SETGRAPHIC(struct_getparam(int3, 9363), comp(907, 38));  // lobbyscreen_pane_playerinfo:special_gfx
                            break;
                        }
                    };
                    break;
                }
                default: {
                    IF_SETGRAPHIC(script19254(int3, MAP_LANG()), comp(907, 38));  // lobbyscreen_pane_playerinfo:special_gfx
                    break;
                }
            };
            IF_SETTEXT(string4, comp(907, 18));  // lobbyscreen_pane_playerinfo:main_banner_title_text
            script10593(1);
            switch (struct_getparam(int3, 6392)) {
                case 1: {
                    script10592(59441176, 1);
                    IF_SETONOP(callback(script13252), comp(907, 24));  // lobbyscreen_pane_playerinfo:motw_open_trh
                    break;
                }
                case 2:
                case 18: {
                    IF_SETOP(1, "Select", comp(907, 38));  // lobbyscreen_pane_playerinfo:special_gfx
                    IF_SETONOP(callback(script13252), comp(907, 38));  // lobbyscreen_pane_playerinfo:special_gfx
                    break;
                }
                case 3: {
                    IF_SETOP(1, "Select", comp(907, 38));  // lobbyscreen_pane_playerinfo:special_gfx
                    if ((struct_getparam(int3, 6395) == 1)) {
                        IF_SETONOP(callback(script3434, string1, string2), comp(907, 38));  // lobbyscreen_pane_playerinfo:special_gfx
                    } else {
                        IF_SETONOP(callback(script7397, string1, string2), comp(907, 38));  // lobbyscreen_pane_playerinfo:special_gfx
                    };
                    break;
                }
                case 9: {
                    IF_SETOP(1, "Select", comp(907, 38));  // lobbyscreen_pane_playerinfo:special_gfx
                    IF_SETONOP(callback(script2828, string3), comp(907, 38));  // lobbyscreen_pane_playerinfo:special_gfx
                    break;
                }
                case 4: {
                    IF_SETOP(1, "Select", comp(907, 38));  // lobbyscreen_pane_playerinfo:special_gfx
                    IF_SETONOP(callback(script13252), comp(907, 38));  // lobbyscreen_pane_playerinfo:special_gfx
                    break;
                }
                case 5: {
                    script10592(59441177, 1);
                    IF_SETONOP(callback(script13252), comp(907, 25));  // lobbyscreen_pane_playerinfo:motw_open_tle
                    break;
                }
                case 7: {
                    IF_SETOP(1, "Select", comp(907, 38));  // lobbyscreen_pane_playerinfo:special_gfx
                    break;
                }
                case 8: {
                    script10592(59441178, 1);
                    break;
                }
                case 10: {
                    script10592(59441181, 1);
                    IF_SETONOP(callback(script13252), comp(907, 29));  // lobbyscreen_pane_playerinfo:motw_open_managebonds
                    break;
                }
                case 12: {
                    script10592(59441182, 1);
                    IF_SETONOP(callback(script13252), comp(907, 30));  // lobbyscreen_pane_playerinfo:motw_open_bp3
                    break;
                }
                case 13: {
                    if ((PLATFORMTYPE() != 0)) {
                        if ((PLATFORMTYPE() != 5)) {
                            script10592(59441183, 1);
                            IF_SETONOP(callback(script13252), comp(907, 31));  // lobbyscreen_pane_playerinfo:motw_open_mtxspotlight
                        } else {
                            IF_SETOP(1, "Select", comp(907, 38));  // lobbyscreen_pane_playerinfo:special_gfx
                            IF_SETONOP(callback(script15228, 19), comp(907, 38));  // lobbyscreen_pane_playerinfo:special_gfx
                        };
                    } else {
                        IF_SETOP(1, "Select", comp(907, 38));  // lobbyscreen_pane_playerinfo:special_gfx
                        IF_SETONOP(callback(script15228, 19), comp(907, 38));  // lobbyscreen_pane_playerinfo:special_gfx
                    };
                    break;
                }
                case 14: {
                    script10592(59441183, 1);
                    IF_SETONOP(callback(script13252), comp(907, 31));  // lobbyscreen_pane_playerinfo:motw_open_mtxspotlight
                    break;
                }
                case 19: {
                    script10592(59441184, 1);
                    IF_SETONOP(callback(script13252), comp(907, 32));  // lobbyscreen_pane_playerinfo:motw_open_mobile_shop
                    break;
                }
                case 15: {
                    script10592(59441185, 1);
                    break;
                }
                case 11: {
                    script10592(59441175, 1);
                    IF_SETONOP(callback(script13252), comp(907, 23));  // lobbyscreen_pane_playerinfo:motw_latestcontent
                    break;
                }
            };
        } else {
            int11 = ((DATE_MINUTES_FROMRUNEDAY(8829) + 720) - 1);
            script3568(59441191, 59375627, int11, DATE_MINUTES(), -1, -1, 0, 0);
            IF_SETONTIMER(callback(script12275, 59441191, 59375627, int11, DATE_MINUTES(), -1, -1, 0, 0), comp(906, 11));  // lobbyscreen:bonus_xp_counter
        };
    } else if (((varplayer_6601 > 8829) || (varplayer_6601 < 7922))) {
        if ((varplayer_6601 > 0)) {
            while ((int5 < int1)) {
                int3 = enum_getvalue(0, 73, 7783 as cs2enum, int5);
                if ((script17266(int3) == 1)) {
                    switch (int3) {
                        case 35237: {
                            int4 = int3;
                            break;
                        }
                    };
                    pop_array(int6, int3);
                    int6 = (int6 + 1);
                };
                int5 = (int5 + 1);
            };
        };
        if ((int4 != -1)) {
            int3 = int4;
        } else if ((int6 == 0)) {
            int3 = enum_getvalue(0, 73, 7783 as cs2enum, -1);
            if ((int3 == 34505 as struct)) {
                int3 = enum_getvalue(0, 73, 8300, MODULO(varplayer_6601, int2));
                string4 = "Featured Content";
            };
        } else {
            int3 = push_array(RANDOM(int6));
        };
        switch (MAP_LANG()) {
            case 1: {
                string2 = struct_getparam(int3, 6962);
                string3 = struct_getparam(int3, 5558);
                string1 = struct_getparam(int3, 7961);
                break;
            }
            case 2: {
                string2 = struct_getparam(int3, 6963);
                string3 = struct_getparam(int3, 7892);
                string1 = struct_getparam(int3, 7962);
                break;
            }
            case 3: {
                string2 = struct_getparam(int3, 6964);
                string3 = struct_getparam(int3, 7893);
                string1 = struct_getparam(int3, 7963);
                break;
            }
        };
        if ((STRING_LENGTH(string2) == 0)) {
            string2 = struct_getparam(int3, 6394);
        };
        if ((STRING_LENGTH(string3) == 0)) {
            string3 = struct_getparam(int3, 65);
        };
        if ((STRING_LENGTH(string1) == 0)) {
            string1 = struct_getparam(int3, 6393);
        };
        if ((STRING_LENGTH(struct_getparam(int3, 6391)) > 0)) {
            string4 = struct_getparam(int3, 6391);
        };
        if ((STRING_LENGTH(string4) > 0)) {
            IF_SETTEXT(string4, comp(907, 18));  // lobbyscreen_pane_playerinfo:main_banner_title_text
        };
        switch (MAP_LANG()) {
            case 0: {
                int5 = 1;
                if ((struct_getparam(int3, 9361) != -1)) {
                    int5 = (int5 + 1);
                    if ((struct_getparam(int3, 9362) != -1)) {
                        int5 = (int5 + 1);
                        if ((struct_getparam(int3, 9363) != -1)) {
                            int5 = (int5 + 1);
                        };
                    };
                };
                switch (RANDOM(int5)) {
                    case 0: {
                        IF_SETGRAPHIC(script19254(int3, 0), comp(907, 38));  // lobbyscreen_pane_playerinfo:special_gfx
                        break;
                    }
                    case 1: {
                        IF_SETGRAPHIC(struct_getparam(int3, 9361), comp(907, 38));  // lobbyscreen_pane_playerinfo:special_gfx
                        break;
                    }
                    case 2: {
                        IF_SETGRAPHIC(struct_getparam(int3, 9362), comp(907, 38));  // lobbyscreen_pane_playerinfo:special_gfx
                        break;
                    }
                    case 3: {
                        IF_SETGRAPHIC(struct_getparam(int3, 9363), comp(907, 38));  // lobbyscreen_pane_playerinfo:special_gfx
                        break;
                    }
                };
                break;
            }
            default: {
                IF_SETGRAPHIC(script19254(int3, MAP_LANG()), comp(907, 38));  // lobbyscreen_pane_playerinfo:special_gfx
                break;
            }
        };
        IF_SETTEXT(string4, comp(907, 18));  // lobbyscreen_pane_playerinfo:main_banner_title_text
        script10593(1);
        switch (struct_getparam(int3, 6392)) {
            case 1: {
                script10592(59441176, 1);
                IF_SETONOP(callback(script13252), comp(907, 24));  // lobbyscreen_pane_playerinfo:motw_open_trh
                break;
            }
            case 2:
            case 18: {
                IF_SETOP(1, "Select", comp(907, 38));  // lobbyscreen_pane_playerinfo:special_gfx
                IF_SETONOP(callback(script13252), comp(907, 38));  // lobbyscreen_pane_playerinfo:special_gfx
                break;
            }
            case 3: {
                IF_SETOP(1, "Select", comp(907, 38));  // lobbyscreen_pane_playerinfo:special_gfx
                if ((struct_getparam(int3, 6395) == 1)) {
                    IF_SETONOP(callback(script3434, string1, string2), comp(907, 38));  // lobbyscreen_pane_playerinfo:special_gfx
                } else {
                    IF_SETONOP(callback(script7397, string1, string2), comp(907, 38));  // lobbyscreen_pane_playerinfo:special_gfx
                };
                break;
            }
            case 9: {
                IF_SETOP(1, "Select", comp(907, 38));  // lobbyscreen_pane_playerinfo:special_gfx
                IF_SETONOP(callback(script2828, string3), comp(907, 38));  // lobbyscreen_pane_playerinfo:special_gfx
                break;
            }
            case 4: {
                IF_SETOP(1, "Select", comp(907, 38));  // lobbyscreen_pane_playerinfo:special_gfx
                IF_SETONOP(callback(script13252), comp(907, 38));  // lobbyscreen_pane_playerinfo:special_gfx
                break;
            }
            case 5: {
                script10592(59441177, 1);
                IF_SETONOP(callback(script13252), comp(907, 25));  // lobbyscreen_pane_playerinfo:motw_open_tle
                break;
            }
            case 7: {
                IF_SETOP(1, "Select", comp(907, 38));  // lobbyscreen_pane_playerinfo:special_gfx
                break;
            }
            case 8: {
                script10592(59441178, 1);
                break;
            }
            case 10: {
                script10592(59441181, 1);
                IF_SETONOP(callback(script13252), comp(907, 29));  // lobbyscreen_pane_playerinfo:motw_open_managebonds
                break;
            }
            case 12: {
                script10592(59441182, 1);
                IF_SETONOP(callback(script13252), comp(907, 30));  // lobbyscreen_pane_playerinfo:motw_open_bp3
                break;
            }
            case 13: {
                if ((PLATFORMTYPE() != 0)) {
                    if ((PLATFORMTYPE() != 5)) {
                        script10592(59441183, 1);
                        IF_SETONOP(callback(script13252), comp(907, 31));  // lobbyscreen_pane_playerinfo:motw_open_mtxspotlight
                    } else {
                        IF_SETOP(1, "Select", comp(907, 38));  // lobbyscreen_pane_playerinfo:special_gfx
                        IF_SETONOP(callback(script15228, 19), comp(907, 38));  // lobbyscreen_pane_playerinfo:special_gfx
                    };
                } else {
                    IF_SETOP(1, "Select", comp(907, 38));  // lobbyscreen_pane_playerinfo:special_gfx
                    IF_SETONOP(callback(script15228, 19), comp(907, 38));  // lobbyscreen_pane_playerinfo:special_gfx
                };
                break;
            }
            case 14: {
                script10592(59441183, 1);
                IF_SETONOP(callback(script13252), comp(907, 31));  // lobbyscreen_pane_playerinfo:motw_open_mtxspotlight
                break;
            }
            case 19: {
                script10592(59441184, 1);
                IF_SETONOP(callback(script13252), comp(907, 32));  // lobbyscreen_pane_playerinfo:motw_open_mobile_shop
                break;
            }
            case 15: {
                script10592(59441185, 1);
                break;
            }
            case 11: {
                script10592(59441175, 1);
                IF_SETONOP(callback(script13252), comp(907, 23));  // lobbyscreen_pane_playerinfo:motw_latestcontent
                break;
            }
        };
    } else if ((RANDOM(2) == 0)) {
        if (((varplayer_6601 >= 7924) || (varbitplayer_48641 == 0))) {
            if ((varplayer_6601 > 0)) {
                while ((int5 < int1)) {
                    int3 = enum_getvalue(0, 73, 7783 as cs2enum, int5);
                    if ((script17266(int3) == 1)) {
                        switch (int3) {
                            case 35237: {
                                int4 = int3;
                                break;
                            }
                        };
                        pop_array(int6, int3);
                        int6 = (int6 + 1);
                    };
                    int5 = (int5 + 1);
                };
            };
            if ((int4 != -1)) {
                int3 = int4;
            } else if ((int6 == 0)) {
                int3 = enum_getvalue(0, 73, 7783 as cs2enum, -1);
                if ((int3 == 34505 as struct)) {
                    int3 = enum_getvalue(0, 73, 8300, MODULO(varplayer_6601, int2));
                    string4 = "Featured Content";
                };
            } else {
                int3 = push_array(RANDOM(int6));
            };
            switch (MAP_LANG()) {
                case 1: {
                    string2 = struct_getparam(int3, 6962);
                    string3 = struct_getparam(int3, 5558);
                    string1 = struct_getparam(int3, 7961);
                    break;
                }
                case 2: {
                    string2 = struct_getparam(int3, 6963);
                    string3 = struct_getparam(int3, 7892);
                    string1 = struct_getparam(int3, 7962);
                    break;
                }
                case 3: {
                    string2 = struct_getparam(int3, 6964);
                    string3 = struct_getparam(int3, 7893);
                    string1 = struct_getparam(int3, 7963);
                    break;
                }
            };
            if ((STRING_LENGTH(string2) == 0)) {
                string2 = struct_getparam(int3, 6394);
            };
            if ((STRING_LENGTH(string3) == 0)) {
                string3 = struct_getparam(int3, 65);
            };
            if ((STRING_LENGTH(string1) == 0)) {
                string1 = struct_getparam(int3, 6393);
            };
            if ((STRING_LENGTH(struct_getparam(int3, 6391)) > 0)) {
                string4 = struct_getparam(int3, 6391);
            };
            if ((STRING_LENGTH(string4) > 0)) {
                IF_SETTEXT(string4, comp(907, 18));  // lobbyscreen_pane_playerinfo:main_banner_title_text
            };
            switch (MAP_LANG()) {
                case 0: {
                    int5 = 1;
                    if ((struct_getparam(int3, 9361) != -1)) {
                        int5 = (int5 + 1);
                        if ((struct_getparam(int3, 9362) != -1)) {
                            int5 = (int5 + 1);
                            if ((struct_getparam(int3, 9363) != -1)) {
                                int5 = (int5 + 1);
                            };
                        };
                    };
                    switch (RANDOM(int5)) {
                        case 0: {
                            IF_SETGRAPHIC(script19254(int3, 0), comp(907, 38));  // lobbyscreen_pane_playerinfo:special_gfx
                            break;
                        }
                        case 1: {
                            IF_SETGRAPHIC(struct_getparam(int3, 9361), comp(907, 38));  // lobbyscreen_pane_playerinfo:special_gfx
                            break;
                        }
                        case 2: {
                            IF_SETGRAPHIC(struct_getparam(int3, 9362), comp(907, 38));  // lobbyscreen_pane_playerinfo:special_gfx
                            break;
                        }
                        case 3: {
                            IF_SETGRAPHIC(struct_getparam(int3, 9363), comp(907, 38));  // lobbyscreen_pane_playerinfo:special_gfx
                            break;
                        }
                    };
                    break;
                }
                default: {
                    IF_SETGRAPHIC(script19254(int3, MAP_LANG()), comp(907, 38));  // lobbyscreen_pane_playerinfo:special_gfx
                    break;
                }
            };
            IF_SETTEXT(string4, comp(907, 18));  // lobbyscreen_pane_playerinfo:main_banner_title_text
            script10593(1);
            switch (struct_getparam(int3, 6392)) {
                case 1: {
                    script10592(59441176, 1);
                    IF_SETONOP(callback(script13252), comp(907, 24));  // lobbyscreen_pane_playerinfo:motw_open_trh
                    break;
                }
                case 2:
                case 18: {
                    IF_SETOP(1, "Select", comp(907, 38));  // lobbyscreen_pane_playerinfo:special_gfx
                    IF_SETONOP(callback(script13252), comp(907, 38));  // lobbyscreen_pane_playerinfo:special_gfx
                    break;
                }
                case 3: {
                    IF_SETOP(1, "Select", comp(907, 38));  // lobbyscreen_pane_playerinfo:special_gfx
                    if ((struct_getparam(int3, 6395) == 1)) {
                        IF_SETONOP(callback(script3434, string1, string2), comp(907, 38));  // lobbyscreen_pane_playerinfo:special_gfx
                    } else {
                        IF_SETONOP(callback(script7397, string1, string2), comp(907, 38));  // lobbyscreen_pane_playerinfo:special_gfx
                    };
                    break;
                }
                case 9: {
                    IF_SETOP(1, "Select", comp(907, 38));  // lobbyscreen_pane_playerinfo:special_gfx
                    IF_SETONOP(callback(script2828, string3), comp(907, 38));  // lobbyscreen_pane_playerinfo:special_gfx
                    break;
                }
                case 4: {
                    IF_SETOP(1, "Select", comp(907, 38));  // lobbyscreen_pane_playerinfo:special_gfx
                    IF_SETONOP(callback(script13252), comp(907, 38));  // lobbyscreen_pane_playerinfo:special_gfx
                    break;
                }
                case 5: {
                    script10592(59441177, 1);
                    IF_SETONOP(callback(script13252), comp(907, 25));  // lobbyscreen_pane_playerinfo:motw_open_tle
                    break;
                }
                case 7: {
                    IF_SETOP(1, "Select", comp(907, 38));  // lobbyscreen_pane_playerinfo:special_gfx
                    break;
                }
                case 8: {
                    script10592(59441178, 1);
                    break;
                }
                case 10: {
                    script10592(59441181, 1);
                    IF_SETONOP(callback(script13252), comp(907, 29));  // lobbyscreen_pane_playerinfo:motw_open_managebonds
                    break;
                }
                case 12: {
                    script10592(59441182, 1);
                    IF_SETONOP(callback(script13252), comp(907, 30));  // lobbyscreen_pane_playerinfo:motw_open_bp3
                    break;
                }
                case 13: {
                    if ((PLATFORMTYPE() != 0)) {
                        if ((PLATFORMTYPE() != 5)) {
                            script10592(59441183, 1);
                            IF_SETONOP(callback(script13252), comp(907, 31));  // lobbyscreen_pane_playerinfo:motw_open_mtxspotlight
                        } else {
                            IF_SETOP(1, "Select", comp(907, 38));  // lobbyscreen_pane_playerinfo:special_gfx
                            IF_SETONOP(callback(script15228, 19), comp(907, 38));  // lobbyscreen_pane_playerinfo:special_gfx
                        };
                    } else {
                        IF_SETOP(1, "Select", comp(907, 38));  // lobbyscreen_pane_playerinfo:special_gfx
                        IF_SETONOP(callback(script15228, 19), comp(907, 38));  // lobbyscreen_pane_playerinfo:special_gfx
                    };
                    break;
                }
                case 14: {
                    script10592(59441183, 1);
                    IF_SETONOP(callback(script13252), comp(907, 31));  // lobbyscreen_pane_playerinfo:motw_open_mtxspotlight
                    break;
                }
                case 19: {
                    script10592(59441184, 1);
                    IF_SETONOP(callback(script13252), comp(907, 32));  // lobbyscreen_pane_playerinfo:motw_open_mobile_shop
                    break;
                }
                case 15: {
                    script10592(59441185, 1);
                    break;
                }
                case 11: {
                    script10592(59441175, 1);
                    IF_SETONOP(callback(script13252), comp(907, 23));  // lobbyscreen_pane_playerinfo:motw_latestcontent
                    break;
                }
            };
        } else {
            int11 = ((DATE_MINUTES_FROMRUNEDAY(8829) + 720) - 1);
            script3568(59441191, 59375627, int11, DATE_MINUTES(), -1, -1, 0, 0);
            IF_SETONTIMER(callback(script12275, 59441191, 59375627, int11, DATE_MINUTES(), -1, -1, 0, 0), comp(906, 11));  // lobbyscreen:bonus_xp_counter
        };
    } else if ((varbitplayer_48641 == 0)) {
        if ((varplayer_6601 > 0)) {
            while ((int5 < int1)) {
                int3 = enum_getvalue(0, 73, 7783 as cs2enum, int5);
                if ((script17266(int3) == 1)) {
                    switch (int3) {
                        case 35237: {
                            int4 = int3;
                            break;
                        }
                    };
                    pop_array(int6, int3);
                    int6 = (int6 + 1);
                };
                int5 = (int5 + 1);
            };
        };
        if ((int4 != -1)) {
            int3 = int4;
        } else if ((int6 == 0)) {
            int3 = enum_getvalue(0, 73, 7783 as cs2enum, -1);
            if ((int3 == 34505 as struct)) {
                int3 = enum_getvalue(0, 73, 8300, MODULO(varplayer_6601, int2));
                string4 = "Featured Content";
            };
        } else {
            int3 = push_array(RANDOM(int6));
        };
        switch (MAP_LANG()) {
            case 1: {
                string2 = struct_getparam(int3, 6962);
                string3 = struct_getparam(int3, 5558);
                string1 = struct_getparam(int3, 7961);
                break;
            }
            case 2: {
                string2 = struct_getparam(int3, 6963);
                string3 = struct_getparam(int3, 7892);
                string1 = struct_getparam(int3, 7962);
                break;
            }
            case 3: {
                string2 = struct_getparam(int3, 6964);
                string3 = struct_getparam(int3, 7893);
                string1 = struct_getparam(int3, 7963);
                break;
            }
        };
        if ((STRING_LENGTH(string2) == 0)) {
            string2 = struct_getparam(int3, 6394);
        };
        if ((STRING_LENGTH(string3) == 0)) {
            string3 = struct_getparam(int3, 65);
        };
        if ((STRING_LENGTH(string1) == 0)) {
            string1 = struct_getparam(int3, 6393);
        };
        if ((STRING_LENGTH(struct_getparam(int3, 6391)) > 0)) {
            string4 = struct_getparam(int3, 6391);
        };
        if ((STRING_LENGTH(string4) > 0)) {
            IF_SETTEXT(string4, comp(907, 18));  // lobbyscreen_pane_playerinfo:main_banner_title_text
        };
        switch (MAP_LANG()) {
            case 0: {
                int5 = 1;
                if ((struct_getparam(int3, 9361) != -1)) {
                    int5 = (int5 + 1);
                    if ((struct_getparam(int3, 9362) != -1)) {
                        int5 = (int5 + 1);
                        if ((struct_getparam(int3, 9363) != -1)) {
                            int5 = (int5 + 1);
                        };
                    };
                };
                switch (RANDOM(int5)) {
                    case 0: {
                        IF_SETGRAPHIC(script19254(int3, 0), comp(907, 38));  // lobbyscreen_pane_playerinfo:special_gfx
                        break;
                    }
                    case 1: {
                        IF_SETGRAPHIC(struct_getparam(int3, 9361), comp(907, 38));  // lobbyscreen_pane_playerinfo:special_gfx
                        break;
                    }
                    case 2: {
                        IF_SETGRAPHIC(struct_getparam(int3, 9362), comp(907, 38));  // lobbyscreen_pane_playerinfo:special_gfx
                        break;
                    }
                    case 3: {
                        IF_SETGRAPHIC(struct_getparam(int3, 9363), comp(907, 38));  // lobbyscreen_pane_playerinfo:special_gfx
                        break;
                    }
                };
                break;
            }
            default: {
                IF_SETGRAPHIC(script19254(int3, MAP_LANG()), comp(907, 38));  // lobbyscreen_pane_playerinfo:special_gfx
                break;
            }
        };
        IF_SETTEXT(string4, comp(907, 18));  // lobbyscreen_pane_playerinfo:main_banner_title_text
        script10593(1);
        switch (struct_getparam(int3, 6392)) {
            case 1: {
                script10592(59441176, 1);
                IF_SETONOP(callback(script13252), comp(907, 24));  // lobbyscreen_pane_playerinfo:motw_open_trh
                break;
            }
            case 2:
            case 18: {
                IF_SETOP(1, "Select", comp(907, 38));  // lobbyscreen_pane_playerinfo:special_gfx
                IF_SETONOP(callback(script13252), comp(907, 38));  // lobbyscreen_pane_playerinfo:special_gfx
                break;
            }
            case 3: {
                IF_SETOP(1, "Select", comp(907, 38));  // lobbyscreen_pane_playerinfo:special_gfx
                if ((struct_getparam(int3, 6395) == 1)) {
                    IF_SETONOP(callback(script3434, string1, string2), comp(907, 38));  // lobbyscreen_pane_playerinfo:special_gfx
                } else {
                    IF_SETONOP(callback(script7397, string1, string2), comp(907, 38));  // lobbyscreen_pane_playerinfo:special_gfx
                };
                break;
            }
            case 9: {
                IF_SETOP(1, "Select", comp(907, 38));  // lobbyscreen_pane_playerinfo:special_gfx
                IF_SETONOP(callback(script2828, string3), comp(907, 38));  // lobbyscreen_pane_playerinfo:special_gfx
                break;
            }
            case 4: {
                IF_SETOP(1, "Select", comp(907, 38));  // lobbyscreen_pane_playerinfo:special_gfx
                IF_SETONOP(callback(script13252), comp(907, 38));  // lobbyscreen_pane_playerinfo:special_gfx
                break;
            }
            case 5: {
                script10592(59441177, 1);
                IF_SETONOP(callback(script13252), comp(907, 25));  // lobbyscreen_pane_playerinfo:motw_open_tle
                break;
            }
            case 7: {
                IF_SETOP(1, "Select", comp(907, 38));  // lobbyscreen_pane_playerinfo:special_gfx
                break;
            }
            case 8: {
                script10592(59441178, 1);
                break;
            }
            case 10: {
                script10592(59441181, 1);
                IF_SETONOP(callback(script13252), comp(907, 29));  // lobbyscreen_pane_playerinfo:motw_open_managebonds
                break;
            }
            case 12: {
                script10592(59441182, 1);
                IF_SETONOP(callback(script13252), comp(907, 30));  // lobbyscreen_pane_playerinfo:motw_open_bp3
                break;
            }
            case 13: {
                if ((PLATFORMTYPE() != 0)) {
                    if ((PLATFORMTYPE() != 5)) {
                        script10592(59441183, 1);
                        IF_SETONOP(callback(script13252), comp(907, 31));  // lobbyscreen_pane_playerinfo:motw_open_mtxspotlight
                    } else {
                        IF_SETOP(1, "Select", comp(907, 38));  // lobbyscreen_pane_playerinfo:special_gfx
                        IF_SETONOP(callback(script15228, 19), comp(907, 38));  // lobbyscreen_pane_playerinfo:special_gfx
                    };
                } else {
                    IF_SETOP(1, "Select", comp(907, 38));  // lobbyscreen_pane_playerinfo:special_gfx
                    IF_SETONOP(callback(script15228, 19), comp(907, 38));  // lobbyscreen_pane_playerinfo:special_gfx
                };
                break;
            }
            case 14: {
                script10592(59441183, 1);
                IF_SETONOP(callback(script13252), comp(907, 31));  // lobbyscreen_pane_playerinfo:motw_open_mtxspotlight
                break;
            }
            case 19: {
                script10592(59441184, 1);
                IF_SETONOP(callback(script13252), comp(907, 32));  // lobbyscreen_pane_playerinfo:motw_open_mobile_shop
                break;
            }
            case 15: {
                script10592(59441185, 1);
                break;
            }
            case 11: {
                script10592(59441175, 1);
                IF_SETONOP(callback(script13252), comp(907, 23));  // lobbyscreen_pane_playerinfo:motw_latestcontent
                break;
            }
        };
    } else {
        int11 = ((DATE_MINUTES_FROMRUNEDAY(8829) + 720) - 1);
        script3568(59441191, 59375627, int11, DATE_MINUTES(), -1, -1, 0, 0);
        IF_SETONTIMER(callback(script12275, 59441191, 59375627, int11, DATE_MINUTES(), -1, -1, 0, 0), comp(906, 11));  // lobbyscreen:bonus_xp_counter
    };
    return;
}