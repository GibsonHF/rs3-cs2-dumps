//
function script3572(int0: obj, int1: obj): unknown_int {
    var int2 = -1 as obj;
    var int3 = 0;
    var int4 = 0;
    var int5 = -1 as struct;
    var int6 = false;
    var int7 = 1;
    var int8 = 1;
    while ((int7 <= 10)) {
        int8 = 1;
        [int2, int3, int4, int5, int6] = script2517(int0, int7);
        if ((int2 != -1 as obj)) {
            if ((int2 == int1)) {
                return 1;
            };
        } else if ((int5 != -1 as struct)) {
            while ((int8 <= 15)) {
                [int2, int3, int4] = script2615(int5, int8);
                if ((int2 == int1)) {
                    return 1;
                };
                int8 = (int8 + 1);
            };
        } else {
            return 0;
        };
        int7 = (int7 + 1);
    };
    return -1;
}