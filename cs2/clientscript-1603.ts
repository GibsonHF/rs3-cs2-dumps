//[proc,worldmap_arrowkey]
function script1603(int0: int, int1: int): void {
    if ((WORLDMAP_ISLOADED() == 0)) {
        return;
    };
    var int2 = (15 + MAX((varclient_1030 - CLIENTCLOCK()), 0));
    varclient_1030 = MIN(MAX((varclient_1030 + 2), (CLIENTCLOCK() + 2)), (CLIENTCLOCK() + 25));
    switch (varclient_172) {
        case 37: {
            int2 = (int2 * 5);
            break;
        }
        case 50: {
            int2 = (int2 * 4);
            break;
        }
        case 75: {
            int2 = (int2 * 3);
            break;
        }
        case 100: {
            int2 = (int2 * 2);
            break;
        }
    };
    var int3 = 0;
    var int4 = 0;
    [int3, int4] = WORLDMAP_GETDISPLAYPOSITION();
    WORLDMAP_JUMPTODISPLAYCOORD(MOVECOORD(pos(0,0,0,0,0), MAX((int3 + (int0 * int2)), 0), 0, MAX((int4 + (int1 * int2)), 0)));
    return;
}