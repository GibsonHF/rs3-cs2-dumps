//
function script8461(int0: number): [number, number] {
    var int1 = 0;
    var int2 = 94 as inv;
    var int3 = varplayer_715;
    var int4 = varplayer_3531;
    var int5 = varplayer_1039;
    var int6 = varplayer_1037;
    var int7 = varplayer_1038;
    var int8 = varplayer_11308;
    var int9 = varplayer_3561;
    var int10 = varplayer_717;
    var int11 = varbitplayer_43;
    var int12 = varplayer_3532;
    var int13 = varclient_2760;
    if ((int0 == 102170649)) {
        int1 = 1;
        int2 = 742 as inv;
        int3 = varplayer_4964;
        int4 = varplayer_4965;
        int5 = varplayer_4968;
        int6 = varplayer_4966;
        int7 = varplayer_4967;
        int8 = varplayer_11208;
        int9 = varplayer_4969;
        int10 = varplayer_4970;
        int11 = varbitplayer_26124;
        int12 = varplayer_4971;
    };
    var int14 = INV_GETOBJ(int2, 3);
    var int15 = INV_GETOBJ(int2, 5);
    var int16 = INV_GETOBJ(int2, 2);
    var int17 = INV_GETOBJ(int2, 9);
    var int18 = INV_GETOBJ(int2, 13);
    var int19 = int3;
    var int20 = int4;
    var int21 = 0;
    if ((item_getparam(int14, 2827) == 1)) {
        int21 = int5;
    } else if ((item_getparam(int14, 2825) == 1)) {
        int21 = int6;
    } else if ((item_getparam(int14, 2826) == 1)) {
        int21 = int7;
    } else if ((item_getparam(int14, 8898) == 1)) {
        int21 = int8;
    };
    var int22 = ((script7244(int14) + int9) - int21);
    var int23 = 0;
    var int24 = script7436(int14);
    var string0 = enum_getvalue(0, 36, 6744 as cs2enum, int10);
    var string1 = "Weapon";
    var string2 = enum_getvalue(0, 36, 6741, int24);
    var int25 = enum_getvalue(0, 73, 6740, int11);
    var string3 = `${script7653(script18545(varplayer_717, int14), 1, 1, 0, 1)}%`;
    var string4 = `${script7653(script17469(varplayer_717, int14), 1, 1, 0, 1)}%`;
    var int26 = SCALE(int13, 100, 50);
    var int27 = SCALE(enum_getvalue(0, 0, 7339, int26), 100, (100 + (40 / 2)));
    var int28 = 0;
    var int29 = 0;
    var int30 = 0;
    var int31 = 0;
    var int32 = 0;
    var int33 = 0;
    var int34 = 0;
    var int35 = 0;
    var int36 = 0;
    var int37 = -1;
    switch (script7241(int14)) {
        case 1: {
            int28 = MAX(0, MIN(10000, SCALE((SCALE(int22, int27, 100) * 60), 100, int6)));
            int29 = MAX(0, MIN(10000, SCALE((SCALE(int22, int27, 100) * 70), 100, int6)));
            int30 = MAX(0, MIN(10000, SCALE((SCALE(int22, int27, 100) * 50), 100, int6)));
            int32 = SCALE((100 + ((int24 - 4) * 25)), 100, SCALE(STAT(2 as stat), 100, 250));
            int34 = enum_getvalue(0, 0, 7338 as cs2enum, item_getparam(int14, 3267));
            if ((OC_WEARPOS(int14) > 0)) {
                if ((OC_WEARPOS2(int14) > 0)) {
                    int31 = (SCALE(item_getparam(int14, 641), 100, ((100 - 25) + SCALE(MIN(STAT(2 as stat), int34), int34, 25))) / 10);
                    int32 = SCALE(int32, 100, 150);
                } else {
                    int31 = (SCALE(item_getparam(int14, 641), 100, ((100 - 25) + SCALE(MIN(STAT(2 as stat), int34), int34, 25))) / 10);
                };
            } else {
                int31 = (SCALE(item_getparam(int14, 641), 100, ((100 - 25) + SCALE(MIN(STAT(2 as stat), int34), int34, 25))) / 10);
            };
            int33 = ((int3 - int31) - int32);
            if ((item_getparam(INV_GETOBJ(94 as inv, 3), 2825) == 1)) {
                if ((item_getparam(INV_GETOBJ(94 as inv, 5), 2825) == 1)) {
                    int20 = (int4 + SCALE(int12, 100, 50));
                } else {
                    int20 = int4;
                };
            } else {
                int20 = int4;
            };
            int23 = (int23 + item_getparam(int16, 3267));
            break;
        }
        case 2: {
            int28 = MAX(0, MIN(10000, SCALE((SCALE(int22, int27, 100) * 50), 100, int7)));
            int29 = MAX(0, MIN(10000, SCALE((SCALE(int22, int27, 100) * 60), 100, int7)));
            int30 = MAX(0, MIN(10000, SCALE((SCALE(int22, int27, 100) * 70), 100, int7)));
            int32 = SCALE((100 + ((MIN(int24, 6) - 4) * 25)), 100, SCALE(STAT(4 as stat), 100, 250));
            if ((((OC_WEARPOS(int14) > 0) && (OC_WEARPOS2(int14) > 0)) && (item_getparam(int14, 2832) != 1))) {
                int32 = SCALE(int32, 100, 150);
            };
            int34 = enum_getvalue(0, 0, 7338 as cs2enum, item_getparam(int14, 4));
            int35 = item_getparam(int18, 643);
            if ((item_getparam(int14, 1047) != 1)) {
                int35 = MIN(enum_getvalue(0, 0, 7443, item_getparam(int14, 23)), int35);
            } else {
                int35 = MIN(enum_getvalue(0, 0, 7443, item_getparam(int14, 750)), int35);
            };
            if (((int10 == 10) || (item_getparam(int14, 21) != OC_CATEGORY(int18)))) {
                int35 = 0;
            };
            if ((item_getparam(int14, 686) == 14940 as struct)) {
                if ((int18 != -1 as obj)) {
                    if ((item_getparam(int18, 23) <= item_getparam(int14, 23))) {
                        int37 = enum_getvalue(0, 26, 12907, int24);
                        int31 = ((enum_getvalue(0, 0, int37, item_getparam(int14, 23)) + int35) / 10);
                    } else {
                        int31 = ((item_getparam(int14, 643) + int35) / 10);
                    };
                } else {
                    int31 = ((item_getparam(int14, 643) + int35) / 10);
                };
            } else {
                int31 = ((item_getparam(int14, 643) + int35) / 10);
            };
            int33 = ((int3 - int31) - int32);
            if ((item_getparam(INV_GETOBJ(94 as inv, 3), 2826) == 1)) {
                if ((item_getparam(INV_GETOBJ(94 as inv, 5), 2826) == 1)) {
                    int20 = (int4 + SCALE(int12, 100, 50));
                } else {
                    int20 = int4;
                };
            } else {
                int20 = int4;
            };
            int23 = (int23 + item_getparam(int16, 4));
            break;
        }
        case 3: {
            string1 = "Spell";
            if ((int25 != -1)) {
                string0 = enum_getvalue(0, 36, 6744, struct_getparam(int25, 2873));
            } else {
                string0 = "-";
                int22 = 0;
            };
            int28 = MAX(0, MIN(10000, SCALE((SCALE(int22, int27, 100) * 70), 100, int5)));
            int29 = MAX(0, MIN(10000, SCALE((SCALE(int22, int27, 100) * 50), 100, int5)));
            int30 = MAX(0, MIN(10000, SCALE((SCALE(int22, int27, 100) * 60), 100, int5)));
            int32 = SCALE(STAT(6 as stat), 100, 250);
            int34 = enum_getvalue(0, 0, 7338 as cs2enum, item_getparam(int14, 3));
            if ((int25 != -1)) {
                int32 = SCALE((100 + ((int24 - 4) * 25)), 100, SCALE(STAT(6 as stat), 100, 250));
                int36 = MAX(0, ((MIN(int34, struct_getparam(int25, 2879)) - struct_getparam(int25, 2807)) * struct_getparam(int25, 2878)));
                if ((OC_WEARPOS(int14) > 0)) {
                    if ((OC_WEARPOS2(int14) > 0)) {
                        int31 = (((SCALE(MIN(enum_getvalue(0, 0, 7443, int34), struct_getparam(int25, 2877)), 100, 150) + SCALE((2 * (3975 * int34)), 100, 1)) + int36) / 10);
                        int32 = SCALE(int32, 100, 150);
                    } else {
                        int31 = ((MIN(enum_getvalue(0, 0, 7443, int34), struct_getparam(int25, 2877)) + int36) / 10);
                    };
                } else {
                    int31 = ((MIN(enum_getvalue(0, 0, 7443, int34), struct_getparam(int25, 2877)) + int36) / 10);
                };
            };
            int33 = ((int3 - int31) - int32);
            if ((item_getparam(INV_GETOBJ(94 as inv, 3), 2827) == 1)) {
                if ((item_getparam(INV_GETOBJ(94 as inv, 5), 2827) == 1)) {
                    int20 = (int4 + SCALE(int12, 100, 50));
                } else {
                    int20 = int4;
                };
            } else {
                int20 = int4;
            };
            int23 = (int23 + item_getparam(int16, 3));
            break;
        }
        case 11: {
            int28 = MAX(0, MIN(10000, SCALE((SCALE(int22, int27, 100) * 60), 100, int8)));
            int29 = MAX(0, MIN(10000, SCALE((SCALE(int22, int27, 100) * 60), 100, int8)));
            int30 = MAX(0, MIN(10000, SCALE((SCALE(int22, int27, 100) * 60), 100, int8)));
            int32 = SCALE(SCALE(STAT(28 as stat), 100, 250), 100, (100 + ((int24 - 4) * 25)));
            int34 = enum_getvalue(0, 0, 7338 as cs2enum, item_getparam(int14, 8879));
            if (((OC_WEARPOS(int14) > 0) && (OC_WEARPOS2(int14) > 0))) {
                int32 = SCALE(int32, 100, 150);
            };
            int31 = (item_getparam(int14, 8881) / 10);
            int33 = ((int3 - int31) - int32);
            if ((item_getparam(INV_GETOBJ(94 as inv, 3), 8898) == 1)) {
                if ((item_getparam(INV_GETOBJ(94 as inv, 5), 8898) == 1)) {
                    int20 = (int4 + SCALE(int12, 100, 50));
                } else {
                    int20 = int4;
                };
            } else {
                int20 = int4;
            };
            string3 = `${script7653(100, 1, 1, 0, 1)}%`;
            string4 = `${script7653(script17469(37, int14), 1, 1, 0, 1)}%`;
            int23 = (int23 + item_getparam(int16, 8879));
            break;
        }
        default: {
            int28 = MAX(0, MIN(10000, SCALE((SCALE(int22, int27, 100) * 60), 100, int6)));
            int29 = MAX(0, MIN(10000, SCALE((SCALE(int22, int27, 100) * 70), 100, int6)));
            int30 = MAX(0, MIN(10000, SCALE((SCALE(int22, int27, 100) * 50), 100, int6)));
            if (((int14 == -1 as obj) && (int15 == -1 as obj))) {
                if ((OC_CATEGORY(int17) == 2769 as category)) {
                    int23 = (int23 + item_getparam(int17, 3267));
                } else if ((OC_CATEGORY(int17) == 2770 as category)) {
                    int23 = (int23 + item_getparam(int17, 4));
                } else if ((OC_CATEGORY(int17) == 2771 as category)) {
                    int23 = (int23 + item_getparam(int17, 3));
                };
            };
            int32 = SCALE((100 + ((int24 - 4) * 25)), 100, SCALE(STAT(2 as stat), 100, 250));
            int33 = ((int3 - int31) - int32);
            break;
        }
    };
    if ((varbitplayer_27168 == 1)) {
        int19 = (int19 / 10);
        int31 = (int31 / 10);
        int32 = (int32 / 10);
        int33 = (int33 / 10);
        int20 = (int20 / 10);
    };
    var string5 = "";
    if ((int1 == 1)) {
        IF_SETTEXT(inttostring(int19, 10), comp(1559, 41));  // toplevel_v2_inspect_worn_stats:main_damage_value
        IF_SETTEXT(inttostring((int22 + int23), 10), comp(1559, 46));  // toplevel_v2_inspect_worn_stats:main_accuracy_value
        IF_SETTEXT(string0, comp(1559, 51));  // toplevel_v2_inspect_worn_stats:main_type_value
        IF_SETTEXT(string2, comp(1559, 55));  // toplevel_v2_inspect_worn_stats:main_speed_value
        IF_SETTEXT(inttostring(int20, 10), comp(1559, 138));  // toplevel_v2_inspect_worn_stats:ab_damage_value
        IF_SETTEXT(inttostring((int22 + int23), 10), comp(1559, 143));  // toplevel_v2_inspect_worn_stats:ab_accuracy_value
        IF_SETTEXT(string0, comp(1559, 148));  // toplevel_v2_inspect_worn_stats:ab_type_value
        IF_SETTEXT("N/A", comp(1559, 153));  // toplevel_v2_inspect_worn_stats:ab_speed_value
        string5 = `Weapon : <col=00FF00>${inttostring(script7244(int14), 10)}</col><br>Skill Bonus : <col=00FF00>${inttostring(int9, 10)}</col>`;
        if ((int21 > 0)) {
            string5 = `Weapon : <col=00FF00>${inttostring(script7244(int14), 10)}</col><br>Skill Bonus : <col=00FF00>${inttostring(int9, 10)}</col><br>Hybrid Nerf : <col=00FF00>-${inttostring(int21, 10)}</col>`;
        };
        IF_SETONMOUSEREPEAT(callback(script3876, string5, -2147483645, -2147483643), comp(1559, 44));  // toplevel_v2_inspect_worn_stats:main_accuracy_value_box
        IF_SETONMOUSELEAVE(callback(script8805), comp(1559, 44));  // toplevel_v2_inspect_worn_stats:main_accuracy_value_box
        string5 = `Weapon : <col=00FF00>${inttostring(script7244(int14), 10)}</col><br>Skill Bonus : <col=00FF00>${inttostring(int9, 10)}</col>`;
        if ((int21 > 0)) {
            string5 = `Weapon : <col=00FF00>${inttostring(script7244(int14), 10)}</col><br>Skill Bonus : <col=00FF00>${inttostring(int9, 10)}</col><br>Hybrid Nerf : <col=00FF00>-${inttostring(int21, 10)}</col>`;
        };
        IF_SETONMOUSEREPEAT(callback(script3876, string5, -2147483645, -2147483643), comp(1559, 142));  // toplevel_v2_inspect_worn_stats:ab_accuracy_value_box
        IF_SETONMOUSELEAVE(callback(script8805), comp(1559, 142));  // toplevel_v2_inspect_worn_stats:ab_accuracy_value_box
        string5 = `${string1} : <col=00FF00>${inttostring(int31, 10)}</col><br>Skill Bonus : <col=00FF00>${inttostring(int32, 10)}</col><br>Damage Bonus : <col=00FF00>${inttostring(int33, 10)}</col>`;
        IF_SETONMOUSEREPEAT(callback(script3876, string5, -2147483645, -2147483643), comp(1559, 39));  // toplevel_v2_inspect_worn_stats:main_damage_value_box
        IF_SETONMOUSELEAVE(callback(script8805), comp(1559, 39));  // toplevel_v2_inspect_worn_stats:main_damage_value_box
    } else {
        IF_SETTEXT(inttostring(int19, 10), comp(1463, 46));  // toplevel_v2_parent_suboverlay_worn_stats:main_damage_value
        IF_SETTEXT(inttostring((int22 + int23), 10), comp(1463, 51));  // toplevel_v2_parent_suboverlay_worn_stats:main_accuracy_value
        IF_SETTEXT(string0, comp(1463, 56));  // toplevel_v2_parent_suboverlay_worn_stats:main_type_value
        IF_SETTEXT(string2, comp(1463, 60));  // toplevel_v2_parent_suboverlay_worn_stats:main_speed_value
        IF_SETTEXT(inttostring(int20, 10), comp(1463, 214));  // toplevel_v2_parent_suboverlay_worn_stats:ab_damage_value
        IF_SETTEXT(inttostring((int22 + int23), 10), comp(1463, 219));  // toplevel_v2_parent_suboverlay_worn_stats:ab_accuracy_value
        IF_SETTEXT(string0, comp(1463, 224));  // toplevel_v2_parent_suboverlay_worn_stats:ab_type_value
        IF_SETTEXT("N/A", comp(1463, 228));  // toplevel_v2_parent_suboverlay_worn_stats:ab_speed_value
        IF_SETTEXT(string3, comp(1463, 239));  // toplevel_v2_parent_suboverlay_worn_stats:critical_strike_chance_value_text
        IF_SETTEXT(string4, comp(1463, 245));  // toplevel_v2_parent_suboverlay_worn_stats:critical_strike_damage_value_text
        string5 = `Skill Bonus : <col=00FF00>${script7653(script18545(varplayer_717, int14), 1, 1, 0, 1)}%</col>`;
        IF_SETONMOUSEREPEAT(callback(script3876, string5, -2147483645, -2147483643), comp(1463, 237));  // toplevel_v2_parent_suboverlay_worn_stats:critical_strike_chance_value_box
        IF_SETONMOUSELEAVE(callback(script8805), comp(1463, 237));  // toplevel_v2_parent_suboverlay_worn_stats:critical_strike_chance_value_box
        string5 = `Skill Bonus : <col=00FF00>${script7653(script17469(varplayer_717, int14), 1, 1, 0, 1)}%</col>`;
        IF_SETONMOUSEREPEAT(callback(script3876, string5, -2147483645, -2147483643), comp(1463, 244));  // toplevel_v2_parent_suboverlay_worn_stats:critical_strike_damage_value_box
        IF_SETONMOUSELEAVE(callback(script8805), comp(1463, 244));  // toplevel_v2_parent_suboverlay_worn_stats:critical_strike_damage_value_box
        IF_SETTEXT(`${inttostring(SCALE(int28, 1000, 10), 10)}%`, comp(1463, 103));  // toplevel_v2_parent_suboverlay_worn_stats:main_vs_melee_value
        IF_SETTEXT(`${inttostring(SCALE(int29, 1000, 10), 10)}%`, comp(1463, 107));  // toplevel_v2_parent_suboverlay_worn_stats:main_vs_range_value
        IF_SETTEXT(`${inttostring(SCALE(int30, 1000, 10), 10)}%`, comp(1463, 111));  // toplevel_v2_parent_suboverlay_worn_stats:main_vs_magic_value
        string5 = `Weapon : <col=00FF00>${inttostring((script7244(int14) + int23), 10)}</col><br>Skill Bonus : <col=00FF00>${inttostring(int9, 10)}</col>`;
        if ((int21 > 0)) {
            string5 = `Weapon : <col=00FF00>${inttostring((script7244(int14) + int23), 10)}</col><br>Skill Bonus : <col=00FF00>${inttostring(int9, 10)}</col><br>Hybrid Nerf : <col=00FF00>-${inttostring(int21, 10)}</col>`;
        };
        IF_SETONMOUSEREPEAT(callback(script3876, string5, -2147483645, -2147483643), comp(1463, 49));  // toplevel_v2_parent_suboverlay_worn_stats:main_accuracy_value_box
        IF_SETONMOUSELEAVE(callback(script8805), comp(1463, 49));  // toplevel_v2_parent_suboverlay_worn_stats:main_accuracy_value_box
        string5 = `Weapon : <col=00FF00>${inttostring(script7244(int14), 10)}</col><br>Skill Bonus : <col=00FF00>${inttostring(int9, 10)}</col>`;
        if ((int21 > 0)) {
            string5 = `Weapon : <col=00FF00>${inttostring(script7244(int14), 10)}</col><br>Skill Bonus : <col=00FF00>${inttostring(int9, 10)}</col><br>Hybrid Nerf : <col=00FF00>-${inttostring(int21, 10)}</col>`;
        };
        IF_SETONMOUSEREPEAT(callback(script3876, string5, -2147483645, -2147483643), comp(1463, 217));  // toplevel_v2_parent_suboverlay_worn_stats:ab_accuracy_value_box
        IF_SETONMOUSELEAVE(callback(script8805), comp(1463, 217));  // toplevel_v2_parent_suboverlay_worn_stats:ab_accuracy_value_box
        string5 = `${string1} : <col=00FF00>${inttostring(int31, 10)}</col><br>Skill Bonus : <col=00FF00>${inttostring(int32, 10)}</col><br>Damage Bonus : <col=00FF00>${inttostring(int33, 10)}</col>`;
        IF_SETONMOUSEREPEAT(callback(script3876, string5, -2147483645, -2147483643), comp(1463, 44));  // toplevel_v2_parent_suboverlay_worn_stats:main_damage_value_box
        IF_SETONMOUSELEAVE(callback(script8805), comp(1463, 44));  // toplevel_v2_parent_suboverlay_worn_stats:main_damage_value_box
    };
    return [int20, int31];
}