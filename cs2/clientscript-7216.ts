//
function script7216(int0: struct, int1: quest, int2: achievement): string {
    if ((((int0 == -1 as struct) && (int1 == -1 as quest)) && (int2 == -1 as achievement))) {
        return "";
    };
    var string0 = "";
    if ((int1 != -1 as quest)) {
        return script2103(int1);
    };
    if ((int2 != -1 as achievement)) {
        return ACHIEVEMENT_GETNAME(int2);
    };
    if ((int0 != -1 as struct)) {
        if ((struct_getparam(int0, 4253) != -1 as struct)) {
            var int0 = struct_getparam(int0, 4253);
        };
        if ((int0 == 11585 as struct)) {
            return script16090();
        };
        if ((struct_getparam(int0, 2235) > 0)) {
            return script17039(int0);
        };
        string0 = script13284(int0);
        if (((STRING_LENGTH(string0) == 0) && (STRING_LENGTH(struct_getparam(int0, 1266)) > 0))) {
            string0 = struct_getparam(int0, 1266);
        };
    };
    return string0;
}