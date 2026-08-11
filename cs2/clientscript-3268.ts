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
            IF_SETPOSITION(int0, script3270(IF_GETY(comp(933, 114)), int5), 0, 0, comp(933, 114));  // rand_dungeon_rewards_v2:player_1
            if ((varclient_1198 == 1)) {
                IF_SETHIDE(false, comp(933, 114));  // rand_dungeon_rewards_v2:player_1
                IF_SETOP(1, "Expand", comp(933, 114));  // rand_dungeon_rewards_v2:player_1
                IF_SETGRAPHIC(2851 as graphic, comp(933, 125));  // rand_dungeon_rewards_v2:player_1_button
            } else {
                IF_SETHIDE(true, comp(933, 114));  // rand_dungeon_rewards_v2:player_1
                IF_SETOP(1, "", comp(933, 114));  // rand_dungeon_rewards_v2:player_1
            };
            IF_SETPOSITION(int0, script3270(IF_GETY(comp(933, 126)), int6), 0, 0, comp(933, 126));  // rand_dungeon_rewards_v2:player_2
            if ((varclient_1199 == 1)) {
                IF_SETHIDE(false, comp(933, 126));  // rand_dungeon_rewards_v2:player_2
                IF_SETOP(1, "Expand", comp(933, 126));  // rand_dungeon_rewards_v2:player_2
                IF_SETGRAPHIC(2851 as graphic, comp(933, 137));  // rand_dungeon_rewards_v2:player_2_button
            } else {
                IF_SETHIDE(true, comp(933, 126));  // rand_dungeon_rewards_v2:player_2
                IF_SETHIDE(true, comp(933, 124));  // rand_dungeon_rewards_v2:player_1_divider
                IF_SETOP(1, "", comp(933, 126));  // rand_dungeon_rewards_v2:player_2
            };
            IF_SETPOSITION(int0, script3270(IF_GETY(comp(933, 138)), int7), 0, 0, comp(933, 138));  // rand_dungeon_rewards_v2:player_3
            if ((varclient_1200 == 1)) {
                IF_SETHIDE(false, comp(933, 138));  // rand_dungeon_rewards_v2:player_3
                IF_SETOP(1, "Expand", comp(933, 138));  // rand_dungeon_rewards_v2:player_3
                IF_SETGRAPHIC(2851 as graphic, comp(933, 149));  // rand_dungeon_rewards_v2:player_3_button
            } else {
                IF_SETHIDE(true, comp(933, 138));  // rand_dungeon_rewards_v2:player_3
                IF_SETHIDE(true, comp(933, 136));  // rand_dungeon_rewards_v2:player_2_divider
                IF_SETOP(1, "", comp(933, 138));  // rand_dungeon_rewards_v2:player_3
            };
            IF_SETPOSITION(int0, script3270(IF_GETY(comp(933, 150)), int8), 0, 0, comp(933, 150));  // rand_dungeon_rewards_v2:player_4
            if ((varclient_1201 == 1)) {
                IF_SETHIDE(false, comp(933, 150));  // rand_dungeon_rewards_v2:player_4
                IF_SETOP(1, "Expand", comp(933, 150));  // rand_dungeon_rewards_v2:player_4
                IF_SETGRAPHIC(2851 as graphic, comp(933, 161));  // rand_dungeon_rewards_v2:player_4_button
            } else {
                IF_SETHIDE(true, comp(933, 150));  // rand_dungeon_rewards_v2:player_4
                IF_SETHIDE(true, comp(933, 148));  // rand_dungeon_rewards_v2:player_3_divider
                IF_SETOP(1, "", comp(933, 150));  // rand_dungeon_rewards_v2:player_4
            };
            IF_SETPOSITION(int0, script3270(IF_GETY(comp(933, 162)), int9), 0, 0, comp(933, 162));  // rand_dungeon_rewards_v2:player_5
            if ((varclient_1202 == 1)) {
                IF_SETHIDE(false, comp(933, 162));  // rand_dungeon_rewards_v2:player_5
                IF_SETOP(1, "Expand", comp(933, 162));  // rand_dungeon_rewards_v2:player_5
                IF_SETGRAPHIC(2851 as graphic, comp(933, 172));  // rand_dungeon_rewards_v2:player_5_button
            } else {
                IF_SETHIDE(true, comp(933, 162));  // rand_dungeon_rewards_v2:player_5
                IF_SETHIDE(true, comp(933, 160));  // rand_dungeon_rewards_v2:player_4_divider
                IF_SETOP(1, "", comp(933, 162));  // rand_dungeon_rewards_v2:player_5
            };
            IF_SETSIZE(16384, script3270(IF_GETHEIGHT(comp(933, 114) /*rand_dungeon_rewards_v2:player_1*/), ((IF_GETY(comp(933, 126) /*rand_dungeon_rewards_v2:player_2*/) - IF_GETY(comp(933, 114) /*rand_dungeon_rewards_v2:player_1*/)) - 5)), 2, 0, comp(933, 114) /*rand_dungeon_rewards_v2:player_1*/);
            IF_SETSIZE(16384, script3270(IF_GETHEIGHT(comp(933, 126) /*rand_dungeon_rewards_v2:player_2*/), ((IF_GETY(comp(933, 138) /*rand_dungeon_rewards_v2:player_3*/) - IF_GETY(comp(933, 126) /*rand_dungeon_rewards_v2:player_2*/)) - 5)), 2, 0, comp(933, 126) /*rand_dungeon_rewards_v2:player_2*/);
            IF_SETSIZE(16384, script3270(IF_GETHEIGHT(comp(933, 138) /*rand_dungeon_rewards_v2:player_3*/), ((IF_GETY(comp(933, 150) /*rand_dungeon_rewards_v2:player_4*/) - IF_GETY(comp(933, 138) /*rand_dungeon_rewards_v2:player_3*/)) - 5)), 2, 0, comp(933, 138) /*rand_dungeon_rewards_v2:player_3*/);
            IF_SETSIZE(16384, script3270(IF_GETHEIGHT(comp(933, 150) /*rand_dungeon_rewards_v2:player_4*/), ((IF_GETY(comp(933, 162) /*rand_dungeon_rewards_v2:player_5*/) - IF_GETY(comp(933, 150) /*rand_dungeon_rewards_v2:player_4*/)) - 5)), 2, 0, comp(933, 150) /*rand_dungeon_rewards_v2:player_4*/);
            IF_SETSIZE(16384, script3270(IF_GETHEIGHT(comp(933, 162)), ((int2 - IF_GETY(comp(933, 162))) - 5)), 2, 0, comp(933, 162));  // rand_dungeon_rewards_v2:player_5
            break;
        }
        case 1: {
            IF_SETPOSITION(int0, script3270(IF_GETY(comp(933, 114)), int5), 0, 0, comp(933, 114));  // rand_dungeon_rewards_v2:player_1
            IF_SETOP(1, "Shrink", comp(933, 114));  // rand_dungeon_rewards_v2:player_1
            IF_SETGRAPHIC(2852 as graphic, comp(933, 125));  // rand_dungeon_rewards_v2:player_1_button
            IF_SETPOSITION(int0, script3270(IF_GETY(comp(933, 126)), int6), 0, 0, comp(933, 126));  // rand_dungeon_rewards_v2:player_2
            if ((varclient_1199 == 1)) {
                IF_SETHIDE(false, comp(933, 126));  // rand_dungeon_rewards_v2:player_2
                IF_SETOP(1, "Expand", comp(933, 126));  // rand_dungeon_rewards_v2:player_2
                IF_SETGRAPHIC(2851 as graphic, comp(933, 137));  // rand_dungeon_rewards_v2:player_2_button
            } else {
                IF_SETHIDE(true, comp(933, 126));  // rand_dungeon_rewards_v2:player_2
                IF_SETHIDE(true, comp(933, 124));  // rand_dungeon_rewards_v2:player_1_divider
                IF_SETOP(1, "", comp(933, 126));  // rand_dungeon_rewards_v2:player_2
            };
            IF_SETPOSITION(int0, script3270(IF_GETY(comp(933, 138)), int7), 0, 0, comp(933, 138));  // rand_dungeon_rewards_v2:player_3
            if ((varclient_1200 == 1)) {
                IF_SETHIDE(false, comp(933, 138));  // rand_dungeon_rewards_v2:player_3
                IF_SETOP(1, "Expand", comp(933, 138));  // rand_dungeon_rewards_v2:player_3
                IF_SETGRAPHIC(2851 as graphic, comp(933, 149));  // rand_dungeon_rewards_v2:player_3_button
            } else {
                IF_SETHIDE(true, comp(933, 138));  // rand_dungeon_rewards_v2:player_3
                IF_SETHIDE(true, comp(933, 136));  // rand_dungeon_rewards_v2:player_2_divider
                IF_SETOP(1, "", comp(933, 138));  // rand_dungeon_rewards_v2:player_3
            };
            IF_SETPOSITION(int0, script3270(IF_GETY(comp(933, 150)), int8), 0, 0, comp(933, 150));  // rand_dungeon_rewards_v2:player_4
            if ((varclient_1201 == 1)) {
                IF_SETHIDE(false, comp(933, 150));  // rand_dungeon_rewards_v2:player_4
                IF_SETOP(1, "Expand", comp(933, 150));  // rand_dungeon_rewards_v2:player_4
                IF_SETGRAPHIC(2851 as graphic, comp(933, 161));  // rand_dungeon_rewards_v2:player_4_button
            } else {
                IF_SETHIDE(true, comp(933, 150));  // rand_dungeon_rewards_v2:player_4
                IF_SETHIDE(true, comp(933, 148));  // rand_dungeon_rewards_v2:player_3_divider
                IF_SETOP(1, "", comp(933, 150));  // rand_dungeon_rewards_v2:player_4
            };
            IF_SETPOSITION(int0, script3270(IF_GETY(comp(933, 162)), int9), 0, 0, comp(933, 162));  // rand_dungeon_rewards_v2:player_5
            if ((varclient_1202 == 1)) {
                IF_SETHIDE(false, comp(933, 162));  // rand_dungeon_rewards_v2:player_5
                IF_SETOP(1, "Expand", comp(933, 162));  // rand_dungeon_rewards_v2:player_5
                IF_SETGRAPHIC(2851 as graphic, comp(933, 172));  // rand_dungeon_rewards_v2:player_5_button
            } else {
                IF_SETHIDE(true, comp(933, 162));  // rand_dungeon_rewards_v2:player_5
                IF_SETHIDE(true, comp(933, 160));  // rand_dungeon_rewards_v2:player_4_divider
                IF_SETOP(1, "", comp(933, 162));  // rand_dungeon_rewards_v2:player_5
            };
            IF_SETSIZE(16384, script3270(IF_GETHEIGHT(comp(933, 114) /*rand_dungeon_rewards_v2:player_1*/), ((IF_GETY(comp(933, 126) /*rand_dungeon_rewards_v2:player_2*/) - IF_GETY(comp(933, 114) /*rand_dungeon_rewards_v2:player_1*/)) - 2)), 2, 0, comp(933, 114) /*rand_dungeon_rewards_v2:player_1*/);
            IF_SETSIZE(16384, script3270(IF_GETHEIGHT(comp(933, 126) /*rand_dungeon_rewards_v2:player_2*/), ((IF_GETY(comp(933, 138) /*rand_dungeon_rewards_v2:player_3*/) - IF_GETY(comp(933, 126) /*rand_dungeon_rewards_v2:player_2*/)) - 2)), 2, 0, comp(933, 126) /*rand_dungeon_rewards_v2:player_2*/);
            IF_SETSIZE(16384, script3270(IF_GETHEIGHT(comp(933, 138) /*rand_dungeon_rewards_v2:player_3*/), ((IF_GETY(comp(933, 150) /*rand_dungeon_rewards_v2:player_4*/) - IF_GETY(comp(933, 138) /*rand_dungeon_rewards_v2:player_3*/)) - 2)), 2, 0, comp(933, 138) /*rand_dungeon_rewards_v2:player_3*/);
            IF_SETSIZE(16384, script3270(IF_GETHEIGHT(comp(933, 150) /*rand_dungeon_rewards_v2:player_4*/), ((IF_GETY(comp(933, 162) /*rand_dungeon_rewards_v2:player_5*/) - IF_GETY(comp(933, 150) /*rand_dungeon_rewards_v2:player_4*/)) - 2)), 2, 0, comp(933, 150) /*rand_dungeon_rewards_v2:player_4*/);
            IF_SETSIZE(16384, script3270(IF_GETHEIGHT(comp(933, 162)), ((int2 - IF_GETY(comp(933, 162))) - 2)), 2, 0, comp(933, 162));  // rand_dungeon_rewards_v2:player_5
            break;
        }
        case 2: {
            IF_SETPOSITION(int0, script3270(IF_GETY(comp(933, 114)), int5), 0, 0, comp(933, 114));  // rand_dungeon_rewards_v2:player_1
            if ((varclient_1198 == 1)) {
                IF_SETHIDE(false, comp(933, 114));  // rand_dungeon_rewards_v2:player_1
                IF_SETOP(1, "Expand", comp(933, 114));  // rand_dungeon_rewards_v2:player_1
                IF_SETGRAPHIC(2851 as graphic, comp(933, 125));  // rand_dungeon_rewards_v2:player_1_button
            } else {
                IF_SETHIDE(true, comp(933, 114));  // rand_dungeon_rewards_v2:player_1
                IF_SETOP(1, "", comp(933, 114));  // rand_dungeon_rewards_v2:player_1
            };
            IF_SETPOSITION(int0, script3270(IF_GETY(comp(933, 126)), int6), 0, 0, comp(933, 126));  // rand_dungeon_rewards_v2:player_2
            IF_SETOP(1, "Shrink", comp(933, 126));  // rand_dungeon_rewards_v2:player_2
            IF_SETGRAPHIC(2852 as graphic, comp(933, 137));  // rand_dungeon_rewards_v2:player_2_button
            IF_SETPOSITION(int0, script3270(IF_GETY(comp(933, 138)), int7), 0, 0, comp(933, 138));  // rand_dungeon_rewards_v2:player_3
            if ((varclient_1200 == 1)) {
                IF_SETHIDE(false, comp(933, 138));  // rand_dungeon_rewards_v2:player_3
                IF_SETOP(1, "Expand", comp(933, 138));  // rand_dungeon_rewards_v2:player_3
                IF_SETGRAPHIC(2851 as graphic, comp(933, 149));  // rand_dungeon_rewards_v2:player_3_button
            } else {
                IF_SETHIDE(true, comp(933, 138));  // rand_dungeon_rewards_v2:player_3
                IF_SETHIDE(true, comp(933, 136));  // rand_dungeon_rewards_v2:player_2_divider
                IF_SETOP(1, "", comp(933, 138));  // rand_dungeon_rewards_v2:player_3
            };
            IF_SETPOSITION(int0, script3270(IF_GETY(comp(933, 150)), int8), 0, 0, comp(933, 150));  // rand_dungeon_rewards_v2:player_4
            if ((varclient_1201 == 1)) {
                IF_SETHIDE(false, comp(933, 150));  // rand_dungeon_rewards_v2:player_4
                IF_SETOP(1, "Expand", comp(933, 150));  // rand_dungeon_rewards_v2:player_4
                IF_SETGRAPHIC(2851 as graphic, comp(933, 161));  // rand_dungeon_rewards_v2:player_4_button
            } else {
                IF_SETHIDE(true, comp(933, 150));  // rand_dungeon_rewards_v2:player_4
                IF_SETHIDE(true, comp(933, 148));  // rand_dungeon_rewards_v2:player_3_divider
                IF_SETOP(1, "", comp(933, 150));  // rand_dungeon_rewards_v2:player_4
            };
            IF_SETPOSITION(int0, script3270(IF_GETY(comp(933, 162)), int9), 0, 0, comp(933, 162));  // rand_dungeon_rewards_v2:player_5
            if ((varclient_1202 == 1)) {
                IF_SETHIDE(false, comp(933, 162));  // rand_dungeon_rewards_v2:player_5
                IF_SETOP(1, "Expand", comp(933, 162));  // rand_dungeon_rewards_v2:player_5
                IF_SETGRAPHIC(2851 as graphic, comp(933, 172));  // rand_dungeon_rewards_v2:player_5_button
            } else {
                IF_SETHIDE(true, comp(933, 162));  // rand_dungeon_rewards_v2:player_5
                IF_SETHIDE(true, comp(933, 160));  // rand_dungeon_rewards_v2:player_4_divider
                IF_SETOP(1, "", comp(933, 162));  // rand_dungeon_rewards_v2:player_5
            };
            IF_SETSIZE(16384, script3270(IF_GETHEIGHT(comp(933, 114) /*rand_dungeon_rewards_v2:player_1*/), ((IF_GETY(comp(933, 126) /*rand_dungeon_rewards_v2:player_2*/) - IF_GETY(comp(933, 114) /*rand_dungeon_rewards_v2:player_1*/)) - 2)), 2, 0, comp(933, 114) /*rand_dungeon_rewards_v2:player_1*/);
            IF_SETSIZE(16384, script3270(IF_GETHEIGHT(comp(933, 126) /*rand_dungeon_rewards_v2:player_2*/), ((IF_GETY(comp(933, 138) /*rand_dungeon_rewards_v2:player_3*/) - IF_GETY(comp(933, 126) /*rand_dungeon_rewards_v2:player_2*/)) - 2)), 2, 0, comp(933, 126) /*rand_dungeon_rewards_v2:player_2*/);
            IF_SETSIZE(16384, script3270(IF_GETHEIGHT(comp(933, 138) /*rand_dungeon_rewards_v2:player_3*/), ((IF_GETY(comp(933, 150) /*rand_dungeon_rewards_v2:player_4*/) - IF_GETY(comp(933, 138) /*rand_dungeon_rewards_v2:player_3*/)) - 2)), 2, 0, comp(933, 138) /*rand_dungeon_rewards_v2:player_3*/);
            IF_SETSIZE(16384, script3270(IF_GETHEIGHT(comp(933, 150) /*rand_dungeon_rewards_v2:player_4*/), ((IF_GETY(comp(933, 162) /*rand_dungeon_rewards_v2:player_5*/) - IF_GETY(comp(933, 150) /*rand_dungeon_rewards_v2:player_4*/)) - 2)), 2, 0, comp(933, 150) /*rand_dungeon_rewards_v2:player_4*/);
            IF_SETSIZE(16384, script3270(IF_GETHEIGHT(comp(933, 162)), ((int2 - IF_GETY(comp(933, 162))) - 2)), 2, 0, comp(933, 162));  // rand_dungeon_rewards_v2:player_5
            break;
        }
        case 3: {
            IF_SETPOSITION(int0, script3270(IF_GETY(comp(933, 114)), int5), 0, 0, comp(933, 114));  // rand_dungeon_rewards_v2:player_1
            if ((varclient_1198 == 1)) {
                IF_SETHIDE(false, comp(933, 114));  // rand_dungeon_rewards_v2:player_1
                IF_SETOP(1, "Expand", comp(933, 114));  // rand_dungeon_rewards_v2:player_1
                IF_SETGRAPHIC(2851 as graphic, comp(933, 125));  // rand_dungeon_rewards_v2:player_1_button
            } else {
                IF_SETHIDE(true, comp(933, 114));  // rand_dungeon_rewards_v2:player_1
                IF_SETOP(1, "", comp(933, 114));  // rand_dungeon_rewards_v2:player_1
            };
            IF_SETPOSITION(int0, script3270(IF_GETY(comp(933, 126)), int6), 0, 0, comp(933, 126));  // rand_dungeon_rewards_v2:player_2
            if ((varclient_1199 == 1)) {
                IF_SETHIDE(false, comp(933, 126));  // rand_dungeon_rewards_v2:player_2
                IF_SETOP(1, "Expand", comp(933, 126));  // rand_dungeon_rewards_v2:player_2
                IF_SETGRAPHIC(2851 as graphic, comp(933, 137));  // rand_dungeon_rewards_v2:player_2_button
            } else {
                IF_SETHIDE(true, comp(933, 126));  // rand_dungeon_rewards_v2:player_2
                IF_SETHIDE(true, comp(933, 124));  // rand_dungeon_rewards_v2:player_1_divider
                IF_SETOP(1, "", comp(933, 126));  // rand_dungeon_rewards_v2:player_2
            };
            IF_SETPOSITION(int0, script3270(IF_GETY(comp(933, 138)), int7), 0, 0, comp(933, 138));  // rand_dungeon_rewards_v2:player_3
            IF_SETOP(1, "Shrink", comp(933, 138));  // rand_dungeon_rewards_v2:player_3
            IF_SETGRAPHIC(2852 as graphic, comp(933, 149));  // rand_dungeon_rewards_v2:player_3_button
            IF_SETPOSITION(int0, script3270(IF_GETY(comp(933, 150)), int8), 0, 0, comp(933, 150));  // rand_dungeon_rewards_v2:player_4
            if ((varclient_1201 == 1)) {
                IF_SETHIDE(false, comp(933, 150));  // rand_dungeon_rewards_v2:player_4
                IF_SETOP(1, "Expand", comp(933, 150));  // rand_dungeon_rewards_v2:player_4
                IF_SETGRAPHIC(2851 as graphic, comp(933, 161));  // rand_dungeon_rewards_v2:player_4_button
            } else {
                IF_SETHIDE(true, comp(933, 150));  // rand_dungeon_rewards_v2:player_4
                IF_SETHIDE(true, comp(933, 148));  // rand_dungeon_rewards_v2:player_3_divider
                IF_SETOP(1, "", comp(933, 150));  // rand_dungeon_rewards_v2:player_4
            };
            IF_SETPOSITION(int0, script3270(IF_GETY(comp(933, 162)), int9), 0, 0, comp(933, 162));  // rand_dungeon_rewards_v2:player_5
            if ((varclient_1202 == 1)) {
                IF_SETHIDE(false, comp(933, 162));  // rand_dungeon_rewards_v2:player_5
                IF_SETOP(1, "Expand", comp(933, 162));  // rand_dungeon_rewards_v2:player_5
                IF_SETGRAPHIC(2851 as graphic, comp(933, 172));  // rand_dungeon_rewards_v2:player_5_button
            } else {
                IF_SETHIDE(true, comp(933, 162));  // rand_dungeon_rewards_v2:player_5
                IF_SETHIDE(true, comp(933, 160));  // rand_dungeon_rewards_v2:player_4_divider
                IF_SETOP(1, "", comp(933, 162));  // rand_dungeon_rewards_v2:player_5
            };
            IF_SETSIZE(16384, script3270(IF_GETHEIGHT(comp(933, 114) /*rand_dungeon_rewards_v2:player_1*/), ((IF_GETY(comp(933, 126) /*rand_dungeon_rewards_v2:player_2*/) - IF_GETY(comp(933, 114) /*rand_dungeon_rewards_v2:player_1*/)) - 2)), 2, 0, comp(933, 114) /*rand_dungeon_rewards_v2:player_1*/);
            IF_SETSIZE(16384, script3270(IF_GETHEIGHT(comp(933, 126) /*rand_dungeon_rewards_v2:player_2*/), ((IF_GETY(comp(933, 138) /*rand_dungeon_rewards_v2:player_3*/) - IF_GETY(comp(933, 126) /*rand_dungeon_rewards_v2:player_2*/)) - 2)), 2, 0, comp(933, 126) /*rand_dungeon_rewards_v2:player_2*/);
            IF_SETSIZE(16384, script3270(IF_GETHEIGHT(comp(933, 138) /*rand_dungeon_rewards_v2:player_3*/), ((IF_GETY(comp(933, 150) /*rand_dungeon_rewards_v2:player_4*/) - IF_GETY(comp(933, 138) /*rand_dungeon_rewards_v2:player_3*/)) - 2)), 2, 0, comp(933, 138) /*rand_dungeon_rewards_v2:player_3*/);
            IF_SETSIZE(16384, script3270(IF_GETHEIGHT(comp(933, 150) /*rand_dungeon_rewards_v2:player_4*/), ((IF_GETY(comp(933, 162) /*rand_dungeon_rewards_v2:player_5*/) - IF_GETY(comp(933, 150) /*rand_dungeon_rewards_v2:player_4*/)) - 2)), 2, 0, comp(933, 150) /*rand_dungeon_rewards_v2:player_4*/);
            IF_SETSIZE(16384, script3270(IF_GETHEIGHT(comp(933, 162)), ((int2 - IF_GETY(comp(933, 162))) - 2)), 2, 0, comp(933, 162));  // rand_dungeon_rewards_v2:player_5
            break;
        }
        case 4: {
            IF_SETPOSITION(int0, script3270(IF_GETY(comp(933, 114)), int5), 0, 0, comp(933, 114));  // rand_dungeon_rewards_v2:player_1
            if ((varclient_1198 == 1)) {
                IF_SETHIDE(false, comp(933, 114));  // rand_dungeon_rewards_v2:player_1
                IF_SETOP(1, "Expand", comp(933, 114));  // rand_dungeon_rewards_v2:player_1
                IF_SETGRAPHIC(2851 as graphic, comp(933, 125));  // rand_dungeon_rewards_v2:player_1_button
            } else {
                IF_SETHIDE(true, comp(933, 114));  // rand_dungeon_rewards_v2:player_1
                IF_SETOP(1, "", comp(933, 114));  // rand_dungeon_rewards_v2:player_1
            };
            IF_SETPOSITION(int0, script3270(IF_GETY(comp(933, 126)), int6), 0, 0, comp(933, 126));  // rand_dungeon_rewards_v2:player_2
            if ((varclient_1199 == 1)) {
                IF_SETHIDE(false, comp(933, 126));  // rand_dungeon_rewards_v2:player_2
                IF_SETOP(1, "Expand", comp(933, 126));  // rand_dungeon_rewards_v2:player_2
                IF_SETGRAPHIC(2851 as graphic, comp(933, 137));  // rand_dungeon_rewards_v2:player_2_button
            } else {
                IF_SETHIDE(true, comp(933, 126));  // rand_dungeon_rewards_v2:player_2
                IF_SETHIDE(true, comp(933, 124));  // rand_dungeon_rewards_v2:player_1_divider
                IF_SETOP(1, "", comp(933, 126));  // rand_dungeon_rewards_v2:player_2
            };
            IF_SETPOSITION(int0, script3270(IF_GETY(comp(933, 138)), int7), 0, 0, comp(933, 138));  // rand_dungeon_rewards_v2:player_3
            if ((varclient_1200 == 1)) {
                IF_SETHIDE(false, comp(933, 138));  // rand_dungeon_rewards_v2:player_3
                IF_SETOP(1, "Expand", comp(933, 138));  // rand_dungeon_rewards_v2:player_3
                IF_SETGRAPHIC(2851 as graphic, comp(933, 149));  // rand_dungeon_rewards_v2:player_3_button
            } else {
                IF_SETHIDE(true, comp(933, 138));  // rand_dungeon_rewards_v2:player_3
                IF_SETHIDE(true, comp(933, 136));  // rand_dungeon_rewards_v2:player_2_divider
                IF_SETOP(1, "", comp(933, 138));  // rand_dungeon_rewards_v2:player_3
            };
            IF_SETPOSITION(int0, script3270(IF_GETY(comp(933, 150)), int8), 0, 0, comp(933, 150));  // rand_dungeon_rewards_v2:player_4
            IF_SETOP(1, "Shrink", comp(933, 150));  // rand_dungeon_rewards_v2:player_4
            IF_SETGRAPHIC(2852 as graphic, comp(933, 161));  // rand_dungeon_rewards_v2:player_4_button
            IF_SETPOSITION(int0, script3270(IF_GETY(comp(933, 162)), int9), 0, 0, comp(933, 162));  // rand_dungeon_rewards_v2:player_5
            if ((varclient_1202 == 1)) {
                IF_SETHIDE(false, comp(933, 162));  // rand_dungeon_rewards_v2:player_5
                IF_SETOP(1, "Expand", comp(933, 162));  // rand_dungeon_rewards_v2:player_5
                IF_SETGRAPHIC(2851 as graphic, comp(933, 172));  // rand_dungeon_rewards_v2:player_5_button
            } else {
                IF_SETHIDE(true, comp(933, 162));  // rand_dungeon_rewards_v2:player_5
                IF_SETHIDE(true, comp(933, 160));  // rand_dungeon_rewards_v2:player_4_divider
                IF_SETOP(1, "", comp(933, 162));  // rand_dungeon_rewards_v2:player_5
            };
            IF_SETSIZE(16384, script3270(IF_GETHEIGHT(comp(933, 114) /*rand_dungeon_rewards_v2:player_1*/), ((IF_GETY(comp(933, 126) /*rand_dungeon_rewards_v2:player_2*/) - IF_GETY(comp(933, 114) /*rand_dungeon_rewards_v2:player_1*/)) - 2)), 2, 0, comp(933, 114) /*rand_dungeon_rewards_v2:player_1*/);
            IF_SETSIZE(16384, script3270(IF_GETHEIGHT(comp(933, 126) /*rand_dungeon_rewards_v2:player_2*/), ((IF_GETY(comp(933, 138) /*rand_dungeon_rewards_v2:player_3*/) - IF_GETY(comp(933, 126) /*rand_dungeon_rewards_v2:player_2*/)) - 2)), 2, 0, comp(933, 126) /*rand_dungeon_rewards_v2:player_2*/);
            IF_SETSIZE(16384, script3270(IF_GETHEIGHT(comp(933, 138) /*rand_dungeon_rewards_v2:player_3*/), ((IF_GETY(comp(933, 150) /*rand_dungeon_rewards_v2:player_4*/) - IF_GETY(comp(933, 138) /*rand_dungeon_rewards_v2:player_3*/)) - 2)), 2, 0, comp(933, 138) /*rand_dungeon_rewards_v2:player_3*/);
            IF_SETSIZE(16384, script3270(IF_GETHEIGHT(comp(933, 150) /*rand_dungeon_rewards_v2:player_4*/), ((IF_GETY(comp(933, 162) /*rand_dungeon_rewards_v2:player_5*/) - IF_GETY(comp(933, 150) /*rand_dungeon_rewards_v2:player_4*/)) - 2)), 2, 0, comp(933, 150) /*rand_dungeon_rewards_v2:player_4*/);
            IF_SETSIZE(16384, script3270(IF_GETHEIGHT(comp(933, 162)), ((int2 - IF_GETY(comp(933, 162))) - 2)), 2, 0, comp(933, 162));  // rand_dungeon_rewards_v2:player_5
            break;
        }
        case 5: {
            IF_SETPOSITION(int0, script3270(IF_GETY(comp(933, 114)), int5), 0, 0, comp(933, 114));  // rand_dungeon_rewards_v2:player_1
            if ((varclient_1198 == 1)) {
                IF_SETHIDE(false, comp(933, 114));  // rand_dungeon_rewards_v2:player_1
                IF_SETOP(1, "Expand", comp(933, 114));  // rand_dungeon_rewards_v2:player_1
                IF_SETGRAPHIC(2851 as graphic, comp(933, 125));  // rand_dungeon_rewards_v2:player_1_button
            } else {
                IF_SETHIDE(true, comp(933, 114));  // rand_dungeon_rewards_v2:player_1
                IF_SETOP(1, "", comp(933, 114));  // rand_dungeon_rewards_v2:player_1
            };
            IF_SETPOSITION(int0, script3270(IF_GETY(comp(933, 126)), int6), 0, 0, comp(933, 126));  // rand_dungeon_rewards_v2:player_2
            if ((varclient_1199 == 1)) {
                IF_SETHIDE(false, comp(933, 126));  // rand_dungeon_rewards_v2:player_2
                IF_SETOP(1, "Expand", comp(933, 126));  // rand_dungeon_rewards_v2:player_2
                IF_SETGRAPHIC(2851 as graphic, comp(933, 137));  // rand_dungeon_rewards_v2:player_2_button
            } else {
                IF_SETHIDE(true, comp(933, 126));  // rand_dungeon_rewards_v2:player_2
                IF_SETHIDE(true, comp(933, 124));  // rand_dungeon_rewards_v2:player_1_divider
                IF_SETOP(1, "", comp(933, 126));  // rand_dungeon_rewards_v2:player_2
            };
            IF_SETPOSITION(int0, script3270(IF_GETY(comp(933, 138)), int7), 0, 0, comp(933, 138));  // rand_dungeon_rewards_v2:player_3
            if ((varclient_1200 == 1)) {
                IF_SETHIDE(false, comp(933, 138));  // rand_dungeon_rewards_v2:player_3
                IF_SETOP(1, "Expand", comp(933, 138));  // rand_dungeon_rewards_v2:player_3
                IF_SETGRAPHIC(2851 as graphic, comp(933, 149));  // rand_dungeon_rewards_v2:player_3_button
            } else {
                IF_SETHIDE(true, comp(933, 138));  // rand_dungeon_rewards_v2:player_3
                IF_SETHIDE(true, comp(933, 136));  // rand_dungeon_rewards_v2:player_2_divider
                IF_SETOP(1, "", comp(933, 138));  // rand_dungeon_rewards_v2:player_3
            };
            IF_SETPOSITION(int0, script3270(IF_GETY(comp(933, 150)), int8), 0, 0, comp(933, 150));  // rand_dungeon_rewards_v2:player_4
            if ((varclient_1201 == 1)) {
                IF_SETHIDE(false, comp(933, 150));  // rand_dungeon_rewards_v2:player_4
                IF_SETOP(1, "Expand", comp(933, 150));  // rand_dungeon_rewards_v2:player_4
                IF_SETGRAPHIC(2851 as graphic, comp(933, 161));  // rand_dungeon_rewards_v2:player_4_button
            } else {
                IF_SETHIDE(true, comp(933, 150));  // rand_dungeon_rewards_v2:player_4
                IF_SETHIDE(true, comp(933, 148));  // rand_dungeon_rewards_v2:player_3_divider
                IF_SETOP(1, "", comp(933, 150));  // rand_dungeon_rewards_v2:player_4
            };
            IF_SETPOSITION(int0, script3270(IF_GETY(comp(933, 162)), int9), 0, 0, comp(933, 162));  // rand_dungeon_rewards_v2:player_5
            IF_SETOP(1, "Shrink", comp(933, 162));  // rand_dungeon_rewards_v2:player_5
            IF_SETGRAPHIC(2852 as graphic, comp(933, 172));  // rand_dungeon_rewards_v2:player_5_button
            IF_SETSIZE(16384, script3270(IF_GETHEIGHT(comp(933, 114) /*rand_dungeon_rewards_v2:player_1*/), ((IF_GETY(comp(933, 126) /*rand_dungeon_rewards_v2:player_2*/) - IF_GETY(comp(933, 114) /*rand_dungeon_rewards_v2:player_1*/)) - 2)), 2, 0, comp(933, 114) /*rand_dungeon_rewards_v2:player_1*/);
            IF_SETSIZE(16384, script3270(IF_GETHEIGHT(comp(933, 126) /*rand_dungeon_rewards_v2:player_2*/), ((IF_GETY(comp(933, 138) /*rand_dungeon_rewards_v2:player_3*/) - IF_GETY(comp(933, 126) /*rand_dungeon_rewards_v2:player_2*/)) - 2)), 2, 0, comp(933, 126) /*rand_dungeon_rewards_v2:player_2*/);
            IF_SETSIZE(16384, script3270(IF_GETHEIGHT(comp(933, 138) /*rand_dungeon_rewards_v2:player_3*/), ((IF_GETY(comp(933, 150) /*rand_dungeon_rewards_v2:player_4*/) - IF_GETY(comp(933, 138) /*rand_dungeon_rewards_v2:player_3*/)) - 2)), 2, 0, comp(933, 138) /*rand_dungeon_rewards_v2:player_3*/);
            IF_SETSIZE(16384, script3270(IF_GETHEIGHT(comp(933, 150) /*rand_dungeon_rewards_v2:player_4*/), ((IF_GETY(comp(933, 162) /*rand_dungeon_rewards_v2:player_5*/) - IF_GETY(comp(933, 150) /*rand_dungeon_rewards_v2:player_4*/)) - 2)), 2, 0, comp(933, 150) /*rand_dungeon_rewards_v2:player_4*/);
            IF_SETSIZE(16384, script3270(IF_GETHEIGHT(comp(933, 162)), ((int2 - IF_GETY(comp(933, 162))) - 2)), 2, 0, comp(933, 162));  // rand_dungeon_rewards_v2:player_5
            break;
        }
    };
    script3271();
    return;
}