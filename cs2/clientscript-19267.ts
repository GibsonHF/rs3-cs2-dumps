//
function script19267(): void {
    var int0 = script16161();
    if (((varplayer_11901 == -1 as dbrow) || (script19302(2) == false))) {
        stack(struct_getparam(int0, 8206));
        stack(82116613);
        IF_SETGRAPHIC();
        return;
    };
    var int1 = dbrow_getfield(varplayer_11901, 1216528, 0);
    switch (DB_GETROWTABLE(varplayer_11902)) {
        case 298: {
            stack(dbrow_getfield(int1, 1212512, 0));
            stack(82116613);
            IF_SETGRAPHIC();
            break;
        }
        case 299: {
            stack(dbrow_getfield(int1, 1212528, 0));
            stack(82116613);
            IF_SETGRAPHIC();
            break;
        }
        case 300: {
            stack(dbrow_getfield(int1, 1212544, 0));
            stack(82116613);
            IF_SETGRAPHIC();
            break;
        }
    };
    return;
}