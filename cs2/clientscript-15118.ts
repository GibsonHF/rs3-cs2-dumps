//
function script15118(int0: number): number {
    if ((int0 <= 0)) {
        return -1;
    };
    stack(438272);
    stack(int0);
    DB_FIND(0);
    var int1 = dbrow_findnext();
    if ((int1 == -1)) {
        script12478(`Unable to find an event at ID ${inttostring(int0, 10)}!`);
        return -1;
    };
    return int1;
}