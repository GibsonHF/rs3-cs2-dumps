//
function script4654(int0: int, int1: int, int2: unknown_int): void {
    if (((int0 == -1) || (int1 == -1))) {
        return;
    };
    var int3 = 0;
    var int4 = 0;
    var int5 = comp(173, 80);
    if ((varbitplayer_4766 == 1)) {
        int5 = comp(173, 80);
    };
    if ((varbitplayer_4766 == 2)) {
        int5 = comp(173, 61);
    };
    if ((varbitplayer_4766 == 4)) {
        if ((varbitplayer_4859 == 1)) {
            int5 = comp(173, 7);
        };
        if ((varbitplayer_4859 == 2)) {
            int5 = comp(173, 38);
        };
        if ((varbitplayer_4859 == 3)) {
            int5 = comp(173, 41);
        };
    };
    CC_CREATE(int5, 5, 0);
    CC_SETGRAPHIC(2825 as graphic);
    CC_SETPOSITION((((int0 * 32) + 10) + int3), (((int1 * 32) + 10) + int4), 0, 2);
    CC_SETSIZE(11, 11, 0, 0);
    return;
}