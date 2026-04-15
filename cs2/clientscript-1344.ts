//
function script1344(int0: struct): dbrow {
    if ((int0 == -1 as struct)) {
        return 4562 as dbrow;
    };
    var int1 = script9304(int0);
    switch (int0) {
        case 46119: {
            int1 = script16600();
            break;
        }
    };
    if (((int0 != 51627 as struct) && (int1 == 4562 as dbrow))) {
        script12478(`Warning: promo data is using default values - the promo struct should have different data set: ${script16345(int0)}`);
    };
    if ((DB_GETFIELDCOUNT(int1, 602112) == 0)) {
        script12478("The dbrow defined for the current active promo exists but has no categories specified, falling back to default drop table.");
        return 4562 as dbrow;
    };
    return int1;
}