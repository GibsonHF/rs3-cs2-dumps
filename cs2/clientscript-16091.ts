//
function script16091(): struct {
    if ((((varbitplayer_9072 == -1) || (varbitplayer_9068 == -1)) || (varplayer_185 == 0))) {
        return -1 as struct;
    };
    var int0 = enum_getvalue(0, 26, 1553 as cs2enum, varbitplayer_9072);
    if ((int0 == -1 as cs2enum)) {
        return -1 as struct;
    };
    return enum_getvalue(0, 73, int0, varbitplayer_9068);
}