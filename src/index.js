module.exports = function check(str, bracketsConfig) {
    if (str.length % 2 == 1) {
        return false;
    }
    var result = new Array();
    for (var i = 0; i <= str.length - 1; i++) {
        var find = false;
        for (var j = 0; j < bracketsConfig.length; j++) {
            if (str[i] == bracketsConfig[j][0]) {
                find = true;
                if (bracketsConfig[j][0] == bracketsConfig[j][1]) {
                    if (result[result.length - 1] == bracketsConfig[j][0]) {
                        result.pop();
                        break;
                    }
                }
                result.push(bracketsConfig[j][1]);
                break;
            }
        }
        if (!find) {
            if (result.length == 0 || str[i] != result[result.length - 1]) {
                return false;
            }
            result.pop();
        }
    }
    return result.length == 0 ? true : false;
};
