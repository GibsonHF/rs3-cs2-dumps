//
function script2889(): void {
    var int0 = enum_getvalue(0, 32, 927 as cs2enum, varbitplayer_5656);
    var int1 = -1;
    var int2 = -1;
    if ((int0 != -1 as npc)) {
        if ((npc_getparam(int0, 956) != -1 as npc)) {
            IF_SETMODEL(enum_getvalue(32, 31, 934 as cs2enum, npc_getparam(int0, 956)), 31195181);
            IF_SETMODELANIM(enum_getvalue(32, 6, 935 as cs2enum, npc_getparam(int0, 956)), 31195181);
            IF_SETGRAPHIC(enum_getvalue(32, 23, 932 as cs2enum, npc_getparam(int0, 956)), 31195185);
            IF_SETTEXT(enum_getvalue(32, 36, 930 as cs2enum, npc_getparam(int0, 956)), 31195188);
        };
        if ((npc_getparam(int0, 957) != -1 as npc)) {
            IF_SETMODEL(enum_getvalue(32, 31, 934 as cs2enum, npc_getparam(int0, 957)), 31195182);
            IF_SETMODELANIM(enum_getvalue(32, 6, 935 as cs2enum, npc_getparam(int0, 957)), 31195182);
            IF_SETGRAPHIC(enum_getvalue(32, 23, 932 as cs2enum, npc_getparam(int0, 957)), 31195186);
            IF_SETTEXT(enum_getvalue(32, 36, 930 as cs2enum, npc_getparam(int0, 957)), 31195189);
        };
        IF_SETGRAPHIC(enum_getvalue(32, 23, 933 as cs2enum, int0), 31195184);
        IF_SETMODEL(enum_getvalue(32, 31, 934 as cs2enum, int0), 31195180);
        IF_SETMODELANIM(enum_getvalue(32, 6, 935 as cs2enum, int0), 31195180);
    };
    return;
}