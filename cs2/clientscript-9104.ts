//
function script9104(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number, int6: number, int7: number, int8: number, int9: number): void {
    if ((IF_GETHIDE(int1) == 1)) {
        IF_SETVFLIP(1, int0);
        IF_SETHIDE(0, int1);
        IF_SETHIDE(0, int2);
        IF_SETHIDE(0, int3);
        IF_SETHIDE(0, int4);
    } else {
        IF_SETVFLIP(0, int0);
        IF_SETHIDE(1, int1);
        IF_SETHIDE(1, int2);
        IF_SETHIDE(1, int3);
        IF_SETHIDE(1, int4);
    };
    IF_SETVFLIP(0, int5);
    IF_SETHIDE(1, int6);
    IF_SETHIDE(1, int7);
    IF_SETHIDE(1, int8);
    IF_SETHIDE(1, int9);
    return;
}