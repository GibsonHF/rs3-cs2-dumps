//
function script18445(int0: int): dbrow {
    stack(1126400);
    stack(int0);
    DB_FIND(0);
    dbrow_findnext();
    return stack();
}