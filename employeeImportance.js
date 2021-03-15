/**
 * Definition for Employee.
 * function Employee(id, importance, subordinates) {
 *     this.id = id;
 *     this.importance = importance;
 *     this.subordinates = subordinates;
 * }
 */

/**
 * @param {Employee[]} employees
 * @param {number} id
 * @return {number}
 */
var GetImportance = function(employees, id) {
    var map=new Map()
    for(var i of employees){
         map.set(i[0],{val:i[1],ordinates:i[2]})
    }
     var {val,ordinates}=map.get(id)
    var vals=[]
    var findAllOrdinates=(ordinates)=>{
        if(ordinates.length===0) return
        while(ordinates.length!==0){
            var d=ordinates.pop()
            vals.push(d)
            findAllOrdinates( map.get(d).ordinates)
        }
    }
    findAllOrdinates(ordinates)
     var sum=val
    for(var i of vals){
        var data=map.get(i).val
        var ordinates=map.get(i).ordinates
        sum=sum+data
    }
    return sum
    
};

console.log(GetImportance([[1,5,[2,3]],[2,3,[4]],[3,4,[]],[4,1,[]]], 1));