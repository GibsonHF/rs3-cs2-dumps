//
function script15317(): void {
    var int0 = -1;
    var int1 = -1;
    [int0, int1] = script789(0);
    var int2 = 0;
    var int3 = 0;
    var int4 = -1 as graphic;
    if ((script6431() == 1)) {
        int4 = struct_getparam(34085, 8096);
        [int2, int3] = IF_GETGRAPHICDIMENSIONS(90177543);
        IF_SETSIZE((int2 - 30), (int3 - 30), 0, 0, 81002501);
    } else if ((varbitplayer_27169 == 1)) {
        int4 = struct_getparam(34085, 4394);
    } else {
        int4 = struct_getparam(21159, 3496);
    };
    if ((int0 != -1)) {
        stack(int0);
        stack(81002501);
        IF_SETGRAPHIC();
    };
    if ((int4 != -1 as graphic)) {
        stack(int4);
        stack(81002503);
        IF_SETGRAPHIC();
    };
    return;
}