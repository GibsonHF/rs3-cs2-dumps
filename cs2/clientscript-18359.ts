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
    IF_SETHIDE(0, 83296256);
    IF_SETHIDE(1, 83296269);
    IF_SETTEXT("Win both brand-new and returning rewards!", 83296267);
    IF_SETNPCMODEL(30740, 83296260);
    IF_SETMODELANIM(36772, 83296260);
    IF_SETMODELANGLE(0, -10, 0, 1900, 0, 500, 83296260);
    IF_SETMODELLIGHTING(2000, 1024, 0, 255, 255, 255, 0, 0, 0, 3224, 83296260);
    IF_SETNPCMODEL(30741, 83296263);
    IF_SETMODELANIM(36772, 83296263);
    IF_SETMODELANGLE(0, -10, 0, 1900, 0, 500, 83296263);
    IF_SETMODELLIGHTING(2000, 1024, 0, 255, 255, 255, 0, 0, 0, 3224, 83296263);
    return;
}