
var longestMountain = function(A) {
    if( A == null || A.length <3) 
            return 0; 
        var ans = 0; 
        for(var i = 1; i < A.length - 1; i++ ) {
            if(A[i] > A[i-1] && A[i] > A[i+1]) {  // i is a peak
                var left = i -1; 
                while(left > 0 && A[left-1] < A[left])
                    left--;
                
                var right= i+1; 
                while(right < A.length - 1 && A[right + 1] < A[right])
                    right++;
                
                ans = Math.max(ans, right - left +1);
                
            }
        }
        return ans;
};
console.log(longestMountain([2,2,2]));