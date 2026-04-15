//
function script15359(int0: category, int1: category, int2: int): void {
    var int3 = enum_getvalue(41, 26, 16076 as cs2enum, int0);
    varclient_6830 = (enum_getreverseindex(41, 0, int3, int1, 0) + 1);
    script15360(int2);
    if ((varplayer_9607 == -1 as achievement)) {
        script9577();
    };
    script15338(int0, int1);
    return;
}