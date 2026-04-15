//
function script2148(int0: int, int1: int): unknown_int {
    var int2 = enum_getvalue(0, 73, 169 as cs2enum, int0);
    if ((int2 == -1 as struct)) {
        script12478(`null struct value from $item_type=${inttostring(int0, 10)} $id=${inttostring(int1, 10)}.`);
        return 0;
    };
    var int3 = enum_getvalue(0, 3, struct_getparam(int2, 61), int1);
    if ((int3 == -1 as quest)) {
        script12478(`null quest value from $item_type=${inttostring(int0, 10)} $id=${inttostring(int1, 10)}.`);
        return 0;
    };
    varclient_698 = script1432();
    return script2149(int3);
}