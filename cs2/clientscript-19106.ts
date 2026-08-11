//
function script19106(): void {
    switch (MAP_LANG()) {
        case 0: {
            IF_SETGRAPHIC(34149 as graphic, comp(1147, 98));  // trh199_overlay:title
            break;
        }
        case 1: {
            IF_SETGRAPHIC(34150 as graphic, comp(1147, 98));  // trh199_overlay:title
            break;
        }
        case 2: {
            IF_SETGRAPHIC(34151 as graphic, comp(1147, 98));  // trh199_overlay:title
            break;
        }
        case 3: {
            IF_SETGRAPHIC(34152 as graphic, comp(1147, 98));  // trh199_overlay:title
            break;
        }
    };
    IF_SETNPCMODEL(31139 as npc, comp(1147, 103));  // trh199_overlay:npc_outfit_1
    IF_SETNPCMODEL(31140 as npc, comp(1147, 102));  // trh199_overlay:npc_outfit_2
    IF_SETNPCMODEL(31141 as npc, comp(1147, 101));  // trh199_overlay:npc_outfit_3
    IF_SETMODELANIM(18019 as seq, comp(1147, 103));  // trh199_overlay:npc_outfit_1
    IF_SETMODELANIM(18019 as seq, comp(1147, 102));  // trh199_overlay:npc_outfit_2
    IF_SETMODELANIM(18019 as seq, comp(1147, 101));  // trh199_overlay:npc_outfit_3
    script19104(1);
    return;
}