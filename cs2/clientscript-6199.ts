//
function script6199(int0: component, int1: graphic, int2: int, int3: int, int4: int, int5: int): void {
    CC_CREATE(int0, 5, IF_GETNEXTSUBID(int0));
    CC_SETPOSITION(int2, int3, 0, 0);
    CC_SETSIZE(int4, int5, 0, 0);
    CC_SETGRAPHIC(int1);
    CC_SETTILING(true);
    return;
}