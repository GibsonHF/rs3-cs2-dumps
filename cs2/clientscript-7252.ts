//
function script7252(int0: number): void {
    CC_DELETEALL(comp(916, 181));  // pop_ship:crew_layer_backgrounds
    CC_DELETEALL(comp(916, 182));  // pop_ship:crew_layer_icons
    CC_DELETEALL(comp(916, 183));  // pop_ship:crew_layer_levels
    CC_DELETEALL(comp(916, 185));  // pop_ship:captain_layer_backgrounds
    CC_DELETEALL(comp(916, 186));  // pop_ship:captain_layer_icons
    CC_DELETEALL(comp(916, 187));  // pop_ship:captain_layer_levels
    CC_DELETEALL(comp(916, 191));  // pop_ship:captain_roster_boxes
    CC_DELETEALL(comp(916, 189));  // pop_ship:captain_roster_backgrounds
    CC_DELETEALL(comp(916, 192));  // pop_ship:captain_roster_number_backgrounds
    CC_DELETEALL(comp(916, 193));  // pop_ship:captain_roster_numbers
    CC_DELETEALL(comp(916, 195));  // pop_ship:captain_roster_levels
    CC_DELETEALL(comp(916, 199));  // pop_ship:crew_roster_boxes
    CC_DELETEALL(comp(916, 197));  // pop_ship:crew_roster_backgrounds
    CC_DELETEALL(comp(916, 200));  // pop_ship:crew_roster_number_backgrounds
    CC_DELETEALL(comp(916, 201));  // pop_ship:crew_roster_numbers
    CC_DELETEALL(comp(916, 203));  // pop_ship:crew_roster_levels
    var int1 = 0;
    var int2 = 0;
    var int3 = 0;
    var int4 = 0;
    var int5 = 0;
    var int6 = 0;
    var int7 = -1;
    var int8 = -1;
    var int9 = 0;
    var int10 = 0;
    if ((varclient_2626 != -1 as obj)) {
        int10 = enum_hasoutput(33, 2173 as cs2enum, varclient_2626);
    };
    var int11 = -1;
    var int12 = 0;
    var int13 = 0;
    var int14 = 0;
    [int12, int13, int14] = script7295(int0);
    var int15 = 0;
    var string0 = "-";
    var string1 = "";
    var string2 = "No crewman.";
    var int16 = -1;
    var int17 = -1;
    while ((int1 < INV_SIZE(677 as inv))) {
        int7 = INV_GETOBJ(677 as inv, int1);
        int15 = script7311(int1);
        switch (int15) {
            case 1: {
                int11 = varbitplayer_17155;
                break;
            }
            case 2: {
                int11 = varbitplayer_17168;
                break;
            }
            case 3: {
                int11 = varbitplayer_17181;
                break;
            }
            case 4: {
                int11 = varbitplayer_17194;
                break;
            }
            case 5: {
                int11 = varbitplayer_17207;
                break;
            }
        };
        if ((int7 != -1)) {
            int17 = script7317(677, int1);
            int9 = enum_hasoutput(33, 2173 as cs2enum, int7);
            if ((int9 == 1)) {
                if ((int1 >= int12)) {
                    if ((int1 <= int13)) {
                        if ((TESTBIT(int14, (int1 - int12)) == 1)) {
                            CC_CREATE(comp(916, 185), 5, int1);  // pop_ship:captain_layer_backgrounds
                            CC_SETPOSITION(0, 0, 1, 1);
                            if ((varplayer_3393 == int1)) {
                                CC_SETGRAPHIC(15581 as graphic);
                            } else {
                                CC_SETGRAPHIC(15579 as graphic);
                                int16 = 15580;
                                CC_SETONMOUSEOVER(callback(script688, -2147483645, CC_GETID(), int16));
                                int16 = 15579;
                                CC_SETONMOUSELEAVE(callback(script688, -2147483645, CC_GETID(), int16));
                            };
                            CC_SETSIZE(55, 55, 0, 0);
                            CC_CREATE(comp(916, 186), 5, int1);  // pop_ship:captain_layer_icons
                            CC_SETPOSITION(0, 0, 1, 1);
                            CC_SETGRAPHIC(item_getparam(int7, 3080));
                            CC_SETSIZE(35, 35, 0, 0);
                            CC_SETOP(1, "Select");
                            CC_SETOPBASE(OC_NAME(int7));
                            if ((script6431() == 1)) {
                                CC_SETOP(3, "Compare");
                                CC_SETONOP(callback(script3566, int1, 0, 0, 1, -2147483644));
                            } else {
                                CC_SETONMOUSEOVER(callback(script7290, int1, 0, 0, 1));
                                CC_SETONMOUSELEAVE(callback(script7289));
                            };
                            CC_SETONDRAGCOMPLETE(callback(script3565, int1, 0, 0, 1, -2147483642));
                            CC_CREATE(comp(916, 187), 4, int1);  // pop_ship:captain_layer_levels
                            CC_SETSIZE(12, 12, 0, 0);
                            CC_SETTEXTFONT(66 as fontmetrics);
                            CC_SETTEXTALIGN(2, 1, 0);
                            CC_SETTEXT(inttostring(int17, 10));
                            CC_SETCOLOUR(16777215);
                            CC_SETTEXTSHADOW(true);
                            CC_SETPOSITION(10, 12, 1, 1);
                            CC_CREATE(comp(916, 182), 5, int1);  // pop_ship:crew_layer_icons
                            CC_CREATE(comp(916, 181), 5, int1);  // pop_ship:crew_layer_backgrounds
                            CC_CREATE(comp(916, 183), 4, int1);  // pop_ship:crew_layer_levels
                            CC_CREATE(comp(916, 191), 5, int1);  // pop_ship:captain_roster_boxes
                            CC_CREATE(comp(916, 189), 5, int1);  // pop_ship:captain_roster_backgrounds
                            CC_CREATE(comp(916, 192), 5, int1);  // pop_ship:captain_roster_number_backgrounds
                            CC_CREATE(comp(916, 193), 4, int1);  // pop_ship:captain_roster_numbers
                            CC_CREATE(comp(916, 195), 4, int1);  // pop_ship:captain_roster_levels
                            CC_CREATE(comp(916, 197), 5, int1);  // pop_ship:crew_roster_backgrounds
                            CC_CREATE(comp(916, 199), 5, int1);  // pop_ship:crew_roster_boxes
                            CC_CREATE(comp(916, 200), 5, int1);  // pop_ship:crew_roster_number_backgrounds
                            CC_CREATE(comp(916, 201), 4, int1);  // pop_ship:crew_roster_numbers
                            CC_CREATE(comp(916, 203), 4, int1);  // pop_ship:crew_roster_levels
                        } else if ((script7310(int1) == 1)) {
                            CC_CREATE(comp(916, 191), 5, int1);  // pop_ship:captain_roster_boxes
                            CC_SETPOSITION(0, ((1 + 10) + (int5 * 52)), 1, 0);
                            CC_SETGRAPHIC(item_getparam(int7, 3080));
                            CC_SETSIZE(35, 35, 0, 0);
                            if (((int10 == 1) || (script1483() == 1))) {
                                CC_SETOP(1, "Assign");
                            } else {
                                CC_SETOP(1, "");
                            };
                            if ((script6431() == 1)) {
                                CC_SETOP(3, "Compare");
                                CC_SETONOP(callback(script3566, int1, 1, 0, 0, -2147483644));
                            } else {
                                CC_SETONMOUSEOVER(callback(script7290, int1, 1, 0, 0));
                                CC_SETONMOUSELEAVE(callback(script7289));
                            };
                            CC_SETOPBASE(OC_NAME(int7));
                            CC_SETONDRAGCOMPLETE(callback(script3565, int1, 1, 0, 0, -2147483642));
                            CC_CREATE(comp(916, 189), 5, int1);  // pop_ship:captain_roster_backgrounds
                            CC_SETSIZE(55, 55, 0, 0);
                            CC_SETGRAPHIC(15579 as graphic);
                            CC_SETPOSITION(0, (1 + (int5 * 52)), 1, 0);
                            int16 = 15580;
                            CC_SETONMOUSEOVER(callback(script688, -2147483645, CC_GETID(), int16));
                            int16 = 15579;
                            CC_SETONMOUSELEAVE(callback(script688, -2147483645, CC_GETID(), int16));
                            CC_CREATE(comp(916, 192), 5, int1);  // pop_ship:captain_roster_number_backgrounds
                            CC_SETSIZE(21, 21, 0, 0);
                            CC_SETGRAPHIC(15477 as graphic);
                            CC_SETPOSITION(-17, (1 + (int5 * 52)), 1, 0);
                            if ((int15 > 0)) {
                                if ((int15 < 5)) {
                                    if ((TESTBIT(varplayer_3404, int1) == 1)) {
                                        string0 = `<col=F7EDB7>${inttostring(int15, 10)}`;
                                    } else {
                                        string0 = "<col=F7EDB7>-";
                                    };
                                } else {
                                    string0 = "<col=F7EDB7>-";
                                };
                            } else {
                                string0 = "<col=F7EDB7>-";
                            };
                            CC_CREATE(comp(916, 193), 4, int1);  // pop_ship:captain_roster_numbers
                            CC_SETSIZE(21, 21, 0, 0);
                            CC_SETTEXTALIGN(1, 1, 0);
                            CC_SETTEXTFONT(66 as fontmetrics);
                            CC_SETTEXT(string0);
                            CC_SETPOSITION(-17, ((1 + 1) + (int5 * 52)), 1, 0);
                            CC_CREATE(comp(916, 195), 4, int1);  // pop_ship:captain_roster_levels
                            CC_SETSIZE(12, 12, 0, 0);
                            CC_SETTEXTFONT(66 as fontmetrics);
                            CC_SETTEXT(inttostring(int17, 10));
                            CC_SETCOLOUR(16777215);
                            CC_SETTEXTSHADOW(true);
                            CC_SETTEXTALIGN(2, 1, 0);
                            CC_SETPOSITION(10, ((1 + 34) + (int5 * 52)), 1, 0);
                            int5 = (int5 + 1);
                            CC_CREATE(comp(916, 182), 5, int1);  // pop_ship:crew_layer_icons
                            if (((int1 > int12) && (int1 <= int13))) {
                                CC_SETPOSITION(((0 + 8) + (int4 * 52)), 0, 0, 1);
                                CC_SETGRAPHIC(15670 as graphic);
                                CC_SETSIZE(35, 35, 0, 0);
                                CC_SETOP(1, "Select");
                                CC_SETOPBASE("None");
                                if ((script6431() == 1)) {
                                    CC_SETOP(3, "Compare");
                                    CC_SETONOP(callback(script3566, int1, 0, 0, 1, -2147483644));
                                } else {
                                    CC_SETONMOUSEOVER(callback(script7290, int1, 0, 0, 1));
                                    CC_SETONMOUSELEAVE(callback(script7289));
                                };
                                CC_SETONDRAGCOMPLETE(callback(script3565, int1, 0, 0, 1, -2147483642));
                            };
                            CC_CREATE(comp(916, 181), 5, int1);  // pop_ship:crew_layer_backgrounds
                            if (((int1 > int12) && (int1 <= int13))) {
                                CC_SETSIZE(45, 45, 0, 0);
                                if ((varplayer_3393 == int1)) {
                                    CC_SETGRAPHIC(15584 as graphic);
                                } else {
                                    CC_SETGRAPHIC(15582 as graphic);
                                    int16 = 15583;
                                    CC_SETONMOUSEOVER(callback(script688, -2147483645, CC_GETID(), int16));
                                    int16 = 15582;
                                    CC_SETONMOUSELEAVE(callback(script688, -2147483645, CC_GETID(), int16));
                                };
                                CC_SETPOSITION(((0 + 3) + (int4 * 52)), 0, 0, 1);
                                int4 = (int4 + 1);
                            };
                            CC_CREATE(comp(916, 183), 4, int1);  // pop_ship:crew_layer_levels
                            CC_CREATE(comp(916, 186), 5, int1);  // pop_ship:captain_layer_icons
                            CC_CREATE(comp(916, 185), 5, int1);  // pop_ship:captain_layer_backgrounds
                            CC_CREATE(comp(916, 187), 4, int1);  // pop_ship:captain_layer_levels
                            CC_CREATE(comp(916, 197), 5, int1);  // pop_ship:crew_roster_backgrounds
                            CC_CREATE(comp(916, 199), 5, int1);  // pop_ship:crew_roster_boxes
                            CC_CREATE(comp(916, 200), 5, int1);  // pop_ship:crew_roster_number_backgrounds
                            CC_CREATE(comp(916, 201), 4, int1);  // pop_ship:crew_roster_numbers
                            CC_CREATE(comp(916, 203), 4, int1);  // pop_ship:crew_roster_levels
                        } else {
                            CC_CREATE(comp(916, 182), 5, int1);  // pop_ship:crew_layer_icons
                            CC_CREATE(comp(916, 181), 5, int1);  // pop_ship:crew_layer_backgrounds
                            CC_CREATE(comp(916, 183), 4, int1);  // pop_ship:crew_layer_levels
                            CC_CREATE(comp(916, 186), 5, int1);  // pop_ship:captain_layer_icons
                            CC_CREATE(comp(916, 185), 5, int1);  // pop_ship:captain_layer_backgrounds
                            CC_CREATE(comp(916, 187), 4, int1);  // pop_ship:captain_layer_levels
                            CC_CREATE(comp(916, 191), 5, int1);  // pop_ship:captain_roster_boxes
                            CC_CREATE(comp(916, 189), 5, int1);  // pop_ship:captain_roster_backgrounds
                            CC_CREATE(comp(916, 192), 5, int1);  // pop_ship:captain_roster_number_backgrounds
                            CC_CREATE(comp(916, 193), 4, int1);  // pop_ship:captain_roster_numbers
                            CC_CREATE(comp(916, 195), 4, int1);  // pop_ship:captain_roster_levels
                            CC_CREATE(comp(916, 197), 5, int1);  // pop_ship:crew_roster_backgrounds
                            CC_CREATE(comp(916, 199), 5, int1);  // pop_ship:crew_roster_boxes
                            CC_CREATE(comp(916, 200), 5, int1);  // pop_ship:crew_roster_number_backgrounds
                            CC_CREATE(comp(916, 201), 4, int1);  // pop_ship:crew_roster_numbers
                            CC_CREATE(comp(916, 203), 4, int1);  // pop_ship:crew_roster_levels
                        };
                    } else if ((script7310(int1) == 1)) {
                        CC_CREATE(comp(916, 191), 5, int1);  // pop_ship:captain_roster_boxes
                        CC_SETPOSITION(0, ((1 + 10) + (int5 * 52)), 1, 0);
                        CC_SETGRAPHIC(item_getparam(int7, 3080));
                        CC_SETSIZE(35, 35, 0, 0);
                        if (((int10 == 1) || (script1483() == 1))) {
                            CC_SETOP(1, "Assign");
                        } else {
                            CC_SETOP(1, "");
                        };
                        if ((script6431() == 1)) {
                            CC_SETOP(3, "Compare");
                            CC_SETONOP(callback(script3566, int1, 1, 0, 0, -2147483644));
                        } else {
                            CC_SETONMOUSEOVER(callback(script7290, int1, 1, 0, 0));
                            CC_SETONMOUSELEAVE(callback(script7289));
                        };
                        CC_SETOPBASE(OC_NAME(int7));
                        CC_SETONDRAGCOMPLETE(callback(script3565, int1, 1, 0, 0, -2147483642));
                        CC_CREATE(comp(916, 189), 5, int1);  // pop_ship:captain_roster_backgrounds
                        CC_SETSIZE(55, 55, 0, 0);
                        CC_SETGRAPHIC(15579 as graphic);
                        CC_SETPOSITION(0, (1 + (int5 * 52)), 1, 0);
                        int16 = 15580;
                        CC_SETONMOUSEOVER(callback(script688, -2147483645, CC_GETID(), int16));
                        int16 = 15579;
                        CC_SETONMOUSELEAVE(callback(script688, -2147483645, CC_GETID(), int16));
                        CC_CREATE(comp(916, 192), 5, int1);  // pop_ship:captain_roster_number_backgrounds
                        CC_SETSIZE(21, 21, 0, 0);
                        CC_SETGRAPHIC(15477 as graphic);
                        CC_SETPOSITION(-17, (1 + (int5 * 52)), 1, 0);
                        if ((int15 > 0)) {
                            if ((int15 < 5)) {
                                if ((TESTBIT(varplayer_3404, int1) == 1)) {
                                    string0 = `<col=F7EDB7>${inttostring(int15, 10)}`;
                                } else {
                                    string0 = "<col=F7EDB7>-";
                                };
                            } else {
                                string0 = "<col=F7EDB7>-";
                            };
                        } else {
                            string0 = "<col=F7EDB7>-";
                        };
                        CC_CREATE(comp(916, 193), 4, int1);  // pop_ship:captain_roster_numbers
                        CC_SETSIZE(21, 21, 0, 0);
                        CC_SETTEXTALIGN(1, 1, 0);
                        CC_SETTEXTFONT(66 as fontmetrics);
                        CC_SETTEXT(string0);
                        CC_SETPOSITION(-17, ((1 + 1) + (int5 * 52)), 1, 0);
                        CC_CREATE(comp(916, 195), 4, int1);  // pop_ship:captain_roster_levels
                        CC_SETSIZE(12, 12, 0, 0);
                        CC_SETTEXTFONT(66 as fontmetrics);
                        CC_SETTEXT(inttostring(int17, 10));
                        CC_SETCOLOUR(16777215);
                        CC_SETTEXTSHADOW(true);
                        CC_SETTEXTALIGN(2, 1, 0);
                        CC_SETPOSITION(10, ((1 + 34) + (int5 * 52)), 1, 0);
                        int5 = (int5 + 1);
                        CC_CREATE(comp(916, 182), 5, int1);  // pop_ship:crew_layer_icons
                        if (((int1 > int12) && (int1 <= int13))) {
                            CC_SETPOSITION(((0 + 8) + (int4 * 52)), 0, 0, 1);
                            CC_SETGRAPHIC(15670 as graphic);
                            CC_SETSIZE(35, 35, 0, 0);
                            CC_SETOP(1, "Select");
                            CC_SETOPBASE("None");
                            if ((script6431() == 1)) {
                                CC_SETOP(3, "Compare");
                                CC_SETONOP(callback(script3566, int1, 0, 0, 1, -2147483644));
                            } else {
                                CC_SETONMOUSEOVER(callback(script7290, int1, 0, 0, 1));
                                CC_SETONMOUSELEAVE(callback(script7289));
                            };
                            CC_SETONDRAGCOMPLETE(callback(script3565, int1, 0, 0, 1, -2147483642));
                        };
                        CC_CREATE(comp(916, 181), 5, int1);  // pop_ship:crew_layer_backgrounds
                        if (((int1 > int12) && (int1 <= int13))) {
                            CC_SETSIZE(45, 45, 0, 0);
                            if ((varplayer_3393 == int1)) {
                                CC_SETGRAPHIC(15584 as graphic);
                            } else {
                                CC_SETGRAPHIC(15582 as graphic);
                                int16 = 15583;
                                CC_SETONMOUSEOVER(callback(script688, -2147483645, CC_GETID(), int16));
                                int16 = 15582;
                                CC_SETONMOUSELEAVE(callback(script688, -2147483645, CC_GETID(), int16));
                            };
                            CC_SETPOSITION(((0 + 3) + (int4 * 52)), 0, 0, 1);
                            int4 = (int4 + 1);
                        };
                        CC_CREATE(comp(916, 183), 4, int1);  // pop_ship:crew_layer_levels
                        CC_CREATE(comp(916, 186), 5, int1);  // pop_ship:captain_layer_icons
                        CC_CREATE(comp(916, 185), 5, int1);  // pop_ship:captain_layer_backgrounds
                        CC_CREATE(comp(916, 187), 4, int1);  // pop_ship:captain_layer_levels
                        CC_CREATE(comp(916, 197), 5, int1);  // pop_ship:crew_roster_backgrounds
                        CC_CREATE(comp(916, 199), 5, int1);  // pop_ship:crew_roster_boxes
                        CC_CREATE(comp(916, 200), 5, int1);  // pop_ship:crew_roster_number_backgrounds
                        CC_CREATE(comp(916, 201), 4, int1);  // pop_ship:crew_roster_numbers
                        CC_CREATE(comp(916, 203), 4, int1);  // pop_ship:crew_roster_levels
                    } else {
                        CC_CREATE(comp(916, 182), 5, int1);  // pop_ship:crew_layer_icons
                        CC_CREATE(comp(916, 181), 5, int1);  // pop_ship:crew_layer_backgrounds
                        CC_CREATE(comp(916, 183), 4, int1);  // pop_ship:crew_layer_levels
                        CC_CREATE(comp(916, 186), 5, int1);  // pop_ship:captain_layer_icons
                        CC_CREATE(comp(916, 185), 5, int1);  // pop_ship:captain_layer_backgrounds
                        CC_CREATE(comp(916, 187), 4, int1);  // pop_ship:captain_layer_levels
                        CC_CREATE(comp(916, 191), 5, int1);  // pop_ship:captain_roster_boxes
                        CC_CREATE(comp(916, 189), 5, int1);  // pop_ship:captain_roster_backgrounds
                        CC_CREATE(comp(916, 192), 5, int1);  // pop_ship:captain_roster_number_backgrounds
                        CC_CREATE(comp(916, 193), 4, int1);  // pop_ship:captain_roster_numbers
                        CC_CREATE(comp(916, 195), 4, int1);  // pop_ship:captain_roster_levels
                        CC_CREATE(comp(916, 197), 5, int1);  // pop_ship:crew_roster_backgrounds
                        CC_CREATE(comp(916, 199), 5, int1);  // pop_ship:crew_roster_boxes
                        CC_CREATE(comp(916, 200), 5, int1);  // pop_ship:crew_roster_number_backgrounds
                        CC_CREATE(comp(916, 201), 4, int1);  // pop_ship:crew_roster_numbers
                        CC_CREATE(comp(916, 203), 4, int1);  // pop_ship:crew_roster_levels
                    };
                } else if ((script7310(int1) == 1)) {
                    CC_CREATE(comp(916, 191), 5, int1);  // pop_ship:captain_roster_boxes
                    CC_SETPOSITION(0, ((1 + 10) + (int5 * 52)), 1, 0);
                    CC_SETGRAPHIC(item_getparam(int7, 3080));
                    CC_SETSIZE(35, 35, 0, 0);
                    if (((int10 == 1) || (script1483() == 1))) {
                        CC_SETOP(1, "Assign");
                    } else {
                        CC_SETOP(1, "");
                    };
                    if ((script6431() == 1)) {
                        CC_SETOP(3, "Compare");
                        CC_SETONOP(callback(script3566, int1, 1, 0, 0, -2147483644));
                    } else {
                        CC_SETONMOUSEOVER(callback(script7290, int1, 1, 0, 0));
                        CC_SETONMOUSELEAVE(callback(script7289));
                    };
                    CC_SETOPBASE(OC_NAME(int7));
                    CC_SETONDRAGCOMPLETE(callback(script3565, int1, 1, 0, 0, -2147483642));
                    CC_CREATE(comp(916, 189), 5, int1);  // pop_ship:captain_roster_backgrounds
                    CC_SETSIZE(55, 55, 0, 0);
                    CC_SETGRAPHIC(15579 as graphic);
                    CC_SETPOSITION(0, (1 + (int5 * 52)), 1, 0);
                    int16 = 15580;
                    CC_SETONMOUSEOVER(callback(script688, -2147483645, CC_GETID(), int16));
                    int16 = 15579;
                    CC_SETONMOUSELEAVE(callback(script688, -2147483645, CC_GETID(), int16));
                    CC_CREATE(comp(916, 192), 5, int1);  // pop_ship:captain_roster_number_backgrounds
                    CC_SETSIZE(21, 21, 0, 0);
                    CC_SETGRAPHIC(15477 as graphic);
                    CC_SETPOSITION(-17, (1 + (int5 * 52)), 1, 0);
                    if ((int15 > 0)) {
                        if ((int15 < 5)) {
                            if ((TESTBIT(varplayer_3404, int1) == 1)) {
                                string0 = `<col=F7EDB7>${inttostring(int15, 10)}`;
                            } else {
                                string0 = "<col=F7EDB7>-";
                            };
                        } else {
                            string0 = "<col=F7EDB7>-";
                        };
                    } else {
                        string0 = "<col=F7EDB7>-";
                    };
                    CC_CREATE(comp(916, 193), 4, int1);  // pop_ship:captain_roster_numbers
                    CC_SETSIZE(21, 21, 0, 0);
                    CC_SETTEXTALIGN(1, 1, 0);
                    CC_SETTEXTFONT(66 as fontmetrics);
                    CC_SETTEXT(string0);
                    CC_SETPOSITION(-17, ((1 + 1) + (int5 * 52)), 1, 0);
                    CC_CREATE(comp(916, 195), 4, int1);  // pop_ship:captain_roster_levels
                    CC_SETSIZE(12, 12, 0, 0);
                    CC_SETTEXTFONT(66 as fontmetrics);
                    CC_SETTEXT(inttostring(int17, 10));
                    CC_SETCOLOUR(16777215);
                    CC_SETTEXTSHADOW(true);
                    CC_SETTEXTALIGN(2, 1, 0);
                    CC_SETPOSITION(10, ((1 + 34) + (int5 * 52)), 1, 0);
                    int5 = (int5 + 1);
                    CC_CREATE(comp(916, 182), 5, int1);  // pop_ship:crew_layer_icons
                    if (((int1 > int12) && (int1 <= int13))) {
                        CC_SETPOSITION(((0 + 8) + (int4 * 52)), 0, 0, 1);
                        CC_SETGRAPHIC(15670 as graphic);
                        CC_SETSIZE(35, 35, 0, 0);
                        CC_SETOP(1, "Select");
                        CC_SETOPBASE("None");
                        if ((script6431() == 1)) {
                            CC_SETOP(3, "Compare");
                            CC_SETONOP(callback(script3566, int1, 0, 0, 1, -2147483644));
                        } else {
                            CC_SETONMOUSEOVER(callback(script7290, int1, 0, 0, 1));
                            CC_SETONMOUSELEAVE(callback(script7289));
                        };
                        CC_SETONDRAGCOMPLETE(callback(script3565, int1, 0, 0, 1, -2147483642));
                    };
                    CC_CREATE(comp(916, 181), 5, int1);  // pop_ship:crew_layer_backgrounds
                    if (((int1 > int12) && (int1 <= int13))) {
                        CC_SETSIZE(45, 45, 0, 0);
                        if ((varplayer_3393 == int1)) {
                            CC_SETGRAPHIC(15584 as graphic);
                        } else {
                            CC_SETGRAPHIC(15582 as graphic);
                            int16 = 15583;
                            CC_SETONMOUSEOVER(callback(script688, -2147483645, CC_GETID(), int16));
                            int16 = 15582;
                            CC_SETONMOUSELEAVE(callback(script688, -2147483645, CC_GETID(), int16));
                        };
                        CC_SETPOSITION(((0 + 3) + (int4 * 52)), 0, 0, 1);
                        int4 = (int4 + 1);
                    };
                    CC_CREATE(comp(916, 183), 4, int1);  // pop_ship:crew_layer_levels
                    CC_CREATE(comp(916, 186), 5, int1);  // pop_ship:captain_layer_icons
                    CC_CREATE(comp(916, 185), 5, int1);  // pop_ship:captain_layer_backgrounds
                    CC_CREATE(comp(916, 187), 4, int1);  // pop_ship:captain_layer_levels
                    CC_CREATE(comp(916, 197), 5, int1);  // pop_ship:crew_roster_backgrounds
                    CC_CREATE(comp(916, 199), 5, int1);  // pop_ship:crew_roster_boxes
                    CC_CREATE(comp(916, 200), 5, int1);  // pop_ship:crew_roster_number_backgrounds
                    CC_CREATE(comp(916, 201), 4, int1);  // pop_ship:crew_roster_numbers
                    CC_CREATE(comp(916, 203), 4, int1);  // pop_ship:crew_roster_levels
                } else {
                    CC_CREATE(comp(916, 182), 5, int1);  // pop_ship:crew_layer_icons
                    CC_CREATE(comp(916, 181), 5, int1);  // pop_ship:crew_layer_backgrounds
                    CC_CREATE(comp(916, 183), 4, int1);  // pop_ship:crew_layer_levels
                    CC_CREATE(comp(916, 186), 5, int1);  // pop_ship:captain_layer_icons
                    CC_CREATE(comp(916, 185), 5, int1);  // pop_ship:captain_layer_backgrounds
                    CC_CREATE(comp(916, 187), 4, int1);  // pop_ship:captain_layer_levels
                    CC_CREATE(comp(916, 191), 5, int1);  // pop_ship:captain_roster_boxes
                    CC_CREATE(comp(916, 189), 5, int1);  // pop_ship:captain_roster_backgrounds
                    CC_CREATE(comp(916, 192), 5, int1);  // pop_ship:captain_roster_number_backgrounds
                    CC_CREATE(comp(916, 193), 4, int1);  // pop_ship:captain_roster_numbers
                    CC_CREATE(comp(916, 195), 4, int1);  // pop_ship:captain_roster_levels
                    CC_CREATE(comp(916, 197), 5, int1);  // pop_ship:crew_roster_backgrounds
                    CC_CREATE(comp(916, 199), 5, int1);  // pop_ship:crew_roster_boxes
                    CC_CREATE(comp(916, 200), 5, int1);  // pop_ship:crew_roster_number_backgrounds
                    CC_CREATE(comp(916, 201), 4, int1);  // pop_ship:crew_roster_numbers
                    CC_CREATE(comp(916, 203), 4, int1);  // pop_ship:crew_roster_levels
                };
            } else if ((int1 >= int12)) {
                if ((int1 <= int13)) {
                    if ((TESTBIT(int14, (int1 - int12)) == 1)) {
                        CC_CREATE(comp(916, 182), 5, int1);  // pop_ship:crew_layer_icons
                        CC_SETGRAPHIC(item_getparam(int7, 3080));
                        CC_SETSIZE(35, 35, 0, 0);
                        CC_SETPOSITION(((0 + 8) + (int4 * 52)), 0, 0, 1);
                        CC_SETOP(1, "Select");
                        CC_SETOP(2, "Unassign");
                        CC_SETOPBASE(OC_NAME(int7));
                        if ((script6431() == 1)) {
                            CC_SETOP(3, "Compare");
                            CC_SETONOP(callback(script3566, int1, 0, 0, 1, -2147483644));
                        } else {
                            CC_SETONMOUSEOVER(callback(script7290, int1, 0, 0, 1));
                            CC_SETONMOUSELEAVE(callback(script7289));
                        };
                        CC_SETONDRAGCOMPLETE(callback(script3565, int1, 0, 0, 1, -2147483642));
                        CC_CREATE(comp(916, 181), 5, int1);  // pop_ship:crew_layer_backgrounds
                        CC_SETSIZE(45, 45, 0, 0);
                        if ((varplayer_3393 == int1)) {
                            CC_SETGRAPHIC(15584 as graphic);
                            CC_SETONMOUSEOVER(callback());
                            CC_SETONMOUSELEAVE(callback());
                        } else {
                            CC_SETGRAPHIC(15582 as graphic);
                            int16 = 15583;
                            CC_SETONMOUSEOVER(callback(script688, -2147483645, CC_GETID(), int16));
                            int16 = 15582;
                            CC_SETONMOUSELEAVE(callback(script688, -2147483645, CC_GETID(), int16));
                        };
                        CC_SETPOSITION(((0 + 3) + (int4 * 52)), 0, 0, 1);
                        CC_CREATE(comp(916, 183), 4, int1);  // pop_ship:crew_layer_levels
                        CC_SETSIZE(12, 12, 0, 0);
                        CC_SETTEXTFONT(66 as fontmetrics);
                        CC_SETTEXT(inttostring(int17, 10));
                        CC_SETCOLOUR(16777215);
                        CC_SETTEXTSHADOW(true);
                        CC_SETTEXTALIGN(2, 1, 0);
                        CC_SETPOSITION(((0 + 30) + (int4 * 52)), 12, 0, 1);
                        int4 = (int4 + 1);
                        CC_CREATE(comp(916, 186), 5, int1);  // pop_ship:captain_layer_icons
                        CC_CREATE(comp(916, 185), 5, int1);  // pop_ship:captain_layer_backgrounds
                        CC_CREATE(comp(916, 187), 4, int1);  // pop_ship:captain_layer_levels
                        CC_CREATE(comp(916, 191), 5, int1);  // pop_ship:captain_roster_boxes
                        CC_CREATE(comp(916, 189), 5, int1);  // pop_ship:captain_roster_backgrounds
                        CC_CREATE(comp(916, 192), 5, int1);  // pop_ship:captain_roster_number_backgrounds
                        CC_CREATE(comp(916, 193), 4, int1);  // pop_ship:captain_roster_numbers
                        CC_CREATE(comp(916, 195), 4, int1);  // pop_ship:captain_roster_levels
                        CC_CREATE(comp(916, 197), 5, int1);  // pop_ship:crew_roster_backgrounds
                        CC_CREATE(comp(916, 199), 5, int1);  // pop_ship:crew_roster_boxes
                        CC_CREATE(comp(916, 200), 5, int1);  // pop_ship:crew_roster_number_backgrounds
                        CC_CREATE(comp(916, 201), 4, int1);  // pop_ship:crew_roster_numbers
                        CC_CREATE(comp(916, 203), 4, int1);  // pop_ship:crew_roster_levels
                    } else if ((script7310(int1) == 1)) {
                        CC_CREATE(comp(916, 199), 5, int1);  // pop_ship:crew_roster_boxes
                        CC_SETGRAPHIC(item_getparam(int7, 3080));
                        CC_SETSIZE(35, 35, 0, 0);
                        if (((int10 == 0) || (script1483() == 0))) {
                            CC_SETOP(1, "Assign");
                        } else {
                            CC_SETOP(1, "");
                        };
                        if ((script6431() == 1)) {
                            CC_SETOP(3, "Compare");
                            CC_SETONOP(callback(script3566, int1, 1, 0, 0, -2147483644));
                        } else {
                            CC_SETONMOUSEOVER(callback(script7290, int1, 1, 0, 0));
                            CC_SETONMOUSELEAVE(callback(script7289));
                        };
                        CC_SETOPBASE(OC_NAME(int7));
                        CC_SETONDRAGCOMPLETE(callback(script3565, int1, 1, 0, 0, -2147483642));
                        int3 = MODULO(int6, 5);
                        int2 = (int6 / 5);
                        CC_SETPOSITION(((0 + 8) + (int3 * 52)), ((1 + 10) + (int2 * 52)), 0, 0);
                        CC_CREATE(comp(916, 197), 5, int1);  // pop_ship:crew_roster_backgrounds
                        CC_SETSIZE(45, 45, 0, 0);
                        CC_SETGRAPHIC(15582 as graphic);
                        CC_SETPOSITION(((0 + 3) + (int3 * 52)), ((1 + 5) + (int2 * 52)), 0, 0);
                        int16 = 15583;
                        CC_SETONMOUSEOVER(callback(script688, -2147483645, CC_GETID(), int16));
                        int16 = 15582;
                        CC_SETONMOUSELEAVE(callback(script688, -2147483645, CC_GETID(), int16));
                        CC_CREATE(comp(916, 203), 4, int1);  // pop_ship:crew_roster_levels
                        CC_SETSIZE(12, 12, 0, 0);
                        CC_SETTEXTFONT(66 as fontmetrics);
                        CC_SETTEXT(inttostring(int17, 10));
                        CC_SETCOLOUR(16777215);
                        CC_SETTEXTSHADOW(true);
                        CC_SETTEXTALIGN(2, 1, 0);
                        CC_SETPOSITION(((0 + 30) + (int3 * 52)), ((1 + 34) + (int2 * 52)), 0, 0);
                        int6 = (int6 + 1);
                        CC_CREATE(comp(916, 182), 5, int1);  // pop_ship:crew_layer_icons
                        if (((int1 >= int12) && (int1 <= int13))) {
                            CC_SETGRAPHIC(15670 as graphic);
                            CC_SETSIZE(35, 35, 0, 0);
                            CC_SETPOSITION(((0 + 8) + (int4 * 52)), 0, 0, 1);
                            CC_SETOP(1, "Select");
                            CC_SETOPBASE("None");
                            if ((script6431() == 1)) {
                                CC_SETOP(3, "Compare");
                                CC_SETONOP(callback(script3566, int1, 0, 0, 1, -2147483644));
                            } else {
                                CC_SETONMOUSEOVER(callback(script7290, int1, 0, 0, 1));
                                CC_SETONMOUSELEAVE(callback(script7289));
                            };
                            CC_SETONDRAGCOMPLETE(callback(script3565, int1, 0, 0, 1, -2147483642));
                        };
                        CC_CREATE(comp(916, 181), 5, int1);  // pop_ship:crew_layer_backgrounds
                        if (((int1 >= int12) && (int1 <= int13))) {
                            CC_SETSIZE(45, 45, 0, 0);
                            if ((varplayer_3393 == int1)) {
                                CC_SETGRAPHIC(15584 as graphic);
                            } else {
                                CC_SETGRAPHIC(15582 as graphic);
                                int16 = 15583;
                                CC_SETONMOUSEOVER(callback(script688, -2147483645, CC_GETID(), int16));
                                int16 = 15582;
                                CC_SETONMOUSELEAVE(callback(script688, -2147483645, CC_GETID(), int16));
                            };
                            CC_SETPOSITION(((0 + 3) + (int4 * 52)), 0, 0, 1);
                            int4 = (int4 + 1);
                        };
                        CC_CREATE(comp(916, 183), 4, int1);  // pop_ship:crew_layer_levels
                        CC_CREATE(comp(916, 200), 5, int1);  // pop_ship:crew_roster_number_backgrounds
                        CC_SETSIZE(21, 21, 0, 0);
                        CC_SETGRAPHIC(15477 as graphic);
                        CC_SETPOSITION((0 + (int3 * 52)), (1 + (int2 * 52)), 0, 0);
                        if ((int15 > 0)) {
                            if ((int15 < 5)) {
                                if ((TESTBIT(varplayer_3404, int1) == 1)) {
                                    string0 = `<col=F7EDB7>${inttostring(int15, 10)}`;
                                } else {
                                    string0 = "<col=F7EDB7>-";
                                };
                            } else {
                                string0 = "<col=F7EDB7>-";
                            };
                        } else {
                            string0 = "<col=F7EDB7>-";
                        };
                        CC_CREATE(comp(916, 201), 4, int1);  // pop_ship:crew_roster_numbers
                        CC_SETSIZE(21, 21, 0, 0);
                        CC_SETTEXTALIGN(1, 1, 0);
                        CC_SETTEXTFONT(66 as fontmetrics);
                        CC_SETTEXT(string0);
                        CC_SETPOSITION((0 + (int3 * 52)), ((1 + 1) + (int2 * 52)), 0, 0);
                        CC_CREATE(comp(916, 186), 5, int1);  // pop_ship:captain_layer_icons
                        CC_CREATE(comp(916, 185), 5, int1);  // pop_ship:captain_layer_backgrounds
                        CC_CREATE(comp(916, 187), 4, int1);  // pop_ship:captain_layer_levels
                        CC_CREATE(comp(916, 191), 5, int1);  // pop_ship:captain_roster_boxes
                        CC_CREATE(comp(916, 189), 5, int1);  // pop_ship:captain_roster_backgrounds
                        CC_CREATE(comp(916, 192), 5, int1);  // pop_ship:captain_roster_number_backgrounds
                        CC_CREATE(comp(916, 193), 4, int1);  // pop_ship:captain_roster_numbers
                        CC_CREATE(comp(916, 195), 4, int1);  // pop_ship:captain_roster_levels
                    } else {
                        CC_CREATE(comp(916, 182), 5, int1);  // pop_ship:crew_layer_icons
                        CC_CREATE(comp(916, 181), 5, int1);  // pop_ship:crew_layer_backgrounds
                        CC_CREATE(comp(916, 183), 4, int1);  // pop_ship:crew_layer_levels
                        CC_CREATE(comp(916, 186), 5, int1);  // pop_ship:captain_layer_icons
                        CC_CREATE(comp(916, 185), 5, int1);  // pop_ship:captain_layer_backgrounds
                        CC_CREATE(comp(916, 187), 4, int1);  // pop_ship:captain_layer_levels
                        CC_CREATE(comp(916, 191), 5, int1);  // pop_ship:captain_roster_boxes
                        CC_CREATE(comp(916, 189), 5, int1);  // pop_ship:captain_roster_backgrounds
                        CC_CREATE(comp(916, 192), 5, int1);  // pop_ship:captain_roster_number_backgrounds
                        CC_CREATE(comp(916, 193), 4, int1);  // pop_ship:captain_roster_numbers
                        CC_CREATE(comp(916, 195), 4, int1);  // pop_ship:captain_roster_levels
                        CC_CREATE(comp(916, 197), 5, int1);  // pop_ship:crew_roster_backgrounds
                        CC_CREATE(comp(916, 199), 5, int1);  // pop_ship:crew_roster_boxes
                        CC_CREATE(comp(916, 200), 5, int1);  // pop_ship:crew_roster_number_backgrounds
                        CC_CREATE(comp(916, 201), 4, int1);  // pop_ship:crew_roster_numbers
                        CC_CREATE(comp(916, 203), 4, int1);  // pop_ship:crew_roster_levels
                    };
                } else if ((script7310(int1) == 1)) {
                    CC_CREATE(comp(916, 199), 5, int1);  // pop_ship:crew_roster_boxes
                    CC_SETGRAPHIC(item_getparam(int7, 3080));
                    CC_SETSIZE(35, 35, 0, 0);
                    if (((int10 == 0) || (script1483() == 0))) {
                        CC_SETOP(1, "Assign");
                    } else {
                        CC_SETOP(1, "");
                    };
                    if ((script6431() == 1)) {
                        CC_SETOP(3, "Compare");
                        CC_SETONOP(callback(script3566, int1, 1, 0, 0, -2147483644));
                    } else {
                        CC_SETONMOUSEOVER(callback(script7290, int1, 1, 0, 0));
                        CC_SETONMOUSELEAVE(callback(script7289));
                    };
                    CC_SETOPBASE(OC_NAME(int7));
                    CC_SETONDRAGCOMPLETE(callback(script3565, int1, 1, 0, 0, -2147483642));
                    int3 = MODULO(int6, 5);
                    int2 = (int6 / 5);
                    CC_SETPOSITION(((0 + 8) + (int3 * 52)), ((1 + 10) + (int2 * 52)), 0, 0);
                    CC_CREATE(comp(916, 197), 5, int1);  // pop_ship:crew_roster_backgrounds
                    CC_SETSIZE(45, 45, 0, 0);
                    CC_SETGRAPHIC(15582 as graphic);
                    CC_SETPOSITION(((0 + 3) + (int3 * 52)), ((1 + 5) + (int2 * 52)), 0, 0);
                    int16 = 15583;
                    CC_SETONMOUSEOVER(callback(script688, -2147483645, CC_GETID(), int16));
                    int16 = 15582;
                    CC_SETONMOUSELEAVE(callback(script688, -2147483645, CC_GETID(), int16));
                    CC_CREATE(comp(916, 203), 4, int1);  // pop_ship:crew_roster_levels
                    CC_SETSIZE(12, 12, 0, 0);
                    CC_SETTEXTFONT(66 as fontmetrics);
                    CC_SETTEXT(inttostring(int17, 10));
                    CC_SETCOLOUR(16777215);
                    CC_SETTEXTSHADOW(true);
                    CC_SETTEXTALIGN(2, 1, 0);
                    CC_SETPOSITION(((0 + 30) + (int3 * 52)), ((1 + 34) + (int2 * 52)), 0, 0);
                    int6 = (int6 + 1);
                    CC_CREATE(comp(916, 182), 5, int1);  // pop_ship:crew_layer_icons
                    if (((int1 >= int12) && (int1 <= int13))) {
                        CC_SETGRAPHIC(15670 as graphic);
                        CC_SETSIZE(35, 35, 0, 0);
                        CC_SETPOSITION(((0 + 8) + (int4 * 52)), 0, 0, 1);
                        CC_SETOP(1, "Select");
                        CC_SETOPBASE("None");
                        if ((script6431() == 1)) {
                            CC_SETOP(3, "Compare");
                            CC_SETONOP(callback(script3566, int1, 0, 0, 1, -2147483644));
                        } else {
                            CC_SETONMOUSEOVER(callback(script7290, int1, 0, 0, 1));
                            CC_SETONMOUSELEAVE(callback(script7289));
                        };
                        CC_SETONDRAGCOMPLETE(callback(script3565, int1, 0, 0, 1, -2147483642));
                    };
                    CC_CREATE(comp(916, 181), 5, int1);  // pop_ship:crew_layer_backgrounds
                    if (((int1 >= int12) && (int1 <= int13))) {
                        CC_SETSIZE(45, 45, 0, 0);
                        if ((varplayer_3393 == int1)) {
                            CC_SETGRAPHIC(15584 as graphic);
                        } else {
                            CC_SETGRAPHIC(15582 as graphic);
                            int16 = 15583;
                            CC_SETONMOUSEOVER(callback(script688, -2147483645, CC_GETID(), int16));
                            int16 = 15582;
                            CC_SETONMOUSELEAVE(callback(script688, -2147483645, CC_GETID(), int16));
                        };
                        CC_SETPOSITION(((0 + 3) + (int4 * 52)), 0, 0, 1);
                        int4 = (int4 + 1);
                    };
                    CC_CREATE(comp(916, 183), 4, int1);  // pop_ship:crew_layer_levels
                    CC_CREATE(comp(916, 200), 5, int1);  // pop_ship:crew_roster_number_backgrounds
                    CC_SETSIZE(21, 21, 0, 0);
                    CC_SETGRAPHIC(15477 as graphic);
                    CC_SETPOSITION((0 + (int3 * 52)), (1 + (int2 * 52)), 0, 0);
                    if ((int15 > 0)) {
                        if ((int15 < 5)) {
                            if ((TESTBIT(varplayer_3404, int1) == 1)) {
                                string0 = `<col=F7EDB7>${inttostring(int15, 10)}`;
                            } else {
                                string0 = "<col=F7EDB7>-";
                            };
                        } else {
                            string0 = "<col=F7EDB7>-";
                        };
                    } else {
                        string0 = "<col=F7EDB7>-";
                    };
                    CC_CREATE(comp(916, 201), 4, int1);  // pop_ship:crew_roster_numbers
                    CC_SETSIZE(21, 21, 0, 0);
                    CC_SETTEXTALIGN(1, 1, 0);
                    CC_SETTEXTFONT(66 as fontmetrics);
                    CC_SETTEXT(string0);
                    CC_SETPOSITION((0 + (int3 * 52)), ((1 + 1) + (int2 * 52)), 0, 0);
                    CC_CREATE(comp(916, 186), 5, int1);  // pop_ship:captain_layer_icons
                    CC_CREATE(comp(916, 185), 5, int1);  // pop_ship:captain_layer_backgrounds
                    CC_CREATE(comp(916, 187), 4, int1);  // pop_ship:captain_layer_levels
                    CC_CREATE(comp(916, 191), 5, int1);  // pop_ship:captain_roster_boxes
                    CC_CREATE(comp(916, 189), 5, int1);  // pop_ship:captain_roster_backgrounds
                    CC_CREATE(comp(916, 192), 5, int1);  // pop_ship:captain_roster_number_backgrounds
                    CC_CREATE(comp(916, 193), 4, int1);  // pop_ship:captain_roster_numbers
                    CC_CREATE(comp(916, 195), 4, int1);  // pop_ship:captain_roster_levels
                } else {
                    CC_CREATE(comp(916, 182), 5, int1);  // pop_ship:crew_layer_icons
                    CC_CREATE(comp(916, 181), 5, int1);  // pop_ship:crew_layer_backgrounds
                    CC_CREATE(comp(916, 183), 4, int1);  // pop_ship:crew_layer_levels
                    CC_CREATE(comp(916, 186), 5, int1);  // pop_ship:captain_layer_icons
                    CC_CREATE(comp(916, 185), 5, int1);  // pop_ship:captain_layer_backgrounds
                    CC_CREATE(comp(916, 187), 4, int1);  // pop_ship:captain_layer_levels
                    CC_CREATE(comp(916, 191), 5, int1);  // pop_ship:captain_roster_boxes
                    CC_CREATE(comp(916, 189), 5, int1);  // pop_ship:captain_roster_backgrounds
                    CC_CREATE(comp(916, 192), 5, int1);  // pop_ship:captain_roster_number_backgrounds
                    CC_CREATE(comp(916, 193), 4, int1);  // pop_ship:captain_roster_numbers
                    CC_CREATE(comp(916, 195), 4, int1);  // pop_ship:captain_roster_levels
                    CC_CREATE(comp(916, 197), 5, int1);  // pop_ship:crew_roster_backgrounds
                    CC_CREATE(comp(916, 199), 5, int1);  // pop_ship:crew_roster_boxes
                    CC_CREATE(comp(916, 200), 5, int1);  // pop_ship:crew_roster_number_backgrounds
                    CC_CREATE(comp(916, 201), 4, int1);  // pop_ship:crew_roster_numbers
                    CC_CREATE(comp(916, 203), 4, int1);  // pop_ship:crew_roster_levels
                };
            } else if ((script7310(int1) == 1)) {
                CC_CREATE(comp(916, 199), 5, int1);  // pop_ship:crew_roster_boxes
                CC_SETGRAPHIC(item_getparam(int7, 3080));
                CC_SETSIZE(35, 35, 0, 0);
                if (((int10 == 0) || (script1483() == 0))) {
                    CC_SETOP(1, "Assign");
                } else {
                    CC_SETOP(1, "");
                };
                if ((script6431() == 1)) {
                    CC_SETOP(3, "Compare");
                    CC_SETONOP(callback(script3566, int1, 1, 0, 0, -2147483644));
                } else {
                    CC_SETONMOUSEOVER(callback(script7290, int1, 1, 0, 0));
                    CC_SETONMOUSELEAVE(callback(script7289));
                };
                CC_SETOPBASE(OC_NAME(int7));
                CC_SETONDRAGCOMPLETE(callback(script3565, int1, 1, 0, 0, -2147483642));
                int3 = MODULO(int6, 5);
                int2 = (int6 / 5);
                CC_SETPOSITION(((0 + 8) + (int3 * 52)), ((1 + 10) + (int2 * 52)), 0, 0);
                CC_CREATE(comp(916, 197), 5, int1);  // pop_ship:crew_roster_backgrounds
                CC_SETSIZE(45, 45, 0, 0);
                CC_SETGRAPHIC(15582 as graphic);
                CC_SETPOSITION(((0 + 3) + (int3 * 52)), ((1 + 5) + (int2 * 52)), 0, 0);
                int16 = 15583;
                CC_SETONMOUSEOVER(callback(script688, -2147483645, CC_GETID(), int16));
                int16 = 15582;
                CC_SETONMOUSELEAVE(callback(script688, -2147483645, CC_GETID(), int16));
                CC_CREATE(comp(916, 203), 4, int1);  // pop_ship:crew_roster_levels
                CC_SETSIZE(12, 12, 0, 0);
                CC_SETTEXTFONT(66 as fontmetrics);
                CC_SETTEXT(inttostring(int17, 10));
                CC_SETCOLOUR(16777215);
                CC_SETTEXTSHADOW(true);
                CC_SETTEXTALIGN(2, 1, 0);
                CC_SETPOSITION(((0 + 30) + (int3 * 52)), ((1 + 34) + (int2 * 52)), 0, 0);
                int6 = (int6 + 1);
                CC_CREATE(comp(916, 182), 5, int1);  // pop_ship:crew_layer_icons
                if (((int1 >= int12) && (int1 <= int13))) {
                    CC_SETGRAPHIC(15670 as graphic);
                    CC_SETSIZE(35, 35, 0, 0);
                    CC_SETPOSITION(((0 + 8) + (int4 * 52)), 0, 0, 1);
                    CC_SETOP(1, "Select");
                    CC_SETOPBASE("None");
                    if ((script6431() == 1)) {
                        CC_SETOP(3, "Compare");
                        CC_SETONOP(callback(script3566, int1, 0, 0, 1, -2147483644));
                    } else {
                        CC_SETONMOUSEOVER(callback(script7290, int1, 0, 0, 1));
                        CC_SETONMOUSELEAVE(callback(script7289));
                    };
                    CC_SETONDRAGCOMPLETE(callback(script3565, int1, 0, 0, 1, -2147483642));
                };
                CC_CREATE(comp(916, 181), 5, int1);  // pop_ship:crew_layer_backgrounds
                if (((int1 >= int12) && (int1 <= int13))) {
                    CC_SETSIZE(45, 45, 0, 0);
                    if ((varplayer_3393 == int1)) {
                        CC_SETGRAPHIC(15584 as graphic);
                    } else {
                        CC_SETGRAPHIC(15582 as graphic);
                        int16 = 15583;
                        CC_SETONMOUSEOVER(callback(script688, -2147483645, CC_GETID(), int16));
                        int16 = 15582;
                        CC_SETONMOUSELEAVE(callback(script688, -2147483645, CC_GETID(), int16));
                    };
                    CC_SETPOSITION(((0 + 3) + (int4 * 52)), 0, 0, 1);
                    int4 = (int4 + 1);
                };
                CC_CREATE(comp(916, 183), 4, int1);  // pop_ship:crew_layer_levels
                CC_CREATE(comp(916, 200), 5, int1);  // pop_ship:crew_roster_number_backgrounds
                CC_SETSIZE(21, 21, 0, 0);
                CC_SETGRAPHIC(15477 as graphic);
                CC_SETPOSITION((0 + (int3 * 52)), (1 + (int2 * 52)), 0, 0);
                if ((int15 > 0)) {
                    if ((int15 < 5)) {
                        if ((TESTBIT(varplayer_3404, int1) == 1)) {
                            string0 = `<col=F7EDB7>${inttostring(int15, 10)}`;
                        } else {
                            string0 = "<col=F7EDB7>-";
                        };
                    } else {
                        string0 = "<col=F7EDB7>-";
                    };
                } else {
                    string0 = "<col=F7EDB7>-";
                };
                CC_CREATE(comp(916, 201), 4, int1);  // pop_ship:crew_roster_numbers
                CC_SETSIZE(21, 21, 0, 0);
                CC_SETTEXTALIGN(1, 1, 0);
                CC_SETTEXTFONT(66 as fontmetrics);
                CC_SETTEXT(string0);
                CC_SETPOSITION((0 + (int3 * 52)), ((1 + 1) + (int2 * 52)), 0, 0);
                CC_CREATE(comp(916, 186), 5, int1);  // pop_ship:captain_layer_icons
                CC_CREATE(comp(916, 185), 5, int1);  // pop_ship:captain_layer_backgrounds
                CC_CREATE(comp(916, 187), 4, int1);  // pop_ship:captain_layer_levels
                CC_CREATE(comp(916, 191), 5, int1);  // pop_ship:captain_roster_boxes
                CC_CREATE(comp(916, 189), 5, int1);  // pop_ship:captain_roster_backgrounds
                CC_CREATE(comp(916, 192), 5, int1);  // pop_ship:captain_roster_number_backgrounds
                CC_CREATE(comp(916, 193), 4, int1);  // pop_ship:captain_roster_numbers
                CC_CREATE(comp(916, 195), 4, int1);  // pop_ship:captain_roster_levels
            } else {
                CC_CREATE(comp(916, 182), 5, int1);  // pop_ship:crew_layer_icons
                CC_CREATE(comp(916, 181), 5, int1);  // pop_ship:crew_layer_backgrounds
                CC_CREATE(comp(916, 183), 4, int1);  // pop_ship:crew_layer_levels
                CC_CREATE(comp(916, 186), 5, int1);  // pop_ship:captain_layer_icons
                CC_CREATE(comp(916, 185), 5, int1);  // pop_ship:captain_layer_backgrounds
                CC_CREATE(comp(916, 187), 4, int1);  // pop_ship:captain_layer_levels
                CC_CREATE(comp(916, 191), 5, int1);  // pop_ship:captain_roster_boxes
                CC_CREATE(comp(916, 189), 5, int1);  // pop_ship:captain_roster_backgrounds
                CC_CREATE(comp(916, 192), 5, int1);  // pop_ship:captain_roster_number_backgrounds
                CC_CREATE(comp(916, 193), 4, int1);  // pop_ship:captain_roster_numbers
                CC_CREATE(comp(916, 195), 4, int1);  // pop_ship:captain_roster_levels
                CC_CREATE(comp(916, 197), 5, int1);  // pop_ship:crew_roster_backgrounds
                CC_CREATE(comp(916, 199), 5, int1);  // pop_ship:crew_roster_boxes
                CC_CREATE(comp(916, 200), 5, int1);  // pop_ship:crew_roster_number_backgrounds
                CC_CREATE(comp(916, 201), 4, int1);  // pop_ship:crew_roster_numbers
                CC_CREATE(comp(916, 203), 4, int1);  // pop_ship:crew_roster_levels
            };
        } else if ((int1 >= int12)) {
            if ((int1 <= int13)) {
                CC_CREATE(comp(916, 182), 5, int1);  // pop_ship:crew_layer_icons
                CC_SETPOSITION(((0 + 8) + (int4 * 52)), 0, 0, 1);
                CC_SETGRAPHIC(15670 as graphic);
                CC_SETSIZE(35, 35, 0, 0);
                CC_SETOP(1, "Select");
                CC_SETOPBASE("None");
                CC_SETONMOUSEOVER(callback(script7290, int1, 0, 0, 1));
                CC_SETONMOUSELEAVE(callback(script7289));
                CC_CREATE(comp(916, 181), 5, int1);  // pop_ship:crew_layer_backgrounds
                CC_SETSIZE(45, 45, 0, 0);
                if ((varplayer_3393 == int1)) {
                    CC_SETGRAPHIC(15584 as graphic);
                } else {
                    CC_SETGRAPHIC(15582 as graphic);
                    int16 = 15583;
                    CC_SETONMOUSEOVER(callback(script688, -2147483645, CC_GETID(), int16));
                    int16 = 15582;
                    CC_SETONMOUSELEAVE(callback(script688, -2147483645, CC_GETID(), int16));
                };
                CC_SETPOSITION(((0 + 3) + (int4 * 52)), 0, 0, 1);
                CC_CREATE(comp(916, 183), 4, int1);  // pop_ship:crew_layer_levels
                int4 = (int4 + 1);
                CC_CREATE(comp(916, 186), 5, int1);  // pop_ship:captain_layer_icons
                CC_CREATE(comp(916, 185), 5, int1);  // pop_ship:captain_layer_backgrounds
                CC_CREATE(comp(916, 187), 4, int1);  // pop_ship:captain_layer_levels
                CC_CREATE(comp(916, 191), 5, int1);  // pop_ship:captain_roster_boxes
                CC_CREATE(comp(916, 189), 5, int1);  // pop_ship:captain_roster_backgrounds
                CC_CREATE(comp(916, 192), 5, int1);  // pop_ship:captain_roster_number_backgrounds
                CC_CREATE(comp(916, 193), 4, int1);  // pop_ship:captain_roster_numbers
                CC_CREATE(comp(916, 195), 4, int1);  // pop_ship:captain_roster_levels
                CC_CREATE(comp(916, 197), 5, int1);  // pop_ship:crew_roster_backgrounds
                CC_CREATE(comp(916, 199), 5, int1);  // pop_ship:crew_roster_boxes
                CC_CREATE(comp(916, 200), 5, int1);  // pop_ship:crew_roster_number_backgrounds
                CC_CREATE(comp(916, 201), 4, int1);  // pop_ship:crew_roster_numbers
                CC_CREATE(comp(916, 203), 4, int1);  // pop_ship:crew_roster_levels
            } else {
                CC_CREATE(comp(916, 182), 5, int1);  // pop_ship:crew_layer_icons
                CC_CREATE(comp(916, 181), 5, int1);  // pop_ship:crew_layer_backgrounds
                CC_CREATE(comp(916, 183), 4, int1);  // pop_ship:crew_layer_levels
                CC_CREATE(comp(916, 186), 5, int1);  // pop_ship:captain_layer_icons
                CC_CREATE(comp(916, 185), 5, int1);  // pop_ship:captain_layer_backgrounds
                CC_CREATE(comp(916, 187), 4, int1);  // pop_ship:captain_layer_levels
                CC_CREATE(comp(916, 191), 5, int1);  // pop_ship:captain_roster_boxes
                CC_CREATE(comp(916, 189), 5, int1);  // pop_ship:captain_roster_backgrounds
                CC_CREATE(comp(916, 192), 5, int1);  // pop_ship:captain_roster_number_backgrounds
                CC_CREATE(comp(916, 193), 4, int1);  // pop_ship:captain_roster_numbers
                CC_CREATE(comp(916, 195), 4, int1);  // pop_ship:captain_roster_levels
                CC_CREATE(comp(916, 197), 5, int1);  // pop_ship:crew_roster_backgrounds
                CC_CREATE(comp(916, 199), 5, int1);  // pop_ship:crew_roster_boxes
                CC_CREATE(comp(916, 200), 5, int1);  // pop_ship:crew_roster_number_backgrounds
                CC_CREATE(comp(916, 201), 4, int1);  // pop_ship:crew_roster_numbers
                CC_CREATE(comp(916, 203), 4, int1);  // pop_ship:crew_roster_levels
            };
        } else {
            CC_CREATE(comp(916, 182), 5, int1);  // pop_ship:crew_layer_icons
            CC_CREATE(comp(916, 181), 5, int1);  // pop_ship:crew_layer_backgrounds
            CC_CREATE(comp(916, 183), 4, int1);  // pop_ship:crew_layer_levels
            CC_CREATE(comp(916, 186), 5, int1);  // pop_ship:captain_layer_icons
            CC_CREATE(comp(916, 185), 5, int1);  // pop_ship:captain_layer_backgrounds
            CC_CREATE(comp(916, 187), 4, int1);  // pop_ship:captain_layer_levels
            CC_CREATE(comp(916, 191), 5, int1);  // pop_ship:captain_roster_boxes
            CC_CREATE(comp(916, 189), 5, int1);  // pop_ship:captain_roster_backgrounds
            CC_CREATE(comp(916, 192), 5, int1);  // pop_ship:captain_roster_number_backgrounds
            CC_CREATE(comp(916, 193), 4, int1);  // pop_ship:captain_roster_numbers
            CC_CREATE(comp(916, 195), 4, int1);  // pop_ship:captain_roster_levels
            CC_CREATE(comp(916, 197), 5, int1);  // pop_ship:crew_roster_backgrounds
            CC_CREATE(comp(916, 199), 5, int1);  // pop_ship:crew_roster_boxes
            CC_CREATE(comp(916, 200), 5, int1);  // pop_ship:crew_roster_number_backgrounds
            CC_CREATE(comp(916, 201), 4, int1);  // pop_ship:crew_roster_numbers
            CC_CREATE(comp(916, 203), 4, int1);  // pop_ship:crew_roster_levels
        };
        int1 = (int1 + 1);
    };
    CC_CREATE(comp(916, 199), 5, int1);  // pop_ship:crew_roster_boxes
    CC_SETGRAPHIC(15669 as graphic);
    CC_SETSIZE(35, 35, 0, 0);
    CC_SETOP(1, "Assign");
    CC_SETOPBASE("None");
    CC_SETONMOUSEOVER(callback(script7290, int1, 0, 1, 1));
    CC_SETONMOUSELEAVE(callback(script7289));
    int3 = MODULO(int6, 5);
    int2 = (int6 / 5);
    CC_SETPOSITION(((0 + 8) + (int3 * 52)), ((1 + 10) + (int2 * 52)), 0, 0);
    CC_CREATE(comp(916, 197), 5, int1);  // pop_ship:crew_roster_backgrounds
    CC_SETSIZE(45, 45, 0, 0);
    CC_SETGRAPHIC(15582 as graphic);
    CC_SETPOSITION(((0 + 3) + (int3 * 52)), ((1 + 5) + (int2 * 52)), 0, 0);
    int16 = 15583;
    CC_SETONMOUSEOVER(callback(script688, -2147483645, CC_GETID(), int16));
    int16 = 15582;
    CC_SETONMOUSELEAVE(callback(script688, -2147483645, CC_GETID(), int16));
    CC_CREATE(comp(916, 203), 4, int1);  // pop_ship:crew_roster_levels
    int6 = (int6 + 1);
    if (((script7294(varplayer_3390) == -1) && (CC_FIND(comp(916, 186), 0) == 1))) {  // pop_ship:captain_layer_icons
        CC_SETGRAPHIC(15670 as graphic);
        CC_SETSIZE(35, 35, 0, 0);
        CC_SETPOSITION(0, 0, 1, 1);
        CC_SETOP(1, "Select");
        CC_SETOPBASE("None");
    };
    if ((script7294(int0) == -1)) {
        IF_SETHIDE(true, comp(916, 180));  // pop_ship:crew_layer
        IF_SETHIDE(true, comp(916, 196));  // pop_ship:crew_roster
    } else {
        IF_SETHIDE(false, comp(916, 180));  // pop_ship:crew_layer
        IF_SETHIDE(false, comp(916, 196));  // pop_ship:crew_roster
    };
    return;
}