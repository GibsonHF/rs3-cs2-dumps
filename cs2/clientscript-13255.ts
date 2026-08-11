//
function script13255(int0: number, int1: number): number {
    switch (int0) {
        case 0: {
            IF_SETGRAPHIC(22565 as graphic, int1);
            break;
        }
        case 1: {
            IF_SETGRAPHIC(22564 as graphic, int1);
            break;
        }
        case 2: {
            IF_SETGRAPHIC(2185 as graphic, int1);
            break;
        }
        case 3: {
            IF_SETGRAPHIC(22566 as graphic, int1);
            break;
        }
        case 4: {
            IF_SETGRAPHIC(22570 as graphic, int1);
            break;
        }
        case 5: {
            IF_SETGRAPHIC(22574 as graphic, int1);
            break;
        }
    };
    IF_SETHIDE(false, int1);
    IF_SETHIDE(true, comp(1798, 136));  // elrc:resources_text
    return -1;
}