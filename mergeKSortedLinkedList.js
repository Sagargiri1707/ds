/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    return helper(lists,0,lists.length-1)
};
var helper=(lists,start,end)=>{
    if(start===end)
        return lists[end]
    else{
        if(start > end)
            return null
        else
            {
                var mid= Math.floor((start+end)/2)
                var l1=helper(lists,start,mid)
                var l2=helper(lists,mid+1,end)
                return merge(l1,l2)
            }
    }
    
}

const merge=(l1,l2)=>{
    if(l1===null) return l2
    if(l2===null) return l1
     if(l1.val<l2.val)
         {
             l1.next=merge(l1.next,l2)
             return l1
         }
    else
         {
             l2.next=merge(l1,l2.next)
             return l2
         }
        
}