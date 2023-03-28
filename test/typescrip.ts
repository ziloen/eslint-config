// eslint 应当报错
const a = `${[]}`
const b = name



// format
const semi = ''
const noExtraSemi = ''

const indent=2+ 90|0

const iii = ~~indent

const d = ''
const g = ""

let o,
    p,
      q, 
    r

const m = () => {}

const mm = m ()

if (12 + indent) {

}else{

}

const ooo:string[] = []
type A = (name: string) => string

const oo = {a: 12, b:[]}

function fn1(){     }
function fn2 (){
  
}

const fn3 = async () => {}
const fn4 =() => {}

const t = function() {
  
}

const bbb = [function foo() {
  fn1 ();
}];

const arr1 = [1, 2, 3, 4 ]

const arr2 = [1, 2 ,   3];

const fn45: (a: any) => any = /*  */(a) => {return 123}

export {     }


interface G {  a: string; b: string }

// not working https://github.com/typescript-eslint/typescript-eslint/issues/1824
function TestGenericIndent<T extends Record<
string,
| string
| number
>>(a: T) {

}

type TestGenericSpace<T=true> = T