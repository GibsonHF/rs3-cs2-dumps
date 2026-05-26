//
function script15008(int0: number): void {
    var int1 = 15;
    if ((int0 == 0)) {
        while ((int1 > 0)) {
            script2647(int1, 0);
            int1 = (int1 - 1);
        };
    } else {
        while ((int1 > 0)) {
            if ((script2408(int1) == 1)) {
                script2647(int1, 1);
            };
            int1 = (int1 - 1);
        };
    };
    return;
}