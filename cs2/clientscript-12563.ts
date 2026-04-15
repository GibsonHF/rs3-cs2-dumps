//
function script12563(int0: unknown_int): void {
    var int1 = 8;
    IF_SETPOSITION(0, 0, 1, 0, comp(1216, 5));
    switch (int0) {
        case 1: {
            stack(27278);
            stack(79691793);
            IF_SETGRAPHIC();
            break;
        }
        case 2: {
            stack(27531);
            stack(79691793);
            IF_SETGRAPHIC();
            break;
        }
        case 3: {
            stack(27280);
            stack(79691793);
            IF_SETGRAPHIC();
            break;
        }
    };
    IF_SETTRANS(0, comp(1216, 17));
    IF_SETTRANS(0, comp(1216, 11));
    IF_SETTRANS(0, comp(1216, 12));
    IF_SETTRANS(0, comp(1216, 10));
    IF_SETTRANS(0, comp(1216, 13));
    IF_SETTRANS(255, comp(1216, 14));
    IF_SETTRANS(255, comp(1216, 16));
    IF_SETTRANS(255, comp(1216, 15));
    IF_SETTRANS(0, comp(1216, 8));
    IF_SETTRANS(0, comp(1216, 7));
    IF_SETHIDE(true, comp(1216, 3));
    IF_SETHIDE(true, comp(1216, 4));
    IF_SETHIDE(true, comp(1216, 2));
    var int2 = 1;
    stack(27160);
    stack(79691783);
    IF_SETGRAPHIC();
    stack(27167);
    stack(79691786);
    IF_SETGRAPHIC();
    stack(27166);
    stack(79691787);
    IF_SETGRAPHIC();
    stack(27168);
    stack(79691788);
    IF_SETGRAPHIC();
    IF_SET2DANGLE(0, 79691784);
    switch (MAP_LANG()) {
        case 1: {
            IF_SETSIZE(240, 33, 0, 0, comp(1216, 9));
            stack(27169);
            stack(79691789);
            IF_SETGRAPHIC();
            break;
        }
        case 2: {
            IF_SETSIZE(240, 33, 0, 0, comp(1216, 9));
            stack(27170);
            stack(79691789);
            IF_SETGRAPHIC();
            break;
        }
        case 3: {
            IF_SETSIZE(220, 33, 0, 0, comp(1216, 9));
            stack(27171);
            stack(79691789);
            IF_SETGRAPHIC();
            break;
        }
        case 6: {
            IF_SETSIZE(220, 33, 0, 0, comp(1216, 9));
            stack(27173);
            stack(79691789);
            IF_SETGRAPHIC();
            break;
        }
        default: {
            IF_SETSIZE(150, 33, 0, 0, comp(1216, 9));
            stack(27172);
            stack(79691789);
            IF_SETGRAPHIC();
            break;
        }
    };
    var int3 = 99;
    IF_SETHIDE(false, comp(1216, 14));
    IF_SETHIDE(false, comp(1216, 15));
    IF_SETHIDE(false, comp(1216, 16));
    IF_SETPOSITION(-10, 45, 1, 0, comp(1216, 14));
    IF_SETPOSITION(10, 45, 1, 0, comp(1216, 16));
    script517((int3 / 10), 79691790);
    script517(MODULO(int3, 10), 79691792);
    IF_SETHIDE(true, comp(1216, 15));
    IF_SETHIDE(false, comp(1216, 3));
    IF_SETMODEL(32143 as model, comp(1216, 2));
    IF_SETONTIMER(callback(script3336, (CLIENTCLOCK() + 100), (CLIENTCLOCK() + 200), (CLIENTCLOCK() + 500), varclient_1756), 79691776);
    IF_SETHIDE(0, 79691781);
    IF_SETHIDE(1, 79495169);
    var int4 = RANDOM(150);
    var int5 = RANDOM(50);
    IF_SETONTIMER(callback(script337, int1, (CLIENTCLOCK() + 25)), 79691783);
    return;
}