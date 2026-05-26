//
function script10450(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number, int6: number, int7: number, int8: number, int9: number, int10: number): void {
    if ((CC_FIND(int0, (int3 + 19)) == 1)) {
        cc_setparam(7249, int8);
    };
    if (((int9 == 0) && (CC_FIND(int2, int8) == 1))) {
        CC_TRIGGEROP(1);
    };
    script10602(int0, -1, int3, int6, int7, int8, int10);
    script10939(int0, (int6 + int8));
    return;
}