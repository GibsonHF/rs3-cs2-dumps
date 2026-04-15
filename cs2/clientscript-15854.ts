//
function script15854(int0: int): void {
    var int1 = script10405(int0);
    var int2 = enum_getvalue(0, 9, 10344 as cs2enum, int0);
    stack(struct_getparam(int1, 8096));
    stack(int2);
    IF_SETGRAPHIC();
    stack(557056);
    stack(int0);
    DB_FIND(0);
    dbrow_findnext();
    var int3 = stack();
    if ((((int3 != -1) && (varclient_6910 == 1)) && (DB_GETFIELDCOUNT(int3, 557088) > 0))) {
        var int0 = dbrow_getfield(int3, 557088, 0);
    };
    if ((script383(int0) != 31)) {
        int0 = 18;
    };
    int1 = script10405(int0);
    IF_SETHIDE(true, struct_getparam(int1, 3503));
    return;
}