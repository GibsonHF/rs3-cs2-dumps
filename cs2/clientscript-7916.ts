//
function script7916(int0: component, int1: int, int2: unknown_int, int3: dbrow, int4: int): void {
    if ((((int1 == -1) && (IF_FIND(int0) == 1)) || (CC_FIND(int0, int1) == 1))) {
        CC_LIST_CLEARSELECTION();
        script7914(int2, int3, int4);
    };
    return;
}