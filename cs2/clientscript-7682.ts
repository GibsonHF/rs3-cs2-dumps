//
function script7682(int0: unknown_int): string {
    var string0 = "";
    var int1 = 0;
    var int2 = 0;
    var string1 = "";
    var int3 = 0;
    var int4 = 0;
    var int5 = 0;
    [int1, int2, string1, int3, int4] = script11608();
    if ((int1 == 1)) {
        return string1;
    };
    if ((varplayer_183 > 0)) {
        if ((int0 == 1)) {
            string0 = `${inttostring(varplayer_183, 10)} ${script7469()} left`;
        } else {
            string0 = `${inttostring(varplayer_183, 10)} left`;
        };
        string1 = script16093();
        if ((STRING_LENGTH(string1) > 0)) {
            string0 = strconcat(string0, `. ${string1}`);
        };
        string1 = script16095();
        if ((STRING_LENGTH(string1) > 0)) {
            string0 = strconcat(string0, `<br>Weakness: ${string1}`);
        };
        return string0;
    };
    if ((varbitplayer_9072 == 0)) {
        return `Talk to ${script7656(1)} for your first assignment`;
    };
    return `Task complete. Talk to ${script7656(script7155())} for a new assignment`;
}