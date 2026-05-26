//
function script13674(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number, int6: number, int7: number): void {
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