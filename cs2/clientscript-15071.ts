//
function script15071(int0: int): void {
    if ((int0 == varplayer_9078)) {
        if ((script8229(9, 0) > -1)) {
            IF_SETOP(2, "Untrack", comp(634, 66));
            stack(29401);
            stack(41549891);
            IF_SETGRAPHIC();
        } else {
            IF_SETOP(2, "Track", comp(634, 66));
            stack(29246);
            stack(41549891);
            IF_SETGRAPHIC();
        };
        if ((script8229(9, 1) > -1)) {
            IF_SETOP(2, "Untrack", comp(634, 73));
            stack(29401);
            stack(41549898);
            IF_SETGRAPHIC();
        } else {
            IF_SETOP(2, "Track", comp(634, 73));
            stack(29246);
            stack(41549898);
            IF_SETGRAPHIC();
        };
    } else {
        IF_SETOP(2, "", comp(634, 66));
        IF_SETOP(2, "", comp(634, 73));
    };
    return;
}