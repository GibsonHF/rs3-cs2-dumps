//
function script16049(int0: struct): string {
    if ((int0 == -1 as struct)) {
        return "null";
    };
    var int1 = struct_getparam(int0, 7438);
    var int2 = struct_getparam(int0, 8365);
    if (((int1 == -1 as cs2enum) || (int2 == -1 as cs2enum))) {
        return "null";
    };
    var int3 = -1;
    var int4 = ENUM_GETOUTPUTCOUNT(int1);
    var string0 = "";
    var string1 = "";
    while ((++int3 < int4)) {
        string1 = script16050(int1, int2, int3);
        string0 = `${string0}${string1}`;
    };
    return string0;
}