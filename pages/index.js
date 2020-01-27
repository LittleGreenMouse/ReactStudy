@T
class User {

  constructor(name, age = 18) {
    this.name = name;
    this.age = age;
  }

}

// 用target获取被修饰的类
function T(target) {
  console.log(target);
  target.country = 'China';
}

console.log(User.country);
