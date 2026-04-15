//
function script14675(int0: dbrow): int {
    if ((int0 == -1 as dbrow)) {
        return 0;
    };
    var int1 = 0;
    if ((script14680(int0) == 5)) {
        return 12;
    };
    if ((DB_GETFIELDCOUNT(int0, 372832) > 0)) {
        int1 = dbrow_getfield(int0, 372832, 0);
    } else {
        switch (dbrow_getfield(int0, 372752, 0)) {
            case 1: {
                int1 = 0;
                break;
            }
            case 2: {
                int1 = 2;
                break;
            }
            case 3: {
                int1 = 5;
                break;
            }
            case 4: {
                int1 = 10;
                break;
            }
        };
    };
    if ((script14680(int0) == 9)) {
    } else {
    };
    return int1;
}