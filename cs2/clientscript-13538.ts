//
function script13538(int0: component, int1: component, int2: boolean, int3: boolean, int4: boolean): void {
    if ((CC_FIND(int0, 0) == 1)) {
        CC_SETHIDE(int2);
    };
    if ((CC_FIND(int1, 0) == 1)) {
        CC_SETHIDE(int2);
    };
    if ((CC_FIND(int0, 1) == 1)) {
        CC_SETHIDE(int3);
    };
    if ((CC_FIND(int1, 1) == 1)) {
        CC_SETHIDE(int3);
    };
    if ((CC_FIND(int0, 2) == 1)) {
        CC_SETHIDE(int4);
    };
    if ((CC_FIND(int1, 2) == 1)) {
        CC_SETHIDE(int4);
    };
    return;
}