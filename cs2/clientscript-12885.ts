//
function script12885(int0: struct): void {
    var int1 = comp(1802, 173);
    var int2 = comp(1802, 174);
    var int3 = IF_GETNEXTSUBID(int1);
    var int4 = IF_GETNEXTSUBID(int2);
    var int5 = 6;
    var int6 = 0;
    var int7 = IF_GETWIDTH(int1);
    var int8 = 21747 as graphic;
    var int9 = 18694;
    var int10 = 21748;
    var int11 = 18695;
    var int12 = 8;
    var int13 = int12;
    define_array(int13);
    var int14 = 0;
    var int15 = 0;
    while ((int14 < int13)) {
        switch (int14) {
            case 0: {
                if ((struct_getparam(int0, 6158) == 0)) {
                    pop_array(int15++, int14);
                };
                break;
            }
            case 1: {
                if ((struct_getparam(int0, 6159) == 0)) {
                    pop_array(int15++, int14);
                };
                break;
            }
            case 2: {
                if ((struct_getparam(int0, 6160) == 0)) {
                    pop_array(int15++, int14);
                };
                break;
            }
            case 3: {
                if ((struct_getparam(int0, 6275) == 0)) {
                    pop_array(int15++, int14);
                };
                break;
            }
            case 4: {
                if ((struct_getparam(int0, 7217) == 0)) {
                    pop_array(int15++, int14);
                };
                break;
            }
            case 5: {
                if ((struct_getparam(int0, 7218) == 0)) {
                    pop_array(int15++, int14);
                };
                break;
            }
            case 6: {
                if ((struct_getparam(int0, 9329) == 0)) {
                    pop_array(int15++, int14);
                };
                break;
            }
            default: {
                int13 = int15;
                break;
            }
        };
        int14 = (int14 + 1);
    };
    var int16 = 4;
    define_array[65536](int16);
    define_array[131072](int16);
    var int17 = 0;
    var int18 = 0;
    int14 = 0;
    int15 = 0;
    while ((int14 < int16)) {
        switch (int14) {
            case 0: {
                int15 = struct_getparam(int0, 6161);
                int17 = struct_getparam(int0, 6162);
                break;
            }
            case 1: {
                int15 = struct_getparam(int0, 6163);
                int17 = struct_getparam(int0, 6164);
                break;
            }
            case 2: {
                int15 = struct_getparam(int0, 6165);
                int17 = struct_getparam(int0, 6166);
                break;
            }
            case 3: {
                int15 = struct_getparam(int0, 6617);
                int17 = struct_getparam(int0, 6618);
                break;
            }
        };
        if (((int15 == -1) || (int17 == -1))) {
            int14 = int16;
        } else {
            pop_array[1](int14, int15);
            pop_array[2](int14, int17);
            int18 = (int18 + 1);
            int14 = (int14 + 1);
        };
    };
    var int19 = struct_getparam(int0, 6149);
    var int20 = 0;
    if ((int19 != -1 as cs2enum)) {
        int20 = MIN(21, ENUM_GETOUTPUTCOUNT(int19));
    };
    var int21 = -1 as obj;
    var int22 = -1 as graphic;
    if ((((struct_getparam(int0, 6139) == 0) || (struct_getparam(int0, 6139) == 1)) && (struct_getparam(int0, 6140) != -1 as obj))) {
        if ((int3 == 0)) {
            CC_CREATE(int1, 4, int3++);
            CC_SETTEXTFONT(58 as fontmetrics);
            CC_SETTEXTALIGN(0, 0, 0);
            CC_SETTEXT("Progress");
            CC_SETPOSITION(int5, int6, 0, 0);
            CC_SETSIZE(CC_GETX(), script7593(CC_GETTEXT(), (int7 - CC_GETX()), CC_GETFONTMETRICS(), 0), 1, 0);
            CC_SETCOLOUR(script10495(1));
            int6 = (int6 + (CC_GETHEIGHT() + 8));
            CC_CREATE(int1, 4, int3++);
            CC_SETTEXTFONT(207 as fontmetrics);
            CC_SETTEXTALIGN(0, 0, 0);
            CC_SETTEXT(`You can increase your event progress by handing in any ${struct_getparam(int0, 6141)} that you find throughout your travels.`);
            CC_SETPOSITION(int5, int6, 0, 0);
            CC_SETSIZE(CC_GETX(), script7593(CC_GETTEXT(), (int7 - CC_GETX()), CC_GETFONTMETRICS(), 0), 1, 0);
            CC_SETCOLOUR(16777215);
            int6 = (int6 + (CC_GETHEIGHT() + 8));
            CC_CREATE(int1, 4, int3++);
            CC_SETTEXTFONT(207 as fontmetrics);
            CC_SETTEXTALIGN(0, 0, 0);
            CC_SETTEXT("As your progress increases throughout the event you will gain access to unique rewards. These rewards are only available whilst the event is active, so make sure to get them before they're gone!");
            CC_SETPOSITION(int5, int6, 0, 0);
            CC_SETSIZE(CC_GETX(), script7593(CC_GETTEXT(), (int7 - CC_GETX()), CC_GETFONTMETRICS(), 0), 1, 0);
            CC_SETCOLOUR(16777215);
            int6 = (int6 + (CC_GETHEIGHT() + 8));
            CC_CREATE(int1, 4, int3++);
            CC_SETTEXTFONT(207 as fontmetrics);
            CC_SETTEXT("Currency earning activities:");
            CC_SETSIZE(CC_GETX(), script7593(CC_GETTEXT(), (int7 - CC_GETX()), CC_GETFONTMETRICS(), 0), 1, 0);
            CC_SETPOSITION(int5, int6, 0, 0);
            CC_SETTEXTALIGN(0, 1, 0);
            CC_SETCOLOUR(script10495(3));
            int6 = (int6 + (CC_GETHEIGHT() + 4));
            int14 = 0;
            while ((int14 < int13)) {
                CC_CREATE[1](int1, 5, int3++);
                CC_SETPOSITION[1](int5, int6, 0, 0);
                CC_SETSIZE[1](16, 16, 0, 0);
                CC_SETGRAPHIC[1](int8);
                CC_CREATE(int1, 4, int3++);
                CC_SETTEXTFONT(207 as fontmetrics);
                CC_SETTEXT(enum_getvalue(0, 36, 12071 as cs2enum, push_array(int14)));
                CC_SETPOSITION(((int5 + CC_GETWIDTH[1]()) + 4), int6, 0, 0);
                CC_SETSIZE(CC_GETX(), MAX(CC_GETHEIGHT[1](), script7593(CC_GETTEXT(), (int7 - CC_GETX()), CC_GETFONTMETRICS(), 0)), 1, 0);
                CC_SETTEXTALIGN(0, 1, 0);
                CC_SETCOLOUR(16777215);
                int6 = (int6 + (MAX(CC_GETHEIGHT(), CC_GETHEIGHT[1]()) + 4));
                if (((++int14 == (int12 / 2)) && (int14 != int13))) {
                    int15 = int5;
                    int17 = int6;
                    int5 = (int5 + (IF_GETWIDTH(int1) / 2));
                    int6 = (int6 - ((MAX(CC_GETHEIGHT(), CC_GETHEIGHT[1]()) + 4) * (int12 / 2)));
                };
            };
            if ((int13 > (int12 / 2))) {
                int5 = int15;
                int6 = int17;
            };
            int6 = (int6 + 6);
            if ((struct_getparam(int0, 6161) > -1)) {
                CC_CREATE(int1, 4, int3++);
                CC_SETTEXTFONT(58 as fontmetrics);
                CC_SETTEXTALIGN(0, 0, 0);
                CC_SETTEXT("Bonuses");
                CC_SETPOSITION(int5, int6, 0, 0);
                CC_SETSIZE(CC_GETX(), script7593(CC_GETTEXT(), (int7 - CC_GETX()), CC_GETFONTMETRICS(), 0), 1, 0);
                CC_SETCOLOUR(script10495(1));
                int6 = (int6 + (CC_GETHEIGHT() + 8));
                CC_CREATE(int1, 4, int3++);
                CC_SETTEXTFONT(207 as fontmetrics);
                CC_SETTEXTALIGN(0, 0, 0);
                CC_SETTEXT(struct_getparam(int0, 5803));
                CC_SETPOSITION(int5, int6, 0, 0);
                CC_SETSIZE(CC_GETX(), script7593(CC_GETTEXT(), (int7 - CC_GETX()), CC_GETFONTMETRICS(), 0), 1, 0);
                CC_SETCOLOUR(16777215);
                int6 = (int6 + (CC_GETHEIGHT() + 8));
                if ((struct_getparam(int0, 5806) == false)) {
                    CC_CREATE(int1, 4, int3++);
                    CC_SETTEXTFONT(207 as fontmetrics);
                    CC_SETTEXT("Bonus skills:");
                    CC_SETSIZE(CC_GETX(), script7593(CC_GETTEXT(), (int7 - CC_GETX()), CC_GETFONTMETRICS(), 0), 1, 0);
                    CC_SETPOSITION(int5, int6, 0, 0);
                    CC_SETTEXTALIGN(0, 1, 0);
                    CC_SETCOLOUR(script10495(3));
                    int6 = (int6 + (CC_GETHEIGHT() + 8));
                    if ((int18 == 0)) {
                        CC_CREATE[1](int1, 5, int3++);
                        CC_SETPOSITION[1](int5, int6, 0, 0);
                        CC_SETSIZE[1](36, 36, 0, 0);
                        CC_SETGRAPHIC[1](18269 as graphic);
                        CC_CREATE(int1, 4, int3++);
                        CC_SETPOSITION(int5, int6, 0, 0);
                        CC_SETTEXT("NONE");
                        CC_SETTEXTALIGN(1, 1, 0);
                        CC_SETSIZE(36, 36, 0, 0);
                        CC_SETTEXTFONT(207 as fontmetrics);
                        CC_SETCOLOUR(16777215);
                    };
                    int14 = 0;
                    while ((int14 < int18)) {
                        CC_CREATE[1](int1, 5, int3++);
                        CC_SETPOSITION[1](int5, int6, 0, 0);
                        CC_SETSIZE[1](36, 36, 0, 0);
                        CC_SETGRAPHIC[1](18269 as graphic);
                        CC_CREATE(int1, 5, int3++);
                        CC_SETPOSITION(int5, (int6 + 1), 0, 0);
                        CC_SETSIZE(35, 35, 0, 0);
                        CC_SETGRAPHIC(enum_getvalue(0, 23, 8548 as cs2enum, push_array[1](int14)));
                        CC_SETONMOUSEREPEAT(callback(script8799, enum_getvalue(0, 36, 108 as cs2enum, push_array[1](int14)), -2147483645, -2147483643));
                        CC_CREATE(int1, 4, int3++);
                        CC_SETPOSITION(int5, ((int6 + 35) + 2), 0, 0);
                        CC_SETTEXT(`+${inttostring(push_array[2](int14), 10)}%`);
                        CC_SETTEXTALIGN(1, 1, 0);
                        CC_SETSIZE(36, enum_getvalue(25, 0, 8549, 207), 0, 0);
                        CC_SETTEXTFONT(207);
                        CC_SETCOLOUR(16777215);
                        int14 = (int14 + 1);
                        int5 = (int5 + (CC_GETWIDTH[1]() + 6));
                    };
                };
            };
        };
        int6 = 0;
        int5 = 6;
        if ((((int4 == 0) && (struct_getparam(int0, 6273) != -1 as obj)) && (struct_getparam(int0, 6274) != -1 as obj))) {
            CC_CREATE(int2, 4, int4++);
            CC_SETTEXTFONT(58 as fontmetrics);
            CC_SETTEXTALIGN(0, 0, 0);
            CC_SETTEXT("Mystery Boxes");
            CC_SETPOSITION(int5, int6, 0, 0);
            CC_SETSIZE(CC_GETX(), script7593(CC_GETTEXT(), (int7 - CC_GETX()), CC_GETFONTMETRICS(), 0), 1, 0);
            CC_SETCOLOUR(script10495(1));
            int6 = (int6 + (CC_GETHEIGHT() + 8));
            CC_CREATE(int2, 4, int4++);
            CC_SETTEXTFONT(207 as fontmetrics);
            CC_SETTEXTALIGN(0, 0, 0);
            CC_SETTEXT("If you have any extra or leftover currency from the event, you can exchange them for mystery boxes. A mystery box comes in two different sizes - both offering an assortment of mystery prizes.");
            CC_SETPOSITION(int5, int6, 0, 0);
            CC_SETSIZE(CC_GETX(), script7593(CC_GETTEXT(), (int7 - CC_GETX()), CC_GETFONTMETRICS(), 0), 1, 0);
            CC_SETCOLOUR(16777215);
            int6 = (int6 + (CC_GETHEIGHT() + 12));
            if ((struct_getparam(int0, 9247) == true)) {
                script7858(1, 0, int5, int6, 1, 0, 200, 30, 0, 0, 17062 as dbrow, "View Prizes");
                CC_SETOP(1, "View Prizes");
                int6 = (int6 + (CC_GETHEIGHT() + 30));
            } else if ((struct_getparam(int0, 6149) != -1 as cs2enum)) {
                CC_CREATE(int2, 4, int4++);
                CC_SETTEXTFONT(207 as fontmetrics);
                CC_SETTEXTALIGN(0, 0, 0);
                CC_SETTEXT("Boxes that are opened during an event will also contain special themed prizes.");
                CC_SETPOSITION(int5, int6, 0, 0);
                CC_SETSIZE(CC_GETX(), script7593(CC_GETTEXT(), (int7 - CC_GETX()), CC_GETFONTMETRICS(), 0), 1, 0);
                CC_SETCOLOUR(16777215);
                int6 = (int6 + (CC_GETHEIGHT() + 8));
                CC_CREATE(int2, 4, int4++);
                CC_SETTEXTFONT(207 as fontmetrics);
                CC_SETTEXT("Special prizes:");
                CC_SETSIZE(CC_GETX(), script7593(CC_GETTEXT(), (int7 - CC_GETX()), CC_GETFONTMETRICS(), 0), 1, 0);
                CC_SETPOSITION(int5, int6, 0, 0);
                CC_SETTEXTALIGN(0, 1, 0);
                CC_SETCOLOUR(script10495(3));
                int6 = (int6 + (CC_GETHEIGHT() + 8));
                int14 = 0;
                while ((int14 < int20)) {
                    int21 = enum_getvalue(0, 33, int19, int14);
                    int22 = item_getparam(int21, 6276);
                    CC_CREATE[1](int2, 5, int4++);
                    CC_SETPOSITION[1](int5, int6, 0, 0);
                    CC_SETSIZE[1](40, 36, 0, 0);
                    if ((int22 == -1 as graphic)) {
                        CC_SETGRAPHIC[1](18269 as graphic);
                    } else {
                        CC_SETGRAPHIC[1](int22);
                    };
                    CC_CREATE(int2, 5, int4++);
                    CC_SETPOSITION((int5 + 4), (int6 + 2), 0, 0);
                    CC_SETSIZE(36, 32, 0, 0);
                    if ((int22 == -1 as graphic)) {
                        CC_SETOBJECT(int21, -1);
                    };
                    CC_SETOUTLINE(1);
                    CC_SETONMOUSEREPEAT(callback(script9564, int21, -2147483645, CC_GETID()));
                    int5 = (int5 + (CC_GETWIDTH[1]() + 6));
                    if ((MODULO((int14 + 1), 6) == 0)) {
                        int5 = 6;
                        int6 = (int6 + (CC_GETHEIGHT[1]() + 6));
                    };
                    int14 = (int14 + 1);
                };
            };
        };
    } else {
        CC_CREATE(comp(1802, 172), 4, IF_GETNEXTSUBID(comp(1802, 172)));
        CC_SETTEXTFONT(58 as fontmetrics);
        CC_SETCOLOUR(16777215);
        CC_SETTEXTALIGN(1, 1, 0);
        CC_SETPOSITION(0, 0, 0, 0);
        CC_SETSIZE(0, 0, 1, 1);
        CC_SETTEXT("There is no information for this event.");
    };
    return;
}