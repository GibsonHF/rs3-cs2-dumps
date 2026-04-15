//
function script3558(int0: component): unknown_int {
    var int1 = 0;
    var int2 = comp(-1, 65535);
    if (((IF_FIND(int0) == 1) && (cc_getparam(8102) == true))) {
        int2 = cc_getparam(8101);
        while ((IF_FIND[1](int2) == 1)) {
            if ((++int1 > 50)) {
                MES_TYPED(99, 0, "CIRCULAR LOOP FOUND IN IN-ACTIVE LIST!!");
                script3560(int0);
                return 1;
            };
            int2 = cc_getparam[1](8105);
        };
        int1 = 0;
        int2 = cc_getparam(8100);
        while ((IF_FIND[1](int2) == 1)) {
            if ((++int1 > 50)) {
                MES_TYPED(99, 0, "CIRCULAR LOOP FOUND IN ACTIVE LIST!!");
                script3560(int0);
                return 1;
            };
            int2 = cc_getparam[1](8105);
        };
    };
    return 0;
}