//
function script19267(): void {
    var int0 = script16161();
    if (((varplayer_11901 == -1 as dbrow) || (script19302(2) == 0))) {
        IF_SETGRAPHIC(struct_getparam(int0, 8206), comp(1253, 5));  // wheel_of_fortune:background
        return;
    };
    var int1 = dbrow_getfield(varplayer_11901, 1216528, 0);
    switch (DB_GETROWTABLE(varplayer_11902)) {
        case 298: {
            IF_SETGRAPHIC(dbrow_getfield(int1, 1212512, 0), comp(1253, 5));  // wheel_of_fortune:background
            break;
        }
        case 299: {
            IF_SETGRAPHIC(dbrow_getfield(int1, 1212528, 0), comp(1253, 5));  // wheel_of_fortune:background
            break;
        }
        case 300: {
            IF_SETGRAPHIC(dbrow_getfield(int1, 1212544, 0), comp(1253, 5));  // wheel_of_fortune:background
            break;
        }
    };
    return;
}