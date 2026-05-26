//
function script15071(int0: number): void {
    if ((int0 == varplayer_9078)) {
        if ((script8229(9, 0) > -1)) {
            IF_SETOP(2, "Untrack", 41549890);
            stack(29401);
            stack(41549891);
            IF_SETGRAPHIC();
        } else {
            IF_SETOP(2, "Track", 41549890);
            stack(29246);
            stack(41549891);
            IF_SETGRAPHIC();
        };
        if ((script8229(9, 1) > -1)) {
            IF_SETOP(2, "Untrack", 41549897);
            stack(29401);
            stack(41549898);
            IF_SETGRAPHIC();
        } else {
            IF_SETOP(2, "Track", 41549897);
            stack(29246);
            stack(41549898);
            IF_SETGRAPHIC();
        };
    } else {
        IF_SETOP(2, "", 41549890);
        IF_SETOP(2, "", 41549897);
    };
    return;
}