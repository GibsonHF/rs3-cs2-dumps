//
function script13337(int0: struct): string {
    var int1 = -1 as struct;
    var int2 = -1 as dbrow;
    switch (int0) {
        case 11567:
        case 11568:
        case 11569:
        case 11559:
        case 11560:
        case 11561: {
            int1 = script14441();
            if (((int1 != -1 as struct) && (struct_getparam(int0, 4448) > 0))) {
                return `${struct_getparam(int1, 6141)} x ${TOSTRING_LOCALISED(struct_getparam(int0, 4448), 1)}`;
            };
            int2 = script15143();
            if (((int2 != -1 as dbrow) && (script15145(int2) != -1 as obj))) {
                return `${OC_NAME(script15145(int2))} x ${TOSTRING_LOCALISED(struct_getparam(int0, 4448), 1)}`;
            };
            break;
        }
        case 49811: {
            return `${inttostring(script18944(), 10)} Credits`;
        }
        case 40302: {
            return `${inttostring(script18942(), 10)} ${OC_NAME(56018 as obj)}`;
        }
    };
    var string0 = struct_getparam(int0, 4849);
    var int3 = struct_getparam(int0, 4851);
    if ((STRING_LENGTH(string0) == 0)) {
        if ((int3 != -1 as obj)) {
            string0 = OC_NAME(int3);
        } else {
            string0 = "null";
        };
    };
    return string0;
}