//
function script12658(int0: struct, int1: struct, int2: int, int3: int, int4: unknown_int): string {
    if (((int1 != -1 as struct) && (STRING_LENGTH(struct_getparam(int1, 8685)) > 0))) {
        return struct_getparam(int1, 8685);
    };
    var string0 = struct_getparam(int0, 7761);
    var string1 = script17844(int0, 3);
    var string2 = script17844(int0, 4);
    if ((struct_getparam(int0, 7760) > 0)) {
        var int2 = (int2 / struct_getparam(int0, 7760));
    };
    if ((int2 == 1)) {
        if ((int3 == 1)) {
            if ((int4 == 1)) {
                return `${script11478(int2)}${string0} ${string1} and ${script11478(int3)} ${struct_getparam(int0, 5876)}`;
            };
            return `${script11478(int2)}${string0}<br>${string1}<br>${script11478(int3)}<br>${struct_getparam(int0, 5876)}`;
        };
        if ((int3 > 0)) {
            if ((int4 == 1)) {
                return `${script11478(int2)}${string0} ${string1} and ${script11478(int3)} ${struct_getparam(int0, 5873)}`;
            };
            return `${script11478(int2)}${string0}<br>${string1}<br>${script11478(int3)}<br>${struct_getparam(int0, 5873)}`;
        };
        if ((int4 == 1)) {
            return `${script11478(int2)}${string0} ${string1}`;
        };
        return `${script11478(int2)}${string0}<br>${string1}`;
    };
    if ((int2 > 0)) {
        if ((int3 == 1)) {
            if ((int4 == 1)) {
                return `${script11478(int2)}${string0} ${string2} and ${script11478(int3)} ${struct_getparam(int0, 5876)}`;
            };
            return `${script11478(int2)}${string0}<br>${string2}<br>${script11478(int3)}<br>${struct_getparam(int0, 5876)}`;
        };
        if ((int3 > 0)) {
            if ((int4 == 1)) {
                return `${script11478(int2)}${string0} ${string2} and ${script11478(int3)} ${struct_getparam(int0, 5873)}`;
            };
            return `${script11478(int2)}${string0}<br>${string2}<br>${script11478(int3)}<br>${struct_getparam(int0, 5873)}`;
        };
        if ((int4 == 1)) {
            return `${script11478(int2)}${string0} ${string2}`;
        };
        return `${script11478(int2)}${string0}<br>${string2}`;
    };
    if ((int3 == 1)) {
        if ((int4 == 1)) {
            return `${script11478(int3)} ${struct_getparam(int0, 5876)}`;
        };
        return `${script11478(int3)}<br>${struct_getparam(int0, 5876)}`;
    };
    if ((int3 > 0)) {
        if ((int4 == 1)) {
            return `${script11478(int3)} ${struct_getparam(int0, 5873)}`;
        };
        return `${script11478(int3)}<br>${struct_getparam(int0, 5873)}`;
    };
    if ((int4 == 1)) {
        return "Nothing!";
    };
    return "Free!";
}