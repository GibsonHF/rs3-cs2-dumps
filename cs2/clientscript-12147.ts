//
function script12147(int0: number, int1: number): void {
    var int2 = (IF_GETY(int0) - 5);
    if ((int2 <= int1)) {
        int2 = int1;
        IF_SETONTIMER(callback(), int0);
        IF_SETHIDE(false, comp(1708, 21));  // invent_discovery:workbench_track_layer
    };
    IF_SETPOSITION(IF_GETX(int0), int2, 0, 0, int0);
    return;
}