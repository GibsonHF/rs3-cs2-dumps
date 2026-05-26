//
function script17764(): void {
    IF_SETTEXT(`Soul attraction: ${TOSTRING_LOCALISED(varbitplayer_53861, 1)}%`, 80281602);
    var int0 = script17526(varbitplayer_53861);
    if ((int0 >= 1)) {
        IF_SETGRAPHIC(30533, 80281603);
    } else {
        IF_SETGRAPHIC(30534, 80281603);
    };
    if ((int0 >= 2)) {
        IF_SETGRAPHIC(30544, 80281604);
    } else {
        IF_SETGRAPHIC(30545, 80281604);
    };
    if ((int0 >= 3)) {
        IF_SETGRAPHIC(30546, 80281605);
    } else {
        IF_SETGRAPHIC(30556, 80281605);
    };
    if ((int0 >= 4)) {
        IF_SETGRAPHIC(30557, 80281606);
    } else {
        IF_SETGRAPHIC(30558, 80281606);
    };
    if ((int0 == 5)) {
        IF_SETGRAPHIC(30568, 80281607);
    } else {
        IF_SETGRAPHIC(30569, 80281607);
    };
    return;
}