//
function script6766(): void {
    switch (MAP_LANG()) {
        case 0: {
            stack(32498);
            stack(41353287);
            IF_SETGRAPHIC();
            break;
        }
        case 1: {
            stack(32499);
            stack(41353287);
            IF_SETGRAPHIC();
            break;
        }
        case 2: {
            stack(32500);
            stack(41353287);
            IF_SETGRAPHIC();
            break;
        }
        case 3: {
            stack(32501);
            stack(41353287);
            IF_SETGRAPHIC();
            break;
        }
    };
    IF_SETHIDE(false, comp(631, 0));
    IF_SETHIDE(true, comp(631, 1));
    script16509(7060 as struct, comp(631, 78), comp(631, 80), comp(631, 81), comp(631, 79), 50, -1 as dbrow);
    IF_SETNPCMODEL(26126 as npc, comp(631, 76));
    IF_SETMODELANGLE(0, 0, 0, 0, 0, 550, comp(631, 76));
    IF_SETMODELANIM(18019 as seq, comp(631, 76));
    IF_SETNPCMODEL(21799 as npc, comp(631, 77));
    IF_SETMODELANGLE(0, 0, 0, 0, 0, 300, comp(631, 77));
    IF_SETMODELANIM(27477 as seq, comp(631, 77));
    return;
}