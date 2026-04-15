//
function script14628(int0: dbrow): unknown_int {
    if ((int0 == -1 as dbrow)) {
        return 0;
    };
    var int1 = script14629(int0);
    var int2 = script14630(int0);
    switch (int0) {
        default: {
            break;
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