epic-rpg-editor cordova [![Build Status](https://travis-ci.org/psychomantys/epic-rpg-editor.png)](https://travis-ci.org/psychomantys/epic-rpg-editor)
=========================================================

O manual de algumas coisas que estamos usando e como usar essas tecnologias.


Begin
=========================================================

Sample tic tac toe html5 game for mobile device(android, iphone, windows phone...) with cordova.

Project features:

* Automate tasks with grunt
* Tests via phantom and jasmine
* Build aplication for mobile with cordova
* Deps resolve with npm
* Minify code with uglifyJS


Install Dependencies
=========================================================

Grunt (http://gruntjs.com/)
	https://github.com/devgeeks/grunt-init-cordova/blob/master/root/Gruntfile.js

* node.js
* npm install --save-dev

Maybe:

```shell
npm install -g grunt
npm install --save-dev
```

Third Party JavaScript library
---------------------------------------------------------

To re-install the third party JavaScript deps., execute:

```shell
grunt get_deps
```

If you execute ```npm install``` command before, the *npm* revolve this.

In present time, deps. are managed by volo.

Build application
=========================================================

Execute tests and deploy application:

```shell
grunt
```

How to use cordova
=========================================================

Cordova-cli(https://github.com/apache/cordova-cli)

Include sdks bin paths on PATH, and:

```shell
export PATH="${PATH}:./node_modules/.bin/"
```

Test application for android:

```shell
grunt debug:android
```

Test application for blackberry:

```shell
grunt debug:blackberry
```

Test application for ios:

```shell
grunt debug:ios
```

How to use jasmine test with phatom and syntax validation
=========================================================

Test: Jasmine (http://pivotal.github.io/jasmine/)

Execute syntax validation test:

```shell
grunt test_syntax
```

Execute unit test, TDD and BDD:

```shell
grunt test_tdd
```

Execute all tests:

```shell
grunt test
```

