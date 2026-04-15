//
function script5003(int0: struct, int1: stat): int {
    if ((int0 == -1 as struct)) {
        return 0;
    };
    return (script17268(int1, int0) + SCALE(STAT_BASE(int1), 100, script17269(int1, int0)));
}