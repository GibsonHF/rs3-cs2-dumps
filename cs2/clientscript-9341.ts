//
function script9341(): void {
    var int0 = comp(209, 18);
    var int1 = comp(209, 19);
    var int2 = comp(209, 20);
    CC_DELETEALL(comp(209, 22));
    CC_DELETEALL(comp(209, 23));
    IF_SETHIDE(true, comp(209, 23));
    if ((varplayer_7123 == 0)) {
        IF_SETTEXT("No path selected...", int0);
        IF_SETTEXT("Please choose a recommended path.", int1);
        IF_SETTEXT("", int2);
        script13993(comp(209, 22), comp(209, 23), 28556 as struct, "Show More");
        return;
    };
    var int3 = enum_getvalue(0, 73, script8221(), varplayer_7123);
    IF_SETTEXT(struct_getparam(int3, 8073), int0);
    IF_SETTEXT(struct_getparam(int3, 6969), int1);
    var int4 = struct_getparam(int3, 8072);
    var int5 = ENUM_GETOUTPUTCOUNT(int4);
    var int6 = 0;
    var int7 = 0;
    var int8 = 0;
    while ((int6 < int5)) {
        if ((script13280(enum_getvalue(0, 73, int4, int6)) == -2)) {
            int8 = (int8 + 1);
        };
        int6 = (int6 + 1);
    };
    IF_SETTEXT(`${inttostring(int8, 10)}/${inttostring(int5, 10)}`, int2);
    return;
}