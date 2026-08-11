//[clientscript,stockmarket_onload]
function script585(): void {
    IF_SETONVARTRANSMIT(callback(script588, 135, 1), comp(105, 130));  // stockmarket:choosesell5_button_over_layer ?
    stack(callback(script586));
    stack(6881281);
    IF_SETONSTOCKTRANSMIT();
    IF_SETONVARTRANSMIT(callback(script11743, 429, 431, 2), comp(105, 124));  // stockmarket:choosebuy5_button_over_layer ?
    IF_SETONINVTRANSMIT(callback(script11743, 540, 1), comp(105, 124));  // stockmarket:choosebuy5_button_over_layer ?
    script8841(82, 1);
    if ((MAP_LANG() == 1)) {
        script15026();
    };
    script20891();
    script621();
    var string0 = "Item prices";
    var string1 = "<sprite=1158><col=FFFFFF> Market price</col> is the value of an item, determined by long-term trends in player trades.<br><br><sprite=14929><col=FFFFFF> Recent trading price</col> is an average value of the last 10 trades of an item. This will change much more rapidly than market price and is generally less reliable. It is recommended to use it as an additional information source rather than a set price.";
    script14740(string0, string1, 6881428, -1);
    return;
}