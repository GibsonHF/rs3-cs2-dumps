//
function script21149(): void {
    var string1 = LOWERCASE(string0);
    varclient_8554 = CLIENTCLOCK();
    if ((STRING_LENGTH(script2332(string1, " ", "")) == 0)) {
        if ((STRING_LENGTH(varclient_8500) == 0)) {
            return;
        };
        string1 = "";
    } else if ((strcmp(string1, varclient_8500) == 0)) {
        return;
    };
    varclient_8500 = string1;
    varclient_8501 = 0;
    stack(int0);
    stack(-1);
    stack(0);
    script21143();
    return;
}