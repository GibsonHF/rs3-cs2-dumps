//
function script78(int0: component, int1: int, int2: int, int3: int): void {
    CC_CREATE(int0, 9, IF_GETNEXTSUBID(int0));
    CC_SETPOSITION(int1, int2, 0, 0);
    CC_SETSIZE((int3 - 2), 0, 0, 0);
    script11024(7);
    CC_CREATE(int0, 9, IF_GETNEXTSUBID(int0));
    CC_SETPOSITION((int1 + 1), (int2 + 1), 0, 0);
    CC_SETSIZE((int3 - 2), 0, 0, 0);
    script11024(8);
    return;
}