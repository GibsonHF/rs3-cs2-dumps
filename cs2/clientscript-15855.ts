//
function script15855(int0: int): void {
    IF_SETHIDE(true, comp(857, 20));
    IF_SETTEXT("", comp(857, 19));
    varclient_6910 = 0;
    stack(557056);
    stack(int0);
    DB_FIND(0);
    dbrow_findnext();
    var int1 = stack();
    var int2 = script10405(int0);
    stack(0);
    stack(9);
    stack(10344);
    stack(int0);
    enum_getvalue();
    var int3 = stack();
    if ((int1 != -1)) {
        stack(struct_getparam(int2, 8097));
        stack(int3);
        IF_SETGRAPHIC();
        stack(int1);
        stack(557072);
        stack(0);
        dbrow_getfield();
        IF_SETTEXT(stack(), 56164370);
        if ((DB_GETFIELDCOUNT(int1, 557088) > 0)) {
            if ((IF_FIND(comp(857, 20)) == 1)) {
                cc_setparam(424, int1);
            };
            IF_SETHIDE(false, comp(857, 20));
            script15857(int1);
        } else if ((IF_FIND(comp(857, 20)) == 1)) {
            cc_setparam(424, -1);
        };
    };
    var int4 = script383(int0);
    if ((int4 != 31)) {
        int2 = script10405(18);
    };
    IF_SETHIDE(false, struct_getparam(int2, 3503));
    varbitplayer_49443 = enum_getreverseindex(0, 0, 10155 as cs2enum, int0, 0);
    if ((int4 != 31)) {
        script8491(18);
        script8551(18, script257(int0));
        script1558(18, 0);
    };
    return;
}