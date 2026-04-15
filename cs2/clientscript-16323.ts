//
function script16323(int0: int): dbrow {
    stack(671744);
    stack(int0);
    DB_FIND(0);
    dbrow_findnext();
    var int1 = stack();
    if (((int1 == -1) && (int0 != 8677))) {
        script12478(`No data was found for advent calendar on the specified date: ${inttostring(int0, 10)}`);
    };
    return int1;
}