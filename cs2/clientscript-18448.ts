//
function script18448(int0: number): void {
    DB_LISTALL(275);
    var int1 = dbrow_findnext();
    var int2 = -1;
    while ((int1 != -1)) {
        int2 = dbrow_getfield(int1, 1126416, 0);
        if ((IF_FIND(int2) == 1)) {
            if ((int2 == int0)) {
                CC_BUTTON_SETTOGGLED(true);
                varbitplayer_54960 = dbrow_getfield(int1, 1126400, 0);
            } else {
                CC_BUTTON_SETTOGGLED(false);
            };
        };
        int1 = dbrow_findnext();
    };
    return;
}