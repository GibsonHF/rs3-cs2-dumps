//
function script6766(): void {
    switch (MAP_LANG()) {
        case 0: {
            IF_SETGRAPHIC(32498 as graphic, comp(631, 71));  // trh196_overlay:title
            break;
        }
        case 1: {
            IF_SETGRAPHIC(32499 as graphic, comp(631, 71));  // trh196_overlay:title
            break;
        }
        case 2: {
            IF_SETGRAPHIC(32500 as graphic, comp(631, 71));  // trh196_overlay:title
            break;
        }
        case 3: {
            IF_SETGRAPHIC(32501 as graphic, comp(631, 71));  // trh196_overlay:title
            break;
        }
    };
    IF_SETHIDE(false, comp(631, 0));  // trh196_overlay:splash_screen
    IF_SETHIDE(true, comp(631, 1));  // trh196_overlay:universe
    script16509(7060, 41353294, 41353296, 41353297, 41353295, 50, -1);
    IF_SETNPCMODEL(26126 as npc, comp(631, 76));  // trh196_overlay:npc_model_1
    IF_SETMODELANGLE(0, 0, 0, 0, 0, 550, comp(631, 76));  // trh196_overlay:npc_model_1
    IF_SETMODELANIM(18019 as seq, comp(631, 76));  // trh196_overlay:npc_model_1
    IF_SETNPCMODEL(21799 as npc, comp(631, 77));  // trh196_overlay:npc_model_2
    IF_SETMODELANGLE(0, 0, 0, 0, 0, 300, comp(631, 77));  // trh196_overlay:npc_model_2
    IF_SETMODELANIM(27477 as seq, comp(631, 77));  // trh196_overlay:npc_model_2
    return;
}