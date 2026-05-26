//
function script13761(int0: number, int1: number, int2: number): void {
    if ((int0 == -1 as graphic)) {
        return;
    };
    if ((int2 == comp(-1, 65535))) {
        return;
    };
    if ((int1 <= -1)) {
        return;
    };
    var int3 = 0;
    var int4 = 0;
    IF_SETHIDE(false, comp(1029, 77));
    IF_SETGRAPHIC(int0, comp(1029, 79));
    [int3, int4] = IF_GETGRAPHICDIMENSIONS(comp(1029, 79));
    if ((int3 < 350)) {
        IF_SETSIZE(250, 151, 0, 0, comp(1029, 79));
    } else {
        IF_SETSIZE(350, 197, 0, 0, comp(1029, 79));
    };
    if ((CC_FIND(int2, int1) == 1)) {
        CC_SETCOLOUR(16771892);
    };
    return;
}