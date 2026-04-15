//
function script20320(int0: component, int1: component): unknown_int {
    if (((IF_FIND(int0) == 1) && (cc_getparam(9339) > 0))) {
        return 0;
    };
    var int2 = script20117(varplayer_12314);
    if ((script20132(int2) == 0)) {
        return 0;
    };
    var int3 = -1;
    if ((int0 == comp(1479, 19))) {
        int3 = script20169(varbitclient_58393, varbitclient_58395, varbitclient_58397, varbitclient_58399, 0);
    } else {
        int3 = script20168(dbrow_getfield(int2, 1335616, 0));
    };
    unk11023(int3, 1368144, 1);
    dbrow_findnext();
    var int4 = stack();
    var int5 = 0;
    var int6 = 0;
    if ((IF_FIND(int0) == 1)) {
        int6 = cc_getparam(9338);
    };
    while ((int4 != -1 as dbrow)) {
        if ((ACHIEVEMENT_REQSTATE(dbrow_getfield(int4, 1368096, 0)) != -1)) {
            int5 = (int5 + 1);
        };
        dbrow_findnext();
        int4 = stack();
    };
    if ((int5 != int6)) {
        IF_SETPARAM_INT(9340, IF_GETSCROLLY(int1), int0);
        if ((int0 == comp(1479, 19))) {
            IF_SETONRESIZE(callback(script20286), comp(1479, 5));
            IF_CALLONRESIZE(96927749);
        } else {
            IF_SETONRESIZE(callback(script20287), comp(1361, 5));
            IF_CALLONRESIZE(89194501);
        };
        return 1;
    };
    return 0;
}