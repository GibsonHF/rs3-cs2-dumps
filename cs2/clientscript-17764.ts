//
function script17764(): void {
    IF_SETTEXT(`Soul attraction: ${TOSTRING_LOCALISED(varbitplayer_53861, 1)}%`, comp(1225, 2));
    var int0 = script17526(varbitplayer_53861);
    if ((int0 >= 1)) {
        IF_SETGRAPHIC(30533 as graphic, comp(1225, 3));
    } else {
        IF_SETGRAPHIC(30534 as graphic, comp(1225, 3));
    };
    if ((int0 >= 2)) {
        IF_SETGRAPHIC(30544 as graphic, comp(1225, 4));
    } else {
        IF_SETGRAPHIC(30545 as graphic, comp(1225, 4));
    };
    if ((int0 >= 3)) {
        IF_SETGRAPHIC(30546 as graphic, comp(1225, 5));
    } else {
        IF_SETGRAPHIC(30556 as graphic, comp(1225, 5));
    };
    if ((int0 >= 4)) {
        IF_SETGRAPHIC(30557 as graphic, comp(1225, 6));
    } else {
        IF_SETGRAPHIC(30558 as graphic, comp(1225, 6));
    };
    if ((int0 == 5)) {
        IF_SETGRAPHIC(30568 as graphic, comp(1225, 7));
    } else {
        IF_SETGRAPHIC(30569 as graphic, comp(1225, 7));
    };
    return;
}