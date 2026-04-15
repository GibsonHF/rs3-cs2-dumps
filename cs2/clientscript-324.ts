//[clientscript,ntk_timer]
function script324(int0: component, int1: component, int2: component): void {
    var int3 = MIN(varbitplayer_5126, 500);
    IF_SETSIZE(0, SCALE((500 - int3), 500, 16384), 1, 2, int0);
    var int4 = (164 + SCALE(int3, 500, 91));
    var int5 = (164 - SCALE(int3, 500, 164));
    var int6 = (41 - SCALE(int3, 500, 41));
    var int7 = script693(int4, int5, int6);
    IF_SETCOLOUR(int7, int0);
    IF_SETCOLOUR(int7, int1);
    switch (SCALE((int3 + 5), 500, 25)) {
        case 0: {
            IF_SETMODEL(16353 as model, int2);
            break;
        }
        case 1: {
            IF_SETMODEL(16354 as model, int2);
            break;
        }
        case 2: {
            IF_SETMODEL(16355 as model, int2);
            break;
        }
        case 3: {
            IF_SETMODEL(16356 as model, int2);
            break;
        }
        case 4: {
            IF_SETMODEL(16357 as model, int2);
            break;
        }
        case 5: {
            IF_SETMODEL(16358 as model, int2);
            break;
        }
        case 6: {
            IF_SETMODEL(16359 as model, int2);
            break;
        }
        case 7: {
            IF_SETMODEL(16360 as model, int2);
            break;
        }
        case 8: {
            IF_SETMODEL(16361 as model, int2);
            break;
        }
        case 9: {
            IF_SETMODEL(16362 as model, int2);
            break;
        }
        case 10: {
            IF_SETMODEL(16363 as model, int2);
            break;
        }
        case 11: {
            IF_SETMODEL(16364 as model, int2);
            break;
        }
        case 12: {
            IF_SETMODEL(16365 as model, int2);
            break;
        }
        case 13: {
            IF_SETMODEL(16366 as model, int2);
            break;
        }
        case 14: {
            IF_SETMODEL(16367 as model, int2);
            break;
        }
        case 15: {
            IF_SETMODEL(16368 as model, int2);
            break;
        }
        case 16: {
            IF_SETMODEL(16369 as model, int2);
            break;
        }
        case 17: {
            IF_SETMODEL(16370 as model, int2);
            break;
        }
        case 18: {
            IF_SETMODEL(16371 as model, int2);
            break;
        }
        case 19: {
            IF_SETMODEL(16372 as model, int2);
            break;
        }
        case 20: {
            IF_SETMODEL(16373 as model, int2);
            break;
        }
        case 21: {
            IF_SETMODEL(16374 as model, int2);
            break;
        }
        case 22: {
            IF_SETMODEL(16375 as model, int2);
            break;
        }
        case 23: {
            IF_SETMODEL(16376 as model, int2);
            break;
        }
        case 24: {
            IF_SETMODEL(16377 as model, int2);
            break;
        }
        default: {
            IF_SETMODEL(16378 as model, int2);
            break;
        }
    };
    return;
}