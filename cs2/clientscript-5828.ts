//
function script5828(int0: obj, int1: struct, int2: struct, int3: component, int4: component, int5: obj, int6: inv, string0: string): int {
    var int7 = 16777215;
    var string1 = "";
    var string2 = "";
    var string3 = "";
    var string4 = "";
    var string5 = "";
    var string6 = "";
    if ((int1 == 28977 as struct)) {
        int7 = script10495(3);
        string3 = GET_COL_TAG(int7);
        string1 = GET_COL_TAG(0);
        string2 = GET_COL_TAG(script10495(0));
        string4 = GET_COL_TAG(16777215);
        string5 = string3;
        string6 = string2;
    } else {
        int7 = 14931919;
        string3 = GET_COL_TAG(int7);
        string1 = string3;
        string2 = string3;
        string4 = string3;
        string5 = "<col=969696>";
        string6 = string3;
    };
    var string7 = string2;
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
    var int32 = 0;
    var int33 = 0;
    var int34 = 0;
    var int35 = 0;
    var int36 = 0;
    var int37 = -1 as obj;
    var int38 = -1 as struct;
    var int39 = 0;
    var string8 = "0";
    var int40 = -1 as npc;
    var string9 = "";
    var string10 = "";
    var string11 = "";
    var string12 = "";
    var int41 = -1 as cs2enum;
    var int42 = 0;
    var int43 = 0;
    if ((item_getparam(int0, 3793) == 1)) {
        string11 = "When repaired: ";
    };
    int34 = item_getparam(int0, 963);
    CC_DELETEALL(int4);
    var int44 = 0;
    var int45 = -1;
    if ((((int0 != -1 as obj) && (int1 != -1 as struct)) && (STRING_LENGTH(string0) > 0))) {
        int44 = script7235(string0, string7, int1, int3, int4, int44);
        if (((int3 == comp(1477, 884)) && (int4 == comp(1477, 887)))) {
            int44 = script20487(int3, int4, int44);
            int45 = int44;
        };
    };
    if ((OC_WEARPOS(int0) != -1)) {
        varclient_2239 = INV_GETOBJ(94 as inv, OC_WEARPOS(int0));
        int8 = script7241(int0);
        int9 = script17172(int0, int8);
        int18 = script7245(int0, int8);
        if ((item_getparam(int0, 2853) > 0)) {
            int10 = item_getparam(int0, 2853);
        } else if ((item_getparam(int0, 686) != -1 as struct)) {
            int10 = struct_getparam(item_getparam(int0, 686), 2853);
        };
        int11 = script13825(int0, int8);
        int12 = script7244(int0);
        int14 = item_getparam(int0, 2870);
        int15 = script17467(int0);
        int17 = item_getparam(int0, 2946);
        int16 = script19653(int0);
        int35 = item_getparam(int0, 13);
        if ((int11 == 0)) {
            int19 = script10005(int0, 1);
            int20 = script10005(int0, 2);
            int21 = script10005(int0, 3);
            int22 = script10005(int0, 7);
        };
        int23 = script7241(varclient_2239);
        if ((item_getparam(varclient_2239, 2853) > 0)) {
            int24 = item_getparam(varclient_2239, 2853);
        } else if ((item_getparam(varclient_2239, 686) != -1 as struct)) {
            int24 = struct_getparam(item_getparam(varclient_2239, 686), 2853);
        };
        int25 = script13825(varclient_2239, int23);
        int26 = item_getparam(varclient_2239, 2870);
        int27 = script17467(varclient_2239);
        int29 = item_getparam(varclient_2239, 2946);
        int28 = script19653(varclient_2239);
        int36 = item_getparam(varclient_2239, 13);
        if ((int25 == 0)) {
            int30 = script10005(varclient_2239, 1);
            int31 = script10005(varclient_2239, 2);
            int32 = script10005(varclient_2239, 3);
            int33 = script10005(varclient_2239, 7);
        };
        if (((int11 > 0) || (((int25 > 0) && (OC_WEARPOS(varclient_2239) != 5)) && (OC_WEARPOS(varclient_2239) != 3)))) {
            if ((varclient_2239 == -1 as obj)) {
                string7 = "<col=00ff00>";
            } else if ((int8 != int23)) {
                string7 = "<col=00ffff>";
            } else if ((int11 > int25)) {
                string7 = "<col=00ff00>";
            } else if ((int11 < int25)) {
                string7 = "<col=ff0000>";
            } else {
                string7 = string4;
            };
            int44 = script7235(`${string3}Damage:</col> ${string7}${script7653(int11, 1, 0, 0, 1)}</col>`, string7, int2, int3, int4, int44);
        };
        if (((OC_WEARPOS(int0) != 5) && (int12 > 0))) {
            if ((varclient_2239 == -1 as obj)) {
                string7 = "<col=00ff00>";
            } else if ((int8 != int23)) {
                string7 = "<col=00ffff>";
            } else if ((int12 > script7244(varclient_2239))) {
                string7 = "<col=00ff00>";
            } else if ((int12 < script7244(varclient_2239))) {
                string7 = "<col=ff0000>";
            } else {
                string7 = string4;
            };
            if ((enum_getvalue(0, 0, 7338 as cs2enum, int12) != int18)) {
                int44 = script7235(`Accuracy: ${string7}${TOSTRING_LOCALISED(int12, 1)} (Tier ${inttostring(enum_getvalue(0, 0, 7338 as cs2enum, int12), 10)})</col> `, string3, int2, int3, int4, int44);
            } else {
                int44 = script7236("Accuracy", int12, int7, string7, int2, int3, int4, int44);
            };
        };
        if ((int13 > 0)) {
            if ((varclient_2239 == -1 as obj)) {
                string7 = "<col=00ff00>";
            } else if ((int8 != int23)) {
                string7 = "<col=00ffff>";
            } else if ((int13 > 0)) {
                string7 = "<col=00ff00>";
            } else if ((int13 < 0)) {
                string7 = "<col=ff0000>";
            } else {
                string7 = string4;
            };
            int44 = script7236("Skill Bonus", int13, int7, string7, int2, int3, int4, int44);
        };
        if ((int10 > 0)) {
            if ((varclient_2239 == -1 as obj)) {
                string7 = "<col=00ff00>";
            } else if ((int8 != int23)) {
                string7 = "<col=00ffff>";
            } else if ((int10 != int24)) {
                string7 = "<col=00ffff>";
            } else {
                string7 = string4;
            };
            if ((int8 == 2)) {
                if ((item_getparam(varclient_2239, 21) != 106 as category)) {
                    int44 = script7237("Ammo", int10, 6744 as cs2enum, int7, string7, int2, int3, int4, int44);
                };
            } else if ((int8 == 1)) {
                int44 = script7237("Style", int10, 6744 as cs2enum, int7, string7, int2, int3, int4, int44);
            };
        };
        if ((int14 > 0)) {
            if ((varclient_2239 == -1 as obj)) {
                string7 = "<col=00ff00>";
            } else if ((int8 != int23)) {
                string7 = "<col=00ffff>";
            } else if ((int14 > int26)) {
                string7 = "<col=00ff00>";
            } else if ((int14 < int26)) {
                string7 = "<col=ff0000>";
            } else {
                string7 = string4;
            };
            int41 = enum_getvalue(0, 26, 8289 as cs2enum, OC_WEARPOS(int0));
            if (((((int18 > 1) && (int41 != -1 as cs2enum)) && (enum_getvalue(0, 0, int41, int18) != int14)) && (enum_hasoutput(0, int41, int14) == 1))) {
                int44 = script7235(`Armour: ${string7}${TOSTRING_LOCALISED(MAX(1, (int14 / 10)), 1)} (Tier ${inttostring(enum_getreverseindex(0, 0, int41, int14, 0), 10)})</col>`, string3, int2, int3, int4, int44);
            } else {
                int44 = script7236("Armour", MAX(1, (int14 / 10)), int7, string7, int2, int3, int4, int44);
            };
        };
        if ((int15 != 0)) {
            if ((varclient_2239 == -1 as obj)) {
                string7 = "<col=00ff00>";
            } else if ((int8 != int23)) {
                string7 = "<col=00ffff>";
            } else if ((int15 > int27)) {
                string7 = "<col=00ff00>";
            } else if ((int15 < int27)) {
                string7 = "<col=ff0000>";
            } else {
                string7 = string4;
            };
            int44 = script7235(`Damage Reduction: ${string7}${script7653(int15, 1, 1, 1, 1)}%</col>`, string3, int2, int3, int4, int44);
        };
        if ((int19 > 0)) {
            if ((varclient_2239 == -1 as obj)) {
                string7 = "<col=00ff00>";
            } else if ((int8 != int23)) {
                string7 = "<col=00ffff>";
            } else if ((int19 > int30)) {
                string7 = "<col=00ff00>";
            } else if ((int19 < int30)) {
                string7 = "<col=ff0000>";
            } else {
                string7 = string4;
            };
            int44 = script7235(`Melee Damage Bonus: ${string7}${script7653(int19, 1, 1, 0, 1)}</col>`, string3, int2, int3, int4, int44);
        };
        if ((int20 > 0)) {
            if ((varclient_2239 == -1 as obj)) {
                string7 = "<col=00ff00>";
            } else if ((int8 != int23)) {
                string7 = "<col=00ffff>";
            } else if ((int20 > int31)) {
                string7 = "<col=00ff00>";
            } else if ((int20 < int31)) {
                string7 = "<col=ff0000>";
            } else {
                string7 = string4;
            };
            int44 = script7235(`Ranged Damage Bonus: ${string7}${script7653(int20, 1, 1, 0, 1)}</col>`, string3, int2, int3, int4, int44);
        };
        if ((int21 > 0)) {
            if ((varclient_2239 == -1 as obj)) {
                string7 = "<col=00ff00>";
            } else if ((int8 != int23)) {
                string7 = "<col=00ffff>";
            } else if ((int21 > int32)) {
                string7 = "<col=00ff00>";
            } else if ((int21 < int32)) {
                string7 = "<col=ff0000>";
            } else {
                string7 = string4;
            };
            int44 = script7235(`Magic Damage Bonus: ${string7}${script7653(int21, 1, 1, 0, 1)}</col>`, string3, int2, int3, int4, int44);
        };
        if ((int22 > 0)) {
            if ((varclient_2239 == -1 as obj)) {
                string7 = "<col=00ff00>";
            } else if ((int8 != int23)) {
                string7 = "<col=00ffff>";
            } else if ((int22 > int33)) {
                string7 = "<col=00ff00>";
            } else if ((int22 < int33)) {
                string7 = "<col=ff0000>";
            } else {
                string7 = string4;
            };
            int44 = script7235(`Necromancy Damage Bonus: ${string7}${script7653(int22, 1, 1, 0, 1)}</col>`, string3, int2, int3, int4, int44);
        };
        if (((OC_WEARPOS(int0) != 5) && (OC_WEARPOS(int0) != 3))) {
            int19 = script2109(int0, 1);
            int20 = script2109(int0, 2);
            int21 = script2109(int0, 3);
            int22 = script2109(int0, 7);
            int30 = script2109(varclient_2239, 1);
            int31 = script2109(varclient_2239, 2);
            int32 = script2109(varclient_2239, 3);
            int33 = script2109(varclient_2239, 7);
            if ((int19 > 0)) {
                if ((varclient_2239 == -1 as obj)) {
                    string7 = "<col=00ff00>";
                } else if ((int8 != int23)) {
                    string7 = "<col=00ffff>";
                } else if ((int19 > int30)) {
                    string7 = "<col=00ff00>";
                } else if ((int19 < int30)) {
                    string7 = "<col=ff0000>";
                } else {
                    string7 = string4;
                };
                if ((varbitplayer_27168 == 0)) {
                    int44 = script7235(`Melee Accuracy Bonus: ${string7}${inttostring(int19, 10)}</col>`, string3, int2, int3, int4, int44);
                } else {
                    int44 = script7235(`Melee Accuracy Bonus: ${string7}${inttostring((int19 / 10), 10)}${script8002()}${inttostring(MODULO(int19, 10), 10)}</col>`, string3, int2, int3, int4, int44);
                };
            };
            if ((int20 > 0)) {
                if ((varclient_2239 == -1 as obj)) {
                    string7 = "<col=00ff00>";
                } else if ((int8 != int23)) {
                    string7 = "<col=00ffff>";
                } else if ((int20 > int31)) {
                    string7 = "<col=00ff00>";
                } else if ((int20 < int31)) {
                    string7 = "<col=ff0000>";
                } else {
                    string7 = string4;
                };
                if ((varbitplayer_27168 == 0)) {
                    int44 = script7235(`Ranged Accuracy Bonus: ${string7}${inttostring(int20, 10)}</col>`, string3, int2, int3, int4, int44);
                } else {
                    int44 = script7235(`Ranged Accuracy Bonus: ${string7}${inttostring((int20 / 10), 10)}${script8002()}${inttostring(MODULO(int20, 10), 10)}</col>`, string3, int2, int3, int4, int44);
                };
            };
            if ((int21 > 0)) {
                if ((varclient_2239 == -1 as obj)) {
                    string7 = "<col=00ff00>";
                } else if ((int8 != int23)) {
                    string7 = "<col=00ffff>";
                } else if ((int21 > int32)) {
                    string7 = "<col=00ff00>";
                } else if ((int21 < int32)) {
                    string7 = "<col=ff0000>";
                } else {
                    string7 = string4;
                };
                if ((varbitplayer_27168 == 0)) {
                    int44 = script7235(`Magic Accuracy Bonus: ${string7}${inttostring(int21, 10)}</col>`, string3, int2, int3, int4, int44);
                } else {
                    int44 = script7235(`Magic Accuracy Bonus: ${string7}${inttostring((int21 / 10), 10)}${script8002()}${inttostring(MODULO(int21, 10), 10)}</col>`, string3, int2, int3, int4, int44);
                };
            };
            if ((int22 > 0)) {
                if ((varclient_2239 == -1 as obj)) {
                    string7 = "<col=00ff00>";
                } else if ((int8 != int23)) {
                    string7 = "<col=00ffff>";
                } else if ((int22 > int33)) {
                    string7 = "<col=00ff00>";
                } else if ((int22 < int33)) {
                    string7 = "<col=ff0000>";
                } else {
                    string7 = string4;
                };
                if ((varbitplayer_27168 == 0)) {
                    int44 = script7235(`Necromancy Accuracy Bonus: ${string7}${inttostring(int22, 10)}</col>`, string3, int2, int3, int4, int44);
                } else {
                    int44 = script7235(`Necromancy Accuracy Bonus: ${string7}${inttostring((int22 / 10), 10)}${script8002()}${inttostring(MODULO(int22, 10), 10)}</col>`, string3, int2, int3, int4, int44);
                };
            };
        };
        if ((int16 > 0)) {
            if ((varclient_2239 == -1 as obj)) {
                string7 = "<col=00ff00>";
            } else if ((int16 > int28)) {
                string7 = "<col=00ff00>";
            } else if ((int16 < int28)) {
                string7 = "<col=ff0000>";
            } else {
                string7 = string4;
            };
            if ((varbitplayer_27168 == 1)) {
                int16 = (int16 / 10);
            };
            int44 = script7236("Life Points Bonus", int16, int7, string7, int2, int3, int4, int44);
        };
        if ((int17 != 0)) {
            if ((varclient_2239 == -1 as obj)) {
                if ((int17 > 0)) {
                    string7 = "<col=00ff00>";
                } else {
                    string7 = "<col=ff0000>";
                };
            } else if ((int17 > int29)) {
                string7 = "<col=00ff00>";
            } else if ((int17 < int29)) {
                string7 = "<col=ff0000>";
            } else {
                string7 = string4;
            };
            int44 = script7236("Prayer Bonus", int17, int7, string7, int2, int3, int4, int44);
        };
        if ((int8 > 0)) {
            if ((varclient_2239 == -1 as obj)) {
                string7 = "<col=00ff00>";
            } else if ((int8 != int23)) {
                string7 = "<col=00ffff>";
            } else {
                string7 = string4;
            };
            if ((int9 != 0)) {
                int44 = script7235(`Type: ${string7}${enum_getvalue(0, 36, 6742 as cs2enum, int8)} (${enum_getvalue(0, 36, 16975 as cs2enum, int9)})</col>`, string3, int2, int3, int4, int44);
            } else {
                int44 = script7237("Type", int8, 6742 as cs2enum, int7, string7, int2, int3, int4, int44);
            };
        };
        if ((script7239(int8) == 1)) {
            int35 = MAX(int35, 1);
            int36 = MAX(int36, 1);
            if ((int35 > int36)) {
                string7 = "<col=00ff00>";
            } else if ((int35 < int36)) {
                string7 = "<col=ff0000>";
            } else {
                string7 = string4;
            };
            int44 = script7236("Range", int35, int7, string7, int2, int3, int4, int44);
        };
        if ((int18 > 0)) {
            string7 = string4;
            if ((item_getparam(int0, 8563) == 1)) {
                int18 = item_getparam(int0, 750);
            };
            switch (OC_CATEGORY(int0)) {
                case 35: {
                    string12 = "Level";
                    break;
                }
                default: {
                    string12 = "Tier";
                    break;
                }
            };
            int44 = script7236(string12, int18, int7, string7, int2, int3, int4, int44);
        };
        if (((varclient_5121 != -1 as inv) && (varclient_5122 != -1))) {
            int42 = script11942(int0);
            if ((int42 > 0)) {
                int44 = script7235(`<sprite=30343> Innate Mastery: +${inttostring((5 * int42), 10)} damage and accuracy tiers`, string3, int2, int3, int4, int44);
            };
        };
        if ((item_getparam(int0, 2832) == 1)) {
            int44 = script7235("Shield", string3, int2, int3, int4, int44);
        };
        if ((item_getparam(int0, 5416) == 1)) {
            int44 = script7235("Acts as a shield", string3, int2, int3, int4, int44);
        };
        if ((item_getparam(int0, 8899) == 1)) {
            int44 = script7235("Underworld Conduit", string3, int2, int3, int4, int44);
        } else if ((item_getparam(int0, 8571) == 1)) {
            int44 = script7235("Underworld Connection", string3, int2, int3, int4, int44);
        };
        if ((item_getparam(int0, 8928) != -1 as struct)) {
            int44 = script7235(`Passive: ${struct_getparam(item_getparam(int0, 8928), 2794)}<br>${script17663(int0)}`, string3, int2, int3, int4, int44);
        };
        if ((item_getparam(int0, 4338) != -1 as obj)) {
            if ((item_getparam(item_getparam(int0, 4338), 4329) == 1)) {
                int44 = script7235(`Special Attack: ${script17461(item_getparam(int0, 4338))}`, string3, int2, int3, int4, int44);
            };
        } else if ((item_getparam(int0, 4329) == 1)) {
            int44 = script7235(`Special Attack: ${script17461(int0)}`, string3, int2, int3, int4, int44);
        } else if ((((OC_CATEGORY(int0) == 4700 as category) && (varclient_5121 != -1 as inv)) && (varclient_5122 != -1))) {
            int44 = script7235(`Special Attack: ${script15097(varclient_5121, varclient_5122)}`, string3, int2, int3, int4, int44);
        };
        if ((((varclient_5121 != -1 as inv) && (varclient_5122 >= 0)) && (script12070(int0) == 1))) {
            int16 = INV_GETVAR(varclient_5121, varclient_5122, 30212);
            int17 = script12071(int16);
            int44 = script7236("Item Level", int17, int7, "", int2, int3, int4, int44);
            if ((int17 < 20)) {
                int44 = script7235(`Item XP: ${TOSTRING_LOCALISED(int16, 1)}/${TOSTRING_LOCALISED(script12074((int17 + 1)), 1)}`, string3, int2, int3, int4, int44);
            } else {
                int44 = script7235(`Item XP: ${TOSTRING_LOCALISED(int16, 1)}`, string3, int2, int3, int4, int44);
            };
            if ((script12080(item_getparam(int0, 5524)) == 1)) {
                if (((varbitplayer_49710 == 0) || (varbitplayer_49710 == 1))) {
                    int44 = script12197(int0, varclient_5121, varclient_5122, int2, int3, int4, int44);
                };
                if (((varbitplayer_49710 == 0) || (varbitplayer_49710 == 2))) {
                    int44 = script15935(int0, varclient_5121, varclient_5122, int2, int3, int4, int44, string3);
                };
                if ((script16822(int0, varclient_5121, varclient_5122, 19) == 1)) {
                    int44 = script7235("The committed perk is currently disabled.", string3, int2, int3, int4, int44);
                };
            };
        };
        if ((item_getparam(int0, 5387) == 1)) {
            int44 = script7235("Has a chance to double a drop.", string3, int2, int3, int4, int44);
        };
        int38 = item_getparam(int0, 6186);
        if ((int38 != -1 as struct)) {
            if (((item_getparam(int0, 3793) == 1) && (item_getparam(int0, 3203) != -1 as struct))) {
                int44 = script7235("When repaired:", string4, int2, int3, int4, int44);
                string11 = "";
            };
            string9 = script8240(int38, -1 as obj);
            string10 = script17662(int38, -1);
            if ((STRING_LENGTH(string10) > 0)) {
                string10 = strconcat("<br>", string10);
            };
            if ((strcmp(struct_getparam(int38, 2794), "") != 0)) {
                if (((varbitplayer_27168 == 1) && (strcmp(struct_getparam(int38, 7998), "") != 0))) {
                    int44 = script7235(`${string11}${struct_getparam(int38, 2794)}: ${string9}${struct_getparam(int38, 7998)}${string10}`, string3, int2, int3, int4, int44);
                } else {
                    int44 = script7235(`${string11}${struct_getparam(int38, 2794)}: ${string9}${struct_getparam(int38, 2795)}${string10}`, string3, int2, int3, int4, int44);
                };
            } else if (((varbitplayer_27168 == 1) && (strcmp(struct_getparam(int38, 7998), "") != 0))) {
                int44 = script7235(`${string11}${string9}${struct_getparam(int38, 7998)}${string10}`, string3, int2, int3, int4, int44);
            } else {
                int44 = script7235(`${string11}${string9}${struct_getparam(int38, 2795)}${string10}`, string3, int2, int3, int4, int44);
            };
        };
        int38 = item_getparam(int0, 3203);
        if ((int38 != -1 as struct)) {
            if ((int44 > int45)) {
                int44 = script13258(1, struct_getparam(int2, 4205), int3, int4, int44);
            };
            int44 = script7235(`Item Set: ${struct_getparam(int38, 2794)}`, string3, int2, int3, int4, int44);
            int44 = script6554(int44, int2, int3, int4, int38, string8, string4, string5, int18, int0);
        };
        if ((item_getparam(int0, 6845) == 1)) {
            if ((script12676(int0) == 1)) {
                int44 = script7235("Enchantment Effect:", string3, int2, int3, int4, int44);
                int44 = script7235(struct_getparam(item_getparam(int0, 6846), 2795), string3, int2, int3, int4, int44);
            } else {
                int44 = script7235("Enchantment Effect:", string5, int2, int3, int4, int44);
                int44 = script7235(`Requires: ${OC_NAME(item_getparam(int0, 6848))}.`, string5, int2, int3, int4, int44);
                int44 = script7235(struct_getparam(item_getparam(int0, 6847), 2795), string5, int2, int3, int4, int44);
            };
        };
    } else {
        int38 = item_getparam(int0, 6186);
        if ((int38 != -1 as struct)) {
            string9 = script8240(int38, -1 as obj);
            string10 = script17662(int38, -1);
            if ((STRING_LENGTH(string10) > 0)) {
                string10 = strconcat("<br>", string10);
            };
            if ((strcmp(struct_getparam(int38, 2794), "") != 0)) {
                if (((varbitplayer_27168 == 1) && (strcmp(struct_getparam(int38, 7998), "") != 0))) {
                    int44 = script7235(`${string11}${struct_getparam(int38, 2794)}: ${string9}${struct_getparam(int38, 7998)}${string10}`, string3, int2, int3, int4, int44);
                } else {
                    int44 = script7235(`${string11}${struct_getparam(int38, 2794)}: ${string9}${struct_getparam(int38, 2795)}${string10}`, string3, int2, int3, int4, int44);
                };
            } else if (((varbitplayer_27168 == 1) && (strcmp(struct_getparam(int38, 7998), "") != 0))) {
                int44 = script7235(`${string11}${string9}${struct_getparam(int38, 7998)}${string10}`, string3, int2, int3, int4, int44);
            } else {
                int44 = script7235(`${string11}${string9}${struct_getparam(int38, 2795)}${string10}`, string3, int2, int3, int4, int44);
            };
        };
    };
    if (((int34 > 0) && ((item_getparam(int0, 2281) == -1 as struct) || (item_getparam(int0, 2970) > 1)))) {
        string7 = "<col=00ff00>";
        int34 = script7246(int0);
        if (((int0 == 20429 as obj) && (varbitplayer_1899 == 0))) {
            int34 = SCALE(int34, 2475, 2800);
        };
        if (((varbitplayer_27168 == 1) && (varclient_1533 != 1))) {
            int34 = (int34 / 10);
        };
        if ((item_getparam(int0, 2972) > 0)) {
            int44 = script7235("Heals: <col=00ff00>???</col>", string3, int2, int3, int4, int44);
        } else {
            int44 = script7236("Heals", int34, int7, string7, int2, int3, int4, int44);
        };
        if ((item_getparam(int0, 6924) > 0)) {
            int44 = script7235(`Allows overhealing up to <col=00ff00>${inttostring(item_getparam(int0, 6924), 10)}%</col> of your maximum <sprite=18851><nbsp><col=ED705A>Life<nbsp>Points</col>.`, string3, int2, int3, int4, int44);
        };
        if (((item_getparam(int0, 4653) > 0) && (STRING_LENGTH(item_getparam(int0, 4797)) > 0))) {
            int44 = script7235(`Regenerates <col=00ff00>${inttostring(item_getparam(int0, 4653), 10)} health</col> every <col=00ffff>1.2 seconds</col> over <col=00ffff>${item_getparam(int0, 4797)} seconds</col>.`, string3, int2, int3, int4, int44);
        };
        int34 = script4000(int0);
        if ((int34 > 0)) {
            int44 = script7236("Prayer points", int34, int7, string7, int2, int3, int4, int44);
        };
        if ((item_getparam(int0, 4342) == 0)) {
            int44 = script7235(`${script18556(30)} while in combat.`, string3, int2, int3, int4, int44);
        };
    };
    if ((item_getparam(int0, 3698) != 0)) {
        string7 = "<col=00ff00>";
        int34 = item_getparam(int0, 3698);
        if (((varbitplayer_27168 == 1) && (varclient_1533 != 1))) {
            int34 = (int34 / 10);
        };
        int44 = script7236("Heals", int34, int7, string7, int2, int3, int4, int44);
    };
    if ((item_getparam(int0, 3702) != 0)) {
        int44 = script7235(`Constitution requirement: ${inttostring(item_getparam(int0, 3702), 10)}`, string3, int2, int3, int4, int44);
    };
    if ((item_getparam(int0, 4245) != 0)) {
        int11 = item_getparam(int0, 4245);
        if (((varbitplayer_27168 == 1) && (varclient_1533 != 1))) {
            int11 = (int11 / 10);
        };
        int44 = script7235(`Deals ${inttostring(int11, 10)} damage to the last opponent that attacked you.`, string3, int2, int3, int4, int44);
    };
    if ((item_getparam(int0, 3674) != 0)) {
        string7 = "<col=00ff00>";
        int34 = item_getparam(int0, 3674);
        if (((varbitplayer_27168 == 1) && (varclient_1533 != 1))) {
            int34 = (int34 / 10);
        };
        int44 = script7236("Heals", int34, int7, string7, int2, int3, int4, int44);
    };
    if ((item_getparam(int0, 3683) != 0)) {
        int44 = script7235(`Constitution level requirement: ${inttostring(item_getparam(int0, 3683), 10)}`, string3, int2, int3, int4, int44);
    };
    if ((item_getparam(int0, 3675) != 0)) {
        int44 = script7235(`Will offer to open a Daemonheim skill door which has requirements you don't meet, within ${inttostring(item_getparam(int0, 3675), 10)} skill levels.`, string3, int2, int3, int4, int44);
    };
    var int46 = -1 as dbrow;
    if ((item_getparam(int0, 3697) != 0)) {
        int10 = SCALE(item_getparam(int0, 3697), 100, 60);
        int44 = script7235(`Extends the duration of your gravestone by ${inttostring(int10, 10)} seconds, up to a maximum of 5 minutes.`, string3, int2, int3, int4, int44);
    };
    if ((item_getparam(int0, 3699) != 0)) {
        int44 = script7235(`When equipped, will transport up to ${inttostring(item_getparam(int0, 3699), 10)} received items to the bank before depleting.`, string3, int2, int3, int4, int44);
    };
    stack(348240);
    stack(int0);
    DB_FIND(0);
    dbrow_findnext();
    int46 = stack();
    if ((int46 != -1)) {
        int44 = script7235(script3956(int46), string3, int2, int3, int4, int44);
        int46 = -1 as dbrow;
    };
    stack(348256);
    stack(int0);
    DB_FIND(0);
    dbrow_findnext();
    int46 = stack();
    if ((int46 != -1)) {
        int44 = script7235(script5521(int46), string3, int2, int3, int4, int44);
        int46 = -1 as dbrow;
    };
    if (((varclient_5121 != -1 as inv) && (varclient_5122 >= 0))) {
        if ((item_getparam(int0, 5553) != 0)) {
            if (((varbitplayer_49710 == 0) || (varbitplayer_49710 == 1))) {
                int44 = script12197(int0, varclient_5121, varclient_5122, int2, int3, int4, int44);
            };
            if (((varbitplayer_49710 == 0) || (varbitplayer_49710 == 2))) {
                int44 = script15935(int0, varclient_5121, varclient_5122, int2, int3, int4, int44, string3);
            };
        };
        if ((((item_getparam(int0, 6810) == true) && (varclient_5121 != -1 as inv)) && (varclient_5122 >= 0))) {
            if ((OC_CATEGORY(int0) == 4430 as category)) {
                if ((INV_GETVAR(varclient_5121, varclient_5122, 42932) > 0)) {
                    int44 = script7235(`<col=00ff00>${enum_getvalue(0, 36, 15018 as cs2enum, INV_GETVAR(varclient_5121, varclient_5122, 42932))}`, string3, int2, int3, int4, int44);
                } else {
                    int44 = script7235("<col=ff0000>Empty slot", string3, int2, int3, int4, int44);
                };
                if ((INV_GETVAR(varclient_5121, varclient_5122, 42933) > 0)) {
                    int44 = script7235(`<col=00ff00>${enum_getvalue(0, 36, 15018 as cs2enum, INV_GETVAR(varclient_5121, varclient_5122, 42933))}`, string3, int2, int3, int4, int44);
                } else {
                    int44 = script7235("<col=ff0000>Empty slot", string3, int2, int3, int4, int44);
                };
                if ((INV_GETVAR(varclient_5121, varclient_5122, 42934) > 0)) {
                    int44 = script7235(`<col=00ff00>${enum_getvalue(0, 36, 15018 as cs2enum, INV_GETVAR(varclient_5121, varclient_5122, 42934))}`, string3, int2, int3, int4, int44);
                } else {
                    int44 = script7235("<col=ff0000>Empty slot", string3, int2, int3, int4, int44);
                };
                if ((INV_GETVAR(varclient_5121, varclient_5122, 42935) > 0)) {
                    int44 = script7235(`<col=00ff00>${enum_getvalue(0, 36, 15018 as cs2enum, INV_GETVAR(varclient_5121, varclient_5122, 42935))}`, string3, int2, int3, int4, int44);
                } else {
                    int44 = script7235("<col=ff0000>Empty slot", string3, int2, int3, int4, int44);
                };
                if ((INV_GETVAR(varclient_5121, varclient_5122, 42936) > 0)) {
                    int44 = script7235(`<col=00ff00>${enum_getvalue(0, 36, 15018 as cs2enum, INV_GETVAR(varclient_5121, varclient_5122, 42936))}`, string3, int2, int3, int4, int44);
                } else {
                    int44 = script7235("<col=ff0000>Empty slot", string3, int2, int3, int4, int44);
                };
                if ((INV_GETVAR(varclient_5121, varclient_5122, 42937) > 0)) {
                    int44 = script7235(`<col=00ff00>${enum_getvalue(0, 36, 15018 as cs2enum, INV_GETVAR(varclient_5121, varclient_5122, 42937))}`, string3, int2, int3, int4, int44);
                } else {
                    int44 = script7235("<col=ff0000>Empty slot", string3, int2, int3, int4, int44);
                };
            };
            if (((((int0 != 44540 as obj) && (OC_CATEGORY(int0) != 4058 as category)) && (OC_CATEGORY(int0) != 4431 as category)) && ((OC_CATEGORY(int0) != 4430 as category) || (script12676(44542 as obj) == 0)))) {
                int34 = INV_GETVAR(varclient_5121, varclient_5122, 30214);
                int44 = script7236("Charges remaining", int34, int7, "", int2, int3, int4, int44);
            };
        };
        if ((int0 == 41081 as obj)) {
            if ((varplayer_7253 != -1 as obj)) {
                int38 = item_getparam(varplayer_7253, 2281);
                string1 = struct_getparam(int38, 2524);
                int44 = script7235(`Potion stored: ${string1} (${TOSTRING_LOCALISED(varbitplayer_37584, 1)})`, string3, int2, int3, int4, int44);
                if ((varbitplayer_37583 == 0)) {
                    int44 = script7235("Device status: Off", string3, int2, int3, int4, int44);
                } else {
                    int44 = script7235("Device status: On", string3, int2, int3, int4, int44);
                };
            } else {
                int44 = script7235("Potion stored: Nothing!", string3, int2, int3, int4, int44);
            };
        };
        if ((varbitplayer_42534 == 0)) {
            int38 = item_getparam(int0, 2281);
            if (((int0 == 41081 as obj) && (varplayer_7253 != -1 as obj))) {
                int38 = item_getparam(varplayer_7253, 2281);
            };
            if ((int38 != -1 as struct)) {
                int38 = struct_getparam(int38, 7601);
                if ((int38 != -1 as struct)) {
                    int44 = script7235(script4744(int38, 1), string3, int2, int3, int4, int44);
                };
                int38 = -1 as struct;
            } else {
                int38 = item_getparam(int0, 7601);
                if (((int0 == 41081 as obj) && (varplayer_7253 != -1 as obj))) {
                    int38 = item_getparam(varplayer_7253, 7601);
                };
                if ((int38 != -1 as struct)) {
                    int44 = script7235(script4744(int38, 1), string3, int2, int3, int4, int44);
                    int38 = -1 as struct;
                };
            };
        };
        if (((item_getparam(int0, 7796) != -1 as dbrow) || ((OC_CATEGORY(int0) == 67 as category) && (item_getparam(int0, 1047) == 1)))) {
            int44 = script2579(int0, int7, int2, int3, int4, int44);
        };
        if ((item_getparam(int0, 6663) != -1 as dbrow)) {
            int44 = script14793(int0, int7, int2, int3, int4, int44);
        };
        if ((item_getparam(int0, 8229) == true)) {
            if ((INV_GETVAR(varclient_5121, varclient_5122, 27398) == 1)) {
                if ((int0 == 50682 as obj)) {
                    int44 = script7235("Discovery mode", string3, int2, int3, int4, int44);
                } else {
                    int44 = script7235("XP mode", string3, int2, int3, int4, int44);
                };
            } else if ((INV_GETVAR(varclient_5121, varclient_5122, 27398) == 2)) {
                if ((int0 == 50682 as obj)) {
                    int44 = script7235("Material mode", string3, int2, int3, int4, int44);
                } else if ((int0 == 34519 as obj)) {
                    int44 = script7235("Damage mode", string3, int2, int3, int4, int44);
                } else {
                    int44 = script7235("Resource mode", string3, int2, int3, int4, int44);
                };
            };
        };
        if ((OC_CATEGORY(int0) == 5694 as category)) {
            [int11, int12, int14] = script4705(item_getparam(int0, 9432));
            int44 = script7235(`Seeds required: <col=FF00>${inttostring(item_getparam(int0, 9433), 10)}`, string3, int2, int3, int4, int44);
            int44 = script7235(`Time to trap: <col=FF00>${script5729(-1, int12, int14, false, false)} seconds`, string3, int2, int3, int4, int44);
        };
        if (((item_getparam(int0, 6833) == 1) || (script4034(int0) == 1))) {
            int44 = script13776(int0, int3, int4, int44);
        };
        if ((item_getparam(int0, 667) != 0)) {
            if (((int0 == 27616 as obj) || (int0 == 27617 as obj))) {
                int44 = script7235(`Kills: ${TOSTRING_LOCALISED(varbitplayer_18238, 1)}`, string3, int2, int3, int4, int44);
            };
            if (((int0 == 27618 as obj) || (int0 == 27619 as obj))) {
                int44 = script7235(`Kills: ${TOSTRING_LOCALISED(varbitplayer_18242, 1)}`, string3, int2, int3, int4, int44);
            };
            if (((int0 == 27622 as obj) || (int0 == 27623 as obj))) {
                int44 = script7235(`Kills: ${TOSTRING_LOCALISED(varbitplayer_18250, 1)}`, string3, int2, int3, int4, int44);
            };
            if (((int0 == 27620 as obj) || (int0 == 27621 as obj))) {
                int44 = script7235(`Kills: ${TOSTRING_LOCALISED(varbitplayer_18246, 1)}`, string3, int2, int3, int4, int44);
            };
            if (((int0 == 27624 as obj) || (int0 == 27625 as obj))) {
                int44 = script7235(`Kills: ${TOSTRING_LOCALISED(varbitplayer_18254, 1)}`, string3, int2, int3, int4, int44);
            };
            if (((int0 == 31089 as obj) || (int0 == 31090 as obj))) {
                int44 = script7235(`Kills: ${TOSTRING_LOCALISED(varbitplayer_21930, 1)}`, string3, int2, int3, int4, int44);
            };
            if (((int0 == 31091 as obj) || (int0 == 31092 as obj))) {
                int44 = script7235(`Kills: ${TOSTRING_LOCALISED(varbitplayer_21934, 1)}`, string3, int2, int3, int4, int44);
            };
            if (((int0 == 31093 as obj) || (int0 == 31094 as obj))) {
                int44 = script7235(`Kills: ${TOSTRING_LOCALISED(varbitplayer_21938, 1)}`, string3, int2, int3, int4, int44);
                if ((DATE_RUNEDAY() < varbitplayer_21951)) {
                    int44 = script7235(`Days until task can be forced: ${TOSTRING_LOCALISED((varbitplayer_21951 - DATE_RUNEDAY()), 1)}`, string3, int2, int3, int4, int44);
                };
            };
            if (((int0 == 31095 as obj) || (int0 == 31096 as obj))) {
                int44 = script7235(`Kills: ${TOSTRING_LOCALISED(varbitplayer_21942, 1)}`, string3, int2, int3, int4, int44);
                if ((DATE_RUNEDAY() < varbitplayer_21951)) {
                    int44 = script7235(`Days until task can be forced: ${TOSTRING_LOCALISED((varbitplayer_21951 - DATE_RUNEDAY()), 1)}`, string3, int2, int3, int4, int44);
                };
            };
            if (((int0 == 31097 as obj) || (int0 == 31098 as obj))) {
                int44 = script7235(`Kills: ${TOSTRING_LOCALISED(varbitplayer_21946, 1)}`, string3, int2, int3, int4, int44);
                if ((DATE_RUNEDAY() < varbitplayer_21951)) {
                    int44 = script7235(`Days until task can be forced: ${TOSTRING_LOCALISED((varbitplayer_21951 - DATE_RUNEDAY()), 1)}`, string3, int2, int3, int4, int44);
                };
            };
            if (((int0 == 31099 as obj) || (int0 == 31100 as obj))) {
                int44 = script7235(`Kills: ${TOSTRING_LOCALISED(varbitplayer_21950, 1)}`, string3, int2, int3, int4, int44);
            };
            if (((int0 == 35277 as obj) || (int0 == 35278 as obj))) {
                int44 = script7235(`Kills: ${TOSTRING_LOCALISED(varbitplayer_26736, 1)}`, string3, int2, int3, int4, int44);
                if ((DATE_RUNEDAY() < varbitplayer_28874)) {
                    int44 = script7235(`Days until task can be forced: ${TOSTRING_LOCALISED((varbitplayer_28874 - DATE_RUNEDAY()), 1)}`, string3, int2, int3, int4, int44);
                };
            };
            if (((int0 == 35279 as obj) || (int0 == 35280 as obj))) {
                int44 = script7235(`Kills: ${TOSTRING_LOCALISED(varbitplayer_26740, 1)}`, string3, int2, int3, int4, int44);
            };
            if (((int0 == 35281 as obj) || (int0 == 35282 as obj))) {
                int44 = script7235(`Kills: ${TOSTRING_LOCALISED(varbitplayer_26744, 1)}`, string3, int2, int3, int4, int44);
                if ((DATE_RUNEDAY() < varbitplayer_28875)) {
                    int44 = script7235(`Days until task can be forced: ${TOSTRING_LOCALISED((varbitplayer_28875 - DATE_RUNEDAY()), 1)}`, string3, int2, int3, int4, int44);
                };
            };
            if (((int0 == 35285 as obj) || (int0 == 35286 as obj))) {
                int44 = script7235(`Kills: ${TOSTRING_LOCALISED(varbitplayer_28865, 1)}`, string3, int2, int3, int4, int44);
                if ((DATE_RUNEDAY() < varbitplayer_28877)) {
                    int44 = script7235(`Days until task can be forced: ${TOSTRING_LOCALISED((varbitplayer_28877 - DATE_RUNEDAY()), 1)}`, string3, int2, int3, int4, int44);
                };
            };
            if (((int0 == 35287 as obj) || (int0 == 35288 as obj))) {
                int44 = script7235(`Kills: ${TOSTRING_LOCALISED(varbitplayer_28869, 1)}`, string3, int2, int3, int4, int44);
                if ((DATE_RUNEDAY() < varbitplayer_28878)) {
                    int44 = script7235(`Days until task can be forced: ${TOSTRING_LOCALISED((varbitplayer_28878 - DATE_RUNEDAY()), 1)}`, string3, int2, int3, int4, int44);
                };
            };
            if (((int0 == 35289 as obj) || (int0 == 35290 as obj))) {
                int44 = script7235(`Kills: ${TOSTRING_LOCALISED(varbitplayer_28873, 1)}`, string3, int2, int3, int4, int44);
                if ((DATE_RUNEDAY() < varbitplayer_28879)) {
                    int44 = script7235(`Days until task can be forced: ${TOSTRING_LOCALISED((varbitplayer_28879 - DATE_RUNEDAY()), 1)}`, string3, int2, int3, int4, int44);
                };
            };
            if (((int0 == 35283 as obj) || (int0 == 35284 as obj))) {
                int44 = script7235(`Kills: ${TOSTRING_LOCALISED(varbitplayer_28861, 1)}`, string3, int2, int3, int4, int44);
                if ((DATE_RUNEDAY() < varbitplayer_28876)) {
                    int44 = script7235(`Days until task can be forced: ${TOSTRING_LOCALISED((varbitplayer_28876 - DATE_RUNEDAY()), 1)}`, string3, int2, int3, int4, int44);
                };
            };
            if (((int0 == 28686 as obj) || (int0 == 28687 as obj))) {
                int44 = script7235(`Kills: ${TOSTRING_LOCALISED(varbitplayer_18611, 1)}`, string3, int2, int3, int4, int44);
            };
            if (((int0 == 28688 as obj) || (int0 == 28689 as obj))) {
                int44 = script7235(`Kills: ${TOSTRING_LOCALISED(varbitplayer_18615, 1)}`, string3, int2, int3, int4, int44);
            };
            if (((int0 == 28690 as obj) || (int0 == 28691 as obj))) {
                int44 = script7235(`Kills: ${TOSTRING_LOCALISED(varbitplayer_18619, 1)}`, string3, int2, int3, int4, int44);
            };
            if (((int0 == 28692 as obj) || (int0 == 28693 as obj))) {
                int44 = script7235(`Kills: ${TOSTRING_LOCALISED(varbitplayer_18623, 1)}`, string3, int2, int3, int4, int44);
            };
            if (((int0 == 28694 as obj) || (int0 == 28695 as obj))) {
                int44 = script7235(`Kills: ${TOSTRING_LOCALISED(varbitplayer_18627, 1)}`, string3, int2, int3, int4, int44);
            };
        };
        if ((OC_HASVAROBJ(int0) == 1)) {
            switch (int0) {
                case 20120: {
                    if ((int0 == 20120 as obj)) {
                        int17 = INV_GETVAR(varclient_5121, varclient_5122, 15191);
                        int44 = script7235(`Charges remaining: ${inttostring(int17, 10)}`, string3, int2, int3, int4, int44);
                    };
                    break;
                }
                case 40408:
                case 42892: {
                    int40 = enum_getvalue(0, 32, 12737 as cs2enum, INV_GETVAR(varclient_5121, varclient_5122, 36325));
                    string1 = struct_getparam(enum_getvalue(32, 73, 12740 as cs2enum, int40), 6600);
                    int44 = script7235(`Soul contained: ${string1}`, string3, int2, int3, int4, int44);
                    break;
                }
                case 41076: {
                    int17 = INV_GETVAR(varclient_5121, varclient_5122, 37518);
                    int44 = script7235(`Charges remaining: ${inttostring((10 - int17), 10)}`, string3, int2, int3, int4, int44);
                    break;
                }
                case 41078: {
                    int17 = INV_GETVAR(varclient_5121, varclient_5122, 37519);
                    int44 = script7235(`Charges remaining: ${inttostring((10 - int17), 10)}`, string3, int2, int3, int4, int44);
                    break;
                }
                case 41083: {
                    int17 = INV_GETVAR(varclient_5121, varclient_5122, 37521);
                    int34 = INV_GETVAR(varclient_5121, varclient_5122, 37522);
                    int16 = INV_GETVAR(varclient_5121, varclient_5122, 37523);
                    int44 = script7235(`Empty divine charges stored: ${inttostring(int17, 10)}`, string3, int2, int3, int4, int44);
                    int44 = script7235(`Divine charges stored: ${inttostring(int34, 10)}`, string3, int2, int3, int4, int44);
                    int44 = script7235(`Charge container filled: ${inttostring(script12422(int16, 30000, 100), 10)}%`, string3, int2, int3, int4, int44);
                    break;
                }
                case 41085: {
                    int17 = INV_GETVAR(varclient_5121, varclient_5122, 37520);
                    int44 = script7235(`Charges remaining: ${inttostring((60 - int17), 10)}`, string3, int2, int3, int4, int44);
                    break;
                }
                case 42895: {
                    int44 = script7235(`Commander Zilyana kills stored: ${inttostring(INV_GETVAR(varclient_5121, varclient_5122, 40669), 10)}`, string3, int2, int3, int4, int44);
                    int44 = script7235(`K'ril Tsutsaroth kills stored: ${inttostring(INV_GETVAR(varclient_5121, varclient_5122, 40671), 10)}`, string3, int2, int3, int4, int44);
                    int44 = script7235(`General Graardor kills stored: ${inttostring(INV_GETVAR(varclient_5121, varclient_5122, 40673), 10)}`, string3, int2, int3, int4, int44);
                    int44 = script7235(`Kree'arra kills stored: ${inttostring(INV_GETVAR(varclient_5121, varclient_5122, 40675), 10)}`, string3, int2, int3, int4, int44);
                    break;
                }
                case 27360: {
                    int38 = enum_getvalue(0, 73, 7319 as cs2enum, INV_GETVAR(varclient_5121, varclient_5122, 17956));
                    string1 = enum_getvalue(0, 36, 1563 as cs2enum, struct_getparam(int38, 3248));
                    int17 = INV_GETVAR(varclient_5121, varclient_5122, 17957);
                    int44 = script7235(`Target to kill: ${string1}`, string3, int2, int3, int4, int44);
                    int44 = script7235(`Kills: ${inttostring(int17, 10)}`, string3, int2, int3, int4, int44);
                    break;
                }
                case 24205: {
                    int34 = INV_GETVAR(varclient_5121, varclient_5122, 16523);
                    int44 = script7235("Capacity: 18", string3, int2, int3, int4, int44);
                    if ((script14608(2896 as dbrow) == 1)) {
                        int44 = script7235("Charges remaining: <col=00ff00>Infinite - Relic active</col>", string3, int2, int3, int4, int44);
                    } else {
                        int44 = script7235(`Charges remaining: ${inttostring(int34, 10)}/756`, string3, int2, int3, int4, int44);
                    };
                    break;
                }
                case 21536: {
                    int17 = INV_GETVAR(varclient_5121, varclient_5122, 5129);
                    int44 = script7235(`Charges remaining: ${inttostring(int17, 10)}`, string3, int2, int3, int4, int44);
                    break;
                }
                case 42519: {
                    int17 = INV_GETVAR(varclient_5121, varclient_5122, 40136);
                    int44 = script7235(`Doses remaining: ${TOSTRING_LOCALISED(int17, 1)}/${TOSTRING_LOCALISED(2000, 1)}`, string3, int2, int3, int4, int44);
                    break;
                }
                case 21576: {
                    int17 = INV_GETVAR(varclient_5121, varclient_5122, 11080);
                    int44 = script7235(`Charges remaining: ${inttostring(int17, 10)}`, string3, int2, int3, int4, int44);
                    break;
                }
                case 21575: {
                    int17 = INV_GETVAR(varclient_5121, varclient_5122, 11080);
                    int44 = script7235(`Charges remaining: ${inttostring(int17, 10)}`, string3, int2, int3, int4, int44);
                    break;
                }
                case 42379: {
                    int17 = INV_GETVAR(varclient_5121, varclient_5122, 11080);
                    int44 = script7235(`Charges remaining: ${inttostring(int17, 10)}`, string3, int2, int3, int4, int44);
                    break;
                }
                case 47068: {
                    int37 = enum_getvalue(0, 33, 15095 as cs2enum, INV_GETVAR(varclient_5121, varclient_5122, 43222));
                    if ((int37 != -1 as obj)) {
                        int44 = script7235(`Item being created: ${OC_NAME(int37)}`, string3, int2, int3, int4, int44);
                        int44 = script7235(`Current heat: ${TOSTRING_LOCALISED(INV_GETVAR(varclient_5121, varclient_5122, 43225), 1)}/${TOSTRING_LOCALISED(script2547(int37), 1)} (${TOSTRING_LOCALISED(SCALE(INV_GETVAR(varclient_5121, varclient_5122, 43225), script2547(int37), 100), 1)}%)`, string3, int2, int3, int4, int44);
                        int44 = script7235(`Current progress: ${TOSTRING_LOCALISED(INV_GETVAR(varclient_5121, varclient_5122, 43223), 1)}/${TOSTRING_LOCALISED(item_getparam(int37, 7801), 1)} (${TOSTRING_LOCALISED(SCALE(INV_GETVAR(varclient_5121, varclient_5122, 43223), item_getparam(int37, 7801), 100), 1)}%) `, string3, int2, int3, int4, int44);
                        int44 = script7235(`Experience left in item: ${TOSTRING_LOCALISED((INV_GETVAR(varclient_5121, varclient_5122, 43224) / 10), 1)}`, string3, int2, int3, int4, int44);
                    };
                    break;
                }
                case 58111: {
                    int37 = enum_getvalue(0, 33, 6535 as cs2enum, INV_GETVAR(varclient_5121, varclient_5122, 56966));
                    if ((int37 != -1 as obj)) {
                        int44 = script7235(`Item being created: ${OC_NAME(int37)}`, string3, int2, int3, int4, int44);
                        int44 = script7235(`Current progress: ${TOSTRING_LOCALISED(INV_GETVAR(varclient_5121, varclient_5122, 56967), 1)}/${TOSTRING_LOCALISED(item_getparam(int37, 9218), 1)} (${TOSTRING_LOCALISED(SCALE(INV_GETVAR(varclient_5121, varclient_5122, 56967), item_getparam(int37, 9218), 100), 1)}%) `, string3, int2, int3, int4, int44);
                        int44 = script7235(`Experience left in item: ${TOSTRING_LOCALISED((INV_GETVAR(varclient_5121, varclient_5122, 56968) / 10), 1)}`, string3, int2, int3, int4, int44);
                    };
                    break;
                }
                case 45990: {
                    int44 = script7235(`Folding progress: ${inttostring(INV_GETVAR(varclient_5121, varclient_5122, 43229), 10)}/1001`, string3, int2, int3, int4, int44);
                    break;
                }
                case 47719: {
                    int17 = INV_GETVAR(varclient_5121, varclient_5122, 43749);
                    int34 = (10 + INV_GETVAR(varclient_5121, varclient_5122, 47701));
                    if ((INV_GETVAR(varclient_5121, varclient_5122, 43756) > 0)) {
                        int34 = (int34 + 3);
                    };
                    int16 = INV_GETVAR(varclient_5121, varclient_5122, 43757);
                    int19 = INV_GETVAR(varclient_5121, varclient_5122, 48186);
                    if ((int19 == 1)) {
                        if ((int16 == 1)) {
                            int44 = script7235("Divine Phoenix", string3, int2, int3, int4, int44);
                        } else {
                            int44 = script7235("Phoenix", string3, int2, int3, int4, int44);
                        };
                    } else if ((int16 == 1)) {
                        int44 = script7235("Divine", string3, int2, int3, int4, int44);
                    };
                    if (((int16 == 0) && (int19 == 0))) {
                        int44 = script7235(`Host item: ${enum_getvalue(0, 36, 12899 as cs2enum, int17)}`, string3, int2, int3, int4, int44);
                    };
                    int44 = script7235(`Reward rate: ${inttostring((int34 / 10), 10)}.${inttostring(MODULO(int34, 10), 10)}x`, string3, int2, int3, int4, int44);
                    break;
                }
                case 28014: {
                    int44 = script7235(`Charges remaining: ${TOSTRING_LOCALISED((100 - INV_GETVAR(varclient_5121, varclient_5122, 18289)), 1)}`, string3, int2, int3, int4, int44);
                    break;
                }
                case 48680: {
                    int44 = script7235(`Doses remaining: ${inttostring((INV_GETVAR(varclient_5121, varclient_5122, 18550) / 500), 10)}`, string3, int2, int3, int4, int44);
                    break;
                }
                case 49978: {
                    int17 = INV_GETVAR(varclient_5121, varclient_5122, 47034);
                    int44 = script7235(`Charges: ${TOSTRING_LOCALISED(int17, 1)}/${TOSTRING_LOCALISED(100000, 1)}`, string3, int2, int3, int4, int44);
                    break;
                }
                case 49981: {
                    int17 = INV_GETVAR(varclient_5121, varclient_5122, 47034);
                    int44 = script7235(`Charges left: ${TOSTRING_LOCALISED(int17, 1)}`, string3, int2, int3, int4, int44);
                    break;
                }
                case 37407: {
                    int44 = script7235(`Charge: ${inttostring(SCALE(INV_GETVAR(varclient_5121, varclient_5122, 31400), 30, 100), 10)}%`, string3, int2, int3, int4, int44);
                    break;
                }
                case 51275: {
                    int44 = script7235(`Charges remaining: ${inttostring(INV_GETVAR(varclient_5121, varclient_5122, 48985), 10)}`, string3, int2, int3, int4, int44);
                    break;
                }
                case 36619:
                case 36620: {
                    if ((varbitplayer_15960 == 1)) {
                        int44 = script7235("On activation: heals 4% of your maximum life points 10 times over 40 seconds. 5 minute cooldown.", string3, int2, int3, int4, int44);
                    } else {
                        int44 = script7235("On activation: heals 4% of your maximum life points 5 times over 20 seconds. 5 minute cooldown.", string3, int2, int3, int4, int44);
                    };
                    break;
                }
                case 57066: {
                    int44 = script7235(`You have performed ${inttostring(INV_GETVAR(varclient_5121, varclient_5122, 55665), 10)}/${inttostring(INV_GETVAR(varclient_5121, varclient_5122, 55664), 10)} rituals.`, string3, int2, int3, int4, int44);
                    int44 = script7235(`Preferred ritual type: ${enum_getvalue(0, 36, 17518 as cs2enum, INV_GETVAR(varclient_5121, varclient_5122, 55663))} rituals.`, string3, int2, int3, int4, int44);
                    break;
                }
                case 58325:
                case 58326: {
                    if ((varbitplayer_57039 < 200)) {
                        int44 = script7235(`Elite profane scabarites killed: ${inttostring(varbitplayer_57039, 10)} / ${inttostring(200, 10)}`, string3, int2, int3, int4, int44);
                    };
                    break;
                }
                case 58493: {
                    int37 = enum_getvalue(0, 33, 7927 as cs2enum, INV_GETVAR(varclient_5121, varclient_5122, 57697));
                    if ((int37 != -1 as obj)) {
                        int44 = script7235(`Item being created: ${OC_NAME(int37)}`, string3, int2, int3, int4, int44);
                        int44 = script7235(`Current progress: ${inttostring(INV_GETVAR(varclient_5121, varclient_5122, 57698), 10)}/${inttostring(item_getparam(int37, 9241), 10)} (${inttostring(SCALE(INV_GETVAR(varclient_5121, varclient_5122, 57698), item_getparam(int37, 9241), 100), 10)}%) `, string3, int2, int3, int4, int44);
                        int44 = script7235(`Experience left in item: ${inttostring((((item_getparam(int37, 9241) - INV_GETVAR(varclient_5121, varclient_5122, 57698)) * item_getparam(int37, 9242)) / 10), 10)}`, string3, int2, int3, int4, int44);
                    };
                    break;
                }
                default: {
                    switch (OC_CATEGORY(int0)) {
                        case 5568:
                        case 5569:
                        case 5570: {
                            int37 = enum_getvalue(0, 33, 8465 as cs2enum, INV_GETVAR(varclient_5121, varclient_5122, 58104));
                            if ((int37 != -1 as obj)) {
                                int44 = script7235(`Item being created: ${OC_NAME(int37)}`, string3, int2, int3, int4, int44);
                                if ((INV_GETVAR(varclient_5121, varclient_5122, 58107) >= script20006(int37))) {
                                    int44 = script7235("<col=ff0000>You have damaged this item. Until you repair it, your progress when working on this item is halved.", string3, int2, int3, int4, int44);
                                } else {
                                    int44 = script7235(`Current miscuts: ${TOSTRING_LOCALISED(INV_GETVAR(varclient_5121, varclient_5122, 58107), 1)}/${TOSTRING_LOCALISED(script20006(int37), 1)} (${TOSTRING_LOCALISED(SCALE(INV_GETVAR(varclient_5121, varclient_5122, 58107), script20006(int37), 100), 1)}%)`, string3, int2, int3, int4, int44);
                                };
                                int44 = script7235(`Current progress: ${TOSTRING_LOCALISED(INV_GETVAR(varclient_5121, varclient_5122, 58105), 1)}/${TOSTRING_LOCALISED(script20005(item_getparam(int37, 9300), int37), 1)} (${TOSTRING_LOCALISED(SCALE(INV_GETVAR(varclient_5121, varclient_5122, 58105), script20005(item_getparam(int37, 9300), int37), 100), 1)}%) `, string3, int2, int3, int4, int44);
                                int44 = script7235(`Experience left in item: ${TOSTRING_LOCALISED((INV_GETVAR(varclient_5121, varclient_5122, 58106) / 10), 1)}`, string3, int2, int3, int4, int44);
                            };
                            break;
                        }
                        case 4452: {
                            if ((item_getparam(int0, 7804) == 2)) {
                                int44 = script7235(`${inttostring(INV_GETVAR(varclient_5121, varclient_5122, 43230), 10)}/${inttostring(item_getparam(int0, 2665), 10)} rivets applied.`, string3, int2, int3, int4, int44);
                            };
                            break;
                        }
                        case 5442:
                        case 5506:
                        case 5572: {
                            if ((item_getparam(int0, 9122) > 0)) {
                                if ((item_getparam(int0, 9123) != -1 as obj)) {
                                    int44 = script7235(`Item to craft: ${OC_NAME(item_getparam(int0, 9123))}`, string3, int2, int3, int4, int44);
                                };
                                int44 = script7235(`Current progress: ${inttostring(INV_GETVAR(varclient_5121, varclient_5122, 55926), 10)}/${inttostring(item_getparam(int0, 9122), 10)} (${inttostring(SCALE(INV_GETVAR(varclient_5121, varclient_5122, 55926), item_getparam(int0, 9122), 100), 10)}%) `, string3, int2, int3, int4, int44);
                            };
                            break;
                        }
                        case 2804:
                        case 3794: {
                            if ((OC_CATEGORY(int0) == 2804 as category)) {
                                if (((varclient_5121 == 94 as inv) && (INV_GETVAR(varclient_5121, varclient_5122, 17232) == 1))) {
                                    int17 = varbitplayer_17234;
                                } else {
                                    int17 = INV_GETVAR(varclient_5121, varclient_5122, 17233);
                                };
                            } else if ((OC_CATEGORY(int0) == 3794 as category)) {
                                if ((INV_GETVAR(varclient_5121, varclient_5122, 30602) == 1)) {
                                    int17 = varbitplayer_30604;
                                } else {
                                    int17 = INV_GETVAR(varclient_5121, varclient_5122, 30603);
                                };
                            };
                            [int11, int12, int14] = script4705(int17);
                            if (((int11 == 0) && (int12 <= 59))) {
                                string6 = "<col=ff0000>";
                            };
                            if ((item_getparam(int0, 8727) != 0)) {
                                int44 = script7235(`<col=00ffff>${inttostring(script2475(item_getparam(int0, 8727)), 10)} second cooldown</col>.`, string3, int2, int3, int4, int44);
                            };
                            if ((item_getparam(int0, 9345) != 1)) {
                                int44 = script7235(`${string6}${script5729(int11, int12, int14, false, false)} remaining`, string3, int2, int3, int4, int44);
                            };
                            break;
                        }
                        case 5087: {
                            int44 = script9716(int0, varclient_5121, varclient_5122, int3, int4, int44, int7);
                            int44 = script10290(int0, varclient_5121, varclient_5122, int2, int3, int4, int44, string3);
                            break;
                        }
                        case 2771:
                        case 2769:
                        case 2770: {
                            int17 = INV_GETVAR(varclient_5121, varclient_5122, 3652);
                            int17 = SCALE(int17, 15000, 1000);
                            if ((int17 == 0)) {
                                int17 = 1;
                            };
                            string1 = inttostring((int17 / 10), 10);
                            string1 = strconcat(string1, `.${inttostring(MODULO(int17, 10), 10)}`);
                            string2 = "<col=ffffff>";
                            if ((int17 <= 250)) {
                                string2 = "<col=ff0000>";
                            } else if ((int17 <= 650)) {
                                string2 = "<col=FFA500>";
                            } else {
                                string2 = "<col=00ff00>";
                            };
                            int44 = script7235(`Item Charge: ${string2}${string1}%`, string3, int2, int3, int4, int44);
                            break;
                        }
                        case 3021: {
                            if ((int0 == 44550 as obj)) {
                                int44 = script7235(script13424(script734(varbitplayer_35985), `Stored sign of the porter (disabled) charges: ${inttostring(INV_GETVAR(varclient_5121, varclient_5122, 30214), 10)}/${inttostring(script17012(), 10)}`, `Stored sign of the porter charges: ${inttostring(INV_GETVAR(varclient_5121, varclient_5122, 30214), 10)}/${inttostring(script17012(), 10)}`), string3, int2, int3, int4, int44);
                            } else {
                                int44 = script7235(`Charges remaining: ${inttostring(INV_GETVAR(varclient_5121, varclient_5122, 20171), 10)}`, string3, int2, int3, int4, int44);
                            };
                            break;
                        }
                        case 3411: {
                            int17 = INV_GETVAR(varclient_5121, varclient_5122, 6114);
                            int44 = script7235(`Charges remaining: ${inttostring(int17, 10)}`, string3, int2, int3, int4, int44);
                            break;
                        }
                        case 3140: {
                            int17 = INV_GETVAR(varclient_5121, varclient_5122, 20976);
                            int34 = INV_GETVAR(varclient_5121, varclient_5122, 20977);
                            int44 = script7235(`Charges used: ${inttostring(int17, 10)}/${inttostring(int34, 10)}`, string3, int2, int3, int4, int44);
                            break;
                        }
                        case 3279: {
                            int17 = INV_GETVAR(varclient_5121, varclient_5122, 25008);
                            int44 = script7235(`Charges remaining: ${inttostring((100 - int17), 10)}`, string3, int2, int3, int4, int44);
                            break;
                        }
                        case 4223: {
                            if ((int0 != 42895 as obj)) {
                                int17 = INV_GETVAR(varclient_5121, varclient_5122, 18361);
                                int44 = script7235(`Kills stored: ${inttostring(int17, 10)}`, string3, int2, int3, int4, int44);
                            };
                            break;
                        }
                        case 4058: {
                            int17 = INV_GETVAR(varclient_5121, varclient_5122, 34484);
                            int44 = script7235(`Charges remaining: ${TOSTRING_LOCALISED(int17, 1)}/${TOSTRING_LOCALISED(enum_getvalue(33, 0, 11952 as cs2enum, int0), 1)}`, string3, int2, int3, int4, int44);
                            break;
                        }
                        case 4299: {
                            int17 = SCALE(((INV_GETVAR(varclient_5121, varclient_5122, 40237) + INV_GETVAR(varclient_5121, varclient_5122, 40238)) + INV_GETVAR(varclient_5121, varclient_5122, 40239)), item_getparam(int0, 4535), 100);
                            int44 = script7235(`Bag filled: ${inttostring(int17, 10)}%`, string3, int2, int3, int4, int44);
                            break;
                        }
                        case 4320: {
                            int17 = MIN(MAX(SCALE(INV_GETVAR(varclient_5121, varclient_5122, 40679), item_getparam(int0, 7176), 100), 0), 99);
                            int44 = script7235(`Jar filled: ${inttostring(int17, 10)}%`, string3, int2, int3, int4, int44);
                            break;
                        }
                        case 4322: {
                            int34 = item_getparam(int0, 7176);
                            if ((int0 == 42907 as obj)) {
                                if ((((((INV_GETVAR(varclient_5121, varclient_5122, 40680) == int34) && (INV_GETVAR(varclient_5121, varclient_5122, 40681) == int34)) && (INV_GETVAR(varclient_5121, varclient_5122, 40682) == int34)) && (INV_GETVAR(varclient_5121, varclient_5122, 40683) == int34)) && (INV_GETVAR(varclient_5121, varclient_5122, 40684) == int34))) {
                                    int44 = script7235("Memories successfully recovered", string3, int2, int3, int4, int44);
                                } else {
                                    int44 = script7235(`Lustrous data recovered: ${inttostring(INV_GETVAR(varclient_5121, varclient_5122, 40680), 10)}/${inttostring(int34, 10)}`, string3, int2, int3, int4, int44);
                                    int44 = script7235(`Brilliant data recovered: ${inttostring(INV_GETVAR(varclient_5121, varclient_5122, 40681), 10)}/${inttostring(int34, 10)}`, string3, int2, int3, int4, int44);
                                    int44 = script7235(`Radiant data recovered: ${inttostring(INV_GETVAR(varclient_5121, varclient_5122, 40682), 10)}/${inttostring(int34, 10)}`, string3, int2, int3, int4, int44);
                                    int44 = script7235(`Luminous data recovered: ${inttostring(INV_GETVAR(varclient_5121, varclient_5122, 40683), 10)}/${inttostring(int34, 10)}`, string3, int2, int3, int4, int44);
                                    int44 = script7235(`Incandescent data recovered: ${inttostring(INV_GETVAR(varclient_5121, varclient_5122, 40684), 10)}/${inttostring(int34, 10)}`, string3, int2, int3, int4, int44);
                                };
                            } else {
                                int17 = INV_GETVAR(varclient_5121, varclient_5122, 40679);
                                if ((int17 == int34)) {
                                    int44 = script7235("Memory successfully recovered", string3, int2, int3, int4, int44);
                                } else {
                                    int44 = script7235(`Data recovered: ${inttostring(int17, 10)}/${inttostring(int34, 10)}`, string3, int2, int3, int4, int44);
                                };
                            };
                            break;
                        }
                        case 4359: {
                            if (((varclient_5121 == 90 as inv) && (varclient_6492 == 1))) {
                                int44 = script7235(`Name: ${script1004(int0)}`, string3, int2, int3, int4, int44);
                                if ((INVOTHER_GETVAR(varclient_5121, varclient_5122, 41803) == 0)) {
                                    int44 = script7235("Gender: Male", string3, int2, int3, int4, int44);
                                } else {
                                    int44 = script7235("Gender: Female", string3, int2, int3, int4, int44);
                                };
                                if ((INVOTHER_GETVAR(varclient_5121, varclient_5122, 41805) == 1)) {
                                    int44 = script7235("Shiny!", string3, int2, int3, int4, int44);
                                };
                                int44 = script7235(`Growth stage: ${script1005(int0)}`, string3, int2, int3, int4, int44);
                                int44 = script7235("", string3, int2, int3, int4, int44);
                                int44 = script7235(script1006(int0), string3, int2, int3, int4, int44);
                                if ((INVOTHER_GETVAR(varclient_5121, varclient_5122, 41808) > 0)) {
                                    int44 = script7235(script1007(int0), string3, int2, int3, int4, int44);
                                };
                                if ((INVOTHER_GETVAR(varclient_5121, varclient_5122, 41809) > 0)) {
                                    int44 = script7235(script1008(int0), string3, int2, int3, int4, int44);
                                };
                            } else {
                                int44 = script7235(`Name: ${script999(int0)}`, string3, int2, int3, int4, int44);
                                if ((INV_GETVAR(varclient_5121, varclient_5122, 41803) == 0)) {
                                    int44 = script7235("Gender: Male", string3, int2, int3, int4, int44);
                                } else {
                                    int44 = script7235("Gender: Female", string3, int2, int3, int4, int44);
                                };
                                if ((INV_GETVAR(varclient_5121, varclient_5122, 41805) == 1)) {
                                    int44 = script7235("Shiny!", string3, int2, int3, int4, int44);
                                };
                                int44 = script7235(`Growth stage: ${script1000(int0)}`, string3, int2, int3, int4, int44);
                                int44 = script7235("", string3, int2, int3, int4, int44);
                                int44 = script7235(script1001(int0), string3, int2, int3, int4, int44);
                                if ((INV_GETVAR(varclient_5121, varclient_5122, 41808) > 0)) {
                                    int44 = script7235(script1002(int0), string3, int2, int3, int4, int44);
                                };
                                if ((INV_GETVAR(varclient_5121, varclient_5122, 41809) > 0)) {
                                    int44 = script7235(script1003(int0), string3, int2, int3, int4, int44);
                                };
                            };
                            break;
                        }
                        case 4431: {
                            string12 = script10184();
                            int44 = script7235(string12, string3, int2, int3, int4, int44);
                            int34 = INV_GETVAR(varclient_5121, varclient_5122, 30214);
                            int44 = script7236("Charges remaining:", int34, int7, "", int2, int3, int4, int44);
                            break;
                        }
                        case 5155: {
                            string12 = "Meals eaten:";
                            int44 = script7235(string12, string3, int2, int3, int4, int44);
                            int42 = INV_GETVAR(varclient_5121, varclient_5122, 4333);
                            if ((int42 == 0)) {
                                string12 = "None!";
                                int44 = script7235(string12, string3, int2, int3, int4, int44);
                            } else {
                                if ((TESTBIT(int42, 0) == 1)) {
                                    string12 = "-Berry mush";
                                    int44 = script7235(string12, string3, int2, int3, int4, int44);
                                };
                                if ((TESTBIT(int42, 1) == 1)) {
                                    string12 = "-Beany mush";
                                    int44 = script7235(string12, string3, int2, int3, int4, int44);
                                };
                                if ((TESTBIT(int42, 2) == 1)) {
                                    string12 = "-Cerealy mush";
                                    int44 = script7235(string12, string3, int2, int3, int4, int44);
                                };
                                if ((TESTBIT(int42, 3) == 1)) {
                                    string12 = "-Rooty mush";
                                    int44 = script7235(string12, string3, int2, int3, int4, int44);
                                };
                            };
                            break;
                        }
                        case 5235: {
                            int17 = INV_GETVAR(varclient_5121, varclient_5122, 18411);
                            int44 = script7235(`Corruption stored: ${inttostring(int17, 10)}`, string3, int2, int3, int4, int44);
                            break;
                        }
                        case 5292: {
                            int44 = script7235(`Mode: ${enum_getvalue(0, 36, 16911 as cs2enum, INV_GETVAR(varclient_5121, varclient_5122, 52915))}`, string3, int2, int3, int4, int44);
                            int44 = script7235(`Charges: ${TOSTRING_LOCALISED(INV_GETVAR(varclient_5121, varclient_5122, 52916), 1)}`, string3, int2, int3, int4, int44);
                            break;
                        }
                        case 5315: {
                            int44 = script7235(script17493(varclient_5121, int0, varclient_5122, 1), string3, int2, int3, int4, int44);
                            break;
                        }
                        case 5445: {
                            if ((INV_GETVAR(varclient_5121, varclient_5122, 18550) == 0)) {
                                string12 = "<col=FF0000>";
                            } else {
                                string12 = "<col=FF00>";
                            };
                            int44 = script7235(`Charges remaining: ${string12}${TOSTRING_LOCALISED(INV_GETVAR(varclient_5121, varclient_5122, 18550), 1)}`, string3, int2, int3, int4, int44);
                            break;
                        }
                        case 35: {
                            string12 = inttostring(enum_getvalue(33, 0, 6560 as cs2enum, int0), 10);
                            if ((((item_getparam(int0, 485) == 1265) || (item_getparam(int0, 485) == 1300)) && (STAT_BASE(8 as stat) >= struct_getparam(28972 as struct, 2212)))) {
                                string12 = inttostring((enum_getvalue(33, 0, 6560 as cs2enum, int0) + 2), 10);
                            };
                            int44 = script7235(`Cutting power: Tier ${string12}`, string3, int2, int3, int4, int44);
                            break;
                        }
                        default: {
                            if ((item_getparam(int0, 369) == 4)) {
                                int17 = MIN(MAX(SCALE(INV_GETVAR(varclient_5121, varclient_5122, 6139), item_getparam(int0, 368), 100), 1), 99);
                                int44 = script7235(`${item_getparam(int0, 6170)} filled: ${inttostring(int17, 10)}%`, string3, int2, int3, int4, int44);
                            } else if ((item_getparam(int0, 4563) == 1)) {
                                int17 = script670(varclient_5121, varclient_5122, int0);
                                if ((int17 == 0)) {
                                    int17 = 100;
                                } else {
                                    int17 = (100 - (int17 / (item_getparam(int0, 3385) / 100)));
                                    if ((int17 == 100)) {
                                        int17 = 99;
                                    };
                                };
                                string1 = inttostring(int17, 10);
                                string2 = "<col=ffffff>";
                                if ((int17 <= 25)) {
                                    string2 = "<col=ff0000>";
                                } else if ((int17 <= 65)) {
                                    string2 = "<col=FFA500>";
                                } else {
                                    string2 = "<col=00ff00>";
                                };
                                int44 = script7235(`Item Charge: ${string2}${string1}%`, string3, int2, int3, int4, int44);
                            } else if ((item_getparam(int0, 1324) == 1)) {
                                if ((item_getparam(int0, 5527) == -1 as obj)) {
                                    if ((item_getparam(int0, 3385) >= 1)) {
                                        int17 = script670(varclient_5121, varclient_5122, int0);
                                        if ((item_getparam(int0, 9308) == 1)) {
                                            int17 = MAX(0, (item_getparam(int0, 3385) - int17));
                                            int44 = script7235(`Charges remaining: ${inttostring(int17, 10)}`, string3, int2, int3, int4, int44);
                                        } else {
                                            if ((int17 == 0)) {
                                                int17 = 1000;
                                            } else {
                                                int17 = (1000 - (int17 / (item_getparam(int0, 3385) / 1000)));
                                                if (((int17 == 0) && (item_getparam(int0, 5772) == 0))) {
                                                    int17 = 1;
                                                };
                                                if ((int17 == 1000)) {
                                                    int17 = 999;
                                                };
                                            };
                                            if ((int17 == 0)) {
                                                string1 = "0.0";
                                            } else {
                                                string1 = inttostring((int17 / 10), 10);
                                                string1 = strconcat(string1, `.${inttostring(MODULO(int17, 10), 10)}`);
                                            };
                                            string2 = "<col=ffffff>";
                                            if ((int17 <= 250)) {
                                                string2 = "<col=ff0000>";
                                            } else if ((int17 <= 650)) {
                                                string2 = "<col=FFA500>";
                                            } else {
                                                string2 = "<col=00ff00>";
                                            };
                                            int44 = script7235(`Item Charge: ${string2}${string1}%`, string3, int2, int3, int4, int44);
                                        };
                                    } else if ((item_getparam(int0, 6880) == 0)) {
                                        if (((item_getparam(int0, 5777) != -1 as obj) && (item_getparam(int0, 5778) != -1 as obj))) {
                                            if ((OC_WEARPOS(int0) == 3)) {
                                                int17 = SCALE(INV_GETVAR(varclient_5121, varclient_5122, 507), 3000, 1000);
                                            } else {
                                                int17 = SCALE(INV_GETVAR(varclient_5121, varclient_5122, 507), 35000, 1000);
                                            };
                                        } else if ((item_getparam(int0, 3112) == 1)) {
                                            int17 = MIN(1000, SCALE(INV_GETVAR(varclient_5121, varclient_5122, 17233), (item_getparam(int0, 3109) / 10), 100));
                                        } else if ((int0 == 24338 as obj)) {
                                            int17 = (1000 - SCALE(INV_GETVAR(varclient_5121, varclient_5122, 16238), 6000, 100));
                                        } else if ((OC_CATEGORY(int0) == 3847 as category)) {
                                            int17 = SCALE(INV_GETVAR(varclient_5121, varclient_5122, 31193), item_getparam(int0, 5722), 1000);
                                        } else {
                                            int17 = (1000 - SCALE(INV_GETVAR(varclient_5121, varclient_5122, 15190), 6000, 100));
                                        };
                                        if ((int17 == 0)) {
                                            string1 = "0";
                                        } else {
                                            string1 = inttostring((int17 / 10), 10);
                                            string1 = strconcat(string1, `.${inttostring(MODULO(int17, 10), 10)}`);
                                        };
                                        if ((int17 <= 250)) {
                                            string2 = "<col=ff0000>";
                                        } else if ((int17 <= 650)) {
                                            string2 = "<col=FFA500>";
                                        } else {
                                            string2 = "<col=00ff00>";
                                        };
                                        int44 = script7235(`Item Charge: ${string2}${string1}%`, string3, int2, int3, int4, int44);
                                    };
                                } else if ((item_getparam(int0, 1079) >= 1)) {
                                    int17 = INV_GETVAR(varclient_5121, varclient_5122, 2156);
                                    int17 = (1000 - SCALE(int17, 6000, 100));
                                    if ((int17 == 0)) {
                                        int17 = 1;
                                    };
                                    string1 = inttostring((int17 / 10), 10);
                                    string1 = strconcat(string1, `.${inttostring(MODULO(int17, 10), 10)}`);
                                    string2 = "<col=ffffff>";
                                    if ((int17 <= 250)) {
                                        string2 = "<col=ff0000>";
                                    } else if ((int17 <= 650)) {
                                        string2 = "<col=FFA500>";
                                    } else {
                                        string2 = "<col=00ff00>";
                                    };
                                    int44 = script7235(`Item Charge: ${string2}${string1}%`, string3, int2, int3, int4, int44);
                                };
                            } else if ((item_getparam(int0, 6834) >= 1)) {
                                int17 = MIN(MAX(INV_GETVAR(varclient_5121, varclient_5122, 17713), 1), 60000);
                                int34 = SCALE((60000 - int17), 60000, 1000);
                                string2 = "<col=ffffff>";
                                if ((int34 <= 250)) {
                                    string2 = "<col=ff0000>";
                                } else if ((int34 <= 650)) {
                                    string2 = "<col=FFA500>";
                                } else {
                                    string2 = "<col=00ff00>";
                                };
                                int44 = script7235(`Item Charge: ${string2}${inttostring((int34 / 10), 10)}${script8002()}${inttostring(MODULO(int34, 10), 10)}%`, string3, int2, int3, int4, int44);
                            };
                            break;
                        }
                    };
                    break;
                }
            };
        } else {
            switch (int0) {
                case 44155: {
                    if (((varplayer_3079 >= struct_getparam(40722 as struct, 7487)) && (varplayer_3079 <= struct_getparam(40722 as struct, 7489)))) {
                        int44 = script7235(`Charges: ${TOSTRING_LOCALISED(varbitplayer_42023, 1)}/${TOSTRING_LOCALISED(4000, 1)}<br>Provides a 2% XP boost while equipped or in your inventory.`, string3, int2, int3, int4, int44);
                    };
                    break;
                }
                case 44210: {
                    int44 = script7235(`Adrenaline stored: ${TOSTRING_LOCALISED((varbitplayer_42160 / 10), 1)}%`, string3, int2, int3, int4, int44);
                    break;
                }
                case 31846: {
                    string1 = enum_getvalue(0, 36, 9197 as cs2enum, varbitplayer_22901);
                    int44 = script7235(`Reaper assignment: ${string1}`, string3, int2, int3, int4, int44);
                    if ((varbitplayer_22902 >= 1)) {
                        int17 = script7235(`Kills remaining: ${TOSTRING_LOCALISED(varbitplayer_22902, 1)}`, string3, int2, int3, int4, int44);
                    };
                    break;
                }
                case 4155: {
                    string1 = enum_getstring(1563, varplayer_185);
                    int44 = script7235(`Slayer assignment: ${string1}`, string3, int2, int3, int4, int44);
                    if ((varplayer_183 >= 1)) {
                        int17 = script7235(`Kills remaining: ${TOSTRING_LOCALISED(varplayer_183, 1)}`, string3, int2, int3, int4, int44);
                    };
                    break;
                }
                case 41092: {
                    if ((varbitplayer_37578 >= 1)) {
                        int44 = script7235(`Siphons stored: ${TOSTRING_LOCALISED(varbitplayer_37578, 1)}`, string3, int2, int3, int4, int44);
                    };
                    if ((varbitplayer_37579 >= 1)) {
                        int44 = script7235(`Crystal Siphons stored: ${TOSTRING_LOCALISED(varbitplayer_37579, 1)}`, string3, int2, int3, int4, int44);
                    };
                    break;
                }
                case 5521: {
                    int44 = script7235(`Charges available: ${inttostring(varplayer_3216, 10)}`, string1, int2, int3, int4, int44);
                    break;
                }
                case 43358: {
                    int44 = script7235("Call upon elvish dark magic to restore 37% of your total prayer points over 30 seconds. 5 Minute cooldown between each use.", string3, int2, int3, int4, int44);
                    break;
                }
                case 28015: {
                    int44 = script7235(`Charges remaining: ${inttostring(100, 10)}`, string3, int2, int3, int4, int44);
                    break;
                }
                case 24135:
                case 24136: {
                    int44 = script7235(`Charges remaining: ${inttostring((item_getparam(int0, 7706) - varbitplayer_15705), 10)}`, string3, int2, int3, int4, int44);
                    break;
                }
                case 51276: {
                    int44 = script7235(`Charges remaining: ${TOSTRING_LOCALISED(60, 1)}`, string3, int2, int3, int4, int44);
                    break;
                }
                case 51505: {
                    int44 = script7235(`Charges remaining: ${inttostring(varbitplayer_49361, 10)}%`, string3, int2, int3, int4, int44);
                    break;
                }
                case 52169:
                case 52171:
                case 52172:
                case 51791: {
                    if ((varbitplayer_49720 == 1)) {
                        int44 = script7235(`Damage: <col=FF00>${inttostring(200, 10)}%</col>`, string3, int2, int3, int4, int44);
                    } else {
                        int44 = script7235("Damage: <col=FF00>100%</col>", string3, int2, int3, int4, int44);
                    };
                    break;
                }
                case 37400: {
                    if ((varbitplayer_49721 == 1)) {
                        int44 = script7235(`Damage: <col=FF00>${inttostring(150, 10)}%</col>`, string3, int2, int3, int4, int44);
                    } else {
                        int44 = script7235("Damage: <col=FF00>100%</col>", string3, int2, int3, int4, int44);
                    };
                    break;
                }
                case 37408: {
                    if ((varbitplayer_49722 == 1)) {
                        int44 = script7235(`Damage: <col=FF00>${inttostring(150, 10)}%</col>`, string3, int2, int3, int4, int44);
                    } else {
                        int44 = script7235("Damage: <col=FF00>100%</col>", string3, int2, int3, int4, int44);
                    };
                    break;
                }
                case 14632: {
                    if ((varbitplayer_15960 == 1)) {
                        int44 = script7235("On activation: heals 4% of your maximum life points 10 times over 40 seconds. 5 minute cooldown.", string3, int2, int3, int4, int44);
                    } else {
                        int44 = script7235("On activation: heals 4% of your maximum life points 5 times over 20 seconds. 5 minute cooldown.", string3, int2, int3, int4, int44);
                    };
                    break;
                }
                case 2572:
                case 20653:
                case 20655:
                case 20657:
                case 20659:
                case 41069: {
                    string12 = script10184();
                    int44 = script7235(string12, string3, int2, int3, int4, int44);
                    break;
                }
                case 39808:
                case 44558: {
                    string12 = "Provides unlimited teleports to the Varrock Grand Exchange";
                    if ((varplayer_2236 >= 100)) {
                        string12 = `${string12} and Miscellania`;
                    };
                    int44 = script7235(`${string12}.`, string3, int2, int3, int4, int44);
                    break;
                }
                case 39812:
                case 44559: {
                    string12 = "Provides unlimited teleports to the Varrock Grand Exchange";
                    if ((varplayer_2236 >= 100)) {
                        if ((varbitplayer_13266 >= 5)) {
                            string12 = `${string12}, Miscellania`;
                        } else {
                            string12 = `${string12} and Miscellania`;
                        };
                    };
                    if ((varbitplayer_13266 >= 5)) {
                        string12 = `${string12} and Keldagrim`;
                    };
                    int44 = script7235(`${string12}.`, string3, int2, int3, int4, int44);
                    break;
                }
                case 39814:
                case 44560: {
                    string12 = "Provides unlimited teleports to the Varrock Grand Exchange";
                    if ((varplayer_2236 >= 100)) {
                        string12 = `${string12}, Miscellania`;
                    };
                    if ((varbitplayer_13266 >= 5)) {
                        string12 = `${string12}, Keldagrim`;
                    };
                    string12 = `${string12} and the Tree Gnome Stronghold.`;
                    int44 = script7235(string12, string3, int2, int3, int4, int44);
                    break;
                }
                case 59216: {
                    if ((varbitplayer_58116 < 1)) {
                        string12 = `Damage remaining: ${TOSTRING_LOCALISED(10000, 1)}`;
                    } else {
                        string12 = `Damage remaining: ${TOSTRING_LOCALISED(varbitplayer_58116, 1)}`;
                    };
                    int44 = script7235(string12, string3, int2, int3, int4, int44);
                    break;
                }
                case 59218: {
                    string12 = `Damage remaining: ${TOSTRING_LOCALISED(varbitplayer_58117, 1)}`;
                    int44 = script7235(string12, string3, int2, int3, int4, int44);
                    break;
                }
                case 59221: {
                    string12 = `Charges remaining: ${TOSTRING_LOCALISED(50, 1)}`;
                    int44 = script7235(string12, string3, int2, int3, int4, int44);
                    break;
                }
                case 59226: {
                    string12 = `Charges remaining: ${TOSTRING_LOCALISED(10, 1)}`;
                    int44 = script7235(string12, string3, int2, int3, int4, int44);
                    break;
                }
                case 59233: {
                    string12 = `Charges remaining: ${TOSTRING_LOCALISED(250, 1)}`;
                    int44 = script7235(string12, string3, int2, int3, int4, int44);
                    break;
                }
                case 59238: {
                    string12 = `Charges remaining: ${TOSTRING_LOCALISED(10, 1)}`;
                    int44 = script7235(string12, string3, int2, int3, int4, int44);
                    break;
                }
                case 53754: {
                    string12 = "A box that can be activated once a day, allowing you to deposit items from your backpack to your bank for one hour.";
                    if ((varbitplayer_51871 > 0)) {
                        string12 = `${string12}<br>Time remaining: ${inttostring(MAX(1, (varbitplayer_51871 / 4)), 10)} ${script4583(MAX(1, (varbitplayer_51871 / 4)), "minute", "minutes")}`;
                    } else if ((varbitplayer_51808 == 1)) {
                        string12 = `${string12}<br>You can activate this again tomorrow.`;
                    };
                    int44 = script7235(string12, string3, int2, int3, int4, int44);
                    break;
                }
                case 56169: {
                    int44 = script7235(`Progress: ${inttostring(varbitplayer_54795, 10)} / ${inttostring(50, 10)}`, string3, int2, int3, int4, int44);
                    break;
                }
                case 56552: {
                    int44 = script7235(`Progress: ${inttostring(varbitplayer_55172, 10)} / ${inttostring(50, 10)}`, string3, int2, int3, int4, int44);
                    break;
                }
                case 56630: {
                    int44 = script7235(`Charges: ${inttostring(varbitplayer_55320, 10)}`, string3, int2, int3, int4, int44);
                    break;
                }
                case 57064: {
                    int44 = script7235(script18986(), string3, int2, int3, int4, int44);
                    break;
                }
                case 57517: {
                    int42 = 2500;
                    if ((varplayer_11842 == 1)) {
                        int42 = 3000;
                    };
                    int43 = ((INV_TOTAL(93 as inv, 57517 as obj) + INV_TOTAL(530 as inv, 57517 as obj)) * int42);
                    int44 = script7235(`- Striking the Gate of Elidinis cleanses <col=00FFFF>${TOSTRING_LOCALISED(int42, 1)}</col> from her corruption<br>- Striking during <col=ffffff>Icthlarin's aid</col> will use all shards at once, increasing the corruption cleansed by <col=ffffff>5-25%</col>, as well as reducing <col=ffffff>Corruption</col> by <col=ffffff>${inttostring(2, 10)}</col> per piece.<br>- Pieces held cleanses a total of <col=00FFFF>${TOSTRING_LOCALISED(int43, 1)}</col>.`, string3, int2, int3, int4, int44);
                    int44 = script7235(`- With Icthlarin's Aid speed 4: <col=00FFFF>${TOSTRING_LOCALISED(SCALE(int43, 100, (100 + 5)), 1)}</col>.`, string3, int2, int3, int4, int44);
                    int44 = script7235(`- With Icthlarin's Aid speed 3: <col=00FFFF>${TOSTRING_LOCALISED(SCALE(int43, 100, (100 + 10)), 1)}</col>.`, string3, int2, int3, int4, int44);
                    int44 = script7235(`- With Icthlarin's Aid speed 2: <col=00FFFF>${TOSTRING_LOCALISED(SCALE(int43, 100, (100 + 15)), 1)}</col>.`, string3, int2, int3, int4, int44);
                    int44 = script7235(`- With Icthlarin's Aid speed 1: <col=00FFFF>${TOSTRING_LOCALISED(SCALE(int43, 100, (100 + 25)), 1)}</col>.`, string3, int2, int3, int4, int44);
                    break;
                }
                case 58256: {
                    switch (varbitplayer_56949) {
                        case 0: {
                            string12 = "not attuned";
                            break;
                        }
                        case 1: {
                            string12 = "attuned to attract nests with seeds";
                            break;
                        }
                        case 2: {
                            string12 = "attuned to attract nests with rings";
                            break;
                        }
                        case 3: {
                            string12 = "attuned to attract nests with eggs";
                            break;
                        }
                    };
                    int44 = script7235(`Your bird whistle is ${string12}.`, string3, int2, int3, int4, int44);
                    break;
                }
                case 58324: {
                    if ((varbitplayer_57039 < 200)) {
                        int44 = script7235(`Elite profane scabarites killed: ${inttostring(varbitplayer_57039, 10)} / ${inttostring(200, 10)}`, string3, int2, int3, int4, int44);
                    };
                    break;
                }
                case 59952: {
                    string12 = `Loot Stored: ${TOSTRING_LOCALISED(varbitplayer_60144, 1)}`;
                    int44 = script7235(string12, string3, int2, int3, int4, int44);
                    break;
                }
                default: {
                    switch (OC_CATEGORY(int0)) {
                        case 5383: {
                            if ((script19680() == 1)) {
                                int44 = script7235("Collect all 6 and combine them to unlock the ability to recolour each colour zone.", string3, int2, int3, int4, int44);
                                if ((varbitplayer_54893 == 1)) {
                                    string4 = "<col=FF00>";
                                } else {
                                    string4 = "<col=777777>";
                                };
                                int44 = script7235(`Winter scarf 1: ${string4}Santa's Lodge`, string3, int2, int3, int4, int44);
                                if ((varbitplayer_54894 == 1)) {
                                    string4 = "<col=FF00>";
                                } else {
                                    string4 = "<col=777777>";
                                };
                                int44 = script7235(`Winter scarf 2: ${string4}Santa's Lodge`, string3, int2, int3, int4, int44);
                                if ((varbitplayer_54895 == 1)) {
                                    string4 = "<col=FF00>";
                                } else {
                                    string4 = "<col=777777>";
                                };
                                int44 = script7235(`Winter scarf 3: ${string4}Holly's Christmas Spirit Shop`, string3, int2, int3, int4, int44);
                                if ((varbitplayer_54896 == 1)) {
                                    string4 = "<col=FF00>";
                                } else {
                                    string4 = "<col=777777>";
                                };
                                int44 = script7235(`Winter scarf 4: ${string4}Holly's Christmas Spirit Shop`, string3, int2, int3, int4, int44);
                                if ((varbitplayer_54897 == 1)) {
                                    string4 = "<col=FF00>";
                                } else {
                                    string4 = "<col=777777>";
                                };
                                int44 = script7235(`Winter scarf 5: ${string4}A Christmas Reunion quest`, string3, int2, int3, int4, int44);
                                if ((varbitplayer_54898 == 1)) {
                                    string4 = "<col=FF00>";
                                } else {
                                    string4 = "<col=777777>";
                                };
                                int44 = script7235(`Winter scarf 6: ${string4}It's Snow Bother quest`, string3, int2, int3, int4, int44);
                            };
                            break;
                        }
                        case 5382: {
                            if ((script19680() == 1)) {
                                int44 = script7235("Collect all 6 and combine them to unlock the ability to recolour each colour zone.", string3, int2, int3, int4, int44);
                                if ((varbitplayer_54899 == 1)) {
                                    string4 = "<col=FF00>";
                                } else {
                                    string4 = "<col=777777>";
                                };
                                int44 = script7235(`Winter hat 1: ${string4}Santa's Lodge`, string3, int2, int3, int4, int44);
                                if ((varbitplayer_54900 == 1)) {
                                    string4 = "<col=FF00>";
                                } else {
                                    string4 = "<col=777777>";
                                };
                                int44 = script7235(`Winter hat 2: ${string4}Santa's Lodge`, string3, int2, int3, int4, int44);
                                if ((varbitplayer_54901 == 1)) {
                                    string4 = "<col=FF00>";
                                } else {
                                    string4 = "<col=777777>";
                                };
                                int44 = script7235(`Winter hat 3: ${string4}Holly's Christmas Spirit Shop`, string3, int2, int3, int4, int44);
                                if ((varbitplayer_54902 == 1)) {
                                    string4 = "<col=FF00>";
                                } else {
                                    string4 = "<col=777777>";
                                };
                                int44 = script7235(`Winter hat 4: ${string4}Holly's Christmas Spirit Shop`, string3, int2, int3, int4, int44);
                                if ((varbitplayer_54903 == 1)) {
                                    string4 = "<col=FF00>";
                                } else {
                                    string4 = "<col=777777>";
                                };
                                int44 = script7235(`Winter hat 5: ${string4}A Christmas Reunion quest`, string3, int2, int3, int4, int44);
                                if ((varbitplayer_54904 == 1)) {
                                    string4 = "<col=FF00>";
                                } else {
                                    string4 = "<col=777777>";
                                };
                                int44 = script7235(`Winter hat 6: ${string4}It's Snow Bother quest`, string3, int2, int3, int4, int44);
                            };
                            break;
                        }
                        case 4222: {
                            switch (int0) {
                                case 5509: {
                                    int34 = 3;
                                    int11 = 0;
                                    int25 = 0;
                                    break;
                                }
                                case 5510:
                                case 5511: {
                                    int34 = script1569();
                                    int11 = varplayer_3217;
                                    int25 = 800;
                                    break;
                                }
                                case 5512:
                                case 5513: {
                                    int34 = script1764();
                                    int11 = varplayer_3218;
                                    int25 = 1000;
                                    break;
                                }
                                case 5514:
                                case 5515: {
                                    int34 = script2258();
                                    int11 = varplayer_3219;
                                    int25 = 1200;
                                    break;
                                }
                                case 58451: {
                                    int34 = script8755(58451);
                                    break;
                                }
                                case 24205:
                                case 24204: {
                                    int34 = -1;
                                    break;
                                }
                            };
                            if ((int34 != -1)) {
                                if ((int34 > 0)) {
                                    int44 = script7235(`Capacity: ${inttostring(int34, 10)}`, string3, int2, int3, int4, int44);
                                    if ((int25 > 0)) {
                                        int11 = SCALE((int25 - int11), int25, 100);
                                        if ((script14608(2896 as dbrow) == 1)) {
                                            int44 = script7235("Durability: <col=00ff00>100% - Relic active</col>", string3, int2, int3, int4, int44);
                                        } else {
                                            int44 = script7235(`Durability: ${script4229(int11, 20, 80, string3)}${inttostring(int11, 10)}%`, string3, int2, int3, int4, int44);
                                        };
                                    };
                                } else if ((int34 > 0)) {
                                    int44 = script7235(`Capacity: ${inttostring(int34, 10)}`, string3, int2, int3, int4, int44);
                                };
                            };
                            int11 = 0;
                            break;
                        }
                        case 3567: {
                            string2 = "<col=ffffff>";
                            if ((varbitplayer_27394 <= 50000)) {
                                string2 = "<col=ff0000>";
                            } else if ((varbitplayer_27394 <= 100000)) {
                                string2 = "<col=FFA500>";
                            } else {
                                string2 = "<col=00ff00>";
                            };
                            int44 = script7235(`XP remaining: ${string2}${TOSTRING_LOCALISED((varbitplayer_27394 / 10), 1)}`, string3, int2, int3, int4, int44);
                            break;
                        }
                        case 4564: {
                            string2 = "<col=ffffff>";
                            if ((varbitplayer_45288 <= (varbitplayer_45291 / 4))) {
                                string2 = "<col=ff0000>";
                            } else if ((varbitplayer_45288 <= (varbitplayer_45291 / 2))) {
                                string2 = "<col=FFA500>";
                            } else {
                                string2 = "<col=00ff00>";
                            };
                            int44 = script7235(`Bonus XP burn remaining: ${string2}${TOSTRING_LOCALISED((varbitplayer_45288 / 10), 1)}`, string3, int2, int3, int4, int44);
                            break;
                        }
                        case 4058: {
                            int17 = enum_getvalue(33, 0, 11952 as cs2enum, int0);
                            int44 = script7235(`Charges remaining: ${TOSTRING_LOCALISED(int17, 1)}/${TOSTRING_LOCALISED(int17, 1)}`, string3, int2, int3, int4, int44);
                            break;
                        }
                        case 2804: {
                            int17 = item_getparam(int0, 3109);
                            [int11, int12, int14] = script4705(int17);
                            int44 = script7235(`${script5729(int11, int12, int14, false, false)} remaining`, string3, int2, int3, int4, int44);
                            break;
                        }
                        case 4452: {
                            if ((item_getparam(int0, 7804) == 1)) {
                                int44 = script7235(`0/${inttostring(item_getparam(item_getparam(int0, 7807), 2665), 10)} rivets applied.`, string3, int2, int3, int4, int44);
                            };
                            break;
                        }
                        case 4480: {
                            int44 = script7235(script6345(int0), string3, int2, int3, int4, int44);
                            break;
                        }
                        case 3573: {
                            int44 = script7235(script10081(int0), string3, int2, int3, int4, int44);
                            break;
                        }
                        case 3787:
                        case 3789:
                        case 3788:
                        case 3790:
                        case 3791:
                        case 3792: {
                            int44 = script7235(script519(OC_CATEGORY(int0)), string3, int2, int3, int4, int44);
                            break;
                        }
                        case 3017:
                        case 3018:
                        case 3015: {
                            int44 = script7235("Is automatically consumed when you are damaged to under half your life points.", string3, int2, int3, int4, int44);
                            break;
                        }
                        case 3025:
                        case 3023: {
                            int44 = script7235("Is automatically consumed on death.", string3, int2, int3, int4, int44);
                            break;
                        }
                        case 3024:
                        case 3022: {
                            int44 = script7235("Is automatically consumed on death if equipped.", string3, int2, int3, int4, int44);
                            break;
                        }
                        case 3019: {
                            int44 = script7235("Is automatically consumed on death if equipped, or if you equip it while you have an active gravestone.", string3, int2, int3, int4, int44);
                            break;
                        }
                        case 35: {
                            string12 = inttostring(enum_getvalue(33, 0, 6560 as cs2enum, int0), 10);
                            if ((((item_getparam(int0, 485) == 1265) || (item_getparam(int0, 485) == 1300)) && (STAT_BASE(8 as stat) >= struct_getparam(28972 as struct, 2212)))) {
                                string12 = inttostring((enum_getvalue(33, 0, 6560 as cs2enum, int0) + 2), 10);
                            };
                            int44 = script7235(`Cutting power: Tier ${string12}`, string3, int2, int3, int4, int44);
                            break;
                        }
                        default: {
                            if ((item_getparam(int0, 3203) == 39402 as struct)) {
                                int17 = (3 + script3862());
                                switch (int0) {
                                    case 42111:
                                    case 42112:
                                    case 42113:
                                    case 42114: {
                                        int18 = (5 - script3862());
                                        if ((script20152() == 0)) {
                                            int44 = script7235(`Charges available: ${inttostring(varbitplayer_39468, 10)}/${inttostring(int17, 10)}`, string1, int2, int3, int4, int44);
                                            int44 = script7235(`Next charge progress: ${inttostring(varbitplayer_39465, 10)}/${inttostring(int18, 10)}`, string1, int2, int3, int4, int44);
                                        } else {
                                            int44 = script7235("Charges available: Unlimited!", string1, int2, int3, int4, int44);
                                        };
                                        break;
                                    }
                                    case 42119:
                                    case 42120:
                                    case 42121:
                                    case 42122: {
                                        int18 = (5 - script3862());
                                        if ((script20152() == 0)) {
                                            int44 = script7235(`Charges available: ${inttostring(varbitplayer_39469, 10)}/${inttostring(int17, 10)}`, string1, int2, int3, int4, int44);
                                            int44 = script7235(`Next charge progress: ${inttostring(varbitplayer_39466, 10)}/${inttostring(int18, 10)}`, string1, int2, int3, int4, int44);
                                        } else {
                                            int44 = script7235("Charges available: Unlimited!", string1, int2, int3, int4, int44);
                                        };
                                        break;
                                    }
                                    case 42107:
                                    case 42108:
                                    case 42109:
                                    case 42110: {
                                        int18 = (2 - script3862());
                                        if ((script20152() == 0)) {
                                            int44 = script7235(`Charges available: ${inttostring(varbitplayer_39470, 10)}/${inttostring(int17, 10)}`, string1, int2, int3, int4, int44);
                                            int44 = script7235(`Next charge progress: ${inttostring(varbitplayer_39467, 10)}/${inttostring(int18, 10)}`, string1, int2, int3, int4, int44);
                                        } else {
                                            int44 = script7235("Charges available: Unlimited!", string1, int2, int3, int4, int44);
                                        };
                                        break;
                                    }
                                };
                            };
                            break;
                        }
                    };
                    break;
                }
            };
        };
    };
    switch (int0) {
        case 59358: {
            if ((item_getparam(int0, 8928) != -1 as struct)) {
                int44 = script7235(`Passive: ${struct_getparam(item_getparam(int0, 8928), 2794)}<br>${script17663(int0)}`, string3, int2, int3, int4, int44);
            };
            break;
        }
    };
    if (((item_getparam(int0, 8695) == 1) && (OC_HASVAROBJ(int0) == 1))) {
        int17 = INV_GETVAR(varclient_5121, varclient_5122, 51776);
        int16 = INV_GETVAR(varclient_5121, varclient_5122, 51777);
        if (((int17 == 1) || (int16 != 1))) {
            int29 = 1;
            int44 = script7235("<col=ff0000>May no longer be traded.", string3, int2, int3, int4, int44);
        } else if ((script12477() <= item_getparam(int0, 8697))) {
            int29 = 0;
            int44 = script7235("<col=ff0000>May only be traded once.", string3, int2, int3, int4, int44);
        };
    };
    if (((int29 == 0) && (item_getparam(int0, 8697) != -1))) {
        int17 = item_getparam(int0, 8697);
        if ((script12477() <= int17)) {
            string12 = script3381(int17);
            int44 = script7235(`<col=ff0000>May only be traded until ${string12}.`, string3, int2, int3, int4, int44);
        } else {
            int29 = 1;
            int44 = script7235("<col=ff0000>May no longer be traded.", string3, int2, int3, int4, int44);
        };
    };
    if ((((int29 == 0) && (item_getparam(int0, 8696) == true)) && (script16823() == true))) {
        int44 = script7235("<col=ff0000>May only be traded outside of Fresh Start Worlds.", string3, int2, int3, int4, int44);
    };
    if ((strcmp(item_getparam(int0, 3200), "") != 0)) {
        string9 = script8240(-1 as struct, int0);
        if (((script4148() == true) && (strcmp(item_getparam(int0, 8572), "") != 0))) {
            int44 = script7235(`${string9}${item_getparam(int0, 8572)}`, string3, int2, int3, int4, int44);
        } else {
            int44 = script7235(`${string9}${item_getparam(int0, 3200)}`, string3, int2, int3, int4, int44);
        };
    };
    if ((item_getparam(int0, 8839) != 0)) {
        int44 = script7235(`Time until expiry: <col=00ffff>${script3354(item_getparam(int0, 8839), 1, "Expired!")} `, string3, int2, int3, int4, int44);
    };
    if ((int6 == 819 as inv)) {
        if ((STRING_LENGTH(item_getparam(int0, 4085)) > 0)) {
            int44 = script7235(item_getparam(int0, 4085), string3, int2, int3, int4, int44);
        };
        if ((STRING_LENGTH(item_getparam(int0, 2231)) > 0)) {
            int44 = script7235(item_getparam(int0, 2231), string3, int2, int3, int4, int44);
        };
    };
    if ((strcmp(varclient_4645, "") != 0)) {
        string7 = "<col=00ff00>";
        int44 = script7235(varclient_4645, string7, int2, int3, int4, int44);
    };
    if (((int5 != -1 as obj) && (int5 != int0))) {
        if ((int0 != -1 as obj)) {
            int44 = script7235(" ", string1, int2, int3, int4, int44);
        };
        int44 = script10761(int5, int6, int1, int2, int3, int4, int44);
    };
    if (((item_getparam(int0, 3824) == true) && (STRING_LENGTH(OC_DESC(int0)) > 0))) {
        int44 = script7235(OC_DESC(int0), string3, int2, int3, int4, int44);
    };
    if (((int45 != -1) && (int44 == int45))) {
        int44 = (int44 - 1);
        if ((CC_FIND(IF_GETPARENTLAYER(int4), (IF_GETNEXTSUBID(IF_GETPARENTLAYER(int4)) - 1)) == 1)) {
            CC_DELETE();
        };
    };
    return int44;
}