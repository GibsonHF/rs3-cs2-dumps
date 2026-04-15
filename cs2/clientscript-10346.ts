//
function script10346(): void {
    script8841(53, 0);
    var int0 = 0;
    var int1 = STRING_LENGTH(varclient_4499);
    var string0 = "";
    var int2 = 0;
    if ((int1 != 0)) {
        while ((int0 < int1)) {
            string0 = SUBSTRING(varclient_4499, int0, (int0 + 1));
            if ((((strcmp(string0, "_") != 0) && (strcmp(string0, " ") != 0)) && (strcmp(string0, "-") != 0))) {
                [int2, int0] = [1, int1];
            };
            int0 = (int0 + 1);
        };
        if ((int2 == 1)) {
            RESUME_STRINGDIALOG(varclient_4499);
            return;
        };
        script10278(`${varclient_4499} is not a valid name.`);
    };
    ABORT_DIALOG();
    script675();
    varclient_4499 = "";
    return;
}