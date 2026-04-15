//
function script19106(): void {
    switch (MAP_LANG()) {
        case 0: {
            stack(34149);
            stack(75169890);
            IF_SETGRAPHIC();
            break;
        }
        case 1: {
            stack(34150);
            stack(75169890);
            IF_SETGRAPHIC();
            break;
        }
        case 2: {
            stack(34151);
            stack(75169890);
            IF_SETGRAPHIC();
            break;
        }
        case 3: {
            stack(34152);
            stack(75169890);
            IF_SETGRAPHIC();
            break;
        }
    };
    IF_SETNPCMODEL(31139 as npc, comp(1147, 103));
    IF_SETNPCMODEL(31140 as npc, comp(1147, 102));
    IF_SETNPCMODEL(31141 as npc, comp(1147, 101));
    IF_SETMODELANIM(18019 as seq, comp(1147, 103));
    IF_SETMODELANIM(18019 as seq, comp(1147, 102));
    IF_SETMODELANIM(18019 as seq, comp(1147, 101));
    script19104(1);
    return;
}