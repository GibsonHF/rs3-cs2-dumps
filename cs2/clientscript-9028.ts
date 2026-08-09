//
function script9028(int0: number, int1: number, int2: number): string {
    if ((((int0 == -1) && (int1 == -1)) && (int2 == -1))) {
        return "";
    };
    var string0 = "";
    if ((int1 != -1)) {
        return quest_getparam(int1, 5968);
    };
    if ((int2 != -1)) {
        return script15321(int2);
    };
    if ((int0 != -1)) {
        if ((struct_getparam(int0, 4253) != -1 as struct)) {
            var int0 = struct_getparam(int0, 4253);
        };
        if ((int0 == 11585)) {
            int0 = script16091();
            if ((((int0 != -1) && (varplayer_183 > 0)) && (STRING_LENGTH(struct_getparam(int0, 462)) > 0))) {
                return struct_getparam(int0, 462);
            };
        } else if ((struct_getparam(int0, 1345) > 0)) {
            var int1 = enum_getvalue(0, 3, 2252, struct_getparam(int0, 1345));
            if ((int1 != -1)) {
                return quest_getparam(int1, 5968);
            };
        } else if (((struct_getparam(int0, 1346) > 0) && (STRING_LENGTH(struct_getparam(int0, 6411)) > 0))) {
            return struct_getparam(int0, 6411);
        };
        if ((STRING_LENGTH(struct_getparam(int0, 3631)) > 0)) {
            return struct_getparam(int0, 3631);
        };
        string0 = script13285(int0, 0);
        if (((STRING_LENGTH(string0) == 0) && (STRING_LENGTH(struct_getparam(int0, 1273)) > 0))) {
            string0 = struct_getparam(int0, 1273);
        };
        if ((struct_getparam(int0, 2235) > 0)) {
            string0 = `${string0}.`;
        };
    };
    return string0;
}