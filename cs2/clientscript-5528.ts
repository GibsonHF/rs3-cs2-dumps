//
function script5528(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number, int6: number, int7: number): number {
    CC_DELETEALL(int4);
    if ((int3 == -1)) {
        IF_SETHIDE(1, int4);
        return int0;
    };
    script5530(int0, int1, int3, int4, int5, int6, int7);
    IF_SETHIDE(0, int4);
    return ((int0 + int1) + int2);
}