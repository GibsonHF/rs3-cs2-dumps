//
function script20651(int0: number): string {
    var int2 = -1;
    switch (int0) {
        case 1: {
            int2 = script20847();
            if (((int2 != -1 as dbrow) && (DB_GETFIELDCOUNT(int2, 1552384) > 0))) {
                return `<sprite=36705> ${dbrow_getfield(int2, 1552384, 0)}`;
            };
            break;
        }
        case 11: {
            return "<sprite=34366> Halloween <sprite=34366>";
        }
    };
    var int3 = DB_GETFIELDCOUNT(17540 as dbrow, 1421312);
    var int4 = -1;
    var int5 = 0;
    var string0 = "";
    int4 = (int4 + 1);
    while ((int4 < int3)) {
        [int5, string0] = dbrow_getfield(17540 as dbrow, 1421312, int4);
        if ((int0 == int5)) {
            if (((int1 == 0) && (script20848() == 1))) {
                stack(int0);
                script21265();
                if (BRANCH_EQUALS(1)) {
                    return `<sprite=36705> ${string0}`;
                };
            };
            return string0;
        };
    };
    return "";
}