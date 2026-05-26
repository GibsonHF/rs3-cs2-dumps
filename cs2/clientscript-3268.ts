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
            IF_SETPOSITION(int0, script3270(IF_GETY(61145202), int5), 0, 0, 61145202);
            if ((varclient_1198 == 1)) {
                IF_SETHIDE(0, 61145202);
                IF_SETOP(1, "Expand", 61145202);
                stack(2851);
                stack(61145213);
                IF_SETGRAPHIC();
            } else {
                IF_SETHIDE(1, 61145202);
                IF_SETOP(1, "", 61145202);
            };
            IF_SETPOSITION(int0, script3270(IF_GETY(61145214), int6), 0, 0, 61145214);
            if ((varclient_1199 == 1)) {
                IF_SETHIDE(0, 61145214);
                IF_SETOP(1, "Expand", 61145214);
                stack(2851);
                stack(61145225);
                IF_SETGRAPHIC();
            } else {
                IF_SETHIDE(1, 61145214);
                IF_SETHIDE(1, 61145212);
                IF_SETOP(1, "", 61145214);
            };
            IF_SETPOSITION(int0, script3270(IF_GETY(61145226), int7), 0, 0, 61145226);
            if ((varclient_1200 == 1)) {
                IF_SETHIDE(0, 61145226);
                IF_SETOP(1, "Expand", 61145226);
                stack(2851);
                stack(61145237);
                IF_SETGRAPHIC();
            } else {
                IF_SETHIDE(1, 61145226);
                IF_SETHIDE(1, 61145224);
                IF_SETOP(1, "", 61145226);
            };
            IF_SETPOSITION(int0, script3270(IF_GETY(61145238), int8), 0, 0, 61145238);
            if ((varclient_1201 == 1)) {
                IF_SETHIDE(0, 61145238);
                IF_SETOP(1, "Expand", 61145238);
                stack(2851);
                stack(61145249);
                IF_SETGRAPHIC();
            } else {
                IF_SETHIDE(1, 61145238);
                IF_SETHIDE(1, 61145236);
                IF_SETOP(1, "", 61145238);
            };
            IF_SETPOSITION(int0, script3270(IF_GETY(61145250), int9), 0, 0, 61145250);
            if ((varclient_1202 == 1)) {
                IF_SETHIDE(0, 61145250);
                IF_SETOP(1, "Expand", 61145250);
                stack(2851);
                stack(61145260);
                IF_SETGRAPHIC();
            } else {
                IF_SETHIDE(1, 61145250);
                IF_SETHIDE(1, 61145248);
                IF_SETOP(1, "", 61145250);
            };
            IF_SETSIZE(16384, script3270(IF_GETHEIGHT(61145202), ((IF_GETY(61145214) - IF_GETY(61145202)) - 5)), 2, 0, 61145202);
            IF_SETSIZE(16384, script3270(IF_GETHEIGHT(61145214), ((IF_GETY(61145226) - IF_GETY(61145214)) - 5)), 2, 0, 61145214);
            IF_SETSIZE(16384, script3270(IF_GETHEIGHT(61145226), ((IF_GETY(61145238) - IF_GETY(61145226)) - 5)), 2, 0, 61145226);
            IF_SETSIZE(16384, script3270(IF_GETHEIGHT(61145238), ((IF_GETY(61145250) - IF_GETY(61145238)) - 5)), 2, 0, 61145238);
            IF_SETSIZE(16384, script3270(IF_GETHEIGHT(61145250), ((int2 - IF_GETY(61145250)) - 5)), 2, 0, 61145250);
            break;
        }
        case 1: {
            IF_SETPOSITION(int0, script3270(IF_GETY(61145202), int5), 0, 0, 61145202);
            IF_SETOP(1, "Shrink", 61145202);
            stack(2852);
            stack(61145213);
            IF_SETGRAPHIC();
            IF_SETPOSITION(int0, script3270(IF_GETY(61145214), int6), 0, 0, 61145214);
            if ((varclient_1199 == 1)) {
                IF_SETHIDE(0, 61145214);
                IF_SETOP(1, "Expand", 61145214);
                stack(2851);
                stack(61145225);
                IF_SETGRAPHIC();
            } else {
                IF_SETHIDE(1, 61145214);
                IF_SETHIDE(1, 61145212);
                IF_SETOP(1, "", 61145214);
            };
            IF_SETPOSITION(int0, script3270(IF_GETY(61145226), int7), 0, 0, 61145226);
            if ((varclient_1200 == 1)) {
                IF_SETHIDE(0, 61145226);
                IF_SETOP(1, "Expand", 61145226);
                stack(2851);
                stack(61145237);
                IF_SETGRAPHIC();
            } else {
                IF_SETHIDE(1, 61145226);
                IF_SETHIDE(1, 61145224);
                IF_SETOP(1, "", 61145226);
            };
            IF_SETPOSITION(int0, script3270(IF_GETY(61145238), int8), 0, 0, 61145238);
            if ((varclient_1201 == 1)) {
                IF_SETHIDE(0, 61145238);
                IF_SETOP(1, "Expand", 61145238);
                stack(2851);
                stack(61145249);
                IF_SETGRAPHIC();
            } else {
                IF_SETHIDE(1, 61145238);
                IF_SETHIDE(1, 61145236);
                IF_SETOP(1, "", 61145238);
            };
            IF_SETPOSITION(int0, script3270(IF_GETY(61145250), int9), 0, 0, 61145250);
            if ((varclient_1202 == 1)) {
                IF_SETHIDE(0, 61145250);
                IF_SETOP(1, "Expand", 61145250);
                stack(2851);
                stack(61145260);
                IF_SETGRAPHIC();
            } else {
                IF_SETHIDE(1, 61145250);
                IF_SETHIDE(1, 61145248);
                IF_SETOP(1, "", 61145250);
            };
            IF_SETSIZE(16384, script3270(IF_GETHEIGHT(61145202), ((IF_GETY(61145214) - IF_GETY(61145202)) - 2)), 2, 0, 61145202);
            IF_SETSIZE(16384, script3270(IF_GETHEIGHT(61145214), ((IF_GETY(61145226) - IF_GETY(61145214)) - 2)), 2, 0, 61145214);
            IF_SETSIZE(16384, script3270(IF_GETHEIGHT(61145226), ((IF_GETY(61145238) - IF_GETY(61145226)) - 2)), 2, 0, 61145226);
            IF_SETSIZE(16384, script3270(IF_GETHEIGHT(61145238), ((IF_GETY(61145250) - IF_GETY(61145238)) - 2)), 2, 0, 61145238);
            IF_SETSIZE(16384, script3270(IF_GETHEIGHT(61145250), ((int2 - IF_GETY(61145250)) - 2)), 2, 0, 61145250);
            break;
        }
        case 2: {
            IF_SETPOSITION(int0, script3270(IF_GETY(61145202), int5), 0, 0, 61145202);
            if ((varclient_1198 == 1)) {
                IF_SETHIDE(0, 61145202);
                IF_SETOP(1, "Expand", 61145202);
                stack(2851);
                stack(61145213);
                IF_SETGRAPHIC();
            } else {
                IF_SETHIDE(1, 61145202);
                IF_SETOP(1, "", 61145202);
            };
            IF_SETPOSITION(int0, script3270(IF_GETY(61145214), int6), 0, 0, 61145214);
            IF_SETOP(1, "Shrink", 61145214);
            stack(2852);
            stack(61145225);
            IF_SETGRAPHIC();
            IF_SETPOSITION(int0, script3270(IF_GETY(61145226), int7), 0, 0, 61145226);
            if ((varclient_1200 == 1)) {
                IF_SETHIDE(0, 61145226);
                IF_SETOP(1, "Expand", 61145226);
                stack(2851);
                stack(61145237);
                IF_SETGRAPHIC();
            } else {
                IF_SETHIDE(1, 61145226);
                IF_SETHIDE(1, 61145224);
                IF_SETOP(1, "", 61145226);
            };
            IF_SETPOSITION(int0, script3270(IF_GETY(61145238), int8), 0, 0, 61145238);
            if ((varclient_1201 == 1)) {
                IF_SETHIDE(0, 61145238);
                IF_SETOP(1, "Expand", 61145238);
                stack(2851);
                stack(61145249);
                IF_SETGRAPHIC();
            } else {
                IF_SETHIDE(1, 61145238);
                IF_SETHIDE(1, 61145236);
                IF_SETOP(1, "", 61145238);
            };
            IF_SETPOSITION(int0, script3270(IF_GETY(61145250), int9), 0, 0, 61145250);
            if ((varclient_1202 == 1)) {
                IF_SETHIDE(0, 61145250);
                IF_SETOP(1, "Expand", 61145250);
                stack(2851);
                stack(61145260);
                IF_SETGRAPHIC();
            } else {
                IF_SETHIDE(1, 61145250);
                IF_SETHIDE(1, 61145248);
                IF_SETOP(1, "", 61145250);
            };
            IF_SETSIZE(16384, script3270(IF_GETHEIGHT(61145202), ((IF_GETY(61145214) - IF_GETY(61145202)) - 2)), 2, 0, 61145202);
            IF_SETSIZE(16384, script3270(IF_GETHEIGHT(61145214), ((IF_GETY(61145226) - IF_GETY(61145214)) - 2)), 2, 0, 61145214);
            IF_SETSIZE(16384, script3270(IF_GETHEIGHT(61145226), ((IF_GETY(61145238) - IF_GETY(61145226)) - 2)), 2, 0, 61145226);
            IF_SETSIZE(16384, script3270(IF_GETHEIGHT(61145238), ((IF_GETY(61145250) - IF_GETY(61145238)) - 2)), 2, 0, 61145238);
            IF_SETSIZE(16384, script3270(IF_GETHEIGHT(61145250), ((int2 - IF_GETY(61145250)) - 2)), 2, 0, 61145250);
            break;
        }
        case 3: {
            IF_SETPOSITION(int0, script3270(IF_GETY(61145202), int5), 0, 0, 61145202);
            if ((varclient_1198 == 1)) {
                IF_SETHIDE(0, 61145202);
                IF_SETOP(1, "Expand", 61145202);
                stack(2851);
                stack(61145213);
                IF_SETGRAPHIC();
            } else {
                IF_SETHIDE(1, 61145202);
                IF_SETOP(1, "", 61145202);
            };
            IF_SETPOSITION(int0, script3270(IF_GETY(61145214), int6), 0, 0, 61145214);
            if ((varclient_1199 == 1)) {
                IF_SETHIDE(0, 61145214);
                IF_SETOP(1, "Expand", 61145214);
                stack(2851);
                stack(61145225);
                IF_SETGRAPHIC();
            } else {
                IF_SETHIDE(1, 61145214);
                IF_SETHIDE(1, 61145212);
                IF_SETOP(1, "", 61145214);
            };
            IF_SETPOSITION(int0, script3270(IF_GETY(61145226), int7), 0, 0, 61145226);
            IF_SETOP(1, "Shrink", 61145226);
            stack(2852);
            stack(61145237);
            IF_SETGRAPHIC();
            IF_SETPOSITION(int0, script3270(IF_GETY(61145238), int8), 0, 0, 61145238);
            if ((varclient_1201 == 1)) {
                IF_SETHIDE(0, 61145238);
                IF_SETOP(1, "Expand", 61145238);
                stack(2851);
                stack(61145249);
                IF_SETGRAPHIC();
            } else {
                IF_SETHIDE(1, 61145238);
                IF_SETHIDE(1, 61145236);
                IF_SETOP(1, "", 61145238);
            };
            IF_SETPOSITION(int0, script3270(IF_GETY(61145250), int9), 0, 0, 61145250);
            if ((varclient_1202 == 1)) {
                IF_SETHIDE(0, 61145250);
                IF_SETOP(1, "Expand", 61145250);
                stack(2851);
                stack(61145260);
                IF_SETGRAPHIC();
            } else {
                IF_SETHIDE(1, 61145250);
                IF_SETHIDE(1, 61145248);
                IF_SETOP(1, "", 61145250);
            };
            IF_SETSIZE(16384, script3270(IF_GETHEIGHT(61145202), ((IF_GETY(61145214) - IF_GETY(61145202)) - 2)), 2, 0, 61145202);
            IF_SETSIZE(16384, script3270(IF_GETHEIGHT(61145214), ((IF_GETY(61145226) - IF_GETY(61145214)) - 2)), 2, 0, 61145214);
            IF_SETSIZE(16384, script3270(IF_GETHEIGHT(61145226), ((IF_GETY(61145238) - IF_GETY(61145226)) - 2)), 2, 0, 61145226);
            IF_SETSIZE(16384, script3270(IF_GETHEIGHT(61145238), ((IF_GETY(61145250) - IF_GETY(61145238)) - 2)), 2, 0, 61145238);
            IF_SETSIZE(16384, script3270(IF_GETHEIGHT(61145250), ((int2 - IF_GETY(61145250)) - 2)), 2, 0, 61145250);
            break;
        }
        case 4: {
            IF_SETPOSITION(int0, script3270(IF_GETY(61145202), int5), 0, 0, 61145202);
            if ((varclient_1198 == 1)) {
                IF_SETHIDE(0, 61145202);
                IF_SETOP(1, "Expand", 61145202);
                stack(2851);
                stack(61145213);
                IF_SETGRAPHIC();
            } else {
                IF_SETHIDE(1, 61145202);
                IF_SETOP(1, "", 61145202);
            };
            IF_SETPOSITION(int0, script3270(IF_GETY(61145214), int6), 0, 0, 61145214);
            if ((varclient_1199 == 1)) {
                IF_SETHIDE(0, 61145214);
                IF_SETOP(1, "Expand", 61145214);
                stack(2851);
                stack(61145225);
                IF_SETGRAPHIC();
            } else {
                IF_SETHIDE(1, 61145214);
                IF_SETHIDE(1, 61145212);
                IF_SETOP(1, "", 61145214);
            };
            IF_SETPOSITION(int0, script3270(IF_GETY(61145226), int7), 0, 0, 61145226);
            if ((varclient_1200 == 1)) {
                IF_SETHIDE(0, 61145226);
                IF_SETOP(1, "Expand", 61145226);
                stack(2851);
                stack(61145237);
                IF_SETGRAPHIC();
            } else {
                IF_SETHIDE(1, 61145226);
                IF_SETHIDE(1, 61145224);
                IF_SETOP(1, "", 61145226);
            };
            IF_SETPOSITION(int0, script3270(IF_GETY(61145238), int8), 0, 0, 61145238);
            IF_SETOP(1, "Shrink", 61145238);
            stack(2852);
            stack(61145249);
            IF_SETGRAPHIC();
            IF_SETPOSITION(int0, script3270(IF_GETY(61145250), int9), 0, 0, 61145250);
            if ((varclient_1202 == 1)) {
                IF_SETHIDE(0, 61145250);
                IF_SETOP(1, "Expand", 61145250);
                stack(2851);
                stack(61145260);
                IF_SETGRAPHIC();
            } else {
                IF_SETHIDE(1, 61145250);
                IF_SETHIDE(1, 61145248);
                IF_SETOP(1, "", 61145250);
            };
            IF_SETSIZE(16384, script3270(IF_GETHEIGHT(61145202), ((IF_GETY(61145214) - IF_GETY(61145202)) - 2)), 2, 0, 61145202);
            IF_SETSIZE(16384, script3270(IF_GETHEIGHT(61145214), ((IF_GETY(61145226) - IF_GETY(61145214)) - 2)), 2, 0, 61145214);
            IF_SETSIZE(16384, script3270(IF_GETHEIGHT(61145226), ((IF_GETY(61145238) - IF_GETY(61145226)) - 2)), 2, 0, 61145226);
            IF_SETSIZE(16384, script3270(IF_GETHEIGHT(61145238), ((IF_GETY(61145250) - IF_GETY(61145238)) - 2)), 2, 0, 61145238);
            IF_SETSIZE(16384, script3270(IF_GETHEIGHT(61145250), ((int2 - IF_GETY(61145250)) - 2)), 2, 0, 61145250);
            break;
        }
        case 5: {
            IF_SETPOSITION(int0, script3270(IF_GETY(61145202), int5), 0, 0, 61145202);
            if ((varclient_1198 == 1)) {
                IF_SETHIDE(0, 61145202);
                IF_SETOP(1, "Expand", 61145202);
                stack(2851);
                stack(61145213);
                IF_SETGRAPHIC();
            } else {
                IF_SETHIDE(1, 61145202);
                IF_SETOP(1, "", 61145202);
            };
            IF_SETPOSITION(int0, script3270(IF_GETY(61145214), int6), 0, 0, 61145214);
            if ((varclient_1199 == 1)) {
                IF_SETHIDE(0, 61145214);
                IF_SETOP(1, "Expand", 61145214);
                stack(2851);
                stack(61145225);
                IF_SETGRAPHIC();
            } else {
                IF_SETHIDE(1, 61145214);
                IF_SETHIDE(1, 61145212);
                IF_SETOP(1, "", 61145214);
            };
            IF_SETPOSITION(int0, script3270(IF_GETY(61145226), int7), 0, 0, 61145226);
            if ((varclient_1200 == 1)) {
                IF_SETHIDE(0, 61145226);
                IF_SETOP(1, "Expand", 61145226);
                stack(2851);
                stack(61145237);
                IF_SETGRAPHIC();
            } else {
                IF_SETHIDE(1, 61145226);
                IF_SETHIDE(1, 61145224);
                IF_SETOP(1, "", 61145226);
            };
            IF_SETPOSITION(int0, script3270(IF_GETY(61145238), int8), 0, 0, 61145238);
            if ((varclient_1201 == 1)) {
                IF_SETHIDE(0, 61145238);
                IF_SETOP(1, "Expand", 61145238);
                stack(2851);
                stack(61145249);
                IF_SETGRAPHIC();
            } else {
                IF_SETHIDE(1, 61145238);
                IF_SETHIDE(1, 61145236);
                IF_SETOP(1, "", 61145238);
            };
            IF_SETPOSITION(int0, script3270(IF_GETY(61145250), int9), 0, 0, 61145250);
            IF_SETOP(1, "Shrink", 61145250);
            stack(2852);
            stack(61145260);
            IF_SETGRAPHIC();
            IF_SETSIZE(16384, script3270(IF_GETHEIGHT(61145202), ((IF_GETY(61145214) - IF_GETY(61145202)) - 2)), 2, 0, 61145202);
            IF_SETSIZE(16384, script3270(IF_GETHEIGHT(61145214), ((IF_GETY(61145226) - IF_GETY(61145214)) - 2)), 2, 0, 61145214);
            IF_SETSIZE(16384, script3270(IF_GETHEIGHT(61145226), ((IF_GETY(61145238) - IF_GETY(61145226)) - 2)), 2, 0, 61145226);
            IF_SETSIZE(16384, script3270(IF_GETHEIGHT(61145238), ((IF_GETY(61145250) - IF_GETY(61145238)) - 2)), 2, 0, 61145238);
            IF_SETSIZE(16384, script3270(IF_GETHEIGHT(61145250), ((int2 - IF_GETY(61145250)) - 2)), 2, 0, 61145250);
            break;
        }
    };
    script3271();
    return;
}