//
function script9818(): void {
    if ((((varplayer_1784 == -1 as npc) || (varplayer_1784 == 0 as npc)) && (enum_getvalue(33, 32, 1320 as cs2enum, varplayer_1831) != 6988 as npc))) {
        varplayer_1784 = enum_getvalue(33, 32, 1320 as cs2enum, varplayer_1831);
    };
    IF_SETNPCHEAD(varplayer_1784, comp(662, 52));
    IF_SETMODELZOOM(2168, comp(662, 52));
    script15831();
    IF_SETMODELANIM(script15832(), comp(662, 52));
    IF_SETPOSITION(0, -1279, 1, 4, comp(662, 52));
    switch (script4157()) {
        case 5: {
            script13786();
            break;
        }
        case 1:
        case 2:
        case 3:
        case 4: {
            script15742();
            break;
        }
        case 6:
        case 7: {
            script15776();
            break;
        }
    };
    script12345(varplayer_1831);
    script11947();
    script2671();
    return;
}