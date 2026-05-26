//
function script14412(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number): [number, number] {
    var int6 = struct_getparam(int2, 4405);
    if ((int6 != -1 as struct)) {
        var int2 = int6;
    };
    var int7 = 1;
    var int8 = -1 as struct;
    if ((int5 == 1)) {
        int8 = script9984(int2, 3);
        int7 = 3;
    } else if ((int3 == 1)) {
        int8 = script9984(int2, 4);
        int7 = 4;
    } else if ((int4 == 1)) {
        int8 = script9984(int2, 5);
        int7 = 5;
    } else if ((script12838(int0, int1) == 1)) {
        int8 = script9984(int2, 2);
        int7 = 2;
    } else {
        int8 = script9984(int2, 1);
        int7 = 1;
    };
    if (((int8 == -1 as struct) && (struct_getparam(int2, 3915) > 0))) {
        int8 = int2;
    };
    return [int8, int7];
}