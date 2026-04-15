//
function script14685(int0: int): dbrow {
    stack(364544);
    stack(int0);
    DB_FIND(0);
    dbrow_findnext();
    return stack();
}