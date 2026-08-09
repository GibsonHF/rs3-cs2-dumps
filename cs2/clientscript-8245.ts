//
function script8245(): number {
    var int0 = 1;
    var int1 = 8429;
    var int2 = ENUM_GETOUTPUTCOUNT(int1);
    var int3 = -1;
    while ((int0 <= int2)) {
        int3 = enum_getvalue(0, 74, int1, int0);
        if ((int3 != -1 as dbrow)) {
            if ((script11205(int3) == 1)) {
                return int0;
            } else if ((BRANCH_GREATER_THAN_OR_EQUALS(DATE_RUNEDAY_FROMDATE(script12477(), dbrow_getfield(int3, 315456, 0))) && BRANCH_LESS_THAN_OR_EQUALS(DATE_RUNEDAY_FROMDATE(script12477(), dbrow_getfield(int3, 315472, 0))))) {
                return int0;
            };
        };
        int0 = (int0 + 1);
    };
    return -1;
}