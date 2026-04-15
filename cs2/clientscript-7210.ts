//[proc,string_to_int]
function script7210(string0: string): int {
    var string0 = script17397(string0);
    var int0 = STRING_LENGTH(string0);
    var int1 = 0;
    var int2 = 0;
    var int3 = 0;
    while ((int3 < int0)) {
        int1 = STRING_INDEXOF_STRING("0123456789", SUBSTRING(string0, int3, (1 + int3)), 0);
        int2 = (int2 + (int1 * POW(10, ((int0 - 1) - int3))));
        int3 = (int3 + 1);
    };
    return int2;
}