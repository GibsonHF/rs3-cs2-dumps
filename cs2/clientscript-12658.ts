//
function script12658(int0: struct, int1: struct, int2: int, int3: int, int4: boolean, int5: unknown_int): string {
    if (((int1 != -1 as struct) && (STRING_LENGTH(struct_getparam(int1, 8685)) > 0))) {
        return struct_getparam(int1, 8685);
    };
    var string0 = struct_getparam(int0, 7761);
    var string1 = script17844(int0, 3);
    var string2 = script17844(int0, 4);
    var string3 = "";
    var string4 = "";
    if ((int5 == 1)) {
        string3 = script17844(int0, 7);
        string4 = script17844(int0, 8);
        if ((STRING_LENGTH(string3) > 0)) {
            string1 = string3;
        };
        if ((STRING_LENGTH(string4) > 0)) {
            string2 = string4;
        };
    };
    if ((struct_getparam(int0, 7760) > 0)) {
        var int2 = (int2 / struct_getparam(int0, 7760));
    };
    var string5 = "0";
    var string6 = "0";
    if (((int4 == true) && (struct_getparam(int0, 1445) == true))) {
        string5 = TOSTRING_LOCALISED(int2, 1);
        if ((int3 > 0)) {
            string6 = TOSTRING_LOCALISED(int3, 1);
        };
    } else {
        string5 = script11478(int2);
        if ((int3 > 0)) {
            string6 = script11478(int3);
        };
    };
    if ((int2 == 1)) {
        if ((int3 == 1)) {
            if ((int4 == true)) {
                return `${string5}${string0} ${string1} and ${string6} ${struct_getparam(int0, 5876)}`;
            };
            return `${string5}${string0}<br>${string1}<br>${string6}<br>${struct_getparam(int0, 5876)}`;
        };
        if ((int3 > 0)) {
            if ((int4 == true)) {
                return `${string5}${string0} ${string1} and ${string6} ${struct_getparam(int0, 5873)}`;
            };
            return `${string5}${string0}<br>${string1}<br>${string6}<br>${struct_getparam(int0, 5873)}`;
        };
        if ((int4 == true)) {
            return `${string5}${string0} ${string1}`;
        };
        return `${string5}${string0}<br>${string1}`;
    };
    if ((int2 > 0)) {
        if ((int3 == 1)) {
            if ((int4 == true)) {
                return `${string5}${string0} ${string2} and ${string6} ${struct_getparam(int0, 5876)}`;
            };
            return `${string5}${string0}<br>${string2}<br>${string6}<br>${struct_getparam(int0, 5876)}`;
        };
        if ((int3 > 0)) {
            if ((int4 == true)) {
                return `${string5}${string0} ${string2} and ${string6} ${struct_getparam(int0, 5873)}`;
            };
            return `${string5}${string0}<br>${string2}<br>${string6}<br>${struct_getparam(int0, 5873)}`;
        };
        if ((int4 == true)) {
            return `${string5}${string0} ${string2}`;
        };
        return `${string5}${string0}<br>${string2}`;
    };
    if ((int3 == 1)) {
        if ((int4 == true)) {
            return `${string6} ${struct_getparam(int0, 5876)}`;
        };
        return `${string6}<br>${struct_getparam(int0, 5876)}`;
    };
    if ((int3 > 0)) {
        if ((int4 == true)) {
            return `${string6} ${struct_getparam(int0, 5873)}`;
        };
        return `${string6}<br>${struct_getparam(int0, 5873)}`;
    };
    if ((int4 == true)) {
        return "Nothing!";
    };
    return "Free!";
}