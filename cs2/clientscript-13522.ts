//
function script13522(): void {
    var int0 = IF_GETHEIGHT(comp(1639, 1));
    var int1 = 36;
    var int2 = 1;
    if ((int0 >= int1)) {
        IF_SETHIDE(false, comp(1639, 1));
        IF_SETHIDE(false, comp(1639, 2));
        IF_SETONTIMER(callback(script13524, int2, -1, -2147483645), 107413505);
        IF_SETONTIMER(callback(script13524, int1, 1, -2147483645), 107413506);
    };
    return;
}