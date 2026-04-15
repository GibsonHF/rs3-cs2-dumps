//
function script12095(int0: struct): string {
    var string0 = struct_getparam(int0, 2210);
    if ((STRING_LENGTH(string0) > 0)) {
        return string0;
    };
    if ((struct_getparam(int0, 2213) != -1 as obj)) {
        string0 = OC_NAME(struct_getparam(int0, 2213));
    };
    var int1 = struct_getparam(int0, 6569);
    var int2 = struct_getparam(int0, 8877);
    if ((int1 != -1 as dbrow)) {
        switch (DB_GETROWTABLE(int1)) {
            case 5: {
                switch (dbrow_getfield(int1, 20592, 0)) {
                    case 2: {
                        string0 = "Device: ";
                        break;
                    }
                    case 1: {
                        string0 = "Material: ";
                        break;
                    }
                    case 0: {
                        string0 = "Research: ";
                        break;
                    }
                };
                if ((STRING_LENGTH(struct_getparam(int0, 2210)) > 0)) {
                    string0 = `${string0}${struct_getparam(int0, 2210)}`;
                } else {
                    string0 = `${string0}${dbrow_getfield(int1, 20496, 0)}`;
                };
                break;
            }
            case 86: {
                switch (dbrow_getfield(int1, 352272, 0)) {
                    case 1: {
                        string0 = "Dig Site: ";
                        break;
                    }
                    case 2: {
                        string0 = "Excavation Site: ";
                        break;
                    }
                };
                string0 = `${string0}${dbrow_getfield(int1, 352288, 0)}`;
                break;
            }
            case 88: {
                if ((dbrow_getfield(int1, 360464, 0) != 2)) {
                    string0 = script14578(int1);
                };
                break;
            }
            case 94: {
                string0 = OC_NAME(dbrow_getfield(int1, 385168, 0));
                break;
            }
            case 235: {
                string0 = `Ritual: ${dbrow_getfield(int1, 962560, 0)}`;
                break;
            }
        };
    } else if ((int2 != -1 as struct)) {
        if ((struct_getparam(int2, 2799) == 6)) {
            return `Passive: ${struct_getparam(int2, 2794)}`;
        };
        if ((struct_getparam(int2, 2793) > 0)) {
            if (((struct_getparam(int2, 2806) == 29) && (struct_getparam(int2, 5542) != 11))) {
                return `Incantation: ${struct_getparam(int2, 2794)}`;
            };
            return `Ability: ${struct_getparam(int2, 2794)}`;
        };
    };
    return string0;
}