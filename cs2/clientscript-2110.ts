//
function script2110(int0: quest): coordgrid {
    if ((int0 == -1 as quest)) {
        script12478("Null .quest.");
        return -1 as coordgrid;
    };
    return enum_getvalue(0, 22, 3617 as cs2enum, quest_getparam(int0, 9393));
}