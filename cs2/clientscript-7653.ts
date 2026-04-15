//
function script7653(int0: int, int1: int, int2: int, int3: unknown_int, int4: unknown_int): string {
    if ((int0 == 0)) {
        return "0";
    };
    if ((int1 == 0)) {
        return TOSTRING_LOCALISED(int0, 1);
    };
    var int5 = 0;
    var int6 = 0;
    var int7 = 0;
    var int2 = MIN(int2, int1);
    if ((int1 > int2)) {
        if (((int3 == 0) || (int3 == 2))) {
            int7 = POW(10, (int1 - int2));
            var int0 = (int0 / int7);
            var int1 = int2;
        } else {
            int7 = POW(10, ((int1 - int2) - 1));
            if ((int0 > 0)) {
                if ((MODULO((int0 / int7), 10) >= 5)) {
                    int0 = (int0 + (10 * int7));
                };
            } else if ((MODULO((int0 / int7), 10) <= -5)) {
                int0 = (int0 - (10 * int7));
            };
            int0 = (int0 / (int7 * 10));
            int1 = int2;
        };
    };
    if (((int3 != 2) && (int3 != 3))) {
        while (((int1 > 0) && (MODULO(int0, 10) == 0))) {
            int1 = (int1 - 1);
            int0 = (int0 / 10);
        };
    };
    [int5, int6] = script362(int0, int1);
    var string0 = "";
    var int8 = 0;
    int7 = int6;
    if ((int1 > 0)) {
        if (((int3 != 2) && (int3 != 3))) {
            if ((int6 != 0)) {
                while ((int7 > 0)) {
                    int7 = (int7 / 10);
                    int8 = (int8 + 1);
                };
                int8 = (int1 - int8);
                while ((int8 > 0)) {
                    string0 = strconcat(string0, "0");
                    int8 = (int8 - 1);
                };
            };
        } else {
            if ((int6 == 0)) {
                int8 = (int8 + 1);
            } else {
                while ((int7 > 0)) {
                    int7 = (int7 / 10);
                    int8 = (int8 + 1);
                };
            };
            int8 = (int1 - int8);
            while ((int8 > 0)) {
                string0 = strconcat(string0, "0");
                int8 = (int8 - 1);
            };
        };
    };
    if (((int4 == 1) && (int6 == 0))) {
        return TOSTRING_LOCALISED(int5, 1);
    };
    return `${TOSTRING_LOCALISED(int5, 1)}${script8002()}${string0}${inttostring(int6, 10)}`;
}