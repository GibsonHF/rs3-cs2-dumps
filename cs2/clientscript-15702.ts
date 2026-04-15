//
function script15702(): void {
    var string0 = ESCAPE(GETCLIPBOARD());
    var string1 = "";
    if ((strcmp(string0, "") != 0)) {
        if ((STRING_LENGTH(string0) <= 6)) {
            if ((script15549(string0) == 0)) {
                varclient_4192 = string0;
                varclient_1099 = STRING_LENGTH(string0);
                script15700();
                script9824();
                return;
            };
            string1 = "Your clipboard contains characters other than numbers.";
        } else {
            string1 = "The content of your clipboard is too big to be pasted.";
        };
    } else {
        string1 = "There is nothing in your clipboard to be pasted.";
    };
    script10943(string1, comp(744, 159));
    return;
}