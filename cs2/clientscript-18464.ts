//
function script18464(int0: dbrow): void {
    CC_CREATE(dbrow_getfield(int0, 733184, 0), 26, 0);
    CC_SETSIZE(0, 0, 1, 1);
    unk11050(script18462(), script18463(), dbrow_getfield(int0, 733232, 0), 0);
    if ((int0 == 13090 as dbrow)) {
        CC_SETNOCLICKTHROUGH(false);
    };
    unk11049(dbrow_getfield(int0, 733248, 0));
    stack(int0);
    stack(733264);
    stack(0);
    dbrow_getfield();
    unk11048();
    if ((DB_GETFIELDCOUNT(int0, 733200) > 0)) {
        IF_SETTEXT(dbrow_getfield(int0, 733280, 0), dbrow_getfield(int0, 733200, 0));
    };
    if ((DB_GETFIELDCOUNT(int0, 733216) > 0)) {
        IF_SETHIDE(false, dbrow_getfield(int0, 733216, 0));
    };
    script18465(int0);
    return;
}