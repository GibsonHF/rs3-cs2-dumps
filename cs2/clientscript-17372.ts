//
function script17372(int0: int, int1: unknown_int, long0: long): string {
    var int2 = 0;
    var long1 = long0;
    if (branch_lt_long[8](long0, 0n)) {
        var long0 = MULTIPLY_LONG(long0, -1n);
        long1 = long0;
        int2 = 1;
    };
    if (((MODULO(int0, 3) != 0) || (int0 > 15))) {
        script12478(`tostring_long_maxchars_localised was called with an invalid value: ${inttostring(int0, 10)}. Expected 3 / 6 / 9 / 12 / 15. Setting to 3.`);
        var int0 = 3;
    };
    var int3 = script17138(DIVIDE_LONG(long0, 1000000000n));
    var int4 = script17138(MODULO_LONG(long0, 1000000000n));
    var int5 = 0;
    if ((int3 > 0)) {
        int5 = (script17374(1000000000) + script17374(int3));
    } else {
        int5 = script17374(int4);
    };
    var int6 = 0;
    while ((int5 > int0)) {
        long0 = DIVIDE_LONG(long0, 1000n);
        int5 = (int5 - 3);
        int6 = (int6 + 1);
    };
    if ((int2 == 1)) {
        long0 = MULTIPLY_LONG(long0, -1n);
    };
    var string0 = "";
    switch (int6) {
        case 0: {
            string0 = TOSTRING_LOCALISED_LONG(long0, 1);
            break;
        }
        case 1: {
            string0 = `${TOSTRING_LOCALISED_LONG(long0, 1)}K`;
            break;
        }
        case 2: {
            string0 = `${TOSTRING_LOCALISED_LONG(long0, 1)}M`;
            break;
        }
        case 3: {
            string0 = `${TOSTRING_LOCALISED_LONG(long0, 1)}B`;
            break;
        }
        case 4: {
            string0 = `${TOSTRING_LOCALISED_LONG(long0, 1)}T`;
            break;
        }
        case 5: {
            string0 = `${TOSTRING_LOCALISED_LONG(long0, 1)}Q`;
            break;
        }
        default: {
            string0 = "Lots!";
            break;
        }
    };
    if ((int1 == 0)) {
        return string0;
    };
    stack(PUSH_CONSTANT_INT[16]("<col=", script17373(long1)));
    return `${stack()}${inttostring()}>${string0}</col>`;
}