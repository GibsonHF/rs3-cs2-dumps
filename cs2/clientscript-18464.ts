//
function script18464(int0: number): void {
    CC_CREATE(dbrow_getfield(int0, 733184, 0), 26, 0);
    CC_SETSIZE(0, 0, 1, 1);
    unk11049(script18462(), script18463(), dbrow_getfield(int0, 733232, 0), 0);
    if ((int0 == 13090 as dbrow)) {
        CC_SETNOCLICKTHROUGH(0);
    };
    unk11048(dbrow_getfield(int0, 733248, 0));
    stack(int0);
    stack(733264);
    stack(0);
    dbrow_getfield();
    unk11047();
    if ((DB_GETFIELDCOUNT(int0, 733200) > 0)) {
        IF_SETTEXT(dbrow_getfield(int0, 733280, 0), dbrow_getfield(int0, 733200, 0));
    };
    if ((DB_GETFIELDCOUNT(int0, 733216) > 0)) {
        IF_SETHIDE(0, dbrow_getfield(int0, 733216, 0));
    };
    script18465(int0);
    return;
}