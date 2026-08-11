//
function script15079(int0: number): void {
    script15082(int0);
    IF_SETHIDE(true, comp(654, 35));  // trh168:white_prize_layer
    IF_SETHIDE(true, comp(654, 29));  // trh168:yellow_prize_layer
    IF_SETHIDE(true, comp(654, 23));  // trh168:orange_prize_layer
    IF_SETHIDE(true, comp(654, 17));  // trh168:red_prize_layer
    IF_SETHIDE(true, comp(654, 11));  // trh168:purple_prize_layer
    IF_SETHIDE(true, comp(654, 5));  // trh168:black_prize_layer
    switch (int0) {
        case 1: {
            IF_SETHIDE(false, comp(654, 35));  // trh168:white_prize_layer
            break;
        }
        case 2: {
            IF_SETHIDE(false, comp(654, 29));  // trh168:yellow_prize_layer
            break;
        }
        case 3: {
            IF_SETHIDE(false, comp(654, 23));  // trh168:orange_prize_layer
            break;
        }
        case 4: {
            IF_SETHIDE(false, comp(654, 17));  // trh168:red_prize_layer
            break;
        }
        case 5: {
            IF_SETHIDE(false, comp(654, 11));  // trh168:purple_prize_layer
            break;
        }
        case 6: {
            IF_SETHIDE(false, comp(654, 5));  // trh168:black_prize_layer
            break;
        }
    };
    script13972(42860614, 42860614, 42261, "", script14467(1, int0));
    script13972(42860609, 42860609, 42261, "", script14467(2, int0));
    script13972(42860604, 42860604, 42261, "", script14467(3, int0));
    script13972(42860599, 42860599, 42261, "", script14467(4, int0));
    script13972(42860594, 42860594, 42261, "", script14467(5, int0));
    script13972(42860589, 42860589, 42261, "", script14467(6, int0));
    script15081(int0);
    return;
}