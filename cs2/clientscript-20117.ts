//
function script20117(int0: int): dbrow {
    stack(1335296);
    stack(int0);
    DB_FIND(0);
    dbrow_findnext();
    return stack();
}