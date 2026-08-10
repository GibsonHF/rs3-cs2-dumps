//
function script21088(): void {
    if ((varbitplayer_61493 == 1)) {
        switch (int0) {
            case 19583: {
                stack("God Tier 1");
                return;
            }
            case 19584:
            case 19585:
            case 19586: {
                stack(`Tier ${inttostring(int1, 10)}`);
                return;
            }
            case 19587: {
                stack("God Tier 2");
                return;
            }
        };
    };
    stack(`Tier ${inttostring((int1 + 1), 10)}`);
    return;
}