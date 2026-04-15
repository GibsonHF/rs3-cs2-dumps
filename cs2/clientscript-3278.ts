//[clientscript,rand_map_add_room]
function script3278(int0: int, int1: int, int2: graphic, int3: unknown_int): void {
    var int4 = 0;
    var int5 = 0;
    if ((varclient_1149 == -1)) {
        varclient_1149 = 0;
    };
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
    CC_CREATE(comp(942, 8), 5, varclient_1149);
    varclient_1149 = (varclient_1149 + 1);
    CC_SETSIZE(32, 32, 0, 0);
    CC_SETGRAPHIC(int2);
    if ((script6431() == true)) {
        CC_SETTRANS(130);
    };
    CC_SETPOSITION(((int0 * 32) + int4), ((int1 * 32) + int5), 0, 2);
    CC_SETHIDE(false);
    return;
}