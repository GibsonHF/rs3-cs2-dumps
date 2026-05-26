//
function script8962(int0: number): void {
    if ((int0 == 1)) {
        script8959();
    } else {
        script675();
    };
    var int1 = 30;
    var int2 = 0;
    var int3 = 0;
    if ((script8960(0) == 0)) {
        IF_SETHIDE(1, 98041941);
        IF_SETHIDE(1, 98041955);
    } else {
        int1 = (int1 + IF_GETWIDTH(98041941));
        int2 = (int2 + 1);
        int3 = 1;
    };
    if ((script8960(1) == 0)) {
        IF_SETHIDE(1, 98041942);
        IF_SETHIDE(1, 98041956);
    } else {
        IF_SETPOSITION((int1 - 10), 0, 0, 1, 98041942);
        IF_SETPOSITION((int1 - 10), 0, 0, 1, 98041956);
        int1 = (int1 + IF_GETWIDTH(98041942));
        if ((int2 == 0)) {
            IF_SETHIDE(0, 98041956);
        };
        int2 = (int2 + 1);
        if ((int3 == 0)) {
            int3 = 2;
        };
    };
    if ((script8960(2) == 0)) {
        IF_SETHIDE(1, 98041947);
        IF_SETHIDE(1, 98041957);
    } else {
        IF_SETPOSITION((int1 - 10), 0, 0, 1, 98041947);
        IF_SETPOSITION((int1 - 10), 0, 0, 1, 98041957);
        int1 = (int1 + IF_GETWIDTH(98041947));
        if ((int2 == 0)) {
            IF_SETHIDE(0, 98041957);
        };
        if ((varbitplayer_18636 > 0)) {
            IF_SETHIDE(1, 98041952);
        };
        int2 = (int2 + 1);
        if ((int3 == 0)) {
            int3 = 3;
        };
    };
    if ((script8960(3) == 0)) {
        IF_SETHIDE(1, 98041953);
        IF_SETHIDE(1, 98041958);
    } else {
        IF_SETPOSITION((int1 - 10), 0, 0, 1, 98041953);
        IF_SETPOSITION((int1 - 10), 0, 0, 1, 98041958);
        int1 = (int1 + IF_GETWIDTH(98041953));
        if ((int2 == 0)) {
            IF_SETHIDE(0, 98041958);
        };
        if ((varbitplayer_18637 > 0)) {
            IF_SETHIDE(1, 98041964);
        };
        int2 = (int2 + 1);
        if ((int3 == 0)) {
            int3 = 4;
        };
    };
    if ((script8960(4) == 0)) {
        IF_SETHIDE(1, 98041954);
        IF_SETHIDE(1, 98041959);
    } else {
        int1 = MIN(int1, 340);
        IF_SETPOSITION(int1, 0, 0, 1, 98041954);
        IF_SETPOSITION(int1, 0, 0, 1, 98041959);
        if ((int2 == 0)) {
            IF_SETHIDE(0, 98041959);
        };
        if ((varbitplayer_18637 > 0)) {
            IF_SETHIDE(1, 98041969);
        };
        int2 = (int2 + 1);
        if ((int3 == 0)) {
            int3 = 5;
        };
    };
    if ((int2 == 5)) {
        IF_SETPOSITION(106, 0, 0, 1, 98041942);
        IF_SETPOSITION(179, 0, 0, 1, 98041947);
        IF_SETPOSITION(258, 0, 0, 1, 98041953);
        IF_SETPOSITION(106, 0, 0, 1, 98041956);
        IF_SETPOSITION(179, 0, 0, 1, 98041957);
        IF_SETPOSITION(258, 0, 0, 1, 98041958);
        IF_SETPOSITION(340, 0, 0, 1, 98041954);
        IF_SETPOSITION(340, 0, 0, 1, 98041959);
    };
    if ((int3 > 0)) {
        varbitplayer_18639 = MIN(0, (int3 - 0));
    };
    script8964(0);
    script8957(script8960(varbitplayer_18639), MAX(1, varbitplayer_18640));
    script8977();
    IF_SETHIDE(0, 98042102);
    IF_SETHIDE(0, 98042102);
    return;
}