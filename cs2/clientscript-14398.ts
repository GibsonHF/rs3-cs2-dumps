//
function script14398(int0: component, int1: graphic, int2: int, int3: int, int4: int, int5: int): void {
    CC_CREATE(int0, 5, IF_GETNEXTSUBID(int0));
    CC_SETPOSITION(int4, int5, 0, 0);
    CC_SETSIZE(int2, int3, 1, 0);
    CC_SETGRAPHIC(int1);
    return;
}