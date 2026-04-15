//
function script8962(int0: unknown_int): void {
    if ((int0 == 1)) {
        script8959();
    } else {
        script675();
    };
    var int1 = 30;
    var int2 = 0;
    var int3 = 0;
    if ((script8960(0) == 0)) {
        IF_SETHIDE(true, comp(1496, 85));
        IF_SETHIDE(true, comp(1496, 99));
    } else {
        int1 = (int1 + IF_GETWIDTH(comp(1496, 85)));
        int2 = (int2 + 1);
        int3 = 1;
    };
    if ((script8960(1) == 0)) {
        IF_SETHIDE(true, comp(1496, 86));
        IF_SETHIDE(true, comp(1496, 100));
    } else {
        IF_SETPOSITION((int1 - 10), 0, 0, 1, comp(1496, 86));
        IF_SETPOSITION((int1 - 10), 0, 0, 1, comp(1496, 100));
        int1 = (int1 + IF_GETWIDTH(comp(1496, 86)));
        if ((int2 == 0)) {
            IF_SETHIDE(false, comp(1496, 100));
        };
        int2 = (int2 + 1);
        if ((int3 == 0)) {
            int3 = 2;
        };
    };
    if ((script8960(2) == 0)) {
        IF_SETHIDE(true, comp(1496, 91));
        IF_SETHIDE(true, comp(1496, 101));
    } else {
        IF_SETPOSITION((int1 - 10), 0, 0, 1, comp(1496, 91));
        IF_SETPOSITION((int1 - 10), 0, 0, 1, comp(1496, 101));
        int1 = (int1 + IF_GETWIDTH(comp(1496, 91)));
        if ((int2 == 0)) {
            IF_SETHIDE(false, comp(1496, 101));
        };
        if ((varbitplayer_18636 > 0)) {
            IF_SETHIDE(true, comp(1496, 96));
        };
        int2 = (int2 + 1);
        if ((int3 == 0)) {
            int3 = 3;
        };
    };
    if ((script8960(3) == 0)) {
        IF_SETHIDE(true, comp(1496, 97));
        IF_SETHIDE(true, comp(1496, 102));
    } else {
        IF_SETPOSITION((int1 - 10), 0, 0, 1, comp(1496, 97));
        IF_SETPOSITION((int1 - 10), 0, 0, 1, comp(1496, 102));
        int1 = (int1 + IF_GETWIDTH(comp(1496, 97)));
        if ((int2 == 0)) {
            IF_SETHIDE(false, comp(1496, 102));
        };
        if ((varbitplayer_18637 > 0)) {
            IF_SETHIDE(true, comp(1496, 108));
        };
        int2 = (int2 + 1);
        if ((int3 == 0)) {
            int3 = 4;
        };
    };
    if ((script8960(4) == 0)) {
        IF_SETHIDE(true, comp(1496, 98));
        IF_SETHIDE(true, comp(1496, 103));
    } else {
        int1 = MIN(int1, 340);
        IF_SETPOSITION(int1, 0, 0, 1, comp(1496, 98));
        IF_SETPOSITION(int1, 0, 0, 1, comp(1496, 103));
        if ((int2 == 0)) {
            IF_SETHIDE(false, comp(1496, 103));
        };
        if ((varbitplayer_18637 > 0)) {
            IF_SETHIDE(true, comp(1496, 113));
        };
        int2 = (int2 + 1);
        if ((int3 == 0)) {
            int3 = 5;
        };
    };
    if ((int2 == 5)) {
        IF_SETPOSITION(106, 0, 0, 1, comp(1496, 86));
        IF_SETPOSITION(179, 0, 0, 1, comp(1496, 91));
        IF_SETPOSITION(258, 0, 0, 1, comp(1496, 97));
        IF_SETPOSITION(106, 0, 0, 1, comp(1496, 100));
        IF_SETPOSITION(179, 0, 0, 1, comp(1496, 101));
        IF_SETPOSITION(258, 0, 0, 1, comp(1496, 102));
        IF_SETPOSITION(340, 0, 0, 1, comp(1496, 98));
        IF_SETPOSITION(340, 0, 0, 1, comp(1496, 103));
    };
    if ((int3 > 0)) {
        varbitplayer_18639 = MIN(0, (int3 - 0));
    };
    script8964(0);
    script8957(script8960(varbitplayer_18639), MAX(1, varbitplayer_18640));
    script8977();
    IF_SETHIDE(false, comp(1496, 246));
    IF_SETHIDE(false, comp(1496, 246));
    return;
}