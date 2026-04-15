//
function script7683(int0: unknown_int): string {
    var string0 = "";
    var string1 = "";
    if ((varbitplayer_22902 > 0)) {
        if ((int0 == 1)) {
            string0 = `${inttostring(varbitplayer_22902, 10)} ${script14060()} left`;
        } else {
            string0 = `${inttostring(varbitplayer_22902, 10)} left`;
        };
        string1 = script16086();
        if ((STRING_LENGTH(string1) > 0)) {
            string0 = strconcat(string0, `<br>Weakness: ${string1}`);
        };
        return string0;
    };
    return "Task complete. Please return to Death for a new assignment";
}