//
function script3268(): void {
    var int0 = 1;
    var int1 = 18;
    var int2 = 255;
    var int3 = ((((varclient_1198 + varclient_1199) + varclient_1200) + varclient_1201) + varclient_1202);
    var int4 = (int2 - (int3 * int1));
    int4 = MIN(int4, 105);
    var int5 = 4;
    var int6 = 0;
    var int7 = 0;
    var int8 = 0;
    var int9 = 0;
    [int6, int7, int8, int9] = script3269(varclient_1184, int5, int1, int4);
    switch (varclient_1184) {
        case 0: {
            IF_SETPOSITION(int0, script3270(IF_GETY(comp(933, 241)), int5), 0, 0, comp(933, 241));
            if ((varclient_1198 == 1)) {
                IF_SETHIDE(false, comp(933, 241));
                IF_SETOP(1, "Expand", comp(933, 241));
                stack(2851);
                stack(61145340);
                IF_SETGRAPHIC();
            } else {
                IF_SETHIDE(true, comp(933, 241));
                IF_SETOP(1, "", comp(933, 241));
            };
            IF_SETPOSITION(int0, script3270(IF_GETY(comp(933, 253)), int6), 0, 0, comp(933, 253));
            if ((varclient_1199 == 1)) {
                IF_SETHIDE(false, comp(933, 253));
                IF_SETOP(1, "Expand", comp(933, 253));
                stack(2851);
                stack(61145352);
                IF_SETGRAPHIC();
            } else {
                IF_SETHIDE(true, comp(933, 253));
                IF_SETHIDE(true, comp(933, 251));
                IF_SETOP(1, "", comp(933, 253));
            };
            IF_SETPOSITION(int0, script3270(IF_GETY(comp(933, 265)), int7), 0, 0, comp(933, 265));
            if ((varclient_1200 == 1)) {
                IF_SETHIDE(false, comp(933, 265));
                IF_SETOP(1, "Expand", comp(933, 265));
                stack(2851);
                stack(61145364);
                IF_SETGRAPHIC();
            } else {
                IF_SETHIDE(true, comp(933, 265));
                IF_SETHIDE(true, comp(933, 263));
                IF_SETOP(1, "", comp(933, 265));
            };
            IF_SETPOSITION(int0, script3270(IF_GETY(comp(933, 277)), int8), 0, 0, comp(933, 277));
            if ((varclient_1201 == 1)) {
                IF_SETHIDE(false, comp(933, 277));
                IF_SETOP(1, "Expand", comp(933, 277));
                stack(2851);
                stack(61145376);
                IF_SETGRAPHIC();
            } else {
                IF_SETHIDE(true, comp(933, 277));
                IF_SETHIDE(true, comp(933, 275));
                IF_SETOP(1, "", comp(933, 277));
            };
            IF_SETPOSITION(int0, script3270(IF_GETY(comp(933, 289)), int9), 0, 0, comp(933, 289));
            if ((varclient_1202 == 1)) {
                IF_SETHIDE(false, comp(933, 289));
                IF_SETOP(1, "Expand", comp(933, 289));
                stack(2851);
                stack(61145387);
                IF_SETGRAPHIC();
            } else {
                IF_SETHIDE(true, comp(933, 289));
                IF_SETHIDE(true, comp(933, 287));
                IF_SETOP(1, "", comp(933, 289));
            };
            IF_SETSIZE(16384, script3270(IF_GETHEIGHT(comp(933, 241)), ((IF_GETY(comp(933, 253)) - IF_GETY(comp(933, 241))) - 5)), 2, 0, comp(933, 241));
            IF_SETSIZE(16384, script3270(IF_GETHEIGHT(comp(933, 253)), ((IF_GETY(comp(933, 265)) - IF_GETY(comp(933, 253))) - 5)), 2, 0, comp(933, 253));
            IF_SETSIZE(16384, script3270(IF_GETHEIGHT(comp(933, 265)), ((IF_GETY(comp(933, 277)) - IF_GETY(comp(933, 265))) - 5)), 2, 0, comp(933, 265));
            IF_SETSIZE(16384, script3270(IF_GETHEIGHT(comp(933, 277)), ((IF_GETY(comp(933, 289)) - IF_GETY(comp(933, 277))) - 5)), 2, 0, comp(933, 277));
            IF_SETSIZE(16384, script3270(IF_GETHEIGHT(comp(933, 289)), ((int2 - IF_GETY(comp(933, 289))) - 5)), 2, 0, comp(933, 289));
            break;
        }
        case 1: {
            IF_SETPOSITION(int0, script3270(IF_GETY(comp(933, 241)), int5), 0, 0, comp(933, 241));
            IF_SETOP(1, "Shrink", comp(933, 241));
            stack(2852);
            stack(61145340);
            IF_SETGRAPHIC();
            IF_SETPOSITION(int0, script3270(IF_GETY(61145341), int6), 0, 0, 61145341);
            if ((varclient_1199 == 1)) {
                IF_SETHIDE(false, comp(933, 253));
                IF_SETOP(1, "Expand", comp(933, 253));
                stack(2851);
                stack(61145352);
                IF_SETGRAPHIC();
            } else {
                IF_SETHIDE(true, comp(933, 253));
                IF_SETHIDE(true, comp(933, 251));
                IF_SETOP(1, "", comp(933, 253));
            };
            IF_SETPOSITION(int0, script3270(IF_GETY(comp(933, 265)), int7), 0, 0, comp(933, 265));
            if ((varclient_1200 == 1)) {
                IF_SETHIDE(false, comp(933, 265));
                IF_SETOP(1, "Expand", comp(933, 265));
                stack(2851);
                stack(61145364);
                IF_SETGRAPHIC();
            } else {
                IF_SETHIDE(true, comp(933, 265));
                IF_SETHIDE(true, comp(933, 263));
                IF_SETOP(1, "", comp(933, 265));
            };
            IF_SETPOSITION(int0, script3270(IF_GETY(comp(933, 277)), int8), 0, 0, comp(933, 277));
            if ((varclient_1201 == 1)) {
                IF_SETHIDE(false, comp(933, 277));
                IF_SETOP(1, "Expand", comp(933, 277));
                stack(2851);
                stack(61145376);
                IF_SETGRAPHIC();
            } else {
                IF_SETHIDE(true, comp(933, 277));
                IF_SETHIDE(true, comp(933, 275));
                IF_SETOP(1, "", comp(933, 277));
            };
            IF_SETPOSITION(int0, script3270(IF_GETY(comp(933, 289)), int9), 0, 0, comp(933, 289));
            if ((varclient_1202 == 1)) {
                IF_SETHIDE(false, comp(933, 289));
                IF_SETOP(1, "Expand", comp(933, 289));
                stack(2851);
                stack(61145387);
                IF_SETGRAPHIC();
            } else {
                IF_SETHIDE(true, comp(933, 289));
                IF_SETHIDE(true, comp(933, 287));
                IF_SETOP(1, "", comp(933, 289));
            };
            IF_SETSIZE(16384, script3270(IF_GETHEIGHT(comp(933, 241)), ((IF_GETY(comp(933, 253)) - IF_GETY(comp(933, 241))) - 2)), 2, 0, comp(933, 241));
            IF_SETSIZE(16384, script3270(IF_GETHEIGHT(comp(933, 253)), ((IF_GETY(comp(933, 265)) - IF_GETY(comp(933, 253))) - 2)), 2, 0, comp(933, 253));
            IF_SETSIZE(16384, script3270(IF_GETHEIGHT(comp(933, 265)), ((IF_GETY(comp(933, 277)) - IF_GETY(comp(933, 265))) - 2)), 2, 0, comp(933, 265));
            IF_SETSIZE(16384, script3270(IF_GETHEIGHT(comp(933, 277)), ((IF_GETY(comp(933, 289)) - IF_GETY(comp(933, 277))) - 2)), 2, 0, comp(933, 277));
            IF_SETSIZE(16384, script3270(IF_GETHEIGHT(comp(933, 289)), ((int2 - IF_GETY(comp(933, 289))) - 2)), 2, 0, comp(933, 289));
            break;
        }
        case 2: {
            IF_SETPOSITION(int0, script3270(IF_GETY(comp(933, 241)), int5), 0, 0, comp(933, 241));
            if ((varclient_1198 == 1)) {
                IF_SETHIDE(false, comp(933, 241));
                IF_SETOP(1, "Expand", comp(933, 241));
                stack(2851);
                stack(61145340);
                IF_SETGRAPHIC();
            } else {
                IF_SETHIDE(true, comp(933, 241));
                IF_SETOP(1, "", comp(933, 241));
            };
            IF_SETPOSITION(int0, script3270(IF_GETY(comp(933, 253)), int6), 0, 0, comp(933, 253));
            IF_SETOP(1, "Shrink", comp(933, 253));
            stack(2852);
            stack(61145352);
            IF_SETGRAPHIC();
            IF_SETPOSITION(int0, script3270(IF_GETY(61145353), int7), 0, 0, 61145353);
            if ((varclient_1200 == 1)) {
                IF_SETHIDE(false, comp(933, 265));
                IF_SETOP(1, "Expand", comp(933, 265));
                stack(2851);
                stack(61145364);
                IF_SETGRAPHIC();
            } else {
                IF_SETHIDE(true, comp(933, 265));
                IF_SETHIDE(true, comp(933, 263));
                IF_SETOP(1, "", comp(933, 265));
            };
            IF_SETPOSITION(int0, script3270(IF_GETY(comp(933, 277)), int8), 0, 0, comp(933, 277));
            if ((varclient_1201 == 1)) {
                IF_SETHIDE(false, comp(933, 277));
                IF_SETOP(1, "Expand", comp(933, 277));
                stack(2851);
                stack(61145376);
                IF_SETGRAPHIC();
            } else {
                IF_SETHIDE(true, comp(933, 277));
                IF_SETHIDE(true, comp(933, 275));
                IF_SETOP(1, "", comp(933, 277));
            };
            IF_SETPOSITION(int0, script3270(IF_GETY(comp(933, 289)), int9), 0, 0, comp(933, 289));
            if ((varclient_1202 == 1)) {
                IF_SETHIDE(false, comp(933, 289));
                IF_SETOP(1, "Expand", comp(933, 289));
                stack(2851);
                stack(61145387);
                IF_SETGRAPHIC();
            } else {
                IF_SETHIDE(true, comp(933, 289));
                IF_SETHIDE(true, comp(933, 287));
                IF_SETOP(1, "", comp(933, 289));
            };
            IF_SETSIZE(16384, script3270(IF_GETHEIGHT(comp(933, 241)), ((IF_GETY(comp(933, 253)) - IF_GETY(comp(933, 241))) - 2)), 2, 0, comp(933, 241));
            IF_SETSIZE(16384, script3270(IF_GETHEIGHT(comp(933, 253)), ((IF_GETY(comp(933, 265)) - IF_GETY(comp(933, 253))) - 2)), 2, 0, comp(933, 253));
            IF_SETSIZE(16384, script3270(IF_GETHEIGHT(comp(933, 265)), ((IF_GETY(comp(933, 277)) - IF_GETY(comp(933, 265))) - 2)), 2, 0, comp(933, 265));
            IF_SETSIZE(16384, script3270(IF_GETHEIGHT(comp(933, 277)), ((IF_GETY(comp(933, 289)) - IF_GETY(comp(933, 277))) - 2)), 2, 0, comp(933, 277));
            IF_SETSIZE(16384, script3270(IF_GETHEIGHT(comp(933, 289)), ((int2 - IF_GETY(comp(933, 289))) - 2)), 2, 0, comp(933, 289));
            break;
        }
        case 3: {
            IF_SETPOSITION(int0, script3270(IF_GETY(comp(933, 241)), int5), 0, 0, comp(933, 241));
            if ((varclient_1198 == 1)) {
                IF_SETHIDE(false, comp(933, 241));
                IF_SETOP(1, "Expand", comp(933, 241));
                stack(2851);
                stack(61145340);
                IF_SETGRAPHIC();
            } else {
                IF_SETHIDE(true, comp(933, 241));
                IF_SETOP(1, "", comp(933, 241));
            };
            IF_SETPOSITION(int0, script3270(IF_GETY(comp(933, 253)), int6), 0, 0, comp(933, 253));
            if ((varclient_1199 == 1)) {
                IF_SETHIDE(false, comp(933, 253));
                IF_SETOP(1, "Expand", comp(933, 253));
                stack(2851);
                stack(61145352);
                IF_SETGRAPHIC();
            } else {
                IF_SETHIDE(true, comp(933, 253));
                IF_SETHIDE(true, comp(933, 251));
                IF_SETOP(1, "", comp(933, 253));
            };
            IF_SETPOSITION(int0, script3270(IF_GETY(comp(933, 265)), int7), 0, 0, comp(933, 265));
            IF_SETOP(1, "Shrink", comp(933, 265));
            stack(2852);
            stack(61145364);
            IF_SETGRAPHIC();
            IF_SETPOSITION(int0, script3270(IF_GETY(61145365), int8), 0, 0, 61145365);
            if ((varclient_1201 == 1)) {
                IF_SETHIDE(false, comp(933, 277));
                IF_SETOP(1, "Expand", comp(933, 277));
                stack(2851);
                stack(61145376);
                IF_SETGRAPHIC();
            } else {
                IF_SETHIDE(true, comp(933, 277));
                IF_SETHIDE(true, comp(933, 275));
                IF_SETOP(1, "", comp(933, 277));
            };
            IF_SETPOSITION(int0, script3270(IF_GETY(comp(933, 289)), int9), 0, 0, comp(933, 289));
            if ((varclient_1202 == 1)) {
                IF_SETHIDE(false, comp(933, 289));
                IF_SETOP(1, "Expand", comp(933, 289));
                stack(2851);
                stack(61145387);
                IF_SETGRAPHIC();
            } else {
                IF_SETHIDE(true, comp(933, 289));
                IF_SETHIDE(true, comp(933, 287));
                IF_SETOP(1, "", comp(933, 289));
            };
            IF_SETSIZE(16384, script3270(IF_GETHEIGHT(comp(933, 241)), ((IF_GETY(comp(933, 253)) - IF_GETY(comp(933, 241))) - 2)), 2, 0, comp(933, 241));
            IF_SETSIZE(16384, script3270(IF_GETHEIGHT(comp(933, 253)), ((IF_GETY(comp(933, 265)) - IF_GETY(comp(933, 253))) - 2)), 2, 0, comp(933, 253));
            IF_SETSIZE(16384, script3270(IF_GETHEIGHT(comp(933, 265)), ((IF_GETY(comp(933, 277)) - IF_GETY(comp(933, 265))) - 2)), 2, 0, comp(933, 265));
            IF_SETSIZE(16384, script3270(IF_GETHEIGHT(comp(933, 277)), ((IF_GETY(comp(933, 289)) - IF_GETY(comp(933, 277))) - 2)), 2, 0, comp(933, 277));
            IF_SETSIZE(16384, script3270(IF_GETHEIGHT(comp(933, 289)), ((int2 - IF_GETY(comp(933, 289))) - 2)), 2, 0, comp(933, 289));
            break;
        }
        case 4: {
            IF_SETPOSITION(int0, script3270(IF_GETY(comp(933, 241)), int5), 0, 0, comp(933, 241));
            if ((varclient_1198 == 1)) {
                IF_SETHIDE(false, comp(933, 241));
                IF_SETOP(1, "Expand", comp(933, 241));
                stack(2851);
                stack(61145340);
                IF_SETGRAPHIC();
            } else {
                IF_SETHIDE(true, comp(933, 241));
                IF_SETOP(1, "", comp(933, 241));
            };
            IF_SETPOSITION(int0, script3270(IF_GETY(comp(933, 253)), int6), 0, 0, comp(933, 253));
            if ((varclient_1199 == 1)) {
                IF_SETHIDE(false, comp(933, 253));
                IF_SETOP(1, "Expand", comp(933, 253));
                stack(2851);
                stack(61145352);
                IF_SETGRAPHIC();
            } else {
                IF_SETHIDE(true, comp(933, 253));
                IF_SETHIDE(true, comp(933, 251));
                IF_SETOP(1, "", comp(933, 253));
            };
            IF_SETPOSITION(int0, script3270(IF_GETY(comp(933, 265)), int7), 0, 0, comp(933, 265));
            if ((varclient_1200 == 1)) {
                IF_SETHIDE(false, comp(933, 265));
                IF_SETOP(1, "Expand", comp(933, 265));
                stack(2851);
                stack(61145364);
                IF_SETGRAPHIC();
            } else {
                IF_SETHIDE(true, comp(933, 265));
                IF_SETHIDE(true, comp(933, 263));
                IF_SETOP(1, "", comp(933, 265));
            };
            IF_SETPOSITION(int0, script3270(IF_GETY(comp(933, 277)), int8), 0, 0, comp(933, 277));
            IF_SETOP(1, "Shrink", comp(933, 277));
            stack(2852);
            stack(61145376);
            IF_SETGRAPHIC();
            IF_SETPOSITION(int0, script3270(IF_GETY(61145377), int9), 0, 0, 61145377);
            if ((varclient_1202 == 1)) {
                IF_SETHIDE(false, comp(933, 289));
                IF_SETOP(1, "Expand", comp(933, 289));
                stack(2851);
                stack(61145387);
                IF_SETGRAPHIC();
            } else {
                IF_SETHIDE(true, comp(933, 289));
                IF_SETHIDE(true, comp(933, 287));
                IF_SETOP(1, "", comp(933, 289));
            };
            IF_SETSIZE(16384, script3270(IF_GETHEIGHT(comp(933, 241)), ((IF_GETY(comp(933, 253)) - IF_GETY(comp(933, 241))) - 2)), 2, 0, comp(933, 241));
            IF_SETSIZE(16384, script3270(IF_GETHEIGHT(comp(933, 253)), ((IF_GETY(comp(933, 265)) - IF_GETY(comp(933, 253))) - 2)), 2, 0, comp(933, 253));
            IF_SETSIZE(16384, script3270(IF_GETHEIGHT(comp(933, 265)), ((IF_GETY(comp(933, 277)) - IF_GETY(comp(933, 265))) - 2)), 2, 0, comp(933, 265));
            IF_SETSIZE(16384, script3270(IF_GETHEIGHT(comp(933, 277)), ((IF_GETY(comp(933, 289)) - IF_GETY(comp(933, 277))) - 2)), 2, 0, comp(933, 277));
            IF_SETSIZE(16384, script3270(IF_GETHEIGHT(comp(933, 289)), ((int2 - IF_GETY(comp(933, 289))) - 2)), 2, 0, comp(933, 289));
            break;
        }
        case 5: {
            IF_SETPOSITION(int0, script3270(IF_GETY(comp(933, 241)), int5), 0, 0, comp(933, 241));
            if ((varclient_1198 == 1)) {
                IF_SETHIDE(false, comp(933, 241));
                IF_SETOP(1, "Expand", comp(933, 241));
                stack(2851);
                stack(61145340);
                IF_SETGRAPHIC();
            } else {
                IF_SETHIDE(true, comp(933, 241));
                IF_SETOP(1, "", comp(933, 241));
            };
            IF_SETPOSITION(int0, script3270(IF_GETY(comp(933, 253)), int6), 0, 0, comp(933, 253));
            if ((varclient_1199 == 1)) {
                IF_SETHIDE(false, comp(933, 253));
                IF_SETOP(1, "Expand", comp(933, 253));
                stack(2851);
                stack(61145352);
                IF_SETGRAPHIC();
            } else {
                IF_SETHIDE(true, comp(933, 253));
                IF_SETHIDE(true, comp(933, 251));
                IF_SETOP(1, "", comp(933, 253));
            };
            IF_SETPOSITION(int0, script3270(IF_GETY(comp(933, 265)), int7), 0, 0, comp(933, 265));
            if ((varclient_1200 == 1)) {
                IF_SETHIDE(false, comp(933, 265));
                IF_SETOP(1, "Expand", comp(933, 265));
                stack(2851);
                stack(61145364);
                IF_SETGRAPHIC();
            } else {
                IF_SETHIDE(true, comp(933, 265));
                IF_SETHIDE(true, comp(933, 263));
                IF_SETOP(1, "", comp(933, 265));
            };
            IF_SETPOSITION(int0, script3270(IF_GETY(comp(933, 277)), int8), 0, 0, comp(933, 277));
            if ((varclient_1201 == 1)) {
                IF_SETHIDE(false, comp(933, 277));
                IF_SETOP(1, "Expand", comp(933, 277));
                stack(2851);
                stack(61145376);
                IF_SETGRAPHIC();
            } else {
                IF_SETHIDE(true, comp(933, 277));
                IF_SETHIDE(true, comp(933, 275));
                IF_SETOP(1, "", comp(933, 277));
            };
            IF_SETPOSITION(int0, script3270(IF_GETY(comp(933, 289)), int9), 0, 0, comp(933, 289));
            IF_SETOP(1, "Shrink", comp(933, 289));
            stack(2852);
            stack(61145387);
            IF_SETGRAPHIC();
            IF_SETSIZE(16384, script3270(IF_GETHEIGHT(61145329), ((IF_GETY(61145341) - IF_GETY(61145329)) - 2)), 2, 0, 61145329);
            IF_SETSIZE(16384, script3270(IF_GETHEIGHT(61145341), ((IF_GETY(61145353) - IF_GETY(61145341)) - 2)), 2, 0, 61145341);
            IF_SETSIZE(16384, script3270(IF_GETHEIGHT(61145353), ((IF_GETY(61145365) - IF_GETY(61145353)) - 2)), 2, 0, 61145353);
            IF_SETSIZE(16384, script3270(IF_GETHEIGHT(61145365), ((IF_GETY(61145377) - IF_GETY(61145365)) - 2)), 2, 0, 61145365);
            IF_SETSIZE(16384, script3270(IF_GETHEIGHT(61145377), ((int2 - IF_GETY(61145377)) - 2)), 2, 0, 61145377);
            break;
        }
    };
    script3271();
    return;
}