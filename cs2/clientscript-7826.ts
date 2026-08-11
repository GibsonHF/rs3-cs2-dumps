//
function script7826(int0: number): void {
    var int1 = comp(-1, 65535);
    if ((int0 == 2)) {
        IF_SETSIZE(0, 80, 1, 1, comp(1419, 31));  // toplevel_v2_parent_suboverlay_high_scores:toplevel_v2_parent_suboverlay_hiscore_content_layer
        IF_SETSIZE(0, 80, 1, 0, comp(1419, 52));  // toplevel_v2_parent_suboverlay_high_scores:toplevel_v2_parent_suboverlay_footer_layer
        IF_SETTEXT("All Hiscores will be updated on log-in.<br>XP will only be tracked when the Illumination aura is active.", comp(1419, 57));  // toplevel_v2_parent_suboverlay_high_scores:info_text
    } else {
        IF_SETSIZE(0, 58, 1, 1, comp(1419, 31));  // toplevel_v2_parent_suboverlay_high_scores:toplevel_v2_parent_suboverlay_hiscore_content_layer
        IF_SETSIZE(0, 58, 1, 0, comp(1419, 52));  // toplevel_v2_parent_suboverlay_high_scores:toplevel_v2_parent_suboverlay_footer_layer
        IF_SETTEXT("All Hiscores will be updated on log-in.", comp(1419, 57));  // toplevel_v2_parent_suboverlay_high_scores:info_text
    };
    var int2 = IF_GETHEIGHT(comp(1419, 5));  // toplevel_v2_parent_suboverlay_high_scores:toplevel_v2_parent_suboverlay_table_layer
    if ((int0 == 0)) {
        IF_SETHIDE(false, comp(1419, 4));  // toplevel_v2_parent_suboverlay_high_scores:toplevel_v2_parent_suboverlay_scroll_bar
        if (((varclient_2820 + 47) < int2)) {
            while (((varclient_2820 + 47) < int2)) {
                switch (MODULO(varclient_2819, 2)) {
                    case 0: {
                        int1 = comp(1419, 41);  // toplevel_v2_parent_suboverlay_high_scores:toplevel_v2_parent_suboverlay_2_col1_layer
                        break;
                    }
                    case 1: {
                        int1 = comp(1419, 42);  // toplevel_v2_parent_suboverlay_high_scores:toplevel_v2_parent_suboverlay_2_col2_layer
                        break;
                    }
                };
                if ((MODULO((varclient_2820 / 47), 2) == 0)) {
                    script2996(int1, IF_GETNEXTSUBID(int1), 0, varclient_2820, 0, 0, 0, 47, 1, 0, 4128);
                } else {
                    script2996(int1, IF_GETNEXTSUBID(int1), 0, varclient_2820, 0, 0, 0, 47, 1, 0, 4127);
                };
                if ((varclient_2819 == 1)) {
                    varclient_2819 = 0;
                    varclient_2820 = (varclient_2820 + 48);
                } else {
                    varclient_2819 = (varclient_2819 + 1);
                };
            };
            IF_SETSCROLLSIZE(0, int2, comp(1419, 11));  // toplevel_v2_parent_suboverlay_high_scores:toplevel_v2_parent_suboverlay_hiscore_content_2_col
        } else {
            IF_SETSCROLLSIZE(0, (varclient_2820 + 48), comp(1419, 11));  // toplevel_v2_parent_suboverlay_high_scores:toplevel_v2_parent_suboverlay_hiscore_content_2_col
        };
        script7791(92995588, 92995595);
    } else if ((int0 == 1)) {
        IF_SETHIDE(true, comp(1419, 4));  // toplevel_v2_parent_suboverlay_high_scores:toplevel_v2_parent_suboverlay_scroll_bar
        int2 = IF_GETHEIGHT(comp(1419, 17));  // toplevel_v2_parent_suboverlay_high_scores:toplevel_v2_parent_suboverlay_rank_layer
        if (((varclient_2820 + 27) < int2)) {
            while (((varclient_2820 + 27) < int2)) {
                switch (MODULO(varclient_2819, 3)) {
                    case 0: {
                        int1 = comp(1419, 49);  // toplevel_v2_parent_suboverlay_high_scores:toplevel_v2_parent_suboverlay_3_col1_layer
                        break;
                    }
                    case 1: {
                        int1 = comp(1419, 50);  // toplevel_v2_parent_suboverlay_high_scores:toplevel_v2_parent_suboverlay_3_col2_layer
                        break;
                    }
                    case 2: {
                        int1 = comp(1419, 51);  // toplevel_v2_parent_suboverlay_high_scores:toplevel_v2_parent_suboverlay_3_col3_layer
                        break;
                    }
                };
                if ((MODULO((varclient_2820 / 26), 2) == 0)) {
                    script2996(int1, IF_GETNEXTSUBID(int1), 0, varclient_2820, 0, 0, 0, 26, 1, 0, 4128);
                } else {
                    script2996(int1, IF_GETNEXTSUBID(int1), 0, varclient_2820, 0, 0, 0, 26, 1, 0, 4127);
                };
                if ((varclient_2819 == 2)) {
                    varclient_2819 = 0;
                    varclient_2820 = (varclient_2820 + 27);
                } else {
                    varclient_2819 = (varclient_2819 + 1);
                };
            };
        };
    } else if ((int0 == 2)) {
        IF_SETHIDE(false, comp(1419, 4));  // toplevel_v2_parent_suboverlay_high_scores:toplevel_v2_parent_suboverlay_scroll_bar
        int2 = IF_GETHEIGHT(comp(1419, 75));  // toplevel_v2_parent_suboverlay_high_scores:toplevel_v2_parent_suboverlay_summer16_content_layer
        if (((varclient_2820 + 27) < int2)) {
            while (((varclient_2820 + 27) < int2)) {
                switch (MODULO(varclient_2819, 2)) {
                    case 0: {
                        int1 = comp(1419, 1);  // toplevel_v2_parent_suboverlay_high_scores:toplevel_v2_parent_suboverlay_summer16_col1_layer
                        break;
                    }
                    case 1: {
                        int1 = comp(1419, 2);  // toplevel_v2_parent_suboverlay_high_scores:toplevel_v2_parent_suboverlay_summer16_col2_layer
                        break;
                    }
                };
                if ((MODULO((varclient_2820 / 26), 2) == 0)) {
                    script2996(int1, IF_GETNEXTSUBID(int1), 0, varclient_2820, 0, 0, 0, 26, 1, 0, 4128);
                } else {
                    script2996(int1, IF_GETNEXTSUBID(int1), 0, varclient_2820, 0, 0, 0, 26, 1, 0, 4127);
                };
                if ((varclient_2819 == 1)) {
                    varclient_2819 = 0;
                    varclient_2820 = (varclient_2820 + 27);
                } else {
                    varclient_2819 = (varclient_2819 + 1);
                };
            };
            IF_SETSCROLLSIZE(0, (varclient_2820 + 27), comp(1419, 12));  // toplevel_v2_parent_suboverlay_high_scores:toplevel_v2_parent_suboverlay_hiscore_content_summer16
        } else {
            IF_SETSCROLLSIZE(0, (varclient_2820 + 27), comp(1419, 12));  // toplevel_v2_parent_suboverlay_high_scores:toplevel_v2_parent_suboverlay_hiscore_content_summer16
        };
        script7791(92995588, 92995596);
    };
    return;
}