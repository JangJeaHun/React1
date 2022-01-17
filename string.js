
// console.log(my_name.replace("webdesign","web"));





var my_name = new String("webdesign ux/ui course");
// console.log(my_name.search("ux"))
// console.log(my_name.slice(10,15));
// console.log(my_name.split(" "));
var words  = my_name.split(" ");
// console.log(my_name.length);

for(var word of words){
    console.log(word.replace(" ","").toUpperCase())
}