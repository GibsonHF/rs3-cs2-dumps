//
function script19158(): void {
    IF_SETHIDE(false, comp(1288, 5));
    IF_SETHIDE(false, comp(1288, 3));
    IF_SETHIDE(false, comp(1288, 51));
    IF_SETHIDE(false, comp(1288, 7));
    IF_SETHIDE(true, comp(1288, 10));
    switch (MAP_LANG()) {
        case 0: {
            if ((IF_GETGRAPHIC(comp(1288, 8)) == -1 as graphic)) {
                stack(25141);
                stack(84410376);
                IF_SETGRAPHIC();
            };
            stack(20602);
            stack(84410373);
            IF_SETGRAPHIC();
            break;
        }
        case 2: {
            if ((IF_GETGRAPHIC(comp(1288, 8)) == -1 as graphic)) {
                stack(25167);
                stack(84410376);
                IF_SETGRAPHIC();
            };
            stack(20602);
            stack(84410373);
            IF_SETGRAPHIC();
            break;
        }
        case 1: {
            if ((IF_GETGRAPHIC(comp(1288, 8)) == -1 as graphic)) {
                stack(25165);
                stack(84410376);
                IF_SETGRAPHIC();
            };
            stack(20601);
            stack(84410373);
            IF_SETGRAPHIC();
            break;
        }
        case 3: {
            if ((IF_GETGRAPHIC(comp(1288, 8)) == -1 as graphic)) {
                stack(25233);
                stack(84410376);
                IF_SETGRAPHIC();
            };
            stack(20601);
            stack(84410373);
            IF_SETGRAPHIC();
            break;
        }
    };
    return;
}