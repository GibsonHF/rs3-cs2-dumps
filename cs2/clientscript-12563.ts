//
function script12563(int0: number): void {
    var int1 = 8;
    IF_SETPOSITION(0, 0, 1, 0, 79691781);
    switch (int0) {
        case 1: {
            IF_SETGRAPHIC(27278, 79691793);
            break;
        }
        case 2: {
            IF_SETGRAPHIC(27531, 79691793);
            break;
        }
        case 3: {
            IF_SETGRAPHIC(27280, 79691793);
            break;
        }
    };
    IF_SETTRANS(0, 79691793);
    IF_SETTRANS(0, 79691787);
    IF_SETTRANS(0, 79691788);
    IF_SETTRANS(0, 79691786);
    IF_SETTRANS(0, 79691789);
    IF_SETTRANS(255, 79691790);
    IF_SETTRANS(255, 79691792);
    IF_SETTRANS(255, 79691791);
    IF_SETTRANS(0, 79691784);
    IF_SETTRANS(0, 79691783);
    IF_SETHIDE(1, 79691779);
    IF_SETHIDE(1, 79691780);
    IF_SETHIDE(1, 79691778);
    var int2 = 1;
    IF_SETGRAPHIC(27160, 79691783);
    IF_SETGRAPHIC(27167, 79691786);
    IF_SETGRAPHIC(27166, 79691787);
    IF_SETGRAPHIC(27168, 79691788);
    IF_SET2DANGLE(0, 79691784);
    switch (MAP_LANG()) {
        case 1: {
            IF_SETSIZE(240, 33, 0, 0, 79691785);
            IF_SETGRAPHIC(27169, 79691789);
            break;
        }
        case 2: {
            IF_SETSIZE(240, 33, 0, 0, 79691785);
            IF_SETGRAPHIC(27170, 79691789);
            break;
        }
        case 3: {
            IF_SETSIZE(220, 33, 0, 0, 79691785);
            IF_SETGRAPHIC(27171, 79691789);
            break;
        }
        case 6: {
            IF_SETSIZE(220, 33, 0, 0, 79691785);
            IF_SETGRAPHIC(27173, 79691789);
            break;
        }
        default: {
            IF_SETSIZE(150, 33, 0, 0, 79691785);
            IF_SETGRAPHIC(27172, 79691789);
            break;
        }
    };
    var int3 = 99;
    IF_SETHIDE(0, 79691790);
    IF_SETHIDE(0, 79691791);
    IF_SETHIDE(0, 79691792);
    IF_SETPOSITION(-10, 45, 1, 0, 79691790);
    IF_SETPOSITION(10, 45, 1, 0, 79691792);
    script517((int3 / 10), 79691790);
    script517(MODULO(int3, 10), 79691792);
    IF_SETHIDE(1, 79691791);
    IF_SETHIDE(0, 79691779);
    IF_SETMODEL(32143, 79691778);
    IF_SETONTIMER(callback(script3336, (CLIENTCLOCK() + 100), (CLIENTCLOCK() + 200), (CLIENTCLOCK() + 500), varclient_1756), 79691776);
    IF_SETHIDE(0, 79691781);
    IF_SETHIDE(1, 79495169);
    var int4 = RANDOM(150);
    var int5 = RANDOM(50);
    IF_SETONTIMER(callback(script337, int1, (CLIENTCLOCK() + 25)), 79691783);
    return;
}