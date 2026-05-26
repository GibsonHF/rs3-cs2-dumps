//
function script17153(int0: number): void {
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
        IF_SETGRAPHIC(26128 as graphic, int4);
        return;
    };
    script446(int3, script438(int1), 0);
    IF_SETGRAPHIC(25903 as graphic, int4);
    IF_SETHIDE(false, int3);
    return;
}