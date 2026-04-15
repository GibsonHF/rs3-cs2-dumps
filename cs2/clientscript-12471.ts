//
function script12471(int0: int): unknown_int {
    stack(36864);
    stack(int0);
    DB_FIND(0);
    dbrow_findnext();
    var int1 = stack();
    if ((int1 == -1)) {
        script12478(`Tried to find a task for an invalid ID: ${TOSTRING_LOCALISED(int0, 1)}`);
    };
    return int1;
}