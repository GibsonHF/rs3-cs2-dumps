//
function script16614(): void {
    CC_DELETEALL(comp(1253, 3));
    IF_SETHIDE(true, comp(1253, 171));
    stack(struct_getparam(46119, 8206));
    stack(82116613);
    IF_SETGRAPHIC();
    IF_SETPOSITION(126, 60, 0, 0, 82116640);
    IF_SETSIZE(200, 150, 0, 0, 82116640);
    script16615();
    var int0 = 0;
    var int1 = 0;
    [int0, int1] = script16613();
    stack(749568);
    stack(int0);
    DB_FIND(0);
    dbrow_findnext();
    var int2 = stack();
    if ((int2 == -1)) {
        script12478(`Unable to specifiy dbrow from modifier for current: ${inttostring(int0, 10)}`);
        int2 = 6065 as dbrow;
    };
    script16616(int2);
    stack(749568);
    stack(int1);
    DB_FIND(0);
    dbrow_findnext();
    int2 = stack();
    if ((int2 == -1)) {
        script12478(`Unable to specifiy dbrow from modifier for next: ${inttostring(int0, 10)}`);
        int2 = 6065 as dbrow;
    };
    script16617();
    if (((varclient_4752 > script16626()) && (varclient_4752 >= 0))) {
        script16618(int2);
    };
    return;
}