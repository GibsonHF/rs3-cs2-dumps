//
function script13176(): void {
    var int0 = -1;
    var int1 = -1;
    var int2 = -1;
    var int3 = -1;
    var int4 = -1;
    var string0 = "";
    [int0, int1, int2, int3, int4, string0] = script18191();
    var int5 = script18208(int0, int1, int2, int3, int4, string0);
    var int6 = 0;
    switch (varbitclient_35141) {
        case 0: {
            int6 = CC_SETPARAM_STRING(int5, 667680, 1, -1, 0);
            script18192(int6, int0, int1, int2, int3, int4, string0);
            break;
        }
        case 1: {
            int6 = CC_SETPARAM_STRING(int5, 667680, 0, -1, 0);
            script18192(int6, int0, int1, int2, int3, int4, string0);
            break;
        }
        case 2: {
            int6 = CC_SETPARAM_STRING(int5, 668016, 0, -1, 0);
            script18192(int6, int0, int1, int2, int3, int4, string0);
            break;
        }
        case 3: {
            int6 = CC_SETPARAM_STRING(int5, 668016, 1, -1, 0);
            script18192(int6, int0, int1, int2, int3, int4, string0);
            break;
        }
        default: {
            script12478(`Unexpected value of %mtxmgt_store_sort_mode: ${inttostring(varbitclient_35141, 10)}, defaulting to alphabetical.`);
            int6 = CC_SETPARAM_STRING(int5, 667680, 1, -1, 0);
            script18192(int6, int0, int1, int2, int3, int4, string0);
            break;
        }
    };
    return;
}