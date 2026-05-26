//
function script7029(int0: number, int1: number, int2: number, int3: number): void {
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