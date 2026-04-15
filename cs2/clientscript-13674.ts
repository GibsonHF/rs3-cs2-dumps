//
function script13674(int0: component, int1: int, int2: obj, int3: graphic, int4: int, int5: int, int6: int, int7: unknown_int): void {
    CC_CREATE(int0, 5, int1);
    CC_SETSIZE(int5, (int5 - 4), 0, 0);
    if (((int2 == -1 as obj) && (int3 != -1 as graphic))) {
        CC_SETGRAPHIC(int3);
    } else {
        CC_SETOBJECT(int2, int4);
    };
    CC_SETPOSITION(1, (int6 + 1), 1, 1);
    if ((int7 == 1)) {
        CC_SETOP(1, "Withdraw All");
        CC_SETOP(2, "Withdraw 1");
        CC_SETOP(3, "Withdraw X");
    };
    return;
}