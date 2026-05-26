//
function script18305(): void {
    IF_SETTEXT(inttostring(200, 10), 81592340);
    IF_SETTEXT(inttostring(4, 10), 81592344);
    IF_SETTEXT(inttostring(80, 10), 81592336);
    IF_SETOBJECT_NONUM(56018, 1, 81592345);
    IF_SETOBJECT_NONUM(56018, 1, 81592337);
    IF_SETOBJECT_NONUM(56018, 1, 81592341);
    switch (MAP_LANG()) {
        case 0: {
            IF_SETGRAPHIC(33002, 81592330);
            break;
        }
        case 1: {
            IF_SETGRAPHIC(33001, 81592330);
            break;
        }
        case 2: {
            IF_SETGRAPHIC(33003, 81592330);
            break;
        }
        case 3: {
            IF_SETGRAPHIC(33004, 81592330);
            break;
        }
    };
    return;
}