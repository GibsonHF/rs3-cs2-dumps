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
            IF_SETGRAPHIC(33002 as graphic, comp(1245, 10));
            break;
        }
        case 1: {
            IF_SETGRAPHIC(33001 as graphic, comp(1245, 10));
            break;
        }
        case 2: {
            IF_SETGRAPHIC(33003 as graphic, comp(1245, 10));
            break;
        }
        case 3: {
            IF_SETGRAPHIC(33004 as graphic, comp(1245, 10));
            break;
        }
    };
    return;
}