//
function script14628(int0: number): number {
    if ((int0 == -1)) {
        return 0;
    };
    var int1 = script14629(int0);
    var int2 = script14630(int0);
    var int3 = 0;
    if ((script3825() == 1)) {
        script20925();
        if (BRANCH_EQUALS(1)) {
            int3 = dbrow_getfield(int0, 368928, 0);
            if (((int3 != 0) && (script20136(int3) == 0))) {
                return 0;
            };
        };
    };
    switch (int0) {
        default: {
        }
    };
    if ((int1 == 0)) {
        return 0;
    };
    switch (dbrow_getfield(int0, 368656, 0)) {
        case 2: {
            if ((int2 == 1)) {
                return 0;
            };
            break;
        }
    };
    return 1;
}