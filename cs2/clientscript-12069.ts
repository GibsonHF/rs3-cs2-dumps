//
function script12069(int0: int, int1: unknown_int): string {
    var int2 = (int0 / 3000);
    if ((int1 == 0)) {
        return TOSTRING_LOCALISED(int2, 1);
    };
    var string0 = "";
    var int3 = (MODULO(int0, 3000) / 3);
    switch (int1) {
        case 1: {
            int3 = (int3 / 100);
            break;
        }
        case 2: {
            int3 = (int3 / 10);
            if ((int3 < 10)) {
                string0 = "0";
            };
            break;
        }
        case 3: {
            if ((int3 < 10)) {
                string0 = "00";
            } else if ((int3 < 100)) {
                string0 = "0";
            };
            break;
        }
        default: {
            return TOSTRING_LOCALISED(int2, 1);
        }
    };
    return `${TOSTRING_LOCALISED(int2, 1)}${script8002()}${string0}${inttostring(int3, 10)}`;
}