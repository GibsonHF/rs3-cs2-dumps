//
function script10421(int0: number): void {
    var int1 = 0;
    var int2 = 0;
    var int3 = 0;
    var int4 = 0;
    if ((script6431() == 1)) {
        [int1, int2, int3, int4] = script2956();
        IF_SETSIZE(0, (50 + int2), 1, 0, int0);
        IF_SETPOSITION(0, int2, 1, 0, 93192270);
        IF_SETSIZE((int1 + int3), 50, 1, 0, 93192270);
        IF_SETSIZE(0, (50 + int2), 1, 1, 93192193);
        IF_SETPOSITION(int1, IF_GETHEIGHT(int0), 0, 0, 93192194);
        IF_SETSIZE((int1 + int3), ((IF_GETHEIGHT(int0) + int2) + int4), 1, 1, 93192194);
        IF_SETPOSITION(script8407(93192293), (script8408(93192293) + IF_GETHEIGHT(93192293)), 0, 0, 93192305);
    };
    script13990(int0, -1, 2830);
    return;
}