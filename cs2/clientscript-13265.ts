//
function script13265(int0: number): [number, number, number] {
    var int1 = -1 as obj;
    var int2 = -1;
    var int3 = -1 as struct;
    var int4 = -1;
    if ((int0 != -1 as obj)) {
        int1 = item_getparam(int0, 6405);
        if ((int1 == -1 as obj)) {
            int1 = int0;
        };
        int3 = item_getparam(int1, 4414);
        if (((int3 != -1 as struct) && (struct_getparam(int3, 2531) == 2))) {
            int4 = struct_getparam(int3, 2532);
            if (((script13085(818, int4) == 1) || (int4 == 20))) {
                if ((int1 == int0)) {
                    var int0 = -1 as obj;
                } else {
                    int2 = 819;
                };
            };
        };
    };
    return [int0, int1, int2];
}