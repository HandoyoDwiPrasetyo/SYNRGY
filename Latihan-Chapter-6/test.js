// async function getRandomUsername() {
//   console.log("Mencari Username ...");
//   return "Sabrina";
// }

// getRandomUsername()
//   .then((username) => {
//     console.log("Username Ketemu");
//     console.log(username);
//   })
//   .catch((err) => {
//     console.log("Username gak ketemu");
//   });

const n = 10;
async function generateSequence(n) {
  if (n < 0) throw new Error("n must be positif");
  const sequence = [];
  for (let i = 1; i <= 10; i++) sequence.push(i);
  return sequence;
}

generateSequence(n).then(console.log);
