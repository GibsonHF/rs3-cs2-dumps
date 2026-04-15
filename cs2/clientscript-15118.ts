//
function script15118(int0: int): dbrow {
    if ((int0 <= 0)) {
        return -1 as dbrow;
    };
    stack(438272);
    stack(int0);
    DB_FIND(0);
    dbrow_findnext();
    var int1 = stack();
    if ((int1 == -1)) {
        script12478(`Unable to find an event at ID ${inttostring(int0, 10)}!`);
        return -1 as dbrow;
    };
    return int1;
}