//[clientscript,worldmap_toggleoverview]
function script1373(): void {
    if ((IF_GETHIDE(comp(1422, 35)) == true)) {  // worldmap_v2_ui:overviewframe_bg
        script1374(1);
    } else {
        script1374(0);
    };
    return;
}