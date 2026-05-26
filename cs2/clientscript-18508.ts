//
function script18508(): void {
    var int0 = script18493();
    var int1 = -1;
    var int2 = 0;
    var int3 = struct_getparam(int0, 9075);
    var int4 = -1;
    var int5 = -1;
    var int6 = script18496(int0);
    [int1, int2, int4, int5] = script18494(int0);
    if ((int4 != -1)) {
        IF_SETGRAPHIC(int5, 82116952);
    } else if ((int1 != -1)) {
        IF_SETOBJECT(int1, int2, 82116952);
    };
    if ((varbitplayer_55050 == 1)) {
        IF_SETHIDE(0, 82116953);
        IF_SETGRAPHIC(13165, 82116953);
    } else if ((varbitplayer_55049 >= int6)) {
        IF_SETHIDE(0, 82116953);
        IF_SETGRAPHIC(13166, 82116953);
    } else {
        IF_SETHIDE(1, 82116953);
    };
    return;
}