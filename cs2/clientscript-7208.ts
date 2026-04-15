//
function script7208(int0: component, string0: string): void {
    if (((STRING_LENGTH(string0) > 0) && (STRING_LENGTH(script2332(string0, " ", "")) > 0))) {
        if ((varclient_2236 == 7)) {
            RESUME_COUNTDIALOG(script7209(string0));
        } else if ((varclient_2236 == 11)) {
            RESUME_COUNTDIALOG_LONG(script17392(string0));
        } else if ((varclient_2236 == 9)) {
            RESUME_STRINGDIALOG(string0);
        };
    } else {
        switch (varclient_2235) {
            default: {
                break;
            }
        };
        ABORT_DIALOG();
        script10522(int0);
    };
    script378();
    script8841(11, 0);
    return;
}