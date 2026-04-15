//
function script6733(int0: int): dbrow {
    stack(663552);
    stack(int0);
    DB_FIND(0);
    dbrow_findnext();
    return stack();
}