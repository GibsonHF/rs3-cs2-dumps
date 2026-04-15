//[clientscript,rand_map_start_room]
function script3280(int0: int, int1: int, int2: unknown_int): void {
    if ((varclient_1151 == -1)) {
        varclient_1151 = 0;
    };
    var int3 = 0;
    var int4 = 0;
    switch (int2) {
        case 1: {
            int3 = (IF_GETWIDTH(comp(942, 8)) / 4);
            int4 = (IF_GETHEIGHT(comp(942, 8)) / 4);
            break;
        }
        case 2: {
            int3 = (IF_GETWIDTH(comp(942, 8)) / 4);
            break;
        }
    };
    CC_CREATE(comp(942, 9), 5, varclient_1151);
    varclient_1151 = (varclient_1151 + 1);
    CC_SETSIZE(32, 32, 0, 0);
    CC_SETGRAPHIC(2831 as graphic);
    CC_SETPOSITION(((int0 * 32) + int3), ((int1 * 32) + int4), 0, 2);
    CC_SETHIDE(false);
    return;
}