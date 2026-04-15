//
function script17676(int0: struct): string {
    var string0 = "";
    if ((struct_getparam(int0, 8116) == true)) {
        string0 = script11088(int0);
    } else {
        string0 = struct_getparam(int0, 2794);
        if (((varbitplayer_27168 == 1) && (strcmp(struct_getparam(int0, 7998), "") != 0))) {
            string0 = strconcat(string0, `<br>${struct_getparam(int0, 7998)}`);
        } else if ((strcmp(struct_getparam(int0, 2795), "") != 0)) {
            string0 = strconcat(string0, `<br>${struct_getparam(int0, 2795)}`);
        };
    };
    if ((struct_getparam(int0, 8119) == true)) {
        string0 = `${string0}${script11087(int0)}`;
    };
    return string0;
}