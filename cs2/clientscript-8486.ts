//
function script8486(int0: number): void {
    var int1 = 0;
    var int2 = 0;
    if ((int0 == 1)) {
        script8844(1, script8825(20, 1), 96010250, -1);
        script8844(3, script8825(20, 5), 96010250, -1);
        script8844(1, script8825(20, 2), 96010273, -1);
        script8844(2, script8825(20, 4), 96010273, -1);
        script8844(1, script8825(20, 3), 96010254, -1);
        script8844(1, script8825(20, 6), 8978512, -1);
        script8844(5, script8825(20, 7), 96010250, -1);
        if ((CC_FIND(comp(1477, 65), 1) == 1)) {
            script8844(1, script8825(20, 0), 96796737, 1);
        } else {
            IF_SETONTIMER(callback(script8487, 96796737, 1, -2147483645), comp(1477, 61));
        };
    } else {
        IF_SETOPKEY(1, 0, 0, comp(1465, 10));
        IF_SETOPKEY(3, 0, 0, comp(1465, 10));
        IF_SETOPKEY(1, 0, 0, comp(1465, 33));
        IF_SETOPKEY(2, 0, 0, comp(1465, 33));
        IF_SETOPKEY(1, 0, 0, comp(1465, 14));
        IF_SETOPKEY(1, 0, 0, comp(137, 80));
        IF_SETOPKEY(5, 0, 0, comp(1465, 10));
        if ((CC_FIND(comp(1477, 65), 1) == 1)) {
            CC_SETOPKEY(1, 0, 0, -1, 0, -1, 0, -1, 0, -1, 0);
        };
    };
    return;
}