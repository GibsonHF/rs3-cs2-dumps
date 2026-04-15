//
function script13761(int0: unknown_int, int1: int, int2: component): void {
    if ((int0 == -1)) {
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
    stack(int0);
    stack(67436623);
    IF_SETGRAPHIC();
    [int3, int4] = IF_GETGRAPHICDIMENSIONS(67436623);
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