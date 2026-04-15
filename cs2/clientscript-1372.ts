//[proc,worldmap_setzoom]
function script1372(int0: int, int1: unknown_int): void {
    var int2 = varclient_172;
    varclient_172 = int0;
    WORLDMAP_SETZOOM(varclient_172);
    varclient_172 = WORLDMAP_GETZOOM();
    IF_SETTEXT(`${inttostring(varclient_172, 10)}%`, 93192300);
    if (((int2 != int0) || (int1 == 1))) {
        script8104();
    };
    return;
}