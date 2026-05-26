//
function script2153(int0: number, int1: number, int2: number): number {
    var int3 = IF_GETNEXTSUBID(int0);
    var int4 = -1;
    while ((++int4 < 11)) {
        CC_CREATE(int0, 3, int3++);
    };
    CC_CREATE(int1, 3, int2++);
    return int2;
}