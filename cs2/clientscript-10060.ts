//
function script10060(): unknown_int {
    stack(1200128);
    stack(varbitplayer_55991);
    DB_FIND(0);
    dbrow_findnext();
    var int0 = stack();
    if ((int0 == -1)) {
        script12478(`Unable to locate runecrafting_altars dbrow with id = ${inttostring(varbitplayer_55991, 10)}`);
        return 2478;
    };
    stack(int0);
    stack(1200160);
    stack(0);
    dbrow_getfield();
    return stack();
}