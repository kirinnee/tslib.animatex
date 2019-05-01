# AnimateX

Extend native DOM Elements to allow for Fluent animation API

Source: [GitLab](https://gitlab.com/node-packages-kirin/animatex)
Mirror: [GitHub](https://github.com/kirinnee/tslib.animatex)

# Getting Started

Install via NPM 
```bash
$ npm i @kirinnee/animatex
```

or 

Install via Yarn
```bash
$ yarn add @kirinnee/animatex --prefer-offline
```

Using in browser

Attach scripts in `dist/` folder
```html
<script src="./dist/animatex.min.js"></script>
```

# Usage

Allows for extending the DOM Elements with [@kirinnee/animate](https://www.npmjs.com/package/@kirinnee/animate) installed. 

**On how to construct the animator, please click [here](https://github.com/kirinnee/tslib.animate#dependency)**

```ts
//Construct Asynchronous animator, where animator is the synchronous animator, refer to above.
let asyncAnimator: AsynchronousAnimator = new GSAPAsyncAnimator(animator);

//Construct instance of AnimateX and extend the primitives
let animX: AnimateX = new AnimX(asyncAnimator);
animX.ExtendPrimitives();
```

**To use it, use it like [@kirinnee/animate](https://www.npmjs.com/package/@kirinnee/animate), except with the DOM as the caller**

```ts
//Example
let element:Element = document.querySelector("#id");
element
    .X(0,100,{duration:1000})
    .Y(0,100,{duration:1000})
    .Blur(0,1,{duration:300});
```




## Contributing
Please read [CONTRIBUTING.md](CONTRIBUTING.MD) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning 
We use [SemVer](https://semver.org/) for versioning. For the versions available, see the tags on this repository.

## Authors
* [kirinnee](mailto:kirinnee@gmail.com) 

## License
This project is licensed under MIT - see the [LICENSE.md](LICENSE.MD) file for details