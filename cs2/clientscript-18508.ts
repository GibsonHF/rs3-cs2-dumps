//
function script18508(): void {
    var int0 = script18493();
    var int1 = -1 as obj;
    var int2 = 0;
    var int3 = struct_getparam(int0, 9075);
    var int4 = -1;
    var int5 = -1 as graphic;
    var int6 = script18496(int0);
    [int1, int2, int4, int5] = script18494(int0);
    if ((int4 != -1)) {
        IF_SETGRAPHIC(int5, comp(1253, 344));
    } else if ((int1 != -1 as obj)) {
        IF_SETOBJECT(int1, int2, comp(1253, 344));
    };
    if ((varbitplayer_55050 == 1)) {
        IF_SETHIDE(false, comp(1253, 345));
        IF_SETGRAPHIC(13165 as graphic, comp(1253, 345));
    } else if ((varbitplayer_55049 >= int6)) {
        IF_SETHIDE(false, comp(1253, 345));
        IF_SETGRAPHIC(13166 as graphic, comp(1253, 345));
    } else {
        IF_SETHIDE(true, comp(1253, 345));
    };
    return;
}