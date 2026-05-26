//
function script9104(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number, int6: number, int7: number, int8: number, int9: number): void {
    if ((IF_GETHIDE(int1) == true)) {
        IF_SETVFLIP(1, int0);
        IF_SETHIDE(false, int1);
        IF_SETHIDE(false, int2);
        IF_SETHIDE(false, int3);
        IF_SETHIDE(false, int4);
    } else {
        IF_SETVFLIP(0, int0);
        IF_SETHIDE(true, int1);
        IF_SETHIDE(true, int2);
        IF_SETHIDE(true, int3);
        IF_SETHIDE(true, int4);
    };
    IF_SETVFLIP(0, int5);
    IF_SETHIDE(true, int6);
    IF_SETHIDE(true, int7);
    IF_SETHIDE(true, int8);
    IF_SETHIDE(true, int9);
    return;
}