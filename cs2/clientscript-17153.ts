//
function script17153(int0: int): void {
    var int1 = script3026(int0);
    stack(761856);
    stack(int0);
    DB_FIND(0);
    dbrow_findnext();
    var int2 = stack();
    stack(int2);
    stack(761888);
    stack(0);
    dbrow_getfield();
    var int3 = stack();
    stack(int2);
    stack(761904);
    stack(0);
    dbrow_getfield();
    var int4 = stack();
    if ((int1 == 19)) {
        IF_SETHIDE(true, int3);
        stack(26128);
        stack(int4);
        IF_SETGRAPHIC();
        return;
    };
    script446(int3, script438(int1), 0);
    stack(25903);
    stack(int4);
    IF_SETGRAPHIC();
    IF_SETHIDE(0, int3);
    return;
}