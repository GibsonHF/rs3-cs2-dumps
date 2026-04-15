//
function script18305(): void {
    IF_SETTEXT(inttostring(200, 10), comp(1245, 20));
    IF_SETTEXT(inttostring(4, 10), comp(1245, 24));
    IF_SETTEXT(inttostring(80, 10), comp(1245, 16));
    IF_SETOBJECT_NONUM(56018 as obj, 1, comp(1245, 25));
    IF_SETOBJECT_NONUM(56018 as obj, 1, comp(1245, 17));
    IF_SETOBJECT_NONUM(56018 as obj, 1, comp(1245, 21));
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