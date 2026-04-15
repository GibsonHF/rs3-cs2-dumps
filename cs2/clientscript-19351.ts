//
function script19351(int0: inv, int1: int, int2: component, int3: int): void {
    var int4 = script19588(int0, int1);
    var int5 = script19589(int0, int1);
    if (((int4 == -1 as obj) || (int5 <= 0))) {
        return;
    };
    var int6 = OC_UNCERT(int4);
    var int7 = -1 as obj;
    var int8 = 0;
    var int9 = 0;
    switch (int2) {
        case 86048858: {
            int8 = script19581(int0, int6);
            if ((int8 != -1)) {
                var int3 = int8;
            };
            script19345(int4, int6, int8, int5, int3, int0, int1, 1, 1);
            return;
        }
        case 86048843: {
            int8 = script19581(int0, int6);
            if ((int8 != -1)) {
                script19345(int4, int6, int8, int5, int8, int0, int1, 1, 1);
                return;
            };
            int7 = script19586(int3);
            if ((int7 == -1 as obj)) {
                script19345(int4, int6, int8, int5, int3, int0, int1, 1, 1);
                return;
            };
            script19366(int3, int0, int1, int1, 0);
            return;
        }
        case 86048846:
        case 86048847: {
            int8 = script19581(int0, int6);
            if (((script3802(int4) == false) && (int8 != -1))) {
                script19345(int4, int6, int8, int5, int8, int0, int1, 1, 0);
                return;
            };
            int3 = script19579();
            script19345(int4, int6, int8, int5, int3, int0, int1, 1, 1);
            break;
        }
        default: {
            return;
        }
    };
    return;
}