if (!Array.prototype.last){
    Array.prototype.last = function(){
        return this[this.length - 1];
    };
};

if (!Array.prototype.first){
    Array.prototype.first = function(){
        return this[0];
    };
};

if (!Array.prototype.find) {
  Object.defineProperty(Array.prototype, 'find', {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function(predicate) {
      if (this == null) {
        throw new TypeError('Array.prototype.find called on null or undefined');
      }
      if (typeof predicate !== 'function') {
        throw new TypeError('predicate must be a function');
      }
      var list = Object(this);
      var length = list.length >>> 0;
      var thisArg = arguments[1];
      var value;

      for (var i = 0; i < length; i++) {
        value = list[i];
        if (predicate.call(thisArg, value, i, list)) {
          return value;
        }
      }
      return undefined;
    }
  });
};

if(!String.prototype.camelCase) {
  String.prototype.camelCase = function (delimiter) {
    if (!delimiter) {
      delimiter = ' ';
    }

    return this.split(delimiter).map(function(item,index){
      return (index === 0) ? item.toLowerCase() : item.capitalize();
    }).join('');
  };
};

if (typeof String.prototype.startsWith != 'function') {
  String.prototype.startsWith = function (str){
    return this.slice(0, str.length) == str;
  };
}

// Capitalize
String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.substring(1).toLowerCase();
}