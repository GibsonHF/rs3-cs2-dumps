//
function script10224(int0: number, int1: number, int2: number): void {
    CC_DELETEALL(93192196);
    if (((varbitplayer_14112 == 1) || (IF_HASSUB(96797472) == 0))) {
        return;
    };
    CC_CREATE(93192196, 5, 0);
    CC_SETSIZE(24, 24, 0, 0);
    var int3 = 0;
    var int4 = 0;
    [int3, int4] = script8405(93192196);
    CC_SETPOSITION(((int1 - int3) - (CC_GETWIDTH() / 2)), ((int2 - int4) - (CC_GETHEIGHT() / 2)), 0, 0);
    script7590(int0);
    return;
}