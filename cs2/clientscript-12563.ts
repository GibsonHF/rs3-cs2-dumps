//
function script12563(int0: number): void {
    var int1 = 8;
    IF_SETPOSITION(0, 0, 1, 0, comp(1216, 5));
    switch (int0) {
        case 1: {
            IF_SETGRAPHIC(27278 as graphic, comp(1216, 17));
            break;
        }
        case 2: {
            IF_SETGRAPHIC(27531 as graphic, comp(1216, 17));
            break;
        }
        case 3: {
            IF_SETGRAPHIC(27280 as graphic, comp(1216, 17));
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
    IF_SETGRAPHIC(27160 as graphic, comp(1216, 7));
    IF_SETGRAPHIC(27167 as graphic, comp(1216, 10));
    IF_SETGRAPHIC(27166 as graphic, comp(1216, 11));
    IF_SETGRAPHIC(27168 as graphic, comp(1216, 12));
    IF_SET2DANGLE(0, comp(1216, 8));
    switch (MAP_LANG()) {
        case 1: {
            IF_SETSIZE(240, 33, 0, 0, comp(1216, 9));
            IF_SETGRAPHIC(27169 as graphic, comp(1216, 13));
            break;
        }
        case 2: {
            IF_SETSIZE(240, 33, 0, 0, comp(1216, 9));
            IF_SETGRAPHIC(27170 as graphic, comp(1216, 13));
            break;
        }
        case 3: {
            IF_SETSIZE(220, 33, 0, 0, comp(1216, 9));
            IF_SETGRAPHIC(27171 as graphic, comp(1216, 13));
            break;
        }
        case 6: {
            IF_SETSIZE(220, 33, 0, 0, comp(1216, 9));
            IF_SETGRAPHIC(27173 as graphic, comp(1216, 13));
            break;
        }
        default: {
            IF_SETSIZE(150, 33, 0, 0, comp(1216, 9));
            IF_SETGRAPHIC(27172 as graphic, comp(1216, 13));
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