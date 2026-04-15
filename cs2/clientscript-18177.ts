//
function script18177(int0: int, int1: int, int2: int, int3: int, int4: int): void {
    var string0 = "";
    if ((IF_FIND(comp(1843, 183)) == 1)) {
        string0 = cc_getparam(5441);
    };
    var int5 = script18176(int0, int1, int2, int3, int4, string0);
    var int6 = 0;
    switch (varbitclient_35141) {
        case 0: {
            int6 = CC_SETPARAM_STRING(int5, 667680, 1, -1, 0);
            script18178(int6);
            break;
        }
        case 1: {
            int6 = CC_SETPARAM_STRING(int5, 667680, 0, -1, 0);
            script18178(int6);
            break;
        }
        case 2: {
            int6 = CC_SETPARAM_STRING(int5, 668016, 0, -1, 0);
            script18178(int6);
            break;
        }
        case 3: {
            int6 = CC_SETPARAM_STRING(int5, 668016, 1, -1, 0);
            script18178(int6);
            break;
        }
        default: {
            script12478(`Unexpected value of %mtxmgt_store_sort_mode: ${inttostring(varbitclient_35141, 10)}`);
            return;
        }
    };
    return;
}