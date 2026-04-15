//
function script19555(): void {
    if ((varbitplayer_45140 != 0)) {
        IF_TRIGGEROP(comp(1313, 117), -1, 1);
        script19561(0);
    };
    script10444();
    IF_SETHIDE(true, comp(1313, 72));
    script19526();
    script19519(varclient_6711, 1);
    varclient_6684 = true;
    varclient_2235 = comp(1313, 96);
    varclient_2236 = 8;
    varclient_2237 = 12;
    var string0 = "";
    IF_SETONTIMER(callback(script19556, string0, CLIENTCLOCK()), comp(1313, 93));
    script9833(86048864, 86048865, 86048866, 86048867, 86048869, 0, 0);
    IF_SETHIDE(0, 86048883);
    IF_SETPOSITION(0, 0, 2, 2, 86048883);
    script13993(86048883, -1, 28228, "Cancel Search");
    IF_SETONOP(callback(script19554), 86048885);
    return;
}