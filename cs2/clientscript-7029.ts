//
function script7029(int0: component, int1: component, int2: struct, int3: unknown_int): void {
    if (((int3 == 0) && (IF_GETGRAPHIC(int0) != script11778(int2, 1)))) {
        return;
    };
    if ((script7083(int2) == 1)) {
        IF_SETTRANS(0, int1);
    } else {
        IF_SETTRANS(255, int1);
    };
    return;
}