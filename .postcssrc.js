// ESM(Ecma Script Module, 자바스크립트의 표준 명칭)
// ESM 방식이 import, export를 사용
// ESM은 브라우저에서 사용하는 방식

// Node.js는 ESM을 지원하지 않고 CommonJS를 지원
// CommonJS는 Node.js에서 동작하는 방식
// 그래서 Node.js 환경에서는 import, export가 아닌
// require(), module.exports를 사용
// js는 브라우저에서 동작하는 개념이 있고, Node.js에서 동작하는 개념이 있다.

// .postcssrc.js 파일은 번들러를 통해 변환하는 역할을 하기 때문에 브라우저에서 동작하지 않고 Node.js에서 동작

// import autoprefixer from "autoprefixer"; ESM 방식
// const autoprefixer = require("autoprefixer"); CommonJS 방식

// export {
//     plugins: [
//         autoprefixer
//     ]
// }
// ESM 방식
// module.exports = {
//     plugins: [
//         autoprefixer
//     ]
// }
// CommonJS 방식

// 간소화
module.exports = {
    plugins: [
        require("autoprefixer")
    ]
}