//
function script10060(): number {
    stack(1200128);
    stack(varbitplayer_55991);
    DB_FIND(0);
    var int0 = dbrow_findnext();
    if ((int0 == -1)) {
        script12478(`Unable to locate runecrafting_altars dbrow with id = ${inttostring(varbitplayer_55991, 10)}`);
        return 2478;
    };
    return dbrow_getfield(int0, 1200160, 0);
}