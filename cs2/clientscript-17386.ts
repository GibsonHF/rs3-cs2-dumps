//
function script17386(int0: obj, int1: obj, int2: obj): [obj, obj] {
    if ((script17378(int0) == 1)) {
        if ((script17378(int1) == 1)) {
            if ((script17378(int2) == 1)) {
                var int1 = -1 as obj;
            } else {
                int1 = int2;
            };
        } else if (((int1 == -1 as obj) && (script17378(int2) == 0))) {
            int1 = int2;
        };
    } else if (((int1 == -1 as obj) && (script17378(int2) == 0))) {
        int1 = int2;
    };
    return [int0, int1];
}