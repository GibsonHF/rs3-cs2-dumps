//
function script15320(int0: int): unknown_int {
    stack(495632);
    stack(int0);
    DB_FIND(0);
    dbrow_findnext();
    var int1 = stack();
    if ((int1 == -1)) {
        return 0;
    };
    if ((STRING_LENGTH(dbrow_getfield(int1, 495664, 0)) == 0)) {
        return 0;
    };
    return 1;
}