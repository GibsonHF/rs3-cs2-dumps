//
function script2153(int0: number, int1: number, int2: number): number {
    var int3 = IF_GETNEXTSUBID(int0);
    var int4 = -1;
    int4 = (int4 + 1);
    while ((int4 < 11)) {
        stack(int0);
        stack(3);
        stack(int3);
        int3 = (int3 + 1);
        CC_CREATE();
    };
    stack(int1);
    stack(3);
    stack(int2);
    var int2 = (int2 + 1);
    CC_CREATE();
    return int2;
}