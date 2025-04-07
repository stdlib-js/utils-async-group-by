<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# groupByAsync

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Group values according to an indicator function.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->



<section class="usage">

## Usage

To use in Observable,

```javascript
groupByAsync = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/utils-async-group-by@umd/browser.js' )
```

To vendor stdlib functionality and avoid installing dependency trees for Node.js, you can use the UMD server build:

```javascript
var groupByAsync = require( 'path/to/vendor/umd/utils-async-group-by/index.js' )
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/utils-async-group-by@umd/browser.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope:

```html
<script type="text/javascript">
(function () {
    window.groupByAsync;
})();
</script>
```

#### groupByAsync( collection, \[options,] indicator, done )

Groups values according to an `indicator` function, which specifies which group an element in the input `collection` belongs to.

```javascript
function indicator( value, next ) {
    setTimeout( onTimeout, value );
    function onTimeout() {
        console.log( value );
        next( null, (value > 2000) );
    }
}

function done( error, result ) {
    if ( error ) {
        throw error;
    }
    console.log( result );
}

var arr = [ 3000, 2500, 1000 ];

groupByAsync( arr, indicator, done );
/* =>
    1000
    2500
    3000
    { 'true': [ 2500, 3000 ], 'false': [ 1000 ] }
*/
```

The function accepts the following `options`:

-   **limit**: the maximum number of pending invocations at any one time. Default: `infinity`.
-   **series**: boolean indicating whether to sequentially invoke the `indicator` function for each `collection` element. If `true`, the function sets `options.limit=1`. Default: `false`.
-   **returns**: specifies the output format. If the option equals `'values'`, the function returns group results as element values. If the option equals `'indices'`, the function returns group results as element indices. If the option equals `'*'`, the function returns group results as both element indices and values. Default: `'values'`.
-   **thisArg**: the execution context for `indicator`.

By default, the function returns group results as element values. To return element indices, set the `returns` option to `'indices'`.

```javascript
function indicator( value, next ) {
    setTimeout( onTimeout, value );
    function onTimeout() {
        console.log( value );
        next( null, (value > 2000) );
    }
}

function done( error, result ) {
    if ( error ) {
        throw error;
    }
    console.log( result );
}

var arr = [ 3000, 2500, 1000 ];

var opts = {
    'returns': 'indices'
};
groupByAsync( arr, opts, indicator, done );
/* =>
    1000
    2500
    3000
    { 'true': [ 1, 0 ], 'false': [ 2 ] }
*/
```

To return index-value pairs, set the `returns` option to `'*'`.

```javascript
function indicator( value, next ) {
    setTimeout( onTimeout, value );
    function onTimeout() {
        console.log( value );
        next( null, (value > 2000) );
    }
}

function done( error, result ) {
    if ( error ) {
        throw error;
    }
    console.log( result );
}

var arr = [ 3000, 2500, 1000 ];

var opts = {
    'returns': '*'
};
groupByAsync( arr, opts, indicator, done );
/* =>
    1000
    2500
    3000
    { 'true': [ [ 1, 2500 ], [ 0, 3000 ] ], 'false': [ [ 2, 1000 ] ] }
*/
```

By default, all elements are processed concurrently, which means that the function does **not** guarantee completion order. To process each `collection` element sequentially, set the `series` option to `true`.

```javascript
function indicator( value, next ) {
    setTimeout( onTimeout, value );
    function onTimeout() {
        console.log( value );
        next( null, (value > 2000) );
    }
}

function done( error, result ) {
    if ( error ) {
        throw error;
    }
    console.log( result );
}

var arr = [ 3000, 2500, 1000 ];

var opts = {
    'series': true
};

groupByAsync( arr, opts, indicator, done );
/* =>
    3000
    2500
    1000
    { 'true': [ 3000, 2500 ], 'false': [ 1000 ] }
*/
```

To limit the maximum number of pending function invocations, set the `limit` option.

```javascript
function indicator( value, next ) {
    setTimeout( onTimeout, value );
    function onTimeout() {
        console.log( value );
        next( null, (value > 2000) );
    }
}

function done( error, result ) {
    if ( error ) {
        throw error;
    }
    console.log( result );
}

var arr = [ 3000, 2500, 1000 ];

var opts = {
    'limit': 2
};

groupByAsync( arr, opts, indicator, done );
/* =>
    2500
    3000
    1000
    { 'true': [ 2500, 3000 ], 'false': [ 1000 ] }
*/
```

To set the execution context of the `indicator` function, set the `thisArg` option.

```javascript
function indicator( value, next ) {
    this.count += 1;
    setTimeout( onTimeout, value );
    function onTimeout() {
        next( null, (value > 2000) );
    }
}

var arr = [ 3000, 2500, 1000 ];

var context = {
    'count': 0
};

var opts = {
    'thisArg': context
};

groupByAsync( arr, opts, indicator, done );

function done( error, result ) {
    if ( error ) {
        throw error;
    }
    console.log( result );
    // => { 'true': [ 2500, 3000 ], 'false': [ 1000 ] }

    console.log( context.count );
    // => 3
}
```

When invoked, the `indicator` function is provided a maximum of four arguments:

-   **value**: collection value.
-   **index**: collection index.
-   **collection**: the input `collection`.
-   **next**: a callback which should be called once the `indicator` function has finished processing a collection `value`.

The actual number of provided arguments depends on function `length`. If the `indicator` function accepts two arguments, the `indicator` function is provided `value` and `next`. If the `indicator` function accepts three arguments, the `indicator` function is provided `value`, `index`, and `next`. For every other `indicator` function signature, the `indicator` function is provided all four arguments.

```javascript
function indicator( value, i, collection, next ) {
    console.log( 'collection: %s. %d: %d', collection.join( ',' ), i, value );
    setTimeout( onTimeout, value );
    function onTimeout() {
        console.log( value );
        next( null, (value > 2000) );
    }
}

function done( error, result ) {
    if ( error ) {
        throw error;
    }
    console.log( result );
}

var arr = [ 3000, 2500, 1000 ];

groupByAsync( arr, indicator, done );
/* =>
    collection: 3000,2500,1000. 0: 3000
    collection: 3000,2500,1000. 1: 2500
    collection: 3000,2500,1000. 2: 1000
    1000
    2500
    3000
    { 'true': [ 2500, 3000 ], 'false': [ 1000 ] }
*/
```

#### groupByAsync.factory( \[options,] indicator )

Returns a function which invokes an `indicator` function once for each element in a `collection`.

```javascript
function indicator( value, next ) {
    setTimeout( onTimeout, value );
    function onTimeout() {
        console.log( value );
        next( null, (value > 2000) );
    }
}

function done( error, result ) {
    if ( error ) {
        throw error;
    }
    console.log( result );
}

var f = groupByAsync.factory( indicator );

var arr1 = [ 3000, 2500, 1000 ];

f( arr1, done );
/* =>
    1000
    2500
    3000
    { 'true': [ 2500, 3000 ], 'false': [ 1000 ] }
*/

var arr2 = [ 300, 250, 100 ];

f( arr2, done );
/* =>
    100
    250
    300
    { 'false': [ 100, 250, 300 ] }
*/
```

The function accepts the same `options` as `groupByAsync()`.

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   A `collection` may be either an [`Array`][mdn-array], [`Typed Array`][mdn-typed-array], or an array-like [`Object`][mdn-object] (excluding `strings` and `functions`).

-   If a provided function calls the `next` callback with a truthy `error` argument, the function suspends execution and immediately calls the `done` callback for subsequent `error` handling.

-   The function does **not** support dynamic `collection` resizing.

-   The function does **not** skip `undefined` elements.

-   If provided an empty `collection`, the function calls the `done` callback with an empty `object` for the group results.

-   **Neither** `groupByAsync` nor the function returned by the `factory` method **guarantee** asynchronous execution. To guarantee asynchrony, wrap the `done` callback in a function which either executes at the end of the current stack (e.g., `nextTick`) or during a subsequent turn of the event loop (e.g., `setImmediate`, `setTimeout`).

-   The `group` returned by an `indicator` function should be a value which can be serialized as an `object` key. As a counterexample,

    ```javascript
    function indicator( value, next ) {
        setTimeout( onTimeout, value );
        function onTimeout() {
            console.log( value );
            next( null, {} );
        }
    }

    function done( error, result ) {
        if ( error ) {
            throw error;
        }
        console.log( result );
    }

    var arr = [ 3000, 2500, 1000 ];

    groupByAsync( arr, indicator, done );
    /* =>
        1000
        2500
        3000
        { '[object Object]': [ 1000, 2500, 3000 ] }
    */
    ```

    while each group identifier is unique, all collection elements resolve to the same group because each group identifier serializes to the same string.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="text/javascript">
(function () {
var resolve = require( 'path' ).resolve;
var readFile = require( '@stdlib/fs-read-file' );
var groupByAsync = require( '@stdlib/utils-async-group-by' );

var files = [
    resolve( __dirname, 'package.json' ),
    resolve( __dirname, 'README.md' ),
    resolve( __dirname, 'beep.boop.md' )
];

function done( error, result ) {
    if ( error ) {
        throw error;
    }
    console.log( result );
}

function indicator( file, next ) {
    var opts = {
        'encoding': 'utf8'
    };
    readFile( file, opts, onFile );

    function onFile( error ) {
        if ( error ) {
            return next( null, 'nonreadable' );
        }
        next( null, 'readable' );
    }
}

groupByAsync( files, indicator, done );

})();
</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/utils-async/bifurcate-by`][@stdlib/utils/async/bifurcate-by]</span><span class="delimiter">: </span><span class="description">split values into two groups according to a predicate function.</span>
-   <span class="package-name">[`@stdlib/utils-async/count-by`][@stdlib/utils/async/count-by]</span><span class="delimiter">: </span><span class="description">group values according to an indicator function and return group counts.</span>
-   <span class="package-name">[`@stdlib/utils-group-by`][@stdlib/utils/group-by]</span><span class="delimiter">: </span><span class="description">group values according to an indicator function.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2025. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/utils-async-group-by.svg
[npm-url]: https://npmjs.org/package/@stdlib/utils-async-group-by

[test-image]: https://github.com/stdlib-js/utils-async-group-by/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/utils-async-group-by/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/utils-async-group-by/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/utils-async-group-by?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/utils-async-group-by.svg
[dependencies-url]: https://david-dm.org/stdlib-js/utils-async-group-by/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/utils-async-group-by/tree/deno
[deno-readme]: https://github.com/stdlib-js/utils-async-group-by/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/utils-async-group-by/tree/umd
[umd-readme]: https://github.com/stdlib-js/utils-async-group-by/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/utils-async-group-by/tree/esm
[esm-readme]: https://github.com/stdlib-js/utils-async-group-by/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/utils-async-group-by/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/utils-async-group-by/main/LICENSE

[mdn-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

[mdn-object]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object

<!-- <related-links> -->

[@stdlib/utils/async/bifurcate-by]: https://github.com/stdlib-js/utils-async-bifurcate-by/tree/umd

[@stdlib/utils/async/count-by]: https://github.com/stdlib-js/utils-async-count-by/tree/umd

[@stdlib/utils/group-by]: https://github.com/stdlib-js/utils-group-by/tree/umd

<!-- </related-links> -->

</section>

<!-- /.links -->
