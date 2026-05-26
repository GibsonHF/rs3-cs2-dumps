//
function script15317(): void {
    var int0 = -1 as graphic;
    var int1 = -1;
    [int0, int1] = script789(0);
    var int2 = 0;
    var int3 = 0;
    var int4 = -1 as graphic;
    if ((script6431() == 1)) {
        int4 = struct_getparam(34085, 8096);
        [int2, int3] = IF_GETGRAPHICDIMENSIONS(comp(1376, 7));
        IF_SETSIZE((int2 - 30), (int3 - 30), 0, 0, comp(1236, 5));
    } else if ((varbitplayer_27169 == 1)) {
        int4 = struct_getparam(34085, 4394);
    } else {
        int4 = struct_getparam(21159, 3496);
    };
    if ((int0 != -1 as graphic)) {
        IF_SETGRAPHIC(int0, comp(1236, 5));
    };
    if ((int4 != -1 as graphic)) {
        IF_SETGRAPHIC(int4, comp(1236, 7));
    };
    return;
}