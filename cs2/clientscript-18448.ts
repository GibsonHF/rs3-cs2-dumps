//
function script18448(int0: component): void {
    DB_LISTALL(275);
    dbrow_findnext();
    var int1 = stack();
    var int2 = -1;
    while ((int1 != -1 as dbrow)) {
        int2 = dbrow_getfield(int1, 1126416, 0);
        if ((IF_FIND(int2) == 1)) {
            if ((int2 == int0)) {
                CC_BUTTON_SETTOGGLED(true);
                varbitplayer_54960 = dbrow_getfield(int1, 1126400, 0);
            } else {
                CC_BUTTON_SETTOGGLED(false);
            };
        };
        dbrow_findnext();
        int1 = stack();
    };
    return;
}