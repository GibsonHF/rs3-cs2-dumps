//
function script15882(int0: int): struct {
    var int1 = ENUM_GETOUTPUTCOUNT(10680 as cs2enum);
    if (((int0 < 0) || (int0 > int1))) {
        script12478(`$filter_id = ${inttostring(int0, 10)} was out of range. | $max=${inttostring(int1, 10)}`);
        return -1 as struct;
    };
    define_array(int1);
    var int2 = script753(0, int1, varplayer_9902);
    if ((int2 == 0)) {
        script12478(`No filters where found for Channel ${inttostring(varplayer_9902, 10)} (${enum_getvalue(0, 36, 10679 as cs2enum, varplayer_9902)})`);
        return -1 as struct;
    };
    var int3 = enum_getvalue(0, 73, 10680 as cs2enum, push_array(int0));
    if ((int3 == -1 as struct)) {
        script12478(`Unable to find a struct from enum. Channel ID: ${inttostring(varplayer_9902, 10)} | Array consists of ${inttostring(int2, 10)} elements | looking for ID: ${inttostring(int0, 10)}`);
        return -1 as struct;
    };
    return int3;
}