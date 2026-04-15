//
function script6469(int0: component, int1: int, int2: obj, int3: unknown_int): void {
    if ((((int1 == -1) && (IF_FIND(int0) == 1)) || (CC_FIND(int0, int1) == 1))) {
        if ((CC_GETINVOBJECT() != int2)) {
            return;
        };
        CC_CLEAROPS();
        script2833(int2, int3, int1, -1);
    };
    return;
}