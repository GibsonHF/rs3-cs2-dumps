//
function script18359(): void {
    switch (MAP_LANG()) {
        case 0: {
            IF_SETGRAPHIC(25900 as graphic, comp(1271, 2));  // trh195:title
            break;
        }
        case 1: {
            IF_SETGRAPHIC(25899 as graphic, comp(1271, 2));  // trh195:title
            break;
        }
        case 2: {
            IF_SETGRAPHIC(25901 as graphic, comp(1271, 2));  // trh195:title
            break;
        }
        case 3: {
            IF_SETGRAPHIC(25902 as graphic, comp(1271, 2));  // trh195:title
            break;
        }
    };
    IF_SETHIDE(false, comp(1271, 0));  // trh195:splash_screen
    IF_SETHIDE(true, comp(1271, 13));  // trh195:universe
    IF_SETTEXT("Win both brand-new and returning rewards!", comp(1271, 11));  // trh195:splash_desc
    IF_SETNPCMODEL(30740 as npc, comp(1271, 4));  // trh195:npc_model_1
    IF_SETMODELANIM(36772 as seq, comp(1271, 4));  // trh195:npc_model_1
    IF_SETMODELANGLE(0, -10, 0, 1900, 0, 500, comp(1271, 4));  // trh195:npc_model_1
    IF_SETMODELLIGHTING(2000, 1024, 0, 255, 255, 255, 0, 0, 0, 3224 as material, comp(1271, 4));  // trh195:npc_model_1
    IF_SETNPCMODEL(30741 as npc, comp(1271, 7));  // trh195:npc_model_2
    IF_SETMODELANIM(36772 as seq, comp(1271, 7));  // trh195:npc_model_2
    IF_SETMODELANGLE(0, -10, 0, 1900, 0, 500, comp(1271, 7));  // trh195:npc_model_2
    IF_SETMODELLIGHTING(2000, 1024, 0, 255, 255, 255, 0, 0, 0, 3224 as material, comp(1271, 7));  // trh195:npc_model_2
    return;
}