//
function script3573(int0: obj): int {
    if ((int0 == -1 as obj)) {
        return 0;
    };
    var int1 = 1;
    var int2 = -1 as obj;
    var int3 = 0;
    var int4 = -1 as struct;
    var int5 = false;
    while ((int1 <= 10)) {
        [int2, int3, int3, int4, int5] = script2517(int0, int1);
        if (((int2 == -1 as obj) && (int4 == -1 as struct))) {
            return (int1 - 1);
        };
        int1 = (int1 + 1);
    };
    return (int1 - 1);
}