//
function script17879(int0: number): [number, number, number, number, number, number] {
    var int1 = DB_GETFIELDCOUNT(int0, 991376);
    var int2 = -1;
    var int3 = -1;
    var int4 = -1;
    var int5 = -1;
    var int6 = -1;
    var int7 = -1;
    var int8 = 0;
    while ((int8 < int1)) {
        int2 = dbrow_getfield(int0, 991376, int8);
        switch (int8) {
            case 0: {
                int3 = int2;
                break;
            }
            case 1: {
                int4 = int2;
                break;
            }
            case 2: {
                int5 = int2;
                break;
            }
            case 3: {
                int6 = int2;
                break;
            }
            case 4: {
                int7 = int2;
                break;
            }
        };
        int8 = (int8 + 1);
    };
    return [int1, int3, int4, int5, int6, int7];
}