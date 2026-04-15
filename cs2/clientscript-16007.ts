//
function script16007(int0: struct): int {
    if ((int0 == -1 as struct)) {
        return 0;
    };
    return ((DATE_RUNEDAY() - script766(int0)) + 1);
}