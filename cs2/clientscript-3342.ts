//
function script3342(int0: unknown_int): void {
    var int1 = -1;
    var int2 = -1;
    var int3 = -1;
    if ((MAP_LANG() == 1)) {
        if ((varclient_1178 == 0)) {
            int1 = 3068;
            int2 = 3067;
            int3 = 3069;
        } else {
            int1 = 3071;
            int2 = 3070;
            int3 = 3072;
        };
    } else if ((varclient_1178 == 0)) {
        int1 = 3014;
        int2 = 3013;
        int3 = 3015;
    } else {
        int1 = 3017;
        int2 = 3016;
        int3 = 3018;
    };
    stack(int2);
    stack(int0);
    IF_SETGRAPHIC();
    IF_SETONMOUSEOVER(callback(script44, -2147483645, int1), int0);
    IF_SETONMOUSELEAVE(callback(script44, -2147483645, int2), int0);
    IF_SETONCLICK(callback(script44, -2147483645, int3), int0);
    return;
}