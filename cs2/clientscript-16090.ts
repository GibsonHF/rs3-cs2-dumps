//
function script16090(): string {
    if ((((varbitplayer_9072 == -1) || (varbitplayer_9068 == -1)) || (varplayer_185 == 0))) {
        return "No Task";
    };
    if ((((varbitplayer_525 > 0) || (varbitplayer_24968 == 1)) || (varbitplayer_44233 == 1))) {
        return "Special Assignment";
    };
    var string0 = script7469();
    if ((STRING_LENGTH(string0) > 0)) {
        return string0;
    };
    return "No Task";
}