//
function script12146(): void {
    define_array[23](5);
    var int0 = 0;
    varbitplayer_30250 = 2;
    script12152();
    varbitclient_30264 = 0;
    varbitclient_30265 = 0;
    varbitclient_30266 = 0;
    varbitclient_30267 = 0;
    varbitclient_30268 = 0;
    IF_SETTEXT("Success! Looks like you're on the right track.", comp(1708, 97));
    IF_SETONTIMER(callback(script12143, 0, (CLIENTCLOCK() + 10)), comp(1708, 55));
    var int1 = (IF_GETY(111935507) - 65);
    IF_SETONTIMER(callback(script12147, -2147483645, int1), 111935507);
    script12128();
    return;
}