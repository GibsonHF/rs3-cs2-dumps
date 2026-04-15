//
function script6197(int0: component, int1: int, int2: int, int3: int, int4: int, int5: obj, int6: int): void {
    CC_CREATE(int0, 5, IF_GETNEXTSUBID(int0));
    CC_SETSIZE(int1, int2, 0, 0);
    CC_SETPOSITION(int3, int4, 0, 0);
    if ((int6 != -1)) {
        CC_SETOBJECT(int5, int6);
    } else {
        CC_SETOBJECT_NONUM(int5, 1);
    };
    CC_SETOUTLINE(1);
    return;
}