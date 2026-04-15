//
function script17764(): void {
    IF_SETTEXT(`Soul attraction: ${TOSTRING_LOCALISED(varbitplayer_53861, 1)}%`, comp(1225, 2));
    var int0 = script17526(varbitplayer_53861);
    if ((int0 >= 1)) {
        stack(30533);
        stack(80281603);
        IF_SETGRAPHIC();
    } else {
        stack(30534);
        stack(80281603);
        IF_SETGRAPHIC();
    };
    if ((int0 >= 2)) {
        stack(30544);
        stack(80281604);
        IF_SETGRAPHIC();
    } else {
        stack(30545);
        stack(80281604);
        IF_SETGRAPHIC();
    };
    if ((int0 >= 3)) {
        stack(30546);
        stack(80281605);
        IF_SETGRAPHIC();
    } else {
        stack(30556);
        stack(80281605);
        IF_SETGRAPHIC();
    };
    if ((int0 >= 4)) {
        stack(30557);
        stack(80281606);
        IF_SETGRAPHIC();
    } else {
        stack(30558);
        stack(80281606);
        IF_SETGRAPHIC();
    };
    if ((int0 == 5)) {
        stack(30568);
        stack(80281607);
        IF_SETGRAPHIC();
    } else {
        stack(30569);
        stack(80281607);
        IF_SETGRAPHIC();
    };
    return;
}