//
function script20412(int0: quest): string {
    if ((int0 == -1 as quest)) {
        script12478("Null .quest.");
        return "null";
    };
    return enum_getvalue(0, 36, 9686 as cs2enum, quest_getparam(int0, 9393));
}