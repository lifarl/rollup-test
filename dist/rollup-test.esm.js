import { createElement } from 'react';

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css = ".foo{& p{color:green}}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0eWxlLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxLQUNFLElBQ0UsV0FDRixDQUNGIiwiZmlsZSI6InN0eWxlLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb28ge1xuICAmIHAge1xuICAgIGNvbG9yOiBncmVlbjtcbiAgfVxufSJdfQ== */";
styleInject(css);

const Foo = props => {
    return (createElement("div", { className: 'foo' },
        createElement("p", null, "Foo")));
};

var css$1 = ".bar{& p{color:red}}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0eWxlLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxLQUNFLElBQ0UsU0FDRixDQUNGIiwiZmlsZSI6InN0eWxlLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYXIge1xuICAmIHAge1xuICAgIGNvbG9yOiByZWQ7XG4gIH1cbn0iXX0= */";
styleInject(css$1);

const Bar = props => {
    return (createElement("div", { className: 'bar' },
        createElement("p", null, "Bar")));
};

export { Bar, Foo };
//# sourceMappingURL=rollup-test.esm.js.map
