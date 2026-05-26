//
function script1180(int0: number): void {
    if (((varbitplayer_22875 == 1) && (varbitplayer_223 == 0))) {
        if ((MAP_LANG() == 1)) {
            IF_SETGRAPHIC(2714 as graphic, int0);
        } else {
            IF_SETGRAPHIC(2730 as graphic, int0);
        };
    } else if ((MAP_LANG() == 1)) {
        IF_SETGRAPHIC(5570 as graphic, int0);
    } else {
        IF_SETGRAPHIC(5568 as graphic, int0);
    };
    script8808();
    return;
}