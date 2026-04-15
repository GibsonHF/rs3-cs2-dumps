//
function script13616(int0: struct, string0: string): string {
    var int1 = script6431();
    if ((((strcmp(struct_getparam(int0, 1274), "") != 0) || (strcmp(struct_getparam(int0, 8082), "") != 0)) && ((strcmp(struct_getparam(int0, 1275), "") != 0) || (strcmp(struct_getparam(int0, 8083), "") != 0)))) {
        if ((strcmp(string0, "") != 0)) {
            var string0 = strconcat(string0, "<br>");
        };
        if (((strcmp(struct_getparam(int0, 8082), "") != 0) && (int1 == true))) {
            string0 = strconcat(string0, `<img=7> ${struct_getparam(int0, 8082)}`);
        } else if ((strcmp(struct_getparam(int0, 1274), "") != 0)) {
            string0 = strconcat(string0, `<img=7> ${struct_getparam(int0, 1274)}`);
        };
        if (((strcmp(struct_getparam(int0, 8083), "") != 0) && (int1 == true))) {
            string0 = strconcat(string0, `<br><img=7> ${struct_getparam(int0, 8083)}`);
        } else if ((strcmp(struct_getparam(int0, 1275), "") != 0)) {
            string0 = strconcat(string0, `<br><img=7> ${struct_getparam(int0, 1275)}`);
        };
        if (((strcmp(struct_getparam(int0, 8084), "") != 0) && (int1 == true))) {
            string0 = strconcat(string0, `<br><img=7> ${struct_getparam(int0, 8084)}`);
        } else if ((strcmp(struct_getparam(int0, 1276), "") != 0)) {
            string0 = strconcat(string0, `<br><img=7> ${struct_getparam(int0, 1276)}`);
        };
        if (((strcmp(struct_getparam(int0, 8085), "") != 0) && (int1 == true))) {
            string0 = strconcat(string0, `<br><img=7> ${struct_getparam(int0, 8085)}`);
        } else if ((strcmp(struct_getparam(int0, 1277), "") != 0)) {
            string0 = strconcat(string0, `<br><img=7> ${struct_getparam(int0, 1277)}`);
        };
        if (((strcmp(struct_getparam(int0, 8086), "") != 0) && (int1 == true))) {
            string0 = strconcat(string0, `<br><img=7> ${struct_getparam(int0, 8086)}`);
        } else if ((strcmp(struct_getparam(int0, 1278), "") != 0)) {
            string0 = strconcat(string0, `<br><img=7> ${struct_getparam(int0, 1278)}`);
        };
        if (((strcmp(struct_getparam(int0, 8087), "") != 0) && (int1 == true))) {
            string0 = strconcat(string0, `<br><img=7> ${struct_getparam(int0, 8087)}`);
        } else if ((strcmp(struct_getparam(int0, 1279), "") != 0)) {
            string0 = strconcat(string0, `<br><img=7> ${struct_getparam(int0, 1279)}`);
        };
        if (((strcmp(struct_getparam(int0, 8088), "") != 0) && (int1 == true))) {
            string0 = strconcat(string0, `<br><img=7> ${struct_getparam(int0, 8088)}`);
        } else if ((strcmp(struct_getparam(int0, 1280), "") != 0)) {
            string0 = strconcat(string0, `<br><img=7> ${struct_getparam(int0, 1280)}`);
        };
        if (((strcmp(struct_getparam(int0, 8089), "") != 0) && (int1 == true))) {
            string0 = strconcat(string0, `<br><img=7> ${struct_getparam(int0, 8089)}`);
        } else if ((strcmp(struct_getparam(int0, 1281), "") != 0)) {
            string0 = strconcat(string0, `<br><img=7> ${struct_getparam(int0, 1281)}`);
        };
    } else if (((strcmp(struct_getparam(int0, 1274), "") != 0) || (strcmp(struct_getparam(int0, 8082), "") != 0))) {
        if ((strcmp(string0, "") != 0)) {
            string0 = strconcat(string0, "<br>");
        };
        string0 = strconcat(string0, "To Begin:<br>");
        if (((strcmp(struct_getparam(int0, 8082), "") != 0) && (int1 == true))) {
            string0 = strconcat(string0, struct_getparam(int0, 8082));
        } else if ((strcmp(struct_getparam(int0, 1274), "") != 0)) {
            string0 = strconcat(string0, struct_getparam(int0, 1274));
        };
    };
    if (((strcmp(struct_getparam(int0, 8081), "") != 0) && (int1 == true))) {
        if ((strcmp(string0, "") != 0)) {
            string0 = strconcat(string0, "<br><br>");
        };
        string0 = strconcat(string0, `Tip: ${struct_getparam(int0, 8081)}`);
    } else if ((strcmp(struct_getparam(int0, 2225), "") != 0)) {
        if ((strcmp(string0, "") != 0)) {
            string0 = strconcat(string0, "<br><br>");
        };
        string0 = strconcat(string0, `Tip: ${struct_getparam(int0, 2225)}`);
    };
    return string0;
}