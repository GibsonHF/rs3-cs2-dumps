//
function script15071(int0: number): void {
    if ((int0 == varplayer_9078)) {
        if ((script8229(9, 0) > -1)) {
            IF_SETOP(2, "Untrack", 41549890);
            IF_SETGRAPHIC(29401, 41549891);
        } else {
            IF_SETOP(2, "Track", 41549890);
            IF_SETGRAPHIC(29246, 41549891);
        };
        if ((script8229(9, 1) > -1)) {
            IF_SETOP(2, "Untrack", 41549897);
            IF_SETGRAPHIC(29401, 41549898);
        } else {
            IF_SETOP(2, "Track", 41549897);
            IF_SETGRAPHIC(29246, 41549898);
        };
    } else {
        IF_SETOP(2, "", 41549890);
        IF_SETOP(2, "", 41549897);
    };
    return;
}