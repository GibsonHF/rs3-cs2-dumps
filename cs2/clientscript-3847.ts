//
function script3847(int0: obj, int1: obj, int2: obj, int3: inv): unknown_int {
    var int4 = 2;
    var int5 = 0;
    if ((int3 == 95 as inv)) {
        int5 = script5774();
    } else {
        int5 = INV_FREESPACE(int3);
    };
    var int6 = 0;
    if ((int0 != -1 as obj)) {
        int6 = INV_TOTAL(int3, int0);
        if (((2147483647 - int6) < INV_TOTAL(94 as inv, int0))) {
            return 0;
        };
        if (((int3 == 95 as inv) && (script3802(int0) == false))) {
        } else if ((((int3 != 95 as inv) && (OC_STACKABLE(int0) == 1)) && (int6 > 0))) {
            int4 = (int4 - 1);
        };
    } else {
        int4 = (int4 - 1);
    };
    if ((int1 != -1 as obj)) {
        int6 = INV_TOTAL(int3, int1);
        if (((2147483647 - int6) < INV_TOTAL(94 as inv, int1))) {
            return 0;
        };
        if (((int3 == 95 as inv) && (script3802(int1) == false))) {
        } else if ((((int3 != 95 as inv) && (OC_STACKABLE(int1) == 1)) && (int6 > 0))) {
            int4 = (int4 - 1);
        };
    } else {
        int4 = (int4 - 1);
    };
    if ((int4 > 0)) {
        if ((int2 != -1 as obj)) {
            int6 = INV_TOTAL(int3, int2);
            if ((OC_STACKABLE(int2) == 1)) {
                if ((INV_TOTAL(94 as inv, int2) > 0)) {
                    int4 = (int4 - 1);
                };
                if (((2147483647 - int6) >= INV_TOTAL(94 as inv, int2))) {
                    int5 = (int5 + 1);
                };
            } else if ((((int3 != 95 as inv) || (int6 == 1)) || (script3802(int2) == true))) {
                int5 = (int5 + 1);
            };
        } else {
            int4 = (int4 - 1);
        };
        if ((int4 > int5)) {
            return 0;
        };
    };
    return 1;
}