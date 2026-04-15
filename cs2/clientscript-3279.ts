//[clientscript,rand_map_add_player]
function script3279(int0: int, int1: int, int2: unknown_int, int3: unknown_int, string0: unknown_string): void {
    if ((varclient_1152 == -1)) {
        varclient_1152 = 0;
    };
    if (((int0 == -1) || (int1 == -1))) {
        return;
    };
    var int4 = 0;
    var int5 = 0;
    switch (int3) {
        case 1: {
            int4 = (IF_GETWIDTH(comp(942, 8)) / 4);
            int5 = (IF_GETHEIGHT(comp(942, 8)) / 4);
            break;
        }
        case 2: {
            int4 = (IF_GETWIDTH(comp(942, 8)) / 4);
            break;
        }
    };
    CC_CREATE(comp(942, 10), 5, varclient_1152);
    varclient_1152 = (varclient_1152 + 1);
    switch (int2) {
        case 1: {
            CC_SETGRAPHIC(2825 as graphic);
            CC_SETPOSITION((((int0 * 32) + 6) + int4), (((int1 * 32) + 20) + int5), 0, 2);
            break;
        }
        case 2: {
            CC_SETGRAPHIC(2826 as graphic);
            CC_SETPOSITION((((int0 * 32) + 20) + int4), (((int1 * 32) + 20) + int5), 0, 2);
            break;
        }
        case 3: {
            CC_SETGRAPHIC(2827 as graphic);
            CC_SETPOSITION((((int0 * 32) + 13) + int4), (((int1 * 32) + 13) + int5), 0, 2);
            break;
        }
        case 4: {
            CC_SETGRAPHIC(2828 as graphic);
            CC_SETPOSITION((((int0 * 32) + 6) + int4), (((int1 * 32) + 6) + int5), 0, 2);
            break;
        }
        case 5: {
            CC_SETGRAPHIC(2829 as graphic);
            CC_SETPOSITION((((int0 * 32) + 20) + int4), (((int1 * 32) + 6) + int5), 0, 2);
            break;
        }
    };
    CC_SETSIZE(11, 11, 0, 0);
    CC_SETONMOUSEREPEAT(callback(script3282, -2147483645, -2147483643, 61734923, string0));
    CC_SETONMOUSELEAVE(callback(script40, 61734923));
    CC_SETHIDE(0);
    return;
}