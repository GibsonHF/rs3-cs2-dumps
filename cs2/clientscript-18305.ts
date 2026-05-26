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
            stack(33002);
            stack(81592330);
            IF_SETGRAPHIC();
            break;
        }
        case 1: {
            stack(33001);
            stack(81592330);
            IF_SETGRAPHIC();
            break;
        }
        case 2: {
            stack(33003);
            stack(81592330);
            IF_SETGRAPHIC();
            break;
        }
        case 3: {
            stack(33004);
            stack(81592330);
            IF_SETGRAPHIC();
            break;
        }
    };
    return;
}