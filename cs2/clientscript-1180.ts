//
function script1180(int0: unknown_int): void {
    if (((varbitplayer_22875 == 1) && (varbitplayer_223 == 0))) {
        if ((MAP_LANG() == 1)) {
            stack(2714);
            stack(int0);
            IF_SETGRAPHIC();
        } else {
            stack(2730);
            stack(int0);
            IF_SETGRAPHIC();
        };
    } else if ((MAP_LANG() == 1)) {
        stack(5570);
        stack(int0);
        IF_SETGRAPHIC();
    } else {
        stack(5568);
        stack(int0);
        IF_SETGRAPHIC();
    };
    script8808();
    return;
}