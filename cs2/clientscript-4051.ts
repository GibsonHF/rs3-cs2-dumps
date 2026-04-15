//[proc,warguild_overlay_arrow]
function script4051(int0: component, int1: unknown_int): void {
    IF_SETHIDE(false, int0);
    IF_SETTRANS(0, int0);
    if ((int1 == 1)) {
        stack(489);
        stack(int0);
        IF_SETGRAPHIC();
        IF_SETPOSITION(0, 22, 2, 0, int0);
    } else {
        stack(534);
        stack(int0);
        IF_SETGRAPHIC();
        IF_SETPOSITION(0, (1 - IF_GETHEIGHT(int0)), 2, 0, int0);
    };
    IF_SETONTIMER(callback(script4052, int0, int1), int0);
    return;
}