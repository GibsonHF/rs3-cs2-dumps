//[proc,worldmap_setzoom]
function script1372(int0: number, int1: number): void {
    var int2 = varclient_172;
    varclient_172 = int0;
    WORLDMAP_SETZOOM(varclient_172);
    varclient_172 = WORLDMAP_GETZOOM();
    IF_SETTEXT(`${inttostring(varclient_172, 10)}%`, comp(1422, 108));  // worldmap_v2_ui:zoom_level
    if (((int2 != int0) || (int1 == 1))) {
        script8104();
    };
    return;
}