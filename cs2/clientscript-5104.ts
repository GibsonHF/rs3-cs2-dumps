//
function script5104(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number): void {
    IF_SETHIDE(true, int1);
    IF_SETHIDE(false, int2);
    if ((int0 == 1)) {
        IF_SETTEXT("Click to add<br>clan relationship", int3);
        IF_SETOP(1, "Add", int4);
        IF_SETHIDE(true, int5);
    } else {
        IF_SETTEXT("No clan set", int3);
        IF_CLEAROPS(int4);
        IF_SETHIDE(false, int5);
    };
    return;
}