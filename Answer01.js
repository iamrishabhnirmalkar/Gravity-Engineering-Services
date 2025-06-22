function Dsa01(nums) {
  if (!Array.isArray(nums) || nums.length === 0) return 0;

  const dp = Array(nums.length).fill(1);
  let maxLen = 1;

  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
    maxLen = Math.max(maxLen, dp[i]);
  }

  return maxLen;
}

// Test
const nums = [10, 9, 2, 5, 3, 7, 101, 18];
console.log(Dsa01(nums));
