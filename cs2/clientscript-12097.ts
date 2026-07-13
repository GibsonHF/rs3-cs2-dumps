//
function script12097(int0: number, int1: number): number {
    var int2 = 0;
    if ((int0 != -1)) {
        var int1 = struct_getparam(int0, 6569);
        int2 = struct_getparam(int0, 2215);
    };
    if ((int1 != -1 as dbrow)) {
        switch (DB_GETROWTABLE(int1)) {
            case 5: {
                int2 = 27;
                break;
            }
            case 88: {
                int2 = 28;
                break;
            }
            case 370: {
                int2 = 22;
                break;
            }
        };
    };
    return int2;
}