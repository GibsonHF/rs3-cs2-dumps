//
function script10450(int0: component, int1: component, int2: component, int3: int, int4: int, int5: int, int6: int, int7: int, int8: int, int9: unknown_int, int10: cs2enum): void {
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