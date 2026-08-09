//
function script3569(int0: number, int1: number): number {
    var int2 = 1;
    var int3 = 0;
    var int4 = -1;
    var int5 = 0;
    var int6 = 0;
    var int7 = -1;
    var int8 = 0;
    while ((int2 <= 10)) {
        [int4, int6, int5, int7, int8] = script2517(int0, int2);
        if ((int4 != -1)) {
            if ((int5 > 0)) {
                if ((script3570(int4, int1) == 1)) {
                    int3 = (int3 + int5);
                };
            } else if ((int7 != -1)) {
                [int4, int6, int5] = script2615(int7, 1);
                if ((((int4 != -1) && (int5 > 0)) && (script3570(int4, int1) == 1))) {
                    int3 = (int3 + int5);
                };
            } else {
                return int3;
            };
        } else if ((int7 != -1)) {
            [int4, int6, int5] = script2615(int7, 1);
            if ((((int4 != -1) && (int5 > 0)) && (script3570(int4, int1) == 1))) {
                int3 = (int3 + int5);
            };
        } else {
            return int3;
        };
        int2 = (int2 + 1);
    };
    return int3;
}