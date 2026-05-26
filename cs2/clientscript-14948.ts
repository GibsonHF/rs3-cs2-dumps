//
function script14948(int0: number, int1: number): void {
    IF_SETMODELANIM(29024, int0);
    IF_SETMODEL(128339, int1);
    IF_SETMODELANIM(29026, int1);
    var int2 = SEQLENGTH(29024);
    var int3 = SEQLENGTH(29026);
    IF_SETONTIMER(callback(script17365, 0, int0, int1, int2, (int2 - int3)), int0);
    return;
}