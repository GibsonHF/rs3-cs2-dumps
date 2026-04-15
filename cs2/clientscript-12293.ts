//
function script12293(int0: overlayinterface): int {
    var int1 = -1;
    if ((IF_HASSUBOVERLAY(comp(1477, 715), 1448 as overlayinterface) == 1)) {
        if ((IF_HASSUBOVERLAY(comp(1448, 3), int0) == 1)) {
            int1 = 0;
        } else if ((IF_HASSUBOVERLAY(comp(1448, 5), int0) == 1)) {
            int1 = 1;
        } else if ((IF_HASSUBOVERLAY(comp(1448, 7), int0) == 1)) {
            int1 = 2;
        } else if ((IF_HASSUBOVERLAY(comp(1448, 9), int0) == 1)) {
            int1 = 3;
        } else if ((IF_HASSUBOVERLAY(comp(1448, 11), int0) == 1)) {
            int1 = 4;
        };
    };
    return int1;
}