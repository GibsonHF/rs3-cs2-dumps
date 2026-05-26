//
function script18509(int0: number, int1: number, int2: number, int3: number): void {
    var int4 = struct_getparam(int0, 9075);
    switch (DB_GETROWTABLE(int4)) {
        case 280: {
            varclient_7382 = (DATE_MINUTES_FROMRUNEDAY((script1016(int0) + 1)) - (int2 + 1));
            break;
        }
        case 26: {
            varclient_7382 = (DATE_MINUTES_FROMRUNEDAY((int1 + 1)) - (int2 + 1));
            break;
        }
    };
    varclient_7383 = int3;
    var int5 = comp(1253, 340);
    IF_SETONTIMER(callback(script18510, int5, int1), int5);
    return;
}