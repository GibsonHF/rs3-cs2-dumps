//[clientscript,worldmap_toggleoverview]
function script1373(): void {
    if ((IF_GETHIDE(comp(1422, 34)) == true)) {  // worldmap_v2_ui:overviewframe
        script1374(1);
    } else {
        script1374(0);
    };
    return;
}