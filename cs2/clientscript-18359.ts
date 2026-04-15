//
function script18359(): void {
    switch (MAP_LANG()) {
        case 0: {
            stack(25900);
            stack(83296258);
            IF_SETGRAPHIC();
            break;
        }
        case 1: {
            stack(25899);
            stack(83296258);
            IF_SETGRAPHIC();
            break;
        }
        case 2: {
            stack(25901);
            stack(83296258);
            IF_SETGRAPHIC();
            break;
        }
        case 3: {
            stack(25902);
            stack(83296258);
            IF_SETGRAPHIC();
            break;
        }
    };
    IF_SETHIDE(false, comp(1271, 0));
    IF_SETHIDE(true, comp(1271, 13));
    IF_SETTEXT("Win both brand-new and returning rewards!", comp(1271, 11));
    IF_SETNPCMODEL(30740 as npc, comp(1271, 4));
    IF_SETMODELANIM(36772 as seq, comp(1271, 4));
    IF_SETMODELANGLE(0, -10, 0, 1900, 0, 500, comp(1271, 4));
    IF_SETMODELLIGHTING(2000, 1024, 0, 255, 255, 255, 0, 0, 0, 3224 as material, comp(1271, 4));
    IF_SETNPCMODEL(30741 as npc, comp(1271, 7));
    IF_SETMODELANIM(36772 as seq, comp(1271, 7));
    IF_SETMODELANGLE(0, -10, 0, 1900, 0, 500, comp(1271, 7));
    IF_SETMODELLIGHTING(2000, 1024, 0, 255, 255, 255, 0, 0, 0, 3224 as material, comp(1271, 7));
    return;
}