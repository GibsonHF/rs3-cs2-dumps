//
function script5811(int0: struct, int1: unknown_int, int2: int): void {
    var string0 = struct_getparam(int0, 6511);
    if ((STRING_LENGTH(struct_getparam(int0, 6512)) > 0)) {
        switch (int1) {
            case 2: {
                if ((int2 > 0)) {
                    string0 = `${string0}${TOSTRING_LOCALISED(int2, 1)}${struct_getparam(int0, 6512)}`;
                };
                break;
            }
            case 3: {
                if ((int2 > 0)) {
                    string0 = `${string0}${TOSTRING_LOCALISED(int2, 1)}${struct_getparam(int0, 6512)}`;
                };
                break;
            }
        };
    };
    IF_SETTEXT(string0, comp(1866, 27));
    if ((STRING_LENGTH(struct_getparam(int0, 6513)) > 0)) {
        string0 = struct_getparam(int0, 6513);
        if ((STRING_LENGTH(struct_getparam(int0, 6514)) > 0)) {
            switch (int1) {
                case 2: {
                    if ((int2 > 0)) {
                        string0 = `${string0}${TOSTRING_LOCALISED(int2, 1)}${struct_getparam(int0, 6514)}`;
                    };
                    break;
                }
                case 3: {
                    if ((int2 > 0)) {
                        string0 = `${string0}${TOSTRING_LOCALISED(int2, 1)}${struct_getparam(int0, 6514)}`;
                    };
                    break;
                }
            };
        };
    };
    IF_SETTEXT(string0, comp(1866, 80));
    return;
}