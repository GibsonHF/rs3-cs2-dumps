//
function script12470(int0: number): number {
    stack(37008);
    stack(int0);
    DB_FIND(0);
    var int1 = dbrow_findnext();
    if ((int1 == -1)) {
        script12478(`Tried to find a task for an invalid runeday: ${TOSTRING_LOCALISED(int0, 1)}`);
    };
    return int1;
}