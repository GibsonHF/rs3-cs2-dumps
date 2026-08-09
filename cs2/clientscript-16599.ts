//
function script16599(): number {
    var int0 = -1;
    var int1 = 0;
    var int2 = -1;
    int0 = (int0 + 1);
    while ((int0 < ENUM_GETOUTPUTCOUNT(11249 as cs2enum))) {
        stack(749568);
        stack(enum_getvalue(0, 0, 11249 as cs2enum, int0));
        DB_FIND(0);
        int2 = dbrow_findnext();
        if ((int2 != -1)) {
            int1 = (int1 + dbrow_getfield(int2, 749616, 0));
        } else {
            script12478(`Invalid modifier ID: ${inttostring(enum_getvalue(0, 0, 11249, int0), 10)}, at index ${inttostring(int0, 10)} in enum`);
        };
    };
    return int1;
}