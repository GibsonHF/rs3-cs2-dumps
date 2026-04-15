//
function script2700(int0: int): string {
    if ((DB_GETFIELDCOUNT(4075 as dbrow, 532496) < int0)) {
        return "0";
    };
    var int1 = -1;
    var string0 = "";
    var int2 = false;
    stack(dbrow_getfield(4075 as dbrow, 532496, int0));
    [int1, int2, string0, string0] = stack();
    switch (int1) {
        case 2: {
            return inttostring(20, 10);
        }
        case 3: {
            return inttostring(10, 10);
        }
        case 4: {
            return inttostring(10, 10);
        }
        case 5: {
            return inttostring(10, 10);
        }
        case 6: {
            return inttostring(10, 10);
        }
        case 7: {
            return inttostring(10, 10);
        }
        case 8: {
            return "Daily 1%, Weekly 5%, Monthly 20";
        }
        case 9: {
            return inttostring(10, 10);
        }
    };
    return "0";
}