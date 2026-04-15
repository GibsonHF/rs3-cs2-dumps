//
function script14925(int0: dbrow): graphic {
    var int1 = dbrow_getfield(int0, 20576, 0);
    if ((int1 != -1 as graphic)) {
        return int1;
    };
    if ((dbrow_getfield(int0, 20592, 0) == 3)) {
        return 31742 as graphic;
    };
    return 24227 as graphic;
}