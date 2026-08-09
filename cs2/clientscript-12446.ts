//
function script12446(): void {
    if (((script7942() == 1) && (HAS_NXT() == 1))) {
        stack(callback(script12449, -2147483637, -2147483638));
        stack(96796688);
        IF_SETONGAMEPADBUTTON();
        stack(callback(script12450, -2147483637, -2147483638));
        stack(96796688);
        IF_SETONGAMEPADAXIS();
        stack(callback(script12451, -2147483637, -2147483638));
        stack(96796688);
        IF_SETONGAMEPADTRIGGER();
        stack(callback(script12449, -2147483637, 1));
        stack(96796688);
        IF_SETONGAMEPADBUTTONHELD();
    };
    return;
}