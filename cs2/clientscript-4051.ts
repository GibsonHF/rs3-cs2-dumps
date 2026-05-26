//[proc,warguild_overlay_arrow]
function script4051(int0: number, int1: number): void {
    IF_SETHIDE(false, int0);
    IF_SETTRANS(0, int0);
    if ((int1 == 1)) {
        IF_SETGRAPHIC(489 as graphic, int0);
        IF_SETPOSITION(0, 22, 2, 0, int0);
    } else {
        IF_SETGRAPHIC(534 as graphic, int0);
        IF_SETPOSITION(0, (1 - IF_GETHEIGHT(int0)), 2, 0, int0);
    };
    IF_SETONTIMER(callback(script4052, int0, int1), int0);
    return;
}