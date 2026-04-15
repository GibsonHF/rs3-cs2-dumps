//
function script7318(int0: inv, int1: int): [string, string, string, string, string, string, string, graphic] {
    var int2 = INV_GETOBJ(int0, int1);
    if ((int2 == -1 as obj)) {
        return ["No crewman.", "", "", "", "", "", "", -1 as graphic];
    };
    var int3 = 0;
    var int4 = 0;
    var string0 = "";
    var int5 = 0;
    var int6 = 0;
    var string1 = "";
    var int7 = 0;
    var int8 = 0;
    var string2 = "";
    var int9 = 0;
    var int10 = 0;
    var string3 = "";
    int3 = script7313(int0, int1);
    int4 = script7315(int0, int1);
    [int5, int7, int9] = script7312(int0, int1);
    [int6, int8, int10] = script7314(int0, int1);
    string0 = inttostring(int3, 10);
    if ((int3 > varclient_2632)) {
        string0 = strconcat("<col=00FF00>", string0);
    } else if ((int3 < varclient_2632)) {
        string0 = strconcat("<col=FF0000>", string0);
    } else {
        string0 = strconcat("<col=F7EDB7>", string0);
    };
    if (((int4 != 0) || (varclient_2633 != 0))) {
        if ((int4 > varclient_2633)) {
            string0 = strconcat(string0, "<col=1D8C07>");
        } else if ((int4 < varclient_2633)) {
            string0 = strconcat(string0, "<col=FF0000>");
        } else {
            string0 = strconcat(string0, "<col=FAF2D6>");
        };
        if ((int4 > 0)) {
            string0 = strconcat(string0, ` <col=FFFFFF>(+${inttostring(int4, 10)}%)</col>`);
        } else if ((int4 < 0)) {
            string0 = strconcat(string0, `<col=FFFFFF> (${inttostring(int4, 10)}%)</col>`);
        } else {
            string0 = strconcat(string0, " (+0%)</col>");
        };
    };
    string1 = inttostring(int5, 10);
    if ((int5 > varclient_2638)) {
        string1 = strconcat("<col=00FF00>", string1);
    } else if ((int5 < varclient_2638)) {
        string1 = strconcat("<col=FF0000>", string1);
    } else {
        string1 = strconcat("<col=F7EDB7>", string1);
    };
    if (((int6 != 0) || (varclient_2639 != 0))) {
        if ((int6 > varclient_2639)) {
            string1 = strconcat(string1, "<col=1D8C07>");
        } else if ((int6 < varclient_2639)) {
            string1 = strconcat(string1, "<col=FF0000>");
        } else {
            string1 = strconcat(string1, "<col=FAF2D6>");
        };
        if ((int6 > 0)) {
            string1 = strconcat(string1, `<col=FFFFFF> (+${inttostring(int6, 10)}%)</col>`);
        } else if ((int6 < 0)) {
            string1 = strconcat(string1, `<col=FFFFFF> (${inttostring(int6, 10)}%)</col>`);
        } else {
            string1 = strconcat(string1, " (+0%)</col>");
        };
    };
    string2 = inttostring(int7, 10);
    if ((int7 > varclient_2634)) {
        string2 = strconcat("<col=00FF00>", string2);
    } else if ((int7 < varclient_2634)) {
        string2 = strconcat("<col=FF0000>", string2);
    } else {
        string2 = strconcat("<col=F7EDB7>", string2);
    };
    if (((int8 != 0) || (varclient_2635 != 0))) {
        if ((int8 > varclient_2635)) {
            string2 = strconcat(string2, "<col=1D8C07>");
        } else if ((int8 < varclient_2635)) {
            string2 = strconcat(string2, "<col=FF0000>");
        } else {
            string2 = strconcat(string2, "<col=FAF2D6>");
        };
        if ((int8 > 0)) {
            string2 = strconcat(string2, `<col=FFFFFF> (+${inttostring(int8, 10)}%)</col>`);
        } else if ((int8 < 0)) {
            string2 = strconcat(string2, `<col=FFFFFF> (${inttostring(int8, 10)}%)</col>`);
        } else {
            string2 = strconcat(string2, " (+0%)</col>");
        };
    };
    string3 = inttostring(int9, 10);
    if ((int9 > varclient_2640)) {
        string3 = strconcat("<col=00FF00>", string3);
    } else if ((int9 < varclient_2640)) {
        string3 = strconcat("<col=FF0000>", string3);
    } else {
        string3 = strconcat("<col=F7EDB7>", string3);
    };
    if (((int10 != 0) || (varclient_2641 != 0))) {
        if ((int10 > varclient_2641)) {
            string3 = strconcat(string3, "<col=1D8C07>");
        } else if ((int10 < varclient_2641)) {
            string3 = strconcat(string3, "<col=FF0000>");
        } else {
            string3 = strconcat(string3, "<col=FAF2D6>");
        };
        if ((int10 > 0)) {
            string3 = strconcat(string3, `<col=FFFFFF> (+${inttostring(int10, 10)}%)</col>`);
        } else if ((int10 < 0)) {
            string3 = strconcat(string3, `<col=FFFFFF> (${inttostring(int10, 10)}%)</col>`);
        } else {
            string3 = strconcat(string3, " (+0%)</col>");
        };
    };
    var string4 = `Level ${inttostring(script7317(int0, int1), 10)}`;
    var string5 = OC_NAME(int2);
    var int11 = script7319(int1);
    var int12 = (AND(int11, 2113929216) / 33554432);
    var int13 = 0;
    var int14 = 0;
    var int15 = 0;
    var int16 = 2195 as cs2enum;
    if ((enum_hasoutput(33, 2173 as cs2enum, int2) == 1)) {
        switch (int12) {
            case 1: {
                int13 = varbitplayer_17155;
                int14 = varbitplayer_17159;
                int15 = varbitplayer_17160;
                break;
            }
            case 2: {
                int13 = varbitplayer_17168;
                int14 = varbitplayer_17172;
                int15 = varbitplayer_17173;
                break;
            }
            case 3: {
                int13 = varbitplayer_17181;
                int14 = varbitplayer_17185;
                int15 = varbitplayer_17186;
                break;
            }
            case 4: {
                int13 = varbitplayer_17194;
                int14 = varbitplayer_17198;
                int15 = varbitplayer_17199;
                break;
            }
            case 5: {
                int13 = varbitplayer_17207;
                int14 = varbitplayer_17211;
                int15 = varbitplayer_17212;
                break;
            }
        };
        if ((int13 == 1)) {
            int16 = 5767 as cs2enum;
        };
        string5 = strconcat(enum_getvalue(0, 36, int16, int14), strconcat(" ", enum_getvalue(0, 36, 5768 as cs2enum, int15)));
    };
    var int17 = enum_getvalue(0, 73, 2175 as cs2enum, int12);
    if ((int17 == -1 as struct)) {
        int17 = 17474 as struct;
    };
    var string6 = "";
    var int18 = -1 as struct;
    var string7 = "";
    if ((enum_hasoutput(33, 2173 as cs2enum, int2) == 1)) {
        switch (int12) {
            case 1: {
                int18 = enum_getvalue(0, 73, 2175 as cs2enum, varbitplayer_17148);
                if ((varbitplayer_17148 > 0)) {
                    string6 = strconcat(string6, struct_getparam(int18, 3090));
                    string7 = ", ";
                };
                int18 = enum_getvalue(0, 73, 2175 as cs2enum, varbitplayer_17149);
                if ((varbitplayer_17149 > 0)) {
                    string6 = strconcat(string6, `${string7}${struct_getparam(int18, 3090)}`);
                    string7 = ", ";
                };
                int18 = enum_getvalue(0, 73, 2175 as cs2enum, varbitplayer_17150);
                if ((varbitplayer_17150 > 0)) {
                    string6 = strconcat(string6, `${string7}<br>${struct_getparam(int18, 3090)}`);
                    string7 = ", ";
                };
                int18 = enum_getvalue(0, 73, 2175 as cs2enum, varbitplayer_17151);
                if ((varbitplayer_17151 > 0)) {
                    string6 = strconcat(string6, `${string7}${struct_getparam(int18, 3090)}`);
                };
                break;
            }
            case 2: {
                int18 = enum_getvalue(0, 73, 2175 as cs2enum, varbitplayer_17161);
                if ((varbitplayer_17161 > 0)) {
                    string6 = strconcat(string6, struct_getparam(int18, 3090));
                    string7 = ", ";
                };
                int18 = enum_getvalue(0, 73, 2175 as cs2enum, varbitplayer_17162);
                if ((varbitplayer_17162 > 0)) {
                    string6 = strconcat(string6, `${string7}${struct_getparam(int18, 3090)}`);
                    string7 = ", ";
                };
                int18 = enum_getvalue(0, 73, 2175 as cs2enum, varbitplayer_17163);
                if ((varbitplayer_17163 > 0)) {
                    string6 = strconcat(string6, `${string7}<br>${struct_getparam(int18, 3090)}`);
                    string7 = ", ";
                };
                int18 = enum_getvalue(0, 73, 2175 as cs2enum, varbitplayer_17164);
                if ((varbitplayer_17164 > 0)) {
                    string6 = strconcat(string6, `${string7}${struct_getparam(int18, 3090)}`);
                };
                break;
            }
            case 3: {
                int18 = enum_getvalue(0, 73, 2175 as cs2enum, varbitplayer_17174);
                if ((varbitplayer_17174 > 0)) {
                    string6 = strconcat(string6, struct_getparam(int18, 3090));
                    string7 = ", ";
                };
                int18 = enum_getvalue(0, 73, 2175 as cs2enum, varbitplayer_17175);
                if ((varbitplayer_17175 > 0)) {
                    string6 = strconcat(string6, `${string7}${struct_getparam(int18, 3090)}`);
                    string7 = ", ";
                };
                int18 = enum_getvalue(0, 73, 2175 as cs2enum, varbitplayer_17176);
                if ((varbitplayer_17176 > 0)) {
                    string6 = strconcat(string6, `${string7}<br>${struct_getparam(int18, 3090)}`);
                    string7 = ", ";
                };
                int18 = enum_getvalue(0, 73, 2175 as cs2enum, varbitplayer_17177);
                if ((varbitplayer_17177 > 0)) {
                    string6 = strconcat(string6, `${string7}${struct_getparam(int18, 3090)}`);
                };
                break;
            }
            case 4: {
                int18 = enum_getvalue(0, 73, 2175 as cs2enum, varbitplayer_17187);
                if ((varbitplayer_17187 > 0)) {
                    string6 = strconcat(string6, struct_getparam(int18, 3090));
                    string7 = ", ";
                };
                int18 = enum_getvalue(0, 73, 2175 as cs2enum, varbitplayer_17188);
                if ((varbitplayer_17188 > 0)) {
                    string6 = strconcat(string6, `${string7}${struct_getparam(int18, 3090)}`);
                    string7 = ", ";
                };
                int18 = enum_getvalue(0, 73, 2175 as cs2enum, varbitplayer_17189);
                if ((varbitplayer_17189 > 0)) {
                    string6 = strconcat(string6, `${string7}<br>${struct_getparam(int18, 3090)}`);
                    string7 = ", ";
                };
                int18 = enum_getvalue(0, 73, 2175 as cs2enum, varbitplayer_17190);
                if ((varbitplayer_17190 > 0)) {
                    string6 = strconcat(string6, `${string7}${struct_getparam(int18, 3090)}`);
                };
                break;
            }
            case 5: {
                int18 = enum_getvalue(0, 73, 2175 as cs2enum, varbitplayer_17200);
                if ((varbitplayer_17200 > 0)) {
                    string6 = strconcat(string6, struct_getparam(int18, 3090));
                    string7 = ", ";
                };
                int18 = enum_getvalue(0, 73, 2175 as cs2enum, varbitplayer_17201);
                if ((varbitplayer_17201 > 0)) {
                    string6 = strconcat(string6, `${string7}${struct_getparam(int18, 3090)}`);
                    string7 = ", ";
                };
                int18 = enum_getvalue(0, 73, 2175 as cs2enum, varbitplayer_17202);
                if ((varbitplayer_17202 > 0)) {
                    string6 = strconcat(string6, `${string7}<br>${struct_getparam(int18, 3090)}`);
                    string7 = ", ";
                };
                int18 = enum_getvalue(0, 73, 2175 as cs2enum, varbitplayer_17203);
                if ((varbitplayer_17203 > 0)) {
                    string6 = strconcat(string6, `${string7}${struct_getparam(int18, 3090)}`);
                };
                break;
            }
            case 6: {
                if ((varbitplayer_17213 > 0)) {
                    string6 = strconcat(string6, struct_getparam(int18, 3090));
                    string7 = ", ";
                };
                int18 = enum_getvalue(0, 73, 2175 as cs2enum, varbitplayer_17214);
                if ((varbitplayer_17214 > 0)) {
                    string6 = strconcat(string6, `${string7}${struct_getparam(int18, 3090)}`);
                    string7 = ", ";
                };
                int18 = enum_getvalue(0, 73, 2175 as cs2enum, varbitplayer_17215);
                if ((varbitplayer_17215 > 0)) {
                    string6 = strconcat(string6, `${string7}<br>${struct_getparam(int18, 3090)}`);
                    string7 = ", ";
                };
                int18 = enum_getvalue(0, 73, 2175 as cs2enum, varbitplayer_17216);
                if ((varbitplayer_17216 > 0)) {
                    string6 = strconcat(string6, `${string7}${struct_getparam(int18, 3090)}`);
                };
                break;
            }
        };
    } else if ((enum_hasoutput(33, 2174 as cs2enum, int2) == 1)) {
        if (((int2 == 26265 as obj) || (int2 == 26266 as obj))) {
            string6 = "Undead";
        } else {
            string6 = "Ship Supplies";
        };
    } else if ((int17 != 17474 as struct)) {
        string6 = struct_getparam(int17, 3090);
    };
    if ((item_getparam(int2, 3100) > 0)) {
        if ((int17 != 17474 as struct)) {
            string6 = strconcat(string6, ", ");
        } else {
            string6 = "";
        };
        string6 = strconcat(string6, "Pirate Band");
    };
    if ((item_getparam(int2, 3101) > 0)) {
        if ((int17 != 17474 as struct)) {
            string6 = strconcat(string6, ", ");
        } else {
            string6 = "";
        };
        string6 = strconcat(string6, "Solidarity");
    };
    if ((item_getparam(int2, 3102) > 0)) {
        if ((int17 != 17474 as struct)) {
            string6 = strconcat(string6, ", ");
        } else {
            string6 = "";
        };
        string6 = strconcat(string6, "Staunch");
    };
    if ((item_getparam(int2, 3103) > 0)) {
        if ((int17 != 17474 as struct)) {
            string6 = strconcat(string6, ", ");
        } else {
            string6 = "";
        };
        string6 = strconcat(string6, "Rallying Cry");
    };
    if ((item_getparam(int2, 3104) > 0)) {
        if ((int17 != 17474 as struct)) {
            string6 = strconcat(string6, ", ");
        } else {
            string6 = "";
        };
        string6 = strconcat(string6, "Gambler");
    };
    if ((item_getparam(int2, 3106) > 0)) {
        if ((int17 != 17474 as struct)) {
            string6 = strconcat(string6, ", ");
        } else {
            string6 = "";
        };
        string6 = strconcat(string6, "Explosive");
    };
    if ((item_getparam(int2, 3107) > 0)) {
        if ((int17 != 17474 as struct)) {
            string6 = strconcat(string6, ", ");
        } else {
            string6 = "";
        };
        string6 = strconcat(string6, "Merchant");
    };
    if ((item_getparam(int2, 3108) > 0)) {
        if ((int17 != 17474 as struct)) {
            string6 = strconcat(string6, ", ");
        } else {
            string6 = "";
        };
        string6 = strconcat(string6, "Resurrects");
    };
    if ((item_getparam(int2, 3105) > 0)) {
        if ((int17 != 17474 as struct)) {
            string6 = strconcat(string6, ", ");
        } else {
            string6 = "";
        };
        string6 = strconcat(string6, "Good Fortune");
    };
    return [string5, string0, string1, string2, string3, string4, string6, item_getparam(int2, 3080)];
}