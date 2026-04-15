//
function script3560(int0: component): void {
    var int1 = 0;
    var int2 = comp(-1, 65535);
    var int3 = -1 as struct;
    if (((IF_FIND(int0) == 1) && (cc_getparam(8102) == true))) {
        MES_TYPED(99, 0, "Inactive list.");
        int2 = cc_getparam(8101);
        while ((IF_FIND[1](int2) == 1)) {
            if ((++int1 > 50)) {
                return;
            };
            if ((cc_getparam[1](8102) == false)) {
                int3 = cc_getparam[1](8106);
                if ((int3 != -1 as struct)) {
                    MES_TYPED(99, 0, `${inttostring(int1, 10)} - ${struct_getparam(int3, 2794)}`);
                } else {
                    MES_TYPED(99, 0, `${inttostring(int1, 10)} - null`);
                };
            };
            int2 = cc_getparam[1](8105);
        };
        int1 = 0;
        MES_TYPED(99, 0, "Active list.");
        int2 = cc_getparam(8100);
        while ((IF_FIND[1](int2) == 1)) {
            if ((++int1 > 50)) {
                return;
            };
            if ((cc_getparam[1](8102) == false)) {
                int3 = cc_getparam[1](8106);
                if ((int3 != -1 as struct)) {
                    MES_TYPED(99, 0, `${inttostring(int1, 10)} - ${struct_getparam(int3, 2794)}`);
                } else {
                    MES_TYPED(99, 0, `${inttostring(int1, 10)} - null`);
                };
            };
            int2 = cc_getparam[1](8105);
        };
    };
    return;
}