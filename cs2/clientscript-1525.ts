//
function script1525(int0: int): string {
    if ((int0 <= 0)) {
        script12478(`$quest_id=${inttostring(int0, 10)}.`);
        return "";
    };
    return script2103(enum_getvalue(0, 3, 2252 as cs2enum, int0));
}