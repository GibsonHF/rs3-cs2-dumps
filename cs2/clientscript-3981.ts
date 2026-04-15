//
function script3981(): int {
    var int0 = (ENUM_GETOUTPUTCOUNT(2252 as cs2enum) + 8);
    if ((enum_getvalue(0, 3, 2252 as cs2enum, int0) == -1 as quest)) {
        script12478(`Latest quest ID calculated as ${inttostring(int0, 10)}. That's not valid. Update [proc,quest_max]`);
    };
    return int0;
}