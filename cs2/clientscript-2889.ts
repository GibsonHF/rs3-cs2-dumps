//
function script2889(): void {
    var int0 = enum_getvalue(0, 32, 927 as cs2enum, varbitplayer_5656);
    var int1 = -1;
    var int2 = -1;
    if ((int0 != -1 as npc)) {
        if ((npc_getparam(int0, 956) != -1 as npc)) {
            IF_SETMODEL(enum_getvalue(32, 31, 934 as cs2enum, npc_getparam(int0, 956)), comp(476, 45));
            IF_SETMODELANIM(enum_getvalue(32, 6, 935 as cs2enum, npc_getparam(int0, 956)), comp(476, 45));
            stack(enum_getvalue(32, 23, 932 as cs2enum, npc_getparam(int0, 956)));
            stack(31195185);
            IF_SETGRAPHIC();
            stack(32);
            stack(36);
            stack(930);
            stack(int0);
            stack(956);
            npc_getparam();
            enum_getvalue();
            IF_SETTEXT(stack(), 31195188);
        };
        if ((npc_getparam(int0, 957) != -1 as npc)) {
            IF_SETMODEL(enum_getvalue(32, 31, 934 as cs2enum, npc_getparam(int0, 957)), comp(476, 46));
            IF_SETMODELANIM(enum_getvalue(32, 6, 935 as cs2enum, npc_getparam(int0, 957)), comp(476, 46));
            stack(enum_getvalue(32, 23, 932 as cs2enum, npc_getparam(int0, 957)));
            stack(31195186);
            IF_SETGRAPHIC();
            stack(32);
            stack(36);
            stack(930);
            stack(int0);
            stack(957);
            npc_getparam();
            enum_getvalue();
            IF_SETTEXT(stack(), 31195189);
        };
        stack(enum_getvalue(32, 23, 933 as cs2enum, int0));
        stack(31195184);
        IF_SETGRAPHIC();
        stack(32);
        stack(31);
        stack(934);
        stack(int0);
        enum_getvalue();
        IF_SETMODEL(stack(), 31195180);
        stack(32);
        stack(6);
        stack(935);
        stack(int0);
        enum_getvalue();
        IF_SETMODELANIM(stack(), 31195180);
    };
    return;
}