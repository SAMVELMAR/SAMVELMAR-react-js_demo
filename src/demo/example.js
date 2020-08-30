function hello(){
    console.log('hello from module');
}

function sum(a,b){
    console.log(a+b);
}
export {sum};

export const name = 'John';

export default hello;
